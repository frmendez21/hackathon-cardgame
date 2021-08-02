export default class Hit {
    constructor() {
        this.x = 25;
        this.y = 25;
        this.w = 100;
        this.h = 50;
    }
    draw(ctx) {
        const button = new Image();
        button.src = `${process.env.PUBLIC_URL}/images/button_hit.png`
        button.onload = () => {
            ctx.drawImage(button, this.x, this.y, this.w, this.h)
        }
    }
}