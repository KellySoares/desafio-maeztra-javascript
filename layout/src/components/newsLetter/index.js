import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
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
        backgroundColor: '#FFFFFF',
        fontSize: '12px',
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

const NewsLetter = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                className="newsLetter"
            >
                <Box
                    sx={{
                        display: 'flex',
                        fontSize: '24px',
                        color: '#000000',
                        alignItems: 'flex-end',
                        fontWeight: 700,
                        marginBottom: { xs: '0.5em', md: '0' }
                    }}
                    className="text"
                >
                    Receba Nossa Newsletter
                </Box>
                <form className="form">
                    <CssTextField
                        placeholder="Digite seu e-mail"
                        size="small"
                        sx={{
                            display: 'flex',
                            width: '70%',
                            color: '#FFFFFF',
                            justifyContent: 'center',
                            backgroundColor: '#353535',
                        }}
                        InputProps={{
                            endAdornment: <Button
                                variant="contained"
                                sx={{
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    borderRadius: '4px',
                                    border: '0px'
                                }}
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