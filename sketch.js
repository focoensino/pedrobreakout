var tijolos, raquete, bola, estadoJogo, bordas, vidas, pontuacao;

function setup() {
  createCanvas(400, 400);

  estadoJogo = "parado";
  pontuacao = 0;
  vidas = 3;

  montarJogo();
}

function draw() {
  background(0);

  textSize(15);
  fill(255);
  text("Pontuação: " + pontuacao, 40, 25);
  text("Vidas: " + vidas, 300, 25);

  if (estadoJogo == "parado") {
    
 tijolos.setVelocityYEach(0)       
    
    bola.velocity.x = 0;
    bola.velocity.y = 0;
    bola.x = 200;
    bola.y = 250;

// raquete.velocity = 0
// raquete.velocity = 0 
raquete.x = 200    
raquete.y = 350     

    textSize(20);
    text("Pressione ESPAÇO para iniciar", 60, 200);   
    
    
    
      if (keyDown("SPACE"))  {
        
 tijolos.setVelocityYEach(0.2)       
        
    estadoJogo = "play";
    bola.velocityX = -5;
    bola.velocityY = -6;
  }
    
    
    
  }

  
  
  


  if (estadoJogo == "play") {
    
    fimDeJogo()
    
    bola.bounceOff(bordas[0]); 
    bola.bounceOff(bordas[1]);
    bola.bounceOff(bordas[2]); 

if(!tijolos[0]){
  textSize(25)    
text('PARABENS VOCE CONSEGIU!',100, 220)
    
bola.remove()   
raquete.remove()  
  
}    
    
  


    if (keyDown("left")) {
      raquete.velocityX = -10;
    } 
    
    if (keyDown("right")) {
      raquete.velocityX = +10;
    }
    
    
    //raquete.x = bola.x

    raquete.collide(bordas);

    bola.bounceOff(raquete);
    bola.bounceOff(tijolos, remover);
  }
  
  
  

  if (estadoJogo == "gameOver") {
    
   tijolos.setVelocityYEach() 
    
    textSize(30);
    text("GAME OVER", 110, 220);
    bola.remove();
    raquete.remove();
  }
  
  
  

  drawSprites();
}










function fimDeJogo(){
if (bola.y > 400){
vidas = vidas -1
if (vidas <1){
estadoJogo = 'gameOver'
}else{
estadoJogo = 'parado'
}
}
}
function remover(bola, tijolo) {
  tijolo.remove();
  pontuacao += 1;
}

function montarJogo() {
  tijolos = new Group();

  criarLinha(0, "red");
  criarLinha(29, "blue");
  criarLinha(29 + 29, "yellow");
  criarLinha(29 + 29 + 29, "green");

  bordas = createEdgeSprites();

  bola = createSprite(200, 250, 20, 20);
  bola.shapeColor = "white";

  raquete = createSprite(200, 350, 120, 10);
  raquete.shapeColor = "purple";
}

function criarLinha(y, cor) {
  for (let i = 0; i <= 5; i++) {
    let tijolo = createSprite(65 + 54 * i, 50 + y, 50, 25);
    tijolo.shapeColor = cor;
    tijolos.add(tijolo);
  }
}
