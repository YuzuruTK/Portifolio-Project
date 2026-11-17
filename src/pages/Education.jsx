import { motion } from 'framer-motion';
import styled from 'styled-components';

const EducationContainer = styled.div`max-width: 900px; margin: 0 auto;`;
const SectionTitle = styled.h2`margin-bottom: 2rem;`;
const EducationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); }
`;
const EducationCard = styled(motion.div)`
    background-color: var(--card-bg);
    padding: 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    &:before {
        content: ''; position: absolute; top: 0; left: 0;
        width: 100%; height: 4px; background-color: var(--accent);
    }
`;
const DegreeName = styled.h3`font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--accent);`;
const Institution = styled.h4`font-size: 1.1rem; margin-bottom: 0.5rem;`;
const Period = styled.p`font-size: 0.9rem; margin-bottom: 1rem; opacity: 0.8;`;
const Location = styled.p`font-size: 0.9rem; margin-bottom: 1.5rem; font-style: italic;`;
const Description = styled.p`line-height: 1.6;`;
const Coursework = styled.div`
    margin-top: 2rem;
    h3 { color: var(--accent); margin-bottom: 1rem; }
    ul { display: flex; flex-wrap: wrap; gap: 0.6rem; list-style: none; padding: 0; }
    li { background: var(--card-bg); padding: 0.55rem 0.85rem; font-size: 0.9rem; }
`;

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
    };

    return (
        <EducationContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Education</SectionTitle>
            <EducationGrid>
                <EducationCard variants={itemVariants}>
                    <DegreeName>Bachelor of Science in Computer Science</DegreeName>
                    <Institution>Unijuí | Regional University of the Northwest of the State of Rio Grande do Sul</Institution>
                    <Period>February 2022 - Expected completion: 2027</Period>
                    <Location>Ijuí, RS, Brazil</Location>
                    <Description>
                        Undergraduate studies in computer science, covering software development,
                        algorithms, databases, systems and related computing disciplines.
                    </Description>
                </EducationCard>
                <EducationCard variants={itemVariants}>
                    <DegreeName>Technical Degree in IT Support and Maintenance</DegreeName>
                    <Institution>Instituto Federal Farroupilha</Institution>
                    <Period>February 2019 - December 2021</Period>
                    <Location>Santo Ângelo, RS, Brazil</Location>
                    <Description>
                        Technical education focused on computer systems, IT infrastructure,
                        hardware maintenance, networking and programming fundamentals.
                    </Description>
                </EducationCard>
            </EducationGrid>
            <Coursework>
                <h3>Relevant Coursework</h3>
                <ul>
                    {['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Operating Systems', 'Computer Networks'].map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Coursework>
        </EducationContainer>
    );
};

export default Education;
