// CAP DROIT — fiches de cours : droit privé (introduction, personnes, obligations, biens, contrats spéciaux, procédure civile)
import type { Fiche } from './types';

export const FICHES1: Fiche[] = [
  // ======================= INTRODUCTION AU DROIT (L1) =======================
  {
    id: 'intro-regle', m: 'intro', titre: 'La règle de droit et ses caractères',
    intro: 'Le droit objectif est l’ensemble des règles qui régissent la vie en société et dont le respect est assuré par la puissance publique. Il se distingue de la morale, de la religion et des usages de politesse.',
    parts: [
      { t: 'Caractères de la règle de droit', l: ['Générale et abstraite : elle s’applique à tous ceux qui se trouvent dans la situation qu’elle vise, sans désigner nommément quelqu’un.', 'Obligatoire : elle s’impose, qu’elle soit impérative (ordre public) ou supplétive (on peut y déroger par contrat).', 'Coercitive : sa violation est sanctionnée par l’État (nullité, dommages et intérêts, peine, astreinte…).', 'Permanente : elle s’applique de façon constante jusqu’à son abrogation.'] },
      { t: 'Droit objectif et droits subjectifs', l: ['Droit objectif : ensemble des règles (« le droit »).', 'Droits subjectifs : prérogatives reconnues aux personnes (« les droits »), par exemple le droit de propriété ou une créance.', 'Droits patrimoniaux (évaluables en argent, cessibles, transmissibles, saisissables) / droits extrapatrimoniaux (droits de la personnalité, droits familiaux).', 'Parmi les droits patrimoniaux : droits réels (sur une chose : propriété, usufruit, servitude) et droits personnels (contre une personne : créance).'] },
      { t: 'Grandes divisions du droit', l: ['Droit public (rapports impliquant la puissance publique : constitutionnel, administratif, fiscal, finances publiques).', 'Droit privé (rapports entre particuliers : civil, commercial, travail, procédure civile).', 'Disciplines mixtes : droit pénal, procédure pénale, droit de l’Union européenne, droit international privé.', 'Droit interne / droit international ; droit commun / droits spéciaux (specialia generalibus derogant).'] },
    ],
    art: ['civ-6', 'ddhc-4', 'ddhc-5'],
    retenir: ['Une règle de droit est générale, abstraite, obligatoire et sanctionnée par l’État.', 'Règle impérative (ordre public) ≠ règle supplétive.', 'Droits réels (sur une chose) ≠ droits personnels (contre une personne).'],
  },
  {
    id: 'intro-sources', m: 'intro', titre: 'Les sources du droit',
    intro: 'Les sources du droit sont les modes de formation des règles juridiques. On distingue les sources écrites, hiérarchisées, et les sources non écrites (coutume, jurisprudence, doctrine).',
    parts: [
      { t: 'Sources écrites (hiérarchie)', l: ['Bloc de constitutionnalité : Constitution de 1958, DDHC 1789, Préambule de 1946, Charte de l’environnement.', 'Traités et droit de l’UE : supérieurs aux lois (art. 55 C.) mais inférieurs à la Constitution dans l’ordre interne (Sarran, Fraisse).', 'Lois (art. 34 C.) et ordonnances (art. 38 C.).', 'Règlements : décrets autonomes (art. 37), décrets d’application, arrêtés.'] },
      { t: 'La jurisprudence', l: ['Ensemble des décisions de justice ; le juge ne peut édicter d’arrêts de règlement (art. 5 C. civ.) mais doit juger même si la loi est obscure (art. 4).', 'Elle crée pourtant du droit : responsabilité du fait des choses (Teffaine, Jand’heur), abus de droit, troubles de voisinage.', 'Les revirements de jurisprudence sont en principe rétroactifs ; la Cour de cassation peut moduler dans le temps leurs effets.'] },
      { t: 'Coutume et doctrine', l: ['Coutume : usage répété (élément matériel) ressenti comme obligatoire (élément psychologique) ; secundum legem, praeter legem, contra legem (cette dernière rarement admise).', 'Doctrine : opinions des auteurs ; source d’inspiration, sans force obligatoire.'] },
    ],
    art: ['civ-1', 'civ-4', 'civ-5', 'const-55', 'const-34', 'const-37'],
    arrets: ['sarran', 'jacquesvabre', 'nicolo'],
    retenir: ['La loi entre en vigueur à la date fixée ou le lendemain de sa publication au JO (art. 1).', 'Le juge doit juger (art. 4) mais ne peut pas légiférer (art. 5).', 'Traité > loi (art. 55) mais Constitution > traité dans l’ordre interne.'],
  },
  {
    id: 'intro-temps', m: 'intro', titre: 'L’application de la loi dans le temps',
    intro: 'Quand une loi nouvelle remplace une loi ancienne, il faut déterminer laquelle s’applique aux situations en cours : c’est le droit transitoire.',
    parts: [
      { t: 'Les principes (théorie de Roubier)', l: ['Non-rétroactivité : la loi nouvelle ne remet pas en cause les situations juridiques définitivement constituées sous l’empire de la loi ancienne (art. 2 C. civ.).', 'Effet immédiat : la loi nouvelle s’applique immédiatement aux effets futurs des situations en cours.', 'Exception : survie de la loi ancienne en matière contractuelle (les contrats restent régis par la loi en vigueur au jour de leur conclusion), sauf loi d’ordre public impérieux.'] },
      { t: 'Exceptions à la non-rétroactivité', l: ['La non-rétroactivité civile n’a qu’une valeur législative : le législateur peut adopter une loi rétroactive (lois de validation, sous conditions d’intérêt général impérieux, contrôle du Conseil constitutionnel et de la CEDH).', 'Lois interprétatives : elles s’incorporent à la loi interprétée.', 'En matière pénale : la non-rétroactivité de la loi plus sévère a valeur constitutionnelle (art. 8 DDHC) ; la loi plus douce rétroagit (rétroactivité in mitius, art. 112-1 C. pén.).'] },
    ],
    art: ['civ-2', 'ddhc-8', 'pen-112-1'],
    retenir: ['Civil : non-rétroactivité (valeur législative) + effet immédiat + survie de la loi ancienne pour les contrats.', 'Pénal : la loi plus sévère ne rétroagit jamais ; la loi plus douce rétroagit.'],
  },
  {
    id: 'intro-preuve', m: 'intro', titre: 'La preuve des droits',
    intro: 'Avoir un droit ne suffit pas : il faut pouvoir le prouver. Le droit de la preuve détermine qui doit prouver (charge), quoi, et comment (modes de preuve).',
    parts: [
      { t: 'Charge de la preuve', l: ['Actori incumbit probatio : celui qui réclame l’exécution d’une obligation doit la prouver ; celui qui se prétend libéré doit prouver le paiement (art. 1353 C. civ.).', 'Présomptions légales : simples (preuve contraire possible), mixtes, irréfragables (aucune preuve contraire).', 'Le doute profite à celui qui n’avait pas la charge de la preuve.'] },
      { t: 'Faits et actes juridiques', l: ['Faits juridiques : preuve libre (par tout moyen).', 'Actes juridiques : au-delà de 1 500 €, preuve par écrit (art. 1359), sauf impossibilité, commencement de preuve par écrit, ou entre commerçants (liberté de preuve, art. L. 110-3 C. com.).', 'L’écrit électronique a la même force que l’écrit papier si l’auteur est identifié et l’intégrité garantie (art. 1366).'] },
      { t: 'Les modes de preuve', l: ['Écrit : acte authentique (foi jusqu’à inscription de faux) et acte sous signature privée.', 'Témoignage, présomptions judiciaires (indices graves, précis et concordants), aveu, serment.', 'Loyauté : une preuve obtenue de façon déloyale peut désormais être admise si elle est indispensable à l’exercice du droit à la preuve et que l’atteinte est proportionnée (Ass. plén., 22 déc. 2023).'] },
    ],
    art: ['civ-1353', 'civ-1359', 'civ-1366', 'cpc-9', 'com-L.110-3'],
    retenir: ['Celui qui allègue doit prouver.', 'Acte juridique > 1 500 € : écrit exigé (sauf exceptions).', 'Faits juridiques : preuve libre.'],
  },

  // ======================= PERSONNES ET FAMILLE (L1) =======================
  {
    id: 'pers-personnalite', m: 'personnes', titre: 'La personnalité juridique',
    intro: 'La personnalité juridique est l’aptitude à être titulaire de droits et d’obligations. Elle appartient aux personnes physiques et aux personnes morales.',
    parts: [
      { t: 'Début et fin de la personnalité', l: ['Elle commence à la naissance, à condition que l’enfant naisse vivant et viable.', 'Adage infans conceptus : l’enfant conçu est réputé né chaque fois qu’il y va de son intérêt (succession, assurance), à condition de naître vivant et viable.', 'L’embryon et le fœtus ne sont pas des personnes : pas d’homicide involontaire sur l’enfant à naître (Ass. plén., 29 juin 2001).', 'Elle prend fin au décès ; en cas d’absence ou de disparition, un jugement peut déclarer le décès.'] },
      { t: 'L’identification de la personne', l: ['Nom : imprescriptible, indisponible, immuable en principe (changement possible pour motif légitime, ou par simple déclaration en mairie une fois dans sa vie depuis la loi du 2 mars 2022 pour prendre le nom de l’autre parent).', 'Domicile : lieu du principal établissement (art. 102 C. civ.).', 'État civil : sexe, filiation, situation matrimoniale, nationalité, établis par les actes de l’état civil.'] },
      { t: 'Les personnes morales', l: ['Groupements dotés de la personnalité : sociétés (immatriculation au RCS), associations (déclaration en préfecture), syndicats, personnes publiques.', 'Elles ont un patrimoine, un nom, un siège, une nationalité, et peuvent être pénalement responsables (art. 121-2 C. pén.).', 'Principe de spécialité : elles ne peuvent agir que dans la limite de leur objet.'] },
    ],
    art: ['civ-16', 'pen-121-2'],
    arrets: ['foetus'],
    retenir: ['Personnalité = aptitude à être titulaire de droits et d’obligations.', 'Naissance vivant et viable ; infans conceptus.', 'L’enfant à naître n’est pas une personne au sens pénal.'],
  },
  {
    id: 'pers-droitspers', m: 'personnes', titre: 'Les droits de la personnalité',
    intro: 'Les droits de la personnalité protègent les attributs essentiels de la personne : corps, vie privée, image, présomption d’innocence, honneur. Ils sont extrapatrimoniaux.',
    parts: [
      { t: 'Le respect du corps humain', l: ['Le corps est inviolable et non patrimonial (art. 16-1) : ses éléments ne peuvent être vendus.', 'Atteinte possible seulement en cas de nécessité médicale ou dans l’intérêt thérapeutique d’autrui, avec consentement préalable (art. 16-3).', 'Nullité des conventions de gestation pour autrui (art. 16-7).'] },
      { t: 'Vie privée et image', l: ['Chacun a droit au respect de sa vie privée (art. 9) : santé, vie sentimentale, domicile, religion, patrimoine…', 'Le droit à l’image est rattaché à l’article 9 : toute diffusion suppose le consentement, sauf actualité, débat d’intérêt général, personnes publiques dans l’exercice de leurs fonctions.', 'Conciliation avec la liberté d’expression (art. 10 CEDH) : mise en balance au cas par cas.', 'La seule constatation de l’atteinte ouvre droit à réparation.'] },
      { t: 'Présomption d’innocence', l: ['Art. 9-1 C. civ. : action en cas de présentation publique d’une personne comme coupable avant condamnation.', 'Mesures possibles en référé : insertion d’un communiqué, rectification.'] },
    ],
    art: ['civ-9', 'civ-9-1', 'civ-16', 'civ-16-1', 'civ-16-3', 'civ-16-7', 'cedh-8'],
    arrets: ['almamater', 'mennesson'],
    retenir: ['Art. 9 : vie privée ; art. 16 et s. : corps humain.', 'L’atteinte à la vie privée suffit à ouvrir droit à réparation.', 'Toujours mettre en balance vie privée et liberté d’expression.'],
  },
  {
    id: 'pers-incapacites', m: 'personnes', titre: 'Mineurs et majeurs protégés',
    intro: 'La capacité d’exercice est l’aptitude à exercer seul ses droits. Les mineurs et certains majeurs sont frappés d’incapacité pour leur protection.',
    parts: [
      { t: 'Le mineur', l: ['Incapable jusqu’à 18 ans (art. 414), sauf émancipation (possible dès 16 ans).', 'Représenté par ses parents titulaires de l’autorité parentale (administration légale).', 'Il peut accomplir seul les actes de la vie courante autorisés par la loi ou l’usage.', 'Sanction : nullité relative des actes accomplis seul, ou rescision pour lésion.'] },
      { t: 'Les majeurs protégés (gradation)', l: ['Sauvegarde de justice : mesure temporaire, la personne conserve sa capacité ; actions en rescision ou réduction.', 'Curatelle : assistance du curateur pour les actes graves (actes de disposition).', 'Tutelle : représentation continue pour les actes de la vie civile.', 'Habilitation familiale : un proche est habilité à représenter ou assister.', 'Mandat de protection future : la personne organise à l’avance sa protection.', 'Principes : nécessité, subsidiarité, proportionnalité (mesure judiciaire prononcée par le juge des contentieux de la protection).'] },
    ],
    art: ['civ-414'],
    retenir: ['Majorité à 18 ans = pleine capacité.', 'Sauvegarde < curatelle (assistance) < tutelle (représentation).', 'Subsidiarité : la mesure la plus légère suffisante.'],
  },
  {
    id: 'pers-couple', m: 'personnes', titre: 'Le couple : mariage, PACS, concubinage',
    intro: 'Le droit reconnaît trois formes de conjugalité aux effets décroissants : le mariage, le pacte civil de solidarité et le concubinage.',
    parts: [
      { t: 'Le mariage', l: ['Ouvert aux couples de même sexe depuis la loi du 17 mai 2013 (art. 143).', 'Conditions : 18 ans (art. 144), consentement libre et éclairé (art. 146), absence de lien de parenté prohibé, absence de mariage antérieur non dissous.', 'Effets : devoirs de respect, fidélité, secours, assistance (art. 212), communauté de vie, contribution aux charges, solidarité ménagère, régime matrimonial (communauté réduite aux acquêts par défaut).'] },
      { t: 'Le PACS', l: ['Contrat entre deux personnes majeures pour organiser leur vie commune (art. 515-1).', 'Enregistrement en mairie ou chez un notaire.', 'Aide matérielle et assistance réciproques, solidarité pour les dettes ménagères, régime de séparation de biens par défaut.', 'Dissolution simple : décision unilatérale signifiée, déclaration conjointe, mariage ou décès.'] },
      { t: 'Le concubinage', l: ['Union de fait stable et continue (art. 515-8), sans statut organisé.', 'Pas de devoirs entre concubins ni de vocation successorale.', 'Le concubin peut obtenir réparation du décès de son partenaire (Dangereux, 1970).'] },
      { t: 'Le divorce', l: ['Quatre cas : consentement mutuel (en principe par acte d’avocats déposé chez un notaire), acceptation du principe de la rupture, altération définitive du lien conjugal (un an de séparation), faute.', 'Effets : prestation compensatoire destinée à compenser la disparité des conditions de vie, liquidation du régime matrimonial.'] },
    ],
    art: ['civ-143', 'civ-144', 'civ-146', 'civ-212', 'civ-229', 'civ-515-1', 'civ-515-8'],
    arrets: ['dangereux'],
    retenir: ['Mariage > PACS > concubinage en termes d’effets.', 'Divorce par consentement mutuel conventionnel = sans juge, par actes d’avocats.'],
  },
  {
    id: 'pers-filiation', m: 'personnes', titre: 'Filiation et autorité parentale',
    intro: 'La filiation est le lien juridique entre un parent et son enfant. Elle peut être charnelle (par le sang), adoptive, ou résulter d’une AMP.',
    parts: [
      { t: 'Établissement de la filiation', l: ['Par l’effet de la loi : la mère est désignée dans l’acte de naissance ; présomption de paternité du mari.', 'Par reconnaissance volontaire (avant ou après la naissance).', 'Par la possession d’état constatée dans un acte de notoriété (nom, traitement, réputation).', 'Par jugement : action en recherche de paternité ou de maternité ; l’expertise biologique est de droit, sauf motif légitime de ne pas y procéder.'] },
      { t: 'AMP et adoption', l: ['AMP ouverte aux couples de femmes et aux femmes seules (loi du 2 août 2021) : filiation établie par reconnaissance conjointe anticipée devant notaire.', 'Adoption plénière : rupture des liens avec la famille d’origine, irrévocable.', 'Adoption simple : l’adopté conserve ses liens avec sa famille d’origine.'] },
      { t: 'Autorité parentale', l: ['Ensemble de droits et de devoirs ayant pour finalité l’intérêt de l’enfant (art. 371-1), exercée sans violences physiques ou psychologiques.', 'En principe exercée en commun par les deux parents, même séparés.', 'Le juge aux affaires familiales règle les modalités (résidence, droit de visite, pension alimentaire).'] },
    ],
    art: ['civ-371-1', 'civ-16-7'],
    arrets: ['mennesson'],
    retenir: ['Modes d’établissement : loi, reconnaissance, possession d’état, jugement.', 'Autorité parentale = finalité : intérêt de l’enfant.'],
  },

  // ======================= DROIT DES CONTRATS (L2) =======================
  {
    id: 'ctr-notion', m: 'contrats', titre: 'Le contrat : notion, principes, classifications',
    intro: 'Depuis l’ordonnance du 10 février 2016 (ratifiée en 2018), le droit commun des contrats est profondément réformé. Le contrat est un accord de volontés destiné à créer, modifier, transmettre ou éteindre des obligations (art. 1101).',
    parts: [
      { t: 'Trois principes directeurs', l: ['Liberté contractuelle : liberté de contracter ou non, de choisir son cocontractant, de fixer le contenu et la forme (art. 1102), dans le respect de l’ordre public.', 'Force obligatoire : le contrat tient lieu de loi aux parties (art. 1103).', 'Bonne foi : de la négociation à l’exécution, règle d’ordre public (art. 1104).'] },
      { t: 'Classifications (art. 1106 à 1111-1)', l: ['Synallagmatique / unilatéral : obligations réciproques ou d’une seule partie.', 'Commutatif / aléatoire : avantages appréciés comme équivalents ou dépendant d’un événement incertain.', 'À titre onéreux / à titre gratuit.', 'De gré à gré / d’adhésion (art. 1110) : clauses négociables ou non.', 'Contrat-cadre et contrat d’application ; à exécution instantanée ou successive.', 'Consensuel (principe), solennel (forme exigée à peine de nullité), réel (remise d’une chose).'] },
    ],
    art: ['civ-1101', 'civ-1102', 'civ-1103', 'civ-1104', 'civ-1110'],
    retenir: ['Liberté, force obligatoire, bonne foi : les trois principes.', 'Le contrat d’adhésion ouvre l’article 1171 (clauses abusives) et l’interprétation contra proferentem (art. 1190).'],
  },
  {
    id: 'ctr-formation', m: 'contrats', titre: 'La formation du contrat',
    intro: 'Le contrat se forme par la rencontre d’une offre et d’une acceptation (art. 1113), parfois précédée de négociations et d’avant-contrats.',
    parts: [
      { t: 'Négociations', l: ['Libres, mais menées de bonne foi.', 'La rupture abusive engage la responsabilité extracontractuelle ; la réparation ne couvre pas la perte des avantages attendus du contrat non conclu (art. 1112).', 'Devoir précontractuel d’information d’ordre public (art. 1112-1), qui ne porte pas sur la valeur de la prestation.'] },
      { t: 'Offre et acceptation', l: ['L’offre doit être ferme et précise (éléments essentiels) ; elle peut être rétractée tant qu’elle n’est pas parvenue à son destinataire.', 'L’offre assortie d’un délai ne peut être rétractée avant son expiration ; sinon, avant l’écoulement d’un délai raisonnable.', 'Le silence ne vaut pas acceptation, sauf loi, usages, relations d’affaires ou circonstances particulières.', 'Le contrat est conclu dès que l’acceptation parvient à l’offrant (théorie de la réception, art. 1121).'] },
      { t: 'Avant-contrats', l: ['Pacte de préférence : obligation de proposer prioritairement de traiter ; le contrat conclu avec un tiers de mauvaise foi peut être annulé ou le bénéficiaire substitué (art. 1123).', 'Promesse unilatérale : la révocation pendant le délai d’option n’empêche pas la formation du contrat promis (art. 1124), contrairement à la jurisprudence Cruz.'] },
    ],
    art: ['civ-1112-1', 'civ-1113', 'civ-1121', 'civ-1124'],
    arrets: ['cruz', 'baldus'],
    retenir: ['Contrat formé à la réception de l’acceptation.', 'Promesse unilatérale : la rétractation est inefficace, le contrat est formé.', 'Rupture fautive des pourparlers : pas d’indemnisation du gain manqué.'],
  },
  {
    id: 'ctr-validite', m: 'contrats', titre: 'Validité : consentement, capacité, contenu',
    intro: 'Trois conditions de validité : le consentement, la capacité et un contenu licite et certain (art. 1128). La « cause » et l’« objet » ont disparu en tant que notions, mais leurs fonctions demeurent.',
    parts: [
      { t: 'Les vices du consentement', l: ['Erreur (art. 1132) : sur les qualités essentielles de la prestation ou du cocontractant, excusable. L’erreur sur la valeur ou sur les simples motifs n’est pas une cause de nullité.', 'Dol (art. 1137) : manœuvres, mensonges ou réticence intentionnelle émanant du cocontractant ; l’erreur provoquée est toujours excusable.', 'Violence (art. 1140) : contrainte inspirant la crainte d’un mal considérable ; y compris l’abus de l’état de dépendance (art. 1143).', 'Le vice doit être déterminant (art. 1130).'] },
      { t: 'Le contenu du contrat', l: ['Licite : pas de dérogation à l’ordre public par les stipulations ou le but (art. 1162).', 'Certain : prestation possible et déterminée ou déterminable.', 'Contrepartie non illusoire ou dérisoire au moment de la formation dans les contrats onéreux (art. 1169).', 'Clause privant de sa substance l’obligation essentielle : réputée non écrite (art. 1170, ex-Chronopost).', 'Clause créant un déséquilibre significatif dans un contrat d’adhésion : réputée non écrite (art. 1171).'] },
    ],
    art: ['civ-1128', 'civ-1130', 'civ-1132', 'civ-1137', 'civ-1140', 'civ-1143', 'civ-1162', 'civ-1170', 'civ-1171'],
    arrets: ['dolexcuse', 'chronopost', 'faurecia', 'baldus'],
    retenir: ['Erreur, dol, violence : vices déterminants.', 'Dol = erreur toujours excusable, même sur la valeur.', 'Art. 1170 et 1171 : clauses réputées non écrites, le contrat survit.'],
  },
  {
    id: 'ctr-nullite', m: 'contrats', titre: 'Les sanctions de la formation : la nullité',
    intro: 'Le contrat qui ne remplit pas les conditions de validité est nul (art. 1178). La nullité anéantit rétroactivement le contrat.',
    parts: [
      { t: 'Nullité absolue / relative (art. 1179 et s.)', l: ['Absolue : la règle violée protège l’intérêt général ; invocable par toute personne justifiant d’un intérêt et par le ministère public ; pas de confirmation possible.', 'Relative : la règle protège un intérêt privé (vices du consentement, incapacité) ; seule la partie protégée peut l’invoquer ; confirmation possible.', 'Prescription : cinq ans dans les deux cas (art. 2224).'] },
      { t: 'Effets', l: ['Le contrat est censé n’avoir jamais existé ; les prestations donnent lieu à restitution (art. 1352 et s.).', 'Nullité partielle : si la clause n’était pas déterminante, seule la clause tombe.', 'Action interrogatoire (art. 1183) : une partie peut demander à l’autre de confirmer ou d’agir en nullité dans les six mois.', 'Caducité : disparition d’un élément essentiel après la formation (art. 1186).'] },
    ],
    art: ['civ-1178', 'civ-1179', 'civ-2224'],
    retenir: ['Nullité absolue = intérêt général ; relative = intérêt privé.', 'Prescription quinquennale.', 'Restitutions après anéantissement rétroactif.'],
  },
  {
    id: 'ctr-effets', m: 'contrats', titre: 'Effets du contrat : force obligatoire, imprévision, tiers',
    intro: 'Le contrat lie les parties comme la loi (art. 1103) mais ne crée d’obligations qu’entre elles (art. 1199).',
    parts: [
      { t: 'Force obligatoire et imprévision', l: ['Le juge ne peut modifier le contrat au nom de l’équité (Canal de Craponne, 1876).', 'Depuis 2016, l’imprévision est admise (art. 1195) : changement imprévisible rendant l’exécution excessivement onéreuse ; renégociation, puis résolution ou adaptation par accord, et à défaut révision ou résolution par le juge.', 'L’article 1195 est supplétif : les parties peuvent l’écarter.'] },
      { t: 'Interprétation', l: ['Commune intention des parties ; à défaut, sens que lui donnerait une personne raisonnable (art. 1188).', 'Dans le doute : contre le créancier (gré à gré) ou contre celui qui a proposé le contrat d’adhésion (art. 1190).', 'Interdiction de dénaturer les clauses claires et précises.'] },
      { t: 'Effet relatif et opposabilité', l: ['Les tiers ne peuvent ni demander l’exécution ni être contraints d’exécuter (art. 1199).', 'Mais le contrat leur est opposable comme un fait, et ils peuvent s’en prévaloir pour prouver un fait (art. 1200).', 'Exceptions : stipulation pour autrui, porte-fort, chaînes de contrats translatives (action directe).', 'Le tiers victime d’un manquement contractuel peut agir en responsabilité délictuelle (Boot Shop, 2006 ; Bois Rouge, 2020).'] },
    ],
    art: ['civ-1103', 'civ-1188', 'civ-1190', 'civ-1195', 'civ-1199'],
    arrets: ['craponne', 'bootshop'],
    retenir: ['Art. 1195 : imprévision, supplétive.', 'Effet relatif ≠ opposabilité.', 'Le tiers peut invoquer un manquement contractuel qui lui nuit.'],
  },
  {
    id: 'ctr-inexecution', m: 'contrats', titre: 'L’inexécution du contrat',
    intro: 'L’article 1217 offre au créancier une « boîte à outils » de sanctions, cumulables lorsqu’elles ne sont pas incompatibles.',
    parts: [
      { t: 'Les remèdes', l: ['Exception d’inexécution (art. 1219) : refuser d’exécuter si l’inexécution de l’autre est suffisamment grave ; version anticipée (art. 1220).', 'Exécution forcée en nature (art. 1221) après mise en demeure, sauf impossibilité ou disproportion manifeste.', 'Réduction du prix (art. 1223) en cas d’exécution imparfaite.', 'Résolution (art. 1224) : clause résolutoire, notification unilatérale aux risques du créancier, ou décision judiciaire.', 'Dommages et intérêts (art. 1231-1).'] },
      { t: 'La responsabilité contractuelle', l: ['Conditions : inexécution, dommage prévisible (sauf faute lourde ou dolosive, art. 1231-3), lien de causalité.', 'Obligation de moyens (prouver une faute) / de résultat (la seule inexécution suffit).', 'Exonération par la force majeure (art. 1218) : événement échappant au contrôle du débiteur, imprévisible lors de la conclusion, irrésistible.', 'Clauses limitatives ou exonératoires valables, sauf faute lourde ou dolosive et sauf atteinte à l’obligation essentielle (art. 1170).', 'Clause pénale révisable par le juge si manifestement excessive ou dérisoire (art. 1231-5).'] },
    ],
    art: ['civ-1217', 'civ-1218', 'civ-1219', 'civ-1221', 'civ-1224', 'civ-1231-1', 'civ-1231-3', 'civ-1231-5'],
    arrets: ['mercier', 'chronopost', 'faurecia'],
    retenir: ['Cinq sanctions de l’article 1217, cumulables si compatibles.', 'Résolution unilatérale possible par notification, aux risques du créancier.', 'Dommage prévisible seulement, sauf faute lourde ou dolosive.'],
  },

  // ======================= RESPONSABILITÉ CIVILE (L2) =======================
  {
    id: 'rc-conditions', m: 'respciv', titre: 'Les conditions de la responsabilité civile',
    intro: 'La responsabilité civile extracontractuelle oblige à réparer le dommage causé à autrui. Trois conditions communes : un dommage, un fait générateur, un lien de causalité.',
    parts: [
      { t: 'Le dommage réparable', l: ['Certain (actuel ou futur mais certain ; la perte de chance sérieuse est réparable), direct, personnel, légitime.', 'Préjudices patrimoniaux (pertes, gains manqués) et extrapatrimoniaux (souffrances, préjudice d’affection, esthétique).', 'Victimes par ricochet : proches de la victime directe.', 'Principe de réparation intégrale : tout le préjudice, rien que le préjudice.'] },
      { t: 'Le lien de causalité', l: ['Équivalence des conditions (tout fait sans lequel le dommage ne se serait pas produit) vs causalité adéquate (le fait qui rendait le dommage probable) : le juge combine les deux.', 'Présomptions de causalité admises (ex. : vaccins, faisceau d’indices graves, précis et concordants).'] },
      { t: 'Les causes d’exonération', l: ['Force majeure (extériorité, imprévisibilité, irrésistibilité) : exonération totale.', 'Fait d’un tiers ou de la victime : exonération totale s’il présente les caractères de la force majeure ; la faute de la victime peut exonérer partiellement dans la responsabilité pour faute.'] },
    ],
    art: ['civ-1240', 'civ-1241', 'civ-2226'],
    arrets: ['dangereux', 'desmares'],
    retenir: ['Dommage + fait générateur + causalité.', 'Réparation intégrale.', 'Force majeure = exonération totale.'],
  },
  {
    id: 'rc-faute', m: 'respciv', titre: 'La responsabilité du fait personnel',
    intro: 'Les articles 1240 et 1241 fondent la responsabilité pour faute : tout fait fautif qui cause un dommage oblige son auteur à le réparer.',
    parts: [
      { t: 'La faute', l: ['Élément matériel : violation d’une règle (loi, règlement) ou d’un devoir général de prudence et de diligence, apprécié in abstracto (personne raisonnable).', 'Faute intentionnelle ou non intentionnelle (négligence, imprudence, art. 1241), par action ou par omission.', 'Élément moral supprimé : l’infans et le majeur atteint d’un trouble mental peuvent commettre une faute (arrêts du 9 mai 1984 ; art. 414-3 C. civ.).', 'Abus de droit : exercice d’un droit dans l’intention de nuire (Clément-Bayard).'] },
      { t: 'Faits justificatifs', l: ['Ordre de la loi, légitime défense, état de nécessité, consentement de la victime (limité), acceptation des risques (écartée pour la responsabilité du fait des choses, sauf sports en compétition : loi du 12 mars 2012).'] },
    ],
    art: ['civ-1240', 'civ-1241'],
    arrets: ['clementbayard', 'fullenwarth'],
    retenir: ['Faute appréciée in abstracto.', 'Faute objective : pas besoin de discernement.', 'Faute d’abstention possible.'],
  },
  {
    id: 'rc-choses', m: 'respciv', titre: 'La responsabilité du fait des choses',
    intro: 'Découverte par la jurisprudence dans l’ancien article 1384 al. 1er (aujourd’hui 1242 al. 1er), elle pèse sur le gardien de la chose, sans faute à prouver.',
    parts: [
      { t: 'Les conditions', l: ['Une chose : toute chose, mobile ou immobile, dangereuse ou non, actionnée ou non par la main de l’homme (Jand’heur).', 'Le fait de la chose : rôle actif. Présumé si la chose était en mouvement et est entrée en contact avec le siège du dommage ; à prouver si la chose était inerte (position anormale, mauvais état…).', 'La garde : usage, direction et contrôle (Franck) ; garde matérielle et non juridique ; présomption de garde sur le propriétaire.', 'Distinction garde de la structure / garde du comportement (bouteilles de gaz explosant).'] },
      { t: 'Exonération', l: ['Le gardien est présumé responsable ; il ne s’exonère que par la force majeure (totalement), ou partiellement par la faute de la victime.', 'Régimes spéciaux exclusifs : accidents de la circulation (loi Badinter du 5 juillet 1985), produits défectueux (art. 1245 et s.), animaux (art. 1243), ruine des bâtiments (art. 1244).'] },
    ],
    art: ['civ-1242', 'civ-1243', 'civ-1244', 'civ-1245'],
    arrets: ['teffaine', 'jandheur', 'franck', 'desmares'],
    retenir: ['Gardien = usage, direction, contrôle (Franck).', 'Chose inerte : prouver l’anormalité.', 'Présomption de responsabilité, pas de faute à prouver (Jand’heur).'],
  },
  {
    id: 'rc-autrui', m: 'respciv', titre: 'La responsabilité du fait d’autrui',
    intro: 'On répond aussi du dommage causé par les personnes dont on doit répondre (art. 1242). Il existe des cas spéciaux et un principe général depuis Blieck.',
    parts: [
      { t: 'Parents', l: ['Responsabilité de plein droit (Bertrand, 1997) des parents exerçant l’autorité parentale, du fait de leur enfant mineur.', 'Il suffit d’un fait causal de l’enfant, même non fautif (Fullenwarth, 1984).', 'Cohabitation entendue largement : résidence habituelle de l’enfant.', 'Exonération : force majeure ou faute de la victime uniquement.'] },
      { t: 'Commettants', l: ['Lien de préposition (subordination), faute du préposé, dommage dans le cadre des fonctions.', 'Abus de fonctions exonératoire : préposé agissant hors de ses fonctions, sans autorisation et à des fins étrangères à ses attributions.', 'Immunité du préposé qui n’excède pas les limites de sa mission (Costedoat, 2000), sauf infraction pénale intentionnelle (Cousin, 2001).'] },
      { t: 'Principe général (Blieck, 1991)', l: ['Responsabilité de celui qui a accepté d’organiser, de contrôler et de diriger à titre permanent le mode de vie d’autrui (associations, établissements accueillant des mineurs ou des handicapés).', 'Extension aux associations sportives organisant et contrôlant l’activité de leurs membres lors des compétitions (faute caractérisée exigée).'] },
    ],
    art: ['civ-1242'],
    arrets: ['blieck', 'bertrand', 'fullenwarth', 'costedoat'],
    retenir: ['Parents : responsabilité de plein droit, fait causal suffit.', 'Préposé agissant dans sa mission : immunité.', 'Principe général depuis Blieck.'],
  },

  // ======================= RÉGIME GÉNÉRAL DES OBLIGATIONS (L2) =======================
  {
    id: 'rg-modalites', m: 'regime', titre: 'Modalités et circulation des obligations',
    intro: 'Le régime général des obligations régit la vie de l’obligation, quelle que soit sa source : modalités, circulation, extinction, actions du créancier.',
    parts: [
      { t: 'Modalités', l: ['Condition (art. 1304) : événement futur et incertain ; suspensive ou résolutoire. Condition purement potestative du débiteur : nulle.', 'Terme (art. 1305) : événement futur et certain ; suspensif ou extinctif.', 'Pluralité d’objets : obligations cumulatives, alternatives, facultatives.', 'Pluralité de sujets : obligation conjointe (principe, division de la dette) ou solidaire (chaque débiteur tenu du tout) ; la solidarité ne se présume pas (art. 1310), sauf entre commerçants.'] },
      { t: 'Circulation', l: ['Cession de créance (art. 1321) : contrat par lequel le créancier transmet sa créance à un tiers ; opposable aux tiers dès sa date, au débiteur après notification ou prise d’acte.', 'Cession de dette (art. 1327) : suppose l’accord du créancier.', 'Cession de contrat (art. 1216) : accord du cocontractant cédé.', 'Subrogation personnelle : celui qui paie à la place du débiteur prend la place du créancier.'] },
    ],
    art: ['civ-1304', 'civ-1310'],
    retenir: ['Condition = incertain ; terme = certain.', 'La solidarité ne se présume pas en matière civile.'],
  },
  {
    id: 'rg-extinction', m: 'regime', titre: 'Extinction des obligations et actions du créancier',
    intro: 'L’obligation s’éteint normalement par le paiement, mais aussi par la compensation, la confusion, la remise de dette, l’impossibilité d’exécuter ou la prescription.',
    parts: [
      { t: 'Le paiement', l: ['Exécution volontaire de la prestation due (art. 1342), à l’échéance.', 'Imputation, mise en demeure, délais de grâce (jusqu’à deux ans, art. 1343-5).', 'Paiement de l’indu restituable (art. 1302).'] },
      { t: 'Autres modes d’extinction', l: ['Compensation (art. 1347) : extinction de dettes réciproques, certaines, liquides et exigibles.', 'Confusion : réunion des qualités de créancier et de débiteur.', 'Remise de dette, novation, délégation.', 'Prescription extinctive : 5 ans en droit commun (art. 2224), délai butoir de 20 ans (art. 2232).'] },
      { t: 'Les actions du créancier', l: ['Droit de gage général sur le patrimoine du débiteur (art. 2284 et 2285).', 'Action oblique (art. 1341-1) : exercer les droits du débiteur négligent.', 'Action paulienne (art. 1341-2) : faire déclarer inopposable un acte frauduleux.', 'Actions directes, dans les cas prévus par la loi.'] },
    ],
    art: ['civ-1342', 'civ-1347', 'civ-1302', 'civ-1341-1', 'civ-1341-2', 'civ-2284', 'civ-2285', 'civ-2224', 'civ-2232'],
    retenir: ['Oblique = pour le compte du débiteur ; paulienne = en son nom personnel contre un acte frauduleux.', 'Prescription : 5 ans, butoir 20 ans.'],
  },
  {
    id: 'rg-quasi', m: 'regime', titre: 'Les quasi-contrats',
    intro: 'Les quasi-contrats sont des faits purement volontaires dont il résulte un engagement de celui qui en profite sans y avoir droit (art. 1300).',
    parts: [
      { t: 'Gestion d’affaires (art. 1301)', l: ['Celui qui, sans y être tenu, gère sciemment et utilement l’affaire d’autrui, à l’insu ou sans opposition du maître.', 'Le maître rembourse les dépenses utiles et indemnise le gérant.'] },
      { t: 'Paiement de l’indu (art. 1302)', l: ['Ce qui a été reçu sans être dû doit être restitué.', 'Indu objectif (pas de dette) ou subjectif (dette d’un autre).'] },
      { t: 'Enrichissement injustifié (art. 1303)', l: ['Indemnité égale à la moindre des deux valeurs de l’enrichissement et de l’appauvrissement.', 'Caractère subsidiaire : pas d’action si une autre action est ouverte ou se heurte à un obstacle de droit (prescription).', 'L’indemnité peut être réduite en cas de faute de l’appauvri.'] },
    ],
    art: ['civ-1302', 'civ-1303'],
    retenir: ['Trois quasi-contrats : gestion d’affaires, indu, enrichissement injustifié.', 'Enrichissement injustifié = action subsidiaire, moindre des deux valeurs.'],
  },

  // ======================= DROIT DES BIENS (L2) =======================
  {
    id: 'biens-classif', m: 'biens', titre: 'La classification des biens',
    intro: 'Les biens sont les choses appropriées. La summa divisio oppose meubles et immeubles (art. 516), avec des régimes très différents.',
    parts: [
      { t: 'Meubles et immeubles', l: ['Immeubles par nature (sol, bâtiments), par destination (meubles affectés à un fonds par le propriétaire : tracteur d’une exploitation), par l’objet auquel ils s’appliquent (usufruit d’un immeuble).', 'Meubles par nature (transportables), par anticipation (récoltes sur pied vendues), par détermination de la loi (créances, parts sociales, fonds de commerce).', 'Les animaux sont des êtres vivants doués de sensibilité, soumis au régime des biens (art. 515-14).'] },
      { t: 'Autres distinctions', l: ['Choses consomptibles / non consomptibles ; fongibles / corps certains.', 'Fruits (produits périodiques sans altérer la substance) / produits (altèrent la substance).', 'Choses communes (air, eau de mer) et choses sans maître (res nullius).'] },
    ],
    art: ['civ-516'],
    retenir: ['Meubles / immeubles = summa divisio.', 'Fruits ≠ produits : l’usufruitier a droit aux fruits seulement.'],
  },
  {
    id: 'biens-propriete', m: 'biens', titre: 'Le droit de propriété',
    intro: 'La propriété est le droit de jouir et disposer des choses de la manière la plus absolue, dans le respect des lois et règlements (art. 544). Elle est protégée par la Constitution (art. 2 et 17 DDHC).',
    parts: [
      { t: 'Caractères', l: ['Absolu : usus (user), fructus (percevoir les fruits), abusus (disposer).', 'Exclusif : le propriétaire peut exclure les tiers ; empiètement sanctionné par la démolition, même minime.', 'Perpétuel : la propriété ne s’éteint pas par le non-usage ; l’action en revendication est imprescriptible.'] },
      { t: 'Limites', l: ['Abus de droit (Clément-Bayard, 1915).', 'Troubles anormaux de voisinage : responsabilité sans faute (art. 1253 depuis 2024).', 'Expropriation pour cause d’utilité publique moyennant juste et préalable indemnité (art. 545).', 'Servitudes légales et conventionnelles.'] },
      { t: 'Modes d’acquisition', l: ['Contrat (transfert solo consensu, art. 1583), succession, accession (art. 552 : la propriété du sol emporte celle du dessus et du dessous).', 'Prescription acquisitive : 30 ans, ou 10 ans avec bonne foi et juste titre pour un immeuble (art. 2272) ; possession utile (art. 2261).', 'Meubles : en fait de meubles, possession vaut titre (art. 2276).'] },
    ],
    art: ['civ-544', 'civ-545', 'civ-552', 'civ-1253', 'civ-2258', 'civ-2261', 'civ-2272', 'civ-2276', 'ddhc-17'],
    arrets: ['clementbayard', 'voisinage'],
    retenir: ['Usus, fructus, abusus.', 'Perpétuité : revendication imprescriptible.', 'Usucapion : 30 ans ou 10 ans (bonne foi + juste titre).'],
  },
  {
    id: 'biens-demembrements', m: 'biens', titre: 'Démembrements et indivision',
    intro: 'Les prérogatives du propriétaire peuvent être réparties entre plusieurs personnes (démembrement) ou partagées sur un même bien (indivision, copropriété).',
    parts: [
      { t: 'Usufruit', l: ['Droit de jouir d’un bien appartenant à autrui, à charge d’en conserver la substance (art. 578).', 'L’usufruitier a l’usus et le fructus ; le nu-propriétaire a l’abusus.', 'Viager pour une personne physique ; 30 ans maximum pour une personne morale.', 'Quasi-usufruit sur les choses consomptibles : restitution en équivalent.'] },
      { t: 'Servitudes', l: ['Charge imposée sur un fonds (servant) pour l’utilité d’un autre fonds (dominant) appartenant à un autre propriétaire (art. 637).', 'Naturelles, légales (passage en cas d’enclave), du fait de l’homme.', 'Seules les servitudes continues et apparentes s’acquièrent par prescription trentenaire.'] },
      { t: 'Indivision', l: ['Plusieurs personnes ont des droits de même nature sur un même bien.', 'Nul n’est tenu de rester dans l’indivision (art. 815).', 'Actes d’administration à la majorité des deux tiers ; actes de disposition à l’unanimité (sauf exceptions).'] },
    ],
    art: ['civ-578', 'civ-637', 'civ-815'],
    retenir: ['Usufruit = usus + fructus ; nue-propriété = abusus.', 'Servitude : rapport entre fonds, pas entre personnes.', 'Droit de sortir de l’indivision.'],
  },

  // ======================= CONTRATS SPÉCIAUX (L3) =======================
  {
    id: 'cs-vente', m: 'speciaux', titre: 'La vente',
    intro: 'La vente est le contrat par lequel l’un s’oblige à livrer une chose et l’autre à la payer (art. 1582). C’est le contrat spécial le plus important.',
    parts: [
      { t: 'Formation', l: ['Consensuelle : parfaite dès l’accord sur la chose et le prix (art. 1583), qui opère transfert de propriété et des risques (res perit domino).', 'Prix déterminé ou déterminable, réel et sérieux (sinon nullité).', 'Clause de réserve de propriété : retarde le transfert jusqu’au paiement complet.'] },
      { t: 'Obligations du vendeur', l: ['Délivrance conforme : chose convenue, avec ses accessoires.', 'Garantie d’éviction : contre le fait personnel du vendeur et contre les troubles de droit des tiers.', 'Garantie des vices cachés (art. 1641) : défaut caché, antérieur à la vente, rendant la chose impropre à l’usage ; action rédhibitoire ou estimatoire, dans les 2 ans de la découverte (art. 1648).', 'Le vendeur professionnel est présumé connaître les vices : il ne peut se prévaloir d’une clause d’exclusion.'] },
      { t: 'Distinctions à maîtriser', l: ['Défaut de conformité (chose différente de celle convenue) ≠ vice caché (chose conforme mais défectueuse).', 'Consommateurs : garantie légale de conformité de deux ans (art. L. 217-3 C. conso.).', 'Obligations de l’acheteur : payer le prix et retirer la chose.'] },
    ],
    art: ['civ-1582', 'civ-1583', 'civ-1641', 'civ-1648', 'conso-L.217-3'],
    retenir: ['Transfert de propriété solo consensu.', 'Vice caché : 2 ans à compter de la découverte.', 'Non-conformité ≠ vice caché.'],
  },
  {
    id: 'cs-bail-mandat', m: 'speciaux', titre: 'Bail, mandat et entreprise',
    intro: 'Trois contrats spéciaux usuels : le bail (louage de choses), le mandat (représentation) et le contrat d’entreprise (louage d’ouvrage).',
    parts: [
      { t: 'Le bail', l: ['Le bailleur fait jouir le preneur d’une chose contre un loyer (art. 1709).', 'Bailleur : délivrance, entretien, jouissance paisible, garantie des vices.', 'Preneur : payer le loyer, user raisonnablement, restituer.', 'Statuts spéciaux d’ordre public : bail d’habitation (loi du 6 juillet 1989), bail commercial (droit au renouvellement), bail rural.'] },
      { t: 'Le mandat', l: ['Le mandataire agit au nom et pour le compte du mandant (art. 1984) ; représentation parfaite.', 'Gratuit par principe en droit civil, onéreux pour les professionnels.', 'Mandat apparent : le mandant est engagé si le tiers a pu légitimement croire aux pouvoirs du mandataire.', 'Révocable ad nutum par le mandant (sauf mandat d’intérêt commun).'] },
      { t: 'Le contrat d’entreprise', l: ['Un entrepreneur s’engage à réaliser un ouvrage ou une prestation de manière indépendante, moyennant rémunération.', 'Absence de subordination : c’est ce qui le distingue du contrat de travail.', 'Le prix peut être fixé après exécution.'] },
    ],
    art: ['civ-1709', 'civ-1984'],
    retenir: ['Mandat = acte juridique pour autrui ; entreprise = acte matériel.', 'Entreprise ≠ travail : pas de lien de subordination.'],
  },

  // ======================= PROCÉDURE CIVILE (L3) =======================
  {
    id: 'pc-principes', m: 'proccivile', titre: 'Les principes directeurs du procès civil',
    intro: 'Les articles 1 à 24 du Code de procédure civile répartissent les rôles entre les parties et le juge et garantissent un procès équitable.',
    parts: [
      { t: 'Principe dispositif', l: ['Les parties introduisent l’instance et peuvent y mettre fin (art. 1).', 'Elles déterminent l’objet du litige par leurs prétentions (art. 4) ; le juge statue sur tout ce qui est demandé et seulement sur ce qui est demandé (art. 5).', 'Elles allèguent les faits (art. 6) et les prouvent (art. 9).'] },
      { t: 'Office du juge', l: ['Il tranche conformément aux règles de droit et restitue leur exacte qualification aux faits (art. 12).', 'Il peut relever d’office des moyens de droit, à condition de provoquer les observations des parties.', 'Il veille au bon déroulement de l’instance et peut ordonner des mesures d’instruction.'] },
      { t: 'Contradictoire et droits de la défense', l: ['Nul ne peut être jugé sans avoir été entendu ou appelé (art. 14).', 'Le juge doit observer et faire observer la contradiction (art. 16) : pièces communiquées, moyens relevés d’office soumis aux parties.', 'Exigences de l’art. 6 § 1 CEDH : tribunal impartial, délai raisonnable, publicité.'] },
    ],
    art: ['cpc-1', 'cpc-4', 'cpc-5', 'cpc-6', 'cpc-9', 'cpc-12', 'cpc-14', 'cpc-16', 'cedh-6'],
    retenir: ['Les parties maîtrisent la matière litigieuse, le juge le droit.', 'Le contradictoire s’impose aussi au juge.'],
  },
  {
    id: 'pc-action', m: 'proccivile', titre: 'L’action en justice et les moyens de défense',
    intro: 'L’action est le droit d’être entendu sur le fond d’une prétention (art. 30). Le défendeur dispose de trois catégories de moyens de défense.',
    parts: [
      { t: 'Conditions de l’action', l: ['Intérêt : né et actuel, direct et personnel, légitime (art. 31).', 'Qualité : titre en vertu duquel on agit ; certaines actions sont attitrées (divorce réservé aux époux).', 'Capacité (condition de régularité de l’acte de procédure).', 'Action non prescrite, absence de chose jugée.'] },
      { t: 'Les moyens de défense', l: ['Défense au fond (art. 71) : contester le bien-fondé de la prétention ; invocable en tout état de cause.', 'Exception de procédure (art. 73) : incompétence, litispendance, nullité, dilatoire ; à soulever avant toute défense au fond et fin de non-recevoir (art. 74).', 'Fin de non-recevoir (art. 122) : défaut de qualité, d’intérêt, prescription, chose jugée ; invocable en tout état de cause.'] },
      { t: 'Autorité de la chose jugée', l: ['Triple identité de parties, d’objet et de cause (art. 1355 C. civ.).', 'Principe de concentration des moyens (Cesareo, 2006).'] },
    ],
    art: ['cpc-30', 'cpc-31', 'cpc-32', 'cpc-71', 'cpc-73', 'cpc-74', 'cpc-122', 'civ-1355'],
    arrets: ['cesareo'],
    retenir: ['Défense au fond / exception / fin de non-recevoir.', 'Exceptions : in limine litis.', 'Concentration des moyens.'],
  },
  {
    id: 'pc-voies', m: 'proccivile', titre: 'Référés et voies de recours',
    intro: 'Le procès civil comporte des procédures d’urgence (référés) et des voies de recours permettant de contester un jugement.',
    parts: [
      { t: 'Les référés', l: ['Ordonnance provisoire, sans autorité de chose jugée au principal (art. 484).', 'Référé en cas d’urgence (absence de contestation sérieuse ou différend).', 'Référé conservatoire ou de remise en état (trouble manifestement illicite, dommage imminent).', 'Référé-provision (obligation non sérieusement contestable).', 'Référé probatoire in futurum (art. 145) : motif légitime d’établir une preuve avant tout procès.'] },
      { t: 'Voies de recours', l: ['Ordinaires : appel (1 mois en matière contentieuse, art. 538) et opposition contre un jugement par défaut ; effet suspensif mais exécution provisoire de droit depuis 2020.', 'Extraordinaires : pourvoi en cassation (2 mois, art. 612) contrôlant la conformité aux règles de droit (art. 604), tierce opposition, recours en révision.', 'Délais calculés selon les articles 641 et 642 CPC.'] },
    ],
    art: ['cpc-484', 'cpc-145', 'cpc-538', 'cpc-542', 'cpc-604', 'cpc-612', 'cpc-641', 'cpc-642'],
    retenir: ['Appel 1 mois, cassation 2 mois.', 'La Cour de cassation juge le droit, pas les faits.', 'Exécution provisoire de droit en première instance.'],
  },
];
