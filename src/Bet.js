import React from 'react';

function Bet({ item }){

const [isDropdownOpen, setDropdownOpen] = React.useState(false);

function handleBetClick() {
    setDropdownOpen(!isDropdownOpen)
}

    return (
    <li className="bet-log__bet" onClick={handleBetClick}>
        <div className="bet-log__name-container">
            <p className="bet-log__id">ID {item.id}</p>
            <p className="bet-log__name">{item.name}</p>
            <img className="bet-log__status-icon" />
        </div>
        
        <div className="bet-log__info-container">
            <p className="bet-log__time">{item.time}</p>
             <p className="bet-log__sum-paid">Paid: {item.sum}</p>
             <p className="bet-log__coef">{item.coef}</p>
        </div>
             
             {isDropdownOpen && <ul className="bet-log__dropdown">
                 {item.events.map((item) => <li>
                     <p className="bet-log__time">{item.time}</p>
                     <p className="bet-log__name">{item.event}</p>
                     <p className="bet-log__sum-paid">{item.sum}</p>
                     {/* <img className="bet-log__status-icon" /> */}
                     </li>)}
                     </ul>}
        </li>
    )
}

export default Bet;