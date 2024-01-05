import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import './index.scss';

import Img from "../../assets/images/image 4.png";

const styleClose = {
    position: 'absolute',
    textAlign: 'right',
    width: '100%',
    bgcolor: 'transparent',
    right: '0',
    top: '-20px',

};
const styleButton = {
    padding: 0,
    color: '#FFFFFF',
    fontFamily: 'Lato !important',
    fontSize: '12px !important',
    minWidth: '0px'

};

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

                    <Box className='modal' sx={{width:  { xs: '80%', md: '50%' }}}>
                        <Box sx={styleClose} className='modal-close'>
                            <Button sx={styleButton} autoFocus onClick={handleClose} className='modal-close_button'>
                                Fechar
                            </Button>
                        </Box>
                        <Box key='modal' sx={{ gap: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#EFEFEF', width:  { xs: '100%', md: '50%' } }} className='modal-content' >
                            <img src={Img} alt='' className='modal-content_image' />
                            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }} className='modal-content_text' >
                                <p className='tipbar-box-text'>Bem Vindo à MAEZTRA</p>
                                <p className='tipbar-box-description'>Receba em Primeira mão
                                    desconto e ofertas exclusivas</p>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalComp;