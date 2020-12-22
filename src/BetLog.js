import React from 'react';
import './BetLog.css';
import Bet from './Bet.js';
import { betsArr } from './db/initial-array.js';
import { Scrollbars } from 'react-custom-scrollbars';

function BetLog() {

    const renderView = ({ style, ...props }) => {
        return (
          <div
            className='bet-log__scroll-box'
            style={{ ...style, overflowX: 'hidden' }}
            {...props}
          />
        );
      };
    
      const renderThumb = ({ style, ...props }) => {
        return (
          <div
            className='bet-log__scroll-thumb'
            style={{ ...style }}
            {...props} />
        );
      };
    
    //   const renderTrack = ({ style, ...props }) => {
    //     return (
    //       <div
    //         className='bet-log__scroll-track'
    //         style={{ ...style, width: 3 }}
    //         {...props} />
    //     );
    //   };
      
      const CustomScrollbars = props => (
        <Scrollbars
          renderThumbVertical={renderThumb}
          renderView={renderView}
        //   renderTrack={renderTrack}
          {...props}
        />);

  return (
    <div className="bet-log">
        <CustomScrollbars>
        <h2 className="bet-log__heading">Bets</h2>
        <ul className="bet-log__list">
        {betsArr.map((item => <Bet item={item} key={item.id} />))}
        </ul>
        </CustomScrollbars>
        </div>
  );
}

export default BetLog;