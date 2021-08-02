import Player from '../player/player';
import Dealer from '../dealer/dealer';
import Cards from '../cards/cards';
import Hit from '../buttons/hit';
import {detectBtn} from '../util/detect_btn';

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        const cards = Cards().shuffledCards;
        this.player = new Player(cards.slice(0, 2));
        this.dealer = new Dealer(cards.slice(2, 4));
        this.cards = cards.slice(4)
        this.hit = new Hit()
    }

     setEventListeners() {
        document.addEventListener('click', e => {
            console.log(e)
            const detectBtnClick = detectBtn(e.pageX, e.pageY - 70, this.hit)
            if(detectBtnClick) {
                this.dealCards()
            }
        })
    }

    loadStatic(ctx) {
        this.setEventListeners()
        this.player.draw(ctx);
        this.dealer.draw(ctx)
        this.hit.draw(ctx);
    }

    dealCards() {
        const newCard = this.cards.shift();
        this.player.addCards(newCard);
        this.player.draw(this.ctx)
    }

    redraw(ctx) {
        this.player.draw(ctx);
        this.dealer.draw(ctx);
        this.hit.draw(ctx);
    }

    draw(ctx) {

    }
}
