import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsPage = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

const Intro = styled.div`
  margin-bottom: 2rem;
`;

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

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0;
`;

const ProjectMeta = styled.p`
  color: var(--text);
  opacity: 0.8;
  line-height: 1.6;
`;
const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: var(--accent);
  color: var(--text);
  font-weight: 700;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--secondary);
    color: var(--text);
  }
`;

const projects = [
  {
    title: 'Thought Box',
    description:
      '"A little project to mantain my thoughts organized". A simple and intuitive web application that allows users to create, manage, and organize their thoughts in a structured manner.',
    githubUrl: 'https://github.com/YuzuruTK/thought_box_api',
    releaseUrl: null,
  },
  {
    title: 'Vaultix',
    description:
      '"Track income, manage expenses, and analyze your financial data in one place". A simple project to help you manage your finances, track your income and expenses, and gain insights into your financial health.',
    githubUrl: 'https://github.com/YuzuruTK/Vaultix',
    releaseUrl: 'https://vaultix.buron.dev',
  },
  {
    title: 'Lancer Character Sheet',
    description:
      '"Just a char sheet to play Lancer RPG with my friends, it can be upgraded in the future", A web application that provides a digital character sheet for the Lancer RPG, allowing players to easily manage their characters and track their progress in the game.',
    githubUrl: 'https://github.com/YuzuruTK/Lancer-Char-Sheet',
    releaseUrl: 'https://lancer.buron.dev',
  },
  {
    title: 'Resume page generation',
    description:
        '"Just a simple project to show a md resume on a Cloudflare Pages", A web application that allows users to generate a resume page from a Markdown file, providing a simple and efficient way to showcase their skills and experience online.',
    githubUrl: 'https://github.com/YuzuruTK/resume-page',
    releaseUrl: 'https://resume.buron.dev',
  },
];

const Projects = () => {
  return (
    <ProjectsPage>
      <Intro>
        <h1>Projects</h1>
        <p>A quick overview of the work I’m building and refining.</p>
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
            <LinkGroup>
              <ActionLink href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </ActionLink>
              {project.releaseUrl ? (
                <ActionLink href={project.releaseUrl} target="_blank" rel="noreferrer">
                  Release
                </ActionLink>
              ) : (
                <ActionLink disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                  Not Available Yet
                </ActionLink>
              )}
            </LinkGroup>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsPage>
  );
};

export default Projects;
