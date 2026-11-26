// CAP DROIT — cas pratiques corrigés pas à pas
import type { CasPratique, Etape } from './types';

const E = (q: string, c: string[], a: number, e: string): Etape => ({ q, c, a, e });

export const CAS: CasPratique[] = [
  {
    id: 'cas-vice', titre: 'La voiture d’occasion qui tombe en panne', m: 'speciaux', niv: 'L3',
    enonce: 'Le 3 mars, Léa achète à un garagiste une voiture d’occasion. Trois semaines plus tard, le moteur casse. L’expert révèle une fissure du bloc moteur, déjà présente lors de la vente mais invisible pour un acheteur non spécialiste. Le contrat contient une clause « vendu en l’état, sans garantie ». Léa vous consulte huit mois après la panne.',
    etapes: [
      E('Quel est le problème de droit principal ?', ['Le vendeur a-t-il commis un dol ?', 'L’acheteur peut-il agir en garantie des vices cachés malgré une clause d’exclusion stipulée par un vendeur professionnel ?', 'Le contrat est-il nul pour erreur sur la valeur ?', 'Le garagiste est-il pénalement responsable ?'], 1, 'Les faits orientent vers la garantie des vices cachés (défaut caché, antérieur, rendant la chose impropre) et la question de l’efficacité de la clause.'),
      E('Les conditions de la garantie des vices cachés sont-elles réunies ?', ['Non, le vice était apparent', 'Oui : vice caché, antérieur à la vente et rendant la chose impropre à l’usage', 'Non, une voiture d’occasion n’est pas garantie', 'Seulement si Léa prouve la mauvaise foi du vendeur'], 1, 'Art. 1641 C. civ. : le défaut était invisible pour un profane, existait lors de la vente et rend le véhicule inutilisable.'),
      E('La clause « sans garantie » est-elle opposable à Léa ?', ['Oui, elle a été acceptée', 'Non : le vendeur professionnel est présumé connaître les vices et ne peut s’en prévaloir', 'Oui, car le bien est d’occasion', 'Seulement si elle est en gras'], 1, 'Jurisprudence constante : présomption irréfragable de connaissance du vice par le vendeur professionnel, qui ne peut invoquer une clause exclusive de garantie.'),
      E('Léa est-elle encore dans les délais ?', ['Non, le délai est d’un an à compter de la vente', 'Oui, elle dispose de deux ans à compter de la découverte du vice', 'Non, il fallait agir dans le mois', 'Oui, elle a trente ans'], 1, 'Art. 1648 : deux ans à compter de la découverte. Huit mois se sont écoulés. Elle peut choisir l’action rédhibitoire (restitution du prix) ou estimatoire (réduction), et obtenir des dommages et intérêts contre le vendeur qui connaissait le vice (art. 1645).'),
    ],
    retenir: ['Vice caché : caché, antérieur, grave (art. 1641).', 'Vendeur professionnel : clause exclusive de garantie inopposable.', 'Délai : 2 ans à compter de la découverte (art. 1648).'],
    fiches: ['cs-vente'],
  },
  {
    id: 'cas-dol', titre: 'Le terrain inconstructible', m: 'contrats', niv: 'L2',
    enonce: 'Marc achète un terrain à Paul pour y construire sa maison, ce qu’il a clairement indiqué lors des négociations. Paul savait que la mairie venait de classer la parcelle en zone inconstructible mais ne l’a pas dit. Marc l’apprend six mois après la vente.',
    etapes: [
      E('Quel fondement Marc doit-il invoquer en priorité ?', ['L’erreur sur la valeur', 'Le dol par réticence', 'La violence', 'L’imprévision'], 1, 'Paul a dissimulé intentionnellement une information qu’il savait déterminante (art. 1137 al. 2).'),
      E('L’information était-elle déterminante pour Marc ?', ['Non, il pouvait se renseigner', 'Oui : Marc avait annoncé son projet de construction ; sans l’information il n’aurait pas contracté', 'Non, cela ne concerne que le prix', 'Peu importe'], 1, 'Art. 1130 : le caractère déterminant s’apprécie au regard des personnes et des circonstances.'),
      E('Paul peut-il opposer que Marc a commis une erreur inexcusable en ne vérifiant pas le plan d’urbanisme ?', ['Oui, l’erreur inexcusable exclut la nullité', 'Non, l’erreur provoquée par le dol est toujours excusable', 'Oui, sauf si Marc est professionnel', 'Oui, si le terrain était bon marché'], 1, 'Art. 1139 C. civ. et Civ. 3e, 21 févr. 2001.'),
      E('Quelle sanction et dans quel délai ?', ['Nullité absolue, 30 ans', 'Nullité relative, action dans les 5 ans de la découverte, plus des dommages et intérêts', 'Résolution pour inexécution', 'Aucune, seulement une réduction du prix'], 1, 'Nullité relative (protection d’un intérêt privé), prescription quinquennale courant de la découverte du dol (art. 1144), et responsabilité extracontractuelle pour le préjudice subi (art. 1178 al. 4).'),
    ],
    retenir: ['Réticence dolosive = dissimulation intentionnelle d’une information déterminante.', 'Erreur provoquée par le dol toujours excusable.', 'Nullité relative + dommages et intérêts.'],
    fiches: ['ctr-validite', 'ctr-nullite'],
  },
  {
    id: 'cas-promesse', titre: 'La promesse rétractée', m: 'contrats', niv: 'L2',
    enonce: 'Le 1er février, Sophie consent à Hugo une promesse unilatérale de vente de son appartement, avec une option de deux mois. Le 15 mars, elle lui écrit qu’elle renonce à vendre. Le 20 mars, Hugo lève l’option. Entre-temps, Sophie a vendu l’appartement à Kevin, un ami d’Hugo qui connaissait la promesse.',
    etapes: [
      E('La rétractation de Sophie du 15 mars empêche-t-elle la vente ?', ['Oui, la vente ne peut plus se former', 'Non, la révocation pendant le délai d’option n’empêche pas la formation du contrat promis', 'Oui, si elle indemnise Hugo', 'Cela dépend du prix'], 1, 'Art. 1124 al. 2 C. civ. ; jurisprudence Cruz abandonnée.'),
      E('La levée d’option du 20 mars a-t-elle formé la vente ?', ['Non, l’option était expirée', 'Oui, elle intervient dans le délai de deux mois', 'Non, il fallait un acte notarié', 'Oui, mais elle est inopposable à Sophie'], 1, 'L’option court jusqu’au 1er avril : la levée est valable et forme la vente.'),
      E('Quel est le sort de la vente à Kevin ?', ['Elle est valable car Kevin a payé', 'Elle est nulle car Kevin connaissait l’existence de la promesse', 'Elle est inopposable seulement', 'Elle est résolue de plein droit'], 1, 'Art. 1124 al. 3 : contrat conclu en violation de la promesse avec un tiers qui en connaissait l’existence = nul.'),
      E('Que peut finalement obtenir Hugo ?', ['Seulement des dommages et intérêts', 'L’exécution forcée de la vente à son profit, après annulation de la vente à Kevin', 'Le remboursement de l’indemnité d’immobilisation', 'Rien'], 1, 'Exécution forcée en nature (art. 1221), sous réserve des règles de publicité foncière ; des dommages et intérêts peuvent s’y ajouter.'),
    ],
    retenir: ['Promesse unilatérale : rétractation inefficace.', 'Tiers de mauvaise foi : nullité du contrat concurrent.'],
    fiches: ['ctr-formation'],
  },
  {
    id: 'cas-chose', titre: 'Le pot de fleurs du balcon', m: 'respciv', niv: 'L2',
    enonce: 'Un jour de grand vent, un pot de fleurs posé sur la rambarde du balcon de M. Durand tombe sur Julie qui passe dans la rue. Elle est blessée. M. Durand soutient qu’il n’a commis aucune faute : le vent était fort, mais Météo-France n’avait émis qu’une vigilance jaune.',
    etapes: [
      E('Quel régime de responsabilité est le plus favorable à Julie ?', ['Responsabilité pour faute (art. 1240)', 'Responsabilité du fait des choses (art. 1242 al. 1)', 'Responsabilité contractuelle', 'Loi Badinter'], 1, 'Pas besoin de prouver une faute : le gardien est présumé responsable (Jand’heur).'),
      E('Le fait de la chose est-il établi ?', ['Non, le pot était inerte', 'Oui, la chose en mouvement est entrée en contact avec la victime : son rôle actif est présumé', 'Non, il faut prouver une faute d’entretien', 'Oui, seulement si le pot était cassé'], 1, 'Chose en mouvement + contact = présomption de rôle causal.'),
      E('Qui est gardien ?', ['Météo-France', 'M. Durand, qui avait l’usage, la direction et le contrôle du pot', 'Le syndic de copropriété', 'Personne'], 1, 'Arrêt Franck ; présomption de garde pesant sur le propriétaire.'),
      E('Le vent peut-il exonérer M. Durand ?', ['Oui, c’est un événement naturel', 'Non : une simple vigilance jaune ne présente pas les caractères d’imprévisibilité et d’irrésistibilité de la force majeure', 'Oui, partiellement', 'Oui, si son assurance le prévoit'], 1, 'Un coup de vent prévisible n’est pas un cas de force majeure. M. Durand doit réparer intégralement le préjudice de Julie.'),
    ],
    retenir: ['Fait des choses : pas de faute à prouver.', 'Chose en mouvement + contact = rôle actif présumé.', 'Force majeure strictement appréciée.'],
    fiches: ['rc-choses', 'rc-conditions'],
  },
  {
    id: 'cas-parents', titre: 'Le ballon dans la vitrine', m: 'respciv', niv: 'L2',
    enonce: 'Tom, 11 ans, joue au ballon dans la cour de l’immeuble où il vit avec sa mère, qui a la garde exclusive. Un tir mal ajusté brise la vitrine d’une boutique et blesse la vendeuse. La mère affirme avoir toujours bien surveillé et éduqué son fils ; le père, qui vit ailleurs, exerce l’autorité parentale conjointement.',
    etapes: [
      E('Faut-il prouver une faute de Tom pour engager la responsabilité des parents ?', ['Oui, une faute caractérisée', 'Non, un fait causal de l’enfant suffit', 'Oui, une faute intentionnelle', 'Non, mais il faut que Tom ait 13 ans'], 1, 'Fullenwarth (1984), Levert (2001).'),
      E('La mère peut-elle s’exonérer en prouvant une bonne surveillance ?', ['Oui', 'Non, la responsabilité est de plein droit : seule la force majeure ou la faute de la victime exonère', 'Oui, si elle a assuré son fils', 'Oui, si l’enfant avait plus de 10 ans'], 1, 'Bertrand, Civ. 2e, 19 févr. 1997.'),
      E('Le père peut-il être déclaré responsable ?', ['Non, il ne cohabite pas avec Tom', 'Oui, la cohabitation s’entend de la résidence habituelle de l’enfant chez l’un ou l’autre parent exerçant l’autorité parentale', 'Oui, s’il était présent', 'Non, jamais'], 1, 'La jurisprudence récente retient que les deux parents exerçant l’autorité parentale sont solidairement responsables, la cohabitation résultant de la résidence habituelle de l’enfant (Ass. plén., 28 juin 2024).'),
      E('La vendeuse peut-elle aussi agir directement contre Tom ?', ['Non, un mineur ne peut être responsable', 'Oui, la faute de l’enfant n’exige pas de discernement (faute objective)', 'Seulement s’il a 13 ans', 'Seulement au pénal'], 1, 'Lemaire et Derguini (1984) : la responsabilité personnelle du mineur peut être engagée, même privé de discernement.'),
    ],
    retenir: ['Parents : responsabilité de plein droit.', 'Fait causal suffit.', 'Les deux parents exerçant l’autorité parentale répondent solidairement.'],
    fiches: ['rc-autrui'],
  },
  {
    id: 'cas-legitimedefense', titre: 'Le cambrioleur dans le jardin', m: 'penalg', niv: 'L2',
    enonce: 'Vers 23 h, M. Martin surprend un individu en train de voler des outils dans son abri de jardin. Le voleur s’enfuit en lui tournant le dos. M. Martin saisit une barre de fer et le frappe à la tête ; le voleur est grièvement blessé.',
    etapes: [
      E('Quelle qualification pénale peut être retenue contre M. Martin ?', ['Aucune', 'Violences volontaires aggravées (avec arme), ayant entraîné une mutilation ou une ITT selon le résultat', 'Homicide involontaire', 'Tentative de vol'], 1, 'Coups volontaires avec une arme par destination.'),
      E('M. Martin peut-il invoquer la légitime défense de sa personne ?', ['Oui', 'Non, aucune atteinte n’était dirigée contre sa personne et le voleur fuyait', 'Oui, de nuit tout est permis', 'Oui, car il était chez lui'], 1, 'Pas d’atteinte actuelle à sa personne : la riposte n’était pas commandée par la nécessité.'),
      E('La présomption de légitime défense de l’article 122-6 s’applique-t-elle ?', ['Oui, c’était la nuit', 'Non : elle vise l’entrée par effraction dans un lieu habité ; un abri de jardin n’en est pas un et l’agresseur fuyait', 'Oui, pour tout vol', 'Oui, de manière irréfragable'], 1, 'Présomption simple, limitée aux lieux habités, et renversable.'),
      E('Et la légitime défense des biens ?', ['Elle justifie l’acte', 'Non : l’infraction n’était plus en cours d’exécution et frapper à la tête un fuyard n’est ni strictement nécessaire ni proportionné', 'Oui, si les outils avaient de la valeur', 'Oui, si la police était loin'], 1, 'Art. 122-5 al. 2 : il faut interrompre l’exécution d’un crime ou délit contre un bien, par un acte strictement nécessaire et proportionné. M. Martin est pénalement responsable.'),
    ],
    retenir: ['Légitime défense : actualité, nécessité, proportionnalité.', 'Pour les biens : interrompre l’infraction, jamais d’homicide volontaire.', 'Présomptions de l’art. 122-6 : lieu habité, effraction, de nuit.'],
    fiches: ['pg-irresponsabilite'],
  },
  {
    id: 'cas-complicite', titre: 'Le guetteur et le prêt de voiture', m: 'penalg', niv: 'L2',
    enonce: 'Karim prête sa voiture à Yanis en sachant qu’il va l’utiliser pour cambrioler une bijouterie. Le soir même, Inès fait le guet devant la boutique. Yanis entre par effraction mais l’alarme se déclenche : il s’enfuit sans rien emporter.',
    etapes: [
      E('Quelle infraction Yanis a-t-il commise ?', ['Aucune, il n’a rien volé', 'Une tentative de vol aggravé, punissable', 'Un vol consommé', 'Une contravention'], 1, 'Commencement d’exécution (entrée par effraction) interrompu par une circonstance indépendante de sa volonté (l’alarme). La tentative de délit est punissable lorsque la loi le prévoit, ce qui est le cas du vol (art. 311-13).'),
      E('Karim est-il complice ?', ['Non, il n’était pas sur place', 'Oui : aide ou assistance antérieure, en connaissance de cause, à un fait principal punissable (la tentative)', 'Non, la tentative ne permet pas la complicité', 'Oui, mais comme receleur'], 1, 'Art. 121-7 al. 1 : l’aide peut être antérieure. La tentative punissable suffit comme fait principal.'),
      E('Inès, qui faisait le guet, est-elle coauteur ou complice ?', ['Coauteur', 'Complice par aide ou assistance concomitante', 'Ni l’un ni l’autre', 'Témoin'], 1, 'Le guet est classiquement analysé comme une aide à la commission ; certaines infractions (vol en réunion) permettent d’en tenir compte comme circonstance aggravante.'),
      E('Quelle peine encourent les complices ?', ['La moitié de la peine de l’auteur', 'Les mêmes peines que l’auteur', 'Une simple amende', 'Aucune'], 1, 'Art. 121-6 : le complice est puni comme auteur.'),
    ],
    retenir: ['Tentative : commencement d’exécution + absence de désistement volontaire.', 'Complicité : fait principal punissable, acte positif, intention.', 'Complice puni comme auteur.'],
    fiches: ['pg-infraction', 'pg-participation'],
  },
  {
    id: 'cas-escroquerie', titre: 'Le faux conseiller bancaire', m: 'penals', niv: 'L3',
    enonce: 'Se présentant au téléphone comme conseiller de la banque de Mme Leroy, Damien lui fait croire qu’une fraude est en cours et la convainc de valider sur son application un virement de 4 000 € vers un « compte sécurisé » qui est en réalité le sien.',
    etapes: [
      E('Quelle qualification retenir ?', ['Vol', 'Escroquerie', 'Abus de confiance', 'Extorsion'], 1, 'La victime a remis les fonds, mais sous l’effet d’une tromperie : c’est le schéma de l’escroquerie (art. 313-1).'),
      E('Quel moyen frauduleux est caractérisé ?', ['Un simple mensonge', 'L’usage d’une fausse qualité (se dire conseiller bancaire)', 'Aucun', 'Une violence morale'], 1, 'La fausse qualité suffit, sans manœuvres supplémentaires.'),
      E('La remise est-elle caractérisée alors que Mme Leroy a elle-même validé le virement ?', ['Non, il faut une remise matérielle', 'Oui, la remise de fonds peut résulter d’un virement consenti par la victime trompée', 'Non, c’est un vol', 'Seulement si le virement dépasse 5 000 €'], 1, 'C’est précisément la remise viciée qui distingue l’escroquerie du vol.'),
      E('Peine encourue ?', ['3 ans et 45 000 €', '5 ans et 375 000 €', '7 ans et 100 000 €', '10 ans et 1 000 000 €'], 1, 'Art. 313-1 al. 2, hors circonstances aggravantes.'),
    ],
    retenir: ['Escroquerie = tromperie déterminant une remise.', 'Fausse qualité suffit.', '5 ans et 375 000 €.'],
    fiches: ['ps-biens'],
  },
  {
    id: 'cas-gav', titre: 'La garde à vue sans avocat', m: 'procpen', niv: 'L3',
    enonce: 'Arrêté à 14 h pour un vol avec violences, Lucas est placé en garde à vue. Il demande un avocat, mais les enquêteurs l’interrogent dès 14 h 30 sans attendre l’arrivée de celui-ci ni l’avoir informé de son droit de se taire. Lucas passe aux aveux.',
    etapes: [
      E('Lucas pouvait-il être placé en garde à vue ?', ['Non, seulement pour les crimes', 'Oui : raisons plausibles de soupçonner un délit puni d’emprisonnement', 'Non, il fallait un mandat', 'Oui, pour toute infraction'], 1, 'Art. 62-2 CPP.'),
      E('Quels droits ont été méconnus ?', ['Aucun', 'Le droit d’être informé de son droit de se taire et le droit à l’assistance d’un avocat lors des auditions', 'Le droit de téléphoner à son employeur', 'Le droit à un interprète'], 1, 'Art. 63-1 et 63-4-2 CPP : la première audition ne peut débuter sans l’avocat avant l’expiration d’un délai de deux heures (sauf dérogations), et le droit au silence doit être notifié.'),
      E('Quelle est la sanction de ces irrégularités ?', ['Aucune', 'La nullité des auditions irrégulières, le grief étant établi', 'La nullité de toute la procédure automatiquement', 'Une amende pour les enquêteurs'], 1, 'Nullités d’ordre public ou portant atteinte aux intérêts de la personne ; les aveux ainsi obtenus sont annulés et ne peuvent fonder une condamnation.'),
      E('Quelle décision est à l’origine de ces garanties ?', ['Liberté d’association (1971)', 'QPC du 30 juillet 2010 sur la garde à vue', 'Arrêt Blanco', 'Arrêt Nicolo'], 1, 'Suivie de la loi du 14 avril 2011 et de la jurisprudence de la CEDH (Salduz, Brusco).'),
    ],
    retenir: ['Droit au silence + avocat dès le début.', 'Délai de carence de 2 h avant la première audition.', 'Aveux irréguliers annulés.'],
    fiches: ['pp-enquete'],
  },
  {
    id: 'cas-police', titre: 'L’arrêté anti-mendicité', m: 'admin', niv: 'L2',
    enonce: 'Le maire d’une commune touristique prend un arrêté interdisant toute mendicité sur l’ensemble du territoire communal, toute l’année et à toute heure, « afin de préserver l’image de la ville ». Une association veut le contester.',
    etapes: [
      E('Quel recours l’association doit-elle former ?', ['Un recours de plein contentieux', 'Un recours pour excès de pouvoir devant le tribunal administratif', 'Une plainte pénale', 'Une action devant le juge judiciaire'], 1, 'Acte administratif réglementaire faisant grief ; l’association a intérêt à agir si son objet statutaire est en rapport.'),
      E('Le motif « préserver l’image de la ville » relève-t-il de l’ordre public ?', ['Oui, c’est la tranquillité', 'Non, l’esthétique ou l’image ne sont pas des composantes de l’ordre public', 'Oui, c’est la dignité', 'Oui, c’est la salubrité'], 1, 'L’ordre public comprend sécurité, tranquillité, salubrité et dignité, pas l’attractivité touristique.'),
      E('L’interdiction est-elle proportionnée ?', ['Oui', 'Non : interdiction générale et absolue, sans limitation de lieu ni de temps', 'Oui, si elle est publiée', 'Cela dépend du nombre de mendiants'], 1, 'Jurisprudence Benjamin : une mesure de police doit être nécessaire, adaptée et proportionnée ; les interdictions générales et absolues sont en principe illégales.'),
      E('Comment obtenir une décision rapide ?', ['Attendre le jugement au fond', 'Joindre au REP un référé-suspension (urgence + doute sérieux), voire un référé-liberté', 'Saisir le préfet', 'Saisir la CEDH'], 1, 'Art. L. 521-1 et L. 521-2 CJA. La liberté d’aller et venir est une liberté fondamentale.'),
    ],
    retenir: ['Police : ordre public strictement défini.', 'Proportionnalité (Benjamin).', 'REP + référé.'],
    fiches: ['adm-police', 'ca-refere', 'ca-rep'],
  },
  {
    id: 'cas-retrait', titre: 'Le permis de construire retiré', m: 'admin', niv: 'L2',
    enonce: 'Le 10 janvier, le maire délivre un permis de construire à Mme Petit. Le 2 juin, il le retire au motif qu’il aurait été illégalement accordé, sans avoir invité Mme Petit à présenter ses observations.',
    etapes: [
      E('Le permis de construire est-il une décision créatrice de droits ?', ['Non', 'Oui', 'Seulement après le début des travaux', 'Seulement s’il est affiché'], 1, 'Il confère à son bénéficiaire le droit de construire.'),
      E('Le retrait est-il intervenu dans le délai légal ?', ['Oui, dans l’année', 'Non : plus de quatre mois (ou trois mois en urbanisme) se sont écoulés', 'Oui, sans délai pour un acte illégal', 'Oui, car le maire est compétent'], 1, 'Droit commun : 4 mois (art. L. 242-1 CRPA) ; en urbanisme, l’article L. 424-5 du Code de l’urbanisme limite le retrait d’un permis illégal à trois mois.'),
      E('Une procédure contradictoire était-elle nécessaire ?', ['Non', 'Oui, le retrait d’une décision créatrice de droits doit être motivé et précédé d’une procédure contradictoire', 'Seulement si le permis est légal', 'Seulement devant le juge'], 1, 'Art. L. 211-2 et L. 121-1 CRPA.'),
      E('Conclusion ?', ['Le retrait est légal', 'Le retrait est illégal : Mme Petit peut en obtenir l’annulation et la suspension en référé', 'Le permis est inexistant', 'Mme Petit doit redéposer une demande'], 1, 'Double illégalité : tardiveté et vice de procédure privant d’une garantie (Danthony).'),
    ],
    retenir: ['Retrait d’un acte créateur de droits illégal : 4 mois (3 mois pour un permis).', 'Motivation + contradictoire.'],
    fiches: ['adm-actes', 'ca-rep'],
  },
  {
    id: 'cas-licenciement', titre: 'Le licenciement par SMS', m: 'travail', niv: 'L3',
    enonce: 'Nadia, vendeuse en CDI depuis 4 ans, arrive deux fois en retard en un mois. Son employeur lui envoie un SMS : « Inutile de revenir demain, vous êtes virée. » Aucun entretien n’a eu lieu.',
    etapes: [
      E('La procédure de licenciement a-t-elle été respectée ?', ['Oui, un SMS est un écrit', 'Non : convocation à entretien préalable et lettre recommandée motivée sont obligatoires', 'Oui, en cas de faute grave', 'Cela dépend de la convention collective'], 1, 'Art. L. 1232-2 et s. C. trav.'),
      E('Deux retards constituent-ils une cause réelle et sérieuse ?', ['Oui, toujours', 'Non, en principe, s’agissant de faits isolés chez une salariée sans antécédent', 'Oui, une faute lourde', 'Oui, si l’employeur le décide'], 1, 'La cause doit être objective, exacte et suffisamment sérieuse ; deux retards isolés ne le sont généralement pas.'),
      E('Quelle indemnisation Nadia peut-elle obtenir ?', ['Aucune', 'Une indemnité pour licenciement sans cause réelle et sérieuse selon le barème (art. L. 1235-3), plus les indemnités de rupture', 'La réintégration obligatoire', 'Un an de salaire automatiquement'], 1, 'Barème selon l’ancienneté ; en outre indemnité légale de licenciement, préavis et congés payés.'),
      E('Dans quel délai doit-elle agir ?', ['2 mois', '12 mois à compter de la notification', '5 ans', '30 ans'], 1, 'Art. L. 1471-1 C. trav.'),
    ],
    retenir: ['Procédure : convocation, entretien, lettre motivée.', 'Cause réelle et sérieuse.', 'Barème ; contestation sous 12 mois.'],
    fiches: ['trav-rupture'],
  },
  {
    id: 'cas-qpc', titre: 'La question prioritaire de constitutionnalité', m: 'constit', niv: 'L1',
    enonce: 'Poursuivi devant le tribunal correctionnel, Antoine estime que la loi qui définit l’infraction est rédigée de façon trop vague et porte atteinte au principe de légalité des délits. Son avocat veut soulever une QPC.',
    etapes: [
      E('Devant quel juge la QPC peut-elle être soulevée ?', ['Uniquement devant le Conseil constitutionnel', 'Devant le tribunal correctionnel saisi du litige', 'Devant le Conseil d’État uniquement', 'Devant la CEDH'], 1, 'Devant toute juridiction relevant du Conseil d’État ou de la Cour de cassation (sauf cour d’assises), par écrit distinct et motivé.'),
      E('Quelles conditions le tribunal vérifie-t-il ?', ['Applicabilité au litige, absence de déclaration de conformité antérieure, caractère non dépourvu de sérieux', 'Seulement la nouveauté', 'La recevabilité du pourvoi', 'L’accord du parquet'], 0, 'Ordonnance du 7 novembre 1958 modifiée (loi organique du 10 décembre 2009).'),
      E('Qui transmet ensuite au Conseil constitutionnel ?', ['Le tribunal directement', 'La Cour de cassation, après examen (sérieux ou nouveauté)', 'Le procureur', 'Le Président de la République'], 1, 'Double filtrage ; la juridiction suprême statue dans les trois mois.'),
      E('Quelle norme de référence invoquer ?', ['Art. 8 DDHC et art. 34 de la Constitution (légalité des délits et des peines)', 'Art. 1240 C. civ.', 'Art. 6 CEDH uniquement', 'Art. 55 C.'], 0, 'Le Conseil constitutionnel censure les incriminations insuffisamment claires et précises ; la conventionnalité (CEDH) ne relève pas de la QPC.'),
    ],
    retenir: ['QPC : écrit distinct, triple filtre, double filtrage.', 'Seuls les droits et libertés garantis par la Constitution.', 'Effet abrogatif (art. 62).'],
    fiches: ['cst-controle'],
  },
  {
    id: 'cas-europe', titre: 'La directive non transposée', m: 'ue', niv: 'L2',
    enonce: 'Une directive de l’Union accorde aux salariés un droit précis et inconditionnel à un congé. Le délai de transposition a expiré depuis un an, mais la France ne l’a pas transposée. Julien, salarié d’une entreprise privée, et Clara, agente d’un hôpital public, veulent s’en prévaloir.',
    etapes: [
      E('Clara peut-elle invoquer la directive contre l’hôpital public ?', ['Non', 'Oui : effet direct vertical contre l’État et ses émanations', 'Seulement après une loi', 'Seulement devant la CJUE'], 1, 'Disposition claire, précise et inconditionnelle ; délai expiré.'),
      E('Julien peut-il l’invoquer contre son employeur privé ?', ['Oui, effet direct horizontal', 'Non : une directive n’a pas d’effet direct horizontal', 'Oui, si l’entreprise a plus de 50 salariés', 'Oui, devant les prud’hommes'], 1, 'Jurisprudence constante de la CJUE (Marshall 1986, Faccini Dori 1994).'),
      E('Quel autre outil peut aider Julien ?', ['L’interprétation conforme du droit national et l’action en responsabilité contre l’État (Francovich)', 'Une QPC', 'Le référé-liberté', 'Aucun'], 0, 'Le juge interprète le droit interne à la lumière de la directive ; à défaut, Julien peut engager la responsabilité de l’État pour défaut de transposition.'),
      E('Si le juge français a un doute sur l’interprétation de la directive, que doit-il faire ?', ['Écarter la directive', 'Poser une question préjudicielle à la CJUE (obligatoire en dernier ressort)', 'Saisir le Conseil constitutionnel', 'Demander l’avis du ministre'], 1, 'Art. 267 TFUE.'),
    ],
    retenir: ['Directive : effet direct vertical seulement.', 'Interprétation conforme + responsabilité de l’État.', 'Renvoi préjudiciel.'],
    fiches: ['ue-ordre'],
  },
  {
    id: 'cas-procedure', titre: 'Le moyen soulevé trop tard', m: 'proccivile', niv: 'L3',
    enonce: 'Assigné en paiement devant le tribunal judiciaire, M. Blanc conclut d’abord au fond en contestant la dette. Dans de nouvelles conclusions, il soulève ensuite l’incompétence territoriale du tribunal, puis la prescription de l’action.',
    etapes: [
      E('L’incompétence territoriale est…', ['Une fin de non-recevoir', 'Une exception de procédure', 'Une défense au fond', 'Un incident d’instance'], 1, 'Art. 73 et 75 CPC.'),
      E('Est-elle recevable ici ?', ['Oui, à tout moment', 'Non : elle devait être soulevée avant toute défense au fond (in limine litis)', 'Oui, si le juge l’accepte', 'Oui, en appel'], 1, 'Art. 74 CPC.'),
      E('La prescription est…', ['Une exception de procédure', 'Une fin de non-recevoir', 'Une défense au fond', 'Un moyen d’ordre public'], 1, 'Art. 122 CPC.'),
      E('Peut-elle encore être invoquée ?', ['Non, trop tard', 'Oui, une fin de non-recevoir peut être proposée en tout état de cause', 'Seulement devant la Cour de cassation', 'Seulement si le juge la relève'], 1, 'Art. 123 CPC (sous réserve d’éventuels dommages et intérêts en cas d’invocation tardive dilatoire).'),
    ],
    retenir: ['Exception de procédure : in limine litis.', 'Fin de non-recevoir : en tout état de cause.'],
    fiches: ['pc-action'],
  },
];
