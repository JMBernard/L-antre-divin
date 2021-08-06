import React from 'react';
import  { Link } from 'react-router-dom';
import hermes from '../assets/gods/hermes.jpg';
import bedroomBg from '../assets/bedroomBg.jpg'

import './Bedroom.css'

function Bedroom() {
    return (
        <div className='Bedroom'>
            <img className="background-fountain" src={bedroomBg} alt="bgPicture"/>
            <div className="cards-container">
                <div className="godscards-bedroom">
                    <h2>Hermès</h2>
                    <span>Ἑρμῆς</span>
                    <img className='godsPictures' src={hermes} alt="hermesPicture"/>
                    <p className="god-description">Dieu du mouvement, des voleurs, du commerce et des voyageurs. Messager des dieux.</p>
                </div>
                <div className="txt-container-bedroom">
                    <div className="dialogue-bedroom-left1" >
                        <p className='talk'>Qu'est ce que tu fais là toi ?</p>
                            <div className="left-point-bar"></div>
                    </div>
                    <div className="dialogue-bedroom-left2">
                        <p className='talk'>J'ai trouvé cette chambre en premier, je prends tout ok ??</p>
                        <div className="left-point-bar"></div>
                    </div>
                    <div className="dialogue-bedroom-left3">
                        <p className='talk' >Allez, casse-toi maintenant !</p>
                        <div className="left-point-bar"></div>
                    </div>
                </div>
                <Link to='/tavern'>
                    <button className="back-btn-bedroom">Retourner ce balader</button>
                </Link>
                <div className="godscards-bedroom">
                </div>
            </div>
        </div>
    )
}

export default Bedroom;
