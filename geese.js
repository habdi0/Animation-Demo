class Geese {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Geese.png"), 0, 100, 48, 48, 4, 0.5);

        this.x = -250;
        this.y = 200;
        this.speed = 200;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = -250;
    };

    draw(ctx) { // ctx - the context
        // this.animator.drawFrame(this.game.clockTick, ctx, 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}