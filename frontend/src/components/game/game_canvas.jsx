import React, {useEffect} from 'react';
import './game.css';
import Game from './game';
const GameCanvas = () => {
    useEffect(() => {
        const game = new Game();
        game.play()
    }, [])
    
    return (
        <div className="canvas"></div>
    )
}

export default GameCanvas;