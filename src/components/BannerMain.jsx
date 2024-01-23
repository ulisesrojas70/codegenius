import styled from "styled-components";
import programming from '../assets/images/programming.png'
import TitleCategory from "./TitleCategory";
import { TitleMedium, BodyMedium } from "./UI/Styles";

const Section = styled.section`
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

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const BannerImg = styled.iframe`
    height: 40vh;
    width: 100vw;

     
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
                <TitleMedium>React</TitleMedium>
                <BodyMedium>
                    React es una poderosa herramienta para crear aplicaciones web modernas y escalables. Puedes aprender a construir interfaces de usuario atractivas, gestionar el estado de la aplicación de manera efectiva y aprovechar un ecosistema rico en recursos para llevar tus proyectos al siguiente nivel.
                </BodyMedium>
            </Info>

            <BannerImg src="https://www.youtube.com/embed/rLoWMU4L_qE?si=4x2l6TXvJBy4XS88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></BannerImg>
        </Section>
    )
}

export default BannerMain;