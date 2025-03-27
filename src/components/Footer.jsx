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

                        <div className='formulaire'>
                            <form action="">
                                <div>
                                    <label>Nom</label>
                                    <input type="text" name='name' required/>
                                </div>

                                <div>
                                    <label>E-mail</label>
                                    <input type="text" name='mail' required />
                                </div>

                                <div>
                                    <label>Message</label>
                                    <textarea name="message" id="" required></textarea>
                                </div>

                                <button>Envoyer</button>
                            </form>
                        </div>
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
