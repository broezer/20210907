function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  var w = width * 2;
  var h = height * 2;
  
  translate(-w/4, -h/4);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('purple');
    //rectMode(CENTER);
    ellipse(w/2,h/2, i);
  }
  
  translate(w/200, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('brown');
    //rectMode(CENTER);
    ellipse(w/2,h/2, i);
  }
  
  translate(-w/100, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('cyan');
    //rectMode(CENTER);
    ellipse(w/2,h/2, i);
  }
  
  noLoop();
  
  save("20210907.png");
  
}
