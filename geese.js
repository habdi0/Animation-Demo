class Geese {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Geese.png"), 0, 0, 48, 48, 3, 0.5);
    };

    update() {

    };

    draw(ctx) { // ctx - the context
        this.animator.drawFrame(this.game.clockTick, ctx, 300, 200);
    };
}