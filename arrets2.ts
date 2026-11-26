// CAP DROIT — grands arrêts complémentaires (apport résumé avec nos propres mots)
import type { Arret } from './types';

const R = (id: string, nom: string, jur: string, date: string, m: string, apport: string): Arret => ({ id, nom, jur, date, m, apport });

export const ARRETS2: Arret[] = [
  // ---------- Responsabilité civile et contrats ----------
  R('levert', 'Levert', 'Civ. 2e', '10 mai 2001', 'respciv', 'La responsabilité de plein droit des parents n’est pas subordonnée à l’existence d’une faute de l’enfant : un simple fait causal du mineur suffit.'),
  R('manoukian', 'Manoukian', 'Com.', '26 nov. 2003', 'contrats', 'En cas de rupture fautive des pourparlers, la perte de chance de réaliser les gains espérés du contrat non conclu n’est pas réparable ; seuls les frais et le préjudice lié à la rupture le sont. Solution reprise à l’article 1112 du Code civil.'),
  R('huard', 'Huard', 'Com.', '3 nov. 1992', 'contrats', 'Manque à son obligation d’exécuter le contrat de bonne foi le cocontractant qui prive l’autre partie des moyens de pratiquer des prix concurrentiels, alors que les circonstances économiques avaient changé.'),
  R('pointclub', 'Point Club Vidéo', 'Civ. 1re', '3 juill. 1996', 'contrats', 'Annulation pour absence de cause d’un contrat de location de cassettes vidéo dont l’économie voulue par les parties ne pouvait être réalisée. Aujourd’hui, la contrepartie illusoire ou dérisoire est sanctionnée par l’article 1169.'),
  R('macron', 'Macron', 'Com.', '17 juin 1997', 'suretes', 'Une banque commet une faute en faisant souscrire à une caution un engagement manifestement disproportionné à ses revenus et à son patrimoine. La disproportion est aujourd’hui réglée par l’article 2300 du Code civil (réforme de 2021).'),

  // ---------- Procédure civile ----------
  R('dauvin', 'Dauvin', 'Ass. plén.', '21 déc. 2007', 'proccivile', 'Le juge n’a pas l’obligation, sauf règles particulières, de changer la dénomination ou le fondement juridique des demandes des parties : il en a seulement la faculté.'),

  // ---------- Procédure pénale ----------
  R('brusco', 'Brusco c/ France', 'CEDH', '14 oct. 2010', 'procpen', 'Toute personne gardée à vue doit être informée de son droit de garder le silence et pouvoir être assistée d’un avocat dès le début de la mesure.'),
  R('moulin', 'Moulin c/ France', 'CEDH', '23 nov. 2010', 'procpen', 'Le procureur de la République, du fait de son statut, ne remplit pas l’exigence d’indépendance à l’égard de l’exécutif et des parties pour être qualifié d’« autorité judiciaire » au sens de l’article 5 § 3 de la Convention.'),
  R('gav2011', 'Garde à vue (application immédiate)', 'Ass. plén.', '15 avr. 2011', 'procpen', 'Les États sont tenus de respecter les décisions de la Cour européenne des droits de l’homme sans attendre d’être condamnés ni d’avoir modifié leur législation : les auditions en garde à vue sans assistance effective d’un avocat sont irrégulières.'),

  // ---------- Droit pénal des affaires ----------
  R('rozenblum', 'Rozenblum', 'Crim.', '4 févr. 1985', 'penaff', 'Dans un groupe de sociétés, le concours financier d’une société à une autre échappe à l’abus de biens sociaux s’il est dicté par un intérêt économique commun, avec une contrepartie, sans rompre l’équilibre entre les engagements ni excéder les possibilités financières de la société qui le supporte.'),
  R('carignon', 'Carignon', 'Crim.', '27 oct. 1997', 'penaff', 'Quel que soit l’avantage à court terme qu’elle peut procurer, l’utilisation des fonds sociaux dans le seul but de commettre un délit tel que la corruption est contraire à l’intérêt social : elle constitue un abus de biens sociaux.'),

  // ---------- Droit international privé ----------
  R('forgo', 'Forgo', 'Req.', '24 juin 1878', 'dip', 'Admission du renvoi : lorsque la règle de conflit étrangère désignée renvoie à la loi française, le juge français applique sa propre loi.'),
  R('riviere', 'Rivière', 'Civ.', '17 avr. 1953', 'dip', 'Effet atténué de l’ordre public : la réaction contre une disposition étrangère n’est pas la même selon qu’il s’agit d’acquérir un droit en France ou de laisser produire en France les effets d’un droit acquis à l’étranger.'),
  R('bisbal', 'Bisbal', 'Civ. 1re', '12 mai 1959', 'dip', 'Les règles de conflit de lois, du moins en ce qu’elles désignent une loi étrangère, n’ont pas un caractère d’ordre public : le juge n’est pas tenu de les appliquer d’office (solution ensuite nuancée par la jurisprudence).'),
  R('cornelissen', 'Cornelissen', 'Civ. 1re', '20 févr. 2007', 'dip', 'Hors convention internationale, l’exequatur d’un jugement étranger suppose trois conditions : compétence indirecte du juge étranger (rattachement caractérisé du litige), conformité à l’ordre public international de fond et de procédure, absence de fraude.'),

  // ---------- Droit constitutionnel et libertés ----------
  R('qpc1', 'Cristallisation des pensions', 'Cons. const.', '28 mai 2010', 'constit', 'Première décision rendue sur question prioritaire de constitutionnalité : censure du dispositif de « cristallisation » des pensions des anciens combattants ressortissants des anciennes colonies, contraire au principe d’égalité.'),
  R('concurrence87', 'Conseil de la concurrence', 'Cons. const.', '23 janv. 1987', 'constit', 'Principe fondamental reconnu par les lois de la République : relève en dernier ressort de la compétence de la juridiction administrative l’annulation ou la réformation des décisions prises par l’administration dans l’exercice de prérogatives de puissance publique.'),
  R('jeunesmedecins', 'Syndicat Jeunes Médecins', 'CE, ord.', '22 mars 2020', 'libertes', 'Pendant l’épidémie de covid-19, le juge des référés refuse d’ordonner un confinement total mais enjoint au Gouvernement de préciser et de durcir certaines dérogations, au nom de la protection de la vie et de la santé.'),

  // ---------- Droit administratif ----------
  R('thepaz', 'Thépaz', 'TC', '14 janv. 1935', 'admin', 'La faute commise par un agent public dans l’exercice de ses fonctions, même constitutive d’une infraction pénale, peut rester une faute de service non détachable : la responsabilité de l’administration relève alors du juge administratif.'),
  R('ternon', 'Ternon', 'CE, Ass.', '26 oct. 2001', 'admin', 'Sauf texte contraire, l’administration ne peut retirer une décision individuelle explicite créatrice de droits, si elle est illégale, que dans le délai de quatre mois suivant son adoption. Règle reprise par le Code des relations entre le public et l’administration.'),
  R('danthony', 'Danthony', 'CE, Ass.', '23 déc. 2011', 'contadm', 'Un vice de procédure n’entache d’illégalité la décision que s’il a été susceptible d’exercer une influence sur son sens ou s’il a privé les intéressés d’une garantie.'),
  R('czabaj', 'Czabaj', 'CE, Ass.', '13 juill. 2016', 'contadm', 'Au nom de la sécurité juridique, une décision individuelle notifiée sans mention des voies et délais de recours ne peut être contestée au-delà d’un délai raisonnable, en principe d’un an.'),
  R('perreux', 'Dame Perreux', 'CE, Ass.', '30 oct. 2009', 'ue', 'Tout justiciable peut se prévaloir, à l’appui d’un recours contre un acte administratif non réglementaire, des dispositions précises et inconditionnelles d’une directive non transposée dans les délais.'),
];
