import React from 'react';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './index.scss';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';

const Carousel = (props) => {

    let breakPoints = {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
    let slidesPerView = 5
    let module = [Keyboard]
    if (props.indicators) module.push(Pagination)
    if (props.autoplay) module.push(Autoplay)
    if (props.navigation) module.push(Navigation)

    if (props.type === 'Slider') {
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
                navigation={props.navigation}
                breakpoints={breakPoints}
                loop="true"
                pagination={{
                    clickable: true,
                }}
                modules={module}
                className="mySwiper" id={props.type}
            >
                {props.children}
            </Swiper>
        </>
    );
}

export default Carousel;