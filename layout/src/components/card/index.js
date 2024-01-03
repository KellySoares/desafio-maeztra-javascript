import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

import { Grid, Paper } from "@mui/material";
import ButtonComp from "../button";

import './index.scss';

const Card = (props) => {
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    return (
        <Paper sx={{
            borderRadius: 0,
            backgroundColor: 'transparent',
            boxShadow: '0'
        }}>
            <Grid container direction='column' sx={{ alignItems: 'center' }}>
                <img src={props.product.image} alt={props.product.name_product} />
                <Grid container direction='column' sx={{ textAlign: 'left', width: '80%' }}>
                    <div className="card-option">{props.product.option.map((cor, index) => (
                        <ButtonComp
                            optionCor={cor}
                            key={index}
                            style={{
                                my: 1, color: 'white',
                                display: 'flex',
                                borderRadius: '4px',
                                backgroundColor: cor,
                                minWidth: '27px',
                                minHeight: '27px',
                                maxWidth: '27px',
                                maxHeight: '27px'
                            }}
                            classname="card_options"
                        />
                    ))} </div>
                    <div className="card-preco"> R$ {props.product.price.toFixed(2)} </div>
                    <div className="card-title">{props.children} </div>
                    <div className="card-description">{props.product.description_product} </div>
                    <ButtonComp
                        style={{ my: 1, color: 'white', display: 'flex', borderRadius: '4px' }}
                        name="Adicionar" classname="card"
                        onclick={() => dispatch(cartActions.Add(cart, props.product))} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Card;