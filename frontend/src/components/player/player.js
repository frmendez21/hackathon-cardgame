export default class Player{
    constructor(cards) {
        this.cards = cards;
    }

    draw(ctx) {
        ctx.clearRect(0, 500, 1000, 1425);
        ctx.save();
        for(let i = 0; i < this.cards.length; i++) {
             const currHand = new Image();
             currHand.src = `${process.env.PUBLIC_URL}/images/cards/${this.cards[i]}.png`
             currHand.onload = () => {
                 ctx.drawImage(currHand, 550 + (i * 100), 600, 100, 100);
            }
        }
        ctx.restore()
    }

    addCards(card, ctx) {
        this.cards.push(card);
    }
}