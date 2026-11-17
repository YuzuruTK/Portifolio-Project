import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsPage = styled.section`max-width: 1200px; margin: 0 auto;`;
const Intro = styled.div`margin-bottom: 2rem;`;
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;
const ProjectCard = styled(motion.article)`
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ProjectTitle = styled.h3`font-size: 1.3rem; margin-bottom: 0;`;
const ProjectMeta = styled.p`color: var(--text); opacity: 0.85; line-height: 1.6;`;
const TechStack = styled.p`
  color: var(--accent);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: -0.4rem;
`;
const LinkGroup = styled.div`display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: auto;`;
const ActionLink = styled.a`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.7rem 1rem; border-radius: 999px;
  background: var(--accent); color: var(--text); font-weight: 700;
  transition: transform 0.2s ease, background 0.2s ease;
  &:hover { transform: translateY(-2px); background: var(--secondary); color: var(--text); }
`;

const projects = [
  {
    title: 'Meteo-data',
    description: 'A meteorological data platform that collects observations from multiple providers, stores historical records and exposes data through an API and dashboard. Includes rainfall notifications and data visualization.',
    stack: 'TypeScript · Cloudflare Workers · D1 · React · Vite · Recharts · REST · Vitest',
    githubUrl: 'https://github.com/YuzuruTK/Meteo-data'
  },
  {
    title: 'Zoho Personal Integration',
    description: 'A personal assistant integration connecting Zoho Calendar with OpenCode through MCP tools. Includes calendar access, event search and availability workflows, alongside a private web chat interface.',
    stack: 'Node.js · TypeScript · Zoho API · OpenCode · MCP · Docker · SQLite · Cloudflare Tunnel',
    githubUrl: 'https://github.com/YuzuruTK/zoho-personal-integration'
  },
  {
    title: 'FASTA2GO',
    description: 'A bioinformatics pipeline that extracts features from protein sequences, retrieves UniProt annotations and prepares Gene Ontology Slim labels for molecular function prediction.',
    stack: 'Python · DuckDB · BioPython · UniProt REST · Pandas · scikit-learn · XGBoost · AutoGluon',
    githubUrl: 'https://github.com/YuzuruTK/FASTA2GO'
  },
  {
    title: 'Thought Box API',
    description: 'An AI-assisted knowledge management application for organizing thoughts and notes, with a REST API and web interface for structured storage and AI-generated summaries.',
    stack: 'TypeScript · React · Cloudflare Workers · Hono · D1 · Drizzle · Zod · JWT · OpenRouter',
    githubUrl: 'https://github.com/YuzuruTK/thought_box_api'
  }
];

const Projects = () => (
  <ProjectsPage>
    <Intro>
      <h1>Selected Projects</h1>
      <p>A selection of personal and academic projects focused on software, data and practical integrations.</p>
    </Intro>
    <ProjectGrid>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.08 }}
        >
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectMeta>{project.description}</ProjectMeta>
          <TechStack>{project.stack}</TechStack>
          <LinkGroup>
            <ActionLink href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</ActionLink>
          </LinkGroup>
        </ProjectCard>
      ))}
    </ProjectGrid>
  </ProjectsPage>
);

export default Projects;
