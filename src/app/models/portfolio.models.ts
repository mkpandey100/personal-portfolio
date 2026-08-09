export interface NavItem { readonly label: string; readonly href: string; }
export interface SkillGroup { readonly title: string; readonly skills: readonly string[]; }
export interface Experience { readonly company: string; readonly role: string; readonly period: string; readonly summary: string; readonly highlights: readonly string[]; readonly technologies: readonly string[]; }
export interface Project { readonly index: string; readonly title: string; readonly description: string; readonly technologies: readonly string[]; }
export interface ContactLink { readonly label: string; readonly value: string; readonly href?: string; readonly external?: boolean; }
