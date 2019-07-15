let x=0;
let y=0;
let h= Math.random(1,700);
let w= Math.random(1,900);
function setup() {
    createCanvas(windowHeight,windowWidth);
}

function draw(){
  mouseDragged();
}

function mouseDragged(){
 ellipse(x,y,w,h);
 rect(x,y,100,100);
}
