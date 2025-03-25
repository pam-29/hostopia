import React from 'react'
import '../style/Hero.css'
import Hotel from '../assets/hotel.jpg'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

function Hero() {
    return (
        <div>
            <section className="hero-wrapper">
                <div className="hero-container">
                    <div className="hero-left">
                        <div className="hero-title">
                            <div className="orange-circle"></div>
                            <h1>Découvrez <br /> le Charme <br /> et le Confort Absolu</h1>
                        </div>

                        <div className="hero-des">
                            <p>Trouvez facilement l’hôtel idéal pour vous, sans aucune difficulté !</p>
                        </div>

                        <div className="search-bar">
                            <HiLocationMarker color="#267BF1" size={25} />
                            <input type="text" />
                            <button className="button">Rechercher</button>
                        </div>

                        <div className="stats">
                            <div className="stat">
                                <span>
                                    <CountUp start={2950} end={3000} duration={4}/>
                                    <span>+</span>
                                </span>
                                <span>Hotels</span>
                            </div>
                            <div className="stat">
                                <span>
                                    <CountUp start={40} end={45} duration={4}/>
                                    <span>+</span>
                                </span>
                                <span>Clients heureux</span>
                            </div>
                            <div className="stat">
                                <span>
                                    <CountUp end={3.5} decimals={1}/>
                                </span>
                                <span>Avis</span>
                            </div>
                        </div>
                    </div>


                    {/*right side*/}
                    <div className="hero-right">
                        <div className="image-container">
                            <img src={Hotel} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero