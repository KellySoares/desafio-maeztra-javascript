import React from "react";
import { Button, TextField, Box } from "@mui/material";

import './index.scss';

import { styled } from '@mui/material/styles';
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#FAA500',
    },
    '& .MuiInput-underline:after': {
        borderColor: '#353535',
    },
    '& .MuiOutlinedInput-root': {
        lineHeight: '18px',
        borderRadius: '4px',
        paddingRight: '0px',
        '& fieldset': {
            borderColor: '#353535',
        },
        '&:hover fieldset': {
            borderColor: '#FAA500',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FAA500',
        },
    },
});
const styleBox = {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'center'
}
const styleText = {
    display: 'flex',
    fontSize: '24px',
    color: '#000000',
    textWrap: 'nowrap',
    alignItems: 'flex-end',
    fontWeight: 700,
    margin: { xs: '0 0 0.5em 0', md: '0 0 0 2em' }
}
const NewsLetter = () => {
    return (
        <>
            <Box sx={styleBox} className="newsLetter">
                <Box sx={styleText}>
                    Receba Nossa Newsletter
                </Box>
                <form className="form">
                    <CssTextField
                        placeholder="Digite seu e-mail"
                        size="small"
                        InputProps={{
                            endAdornment: <Button
                                variant="contained"
                                onClick={onclick}
                                className="form-input_button"
                                disableElevation
                            >Enviar</Button>
                        }}
                        className="form-input">

                    </CssTextField>
                </form>
            </Box>
        </>
    )
}

export default NewsLetter;