// CAP DROIT — Réviser le droit, de la L1 au CRFPA
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Linking, TextInput, Platform, SafeAreaView, StatusBar, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { C, SOMBRE, Page, H1, H2, Sub, Card, Btn, Back, Tag, Chip, Chips, SearchBox, Bar, Notice, Row, norm, u } from './ui';
import { MATIERES, NIVEAUX, FICHES, CODES, ARTICLES, ARRETS, QCM, CAS, METHODES, LEXIQUE, ADAGES, DOSSIERS, GRILLE_NDS, SUJETS_GO, QUESTIONS_JURY, GRILLE_GO, COMPETENCES, MAJ, RELU } from './data';
import type { Fiche, Article, Arret, Question, CasPratique, Methode, Niveau } from './types';
import { AuthGate, useSync, Signaler, Compte, CLOUD_OK, demanderTuteur, estAdmin, listerSignalements, marquerSignalement, type User } from './cloud';

// ---------- état sauvegardé ----------
type St = {
  fav: Record<string, 1>;
  lu: Record<string, number>;
  maitrise: Record<string, 1>;
  notes: Record<string, string>;
  qTot: number;
  qOk: number;
  parM: Record<string, [number, number]>;
  erreurs: string[];
  casDone: Record<string, number>;
  jours: string[];
  examBest: number;
  nds?: Record<string, string>;
  go?: number;
  carnet?: { stages: { id: string; service: string; periode: string; notes: string }[]; gestes: Record<string, number> };
  niveau: Niveau | 'tous';
  box: Record<string, number>;
  due: Record<string, string>;
  maj?: number;
};
const VIDE: St = { fav: {}, lu: {}, maitrise: {}, notes: {}, qTot: 0, qOk: 0, parM: {}, erreurs: [], casDone: {}, jours: [], examBest: 0, niveau: 'tous', box: {}, due: {} };
const KEY = 'capd:state';
const today = () => new Date().toISOString().slice(0, 10);

const ficheById = (id: string) => FICHES.find((f) => f.id === id);
const artById = (id: string) => ARTICLES.find((a) => a.id === id);
const arretById = (id: string) => ARRETS.find((a) => a.id === id);
const matById = (id: string) => MATIERES.find((m) => m.id === id);
const codeNom = (id: string) => CODES.find((c) => c.id === id)?.court || id;
const qKey = (q: Question) => q.m + ':' + QCM.indexOf(q);

function shuffle<T>(a: T[]): T[] {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

// Mélange l'ordre des réponses (la bonne réponse change de place à chaque fois)
function melanger<T extends { c: string[]; a: number | number[] }>(q: T): T {
  const ordre = shuffle(q.c.map((_, i) => i));
  const a = Array.isArray(q.a) ? q.a.map((x) => ordre.indexOf(x)).sort((x, y) => x - y) : ordre.indexOf(q.a);
  return { ...q, c: ordre.map((i) => q.c[i]), a };
}

// QCM générés automatiquement à partir des articles (quel article dit quoi)
function qcmArticles(n: number, code?: string): Question[] {
  const pool = ARTICLES.filter((a) => !code || a.code === code);
  return shuffle(pool)
    .slice(0, n)
    .map((a) => {
      const autres = shuffle(ARTICLES.filter((b) => b.code === a.code && b.id !== a.id && b.titre !== a.titre)).slice(0, 3);
      const choix = shuffle([a, ...autres]);
      return {
        q: `Que prévoit l'article ${a.num} ${codeNom(a.code)} ?`,
        c: choix.map((x) => x.titre),
        a: choix.indexOf(a),
        e: a.texte.length > 260 ? a.texte.slice(0, 260) + '…' : a.texte,
        m: 'articles',
      };
    });
}

function qcmLexique(n: number): Question[] {
  return shuffle(LEXIQUE)
    .slice(0, n)
    .map((t) => {
      const autres = shuffle(LEXIQUE.filter((x) => x.t !== t.t)).slice(0, 3);
      const choix = shuffle([t, ...autres]);
      return { q: `Que signifie « ${t.t} » ?`, c: choix.map((x) => x.d), a: choix.indexOf(t), e: `${t.t} : ${t.d}`, m: 'lexique' };
    });
}

// ---------- application ----------
type Route =
  | { s: 'home' }
  | { s: 'cours' }
  | { s: 'matiere'; id: string }
  | { s: 'fiche'; id: string }
  | { s: 'codes' }
  | { s: 'article'; id: string }
  | { s: 'arrets' }
  | { s: 'arret'; id: string }
  | { s: 'train' }
  | { s: 'qcm'; titre: string; list: Question[]; exam?: boolean }
  | { s: 'caslist' }
  | { s: 'cas'; id: string }
  | { s: 'outils' }
  | { s: 'methodes' }
  | { s: 'methode'; id: string }
  | { s: 'lexique' }
  | { s: 'adages' }
  | { s: 'delais' }
  | { s: 'normes' }
  | { s: 'juridictions' }
  | { s: 'favoris' }
  | { s: 'flashmenu' }
  | { s: 'flash'; deck: string }
  | { s: 'notes' }
  | { s: 'progression' }
  | { s: 'reglages' }
  | { s: 'apropos' }
  | { s: 'compte' }
  | { s: 'carnet' }
  | { s: 'tuteur' }
  | { s: 'admin' }
  | { s: 'grands' }
  | { s: 'crfpa' }
  | { s: 'ndslist' }
  | { s: 'nds'; id: string }
  | { s: 'grandoral' };

const TABS: { id: string; label: string; ic: string; root: Route }[] = [
  { id: 'home', label: 'Accueil', ic: '⌂', root: { s: 'home' } },
  { id: 'cours', label: 'Cours', ic: '§', root: { s: 'cours' } },
  { id: 'outils', label: 'Outils', ic: '☰', root: { s: 'outils' } },
  { id: 'train', label: 'Réviser', ic: '✓', root: { s: 'train' } },
  { id: 'grands', label: 'Arrêts', ic: '🏛', root: { s: 'grands' } },
  { id: 'progres', label: 'Progrès', ic: '◔', root: { s: 'progression' } },
];

export default function Root() {
  return <AuthGate>{(user, sortir) => <MainApp key={user?.id || 'local'} user={user} sortir={sortir} />}</AuthGate>;
}

function MainApp({ user, sortir }: { user: User | null; sortir: () => void }) {
  const cle = user ? KEY + ':' + user.id : KEY;
  const [st, setSt] = useState<St>(VIDE);
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState('home');
  const [stack, setStack] = useState<Route[]>([{ s: 'home' }]);

  useEffect(() => {
    (async () => {
      try {
        const raw = (await AsyncStorage.getItem(cle)) || (user ? await AsyncStorage.getItem(KEY) : null);
        if (raw) setSt({ ...VIDE, ...JSON.parse(raw) });
      } catch {}
      setReady(true);
    })();
  }, []);

  const save = (f: (s: St) => St) =>
    setSt((prev) => {
      const n = f(prev);
      const d = today();
      const n1 = n.jours.includes(d) ? n : { ...n, jours: [...n.jours, d].slice(-60) };
      const n2 = { ...n1, maj: Date.now() };
      AsyncStorage.setItem(cle, JSON.stringify(n2)).catch(() => {});
      return n2;
    });

  const sync = useSync(user, st, ready, (t) => {
    const n = { ...VIDE, ...t };
    AsyncStorage.setItem(cle, JSON.stringify(n)).catch(() => {});
    setSt(n);
  });

  const route = stack[stack.length - 1];
  const go = (r: Route) => setStack((s) => [...s, r]);
  const back = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
  const switchTab = (id: string) => {
    const t = TABS.find((x) => x.id === id) || TABS[0];
    setTab(id);
    setStack([t.root]);
  };

  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (stack.length > 1) {
        back();
        return true;
      }
      if (tab !== 'home') {
        switchTab('home');
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [stack, tab]);

  const openFiche = (id: string) => {
    if (ficheById(id)) go({ s: 'fiche', id });
  };
  const openArt = (id: string) => {
    if (artById(id)) go({ s: 'article', id });
  };
  const openArret = (id: string) => {
    if (arretById(id)) go({ s: 'arret', id });
  };
  const startQcm = (titre: string, list: Question[], exam?: boolean) => {
    const prep = list.map((q) => ({ ...melanger(q), k: QCM.includes(q) ? qKey(q) : undefined }));
    if (prep.length) go({ s: 'qcm', titre, list: prep, exam });
  };

  if (!ready) return <View style={{ flex: 1, backgroundColor: C.bg }} />;

  const P = { st, save, go, back, openFiche, openArt, openArret, startQcm, switchTab, user, sortir, sync, racine: stack.length === 1 };
  let screen: any = null;
  switch (route.s) {
    case 'home': screen = <Home {...P} />; break;
    case 'cours': screen = <Cours {...P} />; break;
    case 'matiere': screen = <MatiereView {...P} id={route.id} />; break;
    case 'fiche': screen = <FicheView {...P} id={route.id} />; break;
    case 'codes': screen = <Codes {...P} />; break;
    case 'article': screen = <ArticleView {...P} id={route.id} />; break;
    case 'arrets': screen = <Arrets {...P} />; break;
    case 'arret': screen = <ArretView {...P} id={route.id} />; break;
    case 'train': screen = <Train {...P} />; break;
    case 'qcm': screen = <QcmRun key={stack.length + route.titre} {...P} titre={route.titre} list={route.list} exam={route.exam} />; break;
    case 'caslist': screen = <CasList {...P} />; break;
    case 'cas': screen = <CasView key={route.id} {...P} id={route.id} />; break;
    case 'outils': screen = <Outils {...P} />; break;
    case 'methodes': screen = <Methodes {...P} />; break;
    case 'methode': screen = <MethodeView {...P} id={route.id} />; break;
    case 'lexique': screen = <Lexique {...P} />; break;
    case 'adages': screen = <Adages {...P} />; break;
    case 'delais': screen = <Delais {...P} />; break;
    case 'normes': screen = <Normes {...P} />; break;
    case 'juridictions': screen = <Juridictions {...P} />; break;
    case 'favoris': screen = <Favoris {...P} />; break;
    case 'flashmenu': screen = <FlashMenu {...P} />; break;
    case 'flash': screen = <FlashRun key={route.deck} {...P} deck={route.deck} />; break;
    case 'notes': screen = <MesNotes {...P} />; break;
    case 'progression': screen = <Progression {...P} />; break;
    case 'reglages': screen = <Reglages {...P} />; break;
    case 'apropos': screen = <APropos {...P} />; break;
    case 'compte': screen = <CompteView {...P} />; break;
    case 'carnet': screen = <Carnet {...P} />; break;
    case 'tuteur': screen = <Tuteur {...P} />; break;
    case 'admin': screen = <AdminView {...P} />; break;
    case 'grands': screen = <GrandsView {...P} />; break;
    case 'crfpa': screen = <Crfpa {...P} />; break;
    case 'ndslist': screen = <NdsList {...P} />; break;
    case 'nds': screen = <NdsView key={route.id} {...P} id={route.id} />; break;
    case 'grandoral': screen = <GrandOral {...P} />; break;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
      <StatusBar barStyle="light-content" backgroundColor="#1B2A4A" />
      <View style={[s.header, { paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) + 8 }]}>
        <View style={s.logo}><Text style={{ color: '#fff', fontWeight: '900', fontSize: 16 }}>⚖</Text></View>
        <Text style={s.brand}>CAP DROIT</Text>
        <Pressable onPress={() => { setTab('outils'); setStack([{ s: 'outils' }, { s: 'compte' }]); }} hitSlop={8} style={s.avatar}>
          <Text style={{ color: '#fff', fontWeight: '900' }}>{user ? user.email.slice(0, 1).toUpperCase() : '👤'}</Text>
        </Pressable>
      </View>
      <View key={String(stack.length) + route.s} style={{ flex: 1 }}>{screen}</View>
      <View style={s.tabbar}>
        {TABS.map((t) => {
          const on = t.id === tab;
          return (
            <Pressable key={t.id} onPress={() => switchTab(t.id)} style={s.tab} hitSlop={4}>
              <Text style={{ fontSize: 19, color: on ? C.red : C.muted }}>{t.ic}</Text>
              <Text style={{ fontSize: 11, fontWeight: on ? '800' : '600', color: on ? C.red : C.muted, marginTop: 2 }}>{t.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

type PP = {
  st: St;
  save: (f: (s: St) => St) => void;
  go: (r: Route) => void;
  back: () => void;
  openFiche: (id: string) => void;
  openArt: (id: string) => void;
  openArret: (id: string) => void;
  startQcm: (t: string, l: Question[], exam?: boolean) => void;
  switchTab: (id: string) => void;
  user: User | null;
  sortir: () => void;
  sync: string;
  racine: boolean;
};

// ---------- Accueil ----------
function serie(jours: string[]) {
  const set = new Set(jours);
  let n = 0;
  const d = new Date();
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (set.has(d.toISOString().slice(0, 10))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
function duJour<T>(arr: T[], sel: number): T {
  const d = new Date();
  const k = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate() + sel;
  return arr[k % arr.length];
}

function Home({ st, go, openFiche, openArt, openArret, startQcm, switchTab, user }: PP) {
  const lus = Object.keys(st.lu).length;
  const pct = st.qTot ? Math.round((100 * st.qOk) / st.qTot) : 0;
  const art = duJour(ARTICLES, 3);
  const arr = duJour(ARRETS, 7);
  const ad = duJour(ADAGES, 11);
  const derniere = Object.entries(st.lu).sort((a, b) => b[1] - a[1])[0];
  const fDer = derniere ? ficheById(derniere[0]) : null;
  return (
    <Page>
      <View style={s.hero}>
        <Text style={s.heroL}>{user ? 'Bon retour !' : 'Bienvenue'}</Text>
        <Text style={s.heroT}>Réviser le droit, de la L1 au CRFPA</Text>
        <View style={{ flexDirection: 'row', marginTop: 14, gap: 10 }}>
          <Stat v={String(lus)} l={`fiches lues / ${FICHES.length}`} />
          <Stat v={st.qTot ? pct + ' %' : '—'} l="réussite QCM" />
          <Stat v={String(serie(st.jours))} l="jours d'affilée" />
        </View>
      </View>

      {fDer && (
        <Card onPress={() => openFiche(fDer.id)}>
          <Text style={u.label}>Reprendre</Text>
          <Text style={{ color: C.ink, fontWeight: '800', fontSize: 16 }}>{fDer.titre} ›</Text>
          <Text style={{ color: C.muted, marginTop: 2 }}>{matById(fDer.m)?.nom}</Text>
        </Card>
      )}

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={{ flex: 1 }}>
          <Card onPress={() => startQcm('Défi du jour', shuffle(QCM).slice(0, 10))} style={{ backgroundColor: C.redL, borderColor: 'transparent' }}>
            <Text style={{ fontSize: 22 }}>🎯</Text>
            <Text style={{ fontWeight: '800', color: C.ink, marginTop: 4 }}>Défi du jour</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>10 questions mélangées</Text>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <Card onPress={() => go({ s: 'caslist' })} style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
            <Text style={{ fontSize: 22 }}>📂</Text>
            <Text style={{ fontWeight: '800', color: C.ink, marginTop: 4 }}>Cas pratiques</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>{CAS.length} sujets corrigés</Text>
          </Card>
        </View>
      </View>

      <H2>Article du jour</H2>
      <Card onPress={() => openArt(art.id)}>
        <Tag label={`Art. ${art.num} ${codeNom(art.code)}`} />
        <Text style={{ fontWeight: '800', color: C.ink, marginBottom: 4 }}>{art.titre}</Text>
        <Text style={{ color: C.ink, lineHeight: 21 }} numberOfLines={4}>{art.texte}</Text>
      </Card>

      <H2>Arrêt du jour</H2>
      <Card onPress={() => openArret(arr.id)}>
        <Tag label={`${arr.jur}, ${arr.date}`} color={C.red} />
        <Text style={{ fontWeight: '800', color: C.ink, marginBottom: 4 }}>{arr.nom}</Text>
        <Text style={{ color: C.ink, lineHeight: 21 }} numberOfLines={3}>{arr.apport}</Text>
      </Card>

      <H2>Adage du jour</H2>
      <Card style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
        <Text style={{ fontStyle: 'italic', fontWeight: '800', color: C.ink, fontSize: 16 }}>{ad.la}</Text>
        <Text style={{ color: C.ink, marginTop: 4 }}>« {ad.fr} »</Text>
        <Text style={{ color: C.muted, marginTop: 6, lineHeight: 19 }}>{ad.sens}</Text>
      </Card>

      <H2>Accès rapide</H2>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        {[
          ['📚', 'Cours', () => switchTab('cours')],
          ['⚖️', 'Codes', () => go({ s: 'codes' })],
          ['🏛', 'Grands arrêts', () => switchTab('grands')],
          ['🎓', 'Prépa CRFPA', () => go({ s: 'crfpa' })],
          ['📂', 'Cas pratiques', () => go({ s: 'caslist' })],
          ['📈', 'Progrès', () => switchTab('progres')],
          ['✍️', 'Méthodologie', () => go({ s: 'methodes' })],
          ['🃏', 'Révision express', () => go({ s: 'flashmenu' })],
          ['★', 'Favoris', () => go({ s: 'favoris' })],
        ].map(([ic, l, f]: any) => (
          <Pressable key={l} onPress={f} style={s.quick}>
            <Text style={{ fontSize: 20 }}>{ic}</Text>
            <Text style={{ color: C.ink, fontWeight: '700', fontSize: 12, marginTop: 4, textAlign: 'center' }}>{l}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={{ color: C.muted, fontSize: 11, marginTop: 18, lineHeight: 16 }}>
        Support de révision. Les textes évoluent : vérifiez toujours la version en vigueur sur Légifrance avant un examen ou une consultation.
      </Text>
    </Page>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: 10 }}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '900' }}>{v}</Text>
      <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>{l}</Text>
    </View>
  );
}

// ---------- Cours ----------
function Cours({ st, save, go, openFiche }: PP) {
  const [q, setQ] = useState('');
  const niv = st.niveau;
  const mats = MATIERES.filter((m) => niv === 'tous' || m.niv === niv);
  const res = q.trim().length > 1 ? FICHES.filter((f) => norm(f.titre + ' ' + f.intro + ' ' + f.parts.map((p) => p.t + ' ' + p.l.join(' ')).join(' ')).includes(norm(q.trim()))) : [];
  return (
    <Page>
      <H1>Cours</H1>
      <Sub>{FICHES.length} fiches dans {MATIERES.length} matières, avec les articles et les arrêts à connaître.</Sub>
      <SearchBox value={q} onChange={setQ} placeholder="Chercher une notion (ex. : vice caché)" />
      {q.trim().length > 1 ? (
        <>
          <Text style={u.label}>{res.length} résultat(s)</Text>
          {res.map((f) => (
            <FicheRow key={f.id} f={f} st={st} onPress={() => openFiche(f.id)} />
          ))}
        </>
      ) : (
        <>
          <Chips>
            <Chip label="Tous niveaux" on={niv === 'tous'} onPress={() => save((x) => ({ ...x, niveau: 'tous' }))} />
            {NIVEAUX.map((n) => (
              <Chip key={n} label={n} on={niv === n} onPress={() => save((x) => ({ ...x, niveau: n }))} />
            ))}
          </Chips>
          {mats.map((m) => {
            const fs = FICHES.filter((f) => f.m === m.id);
            const lus = fs.filter((f) => st.lu[f.id]).length;
            return (
              <Card key={m.id} onPress={() => go({ s: 'matiere', id: m.id })}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 26, marginRight: 12 }}>{m.icone}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{m.nom}</Text>
                    <Text style={{ color: C.muted, fontSize: 12, marginBottom: 6 }}>{m.niv} · {fs.length} fiches</Text>
                    <Bar value={fs.length ? lus / fs.length : 0} />
                  </View>
                </View>
              </Card>
            );
          })}
        </>
      )}
    </Page>
  );
}

function FicheRow({ f, st, onPress }: { f: Fiche; st: St; onPress: () => void }) {
  return (
    <Card onPress={onPress} style={{ paddingVertical: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: st.maitrise[f.id] ? C.ok : st.lu[f.id] ? C.gold : C.line, fontSize: 16, marginRight: 10 }}>●</Text>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', color: C.ink }}>{f.titre}</Text>
          <Text style={{ color: C.muted, fontSize: 12 }} numberOfLines={1}>{matById(f.m)?.nom}</Text>
        </View>
        {st.fav[f.id] ? <Text style={{ color: C.gold, marginLeft: 6 }}>★</Text> : null}
      </View>
    </Card>
  );
}

function MatiereView({ id, st, back, openFiche, startQcm, go }: PP & { id: string }) {
  const m = matById(id)!;
  const fs = FICHES.filter((f) => f.m === id);
  const qs = QCM.filter((q) => q.m === id);
  const cas = CAS.filter((c) => c.m === id);
  const arr = ARRETS.filter((a) => a.m === id);
  return (
    <Page>
      <Back onPress={back} label="Cours" />
      <Text style={{ fontSize: 34 }}>{m.icone}</Text>
      <H1>{m.nom}</H1>
      <Tag label={m.niv} />
      <Sub>{m.desc}</Sub>
      {qs.length > 0 && <Btn title={`S'entraîner (${qs.length} QCM)`} onPress={() => startQcm(m.nom, shuffle(qs))} />}
      <H2>Fiches</H2>
      {fs.map((f) => (
        <FicheRow key={f.id} f={f} st={st} onPress={() => openFiche(f.id)} />
      ))}
      {cas.length > 0 && (
        <>
          <H2>Cas pratiques</H2>
          {cas.map((c) => (
            <Card key={c.id} onPress={() => go({ s: 'cas', id: c.id })} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{c.titre} ›</Text>
            </Card>
          ))}
        </>
      )}
      {arr.length > 0 && (
        <>
          <H2>Arrêts à connaître</H2>
          {arr.map((a) => (
            <Card key={a.id} onPress={() => go({ s: 'arret', id: a.id })} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{a.nom}</Text>
              <Text style={{ color: C.muted, fontSize: 12 }}>{a.jur}, {a.date}</Text>
            </Card>
          ))}
        </>
      )}
    </Page>
  );
}

function FicheView({ id, st, save, back, openArt, openArret, openFiche, go }: PP & { id: string }) {
  const f = ficheById(id)!;
  const m = matById(f.m);
  const [note, setNote] = useState(st.notes[id] || '');
  useEffect(() => {
    save((x) => ({ ...x, lu: { ...x.lu, [id]: Date.now() } }));
  }, [id]);
  const fav = !!st.fav[id];
  const ok = !!st.maitrise[id];
  const memes = FICHES.filter((x) => x.m === f.m && x.id !== f.id).slice(0, 4);
  return (
    <Page>
      <Back onPress={back} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Tag label={m?.nom || ''} />
        <Tag label={m?.niv || ''} color={C.navy} />
      </View>
      <H1>{f.titre}</H1>
      <Text style={[u.item, { marginBottom: 12 }]}>{f.intro}</Text>
      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 6 }}>
        <View style={{ flex: 1 }}>
          <Btn kind={fav ? 'gold' : 'ghost'} title={fav ? '★ Favori' : '☆ Favori'} onPress={() => save((x) => { const n = { ...x.fav }; if (n[id]) delete n[id]; else n[id] = 1; return { ...x, fav: n }; })} />
        </View>
        <View style={{ flex: 1 }}>
          <Btn kind={ok ? 'primary' : 'ghost'} title={ok ? '✓ Maîtrisée' : 'Je maîtrise'} onPress={() => save((x) => { const n = { ...x.maitrise }; if (n[id]) delete n[id]; else n[id] = 1; return { ...x, maitrise: n }; })} />
        </View>
      </View>
      {f.parts.map((p, i) => (
        <Card key={i}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <Text style={{ fontWeight: '900', color: C.red, fontSize: 15, flex: 1 }}>{p.t}</Text>
          </View>
          {p.l.map((l, k) => (
            <View key={k} style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Text style={{ color: C.gold, fontWeight: '900', marginRight: 8, lineHeight: 22 }}>•</Text>
              <Text style={[u.item, { flex: 1 }]}>{l}</Text>
            </View>
          ))}
        </Card>
      ))}
      <Card style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '900', color: C.ink, marginBottom: 8 }}>À retenir</Text>
        {f.retenir.map((r, k) => (
          <Text key={k} style={[u.item, { marginBottom: 4 }]}>✓ {r}</Text>
        ))}
      </Card>
      {!!f.art?.length && (
        <>
          <H2>Articles</H2>
          {f.art.map((aid) => {
            const a = artById(aid);
            if (!a) return null;
            return (
              <Card key={aid} onPress={() => openArt(aid)} style={{ paddingVertical: 12 }}>
                <Text style={{ fontWeight: '800', color: C.navy }}>Art. {a.num} {codeNom(a.code)} ›</Text>
                <Text style={{ color: C.ink }}>{a.titre}</Text>
              </Card>
            );
          })}
        </>
      )}
      {!!f.arrets?.length && (
        <>
          <H2>Jurisprudence</H2>
          {f.arrets.map((rid) => {
            const a = arretById(rid);
            if (!a) return null;
            return (
              <Card key={rid} onPress={() => openArret(rid)} style={{ paddingVertical: 12 }}>
                <Text style={{ fontWeight: '800', color: C.red }}>{a.nom} ›</Text>
                <Text style={{ color: C.muted, fontSize: 12 }}>{a.jur}, {a.date}</Text>
              </Card>
            );
          })}
        </>
      )}
      <H2>Mes notes</H2>
      <TextInput
        value={note}
        onChangeText={setNote}
        onBlur={() => save((x) => ({ ...x, notes: { ...x.notes, [id]: note } }))}
        multiline
        placeholder="Ajoute tes remarques, exemples de TD…"
        placeholderTextColor={C.muted}
        style={[u.card, { minHeight: 90, color: C.ink, textAlignVertical: 'top', fontSize: 15 }]}
      />
      {memes.length > 0 && (
        <>
          <H2>Dans la même matière</H2>
          {memes.map((x) => (
            <Card key={x.id} onPress={() => openFiche(x.id)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{x.titre} ›</Text>
            </Card>
          ))}
        </>
      )}
      <Text style={{ color: C.muted, fontSize: 12, lineHeight: 17, marginTop: 6 }}>{'Fiche de synthèse rédigée à visée pédagogique, à jour au ' + MAJ + '. Relecture par un professionnel du droit : ' + (RELU.par ? RELU.par + (RELU.le ? ', ' + RELU.le : '') : 'en cours') + '. Le droit évolue vite : vérifie toujours les textes en vigueur sur Légifrance.'}</Text>
      <Signaler cible={'fiche:' + f.id} libelle={f.titre} />
    </Page>
  );
}

// ---------- Codes ----------
function Codes({ st, openArt, go, back }: PP) {
  const [code, setCode] = useState<string>('tous');
  const [q, setQ] = useState('');
  const nq = norm(q.trim());
  const list = ARTICLES.filter((a) => (code === 'tous' || a.code === code) && (!nq || norm(a.num + ' ' + a.titre + ' ' + a.texte).includes(nq) || norm('article ' + a.num) === nq));
  return (
    <Page>
      <Back onPress={back} />
      <H1>Codes</H1>
      <Sub>{ARTICLES.length} articles essentiels, classés par code, et {ARRETS.length} grands arrêts.</Sub>
      <Card onPress={() => go({ s: 'arrets' })} style={{ backgroundColor: C.redL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🏛 Grands arrêts de la jurisprudence ›</Text>
      </Card>
      <SearchBox value={q} onChange={setQ} placeholder="N° d'article ou mot-clé (ex. : 1240, légitime défense)" />
      <Chips>
        <Chip label="Tous" on={code === 'tous'} onPress={() => setCode('tous')} />
        {CODES.map((c) => (
          <Chip key={c.id} label={c.court} on={code === c.id} onPress={() => setCode(c.id)} />
        ))}
      </Chips>
      {code !== 'tous' && <Text style={u.label}>{CODES.find((c) => c.id === code)?.nom}</Text>}
      {list.map((a) => (
        <Card key={a.id} onPress={() => openArt(a.id)} style={{ paddingVertical: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '800', color: C.navy }}>Art. {a.num} <Text style={{ color: C.muted, fontWeight: '600' }}>{codeNom(a.code)}</Text></Text>
              <Text style={{ color: C.ink }}>{a.titre}</Text>
            </View>
            {st.fav['a:' + a.id] ? <Text style={{ color: C.gold }}>★</Text> : null}
          </View>
        </Card>
      ))}
      {list.length === 0 && <Notice>Aucun article ne correspond. Essaie un autre mot-clé.</Notice>}
    </Page>
  );
}

function legifrance(a: Article) {
  const nom = CODES.find((c) => c.id === a.code)?.nom || '';
  return 'https://www.legifrance.gouv.fr/search/all?query=' + encodeURIComponent(`article ${a.num} ${nom}`);
}

function ArticleView({ id, st, save, back, openFiche, go }: PP & { id: string }) {
  const a = artById(id)!;
  const k = 'a:' + id;
  const fav = !!st.fav[k];
  const fiches = FICHES.filter((f) => f.art?.includes(id));
  const voisins = ARTICLES.filter((x) => x.code === a.code);
  const i = voisins.indexOf(a);
  return (
    <Page>
      <Back onPress={back} />
      <Tag label={CODES.find((c) => c.id === a.code)?.nom || ''} />
      <H1>Article {a.num}</H1>
      <Text style={{ color: C.muted, fontWeight: '700', marginBottom: 10 }}>{a.titre}</Text>
      <Card style={{ borderLeftWidth: 4, borderLeftColor: C.red }}>
        <Text style={{ color: C.ink, fontSize: 16, lineHeight: 25 }}>{a.texte}</Text>
      </Card>
      {a.synth && <Notice tone="warn">Présentation synthétique de l'article (texte long ou souvent modifié). Consultez le texte intégral en vigueur sur Légifrance.</Notice>}
      <Btn kind={fav ? 'gold' : 'ghost'} title={fav ? '★ Dans mes favoris' : '☆ Ajouter aux favoris'} onPress={() => save((x) => { const n = { ...x.fav }; if (n[k]) delete n[k]; else n[k] = 1; return { ...x, fav: n }; })} />
      <Btn kind="ghost" title="Voir sur Légifrance ↗" onPress={() => Linking.openURL(legifrance(a))} />
      {fiches.length > 0 && (
        <>
          <H2>Fiches liées</H2>
          {fiches.map((f) => (
            <Card key={f.id} onPress={() => openFiche(f.id)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{f.titre} ›</Text>
            </Card>
          ))}
        </>
      )}
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <View style={{ flex: 1 }}>{i > 0 && <Btn kind="ghost" title={`‹ Art. ${voisins[i - 1].num}`} onPress={() => go({ s: 'article', id: voisins[i - 1].id })} />}</View>
        <View style={{ flex: 1 }}>{i < voisins.length - 1 && <Btn kind="ghost" title={`Art. ${voisins[i + 1].num} ›`} onPress={() => go({ s: 'article', id: voisins[i + 1].id })} />}</View>
      </View>
    </Page>
  );
}

function Arrets({ back, go }: PP) {
  const [q, setQ] = useState('');
  const [m, setM] = useState('tous');
  const mats = MATIERES.filter((x) => ARRETS.some((a) => a.m === x.id));
  const nq = norm(q.trim());
  const list = ARRETS.filter((a) => (m === 'tous' || a.m === m) && (!nq || norm(a.nom + ' ' + a.apport + ' ' + a.jur + ' ' + a.date).includes(nq)));
  return (
    <Page>
      <Back onPress={back} />
      <H1>Grands arrêts</H1>
      <Sub>Les décisions que tout juriste doit savoir citer : date, juridiction, apport.</Sub>
      <SearchBox value={q} onChange={setQ} placeholder="Nom de l'arrêt ou notion" />
      <Chips>
        <Chip label="Toutes" on={m === 'tous'} onPress={() => setM('tous')} />
        {mats.map((x) => (
          <Chip key={x.id} label={x.nom} on={m === x.id} onPress={() => setM(x.id)} />
        ))}
      </Chips>
      {list.map((a) => (
        <Card key={a.id} onPress={() => go({ s: 'arret', id: a.id })} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{a.nom}</Text>
          <Text style={{ color: C.red, fontSize: 12, fontWeight: '700', marginBottom: 2 }}>{a.jur}, {a.date}</Text>
          <Text style={{ color: C.muted, fontSize: 13 }} numberOfLines={2}>{a.apport}</Text>
        </Card>
      ))}
    </Page>
  );
}

function ArretView({ id, st, save, back, openFiche }: PP & { id: string }) {
  const a = arretById(id)!;
  const k = 'r:' + id;
  const fav = !!st.fav[k];
  const fiches = FICHES.filter((f) => f.arrets?.includes(id));
  return (
    <Page>
      <Back onPress={back} />
      <Tag label={matById(a.m)?.nom || ''} />
      <H1>{a.nom}</H1>
      <Text style={{ color: C.red, fontWeight: '800', marginBottom: 10 }}>{a.jur}, {a.date}</Text>
      <Card style={{ borderLeftWidth: 4, borderLeftColor: C.gold }}>
        <Text style={u.label}>Apport</Text>
        <Text style={{ color: C.ink, fontSize: 16, lineHeight: 24 }}>{a.apport}</Text>
      </Card>
      <Btn kind={fav ? 'gold' : 'ghost'} title={fav ? '★ Dans mes favoris' : '☆ Ajouter aux favoris'} onPress={() => save((x) => { const n = { ...x.fav }; if (n[k]) delete n[k]; else n[k] = 1; return { ...x, fav: n }; })} />
      {fiches.length > 0 && (
        <>
          <H2>Fiches liées</H2>
          {fiches.map((f) => (
            <Card key={f.id} onPress={() => openFiche(f.id)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{f.titre} ›</Text>
            </Card>
          ))}
        </>
      )}
    </Page>
  );
}

// ---------- S'entraîner ----------
function Train({ st, startQcm, go }: PP) {
  const [niv, setNiv] = useState<string>('tous');
  const mats = MATIERES.filter((m) => (niv === 'tous' || m.niv === niv) && QCM.some((q) => q.m === m.id));
  const errs = QCM.filter((q) => st.erreurs.includes(qKey(q)));
  const pool = QCM.filter((q) => niv === 'tous' || matById(q.m)?.niv === niv);
  return (
    <Page>
      <H1>Réviser</H1>
      <Sub>{QCM.length} QCM corrigés, {CAS.length} cas pratiques, et des quiz générés à partir des codes et du lexique.</Sub>
      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 4 }}>
        <View style={{ flex: 1 }}>
          <Card style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '900', color: C.ink }}>{st.qTot}</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>questions faites</Text>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <Card style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '900', color: C.ok }}>{st.qTot ? Math.round((100 * st.qOk) / st.qTot) : 0} %</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>de réussite</Text>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <Card style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '900', color: C.gold }}>{st.examBest}/20</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>meilleur examen</Text>
          </Card>
        </View>
      </View>

      <Card onPress={() => startQcm('Examen blanc', shuffle(pool).slice(0, 20), true)} style={{ backgroundColor: C.navy, borderColor: C.navy }}>
        <Text style={{ color: SOMBRE ? '#12151D' : '#fff', fontWeight: '900', fontSize: 16 }}>📝 Examen blanc</Text>
        <Text style={{ color: SOMBRE ? '#12151D' : 'rgba(255,255,255,0.85)', marginTop: 2 }}>20 questions, 20 minutes, note sur 20</Text>
      </Card>
      <Card onPress={() => go({ s: 'flashmenu' })} style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🃏 Révision express (cartes mémoire) ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Arrêts, articles, adages et lexique, avec répétition espacée.</Text>
      </Card>
      <Card onPress={() => go({ s: 'tuteur' })} style={{ backgroundColor: C.redL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🤖 Tuteur IA ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Pose tes questions de cours, reçois une explication.</Text>
      </Card>
      <Card onPress={() => go({ s: 'crfpa' })}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🎓 Prépa CRFPA ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Note de synthèse, grand oral, consultations, procédures.</Text>
      </Card>
      <Card onPress={() => startQcm('QCM à réponses multiples', shuffle(QCM.filter((q) => Array.isArray(q.a))).slice(0, 15))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>☑️ QCM à réponses multiples ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>{QCM.filter((q) => Array.isArray(q.a)).length} questions à réponses multiples, notation par discordances.</Text>
      </Card>
      <Card onPress={() => go({ s: 'caslist' })}>
        <Text style={{ fontWeight: '800', color: C.ink }}>📂 Cas pratiques corrigés ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Raisonnement pas à pas : qualification, règle, application, conclusion.</Text>
      </Card>
      <Card onPress={() => startQcm('Quel article ?', qcmArticles(15))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>⚖️ Quel article dit quoi ? ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>15 questions tirées des codes.</Text>
      </Card>
      <Card onPress={() => startQcm('Vocabulaire juridique', qcmLexique(15))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>📖 Vocabulaire juridique ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>15 définitions à reconnaître.</Text>
      </Card>
      {errs.length > 0 && (
        <Card onPress={() => startQcm('Mes erreurs', shuffle(errs))} style={{ backgroundColor: C.koL, borderColor: 'transparent' }}>
          <Text style={{ fontWeight: '800', color: C.ink }}>🔁 Mes erreurs ({errs.length}) ›</Text>
          <Text style={{ color: C.muted, fontSize: 13 }}>Une question réussie ici sort de la liste.</Text>
        </Card>
      )}

      <H2>Par matière</H2>
      <Chips>
        <Chip label="Tous niveaux" on={niv === 'tous'} onPress={() => setNiv('tous')} />
        {NIVEAUX.map((n) => (
          <Chip key={n} label={n} on={niv === n} onPress={() => setNiv(n)} />
        ))}
      </Chips>
      {mats.map((m) => {
        const qs = QCM.filter((q) => q.m === m.id);
        const r = st.parM[m.id];
        return (
          <Card key={m.id} onPress={() => startQcm(m.nom, shuffle(qs))} style={{ paddingVertical: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, marginRight: 10 }}>{m.icone}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '700', color: C.ink }}>{m.nom}</Text>
                <Text style={{ color: C.muted, fontSize: 12 }}>{qs.length} questions{r ? ` · ${Math.round((100 * r[1]) / Math.max(1, r[0]))} % réussies` : ''}</Text>
              </View>
              <Text style={{ color: C.muted }}>›</Text>
            </View>
          </Card>
        );
      })}
    </Page>
  );
}

// Bonnes réponses (QRU : un nombre ; QRM : une liste)
const bonnes = (q: Question): number[] => (Array.isArray(q.a) ? q.a : [q.a]);
const estQrm = (q: Question) => Array.isArray(q.a);
// Notation par discordances : 0 discordance = 1 point, 1 = 0,5, 2 = 0,2, 3 ou plus = 0
function noter(q: Question, choix: number[]): number {
  const b = bonnes(q);
  if (!estQrm(q)) return choix.length === 1 && choix[0] === b[0] ? 1 : 0;
  let d = 0;
  q.c.forEach((_, k) => { if (b.includes(k) !== choix.includes(k)) d++; });
  return d === 0 ? 1 : d === 1 ? 0.5 : d === 2 ? 0.2 : 0;
}
const fmtPts = (x: number) => (Math.round(x * 10) / 10).toString().replace('.', ',');

function QcmRun({ titre, list, exam, st, save, back }: PP & { titre: string; list: Question[]; exam?: boolean }) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<number[]>([]);
  const [valide, setValide] = useState(false);
  const [score, setScore] = useState(0);
  const [fin, setFin] = useState(false);
  const [reste, setReste] = useState(exam ? list.length * 60 : 0);
  const [rep, setRep] = useState<number[][]>([]);
  const q = list[Math.min(i, list.length - 1)];
  const multi = estQrm(q);

  useEffect(() => {
    if (!exam || fin) return;
    const t = setInterval(() => setReste((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [exam, fin]);
  useEffect(() => {
    if (exam && reste === 0 && !fin) terminer(score);
  }, [reste]);

  const enregistrer = (pts: number) => {
    const ok = pts === 1;
    const k: string | null = (q as any).k || null;
    save((x) => {
      const pm = { ...x.parM };
      if (q.m !== 'articles' && q.m !== 'lexique') {
        const r = pm[q.m] || [0, 0];
        pm[q.m] = [r[0] + 1, r[1] + (ok ? 1 : 0)];
      }
      let er = x.erreurs;
      if (k) er = ok ? er.filter((e) => e !== k) : er.includes(k) ? er : [...er, k];
      return { ...x, qTot: x.qTot + 1, qOk: x.qOk + (ok ? 1 : 0), parM: pm, erreurs: er };
    });
  };

  const valider = (choix: number[]) => {
    if (valide || !choix.length) return;
    const pts = noter(q, choix);
    setValide(true);
    setScore((x) => x + pts);
    setRep((r) => [...r, choix]);
    enregistrer(pts);
    if (exam) setTimeout(() => suivant(score + pts), 350);
  };
  const toucher = (k: number) => {
    if (valide) return;
    if (!multi) { setSel([k]); valider([k]); return; }
    setSel((s0) => (s0.includes(k) ? s0.filter((x) => x !== k) : [...s0, k]));
  };
  const terminer = (sc: number) => {
    setFin(true);
    if (exam) {
      const note = Math.round((20 * sc) / list.length);
      save((x) => ({ ...x, examBest: Math.max(x.examBest, note) }));
    }
  };
  const suivant = (sc = score) => {
    if (i + 1 >= list.length) terminer(sc);
    else {
      setI(i + 1);
      setSel([]);
      setValide(false);
    }
  };

  if (fin) {
    const note = Math.round((20 * score) / list.length);
    return (
      <Page>
        <Back onPress={back} />
        <View style={s.hero}>
          <Text style={s.heroL}>{titre}</Text>
          <Text style={{ color: '#fff', fontSize: 40, fontWeight: '900' }}>{exam ? `${note}/20` : `${fmtPts(score)}/${list.length}`}</Text>
          <Text style={{ color: 'rgba(255,255,255,0.85)' }}>{score >= list.length * 0.8 ? 'Excellent travail !' : score >= list.length * 0.5 ? 'Bonne base, continue.' : 'Relis les fiches puis recommence.'}</Text>
        </View>
        {exam && (
          <>
            <H2>Correction</H2>
            {list.slice(0, rep.length).map((qq, k) => {
              const pts = noter(qq, rep[k] || []);
              return (
                <Card key={k} style={{ borderLeftWidth: 4, borderLeftColor: pts === 1 ? C.ok : pts > 0 ? C.gold : C.ko }}>
                  <Text style={{ fontWeight: '700', color: C.ink, marginBottom: 4 }}>{qq.q}</Text>
                  {bonnes(qq).map((b) => <Text key={b} style={{ color: C.ok, fontWeight: '700' }}>✓ {qq.c[b]}</Text>)}
                  {(rep[k] || []).filter((x) => !bonnes(qq).includes(x)).map((x) => <Text key={x} style={{ color: C.ko }}>✗ {qq.c[x]}</Text>)}
                  {estQrm(qq) && <Text style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>{fmtPts(pts)} point</Text>}
                  <Text style={{ color: C.muted, marginTop: 4, lineHeight: 19 }}>{qq.e}</Text>
                </Card>
              );
            })}
          </>
        )}
        <Btn title="Terminer" onPress={back} />
      </Page>
    );
  }

  const mm = Math.floor(reste / 60);
  const ss = String(reste % 60).padStart(2, '0');
  const pts = valide ? noter(q, sel) : 0;
  return (
    <Page>
      <Back onPress={back} label="Quitter" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ color: C.muted, fontWeight: '700' }}>{titre} · {i + 1}/{list.length}</Text>
        {exam ? <Text style={{ color: reste < 120 ? C.ko : C.navy, fontWeight: '900' }}>⏱ {mm}:{ss}</Text> : <Text style={{ color: C.ok, fontWeight: '800' }}>{fmtPts(score)} ✓</Text>}
      </View>
      <Bar value={(i + (valide ? 1 : 0)) / list.length} />
      {multi && <View style={{ marginTop: 12 }}><Tag label="QRM · plusieurs réponses possibles" color={C.gold} /></View>}
      <Text style={{ fontSize: 18, fontWeight: '800', color: C.ink, marginTop: multi ? 4 : 16, marginBottom: 16, lineHeight: 25 }}>{q.q}</Text>
      {q.c.map((c, k) => {
        const show = valide && !exam;
        const isB = bonnes(q).includes(k);
        const pris = sel.includes(k);
        const good = show && isB;
        const bad = show && pris && !isB;
        return (
          <Pressable key={k} onPress={() => toucher(k)} style={[s.choice, !show && pris && { borderColor: C.navy, backgroundColor: C.navyL }, good && { borderColor: C.ok, backgroundColor: C.okL }, bad && { borderColor: C.ko, backgroundColor: C.koL }]}>
            <Text style={{ color: C.ink, fontSize: 15, fontWeight: good || bad || pris ? '700' : '500' }}>
              {multi && !show ? (pris ? '☑ ' : '☐ ') : ''}
              {good ? (pris || !multi ? '✓ ' : '◌ ') : bad ? '✗ ' : ''}
              {c}
            </Text>
          </Pressable>
        );
      })}
      {multi && !valide && <Btn title="Valider mes réponses" disabled={!sel.length} onPress={() => valider(sel)} />}
      {valide && !exam && (
        <>
          <Card style={{ backgroundColor: pts === 1 ? C.okL : pts > 0 ? C.goldL : C.koL, borderColor: 'transparent', marginTop: 6 }}>
            <Text style={{ fontWeight: '900', color: pts === 1 ? C.ok : pts > 0 ? C.gold : C.ko, marginBottom: 4 }}>{pts === 1 ? 'Bonne réponse' : pts > 0 ? `Presque : ${fmtPts(pts)} point` : 'Pas tout à fait'}</Text>
            {multi && <Text style={{ color: C.muted, fontSize: 12, marginBottom: 4 }}>Notation par discordances : 0 discordance = 1 ; 1 = 0,5 ; 2 = 0,2 ; 3 ou plus = 0.{pts < 1 ? ' ◌ = bonne réponse non cochée.' : ''}</Text>}
            <Text style={{ color: C.ink, lineHeight: 21 }}>{q.e}</Text>
          </Card>
          <Btn title={i + 1 >= list.length ? 'Voir mon résultat' : 'Question suivante'} onPress={() => suivant()} />
          <Signaler key={i} cible={'qcm:' + (q as any).m + ':' + q.q.slice(0, 120)} libelle={'QCM ' + (i + 1)} />
        </>
      )}
    </Page>
  );
}

// ---------- Cas pratiques ----------
function CasList({ st, back, go }: PP) {
  const [niv, setNiv] = useState('tous');
  const list = CAS.filter((c) => niv === 'tous' || c.niv === niv);
  return (
    <Page>
      <Back onPress={back} />
      <H1>Cas pratiques</H1>
      <Sub>Chaque cas suit la méthode attendue en TD et à l'examen : problème de droit, règle, application aux faits, conclusion.</Sub>
      <Chips>
        <Chip label="Tous" on={niv === 'tous'} onPress={() => setNiv('tous')} />
        {NIVEAUX.map((n) => (
          <Chip key={n} label={n} on={niv === n} onPress={() => setNiv(n)} />
        ))}
      </Chips>
      {list.map((c) => {
        const sc = st.casDone[c.id];
        return (
          <Card key={c.id} onPress={() => go({ s: 'cas', id: c.id })}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Tag label={matById(c.m)?.nom || ''} />
              <Tag label={c.niv} color={C.navy} />
            </View>
            <Text style={{ fontWeight: '800', color: C.ink }}>{c.titre}</Text>
            <Text style={{ color: sc !== undefined ? C.ok : C.muted, fontSize: 12, marginTop: 2 }}>{sc !== undefined ? `Fait · ${sc}/${c.etapes.length}` : `${c.etapes.length} étapes`}</Text>
          </Card>
        );
      })}
    </Page>
  );
}

function CasView({ id, save, back, openFiche }: PP & { id: string }) {
  const cas = CAS.find((c) => c.id === id)!;
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const etapes = useMemo(() => cas.etapes.map((e) => melanger(e)), [id]);
  const fini = step >= etapes.length;
  const et = etapes[Math.min(step, etapes.length - 1)];
  const choisir = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === et.a) setScore((x) => x + 1);
  };
  const suivant = () => {
    if (step + 1 >= cas.etapes.length) save((x) => ({ ...x, casDone: { ...x.casDone, [id]: score } }));
    setStep(step + 1);
    setPicked(null);
  };
  return (
    <Page>
      <Back onPress={back} label="Cas pratiques" />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Tag label={matById(cas.m)?.nom || ''} />
        <Tag label={cas.niv} color={C.navy} />
      </View>
      <H1>{cas.titre}</H1>
      <Card style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
        <Text style={u.label}>Énoncé</Text>
        <Text style={{ color: C.ink, lineHeight: 22, fontSize: 15 }}>{cas.enonce}</Text>
      </Card>
      {!fini ? (
        <>
          <Text style={{ color: C.muted, fontWeight: '700', marginTop: 6 }}>Étape {step + 1} sur {cas.etapes.length}</Text>
          <Text style={{ fontSize: 17, fontWeight: '800', color: C.ink, marginVertical: 10, lineHeight: 24 }}>{et.q}</Text>
          {et.c.map((c, i) => {
            const show = picked !== null;
            const good = show && i === et.a;
            const bad = show && i === picked && i !== et.a;
            return (
              <Pressable key={i} onPress={() => choisir(i)} style={[s.choice, good && { borderColor: C.ok, backgroundColor: C.okL }, bad && { borderColor: C.ko, backgroundColor: C.koL }]}>
                <Text style={{ fontSize: 15, color: C.ink, fontWeight: good || bad ? '700' : '500' }}>
                  {good ? '✓ ' : bad ? '✗ ' : ''}
                  {c}
                </Text>
              </Pressable>
            );
          })}
          {picked !== null && (
            <>
              <Card style={{ backgroundColor: picked === et.a ? C.okL : C.koL, borderColor: 'transparent', marginTop: 6 }}>
                <Text style={{ fontWeight: '900', color: picked === et.a ? C.ok : C.ko, marginBottom: 4 }}>{picked === et.a ? 'Bien raisonné' : 'Pas tout à fait'}</Text>
                <Text style={{ color: C.ink, lineHeight: 21 }}>{et.e}</Text>
              </Card>
              <Btn title={step + 1 >= cas.etapes.length ? 'Voir la synthèse' : 'Étape suivante'} onPress={suivant} />
            </>
          )}
        </>
      ) : (
        <>
          <View style={s.hero}>
            <Text style={s.heroL}>Ton résultat</Text>
            <Text style={{ color: '#fff', fontSize: 36, fontWeight: '900' }}>{score} / {cas.etapes.length}</Text>
          </View>
          <Card style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
            <Text style={{ fontWeight: '900', color: C.ink, marginBottom: 6 }}>À retenir</Text>
            {cas.retenir.map((r, k) => (
              <Text key={k} style={[u.item, { marginBottom: 4 }]}>✓ {r}</Text>
            ))}
          </Card>
          {cas.fiches.some((f) => ficheById(f)) && <H2>Fiches à revoir</H2>}
          {cas.fiches.filter((f) => ficheById(f)).map((f) => (
            <Card key={f} onPress={() => openFiche(f)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{ficheById(f)?.titre} ›</Text>
            </Card>
          ))}
          <Btn title="Refaire ce cas" kind="ghost" onPress={() => { setStep(0); setPicked(null); setScore(0); }} />
          <Btn title="Retour aux cas" onPress={back} />
          <Signaler cible={'cas:' + cas.id} libelle={cas.titre} />
        </>
      )}
    </Page>
  );
}

// ---------- Outils ----------
function Outils({ go, user }: PP) {
  const items: [string, string, string, Route][] = [
    ['⚖️', 'Codes', `${ARTICLES.length} articles essentiels, classés par code`, { s: 'codes' }],
    ['🎓', 'Prépa CRFPA', 'Note de synthèse, grand oral, consultations', { s: 'crfpa' }],
    ['✍️', 'Méthodologie', 'Dissertation, commentaire, cas pratique, fiche d’arrêt, note de synthèse, grand oral', { s: 'methodes' }],
    ['📖', 'Lexique juridique', `${LEXIQUE.length} termes définis`, { s: 'lexique' }],
    ['⏱', 'Calcul des délais', 'Appel, pourvoi, recours, prescription', { s: 'delais' }],
    ['🔺', 'Hiérarchie des normes', 'La pyramide et ses contrôles', { s: 'normes' }],
    ['🏛', 'Organisation juridictionnelle', 'Ordres judiciaire et administratif', { s: 'juridictions' }],
    ['🗂', 'Carnet de l’élève-avocat', 'Stages, PPI et compétences', { s: 'carnet' }],
    ['🃏', 'Révision express', 'Cartes mémoire avec répétition espacée', { s: 'flashmenu' }],
    ['📝', 'Mes notes', 'Toutes tes notes personnelles', { s: 'notes' }],
    ['★', 'Mes favoris', 'Fiches, articles et arrêts enregistrés', { s: 'favoris' }],
    ['👤', 'Mon compte', CLOUD_OK ? 'Connexion, sauvegarde, suppression du compte' : 'Sauvegarde de la progression', { s: 'compte' }],
    ...(estAdmin(user) ? [['🛠️', 'Signalements (admin)', 'Lire et traiter les signalements', { s: 'admin' }] as [string, string, string, Route]] : []),
    ['⚙️', 'Réglages', 'Thème, taille du texte, progression', { s: 'reglages' }],
    ['ℹ️', 'À propos', 'Sources, mentions et contact', { s: 'apropos' }],
  ];
  return (
    <Page>
      <H1>Outils</H1>
      {items.map(([ic, t, d, r]) => (
        <Card key={t} onPress={() => go(r)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginRight: 12 }}>{ic}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{t}</Text>
              <Text style={{ color: C.muted, fontSize: 13 }}>{d}</Text>
            </View>
            <Text style={{ color: C.muted }}>›</Text>
          </View>
        </Card>
      ))}
    </Page>
  );
}

function Methodes({ back, go }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Méthodologie</H1>
      <Sub>Les exercices juridiques ont des codes précis. Les respecter, c'est déjà la moitié de la note.</Sub>
      {METHODES.map((m) => (
        <Card key={m.id} onPress={() => go({ s: 'methode', id: m.id })}>
          <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{m.titre} ›</Text>
          <Text style={{ color: C.muted, fontSize: 13 }}>{m.pour}</Text>
        </Card>
      ))}
    </Page>
  );
}

function MethodeView({ id, back }: PP & { id: string }) {
  const m = METHODES.find((x) => x.id === id)!;
  return (
    <Page>
      <Back onPress={back} label="Méthodologie" />
      <H1>{m.titre}</H1>
      <Tag label={m.pour} />
      <Text style={[u.item, { marginBottom: 12 }]}>{m.intro}</Text>
      {m.etapes.map((e, i) => (
        <Card key={i}>
          <Text style={{ fontWeight: '900', color: C.red, marginBottom: 8 }}>{i + 1}. {e.t}</Text>
          {e.l.map((l, k) => (
            <View key={k} style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Text style={{ color: C.gold, fontWeight: '900', marginRight: 8, lineHeight: 22 }}>•</Text>
              <Text style={[u.item, { flex: 1 }]}>{l}</Text>
            </View>
          ))}
        </Card>
      ))}
      <Card style={{ backgroundColor: C.koL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '900', color: C.ko, marginBottom: 6 }}>Pièges à éviter</Text>
        {m.pieges.map((p, k) => (
          <Text key={k} style={[u.item, { marginBottom: 4 }]}>✗ {p}</Text>
        ))}
      </Card>
    </Page>
  );
}

function Lexique({ back }: PP) {
  const [q, setQ] = useState('');
  const nq = norm(q.trim());
  const list = LEXIQUE.filter((t) => !nq || norm(t.t + ' ' + t.d).includes(nq)).sort((a, b) => a.t.localeCompare(b.t, 'fr'));
  return (
    <Page>
      <Back onPress={back} />
      <H1>Lexique juridique</H1>
      <SearchBox value={q} onChange={setQ} placeholder="Chercher un terme" />
      <Text style={u.label}>{list.length} terme(s)</Text>
      {list.map((t) => (
        <Card key={t.t} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '900', color: C.navy, marginBottom: 2 }}>{t.t}</Text>
          <Text style={{ color: C.ink, lineHeight: 21 }}>{t.d}</Text>
        </Card>
      ))}
    </Page>
  );
}

function Adages({ back, startQcm }: PP) {
  const [q, setQ] = useState('');
  const nq = norm(q.trim());
  const list = ADAGES.filter((a) => !nq || norm(a.la + ' ' + a.fr + ' ' + a.sens).includes(nq));
  const quiz = () =>
    startQcm(
      'Adages latins',
      shuffle(ADAGES).slice(0, 10).map((a) => {
        const autres = shuffle(ADAGES.filter((x) => x.la !== a.la)).slice(0, 3);
        const ch = shuffle([a, ...autres]);
        return { q: `« ${a.la} » signifie :`, c: ch.map((x) => x.fr), a: ch.indexOf(a), e: a.sens, m: 'lexique' };
      })
    );
  return (
    <Page>
      <Back onPress={back} />
      <H1>Adages latins</H1>
      <Btn title="Me tester (10 adages)" onPress={quiz} />
      <SearchBox value={q} onChange={setQ} placeholder="Chercher un adage" />
      {list.map((a) => (
        <Card key={a.la}>
          <Text style={{ fontStyle: 'italic', fontWeight: '900', color: C.ink, fontSize: 15 }}>{a.la}</Text>
          <Text style={{ color: C.red, marginTop: 2, fontWeight: '700' }}>« {a.fr} »</Text>
          <Text style={{ color: C.muted, marginTop: 6, lineHeight: 19 }}>{a.sens}</Text>
        </Card>
      ))}
    </Page>
  );
}

// ---------- Délais ----------
function paques(y: number) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mois = Math.floor((h + l - 7 * m + 114) / 31), jour = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(y, mois - 1, jour);
}
function feries(y: number) {
  const p = paques(y);
  const add = (d: Date, n: number) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const fix = [[0, 1], [4, 1], [4, 8], [6, 14], [7, 15], [10, 1], [10, 11], [11, 25]].map(([m, d]) => new Date(y, m, d));
  return [...fix, add(p, 1), add(p, 39), add(p, 50)].map((d) => d.toDateString());
}
function ouvrable(d: Date) {
  const f = feries(d.getFullYear());
  return d.getDay() !== 0 && d.getDay() !== 6 && !f.includes(d.toDateString());
}
const DELAIS: { id: string; nom: string; base: string; type: 'mois' | 'jours' | 'francs' | 'ans'; n: number; note?: string }[] = [
  { id: 'appel', nom: 'Appel d’un jugement civil (contentieux)', base: 'art. 538 CPC', type: 'mois', n: 1, note: 'À compter de la signification du jugement. 15 jours en matière gracieuse et pour certaines ordonnances (référé : 15 jours).' },
  { id: 'cassciv', nom: 'Pourvoi en cassation (matière civile)', base: 'art. 612 CPC', type: 'mois', n: 2, note: 'À compter de la signification de la décision.' },
  { id: 'opposition', nom: 'Opposition à un jugement par défaut', base: 'art. 538 CPC', type: 'mois', n: 1 },
  { id: 'appelcorr', nom: 'Appel d’un jugement correctionnel', base: 'art. 498 CPP', type: 'jours', n: 10, note: 'À compter du prononcé contradictoire. Le procureur général dispose de 20 jours (art. 505 CPP).' },
  { id: 'appelassises', nom: 'Appel d’un arrêt de cour d’assises', base: 'art. 380-9 CPP', type: 'jours', n: 10 },
  { id: 'casspen', nom: 'Pourvoi en cassation (matière pénale)', base: 'art. 568 CPP', type: 'francs', n: 5, note: 'Délai franc : ni le jour de la décision ni le jour de l’échéance ne comptent.' },
  { id: 'rea', nom: 'Recours pour excès de pouvoir / contentieux administratif', base: 'art. R. 421-1 CJA', type: 'mois', n: 2, note: 'À compter de la notification ou de la publication de la décision. Recours administratif préalable possible (prorogation).' },
  { id: 'appeladm', nom: 'Appel d’un jugement de tribunal administratif', base: 'art. R. 811-2 CJA', type: 'mois', n: 2 },
  { id: 'cassadm', nom: 'Pourvoi en cassation devant le Conseil d’État', base: 'art. R. 821-1 CJA', type: 'mois', n: 2 },
  { id: 'licenciement', nom: 'Contestation d’un licenciement', base: 'art. L. 1471-1 C. trav.', type: 'mois', n: 12, note: 'À compter de la notification de la rupture.' },
  { id: 'vicecache', nom: 'Action en garantie des vices cachés', base: 'art. 1648 C. civ.', type: 'ans', n: 2, note: 'À compter de la découverte du vice (dans la limite du délai butoir).' },
  { id: 'prescciv', nom: 'Prescription de droit commun (actions personnelles ou mobilières)', base: 'art. 2224 C. civ.', type: 'ans', n: 5, note: 'Point de départ : jour où le titulaire a connu ou aurait dû connaître les faits.' },
  { id: 'presccorpo', nom: 'Action en responsabilité pour dommage corporel', base: 'art. 2226 C. civ.', type: 'ans', n: 10, note: 'À compter de la consolidation du dommage.' },
  { id: 'prescconso', nom: 'Action d’un professionnel contre un consommateur', base: 'art. L. 218-2 C. conso.', type: 'ans', n: 2 },
  { id: 'presccontrav', nom: 'Prescription de l’action publique : contravention', base: 'art. 9 CPP', type: 'ans', n: 1 },
  { id: 'prescdelit', nom: 'Prescription de l’action publique : délit', base: 'art. 8 CPP', type: 'ans', n: 6 },
  { id: 'presccrime', nom: 'Prescription de l’action publique : crime', base: 'art. 7 CPP', type: 'ans', n: 20, note: 'Des délais dérogatoires existent (ex. : crimes sur mineurs, 30 ans à compter de la majorité).' },
];
function parseDate(t: string) {
  const m = t.trim().match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/);
  if (!m) return null;
  const d = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  return d.getDate() === Number(m[1]) ? d : null;
}
function fmt(d: Date) {
  return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}
function echeance(depart: Date, dl: (typeof DELAIS)[number]) {
  let d = new Date(depart);
  if (dl.type === 'jours') d.setDate(d.getDate() + dl.n);
  else if (dl.type === 'francs') d.setDate(d.getDate() + dl.n + 1);
  else {
    const mois = dl.type === 'ans' ? dl.n * 12 : dl.n;
    const j = d.getDate();
    const cible = new Date(d.getFullYear(), d.getMonth() + mois, 1);
    const der = new Date(cible.getFullYear(), cible.getMonth() + 1, 0).getDate();
    d = new Date(cible.getFullYear(), cible.getMonth(), Math.min(j, der));
  }
  const brut = new Date(d);
  let pro = false;
  while (!ouvrable(d)) {
    d.setDate(d.getDate() + 1);
    pro = true;
  }
  return { brut, fin: d, pro };
}

function Delais({ back }: PP) {
  const [txt, setTxt] = useState(() => {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  });
  const [sel, setSel] = useState(DELAIS[0].id);
  const dl = DELAIS.find((x) => x.id === sel)!;
  const dep = parseDate(txt);
  const r = dep ? echeance(dep, dl) : null;
  return (
    <Page>
      <Back onPress={back} />
      <H1>Calcul des délais</H1>
      <Sub>Saisis la date de départ (notification, signification, décision…) puis choisis le délai.</Sub>
      <Text style={u.label}>Date de départ (jj/mm/aaaa)</Text>
      <TextInput value={txt} onChangeText={setTxt} keyboardType="numbers-and-punctuation" style={[u.card, { color: C.ink, fontSize: 18, fontWeight: '800' }]} />
      <Text style={u.label}>Délai</Text>
      {DELAIS.map((x) => (
        <Pressable key={x.id} onPress={() => setSel(x.id)} style={[s.choice, sel === x.id && { borderColor: C.red, backgroundColor: C.redL }]}>
          <Text style={{ color: C.ink, fontWeight: sel === x.id ? '800' : '600' }}>{x.nom}</Text>
          <Text style={{ color: C.muted, fontSize: 12 }}>{x.n} {x.type === 'mois' ? 'mois' : x.type === 'ans' ? 'an(s)' : x.type === 'francs' ? 'jours francs' : 'jours'} · {x.base}</Text>
        </Pressable>
      ))}
      {!dep ? (
        <Notice tone="warn">Date invalide : utilise le format jj/mm/aaaa.</Notice>
      ) : (
        r && (
          <View style={[s.hero, { marginTop: 10 }]}>
            <Text style={s.heroL}>Dernier jour pour agir</Text>
            <Text style={{ color: '#fff', fontSize: 22, fontWeight: '900', marginTop: 4 }}>{fmt(r.fin)}</Text>
            {r.pro && <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 6 }}>Échéance théorique le {fmt(r.brut)} : jour non ouvrable, délai prorogé au premier jour ouvrable suivant (art. 642 CPC / art. 801 CPP).</Text>}
          </View>
        )
      )}
      {dl.note && <Notice>{dl.note}</Notice>}
      <Notice tone="warn">Calcul indicatif. Vérifie toujours le point de départ exact, les délais de distance (outre-mer, étranger), les causes de suspension ou d'interruption et la version en vigueur des textes.</Notice>
    </Page>
  );
}

// ---------- Schémas ----------
function Normes({ back }: PP) {
  const N = [
    ['Bloc de constitutionnalité', 'Constitution de 1958, DDHC 1789, Préambule 1946, Charte de l’environnement 2004, PFRLR', 'Contrôle de constitutionnalité : Conseil constitutionnel (a priori, art. 61 ; QPC a posteriori, art. 61-1)', C.red],
    ['Bloc de conventionnalité', 'Traités et accords internationaux (art. 55 C.), droit de l’UE (originaire et dérivé), CEDH', 'Contrôle de conventionnalité : juges ordinaires (Jacques Vabre 1975, Nicolo 1989)', C.navy],
    ['Principes généraux du droit', 'Dégagés par le juge administratif (ex. : égalité, droits de la défense)', 'Valeur infra-législative mais supra-décrétale (sauf rang constitutionnel de certains)', C.gold],
    ['Bloc de légalité', 'Lois organiques, lois ordinaires (art. 34), ordonnances ratifiées (art. 38)', 'Le juge ne contrôle pas la loi elle-même (théorie de la loi-écran, sauf QPC/conventionnalité)', C.ok],
    ['Règlements', 'Décrets (art. 37 et d’application), arrêtés ministériels, préfectoraux, municipaux', 'Contrôle de légalité : juge administratif (REP), exception d’illégalité', C.muted],
    ['Actes individuels / contrats', 'Décisions individuelles, contrats administratifs et privés', 'Doivent respecter l’ensemble des normes supérieures', C.line],
  ];
  return (
    <Page>
      <Back onPress={back} />
      <H1>Hiérarchie des normes</H1>
      <Sub>Pyramide de Kelsen adaptée au droit français : chaque norme doit respecter celles qui lui sont supérieures.</Sub>
      {N.map(([t, d, c, col], i) => (
        <View key={t} style={{ alignItems: 'center' }}>
          <View style={[u.card, { width: `${62 + i * 7.5}%`, borderLeftWidth: 5, borderLeftColor: col }]}>
            <Text style={{ fontWeight: '900', color: C.ink }}>{t}</Text>
            <Text style={{ color: C.ink, fontSize: 13, marginTop: 4, lineHeight: 18 }}>{d}</Text>
            <Text style={{ color: C.muted, fontSize: 12, marginTop: 4, lineHeight: 17 }}>{c}</Text>
          </View>
        </View>
      ))}
      <Notice>Le Conseil d’État (Sarran, 1998) et la Cour de cassation (Fraisse, 2000) font primer la Constitution sur les traités dans l’ordre interne. La CJUE affirme la primauté absolue du droit de l’Union (Costa c/ ENEL, 1964).</Notice>
    </Page>
  );
}

function Juridictions({ back }: PP) {
  const Col = ({ t, items, col }: { t: string; items: [string, string][]; col: string }) => (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: '900', color: col, textAlign: 'center', marginBottom: 8 }}>{t}</Text>
      {items.map(([n, d], i) => (
        <View key={n}>
          <View style={[u.card, { borderTopWidth: 4, borderTopColor: col, padding: 10 }]}>
            <Text style={{ fontWeight: '800', color: C.ink, fontSize: 13 }}>{n}</Text>
            <Text style={{ color: C.muted, fontSize: 11, marginTop: 2, lineHeight: 15 }}>{d}</Text>
          </View>
          {i < items.length - 1 && <Text style={{ textAlign: 'center', color: C.muted, marginTop: -6, marginBottom: 2 }}>▲</Text>}
        </View>
      ))}
    </View>
  );
  return (
    <Page>
      <Back onPress={back} />
      <H1>Organisation juridictionnelle</H1>
      <Sub>Deux ordres de juridictions depuis la loi des 16-24 août 1790 et le décret du 16 fructidor an III, avec le Tribunal des conflits pour arbitrer.</Sub>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Col
          t="Ordre judiciaire"
          col={C.red}
          items={[
            ['Cour de cassation', 'Juge du droit : casse ou rejette. 6 chambres.'],
            ['Cours d’appel', 'Rejugent en fait et en droit. Cour d’assises d’appel.'],
            ['1re instance civile', 'Tribunal judiciaire (dont JCP, JAF, JEX), tribunal de commerce, conseil de prud’hommes, tribunal paritaire des baux ruraux'],
            ['1re instance pénale', 'Tribunal de police (contraventions), tribunal correctionnel (délits), cour d’assises / cour criminelle départementale (crimes)'],
          ]}
        />
        <Col
          t="Ordre administratif"
          col={C.navy}
          items={[
            ['Conseil d’État', 'Juge de cassation, d’appel ou de premier ressort selon les cas ; aussi conseiller du Gouvernement.'],
            ['Cours administratives d’appel', '9 CAA, compétence d’appel de droit commun.'],
            ['Tribunaux administratifs', 'Juges de droit commun du contentieux administratif en 1re instance.'],
            ['Juridictions spécialisées', 'CNDA, Cour des comptes et chambres régionales, juridictions disciplinaires…'],
          ]}
        />
      </View>
      <Card style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '900', color: C.ink }}>Tribunal des conflits</Text>
        <Text style={{ color: C.ink, marginTop: 4, lineHeight: 20 }}>Tranche les conflits de compétence (positifs, négatifs) et, depuis 2015, certaines questions de répartition. Arrêt fondateur : Blanco (TC, 8 févr. 1873).</Text>
      </Card>
      <Card style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '900', color: C.ink }}>Conseil constitutionnel</Text>
        <Text style={{ color: C.ink, marginTop: 4, lineHeight: 20 }}>Hors des deux ordres. Contrôle la conformité des lois à la Constitution (a priori, art. 61 ; QPC, art. 61-1 transmise par le Conseil d’État ou la Cour de cassation), juge des élections nationales.</Text>
      </Card>
      <Card>
        <Text style={{ fontWeight: '900', color: C.ink }}>Juridictions européennes</Text>
        <Text style={{ color: C.ink, marginTop: 4, lineHeight: 20 }}>CJUE (Luxembourg) : interprétation et validité du droit de l’Union, renvoi préjudiciel. CEDH (Strasbourg) : respect de la Convention européenne des droits de l’homme, requête individuelle après épuisement des voies de recours internes.</Text>
      </Card>
    </Page>
  );
}

// ---------- Favoris / Réglages / À propos ----------
function Favoris({ st, back, openFiche, openArt, openArret }: PP) {
  const ks = Object.keys(st.fav);
  const fs = ks.filter((k) => ficheById(k)).map((k) => ficheById(k)!);
  const as = ks.filter((k) => k.startsWith('a:')).map((k) => artById(k.slice(2))).filter(Boolean) as Article[];
  const rs = ks.filter((k) => k.startsWith('r:')).map((k) => arretById(k.slice(2))).filter(Boolean) as Arret[];
  return (
    <Page>
      <Back onPress={back} />
      <H1>Mes favoris</H1>
      {ks.length === 0 && <Notice>Appuie sur ☆ dans une fiche, un article ou un arrêt pour le retrouver ici.</Notice>}
      {fs.length > 0 && <H2>Fiches</H2>}
      {fs.map((f) => (
        <Card key={f.id} onPress={() => openFiche(f.id)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '700', color: C.ink }}>{f.titre} ›</Text>
        </Card>
      ))}
      {as.length > 0 && <H2>Articles</H2>}
      {as.map((a) => (
        <Card key={a.id} onPress={() => openArt(a.id)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '800', color: C.navy }}>Art. {a.num} {codeNom(a.code)}</Text>
          <Text style={{ color: C.ink }}>{a.titre}</Text>
        </Card>
      ))}
      {rs.length > 0 && <H2>Arrêts</H2>}
      {rs.map((a) => (
        <Card key={a.id} onPress={() => openArret(a.id)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '700', color: C.ink }}>{a.nom}</Text>
          <Text style={{ color: C.muted, fontSize: 12 }}>{a.jur}, {a.date}</Text>
        </Card>
      ))}
    </Page>
  );
}

function Reglages({ st, save, back }: PP) {
  const [theme, setTheme] = useState('auto');
  const [zoom, setZoom] = useState(1);
  const [msg, setMsg] = useState('');
  const [conf, setConf] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('capd:theme').then((v) => setTheme(v || 'auto'));
    AsyncStorage.getItem('capd:zoom').then((v) => setZoom(Number(v) || 1));
  }, []);
  const setT = (v: string) => { setTheme(v); AsyncStorage.setItem('capd:theme', v); setMsg('Le thème sera appliqué au prochain démarrage de l’appli.'); };
  const setZ = (v: number) => { setZoom(v); AsyncStorage.setItem('capd:zoom', String(v)); (globalThis as any).__capZoom = v; setMsg('Taille du texte enregistrée.'); };
  return (
    <Page>
      <Back onPress={back} />
      <H1>Réglages</H1>
      <H2>Thème</H2>
      <Chips>
        {[['auto', 'Automatique'], ['light', 'Clair'], ['dark', 'Sombre']].map(([v, l]) => (
          <Chip key={v} label={l} on={theme === v} onPress={() => setT(v)} />
        ))}
      </Chips>
      <H2>Taille du texte</H2>
      <Chips>
        {[[0.9, 'Petite'], [1, 'Normale'], [1.15, 'Grande'], [1.3, 'Très grande']].map(([v, l]) => (
          <Chip key={String(v)} label={String(l)} on={zoom === v} onPress={() => setZ(Number(v))} />
        ))}
      </Chips>
      {!!msg && <Notice>{msg}</Notice>}
      <Rappels />
      <H2>Ma progression</H2>
      <Card>
        <Row label="Fiches lues" value={`${Object.keys(st.lu).length} / ${FICHES.length}`} />
        <Row label="Fiches maîtrisées" value={String(Object.keys(st.maitrise).length)} />
        <Row label="Questions répondues" value={String(st.qTot)} />
        <Row label="Cas pratiques faits" value={`${Object.keys(st.casDone).length} / ${CAS.length}`} />
      </Card>
      {!conf ? (
        <Btn kind="ghost" title="Réinitialiser ma progression" onPress={() => setConf(true)} />
      ) : (
        <Card style={{ backgroundColor: C.koL, borderColor: 'transparent' }}>
          <Text style={{ color: C.ink, marginBottom: 8 }}>Effacer toute la progression, les favoris et les notes de cet appareil ? Cette action est définitive.</Text>
          <Btn title="Oui, tout effacer" onPress={() => { save(() => ({ ...VIDE })); setConf(false); setMsg('Progression réinitialisée.'); }} />
          <Btn kind="ghost" title="Annuler" onPress={() => setConf(false)} />
        </Card>
      )}
    </Page>
  );
}

function APropos({ back }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>À propos</H1>
      <Card>
        <Text style={[u.item, { marginBottom: 8 }]}>CAP Droit est une application gratuite et sans publicité de révision pour les étudiants en droit, de la licence au CRFPA.</Text>
        <Text style={[u.item, { marginBottom: 8 }]}>Les articles reproduits proviennent des codes et textes officiels publiés sur Légifrance (textes législatifs et réglementaires librement réutilisables). Certains articles longs sont présentés sous forme synthétique, signalée comme telle.</Text>
        <Text style={u.item}>Les fiches, QCM et cas pratiques sont des contenus pédagogiques originaux. Ils ne remplacent ni les cours de votre faculté ni la consultation des textes en vigueur, qui évoluent régulièrement.</Text>
      </Card>
      <Btn kind="ghost" title="Légifrance ↗" onPress={() => Linking.openURL('https://www.legifrance.gouv.fr')} />
      <Btn kind="ghost" title="Signaler une erreur par e-mail" onPress={() => Linking.openURL('mailto:lonisboussouar@gmail.com?subject=CAP%20Droit%20-%20signalement')} />
      <Text style={{ color: C.muted, fontSize: 12, marginTop: 10 }}>Version 2.0</Text>
    </Page>
  );
}


// ---------- Grands arrêts et adages (onglet) ----------
function quizArrets(): Question[] {
  return shuffle(ARRETS).slice(0, 15).map((a, k) => {
    const autres = shuffle(ARRETS.filter((x) => x.id !== a.id));
    if (k % 2 === 0) {
      const c = shuffle([a.nom, ...autres.slice(0, 3).map((x) => x.nom)]);
      return { m: 'arrets', q: 'Quel arrêt a posé la solution suivante ? « ' + a.apport + ' »', c, a: c.indexOf(a.nom), e: a.nom + ' (' + a.jur + ', ' + a.date + ').' };
    }
    const c = shuffle([a.jur + ', ' + a.date, ...Array.from(new Set(autres.map((x) => x.jur + ', ' + x.date))).filter((x) => x !== a.jur + ', ' + a.date).slice(0, 3)]);
    return { m: 'arrets', q: 'Juridiction et date de l’arrêt « ' + a.nom + ' » ?', c, a: c.indexOf(a.jur + ', ' + a.date), e: a.apport };
  });
}

function GrandsView({ st, save, go, startQcm }: PP) {
  const [vue, setVue] = useState<'arrets' | 'adages'>('arrets');
  const [q, setQ] = useState('');
  const [m, setM] = useState('tous');
  const [cache, setCache] = useState(false);
  const [vu, setVu] = useState<string[]>([]);
  const nq = norm(q.trim());
  const mats = MATIERES.filter((x) => ARRETS.some((a) => a.m === x.id));
  const arrets = ARRETS.filter((a) => (m === 'tous' || a.m === m) && (!nq || norm(a.nom + ' ' + a.apport + ' ' + a.jur + ' ' + a.date).includes(nq)));
  const adages = ADAGES.filter((a) => !nq || norm(a.la + ' ' + a.fr + ' ' + a.sens).includes(nq));
  const quizAdages = () =>
    startQcm('Adages latins', shuffle(ADAGES).slice(0, 10).map((a) => {
      const ch = shuffle([a, ...shuffle(ADAGES.filter((x) => x.la !== a.la)).slice(0, 3)]);
      return { q: '« ' + a.la + ' » signifie :', c: ch.map((x) => x.fr), a: ch.indexOf(a), e: a.sens, m: 'lexique' };
    }));
  return (
    <Page>
      <H1>Grands arrêts et adages</H1>
      <Sub>{ARRETS.length} décisions à savoir citer et {ADAGES.length} adages latins.</Sub>
      <Chips>
        <Chip label={'🏛 Arrêts (' + ARRETS.length + ')'} on={vue === 'arrets'} onPress={() => { setVue('arrets'); setVu([]); }} />
        <Chip label={'🏺 Adages (' + ADAGES.length + ')'} on={vue === 'adages'} onPress={() => { setVue('adages'); setVu([]); }} />
      </Chips>
      <Btn title={vue === 'arrets' ? 'Quiz grands arrêts (15 questions)' : 'Quiz adages (10 questions)'} onPress={() => (vue === 'arrets' ? startQcm('Grands arrêts', quizArrets()) : quizAdages())} />
      <Chips>
        <Chip label={cache ? '👁 Afficher les réponses' : '🙈 Mode révision (cacher)'} on={cache} onPress={() => { setCache(!cache); setVu([]); }} />
      </Chips>
      <SearchBox value={q} onChange={setQ} placeholder={vue === 'arrets' ? 'Nom de l’arrêt ou notion' : 'Chercher un adage'} />
      {vue === 'arrets' && (
        <Chips>
          <Chip label="Toutes" on={m === 'tous'} onPress={() => setM('tous')} />
          {mats.map((x) => <Chip key={x.id} label={x.nom} on={m === x.id} onPress={() => setM(x.id)} />)}
        </Chips>
      )}
      {vue === 'arrets' &&
        arrets.map((a) => {
          const montre = !cache || vu.includes(a.id);
          return (
            <Card key={a.id} onPress={cache && !montre ? () => setVu((v) => [...v, a.id]) : () => go({ s: 'arret', id: a.id })} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '800', color: C.ink }}>{a.nom}{st.fav['r:' + a.id] ? ' ★' : ''}</Text>
              <Text style={{ color: C.red, fontSize: 12, fontWeight: '700', marginBottom: 2 }}>{a.jur}, {a.date}</Text>
              {montre ? <Text style={{ color: C.muted, fontSize: 13, lineHeight: 19 }}>{a.apport}</Text> : <Text style={{ color: C.muted, fontStyle: 'italic' }}>Quel est son apport ? Touche pour vérifier.</Text>}
            </Card>
          );
        })}
      {vue === 'adages' &&
        adages.map((a) => {
          const montre = !cache || vu.includes(a.la);
          return (
            <Card key={a.la} onPress={cache && !montre ? () => setVu((v) => [...v, a.la]) : undefined}>
              <Text style={{ fontStyle: 'italic', fontWeight: '900', color: C.ink, fontSize: 15 }}>{a.la}</Text>
              {montre ? (
                <>
                  <Text style={{ color: C.red, marginTop: 2, fontWeight: '700' }}>« {a.fr} »</Text>
                  <Text style={{ color: C.muted, marginTop: 6, lineHeight: 19 }}>{a.sens}</Text>
                </>
              ) : (
                <Text style={{ color: C.muted, marginTop: 4, fontStyle: 'italic' }}>Traduction et sens ? Touche pour vérifier.</Text>
              )}
            </Card>
          );
        })}
    </Page>
  );
}

// ---------- Prépa CRFPA ----------
function Crfpa({ st, back, go, startQcm }: PP) {
  const cas = CAS.filter((c) => c.niv === 'CRFPA' || c.niv === 'M1');
  return (
    <Page>
      <Back onPress={back} />
      <H1>Prépa CRFPA</H1>
      <Sub>L’examen d’accès au CRFPA : note de synthèse (5 h), droit des obligations (3 h), spécialité (3 h) et procédure (2 h) à l’écrit, puis grand oral et anglais.</Sub>
      <Card onPress={() => go({ s: 'ndslist' })}>
        <Text style={{ fontWeight: '800', color: C.ink }}>📄 Note de synthèse ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>{DOSSIERS.length} mini-dossiers chronométrés, plan corrigé et grille d’auto-évaluation.</Text>
      </Card>
      <Card onPress={() => go({ s: 'grandoral' })}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🎤 Grand oral ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Tirage au sort parmi {SUJETS_GO.length} sujets de libertés fondamentales, chronomètre, questions du jury.</Text>
      </Card>
      <Card onPress={() => startQcm('Droit des obligations', shuffle(QCM.filter((q) => ['contrats', 'respciv', 'regime'].includes(q.m))).slice(0, 20))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>✍️ Épreuve d’obligations : 20 QCM ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Contrats, responsabilité civile, régime général.</Text>
      </Card>
      <Card onPress={() => startQcm('Procédures', shuffle(QCM.filter((q) => ['proccivile', 'procpen', 'contadm'].includes(q.m))).slice(0, 20))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>⚖️ Procédures : 20 QCM ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Procédure civile, pénale et contentieux administratif.</Text>
      </Card>
      <Card onPress={() => startQcm('Déontologie', shuffle(QCM.filter((q) => q.m === 'deonto' || q.m === 'libertes')).slice(0, 15))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🎓 Déontologie et libertés ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Pour préparer les questions du grand oral.</Text>
      </Card>
      <H2>Consultations et cas pratiques (M1 – CRFPA)</H2>
      {cas.map((c) => (
        <Card key={c.id} onPress={() => go({ s: 'cas', id: c.id })} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{c.titre}{st.casDone[c.id] !== undefined ? ' ✓' : ''} ›</Text>
          <Text style={{ color: C.muted, fontSize: 12 }}>{matById(c.m)?.nom} · {c.niv}</Text>
        </Card>
      ))}
      <Notice>Pour la session 2026, les épreuves de spécialité et de procédure prennent la forme d’une ou plusieurs consultations. Vérifie chaque année les précisions de la Commission nationale de l’examen (site du CNB).</Notice>
    </Page>
  );
}

function NdsList({ st, back, go }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Note de synthèse</H1>
      <Sub>Entraîne-toi à dégager une problématique et un plan à partir des seuls documents. Les dossiers ci-dessous sont courts : le vrai dossier fait une trentaine de pages, en 5 heures.</Sub>
      {DOSSIERS.map((d) => (
        <Card key={d.id} onPress={() => go({ s: 'nds', id: d.id })} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{d.titre}{st.nds?.[d.id] ? ' ✓' : ''} ›</Text>
          <Text style={{ color: C.muted, fontSize: 12 }}>{d.docs.length} documents</Text>
        </Card>
      ))}
      <Btn kind="ghost" title="Revoir la méthode de la note de synthèse" onPress={() => go({ s: 'methode', id: 'm-synthese' })} />
    </Page>
  );
}

function NdsView({ id, st, save, back }: PP & { id: string }) {
  const d = DOSSIERS.find((x) => x.id === id)!;
  const [duree, setDuree] = useState(45);
  const [etat, setEtat] = useState<'pret' | 'go' | 'fini'>('pret');
  const [reste, setReste] = useState(45 * 60);
  const [plan, setPlan] = useState(st.nds?.[id] || '');
  const [coche, setCoche] = useState<number[]>([]);
  useEffect(() => {
    if (etat !== 'go') return;
    const t = setInterval(() => setReste((r) => { if (r <= 1) { setEtat('fini'); return 0; } return r - 1; }), 1000);
    return () => clearInterval(t);
  }, [etat]);
  const hh = Math.floor(reste / 3600);
  const mm = Math.floor((reste % 3600) / 60);
  const ss = String(reste % 60).padStart(2, '0');
  const garder = () => save((x) => ({ ...x, nds: { ...(x.nds || {}), [id]: plan } }));
  return (
    <Page>
      <Back onPress={back} />
      <Tag label="Note de synthèse" />
      <H1>{d.titre}</H1>
      <Card style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
        <Text style={u.label}>Consigne</Text>
        <Text style={u.item}>{d.consigne}</Text>
      </Card>
      {etat === 'pret' && (
        <>
          <H2>Durée de l’entraînement</H2>
          <Chips>
            {[20, 45, 90, 300].map((x) => <Chip key={x} label={x === 300 ? '5 h (réel)' : x + ' min'} on={duree === x} onPress={() => { setDuree(x); setReste(x * 60); }} />)}
          </Chips>
          <Btn title="Démarrer le chronomètre" onPress={() => setEtat('go')} />
        </>
      )}
      {etat !== 'pret' && (
        <View style={{ alignItems: 'center', marginVertical: 6 }}>
          <Text style={{ fontSize: 36, fontWeight: '900', color: reste < 300 && etat === 'go' ? C.ko : C.ink }}>{hh > 0 ? hh + ':' + String(mm).padStart(2, '0') : mm}:{ss}</Text>
        </View>
      )}
      <H2>Documents</H2>
      {d.docs.map((x) => (
        <Card key={x.n}>
          <Text style={{ fontWeight: '800', color: C.red, marginBottom: 4 }}>Document {x.n} — {x.titre}</Text>
          <Text style={{ color: C.ink, lineHeight: 21 }}>{x.texte}</Text>
        </Card>
      ))}
      <H2>Ma problématique et mon plan</H2>
      <TextInput value={plan} onChangeText={setPlan} onBlur={garder} multiline placeholder={'Problématique : …\nI. …\nA. … (doc. …)\nB. …\nII. …'} placeholderTextColor={C.muted} style={{ minHeight: 160, borderWidth: 1, borderColor: C.line, borderRadius: 12, padding: 12, color: C.ink, textAlignVertical: 'top', backgroundColor: C.card, fontSize: 15, marginBottom: 8 }} />
      {etat !== 'fini' ? (
        <Btn title="J’ai terminé : voir le corrigé" onPress={() => { garder(); setEtat('fini'); }} />
      ) : (
        <>
          <Card style={{ borderLeftWidth: 4, borderLeftColor: C.gold }}>
            <Text style={u.label}>Problématique possible</Text>
            <Text style={[u.item, { marginBottom: 8 }]}>{d.problematique}</Text>
            <Text style={u.label}>Plan possible</Text>
            {d.plan.map((l, k) => <Text key={k} style={{ color: C.ink, lineHeight: 21, marginLeft: l.startsWith('I') ? 0 : 14, fontWeight: l.startsWith('I') ? '800' : '500' }}>{l}</Text>)}
          </Card>
          <Card>
            <Text style={u.label}>Conseils</Text>
            {d.conseils.map((l, k) => <Text key={k} style={u.item}>• {l}</Text>)}
          </Card>
          <H2>Grille d’auto-évaluation</H2>
          {GRILLE_NDS.map((g, k) => {
            const on = coche.includes(k);
            return (
              <Pressable key={k} onPress={() => setCoche((c) => (on ? c.filter((y) => y !== k) : [...c, k]))} style={[s.choice, on && { borderColor: C.ok, backgroundColor: C.okL }]}>
                <Text style={{ color: C.ink }}>{on ? '☑ ' : '☐ '}{g}</Text>
              </Pressable>
            );
          })}
          <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '900', color: C.navy, marginVertical: 8 }}>{coche.length} / {GRILLE_NDS.length}</Text>
        </>
      )}
      <Notice>Documents rédigés pour l’entraînement à partir de textes publics ; les documents marqués « fictif » sont imaginaires.</Notice>
    </Page>
  );
}

function GrandOral({ st, save, back, go }: PP) {
  const [sujet, setSujet] = useState<{ t: string; theme: string } | null>(null);
  const [prep, setPrep] = useState(60);
  const [phase, setPhase] = useState<'tirage' | 'prep' | 'expose' | 'jury' | 'bilan'>('tirage');
  const [reste, setReste] = useState(0);
  const [qs, setQs] = useState<string[]>([]);
  const [coche, setCoche] = useState<number[]>([]);
  useEffect(() => {
    if (phase !== 'prep' && phase !== 'expose') return;
    const t = setInterval(() => setReste((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [phase]);
  const tirer = () => { setSujet(SUJETS_GO[Math.floor(Math.random() * SUJETS_GO.length)]); setPhase('tirage'); setCoche([]); };
  const chrono = <Text style={{ fontSize: 44, fontWeight: '900', textAlign: 'center', color: reste < 60 ? C.ko : C.ink, marginVertical: 8 }}>{Math.floor(reste / 60)}:{String(reste % 60).padStart(2, '0')}</Text>;
  return (
    <Page>
      <Back onPress={back} />
      <H1>Grand oral</H1>
      <Sub>Épreuve de libertés et droits fondamentaux. Format habituel : une heure de préparation, 15 minutes d’exposé, puis environ 30 minutes d’échange avec le jury. Entraîne-toi à voix haute.</Sub>
      {!sujet ? (
        <Btn title="🎲 Tirer un sujet au sort" onPress={tirer} />
      ) : (
        <Card style={{ borderLeftWidth: 4, borderLeftColor: C.gold }}>
          <Text style={u.label}>{sujet.theme}</Text>
          <Text style={{ color: C.ink, fontSize: 19, fontWeight: '900', lineHeight: 26 }}>{sujet.t}</Text>
        </Card>
      )}
      {sujet && phase === 'tirage' && (
        <>
          <H2>Temps de préparation</H2>
          <Chips>
            {[15, 30, 60].map((x) => <Chip key={x} label={x + ' min'} on={prep === x} onPress={() => setPrep(x)} />)}
          </Chips>
          <Btn title="Commencer la préparation" onPress={() => { setReste(prep * 60); setPhase('prep'); }} />
          <Btn kind="ghost" title="Tirer un autre sujet" onPress={tirer} />
        </>
      )}
      {phase === 'prep' && (
        <>
          <Text style={{ textAlign: 'center', color: C.muted }}>Préparation : définitions, problématique, plan en deux parties, décisions à citer.</Text>
          {chrono}
          <Btn title="Passer à l’exposé (15 min)" onPress={() => { setReste(15 * 60); setPhase('expose'); }} />
        </>
      )}
      {phase === 'expose' && (
        <>
          <Text style={{ textAlign: 'center', color: C.muted }}>Exposé : parle sans lire, regarde le jury.</Text>
          {chrono}
          <Btn title="Terminer et passer aux questions du jury" onPress={() => { setQs(shuffle(QUESTIONS_JURY).slice(0, 6)); setPhase('jury'); }} />
        </>
      )}
      {phase === 'jury' && (
        <>
          <H2>Questions du jury</H2>
          <Sub>Réponds à voix haute, de façon courte et argumentée.</Sub>
          {qs.map((q, k) => <Card key={k}><Text style={u.item}>{k + 1}. {q}</Text></Card>)}
          <Btn title="Auto-évaluation" onPress={() => setPhase('bilan')} />
        </>
      )}
      {phase === 'bilan' && (
        <>
          <H2>Grille d’auto-évaluation</H2>
          {GRILLE_GO.map((g, k) => {
            const on = coche.includes(k);
            return (
              <Pressable key={k} onPress={() => setCoche((c) => (on ? c.filter((y) => y !== k) : [...c, k]))} style={[s.choice, on && { borderColor: C.ok, backgroundColor: C.okL }]}>
                <Text style={{ color: C.ink }}>{on ? '☑ ' : '☐ '}{g}</Text>
              </Pressable>
            );
          })}
          <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '900', color: C.navy, marginVertical: 8 }}>{coche.length} / {GRILLE_GO.length}</Text>
          <Btn title="Enregistrer et tirer un nouveau sujet" onPress={() => { save((x) => ({ ...x, go: (x.go || 0) + 1 })); tirer(); }} />
        </>
      )}
      {!!st.go && <Text style={{ color: C.muted, textAlign: 'center', marginTop: 8 }}>{st.go} grand(s) oral(aux) d’entraînement réalisé(s).</Text>}
      <Btn kind="ghost" title="Revoir la méthode du grand oral" onPress={() => go({ s: 'methode', id: 'm-oral' })} />
    </Page>
  );
}

// ---------- Carnet de stage ----------
type Stage = { id: string; service: string; periode: string; notes: string };
function Carnet({ st, save, back }: PP) {
  const c = st.carnet || { stages: [], gestes: {} };
  const [service, setService] = useState('');
  const [periode, setPeriode] = useState('');
  const [notes, setNotes] = useState('');
  const maj = (f: (x: { stages: Stage[]; gestes: Record<string, number> }) => { stages: Stage[]; gestes: Record<string, number> }) => save((x) => ({ ...x, carnet: f(x.carnet || { stages: [], gestes: {} }) }));
  const champ = (v: string, set: (s: string) => void, ph: string, multi?: boolean) => (
    <TextInput value={v} onChangeText={set} placeholder={ph} placeholderTextColor={C.muted} multiline={multi} style={{ borderWidth: 1, borderColor: C.line, borderRadius: 12, padding: 10, color: C.ink, marginBottom: 8, minHeight: multi ? 70 : undefined, textAlignVertical: 'top', backgroundColor: C.card }} />
  );
  const faits = COMPETENCES.filter((g) => (c.gestes[g] || 0) > 0).length;
  return (
    <Page>
      <Back onPress={back} />
      <H1>Carnet de l’élève-avocat</H1>
      <Notice tone="warn">Carnet personnel. N’y écris jamais de nom de client ni d’information couverte par le secret professionnel.</Notice>
      <H2>Mes stages</H2>
      {c.stages.map((x) => (
        <Card key={x.id}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{x.service}</Text>
          {!!x.periode && <Text style={{ color: C.muted }}>{x.periode}</Text>}
          {!!x.notes && <Text style={[u.item, { marginTop: 6 }]}>{x.notes}</Text>}
          <Pressable onPress={() => maj((y) => ({ ...y, stages: y.stages.filter((z) => z.id !== x.id) }))} style={{ marginTop: 6 }}><Text style={{ color: C.ko, fontWeight: '700' }}>Supprimer</Text></Pressable>
        </Card>
      ))}
      <Card>
        <Text style={u.label}>Ajouter un stage</Text>
        {champ(service, setService, 'Lieu de stage (ex. cabinet en droit social, juridiction)')}
        {champ(periode, setPeriode, 'Période (ex. janvier – juin 2027)')}
        {champ(notes, setNotes, 'Objectifs, apprentissages, points à revoir', true)}
        <Btn title="Ajouter" disabled={!service.trim()} onPress={() => { maj((y) => ({ ...y, stages: [...y.stages, { id: String(Date.now()), service: service.trim(), periode: periode.trim(), notes: notes.trim() }] })); setService(''); setPeriode(''); setNotes(''); }} />
      </Card>
      <H2>Compétences ({faits}/{COMPETENCES.length})</H2>
      {COMPETENCES.map((g) => {
        const n = c.gestes[g] || 0;
        return (
          <Card key={g} style={{ paddingVertical: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, color: C.ink }}>{n > 0 ? '✓ ' : ''}{g}</Text>
              <Pressable onPress={() => maj((y) => ({ ...y, gestes: { ...y.gestes, [g]: Math.max(0, n - 1) } }))} hitSlop={8} style={s.cpt}><Text style={{ color: C.ink, fontWeight: '900' }}>−</Text></Pressable>
              <Text style={{ width: 28, textAlign: 'center', fontWeight: '800', color: C.ink }}>{n}</Text>
              <Pressable onPress={() => maj((y) => ({ ...y, gestes: { ...y.gestes, [g]: n + 1 } }))} hitSlop={8} style={s.cpt}><Text style={{ color: C.ink, fontWeight: '900' }}>+</Text></Pressable>
            </View>
          </Card>
        );
      })}
    </Page>
  );
}

// ---------- Tuteur IA ----------
type Msg = { r: 'user' | 'assistant'; t: string };
function Tuteur({ back, user, sortir }: PP) {
  const [msgs, setMsgs] = useState<Msg[]>([{ r: 'assistant', t: 'Bonjour ! Je suis le tuteur IA de CAP Droit. Pose-moi une question de cours : notion, article, jurisprudence, méthode du cas pratique ou de la note de synthèse… Je ne remplace ni tes enseignants ni une consultation d’avocat, et je ne traite pas de dossier réel. N’écris aucune information confidentielle.' }]);
  const [txt, setTxt] = useState('');
  const [busy, setBusy] = useState(false);
  if (!user)
    return (
      <Page>
        <Back onPress={back} />
        <H1>Tuteur IA</H1>
        <Notice>Le tuteur IA est réservé aux comptes (gratuits), pour limiter les abus.</Notice>
        <Btn title="Se connecter ou créer un compte" onPress={async () => { await AsyncStorage.removeItem('capd:sanscompte').catch(() => {}); sortir(); }} />
      </Page>
    );
  const envoyer = async () => {
    const t = txt.trim();
    if (!t || busy) return;
    const nv: Msg[] = [...msgs, { r: 'user', t }];
    setMsgs(nv); setTxt(''); setBusy(true);
    try {
      const rep = await demanderTuteur(nv.slice(1).slice(-12).map((m) => ({ role: m.r, content: m.t })));
      setMsgs([...nv, { r: 'assistant', t: rep }]);
    } catch (e: any) {
      setMsgs([...nv, { r: 'assistant', t: '⚠ ' + (e?.message || 'Le tuteur est indisponible pour le moment.') }]);
    }
    setBusy(false);
  };
  return (
    <Page>
      <Back onPress={back} />
      <H1>Tuteur IA</H1>
      {msgs.map((m, k) => (
        <View key={k} style={{ alignSelf: m.r === 'user' ? 'flex-end' : 'flex-start', maxWidth: '88%', backgroundColor: m.r === 'user' ? C.red : C.card, borderColor: C.line, borderWidth: m.r === 'user' ? 0 : 1, borderRadius: 14, padding: 10, marginBottom: 8 }}>
          <Text style={{ color: m.r === 'user' ? '#fff' : C.ink, lineHeight: 21 }}>{m.t}</Text>
        </View>
      ))}
      {busy && <Text style={{ color: C.muted, marginBottom: 8 }}>Le tuteur réfléchit…</Text>}
      <TextInput value={txt} onChangeText={setTxt} placeholder="Ta question (ex. : différence entre nullité absolue et relative)" placeholderTextColor={C.muted} multiline style={{ borderWidth: 1, borderColor: C.line, borderRadius: 12, padding: 10, color: C.ink, minHeight: 60, textAlignVertical: 'top', backgroundColor: C.card }} />
      <Btn title="Envoyer" disabled={!txt.trim() || busy} onPress={envoyer} />
      <Text style={{ color: C.muted, fontSize: 11, lineHeight: 16 }}>Réponses générées par une IA : elles peuvent contenir des erreurs. Vérifie toujours dans tes cours et les recommandations officielles.</Text>
    </Page>
  );
}

// ---------- Administration des signalements ----------
function AdminView({ back, user }: PP) {
  const [list, setList] = useState<any[] | null>(null);
  const [tous, setTous] = useState(false);
  const [err, setErr] = useState('');
  const charger = async () => { setErr(''); try { setList(await listerSignalements(tous)); } catch (e: any) { setErr(e?.message || 'Erreur'); setList([]); } };
  useEffect(() => { charger(); }, [tous]);
  if (!estAdmin(user)) return <Page><Back onPress={back} /><Notice>Accès réservé.</Notice></Page>;
  return (
    <Page>
      <Back onPress={back} />
      <H1>Signalements</H1>
      <Chips>
        <Chip label="À traiter" on={!tous} onPress={() => setTous(false)} />
        <Chip label="Tous" on={tous} onPress={() => setTous(true)} />
      </Chips>
      {!!err && <Text style={{ color: C.ko }}>{err}</Text>}
      {list === null && <Text style={{ color: C.muted }}>Chargement…</Text>}
      {list && !list.length && <Text style={{ color: C.muted }}>Aucun signalement.</Text>}
      {(list || []).map((x) => (
        <Card key={x.id} style={x.traite ? { opacity: 0.6 } : undefined}>
          <Text style={u.label}>{new Date(x.created_at).toLocaleString('fr-FR')} · {x.plateforme || ''}</Text>
          <Text style={{ fontWeight: '800', color: C.navy, marginBottom: 4 }}>{x.cible}</Text>
          <Text style={u.item}>{x.texte}</Text>
          {String(x.cible).startsWith('fiche:') && ficheById(String(x.cible).slice(6)) && <Text style={{ color: C.muted, marginTop: 4 }}>Fiche : {ficheById(String(x.cible).slice(6))?.titre}</Text>}
          <Btn kind="ghost" title={x.traite ? 'Marquer à traiter' : '✓ Marquer traité'} onPress={async () => { try { await marquerSignalement(x.id, !x.traite); charger(); } catch (e: any) { setErr(e?.message || 'Erreur'); } }} />
        </Card>
      ))}
    </Page>
  );
}

// ---------- Rappels quotidiens (notifications locales, Android et iOS) ----------
async function planifierRappel(h: number | null): Promise<string> {
  if (Platform.OS === 'web') return 'web';
  try {
    const N: any = require('expo-notifications');
    await N.cancelAllScheduledNotificationsAsync();
    if (h === null) return 'off';
    const p = await N.requestPermissionsAsync();
    if (!p.granted) return 'refus';
    if (Platform.OS === 'android') await N.setNotificationChannelAsync('rappels', { name: 'Rappels de révision', importance: N.AndroidImportance.DEFAULT });
    await N.scheduleNotificationAsync({
      content: { title: 'CAP Droit', body: 'Quelques QCM aujourd’hui ? 10 minutes suffisent pour garder le rythme.' },
      trigger: { type: N.SchedulableTriggerInputTypes.DAILY, hour: h, minute: 0, channelId: 'rappels' },
    });
    return 'ok';
  } catch {
    return 'erreur';
  }
}

function Rappels() {
  const [v, setV] = useState('off');
  const [msg, setMsg] = useState('');
  useEffect(() => { AsyncStorage.getItem('capd:rappel').then((x) => setV(x || 'off')); }, []);
  const choisir = async (x: string) => {
    const r = await planifierRappel(x === 'off' ? null : Number(x));
    if (r === 'ok' || r === 'off') { setV(x); AsyncStorage.setItem('capd:rappel', x).catch(() => {}); }
    setMsg(r === 'ok' ? `Rappel programmé chaque jour à ${x} h.` : r === 'off' ? 'Rappels désactivés.' : r === 'web' ? 'Les rappels sont disponibles dans l’application Android.' : r === 'refus' ? 'Autorise les notifications dans les réglages du téléphone.' : 'Impossible de programmer le rappel.');
  };
  return (
    <>
      <H2>Rappel de révision</H2>
      <Chips>
        {[['off', 'Désactivé'], ['8', '8 h'], ['12', '12 h'], ['18', '18 h'], ['20', '20 h'], ['21', '21 h']].map(([x, l]) => (
          <Chip key={x} label={l} on={v === x} onPress={() => choisir(x)} />
        ))}
      </Chips>
      {!!msg && <Text style={{ color: C.muted, marginBottom: 8 }}>{msg}</Text>}
    </>
  );
}

// ---------- Mon compte ----------
function CompteView({ back, user, sortir, sync }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Mon compte</H1>
      <Compte user={user} sortir={sortir} sync={sync} />
      <Notice>Ton compte sert uniquement à sauvegarder ta progression (fiches lues, scores, favoris, notes) et à la retrouver sur tes autres appareils. N’écris jamais d’information confidentielle concernant un tiers dans tes notes.</Notice>
    </Page>
  );
}

// ---------- Révision express (cartes mémoire, système de Leitner) ----------
type Carte = { k: string; recto: string; sous?: string; verso: string; detail?: string };
const INTERVALLES = [0, 1, 3, 7, 14, 30];
function cartes(deck: string): Carte[] {
  if (deck === 'arrets') return ARRETS.map((a) => ({ k: 'fr:' + a.id, recto: a.nom, sous: `${a.jur}, ${a.date}`, verso: a.apport }));
  if (deck === 'articles') return ARTICLES.map((a) => ({ k: 'fa:' + a.id, recto: `Article ${a.num}`, sous: CODES.find((c) => c.id === a.code)?.nom, verso: a.titre, detail: a.texte }));
  if (deck === 'adages') return ADAGES.map((a) => ({ k: 'fd:' + a.la, recto: a.la, verso: a.fr, detail: a.sens }));
  return LEXIQUE.map((t) => ({ k: 'fl:' + t.t, recto: t.t, verso: t.d }));
}
const DECKS: [string, string, string][] = [
  ['arrets', '🏛 Grands arrêts', 'Nom de l’arrêt → apport'],
  ['articles', '⚖️ Articles des codes', 'Numéro → contenu'],
  ['adages', '🏺 Adages latins', 'Adage → traduction et sens'],
  ['lexique', '📖 Vocabulaire juridique', 'Terme → définition'],
];
function aReviser(st: St, deck: string) {
  const t = today();
  return cartes(deck).filter((c) => !st.due[c.k] || st.due[c.k] <= t);
}

function FlashMenu({ st, back, go }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Révision express</H1>
      <Sub>Retourne la carte, puis dis honnêtement si tu savais. Une carte sue revient de plus en plus tard (1, 3, 7, 14 puis 30 jours) ; une carte ratée revient aujourd’hui.</Sub>
      {DECKS.map(([id, t, d]) => {
        const tout = cartes(id);
        const dues = aReviser(st, id).length;
        const sues = tout.filter((c) => (st.box[c.k] || 0) >= 3).length;
        return (
          <Card key={id} onPress={() => go({ s: 'flash', deck: id })}>
            <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{t} ›</Text>
            <Text style={{ color: C.muted, fontSize: 13, marginBottom: 8 }}>{d} · {dues} à revoir aujourd’hui</Text>
            <Bar value={tout.length ? sues / tout.length : 0} color={C.gold} />
            <Text style={{ color: C.muted, fontSize: 11, marginTop: 4 }}>{sues} / {tout.length} bien ancrées</Text>
          </Card>
        );
      })}
    </Page>
  );
}

function FlashRun({ deck, st, save, back }: PP & { deck: string }) {
  const [pile] = useState(() => shuffle(aReviser(st, deck)).slice(0, 20));
  const [i, setI] = useState(0);
  const [vu, setVu] = useState(false);
  const [ok, setOk] = useState(0);
  const titre = DECKS.find((d) => d[0] === deck)?.[1] || '';
  const noter = (su: boolean) => {
    const c = pile[i];
    save((x) => {
      const b = su ? Math.min(5, (x.box[c.k] || 0) + 1) : 0;
      const d = new Date();
      d.setDate(d.getDate() + INTERVALLES[b]);
      return { ...x, box: { ...x.box, [c.k]: b }, due: { ...x.due, [c.k]: su ? d.toISOString().slice(0, 10) : today() } };
    });
    if (su) setOk((n) => n + 1);
    setVu(false);
    setI(i + 1);
  };
  if (!pile.length)
    return (
      <Page>
        <Back onPress={back} />
        <H1>{titre}</H1>
        <Notice>Rien à revoir pour aujourd’hui dans ce paquet. Reviens demain, ou essaie un autre paquet.</Notice>
      </Page>
    );
  if (i >= pile.length)
    return (
      <Page>
        <Back onPress={back} />
        <View style={s.hero}>
          <Text style={s.heroL}>{titre}</Text>
          <Text style={{ color: '#fff', fontSize: 36, fontWeight: '900' }}>{ok} / {pile.length}</Text>
          <Text style={{ color: 'rgba(255,255,255,0.85)' }}>cartes sues du premier coup</Text>
        </View>
        <Btn title="Terminer" onPress={back} />
      </Page>
    );
  const c = pile[i];
  return (
    <Page>
      <Back onPress={back} label="Quitter" />
      <Text style={{ color: C.muted, fontWeight: '700', marginBottom: 8 }}>{titre} · {i + 1}/{pile.length}</Text>
      <Bar value={i / pile.length} color={C.gold} />
      <Pressable onPress={() => setVu(true)} style={[u.card, { minHeight: 260, justifyContent: 'center', marginTop: 14, borderWidth: 2, borderColor: vu ? C.gold : C.line }]}>
        <Text style={{ fontSize: 22, fontWeight: '900', color: C.ink, textAlign: 'center', fontStyle: deck === 'adages' ? 'italic' : 'normal' }}>{c.recto}</Text>
        {!!c.sous && <Text style={{ color: C.red, textAlign: 'center', marginTop: 6, fontWeight: '700' }}>{c.sous}</Text>}
        {vu ? (
          <View style={{ marginTop: 18, borderTopWidth: 1, borderColor: C.line, paddingTop: 14 }}>
            <Text style={{ fontSize: 16, fontWeight: '800', color: C.navy, textAlign: 'center', lineHeight: 23 }}>{c.verso}</Text>
            {!!c.detail && <Text style={{ color: C.ink, marginTop: 10, lineHeight: 21 }} numberOfLines={12}>{c.detail}</Text>}
          </View>
        ) : (
          <Text style={{ color: C.muted, textAlign: 'center', marginTop: 20 }}>Touchez la carte pour la retourner</Text>
        )}
      </Pressable>
      {vu && (
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1 }}><Btn kind="ghost" title="✗ À revoir" onPress={() => noter(false)} /></View>
          <View style={{ flex: 1 }}><Btn title="✓ Je savais" onPress={() => noter(true)} /></View>
        </View>
      )}
    </Page>
  );
}

function MesNotes({ st, back, openFiche }: PP) {
  const ns = Object.entries(st.notes).filter(([k, v]) => v && v.trim() && ficheById(k));
  return (
    <Page>
      <Back onPress={back} />
      <H1>Mes notes</H1>
      {ns.length === 0 && <Notice>Tu n’as pas encore de notes. Ouvre une fiche et écris dans « Mes notes » en bas de page.</Notice>}
      {ns.map(([k, v]) => (
        <Card key={k} onPress={() => openFiche(k)}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{ficheById(k)?.titre} ›</Text>
          <Text style={{ color: C.muted, marginTop: 4, lineHeight: 20 }} numberOfLines={4}>{v}</Text>
        </Card>
      ))}
    </Page>
  );
}

function Progression({ st, back, go, racine, user, sync }: PP) {
  const lus = Object.keys(st.lu).length;
  return (
    <Page>
      {!racine && <Back onPress={back} />}
      <H1>Mes progrès</H1>
      {CLOUD_OK && <Text style={{ color: user ? (sync === 'erreur' ? C.gold : C.ok) : C.muted, marginBottom: 10, fontSize: 13 }}>{user ? (sync === 'erreur' ? '⚠ Hors ligne : sauvegarde en attente' : '☁ Sauvegardé dans ton compte') : 'Sans compte : progression gardée sur cet appareil'}</Text>}
      <Card>
        <Row label="Fiches lues" value={`${lus} / ${FICHES.length}`} />
        <Row label="Fiches maîtrisées" value={String(Object.keys(st.maitrise).length)} />
        <Row label="Questions répondues" value={String(st.qTot)} />
        <Row label="Taux de réussite" value={st.qTot ? Math.round((100 * st.qOk) / st.qTot) + ' %' : '—'} />
        <Row label="Cas pratiques faits" value={`${Object.keys(st.casDone).length} / ${CAS.length}`} />
        <Row label="Cartes mémoire bien ancrées" value={String(Object.values(st.box).filter((b) => b >= 3).length)} />
        <Row label="Jours de révision" value={String(st.jours.length)} />
      </Card>
      <H2>Par matière</H2>
      {MATIERES.map((m) => {
        const fs = FICHES.filter((f) => f.m === m.id);
        const l = fs.filter((f) => st.lu[f.id]).length;
        const r = st.parM[m.id];
        return (
          <Card key={m.id} onPress={() => go({ s: 'matiere', id: m.id })} style={{ paddingVertical: 12 }}>
            <Text style={{ fontWeight: '800', color: C.ink }}>{m.icone} {m.nom} <Text style={{ color: C.muted, fontWeight: '600' }}>· {m.niv}</Text></Text>
            <View style={{ marginTop: 8 }}><Bar value={fs.length ? l / fs.length : 0} /></View>
            <Text style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>{l}/{fs.length} fiches{r ? ` · QCM ${Math.round((100 * r[1]) / Math.max(1, r[0]))} % sur ${r[0]} questions` : ''}</Text>
          </Card>
        );
      })}
    </Page>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1B2A4A', paddingHorizontal: 16, paddingBottom: 10 },
  logo: { width: 30, height: 30, borderRadius: 9, backgroundColor: '#7A1F3D', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  brand: { color: '#fff', fontWeight: '900', fontSize: 17, letterSpacing: 1.2, flex: 1 },
  triNum: { width: 22, height: 22, borderRadius: 11, backgroundColor: C.navy, color: '#fff', textAlign: 'center', fontWeight: '900', fontSize: 12, lineHeight: 22, marginRight: 8, overflow: 'hidden' },
  rang: { color: '#fff', fontWeight: '800', fontSize: 11, paddingHorizontal: 7, paddingVertical: 2, borderRadius: 6, overflow: 'hidden' },
  cpt: { width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: C.line, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.18)', alignItems: 'center', justifyContent: 'center' },
  tabbar: { flexDirection: 'row', borderTopWidth: StyleSheet.hairlineWidth, borderColor: C.line, backgroundColor: C.bar, paddingBottom: Platform.OS === 'ios' ? 0 : 6, paddingTop: 6 },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  hero: { backgroundColor: '#1B2A4A', borderRadius: 20, padding: 18, marginBottom: 12 },
  heroL: { color: 'rgba(255,255,255,0.75)', fontWeight: '800', fontSize: 12, letterSpacing: 1.2, textTransform: 'uppercase' },
  heroT: { color: '#fff', fontWeight: '900', fontSize: 22, marginTop: 4 },
  quick: { width: '31%', backgroundColor: C.card, borderWidth: 1, borderColor: C.line, borderRadius: 14, paddingVertical: 14, alignItems: 'center' },
  choice: { borderWidth: 1.5, borderColor: C.line, backgroundColor: C.card, borderRadius: 14, padding: 14, marginBottom: 8 },
});
