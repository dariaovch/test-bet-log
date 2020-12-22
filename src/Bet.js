import React from 'react';
import './Bet.css';
import { useSpring, animated } from 'react-spring';

function Bet({ item }){

const [isDropdownOpen, setDropdownOpen] = React.useState(false);

function handleBetClick() {
    setDropdownOpen(!isDropdownOpen)
}

const dropdownOpenConfig = useSpring({
    from: { opacity: .1, scale: 0.8 },
    to: { opacity: isDropdownOpen ? 1 : 0.1, scale: isDropdownOpen ? 1 : 0.8 },
    config: { duration: 250 },
    onRest: () => {
      if (!isDropdownOpen) {
        setDropdownOpen(false);
      }
    } 
  });

//   function getBetsNames(arr) {
//       arr.map((bet) => <p className="bet-log__name" style={{ color: `${bet.color}` }}>{bet.name}</p>)
//
//   }

    return (
    <li className="bet-log__bet">
        <div onClick={handleBetClick} className={item.isWinner? 'bet-log__bet-item bet-log__bet-item_win' : 'bet-log__bet-item'}>
        <div className="bet-log__name-container">
            <p className="bet-log__id">ID {item.id}</p>
            {/* {getBetsNames(item.name)} */}
            <div className="bet-log__bet-container">
            <p className="bet-log__name">{item.name}</p>
            <img className="bet-log__status-icon" src={item.statusIcon} />
            {/* <i className={item.icon}></i> */}
            </div>
        </div>
        
        <div className={item.isWinner? 'bet-log__info-container bet-log__info-container_win' : 'bet-log__info-container'} >
            <p className="bet-log__time">{item.time}</p>
            <div className="bet-log__amount-container">
            <div className="bet-log__sum-container">
                 <p className="bet-log__sum-bet">Bet: {item.sum}</p>
                 <p className="bet-log__sum-paid">Paid: {item.paid}</p>
             </div>
             <p className="bet-log__coef">{item.coef}</p>
             </div>
        </div>
        </div>
        
        {isDropdownOpen && <animated.ul className="bet-log__dropdown" style={dropdownOpenConfig}>
        {item.events.map((item, i) => <li key={i} className="bet-log__dropdown-item">
            <p className="bet-log__time bet-log__time_drop">{item.time}</p>
            <p className="bet-log__name bet-log__name_drop">{item.event}</p>
            <p className="bet-log__sum-paid bet-log__sum-paid_drop">{item.sum}</p>
            <p className="bet-log__coef bet-log__coef_drop">{item.coef}</p>
            <img className="bet-log__status-icon bet-log__status-icon_drop" src={item.icon} />
            </li>)}
            </animated.ul>}
    </li>
    )
}

export default Bet;