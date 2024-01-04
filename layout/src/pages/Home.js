import React from 'react';
import { useSelector } from "react-redux";

import useProducts from "../hooks/products-hooks";

import Banner from "../components/banner";
import Carousel from "../components/carousel";
import NewsLetter from '../components/newsLetter';


const HomePage = () => {
    console.log(process.env)
    const fullBanner = useSelector(state => state.fullBanner)

    const bannerStatic = {
        image: `${process.env.PUBLIC_URL}/images/banner/banner_static.png`,
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien."
    }

    const { prodState } = useProducts();

    return (<>
        <Carousel itens={fullBanner} indicators={true} autoplay={true} type='Banner' />
        <section>

        </section>
        <section>
            {prodState ? <Carousel itens={prodState.products} indicators={false} autoplay={false} type='Slider' /> : ''}
        </section>
        <section className="flex flex-col gap-5 h-full w-full bg-gray-200 py-5 px-0 md:px-3 box-border">
            <Banner info={bannerStatic} />
        </section>
        
            <NewsLetter />
        


    </>

    )
}

export default HomePage;