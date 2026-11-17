import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkillsContainer = styled.div`max-width: 900px; margin: 0 auto;`;
const SectionTitle = styled.h2`margin-bottom: 2rem;`;
const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); }
`;
const SkillCategory = styled(motion.section)`margin-bottom: 1rem;`;
const CategoryTitle = styled.h3`
    font-size: 1.35rem; margin-bottom: 1.25rem; color: var(--accent);
    position: relative; display: inline-block;
    &:after {
        content: ''; position: absolute; left: 0; bottom: -8px;
        width: 100%; height: 3px; background-color: var(--accent);
    }
`;
const SkillsList = styled.div`display: flex; flex-wrap: wrap; gap: 0.75rem;`;
const SkillTag = styled(motion.span)`
    background-color: var(--card-bg);
    color: var(--text);
    padding: 0.7rem 1rem;
    font-size: 0.95rem;
    position: relative;
    &:before {
        content: ''; position: absolute; top: 0; left: 0;
        width: 3px; height: 100%; background-color: var(--accent);
    }
`;

const categories = [
    { title: 'Programming Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'Dart', 'SQL'] },
    { title: 'Backend & Application Development', skills: ['Node.js', 'Hono', 'Flask', 'Django', 'React', 'Flutter', 'REST APIs', 'MCP'] },
    { title: 'Databases & Data', skills: ['PostgreSQL', 'DuckDB', 'SQLite', 'Cloudflare D1', 'Pandas', 'PySpark', 'ETL', 'Data Analysis'] },
    { title: 'Cloud & Infrastructure', skills: ['AWS', 'Cloudflare Workers', 'Docker'] },
    { title: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Linux', 'Windows'] }
];
const interpersonalSkills = ['Analytical Thinking', 'Problem Solving', 'Teamwork', 'Communication', 'Adaptability'];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
    };

    return (
        <SkillsContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Technical Skills</SectionTitle>
            <SkillsGrid>
                {categories.map(category => (
                    <SkillCategory key={category.title} variants={itemVariants}>
                        <CategoryTitle>{category.title}</CategoryTitle>
                        <SkillsList>
                            {category.skills.map(skill => <SkillTag key={skill} variants={itemVariants}>{skill}</SkillTag>)}
                        </SkillsList>
                    </SkillCategory>
                ))}
            </SkillsGrid>
            <SkillCategory variants={itemVariants}>
                <CategoryTitle>Interpersonal Skills</CategoryTitle>
                <SkillsList>
                    {interpersonalSkills.map(skill => <SkillTag key={skill} variants={itemVariants}>{skill}</SkillTag>)}
                </SkillsList>
            </SkillCategory>
            <SkillCategory variants={itemVariants}>
                <CategoryTitle>Languages</CategoryTitle>
                <SkillsList>
                    <SkillTag variants={itemVariants}>Portuguese · Native</SkillTag>
                    <SkillTag variants={itemVariants}>English · Advanced</SkillTag>
                </SkillsList>
            </SkillCategory>
        </SkillsContainer>
    );
};

export default Skills;
