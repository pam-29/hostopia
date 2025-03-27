import React from 'react'
import '../style/Footer.css'
import PhotoContact from '../assets/contact.jpg'

function Valeurs() {
    return (
        <div>
            <section className="f-wrapper">
                <div className="f-container">
                    <div className="f-left">
                        <span>Contactez-nous</span>
                        
                        <p> Nous sommes toujours là pour vous offrir le meilleur service. Parce qu’un bon séjour commence par le bon hôtel.
                        </p>
                    </div>

                    <div className="f-right">
                        <div className="image-container">
                            <img src={PhotoContact} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Valeurs
