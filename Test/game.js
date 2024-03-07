
let player, player2, player3;
let ground;
let platform1, platform2, platform3;


function setup() {
  const canvas = new Canvas(1000, 600);
  canvas.parent("game");

  world.gravity.y = 20;

  ground = new Sprite();
  ground.x = 500;
  ground.y = 590;
  ground.width = 1000;
  ground.height = 20;
  ground.color = "rgb(0, 100, 250)";
  ground.collider = "static";
  ground.friction = 0.1;


  player = new Player("Cristian", "Owlet", 300, 400);
  player2 = new Player("Simon", "Dude", 400, 400);
  player3 = new Player("Anonym2009", "Pink", 500, 400);

}

function draw() {
  background(0, 150, 250);

  player.rotation = 0;
  player.showName();
  player2.showName();
  player3.showName();

  if(kb.presses("up")) {
    player.changeAni(["jump", "idle"])
    player.velocity.y = -10;
    player.ani.frameDelay = 9;
  }
  else if (kb.presses("f")) {
    player.changeAni(["atk-1", "idle"]);
  } 
  else if (kb.presses("g")) {
    player.changeAni(["atk-2", "idle"]);
  }

  if(player.ani.name !== "atk-1" && player.ani.name !== "atk-2") {

    if(kb.pressing("shift") && kb.pressing("left")) {
      player.mirror.x = true;
      player.vel.x = -10;

      if(player.ani.name !== "jump") {
        player.changeAni("run");
      }

    }
    else if(kb.pressing("shift") && kb.pressing("right")) {
      player.mirror.x = false;
      player.vel.x = 10;
      
      if(player.ani.name !== "jump") {
        player.changeAni("run");
      }

    }
    else if (kb.pressing('left')) {
      player.mirror.x = true;
      player.vel.x = -5;

      if(player.ani.name !== "jump") {
        player.changeAni("walk");
      }

    } 
    else if (kb.pressing('right')) {
      player.mirror.x = false;
      player.vel.x = 5;

      if(player.ani.name !== "jump") {
        player.changeAni("walk");
      }

    } 
    else {

      if(player.ani.name !== "jump") {
        player.changeAni("idle");
      }

    }

  }



}
