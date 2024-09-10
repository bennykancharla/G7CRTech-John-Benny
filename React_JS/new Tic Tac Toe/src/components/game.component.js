import React from 'react';
import { Status } from './status-component.component';
import { GameBoard } from './game-board.component';
//import { RestartButton } from './restart-button.component';
import { GameMoves } from './game-moves.component';
import { TicTacToeGame } from '../services/tic-tac-toe-game.service';
import { Timer } from './timer.component';
import { If } from './if.component';
import { PlayButton } from './play-button.component';

import { gameContext } from '../gameContext';

export const Game = () =>  {
    const {handleGameResult} = React.useContext(gameContext);

        let game = new TicTacToeGame();

        const fetchGameState =() =>  {
            let state = {
                ...game,
                next: game.currentPlayer,
                isOver: game.isOver,
                winningPlayer: game.winningPlayer,
                isStalemate: game.isStalemate,
                timers: {
                    O: 0,
                    X: 0,
                }
            };
            if (game.winner) {
                state.message = `'${game.winningPlayer}' Wins`
            } else if (game.isStalemate)
                state.message = `Stalemate`
            else
                state.message = `Next Player '${game.currentPlayer}'`;
            return state;
        }

        
        const timers_v = {
            O: React.createRef(),
            X: React.createRef()
        }

        const [gameState,setGameState] = React.useState({
           ...fetchGameState(),
           running:false,
            reset: false,
           XTime: 0,
           OTime: 0 
        })
        // this.state = this.fetchGameState;
        // //console.log('this.state',this.state);
        // this.state.running = false;
        // this.state.reset = false;
        // this.state.XTime = 0;
        // this.state.OTime = 0;
      
    
   


   const  handleMove = (id) => {
    const {OTime,XTime} = gameState;
        if (game.move(id) === false)
            return;

        // this.setState({
        //     ...this.fetchGameState,
        // });
        setGameState(prev => ({...prev, ...fetchGameState()}))

        if (game.isOver) {
            // console.log("X Time", this.state.XTime);
            // console.log("O Time", this.state.OTime);
            let shortTimePlayer = OTime < XTime ? "O" : "X";
            handleGameResult(game.winningPlayer, shortTimePlayer);
            // this.setState({ running: false });
            setGameState(prev => ({...prev, running:false}));
        }
    }
   const handlePlay = () => {
        timers_v.O.current.reset();
        timers_v.X.current.reset();
        game = new TicTacToeGame();
        // this.setState({
        //     ...this.fetchGameState,
        //     running: true,
        //     reset: true,
        // });
        setGameState(prev => ({...prev,...fetchGameState(),running:true,reset:true}));
    }
    //obselete code
    const __reStart = () => {
        console.log('restarting');
        game = new TicTacToeGame();
        // this.setState({
        //     ...this.fetchGameState,
        //     running: true,
        // });
        setGameState(prev => ({...prev, ...fetchGameState(),running:true}));
    }
    const handleReset = () => {
        // this.setState({ reset: false })
        setGameState(prev => ({...prev,reset:false}))
    }
   const  handlePause = (name, value) => {
        let timers = { ...timers_v };
        timers[name] = value;
        // this.setState({ timers });
        setGameState(prev => ({...prev,timers}));
    }
  const   getOTime = (ms) => {
        // console.log("O Time", ms)
        // this.setState({ OTime: ms })
        setGameState(prev => ({...prev,OTime:ms}))
    }
  const  getXTime = (ms) => {
        // console.log("X Time", ms);
        // this.setState({ XTime: ms });
        setGameState(prev => ({...prev,XTime:ms}))
    }
    
        return (
            <div className='body'>
                <div className='game-component'>
                    <Status
                        message={gameState.message}
                    />
                    <PlayButton onClick={handlePlay} disabled={gameState.running} />
                    <div className="same-row">
                        <GameBoard
                            winner={gameState.winner}
                            cells={gameState.cells}
                            onCellClick={handleMove}
                        />
                        <div>
                            <div className='timers same-row'>
                                <Timer
                                    ref={timers_v.O}
                                    hideControls={true}
                                    getTime={getOTime}
                                    running={gameState.next === 'O' && gameState.running}
                                    name="O"
                                    onPause={handlePause}
                                    reset={gameState.reset}
                                    onReset={handleReset}
                                />
                                <Timer
                                    ref={timers_v.X}
                                    running={gameState.next === 'X' && gameState.running}
                                    getTime={getXTime}
                                    hideControls name="X"
                                    onPause={handlePause}
                                    reset={gameState.reset}
                                    onReset={handleReset}
                                />
                            </div>
                            <GameMoves
                                moves={gameState.moves}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    



    // handleMove_v1 = (id) => {


    //     //Phase #1 Update state about current move
    //     //Phase #1.1 Update cells
    //     let updatedCells = [...this.state.cells]; //create an exact copy of current cells
    //     updatedCells[id] = this.state.next; //update the cell for currnt box

    //     this.setState({ cells: updatedCells }); //call setState
    //     let player = this.state.next;


    //     //Phase #1.2. Add current move to move list
    //     this.moveCount++;
    //     let moves = [
    //         ...this.state.moves,
    //         {
    //             moveCount: this.moveCount,
    //             position: id,
    //             player
    //         }
    //     ];
    //     this.setState({ moves })

    //     //Phase #2 Prepare for the next move
    //     //Phase #2.1 chose next player
    //     let next = player === 'O' ? 'X' : 'O'; //toggle next for future
    //     this.setState({ next });

    //     //Phase #2.2 update status about next
    //     let message = `Next Move: "${next}"`;
    //     this.setState({ message: message });
    // }
}


