// Enemies our player must avoid
class Coords {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}
class Enemy extends Coords{
    constructor(x,y, speed){
      super(x,y);
      this.speed = speed;
      this.sprite = "images/enemy-bug.png"
    }
    render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update (){
      this.startNew();
      this.x += 1*this.speed;

    }
    startNew(){
      if(this.x > 500){
        this.x = -60
      }
    }
}

class Player extends Coords{
    constructor(x,y){
      super(x,y);
        this.sprite = "images/char-boy.png"
    }

    update(){

    }
    render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
    }
    handleInput (key) {
      if(key === 'up'){
          if (this.y > 20){
            this.y -= 90;
          }
        } else if (key ==="down"){
          if (this.y<400) {
                this.y += 90;
              }
        } else if(key === "right"){
          if (this.x<400){
            this.x +=100;
          }
        } else if (key === "left"){
          if(this.x > 20){
            this.x -= 100;
          }
        }
  }
}



const player = new Player(200,403);
const enemy1 = new Enemy(20,65,1.5);
const enemy2 = new Enemy(0, 150,3);
const enemy3 = new Enemy(60, 230,2);
const allEnemies = [enemy1, enemy2, enemy3];


// This listens for key presses and sends the keys to your handleInput
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
