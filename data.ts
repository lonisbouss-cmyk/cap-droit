// CAP DROIT — point d'entrée des contenus
import type { Matiere, Niveau, Fiche } from './types';
import { FICHES1 } from './fiches1';
import { FICHES2 } from './fiches2';
import { FICHES3 } from './fiches3';
import { QCM as QCM1 } from './qcm';
import { QCM2 } from './qcm2';
import { QCM3 } from './qcm3';
import type { Question } from './types';
import { ARRETS as ARRETS1 } from './arrets';
import { ARRETS2 } from './arrets2';
import { CAS as CAS1 } from './cas';
import { CAS2 } from './cas2';
export { CODES, ARTICLES } from './articles';
export { METHODES, LEXIQUE, ADAGES } from './extras';
export { DOSSIERS, GRILLE_NDS, SUJETS_GO, QUESTIONS_JURY, GRILLE_GO, COMPETENCES } from './crfpa';

// Date de mise à jour des contenus et relecture (renseigner le relecteur une fois la relecture faite)
export const MAJ = '26 novembre 2026';
export const RELU = { par: '', le: '' };

export const NIVEAUX: Niveau[] = ['L1', 'L2', 'L3', 'M1', 'CRFPA'];

const MATS: Matiere[] = [
  { id: 'intro', nom: 'Introduction au droit', niv: 'L1', icone: '📘', desc: 'Règle de droit, sources, application dans le temps, preuve des droits.' },
  { id: 'personnes', nom: 'Personnes et famille', niv: 'L1', icone: '👪', desc: 'Personnalité juridique, droits de la personnalité, incapacités, couple, filiation.' },
  { id: 'constit', nom: 'Droit constitutionnel', niv: 'L1', icone: '🏛', desc: 'État, séparation des pouvoirs, institutions de la Ve République, contrôle de constitutionnalité.' },
  { id: 'instit', nom: 'Institutions juridictionnelles', niv: 'L1', icone: '⚖️', desc: 'Organisation des juridictions et professions judiciaires.' },
  { id: 'contrats', nom: 'Droit des contrats', niv: 'L2', icone: '✍️', desc: 'Formation, validité, effets et inexécution du contrat (réforme de 2016).' },
  { id: 'respciv', nom: 'Responsabilité civile', niv: 'L2', icone: '🚑', desc: 'Conditions, fait personnel, fait des choses, fait d’autrui.' },
  { id: 'regime', nom: 'Régime général des obligations', niv: 'L2', icone: '🔗', desc: 'Modalités, circulation, extinction, quasi-contrats, actions du créancier.' },
  { id: 'biens', nom: 'Droit des biens', niv: 'L2', icone: '🏠', desc: 'Classification des biens, propriété, démembrements, possession.' },
  { id: 'admin', nom: 'Droit administratif', niv: 'L2', icone: '🏢', desc: 'Actes, police, service public, responsabilité, contrats administratifs.' },
  { id: 'penalg', nom: 'Droit pénal général', niv: 'L2', icone: '🔒', desc: 'Légalité, éléments de l’infraction, participation, irresponsabilité, peine.' },
  { id: 'ue', nom: 'Droit de l’Union européenne', niv: 'L2', icone: '🇪🇺', desc: 'Institutions, sources, effet direct, primauté, renvoi préjudiciel.' },
  { id: 'speciaux', nom: 'Contrats spéciaux', niv: 'L3', icone: '📑', desc: 'Vente, bail, mandat, contrat d’entreprise.' },
  { id: 'proccivile', nom: 'Procédure civile', niv: 'L3', icone: '📜', desc: 'Principes directeurs, action en justice, moyens de défense, référés, voies de recours.' },
  { id: 'procpen', nom: 'Procédure pénale', niv: 'L3', icone: '🚓', desc: 'Actions publique et civile, enquêtes, garde à vue, instruction, jugement.' },
  { id: 'penals', nom: 'Droit pénal spécial', niv: 'L3', icone: '🗡', desc: 'Atteintes aux personnes et aux biens.' },
  { id: 'travail', nom: 'Droit du travail', niv: 'L3', icone: '👷', desc: 'Contrat de travail, rupture, relations collectives.' },
  { id: 'societes', nom: 'Droit des affaires et des sociétés', niv: 'L3', icone: '💼', desc: 'Contrat de société, formes sociales, entreprises en difficulté.' },
  { id: 'contadm', nom: 'Contentieux administratif', niv: 'M1', icone: '📂', desc: 'Recours pour excès de pouvoir, référés administratifs.' },
  { id: 'fiscal', nom: 'Droit fiscal', niv: 'M1', icone: '💶', desc: 'Principes, impôts principaux, contrôle et contentieux.' },
  { id: 'libertes', nom: 'Libertés fondamentales', niv: 'CRFPA', icone: '🗽', desc: 'Régime des libertés, libertés de l’esprit : préparation au grand oral.' },
  { id: 'deonto', nom: 'Déontologie de l’avocat', niv: 'CRFPA', icone: '🎓', desc: 'Principes essentiels, secret professionnel, honoraires, examen du CRFPA.' },
  { id: 'histoire', nom: 'Histoire du droit', niv: 'L1', icone: '📜', desc: 'Ancien Régime, Révolution, codification napoléonienne, constitutions françaises.' },
  { id: 'finpub', nom: 'Finances publiques', niv: 'L2', icone: '🏦', desc: 'Principes budgétaires, LOLF, vote et contrôle du budget.' },
  { id: 'suretes', nom: 'Droit des sûretés', niv: 'M1', icone: '🔐', desc: 'Cautionnement, garanties autonomes, gage, nantissement, hypothèque.' },
  { id: 'patrimoine', nom: 'Régimes matrimoniaux et successions', niv: 'M1', icone: '💍', desc: 'Régime primaire, communauté, dévolution successorale, réserve.' },
  { id: 'dip', nom: 'Droit international privé', niv: 'M1', icone: '🌍', desc: 'Conflits de lois et de juridictions, effets des jugements étrangers.' },
  { id: 'conso', nom: 'Droit de la consommation', niv: 'M1', icone: '🛒', desc: 'Notion de consommateur, rétractation, clauses abusives, conformité.' },
  { id: 'pi', nom: 'Propriété intellectuelle', niv: 'M1', icone: '💡', desc: 'Droit d’auteur, brevets, marques, dessins et modèles.' },
  { id: 'penaff', nom: 'Droit pénal des affaires', niv: 'M1', icone: '📉', desc: 'Abus de biens sociaux, corruption, blanchiment, Sapin II.' },
];

export const MATIERES: Matiere[] = MATS.map((m, i) => ({ m, i })).sort((a, b) => NIVEAUX.indexOf(a.m.niv) - NIVEAUX.indexOf(b.m.niv) || a.i - b.i).map((x) => x.m);

export const FICHES: Fiche[] = [...FICHES1, ...FICHES2, ...FICHES3];
export const QCM: Question[] = [...QCM1, ...QCM2, ...QCM3];
export const ARRETS = [...ARRETS1, ...ARRETS2];
export const CAS = [...CAS1, ...CAS2];
