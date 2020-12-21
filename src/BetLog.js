import React from 'react';
import Bet from './Bet.js';
import { betsArr } from './initial-array.js';

function BetLog() {

const [data, setData] = React.useState([]);

React.useEffect(() => {
    setData(betsArr)
}, [betsArr]);

  return (
    <div className="bet-log">
        <h2 className="bet-log__heading">Bets</h2>
        <ul className="bet-log__list">
        {betsArr.map((item => <Bet item={item} key={item.id} />))}
        </ul>
    </div>
  );
}

export default BetLog;