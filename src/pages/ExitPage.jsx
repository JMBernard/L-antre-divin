import React from 'react';
import imagecentrale from '../assets/open-door2.jpg';
import './ExitPage.css';

function ExitPage(){
    return(
        <div className="ExitPage">
            <div className="image">
                <img clasName="img-home" src={imagecentrale} alt="porte de sortie" />
            </div>
            <div className="exit">
                <p className="sortie">
                    Merci d'avoir visité notre Site <br/> <br/>Clément<br/>Jean-Marie<br/>Christophe
                </p>
            </div>

        </div>
    )
}
export default ExitPage;