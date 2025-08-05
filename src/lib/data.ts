export interface Project {
  id: string
  title: string
  description: string
  goal: string
  techStack: string[]
  keyLearnings: string[]
  exampleUseCase: string
  links: {
    github: string
    architecture: string
    dailyLog: string
  }
  color: string
}

export const projects: Project[] = [
  {
    id: 'rag-moderation',
    title: 'RAG‑Enhanced Moderation Dashboard',
    goal: 'Build a content moderation platform that uses RAG (Retrieval‑Augmented Generation) to justify why a piece of media is flagged as inappropriate. Instead of a "black box" flagging system, reviewers receive grounded, explainable AI insights with traceable evidence.',
    techStack: [
      'LLM & RAG: LangChain + OpenAI',
      'Vector Store: FAISS (dev) / Weaviate (prod)',
      'Embeddings: CLIP for visual content, OpenAI for text/policy content',
      'Backend: FastAPI',
      'Frontend: React.js (reviewer dashboard with frame scrubber)',
      'Database/Storage: Supabase (Postgres + Object Storage for frames and metadata)'
    ],
    keyLearnings: [
      'How to use vector similarity + context retrieval to ground LLM responses.',
      'How to evaluate factuality & traceability of moderation explanations.',
      'How to tune similarity thresholds to balance precision & recall in moderation tasks.',
      'How to measure model performance against labeled datasets (PR curves, F1 scoring).'
    ],
    exampleUseCase: 'A sports clip is flagged for "violence." The system: Extracts keyframes → CLIP embeddings → retrieves similar UFC‑style flagged frames. Retrieves relevant policy text (violence category). LLM generates: "This frame shows physical altercations similar to previous UFC clips flagged for violence." Output includes evidence links for human verification.',
    links: {
      github: 'https://github.com/nila/rag-moderation',
      architecture: '/projects/rag-moderation/architecture',
      dailyLog: '/projects/rag-moderation/daily-log'
    },
    color: 'bg-gradient-to-br from-blue-500 to-purple-600'
  },
  {
    id: 'llm-seo-audit',
    title: 'LLM Evaluation Agent for SEO Answer Auditing',
    goal: 'Develop an automated LLM evaluation agent that continuously queries AI search engines (ChatGPT, Claude, Perplexity) and evaluates brand visibility, truthfulness, and answer drift over time. This allows businesses to track their "share‑of‑voice" in AI‑generated answers and detect hallucinations or content shifts.',
    techStack: [
      'Agents & Automation: LangChain agents for scheduled querying',
      'Evaluation: LLM‑as‑a‑Judge (GPT‑4) for semantic comparison & truthfulness scoring',
      'Database: PostgreSQL for snapshot storage',
      'Vector Search: Pinecone / Qdrant for historical answer similarity',
      'Dashboarding: Streamlit or Dash for time‑series analytics'
    ],
    keyLearnings: [
      'How to build automated evaluation pipelines for LLM answers at scale.',
      'Techniques for semantic diffing of AI‑generated answers across time.',
      'Prompt engineering for LLM‑as‑a‑Critic workflows (hallucination detection, entity presence).',
      'Strategies for tracking share‑of‑voice for brands in AI search engines.'
    ],
    exampleUseCase: 'Query: "What\'s the best CRM for small businesses?" Agent queries Perplexity, ChatGPT, Claude and stores snapshots. Weekly evaluation shows: HubSpot mentioned in 80% of responses (up 15% WoW), Salesforce visibility dropped to 30%, Change correlated with Perplexity shifting to newer web sources.',
    links: {
      github: 'https://github.com/nilakarthikesan/llm-seo-evaluator',
      architecture: '/projects/llm-seo-audit/architecture',
      dailyLog: '/projects/llm-seo-audit/daily-log'
    },
    color: 'bg-gradient-to-br from-green-500 to-teal-600'
  },
  {
    id: 'fitnesspal-ai',
    title: 'FitnessPal Clone with AI Meal Planner',
    goal: 'Build a FitnessPal‑style macro tracker with an AI assistant that generates personalized meal plans based on user\'s macro goals, food logs, and dietary constraints. Users can opt-in to AI assistance for multi-day meal planning while maintaining full control over their dietary choices.',
    techStack: [
      'Backend: FastAPI (Auth, Food Logs, Macro Goals, AI API)',
      'Database: Supabase (Postgres)',
      'Frontend: React/Next.js (meal log & AI plan viewer)',
      'AI Integration: OpenAI LLM with tool‑calling for food search and plan generation',
      'Auth: JWT tokens; optional OAuth for AI assistant authorization'
    ],
    keyLearnings: [
      'Designing secure AI tool‑calling APIs with scope‑limited tokens.',
      'Structuring nutrition databases to allow macro computation and query efficiency.',
      'Building AI‑driven meal plans that respect real macro goals (±5% tolerance).',
      'Creating user-controlled AI assistance that enhances rather than replaces human decision-making.'
    ],
    exampleUseCase: 'User logs breakfast and sets macro goal: 120g protein / 60g carbs / 40g fat. AI assistant queries: get_goals(), get_logs(date), search_foods(). AI returns: "For dinner, grilled chicken with quinoa and broccoli meets your macro target within ±5%."',
    links: {
      github: 'https://github.com/nilakarthikesan/macro-tracking-app',
      architecture: '/projects/fitnesspal-ai/architecture',
      dailyLog: '/projects/fitnesspal-ai/daily-log'
    },
    color: 'bg-gradient-to-br from-orange-500 to-red-600'
  }
] 