const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bunny;
var minkV1;
var linguadegato;
var aculpaedobolsonaro;
var minkV2;
var laka;
var ovoazul;
var minkV3;
var budhadespertada;
var onzenabanheira;
var bob;
var maxquandoperdeuaon;
var naomeestressa, quebrandoossos, criseexistencial, sucrilhosebomdemais, criancaquandochorapqobalaosaiuvoando;
var sacolavoadora;
var amemamusicaparou;

function preload(){
  minkV2 = loadAnimation("marsha_2.png");
  laka = loadImage("fabrica.jpg");
  ovoazul = loadImage("Ovo.png");
  bob = loadAnimation("marsha_comendo_2.png");
  maxquandoperdeuaon = loadAnimation("marsha_bolada_2.png");
  naomeestressa = loadSound("marshamusical.mp3");
  quebrandoossos = loadSound("rope_cut.mp3");
  criseexistencial = loadSound("sad.wav");
  sucrilhosebomdemais = loadSound("eating_sound.mp3");
  criancaquandochorapqobalaosaiuvoando = loadSound("air.wav");
}

function setup() 
{
  createCanvas(500,700);
  naomeestressa.play();
  naomeestressa.setVolume(0.2);
  engine = Engine.create();
  world = engine.world;
  bob.frameDelay = 15;
  bunny = new Bunny(200, 690, 600, 20);
  minkV1 = new Rope(8, {
  x:245,
  y:30
  });
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)
  linguadegato = Bodies.circle(300,300,15);
  Matter.Composite.add(minkV1.body, linguadegato);
  aculpaedobolsonaro= new Coelhopretoextremamentepreto(minkV1, linguadegato);
  minkV3 = createSprite(420,640,100,100);
  minkV3.scale = 0.25;
  minkV3.addAnimation("marshasendomarsha", minkV2);
  minkV3.addAnimation("comendo", bob);
  minkV3.addAnimation("maxquandoperdeuaon", maxquandoperdeuaon);
  minkV3.changeAnimation("marshasendomarsha");
  budhadespertada = createImg("cut_button.png");
  budhadespertada.position(220, 30);
  budhadespertada.size(50, 50);
  budhadespertada.mouseClicked(fenix);
  sacolavoadora = createImg("balloon.png");
  sacolavoadora.position(10, 250);
  sacolavoadora.size(150, 100);
  sacolavoadora.mouseClicked(climaensolarado);
  amemamusicaparou = createImg("mute.png");
  amemamusicaparou.position(450, 20);
  amemamusicaparou.size(50, 50);
  amemamusicaparou.mouseClicked(climachuvoso);
}

function draw() 
{
  background(51);
  image(laka,width/2,height/2,500,700);
  Engine.update(engine);
  minkV1.showdaoliviarodrigo();
  bunny.eletric();
  if(linguadegato !== null){
  image(ovoazul,linguadegato.position.x, linguadegato.position.y, 40,55);
  }
  if(maxelucas(linguadegato,minkV3)=== true){
  minkV3.scale=0.4;
    minkV3.changeAnimation("comendo");
  sucrilhosebomdemais.play();
  sucrilhosebomdemais.setVolume(10);
  }
  if(linguadegato !== null && linguadegato.position.y >= 650){
  minkV3.scale=0.6;
    minkV3.changeAnimation("maxquandoperdeuaon");
  linguadegato = null;
  naomeestressa.stop();
  criseexistencial.play();
  criseexistencial.setVolume(0.9);
  }
  drawSprites();
}

function fenix(){
minkV1.aarteeumaexplosao();
aculpaedobolsonaro.budha();
aculpaedobolsonaro = null;
quebrandoossos.play();
quebrandoossos.setVolume(5);
} 

function maxelucas(body,sprite){
if(body !== null){
var eueainternet = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
if(eueainternet <= 80){
World.remove(engine.world, linguadegato);
linguadegato = null;
return true;
}else{
return false;
}
}
}

function climaensolarado(){
  Matter.Body.applyForce(linguadegato, {x:0, y:0}, {x:0.01, y:0});
  criancaquandochorapqobalaosaiuvoando.play();
  criancaquandochorapqobalaosaiuvoando.setVolume(0.3);
}

function climachuvoso(){
  if(naomeestressa.isPlaying()){
  naomeestressa.stop();
  }else{
  naomeestressa.play();
  }
}