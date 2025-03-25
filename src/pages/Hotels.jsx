import React from 'react'
import '../style/Hotel.css'
import Metro from '../assets/metro.png'
import Horizon from '../assets/horizon.png'
import Golden from '../assets/golden.png'
import Summer from '../assets/summer.png'

function Hotels() {
    return (
        <section className="hotel-wrapper">
            <div className="hotel-container">
                <img src={Metro} alt="" />
                <img src={Horizon} alt="" />
                <img src={Golden} alt="" />
                <img src={Summer} alt="" />
            </div>
        </section>
    )
}

export default Hotels
