import { Standing, Skating } from "./state.js";
export default class Player {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new Standing(this), new Skating(this)];
        this.currentState = this.states[0];//trùng vị trí ban đầu của nvat
        this.image = document.getElementById('bartImage');
        this.width = 89;
        this.height = 467/6;
        this.x = this.gameWidth/2 - this.width/2;
        this.y = this.gameHeight - this.height;
        // this.maxFrame = 6;
        this.frameX = 0;
        this.frameY = 0;
        // this.vy = 0;
        // this.weight = 1;
        // this.speed = 0;
        // this.maxSpeed = 10;
        // this.fps = 60;
        // this.frameTimer = 0;
        // this.timeInterval = 1000/this.fps;
    }
    update(input){
        this.currentState.handleInput(input);
    }  
    draw(context){
        context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}