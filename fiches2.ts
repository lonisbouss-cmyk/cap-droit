// CAP DROIT — fiches de cours : droit public, pénal, social, affaires, européen, CRFPA
import type { Fiche } from './types';

export const FICHES2: Fiche[] = [
  // ======================= DROIT CONSTITUTIONNEL (L1) =======================
  {
    id: 'cst-etat', m: 'constit', titre: 'L’État et la souveraineté',
    intro: 'L’État est une personne morale de droit public réunissant un territoire, une population et une puissance publique souveraine. La France est un État unitaire décentralisé.',
    parts: [
      { t: 'Éléments constitutifs', l: ['Territoire (terrestre, maritime, aérien), population (nationaux), gouvernement exerçant une autorité effective.', 'Souveraineté : l’État n’est soumis à aucune autorité supérieure et détient la compétence de sa compétence.'] },
      { t: 'Formes d’État', l: ['État unitaire : un seul centre d’impulsion politique ; centralisé, déconcentré ou décentralisé (France : art. 1 C., « organisation décentralisée »).', 'État fédéral : superposition d’ordres juridiques (États-Unis, Allemagne) ; principes de superposition, d’autonomie et de participation.', 'Confédération : association d’États souverains par traité.'] },
      { t: 'Souveraineté nationale et populaire', l: ['Souveraineté nationale (Sieyès) : appartient à la Nation, entité abstraite ; démocratie représentative, mandat représentatif, suffrage pouvant être restreint.', 'Souveraineté populaire (Rousseau) : appartient au peuple, somme des citoyens ; démocratie directe, mandat impératif, suffrage universel.', 'Synthèse de l’article 3 C. 1958 : la souveraineté nationale appartient au peuple qui l’exerce par ses représentants et par le référendum.'] },
    ],
    art: ['const-1', 'const-2', 'const-3', 'ddhc-16'],
    retenir: ['Territoire + population + puissance souveraine.', 'Art. 3 : synthèse des deux théories de la souveraineté.', 'Mandat impératif interdit (art. 27 C.).'],
  },
  {
    id: 'cst-regimes', m: 'constit', titre: 'Séparation des pouvoirs et régimes politiques',
    intro: 'Montesquieu : « pour qu’on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir ». La manière d’organiser cette séparation définit le régime.',
    parts: [
      { t: 'Régime parlementaire', l: ['Séparation souple : collaboration et moyens d’action réciproques.', 'Responsabilité politique du gouvernement devant le Parlement ; droit de dissolution de l’exécutif.', 'Exécutif bicéphale (chef de l’État irresponsable, gouvernement responsable). Ex. : Royaume-Uni, Allemagne.'] },
      { t: 'Régime présidentiel', l: ['Séparation stricte : pas de responsabilité politique du gouvernement, pas de dissolution.', 'Exécutif monocéphale élu ; contre-pouvoirs : veto, procédure d’impeachment. Ex. : États-Unis.'] },
      { t: 'La Ve République', l: ['Régime parlementaire rationalisé (responsabilité du Gouvernement art. 49, dissolution art. 12) avec un Président fort, élu au suffrage universel direct depuis 1962.', 'Fait majoritaire et quinquennat (2000) : prééminence présidentielle, sauf en cohabitation (1986, 1993, 1997).', 'Absence de majorité absolue à l’Assemblée depuis 2022 : usage accru de l’article 49 al. 3, motions de censure (censure du gouvernement Barnier en décembre 2024).'] },
    ],
    art: ['ddhc-16', 'const-5', 'const-12', 'const-20', 'const-49'],
    retenir: ['Parlementaire = responsabilité + dissolution.', 'Présidentiel = séparation stricte.', 'Ve = parlementarisme rationalisé à prépondérance présidentielle.'],
  },
  {
    id: 'cst-institutions', m: 'constit', titre: 'Les institutions de la Ve République',
    intro: 'La Constitution du 4 octobre 1958 organise les rapports entre le Président, le Gouvernement et le Parlement.',
    parts: [
      { t: 'Le Président de la République', l: ['Élu pour 5 ans au suffrage universel direct, deux mandats consécutifs maximum (art. 6).', 'Gardien de la Constitution, arbitre, garant de l’indépendance nationale (art. 5).', 'Pouvoirs propres dispensés de contreseing (art. 19) : nomination du Premier ministre, référendum, dissolution, article 16, message au Parlement, saisine du Conseil constitutionnel, nomination de 3 membres du Conseil constitutionnel.', 'Irresponsabilité pour les actes accomplis en cette qualité, sauf destitution pour manquement à ses devoirs (art. 68).'] },
      { t: 'Le Gouvernement', l: ['Détermine et conduit la politique de la nation (art. 20).', 'Le Premier ministre dirige l’action du Gouvernement, exerce le pouvoir réglementaire (art. 21).', 'Responsable devant l’Assemblée nationale (art. 49 et 50).'] },
      { t: 'Le Parlement', l: ['Bicaméral : Assemblée nationale (577 députés, suffrage direct) et Sénat (348 sénateurs, suffrage indirect, représentation des collectivités).', 'Vote la loi, contrôle le Gouvernement, évalue les politiques publiques (art. 24).', 'Domaine de la loi limité (art. 34), le reste relevant du règlement (art. 37) ; ordonnances (art. 38).'] },
    ],
    art: ['const-5', 'const-6', 'const-8', 'const-11', 'const-12', 'const-16', 'const-20', 'const-21', 'const-24', 'const-34', 'const-37', 'const-38', 'const-49'],
    retenir: ['Art. 19 : pouvoirs propres du Président.', 'Art. 20-21 : rôle du Gouvernement et du Premier ministre.', 'Art. 34/37 : partage loi/règlement.'],
  },
  {
    id: 'cst-controle', m: 'constit', titre: 'Le contrôle de constitutionnalité',
    intro: 'Le Conseil constitutionnel vérifie que les lois respectent la Constitution. Depuis 2008, la QPC permet aux justiciables de le saisir indirectement.',
    parts: [
      { t: 'Le Conseil constitutionnel', l: ['9 membres nommés pour 9 ans (3 par le Président, 3 par le président de l’AN, 3 par le président du Sénat), renouvelés par tiers, plus les anciens Présidents membres de droit.', 'Normes de référence : bloc de constitutionnalité depuis la décision Liberté d’association (1971).', 'Refus du contrôle de conventionnalité (IVG, 1975).'] },
      { t: 'Contrôle a priori (art. 61)', l: ['Obligatoire pour les lois organiques et les règlements des assemblées.', 'Facultatif pour les lois ordinaires : saisine par le Président, le Premier ministre, les présidents des assemblées ou 60 députés/60 sénateurs (depuis 1974).', 'Délai d’un mois ; décisions : conformité, non-conformité totale ou partielle, réserves d’interprétation.'] },
      { t: 'QPC (art. 61-1)', l: ['Soulevée devant toute juridiction, par écrit distinct et motivé.', 'Triple filtre : disposition applicable au litige, non déjà déclarée conforme (sauf changement de circonstances), question nouvelle ou sérieuse.', 'Transmission au Conseil d’État ou à la Cour de cassation, qui renvoient au Conseil constitutionnel (3 mois chacun).', 'Abrogation de la disposition à la publication ou à une date différée (art. 62).'] },
    ],
    art: ['const-61', 'const-61-1', 'const-62'],
    arrets: ['liberteassoc', 'ivg', 'qpcgav'],
    retenir: ['1971 : bloc de constitutionnalité.', '1974 : saisine parlementaire.', '2008 : QPC, effet abrogatif.'],
  },

  // ======================= INSTITUTIONS JURIDICTIONNELLES (L1) =======================
  {
    id: 'ij-organisation', m: 'instit', titre: 'L’organisation juridictionnelle française',
    intro: 'La France connaît une dualité d’ordres de juridictions : judiciaire et administratif, coiffés respectivement par la Cour de cassation et le Conseil d’État.',
    parts: [
      { t: 'Ordre judiciaire', l: ['Civil : tribunal judiciaire (juridiction de droit commun depuis 2020, avec le juge des contentieux de la protection), tribunal de commerce (activités économiques), conseil de prud’hommes, cours d’appel, Cour de cassation.', 'Pénal : tribunal de police (contraventions), tribunal correctionnel (délits), cour d’assises et cour criminelle départementale (crimes punis de 15 à 20 ans), juridictions pour mineurs.', 'La Cour de cassation ne juge que le droit : elle casse ou rejette, et renvoie en principe l’affaire.'] },
      { t: 'Ordre administratif', l: ['Tribunaux administratifs, cours administratives d’appel, Conseil d’État.', 'Le Conseil d’État est aussi conseiller du Gouvernement (avis sur les projets de loi et de décret).', 'Le Tribunal des conflits règle les conflits de compétence (Blanco, 1873).'] },
      { t: 'Principes', l: ['Indépendance et impartialité des juges (art. 64 C., art. 6 CEDH).', 'Double degré de juridiction, collégialité (tempérée par le juge unique), publicité, gratuité.', 'Magistrats du siège (inamovibles) / du parquet (ministère public, hiérarchisés).'] },
    ],
    art: ['cedh-6', 'const-66'],
    arrets: ['blanco', 'cadot'],
    retenir: ['Deux ordres + Tribunal des conflits.', 'Cassation = juge du droit.', 'Siège inamovible / parquet hiérarchisé.'],
  },
  {
    id: 'ij-professions', m: 'instit', titre: 'Les acteurs de la justice',
    intro: 'Autour du juge gravitent les auxiliaires de justice et les officiers publics et ministériels, chacun avec un statut et un rôle précis.',
    parts: [
      { t: 'Magistrats', l: ['Recrutés principalement par l’École nationale de la magistrature (Bordeaux).', 'Conseil supérieur de la magistrature : nominations et discipline (art. 65 C.).'] },
      { t: 'Auxiliaires et officiers ministériels', l: ['Avocats : assistance et représentation, monopole de la représentation devant le tribunal judiciaire (sauf exceptions) ; formation au CRFPA.', 'Avocats aux Conseils : représentation devant le Conseil d’État et la Cour de cassation.', 'Commissaires de justice (fusion des huissiers et commissaires-priseurs en 2022) : signification des actes, exécution forcée, constats.', 'Notaires : rédaction des actes authentiques.', 'Greffiers : authentification des actes juridictionnels.'] },
    ],
    retenir: ['Avocat = assistance + représentation.', 'Commissaire de justice depuis le 1er juillet 2022.'],
  },

  // ======================= DROIT ADMINISTRATIF (L2) =======================
  {
    id: 'adm-notion', m: 'admin', titre: 'Notion de droit administratif et compétence du juge',
    intro: 'Le droit administratif est le droit spécial de l’administration, largement jurisprudentiel. La répartition des compétences entre juges repose sur des critères dégagés par le Tribunal des conflits.',
    parts: [
      { t: 'Fondements', l: ['Loi des 16-24 août 1790 et décret du 16 fructidor an III : interdiction aux juges judiciaires de connaître des actes de l’administration.', 'Justice déléguée (1872), fin du ministre-juge (Cadot, 1889).', 'Valeur constitutionnelle de la compétence administrative pour l’annulation et la réformation des actes de puissance publique (Cons. const., 23 janv. 1987, Conseil de la concurrence).'] },
      { t: 'Critères', l: ['Service public (Blanco, 1873 ; École de Bordeaux, Duguit).', 'Puissance publique (Hauriou) : prérogatives exorbitantes du droit commun.', 'Aujourd’hui, combinaison des deux ; les SPIC relèvent en principe du droit privé (Bac d’Eloka, 1921).', 'Blocs de compétence judiciaire : liberté individuelle, propriété immobilière (voie de fait, emprise irrégulière), accidents de véhicules (loi du 31 décembre 1957).'] },
    ],
    art: ['const-66'],
    arrets: ['blanco', 'cadot', 'eloka'],
    retenir: ['Blanco : service public + compétence administrative.', 'SPIC : droit privé en principe.', 'Voie de fait : compétence judiciaire.'],
  },
  {
    id: 'adm-actes', m: 'admin', titre: 'Les actes administratifs unilatéraux',
    intro: 'L’acte administratif unilatéral est la manifestation de volonté de l’administration qui modifie l’ordonnancement juridique sans le consentement des destinataires.',
    parts: [
      { t: 'Typologie', l: ['Actes réglementaires (généraux et impersonnels) / individuels (destinataires nommément désignés) / actes ni réglementaires ni individuels (déclaration d’utilité publique).', 'Actes décisoires / non décisoires (avis, mesures préparatoires, circulaires interprétatives).', 'Lignes directrices et droit souple (avis, recommandations) : attaquables s’ils sont susceptibles d’avoir des effets notables (CE, 2016, Fairvesta et Numericable ; 2020, GISTI).'] },
      { t: 'Régime', l: ['Privilège du préalable : exécutoire dès publication ou notification.', 'Motivation obligatoire des décisions individuelles défavorables (art. L. 211-2 CRPA) ; procédure contradictoire préalable (art. L. 121-1).', 'Silence pendant deux mois = acceptation, sauf nombreuses exceptions (art. L. 231-1).', 'Retrait/abrogation d’une décision créatrice de droits illégale : seulement dans les 4 mois (art. L. 242-1, codifiant Ternon, 2001).', 'Non-rétroactivité des actes administratifs (CE, 1948, Société du journal L’Aurore) ; sécurité juridique (KPMG, 2006).'] },
    ],
    art: ['crpa-L.121-1', 'crpa-L.211-2', 'crpa-L.231-1', 'crpa-L.242-1'],
    arrets: ['kpmg', 'trompier'],
    retenir: ['Silence vaut acceptation (avec exceptions).', 'Retrait/abrogation d’un acte créateur de droits illégal : 4 mois.', 'Motivation des décisions défavorables.'],
  },
  {
    id: 'adm-police', m: 'admin', titre: 'La police administrative',
    intro: 'La police administrative est une activité préventive visant à maintenir l’ordre public. Elle se distingue de la police judiciaire, répressive.',
    parts: [
      { t: 'Ordre public', l: ['Sécurité, tranquillité, salubrité publiques (art. L. 2212-2 CGCT).', 'Moralité publique en cas de circonstances locales particulières.', 'Dignité de la personne humaine (Morsang-sur-Orge, 1995).'] },
      { t: 'Autorités', l: ['Police générale : Premier ministre (Labonne, 1919), préfet, maire.', 'Polices spéciales : objet ou autorité particuliers (cinéma, installations classées…).', 'Concours : l’autorité inférieure peut aggraver une mesure de l’autorité supérieure si les circonstances locales le justifient.'] },
      { t: 'Contrôle du juge', l: ['Mesure nécessaire, adaptée et proportionnée (Benjamin, 1933 ; triple test, Association pour la promotion de l’image, 2011).', 'Interdiction générale et absolue en principe illégale.', 'Contrôle renforcé en référé-liberté (Dieudonné, 2014 ; burkini, 2016).'] },
    ],
    arrets: ['labonne', 'benjamin', 'morsang', 'dieudonne', 'burkini'],
    retenir: ['Police administrative = préventive ; judiciaire = répressive.', 'Mesure nécessaire, adaptée, proportionnée.', 'Dignité = composante de l’ordre public.'],
  },
  {
    id: 'adm-sp', m: 'admin', titre: 'Le service public',
    intro: 'Le service public est une activité d’intérêt général assurée ou assumée par une personne publique. Il obéit à des principes communs, les « lois de Rolland ».',
    parts: [
      { t: 'Identification', l: ['Activité d’intérêt général, rattachée à une personne publique.', 'Gestion possible par une personne privée (Caisse primaire Aide et protection, 1938), identifiée par la méthode APREI (2007).', 'SPA / SPIC : objet, origine des ressources, modalités de fonctionnement (USIA, 1956).'] },
      { t: 'Lois du service public', l: ['Continuité (valeur constitutionnelle, conciliée avec le droit de grève).', 'Égalité (accès et traitement ; différences de traitement justifiées par une différence de situation ou l’intérêt général).', 'Mutabilité (adaptation aux besoins, pas de droit acquis au maintien).', 'Neutralité et laïcité.'] },
      { t: 'Modes de gestion', l: ['Régie, établissement public, délégation de service public (concession : risque d’exploitation transféré).'] },
    ],
    arrets: ['aideprotection', 'aprei', 'eloka', 'blanco'],
    retenir: ['Continuité, égalité, mutabilité.', 'APREI : faisceau d’indices pour les personnes privées.'],
  },
  {
    id: 'adm-responsabilite', m: 'admin', titre: 'La responsabilité administrative',
    intro: 'Depuis Blanco, la responsabilité de l’administration obéit à des règles propres, ni générales ni absolues, appliquées par le juge administratif.',
    parts: [
      { t: 'Responsabilité pour faute', l: ['Faute de service (fonctionnement défectueux) / faute personnelle détachable (Pelletier, 1873).', 'Cumul de fautes (Anguet, 1911) et de responsabilités (Lemonnier, 1918) ; action récursoire.', 'Faute simple en principe ; la faute lourde a reculé (médecine, secours, services fiscaux).'] },
      { t: 'Responsabilité sans faute', l: ['Pour risque : choses ou activités dangereuses, collaborateurs occasionnels du service public.', 'Pour rupture d’égalité devant les charges publiques : préjudice anormal et spécial (lois, conventions internationales, refus de concours de la force publique).'] },
    ],
    arrets: ['blanco', 'pelletier', 'anguet', 'lemonnier'],
    retenir: ['Faute de service ≠ faute personnelle.', 'Sans faute : risque ou rupture d’égalité (préjudice anormal et spécial).'],
  },
  {
    id: 'adm-contrats', m: 'admin', titre: 'Les contrats administratifs',
    intro: 'Un contrat est administratif par détermination de la loi (marchés publics, occupation du domaine public) ou par application de critères jurisprudentiels.',
    parts: [
      { t: 'Critères jurisprudentiels', l: ['Critère organique : au moins une personne publique partie (ou mandat, ou transparence).', 'Critère matériel alternatif : participation à l’exécution du service public, ou clause exorbitante (« impliquant, dans l’intérêt général, que le contrat relève du régime exorbitant des contrats administratifs », TC, 2014, Axa).'] },
      { t: 'Régime', l: ['Pouvoirs de l’administration : contrôle, sanction, modification unilatérale, résiliation pour motif d’intérêt général (avec indemnisation).', 'Droits du cocontractant : équilibre financier, imprévision (Gaz de Bordeaux, 1916), fait du prince.', 'Contentieux : recours des tiers (Tarn-et-Garonne, 2014), recours des parties (Béziers I, 2009 : loyauté contractuelle).'] },
    ],
    arrets: ['granits', 'gazbordeaux', 'tarnetgaronne', 'martin'],
    retenir: ['Personne publique + (service public ou clause exorbitante).', 'Pouvoirs exorbitants mais équilibre financier garanti.'],
  },

  // ======================= CONTENTIEUX ADMINISTRATIF (M1) =======================
  {
    id: 'ca-rep', m: 'contadm', titre: 'Le recours pour excès de pouvoir',
    intro: 'Le REP est le procès fait à un acte : il tend à l’annulation d’une décision administrative illégale. Il est ouvert même sans texte (Dame Lamotte, 1950).',
    parts: [
      { t: 'Recevabilité', l: ['Acte administratif décisoire faisant grief.', 'Intérêt à agir suffisamment direct et certain.', 'Délai de 2 mois à compter de la publication ou notification (R. 421-1 CJA) ; délai raisonnable d’un an en l’absence de mention des voies et délais (Czabaj, 2016).', 'Ministère d’avocat non obligatoire en REP devant le TA.'] },
      { t: 'Moyens d’annulation', l: ['Légalité externe : incompétence (d’ordre public), vice de procédure (Danthony, 2011 : seulement s’il a privé d’une garantie ou influé sur le sens de la décision), vice de forme.', 'Légalité interne : violation de la loi, erreur de droit, erreur de fait, erreur de qualification juridique, détournement de pouvoir.', 'Contrôle restreint (erreur manifeste d’appréciation) / normal / maximum (proportionnalité).'] },
      { t: 'Pouvoirs du juge', l: ['Annulation rétroactive ; modulation dans le temps possible (AC !, 2004).', 'Injonction et astreinte (art. L. 911-1 CJA).', 'Substitution de motifs (Hallal, 2004) et de base légale.'] },
    ],
    art: ['cja-R.421-1', 'cja-L.911-1'],
    arrets: ['lamotte', 'cadot'],
    retenir: ['2 mois, acte faisant grief, intérêt à agir.', 'Danthony pour les vices de procédure.', 'Czabaj : délai raisonnable d’un an.'],
  },
  {
    id: 'ca-refere', m: 'contadm', titre: 'Les référés administratifs',
    intro: 'La loi du 30 juin 2000 a créé des procédures d’urgence efficaces devant le juge administratif.',
    parts: [
      { t: 'Référé-suspension (L. 521-1)', l: ['Requête au fond pendante (annulation ou réformation).', 'Urgence + doute sérieux sur la légalité.', 'Suspension de l’exécution de la décision.'] },
      { t: 'Référé-liberté (L. 521-2)', l: ['Urgence (particulière).', 'Atteinte grave et manifestement illégale à une liberté fondamentale par une personne publique ou un organisme privé chargé d’un service public.', 'Décision en 48 heures ; mesures nécessaires à la sauvegarde.'] },
      { t: 'Autres référés', l: ['Référé mesures utiles (L. 521-3) : sans faire obstacle à une décision.', 'Référé-provision, référé-constat, référé-instruction, référés précontractuel et contractuel (marchés publics).'] },
    ],
    art: ['cja-L.521-1', 'cja-L.521-2', 'cja-L.521-3'],
    arrets: ['dieudonne', 'burkini'],
    retenir: ['Suspension : urgence + doute sérieux + recours au fond.', 'Liberté : urgence + atteinte grave et manifestement illégale ; 48 h.'],
  },

  // ======================= DROIT PÉNAL GÉNÉRAL (L2) =======================
  {
    id: 'pg-legalite', m: 'penalg', titre: 'Le principe de légalité criminelle',
    intro: 'Nullum crimen, nulla poena sine lege : nul ne peut être puni pour une infraction ou d’une peine qui ne serait pas prévue par un texte antérieur, clair et précis.',
    parts: [
      { t: 'Fondements', l: ['Art. 7 et 8 DDHC, art. 34 C., art. 7 CEDH, art. 111-3 C. pén.', 'Répartition : la loi pour les crimes et délits, le règlement pour les contraventions (art. 111-2).'] },
      { t: 'Corollaires', l: ['Interprétation stricte (art. 111-4) : pas d’analogie in defavorem ; le juge peut interpréter selon la ratio legis.', 'Exigence de clarté et de précision de la loi (contrôle du Conseil constitutionnel : censure du harcèlement sexuel en 2012).', 'Non-rétroactivité de la loi plus sévère, rétroactivité in mitius (art. 112-1) ; application immédiate des lois de procédure, avec réserves (art. 112-2).'] },
    ],
    art: ['pen-111-1', 'pen-111-2', 'pen-111-3', 'pen-111-4', 'pen-112-1', 'ddhc-8', 'cedh-7'],
    arrets: ['foetus'],
    retenir: ['Pas d’infraction ni de peine sans texte.', 'Interprétation stricte.', 'Loi plus douce rétroactive.'],
  },
  {
    id: 'pg-infraction', m: 'penalg', titre: 'Les éléments constitutifs de l’infraction',
    intro: 'Toute infraction suppose un élément légal (texte), un élément matériel (comportement) et un élément moral (intention ou faute).',
    parts: [
      { t: 'Élément matériel', l: ['Infraction de commission ou d’omission (omission de porter secours, art. 223-6).', 'Infraction instantanée (vol) ou continue (recel) ; simple ou d’habitude.', 'Infraction matérielle (résultat exigé : homicide) ou formelle (consommée indépendamment du résultat : empoisonnement).', 'Tentative (art. 121-5) : commencement d’exécution + absence de désistement volontaire ; punissable pour les crimes, pour les délits si un texte le prévoit ; infraction impossible punissable (Perdereau, 1986).'] },
      { t: 'Élément moral (art. 121-3)', l: ['Intention : dol général (conscience et volonté de violer la loi), parfois dol spécial (volonté d’un résultat : intention homicide).', 'Mise en danger délibérée d’autrui.', 'Faute non intentionnelle : imprudence, négligence ; causalité indirecte → faute qualifiée (délibérée ou caractérisée) exigée pour les personnes physiques (loi Fauchon de 2000).', 'Contraventions : simple faute matérielle, sauf force majeure.'] },
    ],
    art: ['pen-121-3', 'pen-121-4', 'pen-121-5', 'pen-223-1', 'pen-223-6'],
    arrets: ['perdereau', 'laboube'],
    retenir: ['Légal + matériel + moral.', 'Tentative : commencement d’exécution + absence de désistement volontaire.', 'Loi Fauchon : causalité indirecte → faute qualifiée.'],
  },
  {
    id: 'pg-participation', m: 'penalg', titre: 'Auteurs, complices et personnes morales',
    intro: 'La responsabilité pénale est personnelle (art. 121-1). Elle peut être engagée en tant qu’auteur, coauteur ou complice, et vise aussi les personnes morales.',
    parts: [
      { t: 'Complicité (art. 121-7)', l: ['Fait principal punissable (crime ou délit ; contravention dans certains cas), même si l’auteur n’est pas poursuivi.', 'Acte positif d’aide ou assistance, ou provocation/instructions ; antérieur ou concomitant.', 'Intention : connaissance du caractère délictueux et volonté de s’y associer.', 'Criminalité d’emprunt : sans fait principal, pas de complicité (Lacour, 1962) ; puni comme auteur (art. 121-6).'] },
      { t: 'Personnes morales (art. 121-2)', l: ['Toutes, sauf l’État ; collectivités territoriales pour les activités délégables.', 'Infraction commise pour leur compte, par leurs organes ou représentants (à identifier, avec un assouplissement récent de la jurisprudence).', 'Cumul possible avec la responsabilité des personnes physiques.'] },
    ],
    art: ['pen-121-1', 'pen-121-2', 'pen-121-6', 'pen-121-7'],
    arrets: ['lacour'],
    retenir: ['Complicité = fait principal punissable + acte positif + intention.', 'Personne morale : organe ou représentant, pour son compte.'],
  },
  {
    id: 'pg-irresponsabilite', m: 'penalg', titre: 'Causes d’irresponsabilité pénale',
    intro: 'Certaines circonstances suppriment la responsabilité : causes objectives (faits justificatifs) et causes subjectives (de non-imputabilité).',
    parts: [
      { t: 'Faits justificatifs (objectifs)', l: ['Ordre de la loi, commandement de l’autorité légitime sauf acte manifestement illégal (art. 122-4).', 'Légitime défense (art. 122-5) : atteinte actuelle et injustifiée ; riposte nécessaire, simultanée, proportionnée ; pour les biens, jamais d’homicide volontaire. Présomptions (art. 122-6).', 'État de nécessité (art. 122-7) : danger actuel ou imminent, acte nécessaire et proportionné.'] },
      { t: 'Causes de non-imputabilité (subjectives)', l: ['Trouble psychique ou neuropsychique ayant aboli le discernement (art. 122-1) ; altération = atténuation de peine. Exception de l’intoxication volontaire en vue de commettre l’infraction (loi 2022, après Halimi).', 'Contrainte irrésistible et imprévisible (art. 122-2).', 'Erreur de droit invincible (art. 122-3).', 'Minorité : discernement requis ; présomption de non-discernement avant 13 ans (CJPM).'] },
    ],
    art: ['pen-122-1', 'pen-122-2', 'pen-122-3', 'pen-122-4', 'pen-122-5', 'pen-122-6', 'pen-122-7'],
    arrets: ['halimi', 'laboube'],
    retenir: ['Légitime défense : actuelle, nécessaire, proportionnée.', 'Abolition du discernement = irresponsabilité ; altération = peine réduite.'],
  },
  {
    id: 'pg-peine', m: 'penalg', titre: 'La peine',
    intro: 'La peine sanctionne l’auteur et favorise son amendement et sa réinsertion (art. 130-1). Son prononcé obéit aux principes de légalité, nécessité et individualisation.',
    parts: [
      { t: 'Échelle des peines', l: ['Crimes : réclusion ou détention criminelle (15 ans au moins, jusqu’à la perpétuité).', 'Délits : emprisonnement jusqu’à 10 ans, amende ≥ 3 750 €, travail d’intérêt général, détention à domicile sous surveillance électronique, stage…', 'Contraventions : amende (5 classes, jusqu’à 1 500 €, 3 000 € en récidive).'] },
      { t: 'Individualisation', l: ['Sursis simple, probatoire ; aménagements (semi-liberté, placement extérieur, détention à domicile).', 'Courtes peines : peine d’emprisonnement ferme inférieure ou égale à 1 mois interdite ; aménagement en principe jusqu’à 6 mois (loi 2019).', 'Récidive légale : aggravation du maximum encouru.'] },
    ],
    art: ['pen-130-1', 'pen-111-1'],
    retenir: ['Fonctions : sanctionner + amender/réinsérer.', 'Crime ≥ 15 ans ; délit ≤ 10 ans.'],
  },

  // ======================= PROCÉDURE PÉNALE (L3) =======================
  {
    id: 'pp-actions', m: 'procpen', titre: 'Action publique et action civile',
    intro: 'L’infraction fait naître l’action publique (pour la société) et, s’il y a une victime, l’action civile (en réparation).',
    parts: [
      { t: 'Action publique', l: ['Exercée par le ministère public ; peut être mise en mouvement par la victime (plainte avec constitution de partie civile, citation directe) (art. 1 CPP).', 'Opportunité des poursuites (art. 40-1) : poursuivre, alternatives (rappel à la loi supprimé en 2023 au profit de l’avertissement pénal probatoire, composition pénale…), classement sans suite.', 'Extinction (art. 6) : décès, prescription (contravention 1 an, délit 6 ans, crime 20 ans), amnistie, abrogation, chose jugée.'] },
      { t: 'Action civile', l: ['Réservée à ceux qui ont personnellement souffert du dommage directement causé par l’infraction (art. 2).', 'Option : devant le juge civil ou devant le juge pénal ; associations habilitées.', 'Le criminel tient le civil en l’état (sursis à statuer pour l’action civile exercée devant le juge civil, limité depuis 2007).'] },
    ],
    art: ['cpp-1', 'cpp-2', 'cpp-6', 'cpp-7', 'cpp-8', 'cpp-9', 'cpp-40-1'],
    retenir: ['Prescription : 1/6/20 ans.', 'Opportunité des poursuites.', 'Action civile : préjudice personnel et direct.'],
  },
  {
    id: 'pp-enquete', m: 'procpen', titre: 'Les enquêtes et la garde à vue',
    intro: 'La phase policière comprend l’enquête de flagrance et l’enquête préliminaire, sous la direction du procureur de la République.',
    parts: [
      { t: 'Enquêtes', l: ['Flagrance (art. 53) : crime ou délit puni d’emprisonnement qui se commet ou vient de se commettre ; pouvoirs coercitifs ; 8 jours renouvelables une fois.', 'Préliminaire : à l’initiative de la police ou sur instruction du parquet ; en principe consentement pour les perquisitions (sauf autorisation du JLD) ; durée limitée à 2 ans (+1) depuis 2021.', 'Tout citoyen peut appréhender l’auteur d’un flagrant délit puni d’emprisonnement (art. 73).'] },
      { t: 'Garde à vue', l: ['Raisons plausibles de soupçonner un crime ou délit puni d’emprisonnement ; unique moyen d’atteindre un objectif légal (art. 62-2).', 'Durée : 24 h, + 24 h si peine ≥ 1 an (art. 63) ; régimes dérogatoires jusqu’à 96 h.', 'Droits : information, droit au silence, avocat dès le début, médecin, proche, interprète (art. 63-1).', 'Réforme imposée par la QPC du 30 juillet 2010 et la CEDH (Brusco c/ France, 2010).'] },
    ],
    art: ['cpp-53', 'cpp-62-2', 'cpp-63', 'cpp-63-1', 'cpp-73', 'cpp-préliminaire'],
    arrets: ['qpcgav'],
    retenir: ['GAV : 24 h + 24 h.', 'Droit au silence et à l’avocat.', 'Flagrance 8 jours + 8.'],
  },
  {
    id: 'pp-instruction', m: 'procpen', titre: 'Instruction et jugement',
    intro: 'L’instruction, obligatoire en matière criminelle, est confiée au juge d’instruction ; le jugement obéit au principe de l’intime conviction.',
    parts: [
      { t: 'Instruction', l: ['Juge d’instruction saisi par réquisitoire du parquet ou plainte avec constitution de partie civile.', 'Statuts : témoin, témoin assisté, mis en examen (indices graves ou concordants).', 'Liberté de principe (art. 137) ; contrôle judiciaire, ARSE, détention provisoire décidée par le JLD (art. 144) ; chambre de l’instruction en appel.', 'Clôture : non-lieu, ordonnance de renvoi (délit) ou de mise en accusation (crime).'] },
      { t: 'Jugement', l: ['Liberté de la preuve et intime conviction (art. 427), sur des preuves débattues contradictoirement.', 'Cour d’assises (jury populaire) et cour criminelle départementale (5 magistrats, crimes punis de 15 ou 20 ans).', 'Ne bis in idem (art. 368 CPP, art. 4 du protocole 7 CEDH).', 'Voies de recours : appel (10 jours), pourvoi (5 jours francs).'] },
    ],
    art: ['cpp-137', 'cpp-144', 'cpp-368', 'cpp-427'],
    retenir: ['Liberté = principe, détention = exception.', 'Intime conviction mais preuves contradictoires.', 'Appel 10 jours ; pourvoi 5 jours francs.'],
  },

  // ======================= DROIT PÉNAL SPÉCIAL (L3) =======================
  {
    id: 'ps-personnes', m: 'penals', titre: 'Atteintes aux personnes',
    intro: 'Le livre II du Code pénal protège la vie, l’intégrité physique et psychique, la liberté et la dignité des personnes.',
    parts: [
      { t: 'Atteintes à la vie', l: ['Meurtre (art. 221-1) : acte de nature à donner la mort + intention homicide (animus necandi) ; 30 ans.', 'Assassinat (art. 221-3) : meurtre avec préméditation ou guet-apens ; perpétuité.', 'Empoisonnement : infraction formelle, consommée par l’administration de substances mortifères.', 'Homicide involontaire (art. 221-6) : faute d’imprudence + causalité certaine ; la victime doit être une personne née vivante (Ass. plén., 29 juin 2001).'] },
      { t: 'Violences et mise en danger', l: ['Violences volontaires : qualifiées selon l’ITT et le résultat (mutilation, mort sans intention de la donner).', 'Tortures et actes de barbarie (art. 222-1).', 'Mise en danger délibérée (art. 223-1) : risque immédiat, violation manifestement délibérée d’une obligation particulière.', 'Omission de porter secours (art. 223-6).', 'Harcèlement moral (art. 222-33-2).'] },
    ],
    art: ['pen-221-1', 'pen-221-3', 'pen-221-6', 'pen-222-1', 'pen-222-33-2', 'pen-223-1', 'pen-223-6'],
    arrets: ['foetus'],
    retenir: ['Meurtre = animus necandi.', 'Assassinat = préméditation ou guet-apens.', 'Mise en danger : obligation particulière + violation manifestement délibérée.'],
  },
  {
    id: 'ps-biens', m: 'penals', titre: 'Atteintes aux biens',
    intro: 'Les infractions contre les biens se distinguent selon le procédé d’appropriation : soustraction, tromperie, détournement, violence.',
    parts: [
      { t: 'Vol (art. 311-1)', l: ['Soustraction : appréhension de la chose sans le consentement du propriétaire (la remise volontaire exclut le vol, sauf remise précaire).', 'Chose mobilière d’autrui (y compris l’énergie et les données informatiques selon la jurisprudence).', 'Intention frauduleuse.', '3 ans et 45 000 € (art. 311-3), circonstances aggravantes nombreuses.'] },
      { t: 'Escroquerie (art. 313-1)', l: ['Moyen trompeur : faux nom, fausse qualité, abus de qualité vraie, manœuvres frauduleuses (un simple mensonge ne suffit pas).', 'Remise d’un bien, de fonds, d’un service ou d’un acte.', 'Préjudice.', '5 ans et 375 000 €.'] },
      { t: 'Abus de confiance, extorsion, recel', l: ['Abus de confiance (art. 314-1) : remise volontaire à charge de rendre ou d’un usage déterminé, puis détournement.', 'Extorsion (art. 312-1) : obtention par violence, menace ou contrainte.', 'Recel (art. 321-1) : infraction de conséquence, continue ; détenir ou bénéficier du produit d’un crime ou délit en connaissance de cause.'] },
    ],
    art: ['pen-311-1', 'pen-311-3', 'pen-312-1', 'pen-313-1', 'pen-314-1', 'pen-321-1', 'pen-441-1'],
    retenir: ['Vol = soustraction ; escroquerie = tromperie ; abus de confiance = détournement après remise.', 'Recel = infraction de conséquence et continue.'],
  },

  // ======================= DROIT DU TRAVAIL (L3) =======================
  {
    id: 'trav-contrat', m: 'travail', titre: 'Le contrat de travail',
    intro: 'Le contrat de travail est la convention par laquelle une personne s’engage à travailler pour le compte et sous la subordination d’une autre, moyennant rémunération.',
    parts: [
      { t: 'Critères', l: ['Prestation de travail, rémunération, lien de subordination juridique (Société générale, 1996).', 'Qualification d’ordre public : indépendante de la volonté des parties (requalification des travailleurs des plateformes : Take Eat Easy, 2018 ; Uber, 2020).', 'Service organisé : indice de subordination lorsque l’employeur en détermine unilatéralement les conditions.'] },
      { t: 'Formes', l: ['CDI à temps plein : forme normale ; écrit non obligatoire (art. L. 1221-1).', 'CDD : écrit obligatoire, cas de recours limités, ne peut pourvoir durablement un emploi permanent (art. L. 1242-1) ; requalification en CDI.', 'Période d’essai : 2, 3 ou 4 mois selon la catégorie (art. L. 1221-19).'] },
      { t: 'Exécution', l: ['Pouvoirs de direction et disciplinaire de l’employeur.', 'Restrictions aux libertés justifiées et proportionnées (art. L. 1121-1).', 'Durée légale de 35 heures (art. L. 3121-27).', 'Obligation de sécurité (art. L. 4121-1) ; harcèlement moral prohibé (art. L. 1152-1).', 'Modification du contrat (accord du salarié) ≠ changement des conditions de travail (pouvoir de direction).'] },
    ],
    art: ['trav-L.1221-1', 'trav-L.1221-19', 'trav-L.1242-1', 'trav-L.1121-1', 'trav-L.3121-27', 'trav-L.4121-1', 'trav-L.1152-1', 'trav-L.1132-1'],
    arrets: ['socgen', 'takeeat', 'uber', 'nikon', 'amiante'],
    retenir: ['Subordination = ordres + contrôle + sanction.', 'Qualification indépendante de la volonté des parties.', 'Modification du contrat ≠ changement des conditions de travail.'],
  },
  {
    id: 'trav-rupture', m: 'travail', titre: 'La rupture du contrat de travail',
    intro: 'Le CDI peut être rompu par l’employeur (licenciement), par le salarié (démission, prise d’acte) ou d’un commun accord (rupture conventionnelle).',
    parts: [
      { t: 'Licenciement pour motif personnel', l: ['Cause réelle et sérieuse (art. L. 1232-1) : faits objectifs, exacts, suffisamment importants.', 'Procédure : convocation à entretien préalable, entretien, notification motivée par LRAR (au moins 2 jours ouvrables après l’entretien).', 'Faute grave (rend impossible le maintien dans l’entreprise, prive de préavis et d’indemnité de licenciement), faute lourde (intention de nuire).'] },
      { t: 'Licenciement économique', l: ['Motif non inhérent à la personne : difficultés économiques, mutations technologiques, sauvegarde de la compétitivité, cessation d’activité (art. L. 1233-3).', 'Obligation de reclassement, critères d’ordre, PSE à partir de 10 licenciements dans les entreprises d’au moins 50 salariés.'] },
      { t: 'Sanctions et autres ruptures', l: ['Licenciement sans cause : barème d’indemnisation (art. L. 1235-3), validé par la Cour de cassation (2022).', 'Nullité (discrimination, harcèlement, grève, liberté fondamentale) : réintégration ou indemnité d’au moins 6 mois, hors barème.', 'Rupture conventionnelle homologuée (art. L. 1237-11).', 'Prescription : 12 mois pour contester la rupture (art. L. 1471-1).'] },
    ],
    art: ['trav-L.1231-1', 'trav-L.1232-1', 'trav-L.1233-3', 'trav-L.1235-3', 'trav-L.1237-11', 'trav-L.1471-1', 'trav-L.2511-1'],
    arrets: ['bareme'],
    retenir: ['Cause réelle et sérieuse.', 'Barème Macron, sauf nullité.', 'Contestation : 12 mois.'],
  },
  {
    id: 'trav-collectif', m: 'travail', titre: 'Relations collectives de travail',
    intro: 'Le droit collectif organise la représentation des salariés, la négociation collective et le droit de grève.',
    parts: [
      { t: 'Représentation', l: ['Comité social et économique (CSE) obligatoire à partir de 11 salariés ; attributions étendues à partir de 50.', 'Syndicats représentatifs (audience électorale d’au moins 10 % dans l’entreprise) ; délégués syndicaux.', 'Salariés protégés : licenciement soumis à l’autorisation de l’inspecteur du travail.'] },
      { t: 'Négociation collective', l: ['Accords de branche et d’entreprise ; depuis 2017, primauté de principe de l’accord d’entreprise, sauf dans les domaines réservés à la branche.', 'Validité de l’accord d’entreprise : signature par des syndicats majoritaires (plus de 50 %).'] },
      { t: 'Grève', l: ['Droit constitutionnel (Préambule 1946, al. 7).', 'Cessation collective et concertée du travail pour des revendications professionnelles.', 'Suspend le contrat ; licenciement seulement pour faute lourde, sinon nul (art. L. 2511-1).', 'Préavis de 5 jours dans les services publics.'] },
    ],
    art: ['trav-L.2511-1'],
    retenir: ['CSE dès 11 salariés.', 'Grève : collective, concertée, professionnelle.', 'Licenciement d’un gréviste sans faute lourde : nul.'],
  },

  // ======================= SOCIÉTÉS / AFFAIRES (L3) =======================
  {
    id: 'soc-commun', m: 'societes', titre: 'Le droit commun des sociétés',
    intro: 'La société est instituée par contrat (ou acte unilatéral) pour affecter des biens ou une industrie à une entreprise commune en vue d’en partager les bénéfices (art. 1832).',
    parts: [
      { t: 'Éléments du contrat de société', l: ['Apports (en numéraire, en nature, en industrie) ; les apports en industrie ne concourent pas au capital (sauf SAS).', 'Affectio societatis : volonté de collaborer sur un pied d’égalité.', 'Vocation aux bénéfices et contribution aux pertes ; clause léonine réputée non écrite.', 'Objet licite, intérêt commun des associés et intérêt social, prise en considération des enjeux sociaux et environnementaux (loi PACTE 2019, art. 1833).'] },
      { t: 'Personnalité morale', l: ['Acquise à l’immatriculation au RCS.', 'Actes accomplis pour le compte de la société en formation : repris par la société, sinon engagent leurs auteurs.', 'Société créée de fait / en participation : pas de personnalité morale.'] },
      { t: 'Dirigeants', l: ['Responsabilité envers la société et les associés pour faute de gestion ; envers les tiers seulement pour faute séparable des fonctions (Seusse, 2003).', 'Abus de biens sociaux (pénal), action sociale ut singuli.'] },
    ],
    art: ['civ-1832', 'civ-1833'],
    arrets: ['seusse'],
    retenir: ['Apports + affectio societatis + vocation aux bénéfices/pertes.', 'Personnalité à l’immatriculation.', 'Faute séparable pour engager le dirigeant envers les tiers.'],
  },
  {
    id: 'soc-formes', m: 'societes', titre: 'Les principales formes de sociétés',
    intro: 'Le choix de la forme sociale dépend de la responsabilité des associés, de la souplesse statutaire et de la fiscalité.',
    parts: [
      { t: 'Sociétés de personnes', l: ['SNC : associés commerçants, indéfiniment et solidairement responsables ; parts non librement cessibles.', 'Société civile : associés tenus indéfiniment mais conjointement (à proportion de leurs parts), subsidiairement.'] },
      { t: 'Sociétés à risque limité', l: ['SARL (art. L. 223-1) : 1 à 100 associés, responsabilité limitée aux apports, gérant personne physique.', 'SA (art. L. 225-1) : au moins 2 associés (7 si cotée), capital minimal de 37 000 €, conseil d’administration ou directoire.', 'SAS (art. L. 227-1) : grande liberté statutaire, président obligatoire, forme la plus utilisée pour les créations.'] },
      { t: 'Droit commercial général', l: ['Commerçant : accomplit des actes de commerce à titre de profession habituelle (art. L. 121-1).', 'Liberté de preuve entre commerçants (art. L. 110-3), solidarité présumée, tribunal de commerce (tribunal des activités économiques en expérimentation).', 'Entrepreneur individuel : séparation automatique du patrimoine professionnel depuis la loi du 14 février 2022.'] },
    ],
    art: ['com-L.110-1', 'com-L.110-3', 'com-L.121-1', 'com-L.223-1', 'com-L.225-1', 'com-L.227-1'],
    retenir: ['SNC : responsabilité indéfinie et solidaire.', 'SARL, SA, SAS : responsabilité limitée aux apports.', 'SAS : liberté statutaire.'],
  },
  {
    id: 'soc-difficultes', m: 'societes', titre: 'Les entreprises en difficulté',
    intro: 'Le livre VI du Code de commerce organise la prévention et le traitement des difficultés des entreprises, avec un objectif de sauvetage.',
    parts: [
      { t: 'Procédures amiables', l: ['Mandat ad hoc et conciliation : confidentielles, avant ou peu après la cessation des paiements (conciliation : moins de 45 jours).'] },
      { t: 'Procédures collectives', l: ['Sauvegarde : avant cessation des paiements, à l’initiative du débiteur.', 'Redressement judiciaire (art. L. 631-1) : cessation des paiements (impossibilité de faire face au passif exigible avec l’actif disponible) ; déclaration dans les 45 jours.', 'Liquidation judiciaire : redressement manifestement impossible.', 'Effets : arrêt des poursuites individuelles, interdiction de payer les créances antérieures, déclaration des créances, période d’observation, plan ou cession.'] },
    ],
    art: ['com-L.631-1'],
    retenir: ['Cessation des paiements = passif exigible > actif disponible.', 'Sauvegarde (avant) / redressement (après) / liquidation (sans issue).'],
  },

  // ======================= DROIT DE L’UE (L2-L3) =======================
  {
    id: 'ue-institutions', m: 'ue', titre: 'Les institutions de l’Union européenne',
    intro: 'L’Union repose sur le traité sur l’Union européenne (TUE) et le traité sur le fonctionnement de l’Union (TFUE), issus du traité de Lisbonne (2007, en vigueur en 2009).',
    parts: [
      { t: 'Institutions (art. 13 TUE)', l: ['Parlement européen : élu au suffrage universel direct, colégislateur et autorité budgétaire.', 'Conseil européen : chefs d’État ou de gouvernement, impulsion politique.', 'Conseil de l’UE : ministres, colégislateur.', 'Commission : intérêt général, monopole de l’initiative législative, gardienne des traités.', 'Cour de justice de l’UE, Banque centrale européenne, Cour des comptes.'] },
      { t: 'Compétences', l: ['Principe d’attribution : l’Union n’agit que dans les limites des compétences conférées.', 'Compétences exclusives (union douanière, monnaie de la zone euro), partagées (marché intérieur, environnement), d’appui.', 'Subsidiarité et proportionnalité.'] },
    ],
    art: ['const-88-1'],
    retenir: ['Commission = initiative ; Parlement + Conseil = législateurs.', 'Attribution, subsidiarité, proportionnalité.'],
  },
  {
    id: 'ue-ordre', m: 'ue', titre: 'L’ordre juridique de l’Union',
    intro: 'Le droit de l’Union forme un ordre juridique propre, intégré aux systèmes juridiques des États membres, caractérisé par l’effet direct et la primauté.',
    parts: [
      { t: 'Sources', l: ['Droit primaire : traités, Charte des droits fondamentaux (même valeur que les traités).', 'Droit dérivé (art. 288 TFUE) : règlement (portée générale, obligatoire, directement applicable), directive (lie quant au résultat, transposition), décision, recommandations et avis.'] },
      { t: 'Effet direct et primauté', l: ['Effet direct (Van Gend en Loos, 1963) : dispositions claires, précises et inconditionnelles.', 'Directives : effet direct vertical seulement (pas contre un particulier), après expiration du délai de transposition.', 'Primauté (Costa c/ ENEL, 1964) ; le juge national écarte la loi contraire (Simmenthal, 1978).', 'Responsabilité de l’État pour violation du droit de l’Union (Francovich, 1991).'] },
      { t: 'Renvoi préjudiciel (art. 267 TFUE)', l: ['Question d’interprétation ou de validité posée par une juridiction nationale à la CJUE.', 'Obligatoire pour les juridictions statuant en dernier ressort, sauf acte clair ou déjà éclairé (CILFIT, 1982).'] },
    ],
    arrets: ['vangend', 'costa', 'simmenthal', 'francovich', 'arcelor', 'cassis'],
    retenir: ['Effet direct + primauté.', 'Règlement directement applicable ; directive à transposer.', 'Renvoi préjudiciel obligatoire en dernier ressort.'],
  },

  // ======================= LIBERTÉS FONDAMENTALES (CRFPA) =======================
  {
    id: 'lib-regime', m: 'libertes', titre: 'Le régime des libertés fondamentales',
    intro: 'L’épreuve de libertés fondamentales du CRFPA (grand oral) porte sur les sources, les garanties et l’actualité des droits et libertés.',
    parts: [
      { t: 'Sources et garants', l: ['Constitution (DDHC, Préambule 1946, Charte de l’environnement, PFRLR, objectifs de valeur constitutionnelle).', 'Conv. EDH et jurisprudence de la Cour de Strasbourg ; Charte des droits fondamentaux de l’UE.', 'Juges : Conseil constitutionnel, juge administratif (référé-liberté), juge judiciaire (gardien de la liberté individuelle, art. 66 C.), CEDH, CJUE.'] },
      { t: 'Limitations', l: ['Toute restriction doit être prévue par la loi, poursuivre un but légitime et être nécessaire et proportionnée dans une société démocratique.', 'Contrôle de proportionnalité en trois temps (adaptée, nécessaire, proportionnée).', 'Régimes d’exception : état d’urgence (loi de 1955), article 16, circonstances exceptionnelles.', 'Droits indérogeables : interdiction de la torture (art. 3 CEDH), interdiction de l’esclavage, légalité des peines.'] },
    ],
    art: ['cedh-3', 'cedh-8', 'cedh-10', 'cedh-13', 'const-66', 'ddhc-4', 'ddhc-11', 'cja-L.521-2'],
    arrets: ['bioethique', 'handyside', 'kruslin', 'fraternite', 'kone'],
    retenir: ['Restriction : loi + but légitime + nécessité/proportionnalité.', 'Art. 3 CEDH : absolu.', 'Juge judiciaire gardien de la liberté individuelle.'],
  },
  {
    id: 'lib-expression', m: 'libertes', titre: 'Libertés de l’esprit : expression, religion, laïcité',
    intro: 'Les libertés de pensée, de conscience, de religion et d’expression sont au cœur du débat démocratique et des épreuves du grand oral.',
    parts: [
      { t: 'Liberté d’expression', l: ['Art. 11 DDHC, art. 10 CEDH ; « droit le plus précieux ».', 'Couvre les idées qui heurtent, choquent ou inquiètent (Handyside, 1976).', 'Limites : diffamation, injure, provocation à la haine (loi du 29 juillet 1881), apologie du terrorisme, atteinte à la dignité (Dieudonné).'] },
      { t: 'Liberté religieuse et laïcité', l: ['Art. 10 DDHC, art. 9 CEDH, loi du 9 décembre 1905 (liberté de conscience, libre exercice des cultes, séparation).', 'Neutralité des agents publics ; les usagers ne sont pas tenus à la neutralité, sauf élèves des écoles publiques (loi de 2004).', 'Interdiction de la dissimulation du visage dans l’espace public (loi de 2010, validée par la CEDH dans S.A.S. c/ France, 2014).', 'Police municipale : pas d’interdiction sans risque avéré de trouble (burkini, 2016).'] },
    ],
    art: ['ddhc-10', 'ddhc-11', 'cedh-9', 'cedh-10'],
    arrets: ['handyside', 'dieudonne', 'burkini'],
    retenir: ['Expression : principe ; restriction : exception justifiée.', 'Neutralité = agents publics, pas usagers.'],
  },

  // ======================= DROIT FISCAL (M1) =======================
  {
    id: 'fisc-principes', m: 'fiscal', titre: 'Principes du droit fiscal et impôts principaux',
    intro: 'Le droit fiscal régit l’établissement et le recouvrement des impôts. Il obéit à des principes constitutionnels forts.',
    parts: [
      { t: 'Principes', l: ['Légalité fiscale : la loi fixe l’assiette, le taux et les modalités de recouvrement (art. 34 C., art. 14 DDHC).', 'Égalité devant l’impôt et les charges publiques, à raison des facultés contributives (art. 13 DDHC) ; interdiction des impositions confiscatoires (taxe à 75 %, 2012).', 'Annualité budgétaire ; non-rétroactivité encadrée.'] },
      { t: 'Principaux impôts', l: ['TVA : impôt sur la consommation, taux normal de 20 %, mécanisme de déduction.', 'Impôt sur le revenu : barème progressif par tranches, foyer fiscal et quotient familial, prélèvement à la source.', 'Impôt sur les sociétés : taux normal de 25 %, taux réduit pour les PME.', 'IFI (impôt sur la fortune immobilière) depuis 2018, droits d’enregistrement et de succession.'] },
      { t: 'Contrôle et contentieux', l: ['Vérification de comptabilité, examen de situation fiscale personnelle ; procédure contradictoire.', 'Abus de droit fiscal (actes fictifs ou à but exclusivement — ou principalement depuis 2021 — fiscal).', 'Réclamation préalable obligatoire, puis juge administratif (impôts directs, TVA) ou judiciaire (droits d’enregistrement).'] },
    ],
    art: ['ddhc-13', 'const-34'],
    arrets: ['taxe75'],
    retenir: ['Légalité + égalité devant l’impôt.', 'Réclamation préalable avant le juge.', 'Dualité de juridictions en matière fiscale.'],
  },

  // ======================= DÉONTOLOGIE (CRFPA) =======================
  {
    id: 'deo-avocat', m: 'deonto', titre: 'Les principes essentiels de la profession d’avocat',
    intro: 'Le serment de l’avocat résume ses devoirs : « Je jure, comme avocat, d’exercer mes fonctions avec dignité, conscience, indépendance, probité et humanité ». La déontologie est au programme du CRFPA et du CAPA.',
    parts: [
      { t: 'Sources', l: ['Loi du 31 décembre 1971, décret du 27 novembre 1991, décret du 12 juillet 2005 (règles de déontologie), Règlement intérieur national (RIN).', 'Contrôle par le bâtonnier et le conseil de l’ordre ; poursuites disciplinaires (conseil régional de discipline).'] },
      { t: 'Principes essentiels', l: ['Dignité, conscience, indépendance, probité, humanité (serment) ; honneur, loyauté, désintéressement, confraternité, délicatesse, modération, courtoisie, compétence, dévouement, diligence, prudence (RIN, art. 1.3).', 'Secret professionnel général, absolu, illimité dans le temps et d’ordre public ; les correspondances entre avocats sont confidentielles (sauf mention « officielle »).', 'Conflit d’intérêts : interdiction de conseiller ou représenter plusieurs clients aux intérêts opposés.', 'Honoraires : convention d’honoraires écrite obligatoire ; honoraire de résultat complémentaire autorisé, pacte de quota litis (honoraire uniquement fonction du résultat) interdit.'] },
      { t: 'Le CRFPA', l: ['Examen d’accès au centre régional de formation professionnelle d’avocats, ouvert aux titulaires d’un master 1 en droit.', 'Admissibilité : note de synthèse, droit des obligations, spécialité et procédure ; admission : grand oral de libertés et droits fondamentaux, langue.', '18 mois de formation (dont stage), puis CAPA.'] },
    ],
    retenir: ['Serment : dignité, conscience, indépendance, probité, humanité.', 'Secret professionnel absolu.', 'Pacte de quota litis interdit.'],
  },
];
