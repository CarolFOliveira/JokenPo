let pedra = document.querySelector("#pedra1")
let papel = document.querySelector("#papel1")
let tesoura = document.querySelector("#tesoura1")
let controleImagem = 0;
let imagemAleatoria = 0;
let pontos = 0;
let pontosComputador=0;
let vencedor=false;


function escolhaOponente(){
  if(imagemAleatoria==0){
    image(imagemInicial,300,100,110,110)
  }
  if(imagemAleatoria==1){
    image(imgPedra,300,100,110,110)
  }
  if(imagemAleatoria==2){
    image(imgPapel,300,100,110,110)
  }
  if(imagemAleatoria==3){
    image(imgTesoura,300,100,110,110)
  }

  }

pedra.addEventListener('click',escolheuPedra)
papel.addEventListener('click',escolheuPapel)
tesoura.addEventListener('click',escolheuTesoura)

function escolheuPedra(){
  controleImagem = 1;
  imagemAleatoria = floor(random(1,4))
  return controleImagem
} 
function escolheuPapel(){
  controleImagem = 2;
  imagemAleatoria = floor(random(1,4))
  return controleImagem
} 
function escolheuTesoura(){
  controleImagem = 3;
  imagemAleatoria = floor(random(1,4))
  return controleImagem
} 

function preload(){
  imgPedra = loadImage("imagens/pedra.png")
  imgPapel = loadImage("imagens/papel.png")
  imgTesoura = loadImage("imagens/tesoura.png")
  imagemInicial = loadImage("imagens/ppt.gif")
}

function mostrar(){
  if(controleImagem==0){
    image(imagemInicial,100,100,110,110)
  }
  if(controleImagem==1){
    image(imgPedra,100,100,110,110)
  }
  if(controleImagem==2){
    image(imgPapel,100,100,110,110)
  }
  if(controleImagem==3){
    image(imgTesoura,100,100,110,110)
  }
 
}


function setup() {
  createCanvas(500, 400);
}
function desenharQuadrado(){
  
  stroke("blue")
  textSize(30)
  text("vs",240,150)

}

function draw() {
  background("#31b9eebb");
  mostrar()
  escolhaOponente()
  desenharQuadrado()
  verificar()
  
}

function verificar(){
  if(controleImagem==0 || imagemAleatoria==0){
    fill("blue")
    textSize(24)
    text("Aguardando jogada...",100,350)
  }

    if(controleImagem===imagemAleatoria && controleImagem!==0){
      
      text("Empate",200,350)
    }
   
    if(controleImagem===1 && imagemAleatoria===2){
      
      textSize(20)
      text("Papel envolve a Pedra!!",100,280)
      textSize(24)
      text("Computador venceu!!",100,350)
      
      

    } else if(controleImagem===2 && imagemAleatoria===3){
      textSize(20)
      text("Tesoura corta papel!!",100,280)
      textSize(24)
      text("Computador venceu!!",100,350)
      
      
    }else if(controleImagem===3 && imagemAleatoria===1){
      textSize(20)
      text("Pedra quebra Tesoura!!",100,280)
      textSize(24)
      text("Computador venceu!!",100,350)
   }

   if(controleImagem===2 && imagemAleatoria===1){
  
    textSize(20)
    text("Papel envolve a Pedra!!",100,280)
    textSize(24)
    text("Você venceu!!",100,350)
    
    

  } else if(controleImagem===3 && imagemAleatoria===2){
    textSize(20)
    text("Tesoura corta papel!!",100,280)
    textSize(24)
    text("Você venceu!!",100,350)
    
    
  }else if(controleImagem===1 && imagemAleatoria===3){
    textSize(20)
    text("Pedra quebra Tesoura!!",100,280)
    textSize(24)
    text("Você venceu!!",100,350)
 }
   
}
