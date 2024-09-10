import React, { useContext } from 'react';
import { GameScoreboard } from './game-scoreboard.component';
import { Game } from './game.component';
import { Clock } from './clock.component';
import { gameContext } from '../gameContext';


export const GameSeries = () => {

    const [gameSeriesState,setGameSeriesState] = React.useState( {
        games: 0,
        X: 0,
        O: 0,
        draw: 0,
        showClock: false,
    })

    const handleGameResult = (winner,shortTimePlayer) => {
        var newState = { ...gameSeriesState };
        if (winner) {
            newState[winner]++;
        }
        else {
            // newState.draw++;
            if(shortTimePlayer === "X"){
                newState.X += 0.5;
                newState.O += 0.25
            }else{
                newState.X += 0.25;
                newState.O += 0.5;
            }
            newState.draw++;

        }
        newState.games++;

        setGameSeriesState(prev => ({ ...prev, ...newState }));

    }

    

    const handleToggle = () => {
        setGameSeriesState( prev => ( {...prev, showClock: !this.state.showClock }))
    }

        return (
            <gameContext.Provider value={{...gameSeriesState,handleGameResult}} >
            <div className='game-series-component'>

                <GameScoreboard  />
                <Game />
            </div>
            </gameContext.Provider>
        )
    
};