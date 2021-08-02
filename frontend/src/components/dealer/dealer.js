export default class Dealer {
    constructor(cards) {
        this.cards = cards;
    }

    draw(ctx) {
        ctx.save();
        for(let i = 0; i < this.cards.length; i++) {
             const currHand = new Image();

             const size = i === this.cards.length - 1 ? 110 : 150;
             const y = i === this.cards.length - 1 ? 170 : 160;

             currHand.src = i === this.cards.length - 1 ? `${process.env.PUBLIC_URL}/images/cards/${this.cards[i]}.png` : `${process.env.PUBLIC_URL}/images/cards/back.png`

             currHand.onload = () => {
                 ctx.drawImage(currHand, 550 + (i * 120), y, size, size);
            }
        }

        ctx.restore()
    }
}