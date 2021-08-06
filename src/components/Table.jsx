import React from 'react';
import { Link } from 'react-router-dom';
import aphrodite from '../assets/gods/aphrodite.jpg';
import apollon from '../assets/gods/apollon.jpg';
import fountain from '../assets/fountain.jpg'

import './Table.css'

function Table() {
    return (
        <div className="Table">
            <img className="background-fountain" src={fountain} alt="bgPicture"/>
            <div className="cards-container">
                <div className="godscards-table">
                    <h2>Apollon</h2>
                    <span>Ἀπόλλων</span>
                    <img className='godsPictures' src={apollon} alt="apollonPicture"/>
                    <p className="god-description">Dieu du Soleil, de la musique, de l'archerie, de la prophétie et de la guérison.</p>
                </div>
                <div className="txt-container">
                    <div className="dialogue-table-left1">
                        <p className='talk'>Hey Aphrodite, t'as vu mes muscles ?</p>
                        <div className="left-point-table"></div>
                    </div>
                    <div className="dialogue-table-right1">
                        <p className="talk">Wouaw, et moi regarde mes cheveux !</p>
                        <div className="right-point-table"></div>
                    </div>
                    <div className="dialogue-table-left2">
                        <p className='talk'>Ouai c'est cool, mais t'as vu mon six packs ou quoi ? </p>
                        <div className="left-point-table"></div>
                    </div>
                    <div className="dialogue-table-right2">
                        <p className='talk' >Moi regarde mes ongles, c'est canon nan ?</p>
                        <div className="right-point-table"></div>
                    </div>
                    <div className="dialogue-table-left3">
                        <p className='talk' >Euh ouai pas mal... Tu veux voir comment je tire loin ?</p>
                        <div className="left-point-table"></div>
                    </div>
                    <div className="dialogue-table-right3">
                        <p className='talk' >Bof, ça te dit on fait des Tik Tok plutôt ?</p>
                        <div className="right-point-table"></div>
                    </div>
                </div>
                <Link to='/tavern'>
                    <button className="back-btn" >Retourner ce balader</button>
                </Link>
                <div className="godscards-table">
                    <h2>Aphrodite</h2>
                    <span>Ἀφροδίτη</span>
                    <img className='godsPictures' src={aphrodite} alt="aphroditePicture"/>
                    <p className="god-description">Déesse de l'amour, de la beauté et de la séduction.</p>
                </div>
            </div>
        </div>
    )
}

export default Table;
