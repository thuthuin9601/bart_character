export default class InputHandler{
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', (e) => {
            if(e.key === "ArrowDown" || 
               e.key === "ArrowUp" ||
               e.key === "ArrowLeft" ||
               e.key === "Shift" ||
               e.key === "ArrowRight"  &&
               this.keys.indexOf(e.key) === -1 ){//1 tạo 1 lần key
                this.keys.push(e.key);
            }
            // console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', (e) => {
            if(e.key === "ArrowDown" || 
               e.key === "ArrowUp" ||
               e.key === "ArrowLeft" ||
               e.key === "Shift" ||
               e.key === "ArrowRight"){
                this.keys.splice(this.keys.indexOf(e.key), this.keys.length);
            }
            // console.log(e.key, this.keys);
        });
    }
}