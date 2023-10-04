import styled from "styled-components";
import { colorPrimaryMedium, colorGrayLight } from "./variables";

export const Global = styled.body`
    font-family: Roboto;
`

export const StyledButton = styled.button`
    padding: ${(props) => props.padding || '10px 40px'};
    color: ${(props) => props.color || '#FFFFFF'};
    background-color: ${(props) => props.backgroundColor || colorPrimaryMedium};
    border: 1.3px solid ${(props) => props.border || 'transparent'};
    cursor: pointer;
    font-size: 16px;
    border-radius: 7px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;

    @media screen and (max-width: 768px){
        padding: 5px 20px;
        font-size: 12px;
    }
`;

export const Logo = styled.img`
    width: 168.45px;

    @media screen and (max-width: 768px){
        width: 105px;
    }
`;

export const StyledTitleCategory = styled.label`
    width: ${(props) => props.width || '222px'} ;
    height: ${(props) => props.height || '48px'} ;
    background-color: ${(props) => props.backgroundColor || '#6BD1FF'} ;
    font-size: ${(props) => props.fontSize || '22px'};
    color: ${(props) => props.color || '#FFFFFF'} ;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const TitleBig = styled.h1`
    color: ${colorGrayLight};
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const TitleMedium = styled(TitleBig)`
    font-size: 46px;
`;

export const TitleSmall = styled(TitleBig)`
    font-size: 35px;
`;

export const BodyBig = styled(TitleBig)`
    font-size: 27px;
    font-weight: 300;
`;


export const BodyMedium = styled(TitleBig)`
    font-size: 18px;
    font-weight: 300;
`;

export const BodySmall = styled(TitleBig)`
    font-size: 16px;
    font-weight: 300;
`;

export const BodySmaller = styled(TitleBig)`
    font-size: 12px;
    font-weight: 300;
`;

export const ContainerForm = styled.section`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0 5%;
`;








