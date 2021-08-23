var gameState = 0;
var playerCount = 0;
var player, game, form;
var database;
var canvas;
var bgImg;
var allPlayers;
var distance = 0;

function setup() {
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();
}

function draw() {
  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    clear();
    game.play()
  }
}