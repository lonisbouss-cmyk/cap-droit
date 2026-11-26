// CAP DROIT — types des contenus
export type Niveau = 'L1' | 'L2' | 'L3' | 'M1' | 'CRFPA';

export type Matiere = { id: string; nom: string; niv: Niveau; icone: string; desc: string };

export type Fiche = {
  id: string;
  m: string; // id de matière
  titre: string;
  intro: string;
  parts: { t: string; l: string[] }[];
  art?: string[]; // ids d'articles
  arrets?: string[]; // ids d'arrêts
  retenir: string[];
};

export type CodeId = 'civ' | 'pen' | 'cpp' | 'cpc' | 'trav' | 'const' | 'ddhc' | 'cja' | 'com' | 'cedh' | 'conso' | 'crpa';

export type Article = {
  id: string;
  code: CodeId;
  num: string;
  titre: string;
  texte: string;
  synth?: boolean; // true = synthèse pédagogique, pas le texte officiel intégral
};

export type Arret = {
  id: string;
  nom: string;
  jur: string;
  date: string;
  m: string;
  apport: string;
};

export type Question = { q: string; c: string[]; a: number | number[]; e: string; m: string };

export type Etape = { q: string; c: string[]; a: number; e: string };
export type CasPratique = { id: string; titre: string; m: string; niv: Niveau; enonce: string; etapes: Etape[]; retenir: string[]; fiches: string[] };

export type Methode = { id: string; titre: string; pour: string; intro: string; etapes: { t: string; l: string[] }[]; pieges: string[] };

export type Terme = { t: string; d: string };
export type Adage = { la: string; fr: string; sens: string };
