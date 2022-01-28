var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/bunny_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/background_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/chimmey_smoke.png");
ASSET_MANAGER.queueDownload("./sprites/fire.png");
ASSET_MANAGER.queueDownload("./sprites/piggy.png");
ASSET_MANAGER.queueDownload("./sprites/cow_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/mailbox_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/speech_bubble.png");
ASSET_MANAGER.queueDownload("./sprites/bun_interface.png");
ASSET_MANAGER.queueDownload("./sprites/back_interface.png");
ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;
	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	gameEngine.init(ctx);
	gameEngine.addEntity(new SceneManager(gameEngine));
	gameEngine.start();
});
