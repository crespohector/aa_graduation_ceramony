class Ceremony {
    constructor(ctx, graduates, currentStudent = 0) {
        this.ctx = ctx;
        this.graduates = graduates;
        this.currentStudent = currentStudent;
        this.potatSpriteSheet = new Image();
        this.stage = new Image();
        this.audienceChairs = new Image();
        this.diploma = new Image();
        this.aalogo = new Image();

        this.potatSpriteSheet.src = "./dist/assets/potat-sprite-sheet.png";
        this.stage.src = './dist/assets/pixel_art_stage.png';
        this.audienceChairs.src = "./dist/assets/theatre_chairs.png";
        this.diploma.src = "./dist/assets/diploma.png";
        this.aalogo.src = "./dist/assets/logo.png";
    }

    constructStage() {
        let waitingSprite = [750, 0];
        let spriteSize = [375, 500];

        this.interval = setInterval(() => {
            this.ctx.drawImage(this.stage, 20, 50, 850, 300);
            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70);
            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130);
            this.ctx.drawImage(this.potatSpriteSheet,
                waitingSprite[0], waitingSprite[1],
                spriteSize[0], spriteSize[1],
                80, 245,
                // spriteSize[0], spriteSize[1])
                80, 80);
                // clearInterval(this.interval)
        },100);
    }

    nextStudentMoves(button) {
        button.disabled = true;
        this.graduates[this.currentStudent].moveAcrossScreen(this, button);
        this.currentStudent += 1;
    }


}

export default Ceremony;