import type { Localized } from '../i18n/ui';

export interface CaseStudy {
  problem: Localized;
  solution: Localized;
  results: Localized;
}

export interface Project {
  id: string;
  title: string | Localized;
  overline: Localized;
  description: Localized;
  tech: string[];
  featured: boolean;
  image?: string;
  repo?: string;
  pypi?: string;
  award?: Localized;
  caseStudy?: CaseStudy;
  gallery?: { src: string; alt: Localized }[];
}

export const projects: Project[] = [
  {
    id: 'adyton',
    title: 'Adyton',
    overline: { es: 'Ciberseguridad · IA agéntica', en: 'Cybersecurity · Agentic AI' },
    description: {
      es: 'Servidor MCP para el triaje automatizado de URLs de phishing en SOCs. Siete herramientas de análisis en paralelo, un agente Playwright en Docker para inspección profunda del DOM y un LLM local que razona sobre la zona gris para eliminar falsos positivos.',
      en: 'MCP server for automated phishing URL triage in SOCs. Seven parallel analysis tools, a Dockerized Playwright agent for deep DOM inspection, and a local LLM that reasons over the grey zone to eliminate false positives.',
    },
    tech: ['Python', 'MCP', 'Ollama', 'Playwright', 'Docker'],
    featured: true,
    image: '/adyton-cover.svg',
    caseStudy: {
      problem: {
        es: 'Los analistas de un SOC reciben cientos de URLs sospechosas al día. El triaje manual es lento y los enfoques basados en reglas generan demasiados falsos positivos en la «zona gris», donde una URL no es ni claramente legítima ni claramente maliciosa.',
        en: 'SOC analysts receive hundreds of suspicious URLs per day. Manual triage is slow, and rule-based approaches produce too many false positives in the "grey zone", where a URL is neither clearly legitimate nor clearly malicious.',
      },
      solution: {
        es: 'Diseñé un servidor MCP (Model Context Protocol) que expone 7 herramientas tipadas de análisis: sintaxis de URL, RDAP/WHOIS, SSL, reputación multi-fuente, marcadores AiTM y auditoría de headers. El triaje rápido las ejecuta en paralelo en segundos; el triaje profundo lanza un agente Playwright en Docker (modo stealth) que inspecciona el DOM en vivo, cadenas de redirección y exfiltración. Cuando el score cae en banda ambigua, un Decision Engine delega en un LLM local (Ollama) que razona como un analista.',
        en: 'I designed an MCP (Model Context Protocol) server exposing 7 typed analysis tools: URL syntax, RDAP/WHOIS, SSL, multi-source reputation, AiTM markers and header auditing. Fast triage runs them in parallel within seconds; deep triage launches a Dockerized Playwright agent (stealth mode) that inspects the live DOM, redirect chains and exfiltration. When the score lands in the ambiguous band, a Decision Engine delegates to a local LLM (Ollama) that reasons like an analyst.',
      },
      results: {
        es: 'El sistema convierte el triaje de phishing en un pipeline componible e interoperable con cualquier cliente MCP (Claude Desktop, agentes propios), reduce falsos positivos mediante razonamiento LLM sin sacrificar sensibilidad y genera informes estructurados (incl. STIX) listos para el analista.',
        en: 'The system turns phishing triage into a composable pipeline interoperable with any MCP client (Claude Desktop, custom agents), cuts false positives through LLM reasoning without sacrificing sensitivity, and produces structured reports (incl. STIX) ready for the analyst.',
      },
    },
  },
  {
    id: 'ticketsaver',
    title: 'TicketSaver',
    overline: { es: 'IA Generativa · OCR', en: 'Generative AI · OCR' },
    description: {
      es: 'Asistente de compra que escanea tickets de supermercado con Google Gemini: extrae comercio, fecha, total y desglose de productos categorizados. Control de presupuesto, comparador de precios e inventario compartido. PWA y app Android con backend en Supabase.',
      en: 'Shopping assistant that scans grocery receipts with Google Gemini: extracts merchant, date, total and a categorized product breakdown. Budget tracking, price comparison and shared inventory. PWA and Android app with a Supabase backend.',
    },
    tech: ['React', 'TypeScript', 'Gemini API', 'Supabase', 'PWA'],
    featured: true,
    image: '/ticketsaver-cover.svg',
    repo: 'https://github.com/alejandrorodm/TicketSaver',
  },
  {
    id: 'apexlap',
    title: 'ApexLap',
    overline: { es: 'Full-stack móvil · Tiempo real', en: 'Full-stack mobile · Realtime' },
    description: {
      es: 'App iOS, Android y web para registrar tiempos de vuelta de Assetto Corsa, comparar rankings en vivo y récords por coche y circuito. Sincronización en tiempo real y subida automática de vueltas desde el juego mediante un mod Lua/CSP y un subidor en Python.',
      en: 'iOS, Android and web app to track Assetto Corsa lap times, compare live rankings and per-car/track records. Realtime sync and automatic lap upload from the game via a Lua/CSP mod and a Python uploader.',
    },
    tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    featured: true,
    image: '/apexlap-cover.svg',
    repo: 'https://github.com/alejandrorodm/ApexLap',
    gallery: [
      { src: '/apexlap/02-tiempos.png', alt: { es: 'Ranking de tiempos por circuito', en: 'Lap time ranking per track' } },
      { src: '/apexlap/03-records.png', alt: { es: 'Récords y piques activos', en: 'Records and active challenges' } },
      { src: '/apexlap/04-ruleta.png', alt: { es: 'Ruleta de piques: coche y circuito al azar', en: 'Challenge roulette: random car and track' } },
      { src: '/apexlap/05-liga.png', alt: { es: 'Liga compartida del grupo', en: 'Shared group league' } },
      { src: '/apexlap/06-perfil.png', alt: { es: 'Perfil y progreso de tiempos', en: 'Profile and lap time progress' } },
      { src: '/apexlap/01-login.png', alt: { es: 'Pantalla de inicio de sesión', en: 'Login screen' } },
    ],
  },
  {
    id: 'tfg',
    title: { es: 'Optimización de Carteras', en: 'Portfolio Optimization' },
    overline: { es: 'Machine Learning · Finanzas', en: 'Machine Learning · Finance' },
    description: {
      es: 'Software de optimización de carteras en entornos altamente volátiles como criptomonedas. Combina resolución de problemas cuadráticos con modelos predictivos N-BEATS para maximizar rentabilidad. Trabajo de Fin de Grado con calificación de Sobresaliente.',
      en: 'Portfolio optimization software for highly volatile environments such as crypto. Combines quadratic programming with N-BEATS predictive models to maximize returns. Bachelor’s thesis awarded top honors.',
    },
    tech: ['Python', 'N-BEATS', 'Quant Finance'],
    featured: false,
    caseStudy: {
      problem: {
        es: 'La altísima volatilidad de las criptomonedas invalida a menudo los modelos clásicos de optimización de carteras (como Markowitz). Se necesitaba un enfoque robusto y adaptativo a entornos de incertidumbre masiva.',
        en: 'The extreme volatility of crypto markets often invalidates classic portfolio optimization models (like Markowitz). A robust approach, adaptive to massive uncertainty, was needed.',
      },
      solution: {
        es: 'Diseñé un framework híbrido en Python que combina resolución de problemas cuadráticos con N-BEATS, un modelo de deep learning para el pronóstico de series temporales, procesando eficientemente feeds de datos de mercado.',
        en: 'I designed a hybrid Python framework combining quadratic programming with N-BEATS, a deep learning model for time-series forecasting, efficiently processing market data feeds.',
      },
      results: {
        es: 'Carteras con un ratio Sharpe un 30% superior a los benchmarks tradicionales en periodos de extrema volatilidad. Calificación de Sobresaliente.',
        en: 'Portfolios with a Sharpe ratio 30% above traditional benchmarks during periods of extreme volatility. Awarded top honors.',
      },
    },
  },
  {
    id: 'pionex',
    title: 'pionex_py',
    overline: { es: 'Open source · PyPI', en: 'Open source · PyPI' },
    description: {
      es: 'Wrapper de la API del exchange Pionex publicado en PyPI: gestión de peticiones REST, autenticación firmada, empaquetado y documentación técnica para trading algorítmico.',
      en: 'API wrapper for the Pionex exchange published on PyPI: REST request handling, signed authentication, packaging and technical docs for algorithmic trading.',
    },
    tech: ['Python', 'REST API', 'PyPI'],
    featured: false,
    pypi: 'https://pypi.org/project/pionex_py/',
    repo: 'https://github.com/alejandrorodm',
  },
  {
    id: 'crypto',
    title: { es: 'Backtesting Cripto', en: 'Crypto Backtesting' },
    overline: { es: 'Data engineering · Trading', en: 'Data engineering · Trading' },
    description: {
      es: 'Motor multihilo de ingesta masiva de datos para APIs externas, con indicadores matemáticos (EMA, RSI, Bollinger), señales generadas con Random Forest y reportes de rentabilidad automatizados.',
      en: 'Multithreaded bulk data ingestion engine for external APIs, with mathematical indicators (EMA, RSI, Bollinger), Random Forest signal generation and automated profitability reports.',
    },
    tech: ['Python', 'Pandas', 'Random Forest'],
    featured: false,
    caseStudy: {
      problem: {
        es: 'El backtesting de estrategias complejas exige procesar millones de velas históricas sin cuellos de botella ni fugas de memoria durante la ingesta.',
        en: 'Backtesting complex strategies requires processing millions of historical candlesticks without bottlenecks or memory leaks during ingestion.',
      },
      solution: {
        es: 'Desarrollé un motor multihilo en Python con indicadores matemáticos (RSI, Bollinger) y un predictor Random Forest para la generación dinámica de señales, más un generador de reportes visuales automatizado.',
        en: 'I built a multithreaded Python engine with mathematical indicators (RSI, Bollinger) and a Random Forest predictor for dynamic signal generation, plus an automated visual reporting module.',
      },
      results: {
        es: 'Más de 5 años de datos históricos procesados en menos de 2 minutos. Las estrategias basadas en ML superaron empíricamente al Buy & Hold en mercados bajistas.',
        en: 'Over 5 years of historical data processed in under 2 minutes. ML-based strategies empirically beat Buy & Hold in bear markets.',
      },
    },
  },
  {
    id: 'vodafone',
    title: 'Vodafone Campus Lab',
    overline: { es: 'IoT · Liderazgo', en: 'IoT · Leadership' },
    description: {
      es: 'Liderazgo de equipo en el desarrollo de una solución IoT + IA para la independencia de personas mayores. Segundo puesto internacional.',
      en: 'Team lead for an IoT + AI solution supporting elderly independence. Second place in the international competition.',
    },
    tech: ['IoT', 'AI', 'Design Thinking'],
    featured: false,
    award: { es: '🏆 2º puesto internacional', en: '🏆 2nd place, international' },
  },
  {
    id: 'rpg',
    title: { es: 'RPG con Game Master IA', en: 'AI Game Master RPG' },
    overline: { es: 'LLMs locales · LangChain', en: 'Local LLMs · LangChain' },
    description: {
      es: 'Juego de rol por turnos con un Game Master impulsado por IA que narra y adapta la historia a tus acciones, usando LangChain sobre un modelo local. Creación de personajes, mecánica d20 y gestión eficiente de contexto (32K tokens).',
      en: 'Turn-based RPG with an AI-powered Game Master that narrates and adapts the story to your actions, using LangChain over a local model. Character creation, d20 mechanics and efficient context management (32K tokens).',
    },
    tech: ['Python', 'LangChain', 'Local LLM'],
    featured: false,
    repo: 'https://github.com/alejandrorodm/RolLangChain',
  },
  {
    id: 'homelab',
    title: 'OrangePi Cloud Server',
    overline: { es: 'DevOps · Self-hosting', en: 'DevOps · Self-hosting' },
    description: {
      es: 'Servidor self-hosted sobre una OrangePi Zero 3 con Armbian. Orquestación completa con Docker para servicios privados: Immich (fotos), Nextcloud (archivos) y Plex (multimedia).',
      en: 'Self-hosted server on an OrangePi Zero 3 running Armbian. Full Docker orchestration for private services: Immich (photos), Nextcloud (files) and Plex (media).',
    },
    tech: ['Docker', 'Armbian', 'Linux'],
    featured: false,
  },
  {
    id: 'finanzas',
    title: 'FinanzasAI Bot',
    overline: { es: 'Automatización · Telegram', en: 'Automation · Telegram' },
    description: {
      es: 'Bot de Telegram para el registro y gestión de finanzas personales: gastos, estado de cuentas e historial de transacciones en tiempo real.',
      en: 'Telegram bot for personal finance tracking: expenses, account balances and transaction history in real time.',
    },
    tech: ['Python', 'Telegram API', 'SQLite'],
    featured: false,
    repo: 'https://github.com/alejandrorodm',
  },
];
