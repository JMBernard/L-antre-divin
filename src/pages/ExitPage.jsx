import React from 'react';
import imagecentrale from '../assets/open-door2.jpg';
import './ExitPage.css';

function ExitPage(){
    return(
        <div className="ExitPage">
                <img className="image-exit" src={imagecentrale} alt="porte de sortie" />
           
            <div className="exit-p">
                <p className="sortie">
                    Merci d'avoir visité notre Site <br/><br/>Clément<br/>Jean-Marie<br/>Christophe
                </p>
            </div>

        </div>
    )
}
export default ExitPage;