import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

import ButtonComp from "../button";
import CustomizedTables from '../customizedTables';

import { Badge, Button, Box } from "@mui/material";

import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CartImg from "../../assets/images/header/cart.svg";

import { Fade, Modal, Backdrop } from '@mui/material';
import { TableCell, TableRow } from '@mui/material';

import './index.scss';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

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

                    <Box className='modal-cart'>
                        <Box className='modal-cart-close'>
                            <Button autoFocus onClick={handleClose} className='modal-cart-close_button'>
                                Fechar
                            </Button>
                        </Box>
                        <CustomizedTables headerTable={['', 'Produto', 'Qtd', 'Preço', '', '', 'Total']}
                            footerTable={
                                <StyledTableRow key='footer'>
                                    <TableCell colSpan="2" align="center">Total</TableCell>
                                    <TableCell colSpan="4" align="left">{cart.value} itens</TableCell>
                                    <TableCell colSpan="1" align="left">R$ {totalPrice.toFixed(2)}</TableCell>
                                </StyledTableRow>}
                        >{cart.Cart.map((item) => (
                            <StyledTableRow key={item.id}>
                                <TableCell align="center">
                                    <IconButton sx={{ position: 'static', color: 'brown' }} onClick={() => dispatch(cartActions.DeleteItem(cart, item))}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <img className="img-fluid img-thumbnail" src={item.image} alt={item.Name} width="50px" />
                                </TableCell>
                                <TableCell align="center">{item.quantity}</TableCell>
                                <TableCell align="center">R$ {item.price.toFixed(2)}</TableCell>
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