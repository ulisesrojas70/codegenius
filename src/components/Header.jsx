import styled from "styled-components";
import { colorBlackDark, colorGrayLight } from "./UI/variables";
import codegenius from '../assets/images/codegenius.png';
import { Logo } from "./UI/Styles";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
    background-color: ${colorBlackDark};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    height: 5rem;
`;

const Header = ({ showButton }) => {
    return (
        <HeaderStyled>
            <Link to="/">
                <Logo src={codegenius} alt="Logo CODEGENIUS" />
            </Link>


            {
                showButton &&
                <Link to="/FormVideo">
                    <Button
                        backgroundColor={colorBlackDark}
                        border={colorGrayLight}
                    >
                        Nuevo Video
                    </Button>
                </Link>

            }

        </HeaderStyled>
    )
}

export default Header;