class Geese {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Geese.png"), 0, 100, 48, 48, 4, 0.5);

        this.x = 0;
        this.y = 0;
        this.speed = 25;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
    };

    draw(ctx) { // ctx - the context
        // this.animator.drawFrame(this.game.clockTick, ctx, 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}