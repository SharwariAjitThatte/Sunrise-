const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {

    getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world
}

function draw(){
    Engine.update(engine);
}

async function getTime(){

    // write code to fetch time from API
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson = await response.json();
    console.log(responsejson);

     //write code slice the datetime
     var datetime = responsejson.datetime;
     console.log(datetime);

     var hour = datetime.slice(11,13);
     console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 04 && hour <=6){
        bg = "sunrise1.png"
    }else if(hour >= 06 && hour <= 08){
        bg = "sunrise2.png"
    }else if(hour >= 23 && hour == 0){
        bg = "sunrise10.png"
    }else if(hour == 0 && hour <= 03){
        bg = "sunset11.png"
    }else{
        bg = "sunset12.png"
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
