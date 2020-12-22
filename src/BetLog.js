import React from 'react';
import './BetLog.css';
import Bet from './Bet.js';
import { betsArr } from './initial-array.js';
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
    //         className='bet-log__scroll-box-track'
    //         style={{ ...style, width: 3 }}
    //         {...props} />
    //     );
    //   };
    
    //   const renderTrackHorizontal = ({ style, ...props }) => {
    //     return (
    //       <div
    //         style={{ display: 'none' }}
    //         {...props}
    //       />
    //     );
    //   };

    // const renderThumb = ({ style, ...props }) => {
    //     const thumbStyle = {
    //       borderRadius: 5,
    //       backgroundColor: '#364D59',
    //       width: 4,
    //       height: 96,
    //     };
    //     return <div style={{ ...style, ...thumbStyle }} {...props} />;
    //   };
      
      const CustomScrollbars = props => (
        <Scrollbars
        //   renderThumbHorizontal={renderThumb}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        // renderThumb={renderThumb}
        // renderTrack={renderTrack}
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