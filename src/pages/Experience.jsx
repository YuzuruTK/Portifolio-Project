import { motion } from 'framer-motion';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const Timeline = styled.div`
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background-color: var(--accent);
        transform: skewY(-5deg);
        
        @media (min-width: 768px) {
            left: 50%;
            transform: translateX(-50%) skewY(-5deg);
        }
    }
`;

const TimelineItem = styled(motion.div)`
    position: relative;
    margin-bottom: 3rem;
    padding-left: 2rem;
    
    @media (min-width: 768px) {
        width: 45%;
        margin-left: ${props => props.position === 'right' ? '55%' : '0'};
        padding-left: ${props => props.position === 'right' ? '2rem' : '0'};
        padding-right: ${props => props.position === 'left' ? '2rem' : '0'};
        text-align: ${props => props.position === 'left' ? 'right' : 'left'};
    }
    
    &:before {
        content: '';
        position: absolute;
        left: -8px;
        top: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--accent);
        
        @media (min-width: 768px) {
            left: ${props => props.position === 'right' ? '-12px' : 'auto'};
            right: ${props => props.position === 'left' ? '-12px' : 'auto'};
        }
    }
`;

const JobCard = styled.div`
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: var(--accent);
    }
`;

const JobTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--accent);
`;

const Company = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const Period = styled.p`
    font-size: 0.9rem;
    margin-bottom: 1rem;
    opacity: 0.8;
`;

const Responsibilities = styled.ul`
    list-style-type: none;
    padding-left: 0;
    
    li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
        line-height: 1.6;
        
        &:before {
            content: '•';
            position: absolute;
            left: 0;
            top: 0;
            color: var(--accent);
            font-size: 1.2rem;
        }
    }
    
    @media (min-width: 768px) {
        text-align: left;
        padding-left: ${props => props.position === 'left' ? '1.5rem' : '0'};
        padding-right: ${props => props.position === 'right' ? '1.5rem' : '0'};
    }
`;

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <ExperienceContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Experience</SectionTitle>

            <Timeline>
                <TimelineItem position="right" variants={itemVariants}>
                    <JobCard>
                        <JobTitle>Data Engineering Intern / Scholarship Holder</JobTitle>
                        <Company>Compass UOL</Company>
                        <Period>June 2024 - November 2024</Period>
                        <Responsibilities position="right">
                            <li>Developed data engineering projects focusing on AWS cloud technologies (S3, Lambda, Glue, QuickSight)</li>
                            <li>Applied Python and PySpark for data transformations and big data analysis</li>
                            <li>Built and optimized data pipelines for efficient processing</li>
                        </Responsibilities>
                    </JobCard>
                </TimelineItem>

                <TimelineItem position="left" variants={itemVariants}>
                    <JobCard>
                        <JobTitle>IoT Research Scholarship Holder</JobTitle>
                        <Company>Unijuí</Company>
                        <Period>February 2024 - June 2024</Period>
                        <Responsibilities position="left">
                            <li>Contributed to the Smart Cities project, analyzing LoRa sensor data with Python</li>
                            <li>Developed systems using Python and Flutter for data collection and visualization</li>
                            <li>Conducted IoT experiments and presented research findings</li>
                        </Responsibilities>
                    </JobCard>
                </TimelineItem>

                <TimelineItem position="right" variants={itemVariants}>
                    <JobCard>
                        <JobTitle>Data Preparer (Full Stack)</JobTitle>
                        <Company>Mérito</Company>
                        <Period>May 2023 - January 2024</Period>
                        <Responsibilities position="right">
                            <li>Transitioned desktop systems to web applications using Flutter for frontend</li>
                            <li>Developed and supported backend Java applications for hospital systems</li>
                            <li>Prepared and manipulated data to support system operations</li>
                        </Responsibilities>
                    </JobCard>
                </TimelineItem>

                <TimelineItem position="left" variants={itemVariants}>
                    <JobCard>
                        <JobTitle>Attendant</JobTitle>
                        <Company>Empreendimentos Pizutti</Company>
                        <Period>December 2021 - May 2023</Period>
                        <Responsibilities position="left">
                            <li>Provided customer service</li>
                            <li>Managed administrative documents</li>
                        </Responsibilities>
                    </JobCard>
                </TimelineItem>
            </Timeline>
        </ExperienceContainer>
    );
};

export default Experience;
