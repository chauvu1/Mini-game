
class UI {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y}); 
        this.elapsed = 0;
        this.buttonstate = 0;
        this.button1state = 0;
        this.button2state = 0;
        this.button3state = 0;
        this.taskOpened = true;
        this.messageOpened = false;
        this.spritesheetUI = ASSET_MANAGER.getAsset("./sprites/task_ui.png")
        this.spritesheetHeart = ASSET_MANAGER.getAsset("./sprites/heartspin.png")
        this.spritesheetCarrot = ASSET_MANAGER.getAsset("./sprites/carrots_icon.png")
        this.buttonsheet = ASSET_MANAGER.getAsset("./sprites/buttons.png");
        this.titleMusicStart = false;
        this.font = new FontFace("Minecraft", 'url(./sprites/Minecraft.ttf) format("TrueType")');
        this.font.load().then(function(loadedFont) {
            document.fonts.add(loadedFont);
        }) 

        this.helpbutton = [];
        this.elapsedTime = 0;
        this.minute = 0;
        this.stopTimer = false;
        this.tasksCompleted = false;
        this.tasksCompletedDisplay = false;
        this.taskCompletedAnim = new Animator (this.buttonsheet, 368, 48, 284, 56, 1, 1, 0, false, true);

        this.closeButtonEnabled = false;
        this.closeButtonPressed = false;
        this.button = [];
        this.button1 = [];
        this.button2 = [];
        this.button3 = [];

        this.closeButton = [];
        this.closeButtonState= 0;
        this.closeButton[0] = new Animator (this.buttonsheet, 368, 128, 16, 16, 1, 1, 0,false,true);
        this.closeButton[1] = new Animator (this.buttonsheet, 384, 128, 16, 16, 1, 1, 0,false,true);

        this.taskUI = new Animator(this.spritesheetUI, 0, 0, 416, 562, 1, 0.5, 0, false, true);
        this.messageUI = new Animator(this.spritesheetUI, 496, 112, 402, 291, 1, 0.5, 0, false, true);

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
                this.button1state = 1;
                this.taskOpened = false;  
            } 
            this.game.click = false;
        } else {
            this.button1state = 0; 
        }
        
        if (this.taskOpened) {
            this.button1state = 1;
        }
        if (this.messageOpened && this.game.click && this.game.click.x > 632 && this.game.click.x < 655 && this.game.click.y > 250 && this.game.click.y < 274) {
            this.messageOpened = false;
        }

        if (this.game.mouse.x > 862 && this.game.mouse.x < 904 && this.game.mouse.y > 12 && this.game.mouse.y < 52) {
            this.button2state = 1;
            if (this.game.click && this.game.click.x > 862 && this.game.click.x < 904 && this.game.click.y > 12 && this.game.click.y < 52) {
                this.game.scene.title = true; 
                this.titleMusicStart = true;
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
            if (!this.messageOpened && this.game.click && this.game.click.x > 762 && this.game.click.x < 803 && this.game.click.y > 12 && this.game.click.y < 52) {
                this.messageOpened = true;
               
            } else if (this.messageOpened && this.game.click && this.game.click.x > 762 && this.game.click.x < 803 && this.game.click.y > 12 && this.game.click.y < 52) {
                this.messageOpened = false;
                this.buttonstate = 1;
            } 
            this.game.click = false;
        } else {
            this.buttonstate = 0; 
        }

        if (this.messageOpened) {
            this.buttonstate = 1;
        }

        if (this.game.click && this.game.click.x > 12 && this.game.click.x < 49 && this.game.click.y > 731 && this.game.click.y < 763) {
            this.game.bunny.x = 400;
            this.game.bunny.y = 400;
            this.game.click = false;
        }

        if (this.game.mouse.x > 753 && this.game.mouse.x < 768 && this.game.mouse.y > 342 && this.game.mouse.y < 356 && this.closeButtonEnabled) {
            this.closeButtonState = 1;
            if (this.tasksCompleted && this.game.click && this.game.click.x > 753 && this.game.click.x < 768 && this.game.click.y > 342 && this.game.click.y < 356 && this.closeButtonEnabled) {
                this.closeButtonPressed = true;
            }
        } else {
            this.closeButtonState = 0;
        }
    }

    startTimer() {
        if (!this.stopTimer) {
            this.elapsedTime += this.game.clockTick; 
            if (Math.round(this.elapsedTime) == 60) {
                this.minute += this.elapsedTime / 60;
                this.elapsedTime = 0;
            }
        }
    }

    draw(ctx) { 
        ctx.font = "32px Minecraft";
        this.button[this.buttonstate].drawFrame(this.game.clockTick, ctx, 760, 10, 2);
        this.button1[this.button1state].drawFrame(this.game.clockTick, ctx, 810, 10, 2);
        this.button3[this.button3state].drawFrame(this.game.clockTick, ctx, 910, 10, 2);
        this.button2[this.button2state].drawFrame(this.game.clockTick, ctx, 860, 10, 2);
      
        ctx.strokeStyle = '#f3f4e7';
        ctx.fillStyle = ctx.strokeStyle;

        if (!this.game.title.title) {
            this.startTimer();
            ctx.fillText(Math.round(this.minute) + ":" + Math.round(this.elapsedTime), 675, 41); //timer 
        }
      
        ctx.font = "16px Minecraft";
        if (this.messageOpened) {

            this.messageUI.drawFrame(this.game.clockTick, ctx, PARAMS.CANVAS_WIDTH / 2 - 402 /2, PARAMS.CANVAS_HEIGHT / 2 - 291/2, 1);
            ctx.strokeStyle = '#bd757e';
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText("A message for you :)", 315, 314); //280
            ctx.fillText("Thank you for playing!", 335, 354); //280
            ctx.fillText("I hope you have fun", 335, 394); //280
            ctx.fillText("Credits:", 315, 434); //280
            ctx.fillText("Asset pack: Sprout Lands @CUP NOOBLE ", 315, 510); //280
            ctx.fillText("Song: Oneul - Morning peppermint", 315, 460); //280
            ctx.fillText("Link: Oneul https://youtu.be/Ek62F18l_To", 315, 480); //280
            
        }

        if (this.taskOpened) { 
            this.taskUI.drawFrame(this.game.clockTick, ctx, 750, 40, 0.5);    
            ctx.strokeStyle = '#bd757e';
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText("Collect milk " + this.game.bunny.milkCount + "/5", 790, 115); //280
            ctx.fillText("Plant carrots " + this.game.bunny.carrotPlantedCount + "/5", 790, 138);
            ctx.fillText("Harvest carrots " + this.game.bunny.carrotCollectedCount + "/5", 790, 161); //280
            ctx.fillText("Water flowers " + this.game.bunny.waterFlowerCount + "/5", 790, 184); //280
            ctx.fillText("Take a nap " + this.game.bunny.sleepCount + "/1", 790, 207); //280
            ctx.fillText("Fill water tray " + this.game.bunny.WaterTrayCount + "/1", 790, 230); //280
            ctx.fillText("Have a picnic " + this.game.bunny.picnicCount + "/1", 790, 253); //280
         
            // ctx.fillText("Have a picnic 0/1", 800, 230); //280

            if (this.game.bunny.milkCount >= 5) {
                ctx.strokeStyle = '#9da89a';
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillText("Collect milk " + this.game.bunny.milkCount + "/5", 790, 115); //280
            } 
            if (this.game.bunny.carrotPlantedCount>= 5) {
                ctx.strokeStyle = '#9da89a';
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillText("Plant carrots " + this.game.bunny.carrotPlantedCount + "/5", 790, 138);
            } 
            if (this.game.bunny.waterFlowerCount >= 5) {
                ctx.strokeStyle = '#9da89a';
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillText("Water flowers " + this.game.bunny.waterFlowerCount + "/5", 790, 184); //280
            }
            if (this.game.bunny.carrotCollectedCount>= 5) {
                ctx.strokeStyle = '#9da89a';
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillText("Harvest carrots " + this.game.bunny.carrotCollectedCount + "/5", 790, 161); //280
            } 
            if (this.game.bunny.sleepCount>= 1) {
                ctx.strokeStyle = '#9da89a';
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillText("Take a nap " + this.game.bunny.sleepCount + "/1", 790, 207); //280
            }
            if (this.game.bunny.WaterTrayCount>= 1) {  
                ctx.strokeStyle = '#9da89a';
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillText("Fill water tray " + this.game.bunny.WaterTrayCount + "/1", 790, 230); //280
            }
            if (this.game.bunny.picnicCount >= 1) {
                ctx.strokeStyle = '#9da89a';
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillText("Have a picnic " + this.game.bunny.picnicCount + "/1", 790, 253); //280
            }
        }
    
        if (this.game.bunny.picnicCount >= 1 && this.game.bunny.WaterTrayCount>= 1 
            && this.game.bunny.sleepCount>= 1 && this.game.bunny.carrotCollectedCount>= 5 
            && this.game.bunny.waterFlowerCount >= 5 && this.game.bunny.carrotPlantedCount>= 5 
            &&this.game.bunny.milkCount >= 5 
            && !this.tasksCompletedDisplay && !this.closeButtonPressed) { // if it didnt display, and task is finished, task is completed
            this.stopTimer = true;
            this.tasksCompleted = true;  
            this.taskCompletedAnim.drawFrame(this.game.clockTick, ctx, 200, 330, 2); 
            this.closeButtonEnabled = true;   
            this.closeButton[this.closeButtonState].drawFrame(this.game.clockTick, ctx, 744, 332, 2);   
        } 
        if (this.closeButtonPressed) {   
            this.tasksCompletedDisplay = true;
        }
    }

}