import React from 'react'
import '../style/Valeurs.css'

function Valeurs() {
    return (
        <section className="v-wrapper">
            <div className="v-container">
                <h1>Nos Valeurs</h1>
                <div>
                    <h2>Authenticité et Qualité</h2>
                        <p>Nous sélectionnons des hôtels qui offrent une expérience unique et un service de qualité irréprochable.</p>
                </div>

                <div>
                    <h2>Transparence et Confiance</h2>
                        <p>Des prix clairs, des avis authentiques et une communication transparente entre voyageurs et hôteliers.</p>
                </div>

                <div>
                    <h2>Expérience Client Personnalisé</h2>
                        <p>Recommandations sur mesure et options adaptées aux besoins de chaque voyageur.</p>
                </div>
            </div>
        </section>
    )
}

export default Valeurs
