export const states = {
    STANDING: 0,
    SKATING: 1,
    // JUMPING: 2,
    // FALLING: 3,
    // ATTACK: 4,
    // JUMPING_ATTACK: 5,
    // DIZZY: 6,
}
class State {
    constructor(state){
        this.state = state;
    }
};
export class Standing extends State {
    constructor(player){
        super('STANDING');
        this.player = player;
    };
    enter(){
        this.player.frameY = 1;
        this.player.speed = 0;
        this.player.maxFrame = 0;
    };
    handleInput(input){
        if(input === 'ArrowRight'){
            this.player.setState(states.SKATING);
        };
    };
};
export class Skating extends State {
    constructor(player){
        super('SKATING');
        this.player = player;
    };
    enter(){
        this.player.frameY = 0;
        this.player.speed = 20;
        this.player.maxFrame = 5;
    };
    handleInput(input){
       
    };
};