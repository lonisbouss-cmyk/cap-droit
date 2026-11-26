// CAP DROIT — QCM complémentaires
import type { Question } from './types';

const Q = (m: string, q: string, c: string[], a: number, e: string): Question => ({ m, q, c, a, e });

export const QCM2: Question[] = [
  // Histoire du droit
  Q('histoire', 'En quelle année le Code civil a-t-il été promulgué ?', ['1789', '1804', '1810', '1848'], 1, 'Loi du 30 ventôse an XII (21 mars 1804).'),
  Q('histoire', 'Quel rédacteur du Code civil a prononcé le célèbre Discours préliminaire ?', ['Tronchet', 'Portalis', 'Cambacérès', 'Pothier'], 1, 'Portalis, membre de la commission avec Tronchet, Bigot de Préameneu et Maleville.'),
  Q('histoire', 'L’ordonnance de Villers-Cotterêts (1539) impose notamment…', ['Le divorce', 'L’usage du français dans les actes', 'La séparation des pouvoirs', 'Le Code de commerce'], 1, 'Elle impose aussi la tenue de registres de baptêmes par les curés.'),
  Q('histoire', 'Quel auteur de l’Ancien Régime a largement inspiré le droit des obligations du Code civil ?', ['Montesquieu', 'Pothier', 'Rousseau', 'Bodin'], 1, 'Pothier, Traité des obligations (1761).'),
  Q('histoire', 'Avant 1789, le Sud de la France était un pays…', ['De coutumes', 'De droit écrit (droit romain)', 'De droit canonique uniquement', 'Sans droit'], 1, 'Le Nord était pays de coutumes.'),
  Q('histoire', 'La loi des 16-24 août 1790 pose…', ['L’abolition des privilèges', 'La séparation des autorités administratives et judiciaires', 'Le suffrage universel', 'Le divorce'], 1, 'Fondement de la dualité de juridictions.'),
  Q('histoire', 'Les lois constitutionnelles de 1875 fondent…', ['La IIe République', 'La IIIe République', 'La IVe République', 'Le Second Empire'], 1, 'Trois lois de février et juillet 1875.'),

  // Finances publiques
  Q('finpub', 'Quel texte encadre les lois de finances ?', ['La loi de 1905', 'La LOLF du 1er août 2001', 'L’ordonnance de 1945', 'Le Code général des impôts'], 1, 'Loi organique relative aux lois de finances, réformée en 2021.'),
  Q('finpub', 'Le principe d’universalité budgétaire implique…', ['Un budget pour plusieurs années', 'La non-compensation et la non-affectation des recettes', 'Un vote par ministère', 'Le contrôle de la Cour des comptes'], 1, 'Toutes les recettes financent toutes les dépenses.'),
  Q('finpub', 'Si le Parlement ne s’est pas prononcé sur le budget dans un délai de 70 jours…', ['Le budget précédent est reconduit', 'Le projet peut être mis en vigueur par ordonnance', 'L’Assemblée est dissoute', 'Le Conseil constitutionnel tranche'], 1, 'Art. 47 al. 3 C.'),
  Q('finpub', 'Les crédits sont votés par…', ['Ministère', 'Mission', 'Article', 'Région'], 1, 'La LOLF organise le budget en missions, programmes et actions.'),
  Q('finpub', 'Qui assiste le Parlement dans le contrôle de l’exécution des lois de finances ?', ['Le Conseil d’État', 'La Cour des comptes', 'La Banque de France', 'Le Défenseur des droits'], 1, 'Art. 47-2 C.'),

  // Sûretés
  Q('suretes', 'Le cautionnement est une sûreté…', ['Réelle', 'Personnelle', 'Légale uniquement', 'Fiscale'], 1, 'La caution s’engage personnellement à payer la dette d’autrui.'),
  Q('suretes', 'Depuis 2021, un cautionnement disproportionné souscrit par une personne physique envers un créancier professionnel est…', ['Nul', 'Réduit au montant à hauteur duquel la caution pouvait s’engager', 'Inopposable', 'Valable sans limite'], 1, 'Art. 2300 C. civ.'),
  Q('suretes', 'La caution solidaire…', ['Bénéficie de la discussion', 'Peut être poursuivie directement pour le tout', 'N’est tenue que de sa part', 'Est libérée à la mort du débiteur'], 1, 'Elle renonce aux bénéfices de discussion et de division.'),
  Q('suretes', 'La garantie autonome est…', ['Accessoire', 'Indépendante de l’obligation garantie', 'Une sûreté réelle', 'Interdite en droit français'], 1, 'Art. 2321 C. civ.'),
  Q('suretes', 'L’hypothèque porte sur…', ['Un meuble corporel', 'Un immeuble, sans dépossession', 'Une créance', 'Un fonds de commerce'], 1, 'Acte notarié et publicité foncière.'),
  Q('suretes', 'Le droit de suite permet au créancier…', ['D’être payé avant les autres', 'De saisir le bien entre les mains d’un tiers acquéreur', 'De vendre le bien sans juge', 'De garder le bien'], 1, 'Le droit de préférence permet d’être payé par priorité.'),

  // Régimes matrimoniaux et successions
  Q('patrimoine', 'Le régime matrimonial légal est…', ['La séparation de biens', 'La communauté réduite aux acquêts', 'La communauté universelle', 'La participation aux acquêts'], 1, 'Applicable à défaut de contrat de mariage.'),
  Q('patrimoine', 'Un bien reçu par succession pendant le mariage, sous le régime légal, est…', ['Commun', 'Propre', 'Indivis', 'Au conjoint survivant'], 1, 'Les biens reçus par donation, succession ou legs restent propres.'),
  Q('patrimoine', 'Un époux peut-il vendre seul le logement de la famille dont il est propriétaire ?', ['Oui', 'Non, le consentement des deux époux est requis', 'Oui, avec l’accord du notaire', 'Oui, si les enfants sont majeurs'], 1, 'Art. 215 al. 3 C. civ., quel que soit le régime.'),
  Q('patrimoine', 'Avec deux enfants, la réserve héréditaire est de…', ['1/2', '2/3', '3/4', 'La totalité'], 1, 'La quotité disponible est alors de 1/3.'),
  Q('patrimoine', 'Le testament olographe doit être…', ['Dactylographié et signé', 'Écrit en entier, daté et signé de la main du testateur', 'Reçu par deux notaires', 'Enregistré en mairie'], 1, 'Art. 970 C. civ.'),
  Q('patrimoine', 'La règle « le mort saisit le vif » signifie que…', ['Le défunt choisit ses héritiers', 'Les héritiers sont saisis de plein droit des biens dès le décès', 'L’État hérite', 'La succession est ouverte au jugement'], 1, 'Art. 724 C. civ.'),

  // DIP
  Q('dip', 'Quel arrêt consacre la fraude à la loi en DIP ?', ['Forgo', 'Princesse de Bauffremont', 'Caraslanis', 'Cornelissen'], 1, 'Civ., 18 mars 1878.'),
  Q('dip', 'Quel arrêt admet le renvoi ?', ['Forgo (1878)', 'Pelassa (1962)', 'Scheffel (1959)', 'Bauffremont (1878)'], 0, 'Civ., 24 juin 1878.'),
  Q('dip', 'Selon Bruxelles I bis, la compétence de principe est celle des juridictions…', ['Du domicile du demandeur', 'Du domicile du défendeur', 'De la nationalité des parties', 'Du lieu du contrat seulement'], 1, 'Art. 4 du règlement (UE) n° 1215/2012.'),
  Q('dip', 'Le règlement Rome I désigne la loi applicable…', ['Aux successions', 'Aux obligations contractuelles', 'Aux divorces', 'Aux délits'], 1, 'Rome II pour les obligations non contractuelles.'),
  Q('dip', 'Les conditions de l’exequatur hors UE ont été fixées par l’arrêt…', ['Munzer', 'Cornelissen', 'Bisbal', 'Lautour'], 1, 'Civ. 1re, 20 févr. 2007 : compétence indirecte, ordre public international, absence de fraude.'),

  // Consommation
  Q('conso', 'Délai de rétractation pour un achat en ligne ?', ['7 jours', '14 jours', '30 jours', 'Aucun'], 1, 'Art. L. 221-18 C. conso.'),
  Q('conso', 'Une clause abusive est…', ['Nulle avec tout le contrat', 'Réputée non écrite', 'Valable si signée', 'Annulable par le professionnel'], 1, 'Art. L. 212-1 C. conso. ; le juge doit la relever d’office.'),
  Q('conso', 'Une personne morale peut-elle être consommateur ?', ['Oui', 'Non : seul un « non-professionnel » peut être une personne morale', 'Oui, si c’est une association', 'Oui, si elle a moins de 10 salariés'], 1, 'Art. liminaire C. conso.'),
  Q('conso', 'L’action du professionnel contre le consommateur pour le paiement se prescrit par…', ['1 an', '2 ans', '5 ans', '10 ans'], 1, 'Art. L. 218-2 C. conso.'),
  Q('conso', 'La garantie légale de conformité d’un bien neuf dure…', ['6 mois', '1 an', '2 ans', '5 ans'], 2, 'Art. L. 217-3 C. conso.'),

  // Propriété intellectuelle
  Q('pi', 'Le droit d’auteur naît…', ['Du dépôt à l’INPI', 'Du seul fait de la création', 'De la publication', 'De l’enregistrement en mairie'], 1, 'Sans formalité (art. L. 111-1 CPI).'),
  Q('pi', 'Les droits patrimoniaux d’auteur durent…', ['20 ans', '50 ans', '70 ans après la mort de l’auteur', 'Perpétuellement'], 2, 'Le droit moral, lui, est perpétuel.'),
  Q('pi', 'Un brevet d’invention est protégé pendant…', ['10 ans', '20 ans', '50 ans', '70 ans'], 1, 'À compter du dépôt, sous réserve du paiement des annuités.'),
  Q('pi', 'Une idée peut-elle être protégée par le droit d’auteur ?', ['Oui', 'Non, les idées sont de libre parcours', 'Oui, si elle est originale', 'Oui, si elle est déposée'], 1, 'Seule la forme est protégée.'),
  Q('pi', 'Une marque est enregistrée pour…', ['5 ans', '10 ans renouvelables indéfiniment', '20 ans non renouvelables', 'À vie'], 1, 'Dépôt à l’INPI ou à l’EUIPO.'),

  // Pénal des affaires
  Q('penaff', 'L’abus de biens sociaux concerne notamment les dirigeants de…', ['SNC', 'SARL, SA et SAS', 'Associations', 'Sociétés civiles'], 1, 'Pour les autres structures : abus de confiance.'),
  Q('penaff', 'La convention judiciaire d’intérêt public (CJIP) a été créée par…', ['La loi Sapin II (2016)', 'La loi Fauchon (2000)', 'La loi PACTE (2019)', 'Le Code de commerce de 1807'], 0, 'Elle permet à une personne morale d’éviter un procès en payant une amende d’intérêt public.'),
  Q('penaff', 'Le blanchiment consiste notamment à…', ['Détourner des fonds remis', 'Faciliter la justification mensongère de l’origine de fonds', 'Obtenir un bien par tromperie', 'Falsifier un document'], 1, 'Art. 324-1 C. pén.'),
  Q('penaff', 'Le point de départ de la prescription de l’abus de biens sociaux est en principe…', ['Le jour de l’acte', 'La présentation des comptes annuels, sauf dissimulation', 'La découverte par un associé', 'Le jour de la plainte'], 1, 'Jurisprudence constante de la chambre criminelle.'),

  // Compléments matières existantes
  Q('deonto', 'Qui exerce le pouvoir disciplinaire sur les avocats en première instance ?', ['Le procureur', 'Le conseil de discipline (conseil régional de discipline)', 'Le Conseil d’État', 'Le ministre de la Justice'], 1, 'Avec recours devant la cour d’appel.'),
  Q('deonto', 'La convention d’honoraires écrite est…', ['Facultative', 'Obligatoire', 'Interdite', 'Réservée aux affaires pénales'], 1, 'Obligatoire depuis la loi Macron de 2015 (sauf urgence, aide juridictionnelle).'),
  Q('deonto', 'Un avocat peut-il défendre deux clients aux intérêts opposés dans la même affaire ?', ['Oui', 'Non, c’est un conflit d’intérêts', 'Oui, avec l’accord du bâtonnier', 'Oui, s’il est associé'], 1, 'RIN, art. 4.'),
  Q('fiscal', 'Quel est l’impôt sur la fortune en vigueur depuis 2018 ?', ['ISF', 'IFI (impôt sur la fortune immobilière)', 'Taxe d’habitation', 'CSG'], 1, 'Il remplace l’ISF et ne porte que sur l’immobilier.'),
  Q('fiscal', 'L’impôt sur le revenu est calculé selon…', ['Un taux unique', 'Un barème progressif par tranches', 'Le chiffre d’affaires', 'La valeur du patrimoine'], 1, 'Avec le mécanisme du quotient familial.'),
  Q('fiscal', 'La TVA est un impôt…', ['Direct sur le revenu', 'Indirect sur la consommation', 'Sur le patrimoine', 'Local'], 1, 'Mécanisme de déduction de la taxe payée en amont.'),
  Q('libertes', 'La loi de séparation des Églises et de l’État date de…', ['1789', '1881', '1905', '1958'], 2, 'Loi du 9 décembre 1905.'),
  Q('libertes', 'La liberté de la presse est régie par la loi du…', ['29 juillet 1881', '9 décembre 1905', '1er juillet 1901', '10 juillet 1991'], 0, 'Elle définit notamment la diffamation et l’injure.'),
  Q('libertes', 'La liberté d’association est régie par la loi du…', ['1er juillet 1901', '29 juillet 1881', '1884', '1946'], 0, 'Elle a valeur constitutionnelle depuis la décision de 1971.'),
  Q('libertes', 'Le droit de grève figure dans…', ['La DDHC', 'Le Préambule de la Constitution de 1946', 'La Charte de l’environnement', 'Le Code civil'], 1, 'Alinéa 7 du Préambule de 1946.'),
  Q('constit', 'Combien de députés compte l’Assemblée nationale ?', ['348', '577', '600', '925'], 1, 'Le Sénat compte 348 sénateurs.'),
  Q('constit', 'Le quinquennat présidentiel a été adopté en…', ['1962', '1995', '2000', '2008'], 2, 'Révision constitutionnelle approuvée par référendum le 24 septembre 2000.'),
  Q('constit', 'La révision de 2008 a notamment créé…', ['La QPC', 'L’élection du Président au suffrage universel direct', 'Le Sénat', 'L’article 16'], 0, 'Loi constitutionnelle du 23 juillet 2008 (art. 61-1).'),
  Q('admin', 'Le Tribunal des conflits a été créé de manière définitive en…', ['1790', '1848', '1872', '1958'], 2, 'Loi du 24 mai 1872 (une première version existait en 1848).'),
  Q('admin', 'Un acte de gouvernement est…', ['Attaquable devant le juge administratif', 'Insusceptible de recours juridictionnel', 'Un acte du Premier ministre', 'Un contrat'], 1, 'Ex. : rapports entre pouvoirs publics, relations internationales.'),
  Q('penalg', 'La récidive légale entraîne…', ['L’acquittement', 'Le doublement du maximum de la peine encourue', 'Une simple amende', 'La prescription'], 1, 'Art. 132-8 et s. C. pén.'),
  Q('contrats', 'Depuis quelle réforme l’objet et la cause ne sont-ils plus des conditions de validité ?', ['Loi de 1975', 'Ordonnance du 10 février 2016', 'Loi Hamon de 2014', 'Loi de 2008 sur la prescription'], 1, 'Ratifiée par la loi du 20 avril 2018.'),
  Q('contrats', 'Le pacte de préférence violé avec un tiers de mauvaise foi permet au bénéficiaire…', ['Seulement des dommages et intérêts', 'D’agir en nullité ou de demander à être substitué au tiers', 'D’obtenir la résolution de plein droit', 'Rien'], 1, 'Art. 1123 C. civ.'),
  Q('respciv', 'Depuis 2024, la responsabilité pour troubles anormaux de voisinage est…', ['Une responsabilité pour faute', 'Une responsabilité de plein droit', 'Supprimée', 'Réservée aux propriétaires'], 1, 'Art. 1253 C. civ.'),
  Q('travail', 'La rupture conventionnelle doit être…', ['Imposée par l’employeur', 'Homologuée par l’administration', 'Validée par le juge', 'Approuvée par le CSE'], 1, 'Homologation par la DREETS après un délai de rétractation de 15 jours.'),
  Q('procpen', 'La cour criminelle départementale juge…', ['Les délits', 'Les crimes punis de 15 ou 20 ans de réclusion, en première instance', 'Les mineurs', 'Les contraventions de 5e classe'], 1, 'Elle est composée de cinq magistrats professionnels.'),
];
