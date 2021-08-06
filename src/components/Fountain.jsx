import React from 'react';
import { Link } from 'react-router-dom';
import zeus from '../assets/gods/zeus2.jpg';
import poseidon from '../assets/gods/poseidon.jpg';
import fountain from '../assets/fountain.jpg';

import './Fountain.css'

function Fountain() {    
    return (
        <div className="Fountain">
            <img className="background-fountain" src={fountain} alt="bgPicture"/>
            <div className="cards-container">
                <div className="godscards">
                    <h2>Zeus</h2>
                    <span>Ζεύς</span>
                    <img className='godsPictures' src={zeus} alt="zeusPicture"/>
                    <p className="god-description">Père des dieux et des hommes. Il est le dieu des dieux.</p>
                </div>
                <div className="txt-container">
                    <div className="dialogue-left1">
                        <p className='talk'>Wesh bien ou bien fréro ?</p>
                        <div className="left-point"></div>
                    </div>
                    <div className="dialogue-right1">
                        <p>Tranquille et toi ?</p>
                        <div className="right-point"></div>
                    </div>
                    <div className="dialogue-left2">
                        <p className='talk'>Nickel ! Tu as déjà eu un coup de foudre toi ?</p>
                        <div className="left-point"></div>
                    </div>
                    <div className="dialogue-right2">
                        <p className='talk' >Non jamais pourquoi ?</p>
                        <div className="right-point"></div>
                    </div>
                    <div className="dialogue-left3">
                        <p className='talk' >Parce qu'avec moi, c'est généralement suivis d'un coup de rein</p>
                        <div className="left-point"></div>
                    </div>
                    <div className="dialogue-right3">
                        <p className='talk' >HAHAHA T'es con fréro !!</p>
                        <div className="right-point"></div>
                    </div>
                </div>
                <Link to='/tavern'>
                    <button className="back-btn" >Retourner ce balader</button>
                </Link>
                <div className="godscards">
                    <h2>Poséidon</h2>
                    <span>Ποσειδῶν</span>
                    <img className='godsPictures' src={poseidon} alt="poseidonPicture"/>
                    <p className="god-description">Dieu de la mer et des chevaux. Fils de Cronos et Rhéa.</p>
                </div>
            </div>           
        </div>
    )
}

export default Fountain;