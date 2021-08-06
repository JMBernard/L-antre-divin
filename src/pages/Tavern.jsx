import tavern from '../assets/tavern.png';
import { Link } from 'react-router-dom';

import './Tavern.css'

function ExitPage(){
    <link rel="stylesheet" href="ExitPage" />
}

function Tavern() {
    return (
        <div className='Tavern'>
            <img className='background-tavern' src={tavern} alt=""/>
            <Link to='/bar'>
            <i class="fas bar-interaction fa-exclamation-circle"></i>
            </Link>
            <Link to='/fountain'>
            <i class="fas fountain-interaction fa-exclamation-circle"></i>
            </Link>
            <Link to='/table'>
            <i class="fas table-interaction fa-exclamation-circle"></i>
           <a className="sortie" href="http://localhost:3001/exit"><button className="Exit" onClick={ExitPage}>EXIT</button></a> 
            </Link>

        </div>
        
    )
}

export default Tavern;
