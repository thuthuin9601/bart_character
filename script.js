import Player from './player.js';
import InputHandler from './input.js'
window.addEventListener('load', function(){
    // const loading = this.document.getElementById('loading');
    // loading.style.display = 'none';
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    
    let input = new InputHandler();
    let lastTime = 0;
    
    function animate(timeStamp){
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // console.log(input.keys);
        player.update(input.keys[0]);
        player.draw(ctx, deltaTime);
        requestAnimationFrame(animate);
    }
    animate(0);
});