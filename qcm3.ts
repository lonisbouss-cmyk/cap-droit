// CAP DROIT — QCM complémentaires, dont des questions à réponses multiples (QRM)
// QRU : a est un nombre. QRM : a est une liste.
import type { Question } from './types';

const Q = (m: string, q: string, c: string[], a: number | number[], e: string): Question => ({ m, q, c, a, e });

export const QCM3: Question[] = [
  // ---------- Contrats et obligations ----------
  Q('contrats', 'Vices du consentement prévus par le Code civil (plusieurs réponses) :', ['L’erreur', 'Le dol', 'La violence', 'La lésion', 'L’abus de dépendance (forme de violence)'], [0, 1, 2, 4], 'Art. 1130 et s. La lésion n’est en principe pas une cause de nullité (art. 1168), sauf exceptions légales.'),
  Q('contrats', 'Sanctions possibles de l’inexécution du contrat (art. 1217) (plusieurs réponses) :', ['Exception d’inexécution', 'Exécution forcée en nature', 'Réduction du prix', 'Résolution', 'Nullité du contrat'], [0, 1, 2, 3], 'La nullité sanctionne un vice de formation, pas l’inexécution.'),
  Q('contrats', 'Pendant le délai d’option d’une promesse unilatérale, la révocation par le promettant…', ['Empêche la formation du contrat promis', 'N’empêche pas la formation du contrat promis', 'Ouvre seulement droit à des dommages et intérêts', 'Est valable si elle est notifiée par huissier'], 1, 'Art. 1124 al. 2 C. civ. (réforme de 2016).'),
  Q('contrats', 'Conditions de la révision pour imprévision (art. 1195) (plusieurs réponses) :', ['Changement de circonstances imprévisible lors de la conclusion', 'Exécution rendue excessivement onéreuse', 'Risque non accepté par la partie qui s’en prévaut', 'Exécution devenue impossible', 'Le débiteur continue d’exécuter pendant la renégociation'], [0, 1, 2, 4], 'L’impossibilité relève de la force majeure (art. 1218), pas de l’imprévision.'),
  Q('respciv', 'Conditions de la responsabilité du fait personnel (art. 1240) (plusieurs réponses) :', ['Une faute', 'Un dommage', 'Un lien de causalité', 'Un contrat entre les parties', 'Un discernement de l’auteur (non exigé depuis 1984 pour l’enfant)'], [0, 1, 2], 'Faute, dommage, lien de causalité. Depuis les arrêts de 1984, la faute de l’enfant s’apprécie sans exiger son discernement.'),
  Q('respciv', 'La loi Badinter du 5 juillet 1985 s’applique…', ['À tout accident impliquant un véhicule terrestre à moteur', 'Aux seuls accidents de train', 'Uniquement aux piétons', 'Aux accidents de bateau'], 0, 'Les trains et tramways circulant sur une voie qui leur est propre sont exclus.'),
  Q('regime', 'Modes d’extinction de l’obligation (plusieurs réponses) :', ['Le paiement', 'La compensation', 'La confusion', 'La remise de dette', 'La cession de créance'], [0, 1, 2, 3], 'La cession de créance transmet l’obligation, elle ne l’éteint pas.'),

  // ---------- Procédure civile ----------
  Q('proccivile', 'Délai d’appel de droit commun d’un jugement contentieux :', ['15 jours', '1 mois à compter de la signification', '2 mois', '1 an'], 1, 'Art. 538 CPC (15 jours en matière gracieuse et pour certaines ordonnances).'),
  Q('proccivile', 'Délai de pourvoi en cassation en matière civile :', ['1 mois', '2 mois à compter de la signification', '10 jours', '6 mois'], 1, 'Art. 612 CPC.'),
  Q('proccivile', 'Principes directeurs du procès civil (plusieurs réponses) :', ['Principe dispositif', 'Principe du contradictoire', 'Principe de l’opportunité des poursuites', 'Principe de la neutralité du juge quant aux faits', 'Obligation de loyauté dans l’administration de la preuve'], [0, 1, 3, 4], 'L’opportunité des poursuites est un principe de procédure pénale (ministère public).'),
  Q('proccivile', 'Les moyens de défense comprennent (plusieurs réponses) :', ['Les défenses au fond', 'Les exceptions de procédure', 'Les fins de non-recevoir', 'Les demandes reconventionnelles', 'Les voies de recours'], [0, 1, 2], 'La demande reconventionnelle est une demande incidente ; les voies de recours attaquent le jugement.'),

  // ---------- Procédure pénale ----------
  Q('procpen', 'Durée initiale maximale de la garde à vue de droit commun :', ['12 heures', '24 heures', '48 heures', '96 heures'], 1, 'Prolongeable de 24 heures sur autorisation du procureur, sous conditions ; régimes dérogatoires plus longs (criminalité organisée, terrorisme).'),
  Q('procpen', 'Droits notifiés à la personne gardée à vue (plusieurs réponses) :', ['Droit de garder le silence', 'Droit d’être assistée par un avocat', 'Droit de faire prévenir un proche et son employeur', 'Droit d’être examinée par un médecin', 'Droit de choisir le lieu de sa garde à vue'], [0, 1, 2, 3], 'Art. 63-1 CPP. S’y ajoutent l’interprète, la consultation de certaines pièces et l’information sur l’infraction.'),
  Q('procpen', 'Selon la CEDH (arrêt Moulin, 2010), le procureur de la République français…', ['Est une autorité judiciaire au sens de l’article 5 § 3', 'N’est pas une autorité judiciaire au sens de l’article 5 § 3', 'Est un juge du siège', 'Ne peut pas contrôler la garde à vue'], 1, 'Faute d’indépendance à l’égard de l’exécutif et des parties.'),
  Q('procpen', 'Juridiction compétente pour juger les délits commis par un majeur :', ['Tribunal de police', 'Tribunal correctionnel', 'Cour d’assises', 'Tribunal judiciaire en matière civile'], 1, 'Contraventions : tribunal de police ; crimes : cour d’assises ou cour criminelle départementale.'),

  // ---------- Droit pénal ----------
  Q('penalg', 'Éléments constitutifs de l’infraction (plusieurs réponses) :', ['Élément légal', 'Élément matériel', 'Élément moral', 'Élément financier', 'Préjudice obligatoire de la victime'], [0, 1, 2], 'Certaines infractions sont constituées sans préjudice (infractions formelles).'),
  Q('penalg', 'Causes d’irresponsabilité pénale (plusieurs réponses) :', ['Légitime défense', 'État de nécessité', 'Trouble psychique ou neuropsychique ayant aboli le discernement', 'Ivresse volontaire', 'Contrainte'], [0, 1, 2, 4], 'L’intoxication volontaire n’exonère pas ; depuis 2022, elle peut même exclure l’irresponsabilité dans certains cas.'),
  Q('penalg', 'L’arrêt Perdereau (1986) admet la répression…', ['De l’infraction impossible (tentative de meurtre sur un cadavre)', 'De la complicité sans fait principal', 'De la responsabilité pénale des personnes morales', 'Du délit d’imprudence'], 0, 'L’impossibilité matérielle n’empêche pas la tentative punissable.'),

  // ---------- Droit administratif ----------
  Q('admin', 'Composantes de l’ordre public général en police administrative (plusieurs réponses) :', ['Sécurité publique', 'Tranquillité publique', 'Salubrité publique', 'Respect de la dignité de la personne humaine', 'Intérêt financier de la commune'], [0, 1, 2, 3], 'La dignité a été consacrée par l’arrêt Commune de Morsang-sur-Orge (1995).'),
  Q('contadm', 'Délai de recours contentieux de droit commun contre une décision administrative :', ['1 mois', '2 mois', '6 mois', '1 an'], 1, 'Art. R. 421-1 CJA. À défaut de mention des voies et délais, un délai raisonnable d’un an (Czabaj, 2016).'),
  Q('contadm', 'Conditions du référé-liberté (art. L. 521-2 CJA) (plusieurs réponses) :', ['Urgence', 'Atteinte grave et manifestement illégale', 'À une liberté fondamentale', 'Recours au fond déjà jugé', 'Décision rendue en principe dans les 48 heures'], [0, 1, 2, 4], 'Le référé-liberté peut être introduit sans recours au fond.'),
  Q('contadm', 'Selon la jurisprudence Danthony (2011), un vice de procédure entraîne l’annulation…', ['Toujours', 'S’il a pu influencer le sens de la décision ou privé l’intéressé d’une garantie', 'Jamais', 'Seulement en matière fiscale'], 1, 'Les vices non substantiels sont « neutralisés ».'),

  // ---------- Droit constitutionnel et libertés ----------
  Q('constit', 'Conditions de transmission d’une QPC (plusieurs réponses) :', ['La disposition est applicable au litige', 'Elle n’a pas déjà été déclarée conforme (sauf changement de circonstances)', 'La question est nouvelle ou présente un caractère sérieux', 'Elle vise un règlement', 'Elle est soulevée dans un écrit distinct et motivé'], [0, 1, 2, 4], 'La QPC porte sur une disposition législative, pas sur un règlement.'),
  Q('constit', 'Le bloc de constitutionnalité comprend (plusieurs réponses) :', ['La Constitution de 1958', 'La Déclaration des droits de l’homme et du citoyen de 1789', 'Le Préambule de 1946', 'La Charte de l’environnement', 'La Convention européenne des droits de l’homme'], [0, 1, 2, 3], 'La Convention européenne relève du contrôle de conventionnalité, exercé par les juges ordinaires.'),
  Q('libertes', 'Le contrôle de proportionnalité d’une mesure de police vérifie qu’elle est (plusieurs réponses) :', ['Adaptée', 'Nécessaire', 'Proportionnée', 'Populaire', 'Fondée sur un risque réel de trouble à l’ordre public'], [0, 1, 2, 4], 'Triple test : adaptée, nécessaire, proportionnée (CE, Ass., 26 oct. 2011, Association pour la promotion de l’image).'),
  Q('libertes', 'La liberté de manifester relève…', ['Du régime d’autorisation préalable', 'Du régime de déclaration préalable', 'D’aucun encadrement', 'Du régime de l’agrément'], 1, 'La manifestation sur la voie publique est soumise à déclaration ; l’autorité peut l’interdire si elle menace l’ordre public.'),

  // ---------- Droit du travail ----------
  Q('travail', 'Indices d’un lien de subordination (plusieurs réponses) :', ['Pouvoir de donner des ordres et des directives', 'Pouvoir d’en contrôler l’exécution', 'Pouvoir de sanctionner les manquements', 'Libre choix de sa clientèle et de ses tarifs', 'Intégration dans un service organisé, avec des conditions imposées'], [0, 1, 2, 4], 'Arrêt Société générale (1996) ; requalification des travailleurs de plateformes (Take Eat Easy, Uber).'),
  Q('travail', 'Durée de la période d’essai initiale maximale d’un cadre en CDI :', ['1 mois', '2 mois', '4 mois', '6 mois'], 2, 'Art. L. 1221-19 C. trav. : 2 mois (ouvriers, employés), 3 mois (agents de maîtrise, techniciens), 4 mois (cadres), renouvelable une fois si un accord de branche le prévoit.'),

  // ---------- Affaires et sociétés ----------
  Q('societes', 'Procédures collectives du Livre VI du Code de commerce (plusieurs réponses) :', ['Sauvegarde', 'Redressement judiciaire', 'Liquidation judiciaire', 'Mandat ad hoc (procédure amiable)', 'Divorce par consentement mutuel'], [0, 1, 2], 'Le mandat ad hoc et la conciliation sont des procédures amiables et confidentielles.'),
  Q('penaff', 'La jurisprudence Rozenblum concerne…', ['L’abus de biens sociaux dans un groupe de sociétés', 'Le blanchiment', 'La corruption d’agent public étranger', 'Le délit d’initié'], 0, 'Fait justificatif du groupe : intérêt commun, contrepartie, absence de déséquilibre.'),

  // ---------- Droit international privé ----------
  Q('dip', 'Conditions de l’exequatur selon l’arrêt Cornelissen (2007) (plusieurs réponses) :', ['Compétence indirecte du juge étranger', 'Conformité à l’ordre public international', 'Absence de fraude', 'Contrôle de la loi appliquée par le juge étranger', 'Révision au fond du jugement'], [0, 1, 2], 'Le contrôle de la loi appliquée a été abandonné, et la révision au fond est exclue depuis l’arrêt Munzer (1964).'),
  Q('dip', 'L’arrêt Forgo (1878) a consacré…', ['Le renvoi', 'L’ordre public atténué', 'La fraude à la loi', 'L’exequatur'], 0, 'La fraude à la loi a été consacrée par l’arrêt Princesse de Bauffremont (1878).'),

  // ---------- Déontologie de l’avocat ----------
  Q('deonto', 'Principes essentiels de la profession d’avocat (plusieurs réponses) :', ['Indépendance', 'Confidentialité et secret professionnel', 'Loyauté', 'Publicité comparative libre', 'Délicatesse et modération'], [0, 1, 2, 4], 'Article 1.3 du Règlement intérieur national (RIN), qui énumère notamment dignité, conscience, indépendance, probité, humanité, honneur, loyauté, désintéressement, confraternité, délicatesse, modération, courtoisie, compétence, dévouement, diligence et prudence.'),
  Q('deonto', 'La convention d’honoraires écrite est…', ['Facultative dans tous les cas', 'Obligatoire, sauf urgence, force majeure ou aide juridictionnelle totale', 'Interdite', 'Réservée aux personnes morales'], 1, 'Loi du 31 décembre 1971 (art. 10), modifiée en 2015.'),
  Q('deonto', 'Le secret professionnel de l’avocat…', ['Est d’ordre public, général, absolu et illimité dans le temps', 'Peut être levé par le client', 'Ne concerne que la défense pénale', 'Cesse à la fin du mandat'], 0, 'Art. 2 du RIN. Le client ne peut pas délier l’avocat de son secret.'),

  // ---------- Méthodologie ----------
  Q('intro', 'Dans un cas pratique, la méthode du syllogisme consiste à présenter…', ['Les faits, la règle, la conclusion', 'La majeure (règle), la mineure (application aux faits), la conclusion', 'La doctrine, la jurisprudence, l’opinion personnelle', 'L’introduction, deux parties, la conclusion'], 1, 'Règle de droit, qualification des faits, solution.'),
  Q('intro', 'Éléments d’une fiche d’arrêt (plusieurs réponses) :', ['Les faits qualifiés juridiquement', 'La procédure', 'Les prétentions et arguments des parties', 'Le problème de droit', 'Une critique personnelle détaillée'], [0, 1, 2, 3], 'La solution et sa portée complètent la fiche ; l’appréciation relève du commentaire.'),
];
