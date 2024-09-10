import React from 'react';
import { gameContext } from '../gameContext';

export const GameScoreboard=()=>{
    const {games,O,X,draw} = React.useContext(gameContext);
    return (
        <div className='game-scoreboard-component'>
           <h2>Game Scoreboard</h2>
           <table>
                <thead>
                    <tr>
                        <th>Games</th>
                        <th>O Points</th>
                        <th>X Points</th>
                        <th>Draw</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{games}</td>
                        <td>{O}</td>
                        <td>{X}</td>
                        <td>{draw}</td>
                    </tr>
                </tbody>
           </table>
        </div>
    )
};