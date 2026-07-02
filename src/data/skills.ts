export interface SkillGroup {
  label: { es: string; en: string };
  items: string[];
}

export const coreStack = [
  'Python',
  'Azure',
  'LangChain',
  'LangGraph',
  'Docker',
  'TypeScript',
  'SQL',
  'Git',
];

export const skillGroups: SkillGroup[] = [
  {
    label: { es: 'IA Generativa', en: 'Generative AI' },
    items: ['RAG · FAISS', 'Azure OpenAI', 'AutoGen', 'MCP', 'Ollama / LM Studio', 'Prompt Engineering'],
  },
  {
    label: { es: 'Cloud y datos', en: 'Cloud & data' },
    items: ['Azure Functions', 'Azure Document Intelligence', 'Azure Blob Storage', 'Databricks', 'Pandas', 'Kibana'],
  },
  {
    label: { es: 'Lenguajes y otros', en: 'Languages & more' },
    items: ['C++', 'Rust', 'Bash', 'Spring', 'React / React Native', 'Flask'],
  },
];
