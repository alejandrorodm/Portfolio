import type { Localized } from '../i18n/ui';

export interface CertCategory {
  label: Localized;
  items: { name: string; tag?: string | Localized }[];
}

export const featuredCert = {
  year: '2026',
  name: 'Databricks Certified Generative AI Engineer Associate',
  logo: '/databricks.svg',
  description: {
    es: 'Acreditación oficial en diseño y despliegue de soluciones de IA Generativa: arquitecturas RAG, evaluación y monitorización de LLMs, y puesta en producción de aplicaciones GenAI.',
    en: 'Official credential in designing and deploying Generative AI solutions: RAG architectures, LLM evaluation and monitoring, and productionizing GenAI applications.',
  } satisfies Localized,
};

export const certCategories: CertCategory[] = [
  {
    label: { es: 'IA Generativa', en: 'Generative AI' },
    items: [
      { name: 'EY Agentic AI', tag: 'Bronze' },
      { name: 'LangGraph', tag: 'Coursera' },
      { name: 'Multi-Agent AutoGen', tag: 'Coursera' },
      { name: 'Generative AI Fundamentals' },
    ],
  },
  {
    label: { es: 'Big Data y Cloud', en: 'Big Data & Cloud' },
    items: [
      { name: 'Introduction to Big Data with Spark & Hadoop', tag: 'IBM' },
      { name: 'AWS Cloud Technical Essentials', tag: { es: 'En curso', en: 'In progress' } },
    ],
  },
  {
    label: { es: 'Sistemas y desarrollo', en: 'Systems & dev' },
    items: [
      { name: 'Docker', tag: 'Coursera' },
      { name: 'Ultimate Rust Crash Course' },
      { name: 'Automatización con Python (Word / Excel)' },
      { name: 'Redes Neuronales TensorFlow/Keras', tag: 'Univ. Almería' },
    ],
  },
  {
    label: { es: 'Ciberseguridad', en: 'Cybersecurity' },
    items: [
      { name: 'Hardening Linux con ZFS', tag: 'UMA' },
      { name: 'Pentesting con Kali', tag: 'UMA' },
    ],
  },
];

export const languages = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2 First · Cambridge', en: 'B2 First · Cambridge' } },
];
