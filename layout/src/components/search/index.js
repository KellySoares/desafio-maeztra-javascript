import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import './index.scss';

import { styled } from '@mui/material/styles';
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#FAA500',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#FAA500',
    },
    '& .MuiOutlinedInput-root': {
        lineHeight: '18px',
        borderRadius: '10px',
        paddingRight: '0px',
        backgroundColor: '#EFEFEF',
        fontSize: '12px',
        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: '#FAA500',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FAA500',
        },
    },
});

const Search = () => {
    return (
        <>
            <form className="search">
                <CssTextField
                    placeholder="O Que Você Busca?"
                    size="small"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        width: '100%'
                    }}
                    InputProps={{
                        endAdornment: <Button
                            variant="contained"
                            sx={{ color: 'white', borderRadius: '10px',border: '0px', margin: '0', padding: '6px 30px' }}
                            onClick={onclick}

                            className="search-input_button"
                            disableElevation
                        >Buscar</Button>
                    }}
                    className="search-input">

                </CssTextField>
                <IconButton type="submit" aria-label="search" sx={{
                    display: { xs: 'flex', md: 'none' }
                }}>
                    <SearchIcon style={{ fill: "black" }} />
                </IconButton>
            </form>

        </>

    )
}

export default Search;