
class UI {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y}); 
        this.elapsed = 0;
        this.buttonstate = 0;
        this.button1state = 0;
        this.button2state = 0;
        this.button3state = 0;
        this.taskOpened = false;
        this.spritesheetUI = ASSET_MANAGER.getAsset("./sprites/task_ui.png")
        this.spritesheetHeart = ASSET_MANAGER.getAsset("./sprites/heartspin.png")
        this.spritesheetCarrot = ASSET_MANAGER.getAsset("./sprites/carrots_icon.png")
        this.buttonsheet = ASSET_MANAGER.getAsset("./sprites/buttons.png");
        this.helpbutton = [];
        this.button = [];
        this.button1 = [];
        this.button2 = [];
        this.button3 = [];
        this.animationUI = new Animator(this.spritesheetUI, 0, 0, 400, 464, 1, 0.5, 0, false, true);
        this.button1[0] = new Animator(this.buttonsheet, 269, 314, 22, 22, 1, 0.5, 0, false, true);
        this.button1[1] = new Animator(this.buttonsheet, 295, 314, 22, 22, 1, 0.5, 0, false, true);
        this.button3[0] = new Animator(this.buttonsheet, 269, 290, 22, 22, 1, 0.5, 0, false, true);
        this.button3[1] = new Animator(this.buttonsheet, 295, 290, 22, 22, 1, 0.5, 0, false, true);
        this.button2[0] = new Animator(this.buttonsheet, 269, 362, 22, 22, 1, 0.5, 0, false, true);
        this.button2[1] = new Animator(this.buttonsheet, 295, 362, 22, 22, 1, 0.5, 0, false, true);
        this.button[0] = new Animator(this.buttonsheet, 269, 338, 22, 22, 1, 0.5, 0, false, true);
        this.button[1] = new Animator(this.buttonsheet, 295, 338, 22, 22, 1, 0.5, 0, false, true);
    }

    update() {
        if (this.game.mouse.x > 810 && this.game.mouse.x < 853 && this.game.mouse.y > 12 && this.game.mouse.y < 52) {
            this.button1state = 1;
            if (!this.taskOpened && this.game.click && this.game.click.x > 810 && this.game.click.x < 853 && this.game.click.y > 12 && this.game.click.y < 52) {
                this.taskOpened = true;  
               
            } else if (this.taskOpened && this.game.click && this.game.click.x > 810 && this.game.click.x < 853 && this.game.click.y > 12 && this.game.click.y < 52) {
                this.taskOpened = false;  
            } 
            this.game.click = false;
        } else {
            this.button1state = 0; 
        }

        if (this.game.mouse.x > 862 && this.game.mouse.x < 904 && this.game.mouse.y > 12 && this.game.mouse.y < 52) {
            this.button2state = 1;
            if (this.game.click && this.game.click.x > 862 && this.game.click.x < 904 && this.game.click.y > 12 && this.game.click.y < 52) {
                this.game.scene.title = true; 
                this.game.click = false;
            } 
        } else {
            this.button2state = 0; 
        }

        if (this.game.mouse.x > 911 && this.game.mouse.x < 955 && this.game.mouse.y > 12 && this.game.mouse.y < 52) {
            this.button3state = 1;
            if (this.game.click && this.game.click.x > 911 && this.game.click.x < 955 && this.game.click.y > 12 && this.game.click.y < 52) {
                
               
            } else if (this.game.click && this.game.click.x > 911 && this.game.click.x < 955 && this.game.click.y > 12 && this.game.click.y < 52) {
               
            } 
            this.game.click = false;
        } else {
            this.button3state = 0; 
        }

        if (this.game.mouse.x > 762 && this.game.mouse.x < 803 && this.game.mouse.y > 12 && this.game.mouse.y < 52) {
            this.buttonstate = 1;
            if (this.game.click && this.game.click.x > 762 && this.game.click.x < 803 && this.game.click.y > 12 && this.game.click.y < 52) {
                
               
            } else if (this.game.click && this.game.click.x > 762 && this.game.click.x < 803 && this.game.click.y > 12 && this.game.click.y < 52) {
               
            } 
            this.game.click = false;
        } else {
            this.buttonstate = 0; 
        }

        if (this.game.click && this.game.click.x > 12 && this.game.click.x < 49 && this.game.click.y > 731 && this.game.click.y < 763) {
            this.game.bunny.x = 400;
            this.game.bunny.y = 400;
            this.game.bunny.state = 0;
            this.game.click = false;
        }
        if (this.game.bunny.milkCount >= 5) {

        }
        // if 
    }

    draw(ctx) {
        

        this.button[this.buttonstate].drawFrame(this.game.clockTick, ctx, 760, 10, 2);
        this.button1[this.button1state].drawFrame(this.game.clockTick, ctx, 810, 10, 2);
        this.button3[this.button3state].drawFrame(this.game.clockTick, ctx, 910, 10, 2);
        this.button2[this.button2state].drawFrame(this.game.clockTick, ctx, 860, 10, 2);
     
        if (this.taskOpened) {
            this.animationUI.drawFrame(this.game.clockTick, ctx, 760, 40, 0.5);
            let font = new FontFace("Minecraft", 'url(./sprites/Minecraft.ttf) format("TrueType")');
            font.load().then(function(loadedFont) {
                document.fonts.add(loadedFont);
            }) 
            ctx.font = "16px Minecraft";
            ctx.strokeStyle = '#bd757e';
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText("Collect milk 0/5", 800, 115); //280
            ctx.fillText("Plant carrots 0/5", 800, 138); //280
            ctx.fillText("Collect fruits 0/5", 800, 161); //280
            ctx.fillText("Water flowers 0/5", 800, 184); //280
            ctx.fillText("Take a nap 0/1", 800, 207); //280
            ctx.fillText("Sit near a tree 0/1", 800, 230); //280
        }

        // water plants
        // ctx.fillText("Collect fruits 0/5", 800, 161); //280
    }

}