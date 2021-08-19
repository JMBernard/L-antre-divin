import React from 'react';
import { Link } from 'react-router-dom';
import imagecentrale from '../assets/open-door2.jpg'
import torch from '../assets/torch.png';
import './HomePage.css';


function HomePage() {
    return (
        <div className="HomePage">
                <div className="image">
                    <img  className="img-home" src={imagecentrale} alt="porte d'entrée" />
                </div>
                <div className="encart encart1">
                    <p className="desc">Bienvenue devant l'Antre Divin.<br/>
                    Après une journée de visite dans l'Olympe, vous voilà
                    bien fatigué ! <br/>
                    Rien de mieux qu'une taverne pour boire un coup et 
                    se reposer ! </p>

                </div>

                <div className="encart encart2">
                    <p className="desc">Mais attention, beaucoup de choses 
                    peuvent se passer derrière cette porte, vous êtes tout 
                    de même sur le territoire des dieux et déesses de l'Olympe
                    Restez sur vos gardes ...</p>
                </div>
                <div className="fronton">
                    L'ANTRE &nbsp;  DIVIN
                </div>
                <div>
                  <img className="torch torch-right" src={torch} alt="torch"/>
                  <img className="torch torch-left" src={torch} alt="torch"/>
                </div>
                <div>
        <Link to='/tavern'>
            <button className="entry-door" alt="yolo" />
        </Link>

      </div>
        
        </div>
     
    )
}

export default HomePage;
