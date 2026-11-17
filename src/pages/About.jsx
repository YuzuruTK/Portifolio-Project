import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled.div`
    max-width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: calc(100vh - 120px);
`;
const SectionTitle = styled.h2`margin-bottom: 2rem;`;
const AboutText = styled(motion.div)`
    text-align: left;
    p { margin-bottom: 1.5rem; line-height: 1.8; }
`;

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
    };

    return (
        <AboutContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>About Me</SectionTitle>
            <AboutText variants={itemVariants}>
                <p>
                    I'm Gabriel Buron, a Computer Science student at Unijuí and a Systems Analyst Assistant
                    at Letsara. My work currently involves software development, SQL, data analysis, systems
                    support and improvements to internal applications and workflows.
                </p>
                <p>
                    My professional background also includes data engineering at Compass UOL and IoT research
                    at Unijuí. These experiences gave me practical exposure to AWS services, Python, PySpark,
                    PostgreSQL, data pipelines, sensor data and application development.
                </p>
                <p>
                    I enjoy understanding how systems work, investigating problems and turning requirements
                    into maintainable solutions. My interests include backend development, databases,
                    integrations, data engineering and building useful tools that connect software and data.
                </p>
                <p>
                    I'm currently completing my Bachelor's degree in Computer Science while continuing to
                    develop my skills through professional work and personal projects.
                </p>
            </AboutText>
        </AboutContainer>
    );
};

export default About;
