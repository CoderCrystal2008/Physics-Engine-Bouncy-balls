const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball_2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //stops ground from moving
    var ground_options ={
        isStatic: true
    }

    //makes ball bounce
    var ball_options ={
        restitution: 1,
        density:2
    }

    //gives the properties of ball_2
    var ball_2_options ={
        restitution:1,
        density:2

    }
    //creates the ground
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    //creates the ball
    ball = Bodies.circle(100,200,50,ball_options);
    World.add(world,ball);

    //creates the ball_2
    ball_2 = Bodies.circle(200,200,10,ball_2_options);
    World.add(world,ball_2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("green");
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    fill("purple");
    ellipse(ball.position.x,ball.position.y,50,50);
    fill("blue");
    ellipse(ball_2.position.x,ball_2.position.y,10,10);
}