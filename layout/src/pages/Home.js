import React from 'react';
import { useSelector } from "react-redux";
import { SwiperSlide } from 'swiper/react';
import useProducts from "../hooks/products-hooks";

import Banner from "../components/banner";
import NewsLetter from '../components/newsLetter';
import TipBar from '../components/tipBar';

import CarouselBanners from '../components/carouselBanners';
import Card from '../components/card';

import Carousel from '../components/carousel';

import { Box } from '@mui/material';

import ImageMarca1 from "../assets/images/partners/marca1.svg";
import ImageMarca2 from "../assets/images/partners/marca2.svg";
import ImageMarca3 from "../assets/images/partners/marca3.svg";
import ImageMarca4 from "../assets/images/partners/marca4.svg";
import ImageMarca5 from "../assets/images/partners/marca5.svg";

import IconProdutosImportados from "../assets/images/icons/produtos_importados.png";
import IconEstoqueBrasil from "../assets/images/icons/estoque_brasil.png";
import IconTrocaGratis from "../assets/images/icons/troca_gratis.png";
import IconDesconto from "../assets/images/icons/desconto.png";
import IconFreteGratis from "../assets/images/icons/frete_gratis.svg";
import ModalComp from '../components/modal';


const partners = [
    { 'title': 'partners', image: ImageMarca1 },
    { 'title': 'partners', image: ImageMarca2 },
    { 'title': 'partners', image: ImageMarca3 },
    { 'title': 'partners', image: ImageMarca4 },
    { 'title': 'partners', image: ImageMarca5 }];

const whyBuy = [{ 'title': 'Produtos importados', 'description': 'Produto de Alta Qualidade', icon: IconProdutosImportados },
{ 'title': 'Estoque no Brazil', 'description': 'Produtos mais perto de você!', icon: IconEstoqueBrasil },
{ 'title': 'Trocas Garantidas', 'description': 'Trocas em até 48 horas, vejas as regras', icon: IconTrocaGratis },
{ 'title': 'Ganhe 5% off', 'description': 'Pagando à vista no Cartão', icon: IconDesconto },
{ 'title': 'Frete Grátis', 'description': 'Em compras acima de R$ 499,00', icon: IconFreteGratis }];


const bannerStatic = {
    image: `${process.env.PUBLIC_URL}/images/banner/banner_static.png`,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien."
}

const HomePage = () => {
    const fullBanner = useSelector(state => state.fullBanner)

    const { prodState } = useProducts();

    return (<>
        <ModalComp />
        <Carousel indicators={true} autoplay={true} navigation={true} type='Banner'>{fullBanner.map((item, i) => {
            return (
                <SwiperSlide key={i} className='Banner'>
                    <CarouselBanners item={item} />
                </SwiperSlide>
            )
        })}</Carousel>
        <section>
            <TipBar style={{ fontSize: '16px', color: '#353535', fontWeight: 700, lineHeight: '24.34px' }} title="Por que comprar na Maeztra?" >
                {whyBuy.map((item, index) => (
                    <Box key={index} sx={{ gap: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#EFEFEF', width: '258px', padding: '15px 25px', borderRadius: '4px' }} className='tipbar-box' >
                        <img src={item.icon} alt={item.title} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }} >
                            <p className='tipbar-box-text'>{item.title}</p>
                            <p className='tipbar-box-description'>{item.description}</p>
                        </Box>
                    </Box>
                ))}
            </TipBar>
            <TipBar style={{ fontSize: { xs: '24px', md: '32px' }, color: '#353535', fontWeight: 700, lineHeight: '49px' }} title="Marcas Parceiras">
                {partners.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', width: '308px', borderRadius: '4px' }} className='tipbar-box' >
                        <img src={item.image} alt={item.title} className='tipbar-box-image' />
                    </Box>
                ))}
            </TipBar>
        </section >
        <section>
            <Box sx={{ margin: '2em 0 1em', fontSize: { xs: '24px', md: '32px' }, color: '#353535', fontWeight: 700, lineHeight: '49px' }} >As Mais Pedidas</Box>
            {prodState ? <Carousel indicators={false} autoplay={false} navigation={true} type='Slider'>
                {prodState.products.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className='Slider'>
                            <Card key={item.id_product} product={item}>
                                {item.name_product}
                            </Card>
                        </SwiperSlide>

                    )
                })}
            </Carousel> : ''}
        </section>
        <section className="flex flex-col gap-5 h-full w-full bg-gray-200 py-5 px-0 md:px-3 box-border">
            <Banner info={bannerStatic} />
        </section>

        <NewsLetter />



    </>

    )
}

export default HomePage;