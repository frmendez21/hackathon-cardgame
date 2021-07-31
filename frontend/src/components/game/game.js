import * as Phaser from 'phaser';
import Cards from '../cards/cards';
import './game.css';
import AiPlayer from '../ai_player/ai_player';
import Player
 from '../player/player';
class Game {

    play() {
        let {shuffledCards} = Cards()
        let playerCards = shuffledCards.slice(0, 5);
        let aiCards = shuffledCards.slice(5, 10);
        shuffledCards = shuffledCards.slice(10)
        AiPlayer(aiCards)
        Player(playerCards)

        const canvas = document.querySelector('.canvas')
        const config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight - 60,
            parent: canvas,
            scene: {
                preload: preload,
                create: create, 
                update: update
            }
        };

        const game = new Phaser.Game(config);

        function preload () {
            this.load.baseURL = `${process.env.PUBLIC_URL}/images`
            this.load.image('background', `/bg.jpeg`);
            this.load.image('hand1', `/cards/${playerCards[0]}.png`)
            this.load.image('hand2', `/cards/${playerCards[1]}.png`)
            this.load.image('hand3', `/cards/${playerCards[2]}.png`)
            this.load.image('hand4', `/cards/${playerCards[3]}.png`)
            this.load.image('hand5', `/cards/${playerCards[4]}.png`)
        }

        function create (){
            let background = this.add.image(40, 0, 'background').setOrigin(0, 0);
            background.setScale(.75)
            const hand1 = this.add.sprite((window.innerWidth / 2) - 200, window.innerHeight - 150, 'hand1').setScale(.25).setInteractive();
            const hand2 = this.add.sprite((window.innerWidth / 2) - 100, window.innerHeight - 150, 'hand2').setScale(.25).setInteractive();
            const hand3 = this.add.sprite((window.innerWidth / 2), window.innerHeight - 150, 'hand3').setScale(.25).setInteractive();
            const hand4 = this.add.sprite((window.innerWidth / 2) + 100, window.innerHeight - 150, 'hand4').setScale(.25).setInteractive();
            const hand5 = this.add.sprite((window.innerWidth / 2) + 200, window.innerHeight - 150, 'hand5').setScale(.25).setInteractive();
            this.input.setDraggable(hand1)
            this.input.setDraggable(hand2)
            this.input.setDraggable(hand3)
            this.input.setDraggable(hand4)
            this.input.setDraggable(hand5)
            this.input.on('drag', (pointer, gameObject, dragX, dragY)  => {
                gameObject.x = dragX;
                gameObject.y = dragY;
            })
        }

        function update () {

        };
    }
}

export default Game;


