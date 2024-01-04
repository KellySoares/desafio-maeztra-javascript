import React from 'react';
import { Paper } from '@mui/material'

import ButtonComp from '../button';

import './index.scss';

const CarouselBanners = (props) => {
    return (
        <>
            <Paper sx={{ height: { xs: '320px', md: '600px' } }} >
                <figure className="carousel_banners">
                    <img src={props.item.image} alt={props.item.title} />
                    <div className='carousel_banners-content'>

                        <h2 className='carousel_banners-content_title'>{props.item.title}</h2>
                        <p className='carousel_banners-content_description'>{props.item.description}</p>
                        <ButtonComp
                            key='Conferir'
                            style={{ color: 'white', display: 'flex', borderRadius: { xs: '4px', md: '10px' } }}
                            name='Conferir' classname="banner" />

                    </div>

                </figure>
            </Paper>
        </>


    )
}

export default CarouselBanners;