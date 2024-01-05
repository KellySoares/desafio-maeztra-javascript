import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

import ButtonComp from "../button";

import { Badge } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import CartImg from "../../assets/images/header/cart.svg";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import './index.scss';
import CustomizedTables from '../customizedTables';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
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
const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    let totalPrice = 0;
    for (let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
    }

    if (cart.value >= 0) {
        localStorage.setItem('reactShopping: cart', JSON.stringify(cart))
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <>
            <ButtonComp
                style={{ color: 'white', display: { xs: 'none', md: 'flex' }, borderRadius: '8px' }}
                icons={
                    <Badge badgeContent={cart.value} color="primary" >
                        <img alt="edit" src={CartImg} />
                    </Badge>
                }
                name="Meu Carrinho"
                classname="header"
                onclick={handleOpen} />
            <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: "center" }}
                onClick={handleOpen} >
                <Badge badgeContent={cart.value} color="primary">
                    <img alt="edit" src={CartImg} />
                </Badge>
            </IconButton >
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

                    <Box sx={style} className='modal'>
                        <Box sx={styleClose} className='modal-close'>
                            <Button sx={styleButton} autoFocus onClick={handleClose} className='modal-close_button'>
                                Fechar
                            </Button>
                        </Box>
                        <CustomizedTables headerTable={['', 'Produto', 'Qtd', 'Preço', '', '', 'Total']}
                            footerTable={
                                <StyledTableRow key='footer'>
                                    <TableCell colSpan="2"  align="center">Total</TableCell>
                                    <TableCell colSpan="4"  align="left">{cart.value} itens</TableCell>
                                    <TableCell colSpan="1"  align="left">R$ {totalPrice.toFixed(2)}</TableCell>
                                </StyledTableRow>}
                        >{cart.Cart.map((item) => (
                            <StyledTableRow key={item.id}>
                                <TableCell align="center">
                                    <IconButton sx={{ position: 'static', color: 'brown' }} onClick={() => dispatch(cartActions.DeleteItem(cart, item))}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="left">
                                    <img className="img-fluid img-thumbnail" src={item.image} alt={item.Name} width="50px" />
                                </TableCell>
                                <TableCell align="left">{item.quantity}</TableCell>
                                <TableCell align="left">R$ {item.price.toFixed(2)}</TableCell>
                                <TableCell align="center">
                                    <IconButton sx={{ position: '', color: 'green' }} onClick={() => dispatch(cartActions.AddItem(cart, item))} >
                                        <AddIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton sx={{ position: '', color: 'brown' }} onClick={() => dispatch(cartActions.RemoveItem(cart, item))} >
                                        <RemoveIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    R$ {(item.price * item.quantity).toFixed(2)}
                                </TableCell>
                            </StyledTableRow>
                        ))
                            }

                        </CustomizedTables>

                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default Cart;