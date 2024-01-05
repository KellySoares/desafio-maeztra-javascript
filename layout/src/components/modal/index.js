import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, TextField } from "@mui/material";
import './index.scss';

import Img from "../../assets/images/image 4.png";
import iconEnviar from "../../assets/images/icons/icon_enviar.svg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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

const styleClose = {
    position: 'absolute',
    textAlign: 'right',
    width: '100%',
    bgcolor: 'transparent',
    right: '0',
    top: '-20px'

};
const styleButton = {
    padding: 0,
    color: '#FFFFFF',
    fontFamily: 'Lato !important',
    fontSize: '12px !important',
    minWidth: '0px',
    fontWeight: 400

};

const ModalComp = () => {

    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(true);

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

                    <Box className='modal' sx={{ width: { xs: '80%', md: '60%' } }}>
                        <Box sx={styleClose} className='modal-close'>
                            <Button sx={styleButton} autoFocus onClick={handleClose} className='modal-close_button'>
                                Fechar
                            </Button>
                        </Box>
                        <Box key='modal' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', width: '100%' }} className='modal-content' >
                            <img src={Img} alt='' className='modal-content_image' />
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: { xs: '2em 2em', md: '4em 1em' } }} className='modal-content_text' >
                                <MailOutlineIcon />
                                <p className='text'>Bem Vindo à MAEZTRA</p>
                                <p className='description'>Receba em Primeira mão</p>
                                <p className='description_strong'> desconto e ofertas exclusivas</p>

                                <form className="form">
                                    <CssTextField
                                        placeholder="Digite seu e-mail"
                                        size="small"
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            color: '#787D83',
                                            justifyContent: 'center',
                                            backgroundColor: '#FFFFFF',
                                            borderRadius: '5px',
                                            border: '1px solid #C4C4C4',
                                            marginTop: '1em'
                                        }}
                                        className="form-input" />
                                    <Button
                                        variant="contained"
                                        sx={{

                                        }}
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