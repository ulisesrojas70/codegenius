import { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "./UI/Styles";
import codegenius from '../assets/images/codegenius.png';
import { BodySmall, BodySmaller } from "./UI/Styles";
import { colorBlackDark } from "./UI/variables";

const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    background-color: ${colorBlackDark};
    padding: 1.5rem 0;
`;

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderComponent = () => {
        if (windowWidth < 768) {
            return <BodySmaller>Creado por: Ulises Rojas - {year}</BodySmaller>;
        } else {
            return <BodySmall>Creado por: Ulises Rojas - {year}</BodySmall>;
        }
    };

    const year = new Date().getFullYear();

    return (
        <FooterStyled>
            <Logo src={codegenius} alt="Logo CODEGENIUS" />
            {renderComponent()}
        </FooterStyled>
    )
}

export default Footer;