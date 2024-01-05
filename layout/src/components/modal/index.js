import React from 'react';
import { Fade, Modal, Box, Backdrop } from '@mui/material';
import { Button, TextField } from "@mui/material";

import Img from "../../assets/images/image 4.png";
import iconEnviar from "../../assets/images/icons/icon_enviar.svg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
        lineHeight: '20px',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
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
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: { xs: '2em 2em', md: '4em 1em' }
}
const ModalComp = () => {

    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>

                    <Box className='modal' sx={{ width: { xs: '80%', md: '50%' } }}>
                        <Box className='modal-close'>
                            <Button autoFocus onClick={handleClose} className='modal-close_button'>
                                Fechar
                            </Button>
                        </Box>
                        <Box key='modal' className='modal-content' >
                            <img src={Img} alt='' className='modal-content_image' />
                            <Box sx={styleBox} className='modal-content_text' >
                                <MailOutlineIcon />
                                <p className='text'>Bem Vindo à MAEZTRA</p>
                                <p className='description'>Receba em Primeira mão</p>
                                <p className='description_strong'> desconto e ofertas exclusivas</p>

                                <form className="form">
                                    <CssTextField
                                        placeholder="Digite seu e-mail"
                                        size="small"
                                        className="form-input" />
                                    <Button
                                        variant="contained"
                                        onClick={handleClose}
                                        className="form-button"
                                        endIcon={<img src={iconEnviar} alt='' />}
                                        disableElevation
                                    >Enviar</Button>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalComp;