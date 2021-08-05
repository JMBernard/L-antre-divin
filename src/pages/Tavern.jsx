import tavern from '../assets/tavern.png'

import './Tavern.css'

function ExitPage(){
    <link rel="stylesheet" href="ExitPage" />
}

function Tavern() {
    return (
        <div className='Tavern'>
            <img className='background-tavern' src={tavern} alt=""/>
            <i class="fas bar-interaction fa-exclamation-circle"></i>
           

            <i class="fas fountain-interaction fa-exclamation-circle"></i>
            <i class="fas table-interaction fa-exclamation-circle"></i>
            <button className="Exit" onClick={ExitPage}>EXIT</button>
        </div>
        
    )
}

export default Tavern;
