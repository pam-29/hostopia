import React from 'react'
import Logo from '../assets/Logo.svg'
import '../style/Header.css'


function Header() {
    return (
            <section className="h-wrapper">
                <div className="h-container">
                    <img src={Logo} alt="Logo" width={100} />

                    <div className="h-menu">
                        <a href="#accueil">Accueil</a>
                        <a href="#hotels">Hôtels</a>
                        <a href="#value">Nos valeurs</a>
                        <a href="#contact">Nous joindre</a>

                        <button>
                        <a href="">Contact</a>
                        </button>
                    </div>
                </div>
            </section>

            
    )
}

export default Header



