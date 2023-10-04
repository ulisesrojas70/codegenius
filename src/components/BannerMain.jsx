import styled from "styled-components";
import programming from '../assets/images/programming.png'
import TitleCategory from "./TitleCategory";
import player from '../assets/images/player.png'
import { TitleMedium, BodyMedium } from "./UI/Styles";

const Section = styled.section `
    padding: 14rem 5% 2rem 5%;
    background-image: url(${programming});
    background-color: rgba(255, 255, 255, 0.5);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    gap: 4rem;

    @media screen and (max-width: 1024px){
        flex-wrap: wrap;
    }
`;

const Info = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const BannerImg = styled.img`
    @media screen and (max-width: 1440px){
        max-width: 596px;
        max-height: 284px;
    } 
    @media screen and (max-width: 1024px){
        display: none;
    } 
`;

const BannerMain = () => {
    return (
        <Section>
            <Info>
                <TitleCategory
                    height={'92px'}
                    width={'296px'}
                    fontSize={'60px'}
                >
                    Frontend
                </TitleCategory>
                <TitleMedium>Challenge React</TitleMedium>
                <BodyMedium>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </BodyMedium>
            </Info>
            <BannerImg src={player} alt="Banner"/>
        </Section>
    )
}

export default BannerMain;