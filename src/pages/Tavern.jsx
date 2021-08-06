import tavern from '../assets/tavern.png';
import { Link } from 'react-router-dom';

import './Tavern.css'

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
            </Link>
            <Link to='/'>
            <i class="fas table-interaction fa-exclamation-circle"></i>
            </Link>
            <Link to='/bedroom'>
            <i class="fas bedroom-interaction fa-exclamation-circle"></i>
            </Link>
            <Link to='/exit'>
            <i class="fas fa-door-open"></i>
            </Link>

        </div>
        
    )
}

export default Tavern;