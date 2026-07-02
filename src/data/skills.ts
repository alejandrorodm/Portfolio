export interface Skill {
  name: string;
  icon?: string;
  /** Iconos monocromos (negros): se invierten en modo oscuro */
  invert?: boolean;
}

export interface SkillGroup {
  label: { es: string; en: string };
  items: Skill[];
}

export const coreStack: Skill[] = [
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg' },
  { name: 'Azure', icon: '/icons/azure.svg' },
  { name: 'LangChain', icon: '/icons/langchain.svg', invert: true },
  { name: 'LangGraph', icon: '/icons/langgraph.svg', invert: true },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'SQL', icon: '/icons/azuresql.svg', invert: true },
  { name: 'Git', icon: '/icons/git.svg' },
];

export const skillGroups: SkillGroup[] = [
  {
    label: { es: 'IA Generativa', en: 'Generative AI' },
    items: [
      { name: 'RAG · FAISS' },
      { name: 'Azure OpenAI', icon: '/icons/openai.svg', invert: true },
      { name: 'Google Gemini', icon: '/icons/googlegemini.svg', invert: true },
      { name: 'AutoGen' },
      { name: 'MCP', icon: '/icons/modelcontextprotocol.svg', invert: true },
      { name: 'Ollama / LM Studio', icon: '/icons/ollama.svg', invert: true },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    label: { es: 'Backend y datos', en: 'Backend & data' },
    items: [
      { name: 'PostgreSQL · Supabase', icon: '/icons/postgresql.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'Redis', icon: '/icons/redis.svg' },
      { name: 'Firebase', icon: '/icons/firebase.svg' },
      { name: 'Spark / PySpark', icon: '/icons/apachespark.svg' },
      { name: 'Pandas · NumPy', icon: '/icons/pandas.svg' },
      { name: 'Flask', icon: '/icons/flask.svg', invert: true },
      { name: 'Spring Boot', icon: '/icons/spring.svg' },
    ],
  },
  {
    label: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' },
    items: [
      { name: 'Azure Functions', icon: '/icons/azure.svg' },
      { name: 'Azure Document Intelligence', icon: '/icons/azure.svg' },
      { name: 'Azure Blob Storage', icon: '/icons/azure.svg' },
      { name: 'Databricks', icon: '/databricks.svg' },
      { name: 'AWS', icon: '/icons/aws.svg' },
      { name: 'CI/CD · GitHub Actions', icon: '/icons/githubactions.svg' },
      { name: 'Kibana', icon: '/icons/kibana.svg', invert: true },
      { name: 'Linux / Bash', icon: '/icons/bash.svg', invert: true },
    ],
  },
  {
    label: { es: 'Lenguajes y otros', en: 'Languages & more' },
    items: [
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'C++', icon: '/icons/cplusplus.svg' },
      { name: 'Rust', icon: '/icons/rust.svg', invert: true },
      { name: 'React / React Native', icon: '/icons/react.svg' },
      { name: 'OWASP ZAP', icon: '/icons/owasp.svg', invert: true },
      { name: 'Wireshark', icon: '/icons/wireshark.svg', invert: true },
      { name: 'LaTeX', icon: '/icons/latex.svg', invert: true },
    ],
  },
];
