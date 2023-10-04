import React from "react";
import Slider from "react-slick";
import VideoCard from "./VideoCard";
import './slider.css';
import TitleCategory from "../TitleCategory";
import styled from "styled-components";
import { BodySmall } from "../UI/Styles";

const TitleCategorySlider = styled(TitleCategory)`
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    margin-left: 5%;
`;

const TitleAndDescription = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: start;
        margin-bottom: 1rem;
    } 
`;

const BodySmallStyled = styled(BodySmall)`
    margin-left: 1rem;

    @media screen and (max-width: 768px){
        margin-top: -15px;
        margin-left: 5%;
    } 
`;

const SliderResponsive = ({ categoria }) => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>  
            <TitleAndDescription>
                <TitleCategorySlider backgroundColor={categoria.background_color}>
                    {categoria.nombre_categoria}
                </TitleCategorySlider>
                <BodySmallStyled>
                    {categoria.descripcion}
                </BodySmallStyled>
            </TitleAndDescription>
            

            <Slider {...settings} className="slider">
                {
                    categoria.video.map((video) => (
                        <div key={video.titulo}>
                            <VideoCard video={video} />
                        </div>

                    ))
                }
            </Slider>
        </>
    );

}

export default SliderResponsive;