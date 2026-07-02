export type Locale = 'es' | 'en';
export type Localized = Record<Locale, string>;

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export function localePath(locale: Locale, path = '/'): string {
  return locale === defaultLocale ? path : `/en${path === '/' ? '' : path}`;
}

export const ui = {
  'meta.title': {
    es: 'Alejandro Rodríguez Moreno — Ingeniero de IA',
    en: 'Alejandro Rodríguez Moreno — AI Engineer',
  },
  'meta.description': {
    es: 'Ingeniero de Datos e IA en EY. Diseño y despliegue de sistemas de IA Generativa en producción: RAG, agentes y arquitecturas cloud en Azure.',
    en: 'Data & AI Engineer at EY. I design and ship production Generative AI systems: RAG, agents and cloud architectures on Azure.',
  },
  'nav.work': { es: 'Proyectos', en: 'Work' },
  'nav.experience': { es: 'Experiencia', en: 'Experience' },
  'nav.about': { es: 'Sobre mí', en: 'About' },
  'nav.certifications': { es: 'Certificaciones', en: 'Credentials' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },

  'hero.role': { es: 'Ingeniero de Datos e IA · EY', en: 'Data & AI Engineer · EY' },
  'hero.headline': {
    es: 'Construyo sistemas de IA Generativa que funcionan en producción.',
    en: 'I build Generative AI systems that run in production.',
  },
  'hero.sub': {
    es: 'Especializado en RAG, agentes y arquitecturas cloud sobre Azure. Del prototipo al despliegue: OCR inteligente, pipelines serverless y LLMs medidos por su impacto real.',
    en: 'Specialized in RAG, agents and cloud architectures on Azure. From prototype to deployment: intelligent OCR, serverless pipelines and LLMs measured by real-world impact.',
  },
  'hero.cta.work': { es: 'Ver proyectos', en: 'View work' },
  'hero.cta.contact': { es: 'Hablemos', en: 'Get in touch' },
  'hero.location': { es: 'Málaga, España', en: 'Málaga, Spain' },

  'metrics.efficiency': { es: 'eficiencia en generación de informes', en: 'faster report delivery' },
  'metrics.costs': { es: 'costes de inferencia LLM', en: 'LLM inference costs' },
  'metrics.coverage': { es: 'cobertura de tests en producción', en: 'test coverage in production' },

  'work.title': { es: 'Proyectos seleccionados', en: 'Selected work' },
  'work.sub': {
    es: 'Una muestra de lo que construyo cuando un problema me interesa de verdad.',
    en: 'A sample of what I build when a problem genuinely interests me.',
  },
  'work.caseStudy': { es: 'Caso de estudio', en: 'Case study' },
  'work.problem': { es: 'Problema', en: 'Problem' },
  'work.solution': { es: 'Solución', en: 'Solution' },
  'work.results': { es: 'Resultados', en: 'Results' },
  'work.viewRepo': { es: 'Código', en: 'Code' },
  'work.viewPypi': { es: 'PyPI', en: 'PyPI' },
  'work.gallery': { es: 'Capturas', en: 'Screenshots' },
  'work.more': { es: 'Más proyectos', en: 'More projects' },
  'work.allGithub': { es: 'Ver todo en GitHub', en: 'See everything on GitHub' },

  'exp.title': { es: 'Experiencia', en: 'Experience' },
  'exp.present': { es: 'Actualidad', en: 'Present' },

  'about.title': { es: 'Sobre mí', en: 'About' },
  'about.stack': { es: 'Stack habitual', en: 'Everyday stack' },
  'about.alsoWorkWith': { es: 'También trabajo con', en: 'Also work with' },

  'certs.title': { es: 'Certificaciones', en: 'Credentials' },
  'certs.featured': { es: 'Certificación destacada', en: 'Featured certification' },
  'certs.languages': { es: 'Idiomas', en: 'Languages' },

  'contact.title': { es: '¿Construimos algo juntos?', en: 'Let’s build something together' },
  'contact.sub': {
    es: 'Abierto a proyectos de IA aplicada, consultoría y buenas conversaciones técnicas. Respondo rápido.',
    en: 'Open to applied AI projects, consulting and good technical conversations. I reply fast.',
  },
  'contact.email': { es: 'Escríbeme', en: 'Email me' },

  'footer.rights': {
    es: 'Diseñado y construido por Alejandro Rodríguez.',
    en: 'Designed and built by Alejandro Rodríguez.',
  },
  'theme.toggle': { es: 'Cambiar tema', en: 'Toggle theme' },
  'lang.switch': { es: 'Switch to English', en: 'Cambiar a español' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;

export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[key][locale];
  };
}
