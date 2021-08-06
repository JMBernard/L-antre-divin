import React from 'react';
import { Link, useState} from 'react-router-dom';
import dionysos from '../assets/gods/dionysos.jpg';
import athéna from '../assets/gods/athéna.jpg';
import fountain from '../assets/fountain.jpg';

import './Bar.css'

function Bar() {
    
    const [showText, setShowText] = useState(false);

    return (
        <div className="Bar">
            <img className="background-fountain" src={fountain} alt="bgPicture"/>
            <div className={showText ?"cards-container" : null}>
                <div className="godscards-bar">
                    <h2>Athéna</h2>
                    <span>Ἀθηνᾶ</span>
                    <img className='godsPictures' src={athéna} alt="athénaPicture"/>
                    <p className="god-description">Déesse de la sagesse, de la raison et de la stratégie guerrière, protectrice d'Athènes,elle oppose la sauvagerie.</p>
                </div>
                <div className="txt-container-bar">
                    <div className="dialogue-bar-left1">
                        <p className='talk'>Attends, mais t'es encore bourré toi ? </p>
                            <div className="left-point-bar"></div>
                    </div>
                    <div className="dialogue-bar-right1">
                        <p className="talk">Pô duTsou enFIn, pOuR qui tmprend ?</p>
                        <div className="right-point-bar"></div>
                    </div>
                    <div className="dialogue-bar-left2">
                        <p className='talk'>Laisse tomber, on dirait Benjamin...</p>
                        <div className="left-point-bar"></div>
                    </div>
                    <div className="dialogue-bar-right2">
                        <p className='talk' >Quissssa ?</p>
                        <div className="right-point-bar"></div>
                    </div>
                    <div className="dialogue-bar-left3">
                        <p className='talk' >Rien, tu connais pas.</p>
                        <div className="left-point-bar"></div>
                    </div>
                    <div className="dialogue-bar-right3">
                        <p className='talk' >DE tsoute fassson t'sais mêMe pAs T'amusEr tOi!</p>
                        <div className="right-point-bar"></div>
                    </div>
                </div>
                <button className="show-btn" 
                    onClick={() => {setShowText(!showText)}}>
                <i class="fas show-text fa-arrow-down"></i>
                </button>
                <Link to='/tavern'>
                    <button className="back-btn-bar">Retourner ce balader</button>
                </Link>
                <div className="godscards-bar">
                    <h2>Dionysos</h2>
                    <span>Διόνυσος</span>
                    <img className='godsPictures' src={dionysos} alt="dyonisosPicture"/>
                    <p className="god-description">Dieu du vin et des fêtes, de la folie. Il est le fils de Zeus et de Sémélé, fille du roi de Thèbes.</p>
                </div>
            </div>
        </div>
    )
}

export default Bar;
