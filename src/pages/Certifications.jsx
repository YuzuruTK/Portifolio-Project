import { motion } from 'framer-motion';
import styled from 'styled-components';

const CertificationsContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const CertificationsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CertificationCard = styled(motion.div)`
    background-color: var(--card-bg);
    padding: 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: var(--accent);
        transform: translateX(-100%);
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover:before {
        transform: translateX(0);
    }
`;

const CertificationTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--accent);
`;

const Issuer = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;

const Year = styled.p`
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    opacity: 0.8;
`;

const Description = styled.p`
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
`;

const CredentialLink = styled.a`
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--accent);
    color: var(--text);
    text-decoration: none;
    font-weight: 700;
    transform: skewX(-10deg);
    transition: all 0.3s ease;
    align-self: flex-start;
    
    &:hover {
        background-color: var(--secondary);
        transform: skewX(-10deg) scale(1.05);
    }
`;

const Certifications = () => {
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
        hidden: { y: 30, opacity: 0 },
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
        <CertificationsContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Certifications</SectionTitle>

            <CertificationsGrid>
                <CertificationCard variants={itemVariants}>
                    <CertificationTitle>AWS Cloud Practitioner CLF-C02</CertificationTitle>
                    <Issuer>AWS</Issuer>
                    <Year>2024</Year>
                    <Description>
                        Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge.
                        Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.
                    </Description>
                    <CredentialLink href="https://www.credly.com/badges/dea883b2-4c45-4b80-9685-6b82489b6f5b/public_url" target="_blank" rel="noopener noreferrer">
                        View Credential
                    </CredentialLink>
                </CertificationCard>

                <CertificationCard variants={itemVariants}>
                    <CertificationTitle>Prompt Design in Vertex AI</CertificationTitle>
                    <Issuer>Google Cloud</Issuer>
                    <Year>2025</Year>
                    <Description>
                        Complete the introductory Prompt Design in Vertex AI skill badge to demonstrate skills in the following: prompt engineering, image analysis, and multimodal generative techniques, within Vertex AI.
                        Discover how to craft effective prompts, guide generative AI output, and apply Gemini models to real-world marketing scenarios.
                    </Description>
                    <CredentialLink href="https://www.credly.com/badges/9c49bbf3-2738-479b-a050-891c91858e80/public_url" target="_blank" rel="noopener noreferrer">
                        View Credential
                    </CredentialLink>
                </CertificationCard>
            </CertificationsGrid>
        </CertificationsContainer>
    );
};

export default Certifications;
