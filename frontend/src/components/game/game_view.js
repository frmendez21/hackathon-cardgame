export default class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animate = this.animate.bind(this);
    }


    start() {
        this.game.loadStatic(this.ctx)
        requestAnimationFrame(this.animate);
    }

    animate() {
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate)
    }
}