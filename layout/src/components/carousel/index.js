import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Paper } from '@mui/material'

import ButtonComp from '../button';
import Card from '../card';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './index.scss';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';

function Item(props) {
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

export default function Carousel({ itens, indicators, type, autoplay }) {
    let breakPoints = {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
    let slidesPerView = 5
    let module = [Keyboard, Navigation]
    if (indicators) module.push(Pagination)
    if (autoplay) module.push(Autoplay)

    if (type === 'Slider') {
        breakPoints = {
            640: {
                slidesPerView: slidesPerView - 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: slidesPerView - 2,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: slidesPerView - 1,
                spaceBetween: 20,
            },
            1919: {

                slidesPerView: slidesPerView,
                spaceBetween: 20,
            },
        }
    }
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#000',
                    '--swiper-pagination-color': '#000',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                centeredSlides={false}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                navigation={true}
                breakpoints={breakPoints}
                loop="true"
                pagination={{
                    clickable: true,
                }}
                modules={module}
                className="mySwiper" id={type}
            >

                {type === 'Slider' ? itens.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Card key={item.id_product} product={item}>
                                {item.name_product}
                            </Card>
                        </SwiperSlide>
                    )
                }) :
                    itens.map((item, i) => {
                        return (
                            <SwiperSlide key={i} className={type}>
                                <Item item={item} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}
