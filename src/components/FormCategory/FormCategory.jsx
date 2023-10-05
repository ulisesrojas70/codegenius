import DefaultPage from "../DefaultPage";
import { TitleContainer } from "../FormVideo/FormVideo";
import { TitleMedium } from "../UI/Styles";
import { TextField } from "@mui/material";
import { Form } from "../UI/Styles";
import { customInputStyles } from "../FormVideo/FormVideo";
import Button from "../Button";
import { colorBlackDark, colorBlackLighter } from "../UI/variables";
import styled from "styled-components";

const ConatinerButtonsCategory = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem 0;

    @media screen and (min-width: 425px){
        justify-content: left;
        gap: 1rem;
    } 
`;

const FormCategory = () => {
    return (
        <DefaultPage>
            <TitleContainer>
                <TitleMedium>Nueva Categoría</TitleMedium>
            </TitleContainer>

            <Form onSubmit={(e) => {
                e.preventDefault();
            }}
            >
                <TextField
                    id="filled-basic"
                    label="Titulo"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
                />
                <TextField
                    label="Color"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
                    type="color"
                />
                <TextField
                    id="filled-basic"
                    label="Descripción"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
                />
                <TextField
                    id="filled-basic"
                    label="Usuário"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
                />

                <ConatinerButtonsCategory>
                    <Button type='sumbit'>Guardar</Button>
                    <Button
                        color={colorBlackDark}
                        backgroundColor={colorBlackLighter}
                    >Limpiar</Button>
                </ConatinerButtonsCategory>
            </Form>
        </DefaultPage>
    )
}

export default FormCategory;