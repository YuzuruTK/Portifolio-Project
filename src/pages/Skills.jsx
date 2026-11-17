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
const SkillRows = styled.div`display: flex; flex-direction: column; gap: 1rem;`;
const SkillRow = styled.div`display: flex; flex-direction: column; gap: 0.4rem;`;
const SkillInfo = styled.div`display: flex; justify-content: space-between; gap: 1rem; font-size: 0.95rem;`;
const SkillName = styled.span`color: var(--text);`;
const SkillValue = styled.span`color: var(--accent); font-variant-numeric: tabular-nums;`;
const ProgressTrack = styled.div`
    width: 100%; height: 7px; overflow: hidden; border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
`;
const ProgressFill = styled(motion.div)`
    height: 100%; border-radius: inherit; background: var(--accent);
`;
const SkillTags = styled.div`display: flex; flex-wrap: wrap; gap: 0.65rem;`;
const SkillTag = styled(motion.span)`
    background-color: var(--card-bg);
    color: var(--text);
    padding: 0.6rem 0.85rem;
    font-size: 0.9rem;
    position: relative;
    &:before {
        content: ''; position: absolute; top: 0; left: 0;
        width: 3px; height: 100%; background-color: var(--accent);
    }
`;
const Note = styled.p`font-size: 0.85rem; opacity: 0.7; line-height: 1.5; margin-top: 0.75rem;`;

const languages = [
    { name: 'SQL', value: 100 },
    { name: 'TypeScript', value: 75 },
    { name: 'JavaScript', value: 50 },
    { name: 'Python', value: 25 }
];

const technologies = [
    {
        title: 'Frameworks & Application Development',
        skills: [
            { name: 'React', value: '50%' },
            { name: 'Vite', value: '50%' },
            { name: 'Zod', value: '50%' },
            { name: 'Node.js', value: '25%' },
            { name: 'Hono', value: '25%' },
            { name: 'Drizzle ORM', value: '25%' },
            { name: 'MCP', value: '25%' }
        ]
    },
    {
        title: 'Databases & Data',
        skills: [
            { name: 'SQL databases & migrations', value: '100%' },
            { name: 'ETL & data pipelines', value: '50%' },
            { name: 'Cloudflare D1', value: '50%' },
            { name: 'DuckDB', value: '25%' },
            { name: 'SQLite', value: '25%' },
            { name: 'Biopython', value: '25%' },
            { name: 'scikit-learn', value: '25%' }
        ]
    },
    {
        title: 'Cloud, APIs & Infrastructure',
        skills: [
            { name: 'REST APIs', value: '100%' },
            { name: 'Cloudflare Workers', value: '50%' },
            { name: 'Docker', value: '25%' }
        ]
    },
    {
        title: 'Web & Development Tools',
        skills: [
            { name: 'HTML', value: '75%' },
            { name: 'CSS', value: '75%' },
            { name: 'Git & GitHub', value: '100%' },
            { name: 'Linux', value: 'Regular use' },
            { name: 'Windows', value: 'Regular use' }
        ]
    }
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
            <SkillCategory variants={itemVariants}>
                <CategoryTitle>Programming Languages</CategoryTitle>
                <SkillRows>
                    {languages.map(language => (
                        <SkillRow key={language.name}>
                            <SkillInfo>
                                <SkillName>{language.name}</SkillName>
                                <SkillValue>{language.value}%</SkillValue>
                            </SkillInfo>
                            <ProgressTrack>
                                <ProgressFill initial={{ width: 0 }} animate={{ width: `${language.value}%` }} transition={{ duration: 0.8 }} />
                            </ProgressTrack>
                        </SkillRow>
                    ))}
                </SkillRows>
                <Note>Percentages represent the share of selected projects (Meteo-data, Zoho Personal Integration, FASTA2GO and Thought Box API) where each language or technology is used. TypeScript includes TSX. These figures indicate project coverage, not proficiency.</Note>
            </SkillCategory>
            <SkillsGrid>
                {technologies.map(category => (
                    <SkillCategory key={category.title} variants={itemVariants}>
                        <CategoryTitle>{category.title}</CategoryTitle>
                        <SkillTags>
                            {category.skills.map(skill => (
                                <SkillTag key={skill.name}>{skill.name} · {skill.value}</SkillTag>
                            ))}
                        </SkillTags>
                    </SkillCategory>
                ))}
            </SkillsGrid>
            <SkillCategory variants={itemVariants}>
                <CategoryTitle>Interpersonal Skills</CategoryTitle>
                <SkillTags>
                    {interpersonalSkills.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}
                </SkillTags>
            </SkillCategory>
            <SkillCategory variants={itemVariants}>
                <CategoryTitle>Languages</CategoryTitle>
                <SkillTags>
                    <SkillTag>Portuguese · Native</SkillTag>
                    <SkillTag>English · Advanced</SkillTag>
                </SkillTags>
            </SkillCategory>
        </SkillsContainer>
    );
};

export default Skills;
