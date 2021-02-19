const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 

var stand

function setup(){
    var canvas = createCanvas(1200, 400)

    engine = Engine.create();

    world = engine.world;

    //stand = new BaseClass(200, 100, 10, 50, PI/2)
}

function draw(){
    background("green")
    //stand.display()
}
