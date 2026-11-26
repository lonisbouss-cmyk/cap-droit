// CAP DROIT — cas pratiques et consultations complémentaires (situations fictives)
import type { CasPratique, Etape } from './types';

const E = (q: string, c: string[], a: number, e: string): Etape => ({ q, c, a, e });

export const CAS2: CasPratique[] = [
  {
    id: 'cas-imprevision', titre: 'Le contrat devenu ruineux', m: 'contrats', niv: 'CRFPA',
    enonce: 'En 2025, une boulangerie conclut avec un fournisseur d’énergie un contrat de trois ans à prix fixe. En 2026, une crise rend le coût de production de l’électricité quatre fois supérieur au prix convenu. Le fournisseur demande une renégociation ; la boulangerie refuse. Le contrat ne contient aucune clause sur ce risque.',
    etapes: [
      E('Quel mécanisme le fournisseur peut-il invoquer ?', ['La force majeure', 'La révision pour imprévision (art. 1195)', 'La nullité pour erreur', 'La caducité'], 1, 'L’exécution reste possible mais excessivement onéreuse en raison d’un changement imprévisible.'),
      E('Pendant la renégociation, le fournisseur peut-il cesser de livrer ?', ['Oui, immédiatement', 'Non, il doit continuer à exécuter ses obligations', 'Oui, s’il prévient par lettre recommandée', 'Oui, si le juge est saisi'], 1, 'Art. 1195 al. 1 in fine.'),
      E('La boulangerie refuse de renégocier. Que peut faire le fournisseur ?', ['Rien', 'Proposer la résolution ou, à défaut d’accord dans un délai raisonnable, demander au juge de réviser ou de mettre fin au contrat', 'Augmenter unilatéralement ses prix', 'Saisir la police'], 1, 'Art. 1195 al. 2.'),
      E('Une clause aurait-elle pu écarter ce mécanisme ?', ['Non, il est d’ordre public', 'Oui, l’article 1195 est supplétif : une partie peut accepter d’assumer ce risque', 'Seulement dans les contrats de consommation', 'Seulement devant notaire'], 1, 'Les parties peuvent aménager ou écarter l’imprévision, sous réserve du droit des clauses abusives.'),
    ],
    retenir: ['Imprévision : changement imprévisible, exécution excessivement onéreuse, risque non accepté.', 'Obligation de continuer à exécuter.', 'Article 1195 supplétif.'],
    fiches: [],
  },
  {
    id: 'cas-accident', titre: 'Le cycliste renversé', m: 'respciv', niv: 'L2',
    enonce: 'Paul, cycliste, est renversé par la voiture de Sofia qui sortait d’un parking. Paul circulait sans lumière, de nuit. Il souffre d’une fracture et réclame l’indemnisation de son préjudice corporel.',
    etapes: [
      E('Quel régime de responsabilité s’applique ?', ['Responsabilité pour faute (art. 1240)', 'Loi Badinter du 5 juillet 1985', 'Responsabilité du fait des choses (art. 1242)', 'Responsabilité contractuelle'], 1, 'Accident de la circulation impliquant un véhicule terrestre à moteur.'),
      E('Le véhicule de Sofia est-il « impliqué » ?', ['Non, car Sofia n’a commis aucune faute', 'Oui : il est intervenu à quelque titre que ce soit dans la survenance de l’accident', 'Seulement s’il roulait vite', 'Non, car Paul était à vélo'], 1, 'L’implication est une notion large, distincte de la causalité et de la faute.'),
      E('La faute de Paul (absence d’éclairage) réduit-elle son indemnisation corporelle ?', ['Oui, de moitié', 'Non : victime non conductrice, seule sa faute inexcusable cause exclusive de l’accident pourrait lui être opposée', 'Oui, totalement', 'Oui, si l’assureur le demande'], 1, 'Le cycliste n’est pas conducteur d’un véhicule terrestre à moteur ; art. 3 de la loi de 1985. La faute inexcusable est entendue très strictement.'),
    ],
    retenir: ['Loi Badinter : véhicule terrestre à moteur impliqué.', 'Victime non conductrice très protégée.', 'Faute inexcusable cause exclusive : quasi jamais retenue.'],
    fiches: [],
  },
  {
    id: 'cas-appel', titre: 'Le délai d’appel oublié', m: 'proccivile', niv: 'CRFPA',
    enonce: 'Votre client a perdu un procès devant le tribunal judiciaire. Le jugement, contradictoire, lui a été signifié par commissaire de justice le 3 mars. Il vous consulte le 28 mars et souhaite faire appel.',
    etapes: [
      E('Quel est le délai d’appel ?', ['15 jours', '1 mois à compter de la signification', '2 mois', '1 an à compter du jugement'], 1, 'Art. 538 CPC.'),
      E('Le client est-il encore dans le délai ?', ['Non', 'Oui, jusqu’au 3 avril (reporté au premier jour ouvrable si ce jour est un samedi, dimanche ou jour férié)', 'Oui, jusqu’au 3 mai', 'Impossible à dire'], 1, 'Art. 640 à 642 CPC : le délai expire le jour du mois portant le même quantième.'),
      E('Comment l’appel est-il formé, en principe, devant la cour d’appel avec représentation obligatoire ?', ['Par lettre simple', 'Par déclaration d’appel transmise par voie électronique par l’avocat', 'Par simple appel téléphonique', 'Par requête au tribunal'], 1, 'Communication électronique obligatoire ; attention ensuite aux délais pour conclure.'),
      E('Quel est le principal risque si l’appelant ne conclut pas dans le délai imparti ?', ['Une simple amende', 'La caducité de la déclaration d’appel', 'Un renvoi automatique', 'Aucun'], 1, 'Les délais de la procédure d’appel sont sanctionnés sévèrement ; vérifiez toujours le régime en vigueur (réformes fréquentes).'),
    ],
    retenir: ['Appel : 1 mois après signification.', 'Calcul : même quantième, report au jour ouvrable.', 'Respecter les délais pour conclure.'],
    fiches: [],
  },
  {
    id: 'cas-gav', titre: 'La garde à vue contestée', m: 'procpen', niv: 'CRFPA',
    enonce: 'Karim, 22 ans, est placé en garde à vue à 10 h pour vol. Il demande un avocat. Les enquêteurs l’entendent dès 10 h 15 sans attendre l’avocat, prévenu à 10 h 10, qui arrive à 11 h. Karim fait des aveux lors de cette première audition.',
    etapes: [
      E('Quel délai de carence l’avocat bénéficie-t-il en principe avant la première audition ?', ['Aucun', 'Deux heures à compter de l’avis', '24 heures', '15 minutes'], 1, 'Art. 63-4-2 CPP : l’audition ne peut débuter sans l’avocat avant l’expiration d’un délai de deux heures, sauf audition sur les seuls éléments d’identité ou dérogation motivée.'),
      E('Quelle sanction pour l’audition irrégulière ?', ['Aucune', 'Nullité de l’audition et des actes dont elle est le support nécessaire, si un grief est établi', 'Libération automatique et classement', 'Une amende pour l’enquêteur'], 1, 'Nullité à soulever avant toute défense au fond devant la juridiction de jugement ou la chambre de l’instruction.'),
      E('Les aveux peuvent-ils fonder seuls une condamnation ?', ['Oui', 'Non : aucune condamnation ne peut être prononcée sur le seul fondement de déclarations faites sans avoir pu s’entretenir avec un avocat et être assisté par lui', 'Oui, s’ils sont signés', 'Seulement pour les crimes'], 1, 'Art. préliminaire du CPP.'),
    ],
    retenir: ['Délai de carence de 2 heures pour l’avocat.', 'Nullité + grief.', 'Pas de condamnation sur des aveux faits sans avocat.'],
    fiches: [],
  },
  {
    id: 'cas-refere', titre: 'Le festival interdit', m: 'contadm', niv: 'CRFPA',
    enonce: 'La veille d’un festival de musique, le maire d’une commune l’interdit par arrêté en invoquant « le risque de nuisances ». Aucun incident n’a été signalé lors des éditions précédentes. L’association organisatrice vous consulte le jour même.',
    etapes: [
      E('Quelle procédure est la plus adaptée ?', ['Recours pour excès de pouvoir seul', 'Référé-liberté (art. L. 521-2 CJA)', 'Plainte pénale', 'Recours gracieux'], 1, 'Urgence extrême : le festival a lieu le lendemain.'),
      E('Quelle liberté fondamentale invoquer ?', ['Le droit de propriété uniquement', 'La liberté de réunion et la liberté d’expression artistique', 'La liberté du commerce seulement', 'Aucune'], 1, 'Elles sont reconnues comme libertés fondamentales par le juge des référés.'),
      E('Comment le juge apprécie-t-il la mesure ?', ['Il vérifie seulement la compétence du maire', 'Il contrôle si la mesure est adaptée, nécessaire et proportionnée au risque réel de trouble à l’ordre public', 'Il ne contrôle pas les mesures de police', 'Il applique un contrôle restreint à l’erreur manifeste'], 1, 'Une interdiction générale, faute de risque établi et de mesure moins contraignante possible, est disproportionnée (jurisprudence Benjamin).'),
      E('Dans quel délai le juge statue-t-il ?', ['48 heures', '2 mois', '6 mois', '1 an'], 0, 'Art. L. 521-2 CJA.'),
    ],
    retenir: ['Référé-liberté : urgence + atteinte grave et manifestement illégale.', 'Contrôle de proportionnalité.', 'Décision sous 48 heures.'],
    fiches: [],
  },
  {
    id: 'cas-licenciement', titre: 'Le licenciement par SMS', m: 'travail', niv: 'L3',
    enonce: 'Nadia, salariée en CDI depuis 4 ans, reçoit un SMS de son employeur : « Inutile de revenir demain, tu es virée. » Aucun entretien préalable n’a eu lieu, aucune lettre ne lui a été adressée.',
    etapes: [
      E('Quelle formalité est obligatoire avant un licenciement pour motif personnel ?', ['Aucune', 'Convocation à un entretien préalable', 'Avis de l’inspection du travail', 'Accord des représentants du personnel'], 1, 'Art. L. 1232-2 C. trav.'),
      E('Quelles sont les conséquences de l’absence de lettre de licenciement motivée ?', ['Le licenciement est nul', 'Le licenciement est dépourvu de cause réelle et sérieuse', 'Aucune conséquence', 'La salariée doit être réintégrée d’office'], 1, 'Le licenciement verbal (ou par SMS non motivé) est sans cause réelle et sérieuse.'),
      E('Comment est fixée l’indemnité pour licenciement sans cause réelle et sérieuse ?', ['Librement par le juge sans limite', 'Selon un barème avec un minimum et un maximum fonction de l’ancienneté (art. L. 1235-3)', 'Un mois de salaire forfaitaire', 'Elle est interdite'], 1, 'Barème jugé compatible avec les engagements internationaux par la Cour de cassation (11 mai 2022).'),
      E('Devant quelle juridiction agir ?', ['Tribunal de commerce', 'Conseil de prud’hommes', 'Tribunal administratif', 'Tribunal de police'], 1, 'Après une phase de conciliation (sauf exceptions).'),
    ],
    retenir: ['Entretien préalable obligatoire.', 'Absence de lettre motivée : licenciement sans cause réelle et sérieuse.', 'Barème Macron.'],
    fiches: [],
  },
  {
    id: 'cas-abs', titre: 'Le dirigeant trop généreux', m: 'penaff', niv: 'M1',
    enonce: 'Le gérant d’une SARL fait payer par la société les travaux de sa résidence secondaire, en les déguisant en « frais d’entretien des locaux ». La société n’en tire aucun avantage.',
    etapes: [
      E('Quelle infraction est caractérisée ?', ['Vol', 'Abus de biens sociaux', 'Escroquerie au jugement', 'Recel seulement'], 1, 'Usage des biens de la société contraire à son intérêt, à des fins personnelles, de mauvaise foi.'),
      E('À partir de quand court la prescription en cas de dissimulation ?', ['Du jour des faits, toujours', 'Du jour où le délit est apparu et a pu être constaté dans des conditions permettant l’exercice de l’action publique', 'De la dissolution de la société', 'Elle ne court jamais'], 1, 'Infraction occulte ou dissimulée : point de départ reporté, dans la limite d’un délai butoir (art. 9-1 CPP).'),
      E('La société peut-elle se constituer partie civile ?', ['Non', 'Oui, la société victime peut agir, et les associés peuvent exercer l’action sociale ut singuli', 'Seulement l’État', 'Seulement les salariés'], 1, 'Les associés ne peuvent en revanche pas agir à titre individuel pour un préjudice qui n’est que le corollaire de celui de la société.'),
    ],
    retenir: ['ABS : usage contraire à l’intérêt social à des fins personnelles.', 'Dissimulation : prescription reportée (délai butoir).', 'Action sociale ut singuli.'],
    fiches: [],
  },
  {
    id: 'cas-dip', titre: 'Le divorce franco-italien', m: 'dip', niv: 'M1',
    enonce: 'Un couple marié, lui Italien, elle Française, vit à Lyon depuis cinq ans. L’épouse souhaite divorcer et saisir le juge français.',
    etapes: [
      E('Quel texte détermine la compétence du juge en matière de divorce dans l’Union européenne ?', ['Le Code civil seul', 'Le règlement Bruxelles II ter', 'La Convention de La Haye sur les successions', 'Le règlement Rome I'], 1, 'Règlement (UE) 2019/1111, qui reprend les chefs de compétence en matière matrimoniale.'),
      E('Le juge français est-il compétent ?', ['Non, il faut saisir le juge italien', 'Oui, la résidence habituelle des époux est en France', 'Seulement si le mari accepte', 'Seulement avec un notaire'], 1, 'La résidence habituelle commune est un chef de compétence.'),
      E('Quelle loi s’applique au divorce en l’absence de choix des époux ?', ['La loi italienne, nationalité du mari', 'La loi de la résidence habituelle des époux au moment de la saisine, soit la loi française (règlement Rome III)', 'Le juge choisit librement', 'La loi de célébration du mariage'], 1, 'Règlement (UE) n° 1259/2010, article 8.'),
    ],
    retenir: ['Compétence : Bruxelles II ter.', 'Loi applicable : Rome III.', 'Rattachement principal : résidence habituelle.'],
    fiches: [],
  },
  {
    id: 'cas-deonto', titre: 'Le conflit d’intérêts', m: 'deonto', niv: 'CRFPA',
    enonce: 'Maître L. conseille depuis deux ans une entreprise dans ses contrats commerciaux. Un ancien salarié de cette entreprise lui demande de l’assister dans un litige prud’homal contre elle.',
    etapes: [
      E('Maître L. peut-il accepter ce dossier ?', ['Oui, sans difficulté', 'Non : il existe un conflit d’intérêts, il ne peut agir contre un client qu’il conseille', 'Oui, s’il ne facture pas', 'Oui, si le salarié insiste'], 1, 'Article 4 du RIN : l’avocat ne peut conseiller, représenter ou défendre plus d’un client dans une même affaire s’il y a conflit d’intérêts, ni accepter une affaire si le secret des informations données par un ancien client risque d’être violé.'),
      E('Que doit-il faire des informations confidentielles de l’entreprise ?', ['Les communiquer au salarié', 'Les garder secrètes, le secret étant absolu et illimité dans le temps', 'Les publier', 'Les remettre au juge'], 1, 'Secret professionnel : article 2 du RIN.'),
      E('Quelle autorité peut être saisie d’une difficulté déontologique ?', ['Le préfet', 'Le bâtonnier de l’ordre', 'Le maire', 'Le ministère des finances'], 1, 'Le bâtonnier règle les difficultés entre avocats et peut être consulté.'),
    ],
    retenir: ['Conflit d’intérêts : refuser le dossier.', 'Secret professionnel absolu et illimité dans le temps.', 'Bâtonnier.'],
    fiches: [],
  },
  {
    id: 'cas-qpc', titre: 'Contester une loi devant le juge', m: 'constit', niv: 'L1',
    enonce: 'Lors d’un procès devant le tribunal judiciaire, votre client estime que la loi qui lui est appliquée porte atteinte au principe d’égalité garanti par la Constitution.',
    etapes: [
      E('Quel mécanisme utiliser ?', ['Un recours direct devant le Conseil constitutionnel', 'Une question prioritaire de constitutionnalité (QPC)', 'Un référé-liberté', 'Une exception d’illégalité'], 1, 'Art. 61-1 de la Constitution.'),
      E('Sous quelle forme la soulever ?', ['Oralement', 'Dans un écrit distinct et motivé', 'Par courriel au Conseil constitutionnel', 'Par pétition'], 1, 'Ordonnance du 7 novembre 1958 modifiée.'),
      E('Qui décide de la renvoyer au Conseil constitutionnel ?', ['Le tribunal directement', 'La Cour de cassation (ou le Conseil d’État), après transmission par la juridiction saisie', 'Le Parlement', 'Le Président de la République'], 1, 'Double filtre : juridiction du fond, puis juridiction suprême, qui statue dans un délai de trois mois.'),
    ],
    retenir: ['QPC : disposition législative, écrit distinct.', 'Double filtre.', 'Abrogation possible avec effet différé.'],
    fiches: [],
  },
];
