import React, {useEffect} from 'react';
import './game.css';
import Game from './game';
import GameView from './game_view';

const GameCanvas = () => {
    useEffect(() => {
      const ctx = document.getElementById('canvas').getContext('2d');
      const game = new Game(ctx);
      const gameView = new GameView(game, ctx)
      gameView.start()
    }, [])
    
    return (
        <canvas id="canvas" height={window.outerHeight - 180} width={window.outerWidth - 15}></canvas>
    )
}

export default GameCanvas;