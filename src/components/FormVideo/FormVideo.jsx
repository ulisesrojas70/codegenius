import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ContainerForm, TitleMedium, } from '../UI/Styles';
import DefaultPage from '../DefaultPage';
import styled from 'styled-components';
import {
    colorBlackLight,
    colorBlackLighter,
    colorBlackMedium,
    colorGrayLight,
    colorPrimaryMedium
} from '../UI/variables';

const TitleContainer = styled.div`
    margin: 3rem 0;
    text-align: center;
`;

const customInputStyles = {
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

    const handleChange = (event) => {
        setCategory(event.target.value);
    };


    return (
        <DefaultPage>
            <TitleContainer>
                <TitleMedium>Nuevo Video</TitleMedium>
            </TitleContainer>

            <ContainerForm >
                <TextField
                    id="filled-basic"
                    label="Titulo"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
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
                    <MenuItem value={10}>1</MenuItem>
                </TextField>

                <TextField
                    id="filled-basic"
                    label="Descripción"
                    variant="filled"
                    margin="normal"
                    sx={customInputStyles}
                />

            </ContainerForm>
        </DefaultPage>
    )
}

export default FormVideo;