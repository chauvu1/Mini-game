var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/bunny_spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/title_screen.png");
ASSET_MANAGER.queueDownload("./sprites/emotes.png");
ASSET_MANAGER.queueDownload("./sprites/speech_bubble.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Wooden House.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Paths.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/STONE PATH.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Fences.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Grass.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Tilled Dirt.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Water tray.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Barn structures.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Building parts/Basic Furniture.png");
ASSET_MANAGER.queueDownload("./sprites/characters/Premium Charakter Spritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Water.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/Hills.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Farming Plants.png");
ASSET_MANAGER.queueDownload("./sprites/objects/signs.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Piknik blanket.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Piknik basket.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Water well.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Boats.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Milk and grass item Simple.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Milk and grass item.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Milk animation.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Water Objects.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Trees, stumps and bushes.png");
ASSET_MANAGER.queueDownload("./sprites/objects/Mushrooms, Flowers, Stones.png");
ASSET_MANAGER.queueDownload("./sprites/characters/Animal SpriteSheets/baby cow/baby pink cow animations sprites.png");
ASSET_MANAGER.queueDownload("./sprites/characters/Animal SpriteSheets/cow/Pink cow animation sprites.png");
ASSET_MANAGER.queueDownload("./sprites/characters/Animal SpriteSheets/cow/Light cow animation sprites.png");
ASSET_MANAGER.queueDownload("./sprites/characters/Animal SpriteSheets/cow/Brown cow animation sprites.png");
ASSET_MANAGER.queueDownload("./sprites/characters/Animal SpriteSheets/cow/Purple cow animation sprites.png");
ASSET_MANAGER.queueDownload("./sprites/tilesets/background.png");  
ASSET_MANAGER.queueDownload("./sprites/bunny_icon.png")
ASSET_MANAGER.queueDownload("./sprites/buttons.png")
ASSET_MANAGER.queueDownload("./sprites/title_clouds.png")
ASSET_MANAGER.queueDownload("./sprites/heartspin.png")
ASSET_MANAGER.queueDownload("./sprites/task_ui.png")
ASSET_MANAGER.queueDownload("./sprites/carrots_icon.png")

ASSET_MANAGER.queueDownload("./music/Oneul - Morning Peppermint.mp3")

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");
	ASSET_MANAGER.autoRepeat("./music/Oneul - Morning Peppermint.mp3");
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;
	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	gameEngine.init(ctx);
	gameEngine.addEntity(new SceneManager(gameEngine));
	gameEngine.start();
});
