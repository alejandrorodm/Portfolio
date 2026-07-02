import type { Localized } from '../i18n/ui';

export interface ExperienceProject {
  name: Localized;
  period: Localized;
  bullets: Localized[];
}

export interface Experience {
  role: Localized;
  company: string;
  period: Localized;
  metric?: { value: string; label: Localized };
  bullets?: Localized[];
  projects?: ExperienceProject[];
}

export const experience: Experience[] = [
  {
    role: { es: 'Ingeniero de Datos e IA', en: 'Data & AI Engineer' },
    company: 'EY (Ernst & Young)',
    period: { es: 'Oct 2025 — Actualidad', en: 'Oct 2025 — Present' },
    metric: {
      value: '+90%',
      label: {
        es: 'eficiencia en flujos documentales automatizados',
        en: 'efficiency in automated document workflows',
      },
    },
    projects: [
      {
        name: {
          es: 'Automatización fiscal · Cliente en Luxemburgo',
          en: 'Tax automation · Luxembourg client',
        },
        period: { es: 'Abr 2026 — Actualidad', en: 'Apr 2026 — Present' },
        bullets: [
          {
            es: 'Backend de un macro-proyecto de automatización de cálculos de impuestos sobre estados financieros corporativos: Trial Balance, General Ledger y Annual Accounts.',
            en: 'Backend of a large-scale project automating tax computations over corporate financial statements: Trial Balance, General Ledger and Annual Accounts.',
          },
          {
            es: 'Generación automatizada de informes finales listos para entrega regulatoria, eliminando trabajo manual repetitivo.',
            en: 'Automated generation of final reports ready for regulatory filing, removing repetitive manual work.',
          },
          {
            es: 'Contribución al frontend del sistema y a los componentes de IA del pipeline.',
            en: 'Contributions to the system frontend and the AI components of the pipeline.',
          },
        ],
      },
      {
        name: {
          es: 'Análisis documental con IA Generativa',
          en: 'Document analysis with Generative AI',
        },
        period: { es: 'Oct 2025 — Abr 2026', en: 'Oct 2025 — Apr 2026' },
        bullets: [
          {
            es: 'Sistemas RAG (FAISS + LLMs) para el análisis automático de ofertas técnicas de más de 100 páginas, agilizando la toma de decisiones.',
            en: 'RAG systems (FAISS + LLMs) for automated analysis of 100+ page technical proposals, speeding up decision-making.',
          },
          {
            es: 'Motores de generación automática de informes Word y PPTX con Azure OpenAI, mejorando un 90% los tiempos de entrega.',
            en: 'Automated Word and PPTX report generation engines with Azure OpenAI, improving delivery times by 90%.',
          },
          {
            es: 'Pipelines de OCR (Azure Document Intelligence) y lógica serverless (Azure Functions, Docker) para extracción inteligente de datos.',
            en: 'OCR pipelines (Azure Document Intelligence) and serverless logic (Azure Functions, Docker) for intelligent data extraction.',
          },
          {
            es: 'Chatbots internos, prompt engineering avanzado (mapas de tokens, contextualización semántica), cobertura de tests >90% y monitorización en Kibana.',
            en: 'Internal chatbots, advanced prompt engineering (token maps, semantic contextualization), >90% test coverage and monitoring in Kibana.',
          },
        ],
      },
    ],
  },
  {
    role: { es: 'Investigador de IA (RAG)', en: 'AI Researcher (RAG)' },
    company: 'Grupo NEO · Universidad de Málaga',
    period: { es: 'Mar 2025 — Jun 2025', en: 'Mar 2025 — Jun 2025' },
    metric: {
      value: '−75%',
      label: {
        es: 'coste de inferencia optimizando el contexto del LLM',
        en: 'inference cost by optimizing LLM context',
      },
    },
    bullets: [
      {
        es: 'Sistema RAG para la generación de casos de prueba industriales, servido mediante APIs REST en Flask.',
        en: 'RAG system for generating industrial test cases, served through REST APIs in Flask.',
      },
      {
        es: 'Optimización de contexto y recursos: −75% de gasto y −25% en tiempos de respuesta del LLM (Mistral).',
        en: 'Context and resource optimization: −75% spend and −25% LLM response times (Mistral).',
      },
    ],
  },
  {
    role: { es: 'Instructor técnico y mentor académico', en: 'Technical instructor & academic mentor' },
    company: 'Freelance · UMA',
    period: { es: 'Sep 2023 — Actualidad', en: 'Sep 2023 — Present' },
    bullets: [
      {
        es: 'Mentoría avanzada en análisis de algoritmos (backtracking, programación dinámica, complejidad) y programación en C++ y Python.',
        en: 'Advanced mentoring in algorithm analysis (backtracking, dynamic programming, complexity) and C++ / Python programming.',
      },
      {
        es: 'Formación en diseño relacional y SQL.',
        en: 'Training in relational design and SQL.',
      },
    ],
  },
];
