import { motion } from 'framer-motion';
import styled from 'styled-components';

const ExperienceContainer = styled.div`max-width: 900px; margin: 0 auto;`;
const SectionTitle = styled.h2`margin-bottom: 2rem;`;
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
        @media (min-width: 768px) { left: 50%; transform: translateX(-50%); }
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
        top: 2rem;
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
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    &:before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 4px;
        background-color: var(--accent);
    }
`;
const JobTitle = styled.h3`font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--accent);`;
const Company = styled.h4`font-size: 1.15rem; margin-bottom: 0.5rem;`;
const Period = styled.p`font-size: 0.9rem; margin-bottom: 1rem; opacity: 0.8;`;
const Responsibilities = styled.ul`
    list-style: none; padding-left: 0;
    li {
        position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; line-height: 1.6;
        &:before { content: '•'; position: absolute; left: 0; color: var(--accent); font-size: 1.2rem; }
    }
    @media (min-width: 768px) { text-align: left; }
`;

const jobs = [
    {
        title: 'Systems Analyst Assistant',
        company: 'Letsara',
        period: 'October 2026 - Present',
        responsibilities: [
            'Work with software development, SQL, data analysis and systems support.',
            'Refactor BI routines and reports into SQL-based workflows.',
            'Improve application interfaces and contribute to the development of an internal HUB.',
            'Work with PostgreSQL, JavaScript and TSX across day-to-day systems demands.'
        ]
    },
    {
        title: 'Attendant',
        company: 'Empreendimentos Pizutti',
        period: 'December 2021 - October 2026',
        responsibilities: [
            'Handled operational and administrative routines in the theoretical education department.',
            'Managed scheduling for examinations and driving lessons, including CNH and CNH Social processes.',
            'Provided technical support and developed Python automations to assist internal workflows.'
        ]
    },
    {
        title: 'Data Engineering Intern',
        company: 'Compass UOL',
        period: 'June 2024 - November 2024',
        responsibilities: [
            'Worked with AWS S3, Lambda, Glue and QuickSight in data engineering activities.',
            'Used Python and PySpark for data transformation and processing.',
            'Built an ETL pipeline using data from the IMDb API and loading it into a data warehouse.'
        ]
    },
    {
        title: 'IoT Research Intern',
        company: 'Unijuí',
        period: 'February 2024 - June 2024',
        responsibilities: [
            'Contributed to a Smart Cities research project involving LoRa sensor data.',
            'Worked with PostgreSQL and a dataset containing more than 300,000 records.',
            'Used Python, Flutter and data analysis tools to support experiments and present findings.'
        ]
    }
];

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };
    const itemVariants = {
        hidden: { y: 35, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }
    };

    return (
        <ExperienceContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
            <SectionTitle as={motion.h2} variants={itemVariants}>Professional Experience</SectionTitle>
            <Timeline>
                {jobs.map((job, index) => (
                    <TimelineItem key={job.company} position={index % 2 === 0 ? 'right' : 'left'} variants={itemVariants}>
                        <JobCard>
                            <JobTitle>{job.title}</JobTitle>
                            <Company>{job.company}</Company>
                            <Period>{job.period}</Period>
                            <Responsibilities>
                                {job.responsibilities.map(item => <li key={item}>{item}</li>)}
                            </Responsibilities>
                        </JobCard>
                    </TimelineItem>
                ))}
            </Timeline>
        </ExperienceContainer>
    );
};

export default Experience;
