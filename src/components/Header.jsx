import styled from "styled-components";
import { colorBlackDark, colorGrayLight } from "./UI/variables";
import codegenius from '../assets/images/codegenius.png';
import { Logo } from "./UI/Styles";
import Button from "./Button";

const HeaderStyled = styled.header `
    background-color: ${colorBlackDark};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    height: 5rem;
`

const Header = () => {
    return (
        <HeaderStyled>
            <Logo src={codegenius} alt="Logo CODEGENIUS"/>
            <Button
                href='https://www.google.com'
                backgroundColor={colorBlackDark}
                border={colorGrayLight}
            >
                Nuevo Video
            </Button>
        </HeaderStyled>
    )
}

export default Header;