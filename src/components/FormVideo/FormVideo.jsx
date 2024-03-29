import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Form, TitleMedium, } from '../UI/Styles';
import DefaultPage from '../DefaultPage';
import styled from 'styled-components';
import {
    colorBlackDark,
    colorBlackLight,
    colorBlackLighter,
    colorBlackMedium,
    colorGrayLight,
    colorPrimaryMedium
} from '../UI/variables';
import Button from '../Button';
import { Link } from 'react-router-dom';

export const TitleContainer = styled.div`
    margin: 3rem 0;
    text-align: center;
`;

const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem 0;
`;

const ContainerSubmit = styled.div`
    display: flex;
    gap: 1rem;
`;

export const customInputStyles = {
    '& input': {
        backgroundColor: colorBlackMedium,
        color: colorGrayLight,
        borderBottom: '2px solid',
        borderBottomColor: colorBlackLighter,
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
    },
    '& input::placeholder': {
        color: 'red', // Cambia el color del placeholder (texto de sugerencia)
    },
    '& label.MuiInputLabel-root': {
        color: colorPrimaryMedium, // Cambia el color de la etiqueta
    },
    '&:hover': {
        '& input': {
            backgroundColor: colorBlackLight,
        },
    },
};

const FormVideo = () => {

    const [category, setCategory] = useState('');
    const [titulo, setTitulo] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
        setTitulo(event.target.value);
        console.log(event.target.value)
    };


    return (
        <DefaultPage>

            <TitleContainer>
                <TitleMedium>Nuevo Video</TitleMedium>
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
                    value={titulo}
                    onChange={handleChange}
                />

                <TextField
                    id="filled-basic"
                    label="Link del video"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
                />

                <TextField
                    id="filled-basic"
                    label="Link de imagen del video"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
                />

                <TextField
                    id="filled-select-currency"
                    select
                    label="Categoría"
                    defaultValue="EUR"
                    variant="filled"
                    margin="normal"
                    value={category}
                    onChange={handleChange}
                    sx={customInputStyles}
                >
                    <MenuItem value="1">Frontend</MenuItem>
                    <MenuItem value="1">Backend</MenuItem>
                    <MenuItem value="1">Inovación y gestión</MenuItem>
                </TextField>

                <TextField
                    id="filled-basic"
                    label="Descripción"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
                />
                <ContainerButtons>
                    <ContainerSubmit>
                        <Button type='sumbit'>Guardar</Button>
                        <Button
                            color={colorBlackDark}
                            backgroundColor={colorBlackLighter}
                        >Limpiar</Button>
                    </ContainerSubmit>
                    <Link to="/FormCategory">
                        <Button >Nueva Categoría</Button>
                    </Link>
                </ContainerButtons>
            </Form>

        </DefaultPage>
    )
}

export default FormVideo;