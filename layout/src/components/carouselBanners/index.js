import React from 'react';
import { Paper } from '@mui/material'

import ButtonComp from '../button';

import './index.scss';

const CarouselBanners = (props) => {
    return (
        <>
            <Paper sx={{ maxHeight: { xs: '320px', md: '600px' } }} >
                <figure id="container">
                    <img src={props.item.image} alt={props.item.title} />
                    <figcaption>
                        <h2 className='title'>{props.item.title}</h2>
                        <p className='description'>{props.item.description}</p>
                        <ButtonComp
                            key='Conferir'
                            style={{ color: 'white', display: 'flex', borderRadius: { xs: '4px', md: '10px' } }}
                            name='Conferir' classname="banner" />
                    </figcaption>
                </figure>
            </Paper>
        </>


    )
}

export default CarouselBanners;