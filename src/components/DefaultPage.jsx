import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { colorBlackDark } from "./UI/variables";

const DefaultPageStyled = styled.div`
    background-color: ${colorBlackDark};
`;

const DefaultPage = ( {children, showButton} ) => {
    return (
        <DefaultPageStyled>
            <Header showButton={showButton}/>
            <>
                {children}
            </>
            <Footer/>
        </DefaultPageStyled>
    )
}

export default DefaultPage;