import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const AboutText = styled(motion.div)`
    p {
        margin-bottom: 1.5rem;
        line-height: 1.8;
    }
`;

const PersonalInfo = styled(motion.div)`
    .persona-card {
        padding: 2rem;
    }
    
    .info-item {
        margin-bottom: 1.5rem;
        
        h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: var(--accent);
        }
        
        p {
            font-size: 1rem;
        }
    }
`;

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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

    return (
        <AboutContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>About Me</SectionTitle>

            <AboutContent>
                <AboutText variants={itemVariants}>
                    <p>
                        I'm Gabriel Buron, a backend-focused developer with expertise in data engineering and data analysis.
                        My journey in technology began with a technical degree in IT Support and Maintenance from Farroupilha Federal Institute,
                        and I'm currently pursuing a Bachelor's degree in Computer Science at Unijuí.
                    </p>
                    <p>
                        My professional experience spans data engineering, IoT research, and full-stack development.
                        I've worked with AWS cloud technologies, Python, Java, and various databases to build efficient solutions.
                        I'm particularly passionate about data engineering and backend development, where I can leverage my analytical
                        thinking and problem-solving skills.
                    </p>
                    <p>
                        I'm constantly learning and expanding my skill set, with a focus on becoming a senior developer
                        in the data engineering space. I believe in building robust, scalable systems that can handle complex data
                        processing requirements while maintaining high performance.
                    </p>
                </AboutText>

                <PersonalInfo variants={itemVariants}>
                    <div className="persona-card">
                        <div className="info-item">
                            <h3>Location</h3>
                            <p>Ijui, Rio Grande do Sul, Brasil</p>
                        </div>
                        <div className="info-item">
                            <h3>Email</h3>
                            <p>gabriel@buron.dev</p>
                        </div>
                        <div className="info-item">
                            <h3>Phone</h3>
                            <p>(+55) 55 9 9203-2426</p>
                        </div>
                        <div className="info-item">
                            <h3>LinkedIn</h3>
                            <p>
                                <a href="https://linkedin.com/in/gabriel-buron" target="_blank" rel="noopener noreferrer">
                                    linkedin.com/in/gabriel-buron
                                </a>
                            </p>
                        </div>
                        <div className="info-item">
                            <h3>GitHub</h3>
                            <p>
                                <a href="https://github.com/YuzuruTK" target="_blank" rel="noopener noreferrer">
                                    github.com/YuzuruTK
                                </a>
                            </p>
                        </div>
                    </div>
                </PersonalInfo>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;
