import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const SkillsContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SkillCategory = styled(motion.div)`
    margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--accent);
    position: relative;
    display: inline-block;
    
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 3px;
        background-color: var(--accent);
        transform: skewX(-20deg);
    }
`;

const SkillsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
`;

const SkillItem = styled(motion.div)`
    background-color: var(--card-bg);
    padding: 1rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: skewX(-5deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: skewX(-5deg) translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: var(--accent);
    }
`;

const SkillName = styled.h4`
    font-size: 1rem;
    margin-bottom: 0.5rem;
    transform: skewX(5deg); /* Counter the parent skew */
`;

const SkillLevel = styled.div`
    height: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    position: relative;
    transform: skewX(5deg); /* Counter the parent skew */
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${props => props.level}%;
        background-color: var(--accent);
    }
`;

const InterpersonalSkills = styled(motion.div)`
    margin-top: 3rem;
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
`;

const SkillTag = styled(motion.span)`
    background-color: var(--card-bg);
    color: var(--text);
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    transform: skewX(-10deg);
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: var(--accent);
    }
`;

const Skills = () => {
    const { theme } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    const tagVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    // Programming skills with proficiency levels
    const programmingSkills = [
        { name: "Python", level: 90 },
        { name: "Java", level: 60 },
        { name: "Go", level: 50 },
        { name: "JavaScript", level: 50 },
        { name: "TypeScript", level: 50 },
        { name: "Dart", level: 80 }
    ];

    // Database skills
    const databaseSkills = [
        { name: "SQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "DuckDB", level: 75 }
    ];

    // Cloud skills
    const cloudSkills = [
        { name: "AWS S3", level: 75 },
        { name: "AWS Lambda", level: 80 },
        { name: "AWS Glue", level: 85 },
        { name: "QuickSight", level: 70 }
    ];

    // Frameworks and tools
    const frameworksTools = [
        { name: "Flutter", level: 85 },
        { name: "Django", level: 70 },
        { name: "Flask", level: 75 },
        { name: "PySpark", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 85 }
    ];

    // Operating systems
    const operatingSystems = [
        { name: "Linux (Fedora)", level: 85 },
        { name: "Linux (Debian)", level: 70 }
    ];

    // Interpersonal skills
    const interpersonalSkills = [
        "Proactivity", "Analytical Thinking", "Resilience", "Curiosity",
        "Teamwork", "Communication", "Adaptability"
    ];

    return (
        <SkillsContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Skills</SectionTitle>

            <SkillsGrid>
                <SkillCategory variants={itemVariants}>
                    <CategoryTitle>Programming Languages</CategoryTitle>
                    <SkillsList>
                        {programmingSkills.map((skill, index) => (
                            <SkillItem
                                key={skill.name}
                                variants={itemVariants}
                                custom={index}
                            >
                                <SkillName>{skill.name}</SkillName>
                                <SkillLevel level={skill.level} />
                            </SkillItem>
                        ))}
                    </SkillsList>
                </SkillCategory>

                <SkillCategory variants={itemVariants}>
                    <CategoryTitle>Databases</CategoryTitle>
                    <SkillsList>
                        {databaseSkills.map((skill, index) => (
                            <SkillItem
                                key={skill.name}
                                variants={itemVariants}
                                custom={index}
                            >
                                <SkillName>{skill.name}</SkillName>
                                <SkillLevel level={skill.level} />
                            </SkillItem>
                        ))}
                    </SkillsList>
                </SkillCategory>

                <SkillCategory variants={itemVariants}>
                    <CategoryTitle>Cloud</CategoryTitle>
                    <SkillsList>
                        {cloudSkills.map((skill, index) => (
                            <SkillItem
                                key={skill.name}
                                variants={itemVariants}
                                custom={index}
                            >
                                <SkillName>{skill.name}</SkillName>
                                <SkillLevel level={skill.level} />
                            </SkillItem>
                        ))}
                    </SkillsList>
                </SkillCategory>

                <SkillCategory variants={itemVariants}>
                    <CategoryTitle>Frameworks & Tools</CategoryTitle>
                    <SkillsList>
                        {frameworksTools.map((skill, index) => (
                            <SkillItem
                                key={skill.name}
                                variants={itemVariants}
                                custom={index}
                            >
                                <SkillName>{skill.name}</SkillName>
                                <SkillLevel level={skill.level} />
                            </SkillItem>
                        ))}
                    </SkillsList>
                </SkillCategory>

                <SkillCategory variants={itemVariants}>
                    <CategoryTitle>Operating Systems</CategoryTitle>
                    <SkillsList>
                        {operatingSystems.map((skill, index) => (
                            <SkillItem
                                key={skill.name}
                                variants={itemVariants}
                                custom={index}
                            >
                                <SkillName>{skill.name}</SkillName>
                                <SkillLevel level={skill.level} />
                            </SkillItem>
                        ))}
                    </SkillsList>
                </SkillCategory>
            </SkillsGrid>

            <InterpersonalSkills variants={itemVariants}>
                <CategoryTitle>Interpersonal Skills</CategoryTitle>
                <TagsContainer>
                    {interpersonalSkills.map((skill, index) => (
                        <SkillTag
                            key={skill}
                            variants={tagVariants}
                            custom={index}
                        >
                            {skill}
                        </SkillTag>
                    ))}
                </TagsContainer>
            </InterpersonalSkills>
        </SkillsContainer>
    );
};

export default Skills;
