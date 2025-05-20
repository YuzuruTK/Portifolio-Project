import { useTheme } from '../../contexts/ThemeContext';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: start;
    padding: 1rem 2rem;
    background-color: var(--card-bg);
    position: fixed;
    top: 0;
    right: 0;
    left: 250px;
    z-index: 90;
    height: 60px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        left: 0;
        justify-content: flex-end;
    }
`;

const Header = () => {
    const { theme } = useTheme();

    return (
        <HeaderContainer>
            <Navigation />
            <ThemeToggle />
        </HeaderContainer>
    );
};

export default Header;
