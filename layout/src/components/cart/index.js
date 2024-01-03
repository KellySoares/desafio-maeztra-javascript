import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

import ButtonComp from "../button";

import { Badge } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import CartImg from "../../assets/images/header/cart.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
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

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    return (
        <>

            <ButtonComp
                style={{ my: 1, color: 'white', display: { xs: 'none', md: 'flex' }, borderRadius: '8px' }}
                icons={
                    <Badge badgeContent={cart.value} color="error">
                        <img alt="edit" src={CartImg} />
                    </Badge>
                }
                name="Meu Carrinho"
                classname="header"
                onclick={handleClickOpen} />


            <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: "center" }}
                onClick={handleClickOpen} >
                <Badge badgeContent={cart.value} color="error">
                    <img alt="edit" src={CartImg} />
                </Badge>
            </IconButton >


            {/* Modal */}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Meu Carrinho
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Produto</th>
                                <th scope="col">Qtd</th>
                                <th scope="col">Preço</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.Cart.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <th>
                                            <IconButton aria-label="Example" onClick={() => dispatch(cartActions.DeleteItem(cart, item))}>
                                                <DeleteIcon />
                                            </IconButton>

                                        </th>
                                        <th><img className="img-fluid img-thumbnail" src={item.image} alt={item.Name} width="50px" /></th>
                                        <th><span className="badge badge-pill bg-warning">
                                            {item.quantity}
                                        </span></th>
                                        <th>R$ {item.price.toFixed(2)}</th>
                                        <th>
                                            <IconButton aria-label="Example" onClick={() => dispatch(cartActions.AddItem(cart, item))} >
                                                <AddIcon />
                                            </IconButton>
                                        </th>
                                        <th>
                                            <IconButton aria-label="Example" onClick={() => dispatch(cartActions.RemoveItem(cart, item))} >
                                                <RemoveIcon />
                                            </IconButton>
                                        </th>
                                        <th>R$ {(item.price * item.quantity).toFixed(2)}</th>
                                    </tr>
                                )
                            })}
                            <tr>
                                <th colSpan="2" scope="col">Total</th>
                                <th colSpan="3">{cart.value} itens</th>
                                <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Continuar a compra
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    )
}

export default Cart;