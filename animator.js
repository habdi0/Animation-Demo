class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});
    
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        // when we call this in, we'll tell how long it's been since the last time
        // we called it. take the tick duration, increment the elapsed time, use the
        // elapsed time to calculate what frame to draw, and then, draw the frame with
        // the calculated values down below

        this.elapsedTime += tick;

        // how to keep the goose walking, make sure keep drawing after current frame elapses
        if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;

        const frame = this.currentFrame();

        // draw in this context and canvas
        ctx.drawImage(this.spritesheet,
            // source X and source Y, where on the spritesheet we want to draw from
            this.xStart + this.width*frame, this.yStart,
            this.width, this.height, // source width & height, how big of the frame are we grabbing from the spritesheet
            x, y, // destination X & /Y, where on the canvas will we be drawing
            this.width*8, this.height*8 // destination width & height, how big we want to draw that as well
            )
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
}