import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import '../style/Room.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules' 
import { ListHotels } from '../helpers/ListHotels'
import { SliderAction } from '../helpers/Slider'

const SliderButton = () =>{
    const Swiper = useSwiper ();
    return (
        <div className="r-button">
            <button onClick={()=>Swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>Swiper.slideNext()}>&gt;</button>
        </div>
    )
}
function Room() {
    return (
        <section className="r-wrapper">
            <div className="r-container">
                <div className="r-head">
                    <p>LES HÔTELS POPULAIRES</p>
                </div>

                <Swiper {...SliderAction}>
                    <SliderButton />
                    {
                        ListHotels.map((listitem, key) => (
                            <SwiperSlide key={key}>
                                <div className="r-card">
                                    <img src={listitem.image} alt="" />

                                    <span className="r-price">
                                        <span style={{ color: "#646cff" }}>€</span>
                                        <span>{listitem.prix}</span>
                                    </span>
                                    <span>{listitem.name}</span>
                                    <span>{listitem.details}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Room
