const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Geese.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d"); // context
	ctx.imageSmoothingEnabled = false;
	
	gameEngine.addEntity(new Geese(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
