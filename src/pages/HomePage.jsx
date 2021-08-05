import React from 'react';
import imagecentrale from '../assets/open-door2.jpg'
import './HomePage.css';


function HomePage() {
    return (
        <div className="HomePage">
                <div className="image">
                    <img  className="img-home" src={imagecentrale} alt="porte d'entrée" />
                </div>
                <div className="encart encart1">
                    <p className="desc">Bienvenue devant l'Antre Divin
Après une journée de visite dans l'Olympe, vous voilà bien fatigué ! 
Rien de mieux qu'une taverne pour boire un coup et se reposer ! </p>
                </div>
                <div className="encart encart2">
                    <p className="desc">Mais attention,
beaucoup de choses peuvent se passer derrière cette porte, 
vous êtes tout de même sur le territoire des dieux et déesses de l'Olympe
Restez sur vos gardes ...</p>
                </div>
                <div>
        <a className="entry-door" href="./" alt="yolo" />
      </div>
        
        </div>
     
    )
}

export default HomePage;

