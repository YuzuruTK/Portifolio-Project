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
const AwardsList = styled.ul`
    list-style: none;
    padding: 0;
    li {
        background: var(--card-bg);
        border-left: 3px solid var(--accent);
        padding: 0.9rem 1rem;
        margin-bottom: 0.75rem;
        line-height: 1.5;
    }
`;

const awards = [
    '1st place — Unijuí Programming Marathon (2026)',
    '10th place — SBC RS Super-Regional (2025)',
    'Winning placements — Unijuí Warmup (2025)',
    'National participant — SBC Programming Contest (2024)',
    '1st place — Unijuí Warmup (2024)'
];

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
            <section style={{ marginTop: '2.5rem' }}>
                <SectionTitle as="h3">Awards & Competitions</SectionTitle>
                <AwardsList>
                    {awards.map(award => <li key={award}>{award}</li>)}
                </AwardsList>
            </section>
        </EducationContainer>
    );
};

export default Education;
