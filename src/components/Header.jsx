import React, {useState} from 'react'
import Logo from '../assets/Logo.svg'
import '../style/Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseFill } from 'react-icons/ri'


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


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

                    <div>
                        <div className='hambergerMenu'>
                            {isMenuOpen ? 
                                (<RiCloseFill size={40} oonClick={() => setIsMenuOpen(!isMenuOpen)}/>) : 
                                (<GiHamburgerMenu size={40} onClick={() => setIsMenuOpen(!isMenuOpen)}/>)
                            } 
                        </div>

                        {isMenuOpen &&(

                            <div className="h-menu-mobile">
                                <a href="#accueil">Accueil</a>
                                <a href="#hotels">Hôtels</a>
                                <a href="#value">Nos valeurs</a>
                                <a href="#contact">Nous joindre</a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            
    )
}

export default Header



