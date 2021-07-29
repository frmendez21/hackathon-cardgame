import React, {useEffect} from 'react';
import * as Phaser from 'phaser';
import './game.css';

const GameCanvas = () => {
    useEffect(() => {
        const canvas = document.querySelector('.canvas')
        const config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight - 60,
            parent: canvas,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: preload,
                create: create, 
                update: update
            }
        };

        const game = new Phaser.Game(config);

        function preload () {
            this.load.image('background', `${process.env.PUBLIC_URL}/images/bg.jpeg`)
        }

        function create (){
            let background = this.add.image(40, 0, 'background').setOrigin(0, 0);
            background.setScale(.75)
        }

        function update () {

        };

    }, [])
    return (
        <div className="canvas"></div>
    )
}

export default GameCanvas;