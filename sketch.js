var drum;
var flute;
var gong;
var bells;

var x = 0;


function preload() {
  drum = loadSound('audio/drum.wav');
  flute = loadSound('audio/flute_tremolo.wav');
  gong = loadSound('audio/gong.wav');
  bells = loadSound('audio/tibetan_bells.wav');
}

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
}

function draw() {
  background(0, 20);

  //drum
  var drumTime = map(drum.currentTime(), 0, drum.duration(), 0, width);
  // console.log(drum.duration() /2);
  if(drum.currentTime() > 0.01 && drum.currentTime() < drum.duration() * 1/8){
    rect(0, 0, width, height);
  } else if(drum.currentTime() > drum.duration() / 2 && drum.currentTime() < drum.duration() * 5/8) {
    rect(0, 0, width, height);
  }
  
  
  //flute
  var fluteTime = map(flute.currentTime(), 0, flute.duration(), 0, width);
  
  if(flute.isPlaying()){
    x+= frameCount * 0.01;
  } else{
    x = 0;
  }
  push();
  translate(width / 2, height / 2);
  // for(var angle = 0; angle<=720; angle++){
    var y = sin(radians(x) * 10);
    // var y = (angle) * 200;
    
    push();
    // rotate(-PI/2);
    push();
    translate(x, y * 20);
    ellipse(0, 0, 10, 10);
    pop();
    pop()
    
    push();
    rotate(PI/2);
    push();
    translate(x, y * 20);
    ellipse(0, 0, 10, 10);
    pop();
    pop();
  // }
    push();
    rotate(-PI);
    push();
    translate(x, y * 20);
    ellipse(0, 0, 10, 10);
    pop();
    pop();
    
    push();
    rotate(-PI/2);
    push();
    translate(x, y * 20);
    ellipse(0, 0, 10, 10);
    pop();
    pop()
  pop();


  //gong
  var gongTime = map(gong.currentTime(), 0, gong.duration(), 0, width);
  push();
  translate(width / 2, height / 2);
  push();
  translate(gongTime, gongTime);
  // rotate(gongTime);
  ellipse(0, 0, gongTime, gongTime);
  pop();

  push();
  translate(-gongTime, gongTime);
  // rotate(gongTime);
  ellipse(0, 0, gongTime, gongTime);
  pop();

  push();
  translate(-gongTime, -gongTime);
  // rotate(gongTime);
  ellipse(0, 0, gongTime, gongTime);
  pop();

  push();
  translate(gongTime, -gongTime);
  // rotate(gongTime);
  ellipse(0, 0, gongTime, gongTime);
  pop();
  pop();

  //bells
  var bellsTime = map(bells.currentTime(), 0, bells.duration(), 0, 2.8 * width);
  push();
  translate(-100, 100);
  push();
  translate(bellsTime, bellsTime);
  rotate(bellsTime * 2);
  rect(0, 0, 100, 100);
  pop();
  push();
  translate(bellsTime, bellsTime);
  rotate(bellsTime * 2);
  rect(-100, -100, 100, 100);
  pop();
  pop();

  var bellsTime = map(bells.currentTime(), 0, bells.duration(), 0, 2.8 * width);
  push();
  translate(width * 2, height * 1.5);
  push();
  translate(-bellsTime, -bellsTime);
  rotate(bellsTime * 2);
  rect(0, 0, 100, 100);
  pop();
  push();
  translate(-bellsTime, -bellsTime);
  rotate(bellsTime * 2);
  rect(-100, -100, 100, 100);
  pop();
  pop();
}

function keyTyped() {
  if (key == 'a') {
    drum.play();
  }
  if (key == 's') {
    flute.play();
  }
  if (key == 'd') {
    gong.play();
  }
  if (key == 'f') {
    bells.play();
  }
}
