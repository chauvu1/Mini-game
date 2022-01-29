var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/bunny_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/background_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/chimmey_smoke.png");
ASSET_MANAGER.queueDownload("./sprites/fire.png");
ASSET_MANAGER.queueDownload("./sprites/cow_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/mailbox_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/speech_bubble.png");
ASSET_MANAGER.queueDownload("./sprites/bun_interface.png");
ASSET_MANAGER.queueDownload("./sprites/back_interface.png");
ASSET_MANAGER.queueDownload("./sprites/chick_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Wooden House.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Paths.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/STONE PATH.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Fences.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Grass.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Tilled Dirt.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Water.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Hills.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Farming Plants.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Boats.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Milk and grass item Simple.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Milk and grass item.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Water Objects.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Trees, stumps and bushes.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Mushrooms, Flowers, Stones.png");
ASSET_MANAGER.queueDownload("./sprites/characters/Animal SpriteSheets/baby cow/baby pink cow animations sprites.png");
ASSET_MANAGER.queueDownload("./sprites/characters/Animal SpriteSheets/cow/Pink cow animation sprites.png");

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
