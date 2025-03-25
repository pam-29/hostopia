import React from 'react'
import Logo from '../assets/Logo.svg'
import '../style/Header.css'

function Header() {
    return (
            <section className="h-wrapper">
                <div className="h-container">
                    <img src={Logo} alt="Logo" width={100} />

                    <div className="h-menu">
                        <a href="">Hôtels</a>
                        <a href="">Nos valeurs</a>
                        <a href="">Nous joindre</a>
                        <a href="">Commencez</a>

                        <button>
                        <a href="">Contact</a>
                        </button>
                    </div>
                </div>
            </section>

            
    )
}

export default Header



