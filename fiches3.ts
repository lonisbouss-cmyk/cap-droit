// CAP DROIT — fiches complémentaires : histoire du droit, finances publiques, sûretés, patrimoine familial, DIP, consommation, propriété intellectuelle, pénal des affaires
import type { Fiche } from './types';

export const FICHES3: Fiche[] = [
  // ======================= HISTOIRE DU DROIT (L1) =======================
  {
    id: 'hist-ancien', m: 'histoire', titre: 'Le droit de l’Ancien Régime',
    intro: 'Avant 1789, la France connaît un pluralisme juridique : coutumes, droit romain, droit canonique et législation royale coexistent.',
    parts: [
      { t: 'Pays de coutumes et pays de droit écrit', l: ['Au nord, les coutumes locales, rédigées à partir de l’ordonnance de Montils-lès-Tours (1454) ; la Coutume de Paris (1510, réformée en 1580) sert de droit commun coutumier.', 'Au sud, le droit romain redécouvert (Corpus juris civilis de Justinien, enseigné à Bologne au XIIe siècle) s’applique comme coutume générale.', 'Le droit canonique régit le mariage et la famille.'] },
      { t: 'La législation royale', l: ['Ordonnances royales (Villers-Cotterêts, 1539 : usage du français et état civil tenu par les curés).', 'Grandes ordonnances de Colbert : procédure civile (1667), criminelle (1670), commerce (1673), marine (1681).', 'Ordonnances de d’Aguesseau (donations, testaments, substitutions) au XVIIIe siècle.', 'Parlements : cours souveraines, droit de remontrance, arrêts de règlement.'] },
      { t: 'La pensée juridique', l: ['Domat (Les lois civiles dans leur ordre naturel) et Pothier (Traité des obligations) inspirent directement le Code civil.'] },
    ],
    retenir: ['Nord coutumier / Sud de droit écrit.', 'Villers-Cotterêts 1539 ; ordonnances de Colbert.', 'Domat et Pothier, sources doctrinales du Code civil.'],
  },
  {
    id: 'hist-revolution', m: 'histoire', titre: 'Révolution et codification napoléonienne',
    intro: 'La Révolution rompt avec l’ordre ancien ; le Consulat et l’Empire unifient le droit par la codification.',
    parts: [
      { t: 'L’œuvre révolutionnaire', l: ['Nuit du 4 août 1789 : abolition des privilèges ; DDHC du 26 août 1789.', 'Loi des 16-24 août 1790 : séparation des autorités administratives et judiciaires.', 'Droit intermédiaire (1789-1804) : laïcisation de l’état civil, divorce (1792), égalité successorale.'] },
      { t: 'Le Code civil de 1804', l: ['Loi du 30 ventôse an XII (21 mars 1804) réunissant 36 lois.', 'Commission de quatre rédacteurs : Portalis, Tronchet, Bigot de Préameneu, Maleville.', 'Discours préliminaire de Portalis : « Les codes des peuples se font avec le temps ; mais, à proprement parler, on ne les fait pas. »', 'Autres codes : procédure civile (1806), commerce (1807), instruction criminelle (1808), pénal (1810).'] },
      { t: 'Les constitutions françaises', l: ['Plus de quinze textes depuis 1791 : monarchie constitutionnelle, républiques, empires, Restauration.', 'IIIe République (lois constitutionnelles de 1875), IVe (1946), Ve (1958).'] },
    ],
    arrets: ['blanco'],
    retenir: ['DDHC 26 août 1789.', 'Code civil 21 mars 1804, Portalis.', 'Loi des 16-24 août 1790 : séparation des autorités.'],
  },

  // ======================= FINANCES PUBLIQUES (L2) =======================
  {
    id: 'fp-budget', m: 'finpub', titre: 'Le budget de l’État et la LOLF',
    intro: 'Les finances publiques sont régies par la loi organique relative aux lois de finances (LOLF) du 1er août 2001, réformée en 2021.',
    parts: [
      { t: 'Principes budgétaires', l: ['Annualité : le budget est voté pour l’année civile.', 'Unité : toutes les recettes et dépenses dans un document unique.', 'Universalité : non-compensation et non-affectation des recettes.', 'Spécialité : crédits votés par missions et programmes.', 'Sincérité : présentation sincère de l’ensemble des ressources et des charges.'] },
      { t: 'La loi de finances', l: ['Projet déposé par le Gouvernement, examen par l’Assemblée nationale en premier (art. 39 C.).', 'Délai de 70 jours ; à défaut, mise en vigueur par ordonnance (art. 47 C.).', 'Architecture : missions, programmes, actions ; performance mesurée par objectifs et indicateurs.', 'Loi relative aux résultats de la gestion et portant approbation des comptes (ex-loi de règlement).'] },
      { t: 'Contrôles', l: ['Cour des comptes : assiste le Parlement et le Gouvernement (art. 47-2 C.).', 'Haut Conseil des finances publiques : avis sur les prévisions.', 'Règles européennes : déficit public sous 3 % du PIB, dette sous 60 % (pacte de stabilité réformé en 2024).'] },
    ],
    art: ['const-34', 'ddhc-13'],
    retenir: ['Annualité, unité, universalité, spécialité, sincérité.', 'LOLF : missions et programmes.', '70 jours pour voter le budget.'],
  },

  // ======================= SÛRETÉS (M1) =======================
  {
    id: 'sur-perso', m: 'suretes', titre: 'Les sûretés personnelles : le cautionnement',
    intro: 'La sûreté personnelle adjoint au débiteur un autre débiteur. Le cautionnement a été profondément réformé par l’ordonnance du 15 septembre 2021.',
    parts: [
      { t: 'Le cautionnement', l: ['Contrat par lequel la caution s’oblige envers le créancier à payer la dette du débiteur en cas de défaillance de celui-ci (art. 2288 C. civ.).', 'Accessoire : la caution peut opposer les exceptions appartenant au débiteur.', 'Mention manuscrite remplacée par une mention apposée par la caution personne physique elle-même (art. 2297).', 'Proportionnalité : un cautionnement manifestement disproportionné souscrit par une personne physique envers un créancier professionnel est réduit au montant à hauteur duquel elle pouvait s’engager (art. 2300).', 'Devoir de mise en garde et obligations d’information annuelle du créancier professionnel.'] },
      { t: 'Simple ou solidaire', l: ['Caution simple : bénéfices de discussion et de division.', 'Caution solidaire : peut être poursuivie directement pour le tout.'] },
      { t: 'Autres sûretés personnelles', l: ['Garantie autonome : engagement indépendant de l’obligation garantie (art. 2321).', 'Lettre d’intention : obligation de faire ou de ne pas faire (art. 2322).'] },
    ],
    retenir: ['Caractère accessoire du cautionnement.', 'Réforme 2021 : mention, proportionnalité (réduction).', 'Garantie autonome : indépendante.'],
  },
  {
    id: 'sur-reelles', m: 'suretes', titre: 'Les sûretés réelles',
    intro: 'La sûreté réelle affecte un bien au paiement d’une créance, conférant au créancier un droit de préférence et souvent un droit de suite.',
    parts: [
      { t: 'Sûretés mobilières', l: ['Gage de meubles corporels, avec ou sans dépossession (art. 2333), publicité sur registre.', 'Nantissement de meubles incorporels (créances, fonds de commerce).', 'Pacte commissoire permis : attribution du bien au créancier en cas de défaut.', 'Propriété retenue (clause de réserve de propriété) ou cédée à titre de garantie (fiducie-sûreté).'] },
      { t: 'Sûretés immobilières', l: ['Hypothèque conventionnelle : acte notarié, publicité au fichier immobilier, sans dépossession.', 'Hypothèques légales et judiciaires.', 'Gage immobilier (ex-antichrèse) avec dépossession.'] },
      { t: 'Prérogatives', l: ['Droit de préférence : être payé avant les créanciers chirographaires.', 'Droit de suite : saisir le bien entre les mains d’un tiers acquéreur.', 'En procédure collective, l’efficacité des sûretés est réduite (arrêt des poursuites).'] },
    ],
    art: ['civ-2284', 'civ-2285'],
    retenir: ['Préférence + suite.', 'Gage (meubles corporels), nantissement (incorporels), hypothèque (immeubles).'],
  },

  // ======================= RÉGIMES MATRIMONIAUX ET SUCCESSIONS (M1) =======================
  {
    id: 'pat-regimes', m: 'patrimoine', titre: 'Les régimes matrimoniaux',
    intro: 'Le régime matrimonial organise les rapports pécuniaires entre époux et avec les tiers. Il combine un régime primaire impératif et un régime secondaire.',
    parts: [
      { t: 'Régime primaire (art. 212 à 226)', l: ['Contribution aux charges du mariage à proportion des facultés respectives.', 'Solidarité pour les dettes ménagères, sauf dépenses manifestement excessives (art. 220).', 'Protection du logement familial : aucun époux ne peut en disposer seul (art. 215 al. 3).', 'Autonomie bancaire et professionnelle de chaque époux.'] },
      { t: 'Régime légal : communauté réduite aux acquêts', l: ['Biens propres : biens possédés avant le mariage, reçus par donation ou succession.', 'Biens communs : acquêts réalisés pendant le mariage, gains et salaires.', 'Présomption de communauté.', 'Récompenses lors de la liquidation.'] },
      { t: 'Régimes conventionnels', l: ['Séparation de biens, participation aux acquêts, communauté universelle (souvent avec clause d’attribution intégrale au survivant).', 'Contrat de mariage devant notaire ; changement possible après le mariage.'] },
    ],
    art: ['civ-212'],
    retenir: ['Régime primaire impératif.', 'Légal : communauté réduite aux acquêts.', 'Logement familial protégé.'],
  },
  {
    id: 'pat-successions', m: 'patrimoine', titre: 'Les successions',
    intro: 'La succession est la transmission du patrimoine d’une personne décédée. Elle est dévolue par la loi ou par testament, dans la limite de la réserve héréditaire.',
    parts: [
      { t: 'Dévolution légale', l: ['Ordres d’héritiers : descendants ; parents et frères et sœurs ; ascendants ; collatéraux ordinaires (jusqu’au 6e degré).', 'Le conjoint survivant : en présence d’enfants communs, choix entre l’usufruit de la totalité ou la propriété du quart.', 'Le mort saisit le vif : saisine des héritiers dès le décès (art. 724).'] },
      { t: 'Réserve et quotité disponible', l: ['Réserve des descendants : 1/2 (un enfant), 2/3 (deux), 3/4 (trois et plus).', 'Le reste constitue la quotité disponible, librement transmissible.', 'Action en réduction contre les libéralités excessives.'] },
      { t: 'Option successorale et testament', l: ['Acceptation pure et simple, à concurrence de l’actif net, ou renonciation.', 'Testament olographe (écrit, daté et signé de la main du testateur), authentique ou mystique.'] },
    ],
    retenir: ['Quatre ordres d’héritiers.', 'Réserve : 1/2, 2/3, 3/4.', 'Testament olographe : écrit, daté, signé de la main du testateur.'],
  },

  // ======================= DROIT INTERNATIONAL PRIVÉ (M1) =======================
  {
    id: 'dip-methode', m: 'dip', titre: 'Conflits de lois et de juridictions',
    intro: 'Le droit international privé règle les situations privées présentant un élément d’extranéité : quel juge est compétent, quelle loi s’applique, quel effet donner aux jugements étrangers.',
    parts: [
      { t: 'Conflit de lois', l: ['Méthode de la règle de conflit bilatérale (Savigny) : catégorie de rattachement + facteur de rattachement.', 'Qualification lege fori (Caraslanis, 1955).', 'Exceptions : ordre public international, fraude à la loi (Princesse de Bauffremont, 1878), lois de police.', 'Renvoi (Forgo, 1878).', 'Sources européennes : Rome I (contrats), Rome II (obligations non contractuelles), règlement Successions (2012).'] },
      { t: 'Conflit de juridictions', l: ['Règlement Bruxelles I bis (matière civile et commerciale) : principe du domicile du défendeur.', 'En dehors : extension des règles internes de compétence territoriale (Pelassa, 1962 ; Scheffel, 1959).', 'Privilèges de juridiction fondés sur la nationalité française (art. 14 et 15 C. civ.).'] },
      { t: 'Effets des jugements étrangers', l: ['Dans l’UE : reconnaissance de plein droit, exécution sans exequatur (Bruxelles I bis).', 'Hors UE : exequatur (Cornelissen, 2007 : compétence indirecte, conformité à l’ordre public international, absence de fraude).'] },
    ],
    retenir: ['Règle de conflit : catégorie + rattachement.', 'Ordre public, fraude, lois de police.', 'Bruxelles I bis : domicile du défendeur.'],
  },

  // ======================= CONSOMMATION (M1) =======================
  {
    id: 'conso-protection', m: 'conso', titre: 'La protection du consommateur',
    intro: 'Le droit de la consommation corrige le déséquilibre entre professionnels et consommateurs par l’information, la réflexion et le contrôle des clauses.',
    parts: [
      { t: 'Notions', l: ['Consommateur : personne physique agissant hors de son activité professionnelle ; non-professionnel : personne morale n’agissant pas à des fins professionnelles (art. liminaire).', 'Professionnel : personne agissant dans le cadre de son activité, même pour le compte d’un autre professionnel.'] },
      { t: 'Outils de protection', l: ['Obligation générale d’information précontractuelle.', 'Droit de rétractation de 14 jours pour les contrats à distance et hors établissement (art. L. 221-18).', 'Clauses abusives réputées non écrites (art. L. 212-1), listes noire et grise ; relevé d’office par le juge.', 'Garantie légale de conformité de 2 ans (art. L. 217-3).', 'Pratiques commerciales trompeuses ou agressives sanctionnées pénalement.', 'Prescription biennale de l’action du professionnel (art. L. 218-2).'] },
      { t: 'Crédit à la consommation et surendettement', l: ['Offre préalable, délai de rétractation de 14 jours, vérification de la solvabilité.', 'Commission de surendettement : plan de redressement, rétablissement personnel.'] },
    ],
    art: ['conso-liminaire', 'conso-L.212-1', 'conso-L.218-2', 'conso-L.221-18', 'conso-L.217-3', 'civ-1171'],
    retenir: ['Rétractation : 14 jours.', 'Clauses abusives : réputées non écrites, relevé d’office.', 'Conformité : 2 ans.'],
  },

  // ======================= PROPRIÉTÉ INTELLECTUELLE (M1) =======================
  {
    id: 'pi-auteur', m: 'pi', titre: 'Le droit d’auteur',
    intro: 'Le droit d’auteur protège les œuvres de l’esprit originales, du seul fait de leur création, sans formalité (Code de la propriété intellectuelle).',
    parts: [
      { t: 'Conditions', l: ['Œuvre de l’esprit mise en forme (les idées sont de libre parcours).', 'Originalité : empreinte de la personnalité de l’auteur (« création intellectuelle propre », CJUE).', 'Indifférence du genre, de la forme, du mérite et de la destination.'] },
      { t: 'Prérogatives', l: ['Droit moral : divulgation, paternité, respect de l’œuvre, retrait ; perpétuel, inaliénable, imprescriptible.', 'Droits patrimoniaux : reproduction et représentation ; durée de 70 ans après la mort de l’auteur.', 'Exceptions : copie privée, courte citation, parodie, pédagogie, panorama.', 'Contrefaçon : délit (3 ans et 300 000 €) et action civile.'] },
      { t: 'Propriété industrielle', l: ['Brevet : invention nouvelle, inventive, susceptible d’application industrielle ; 20 ans, dépôt à l’INPI.', 'Marque : signe distinctif enregistré, 10 ans renouvelables indéfiniment.', 'Dessins et modèles : apparence d’un produit, jusqu’à 25 ans.'] },
    ],
    retenir: ['Protection sans formalité, originalité.', 'Droit moral perpétuel ; patrimonial 70 ans post mortem.', 'Brevet 20 ans ; marque 10 ans renouvelables.'],
  },

  // ======================= PÉNAL DES AFFAIRES (M1) =======================
  {
    id: 'pa-infractions', m: 'penaff', titre: 'Les infractions du droit pénal des affaires',
    intro: 'Le droit pénal des affaires sanctionne les atteintes à la probité, au patrimoine des sociétés et au bon fonctionnement des marchés.',
    parts: [
      { t: 'Abus de biens sociaux', l: ['Usage par un dirigeant de droit ou de fait des biens ou du crédit de la société, contraire à l’intérêt social, à des fins personnelles (art. L. 241-3 et L. 242-6 C. com.).', 'Concerne SARL, SA, SAS (pas les SNC ni les sociétés civiles : abus de confiance).', '5 ans et 375 000 € ; prescription courant à compter de la présentation des comptes, sauf dissimulation.'] },
      { t: 'Atteintes à la probité', l: ['Corruption active et passive, trafic d’influence (art. 432-11 et 433-1 C. pén.).', 'Prise illégale d’intérêts, favoritisme, détournement de fonds publics.', 'Loi Sapin II (2016) : programme anticorruption, convention judiciaire d’intérêt public (CJIP), Agence française anticorruption.'] },
      { t: 'Autres infractions', l: ['Blanchiment (art. 324-1 C. pén.) : faciliter la justification mensongère de l’origine de fonds ou concourir à leur placement.', 'Délits boursiers : délit d’initié, manipulation de cours (AMF).', 'Banqueroute en cas de procédure collective.'] },
    ],
    art: ['pen-432-11', 'pen-314-1'],
    retenir: ['ABS : biens sociaux, intérêt social, intérêt personnel.', 'Sapin II : CJIP.', 'Blanchiment : justification mensongère ou placement.'],
  },
];
