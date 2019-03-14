var x= 150
var y= 500

function setup() {}

function draw() {
  createCanvas(1425,750)
  background(153)
  livingroom()

}
function livingroom() {
  tv()
  windows()
  chair()
  person()
}
function tv() {
// the tv
fill(191, 191, 191)
rect(1315, 350, 50, 200)
// the stand
fill(102, 51, 0)
rect(1224, 550, 200, 200)
// the remote
remote()
}
function remote() {
fill(0,0,0)
rect(1224, 530, 55, 20)
}
function picture() {
// right
fill(0,0,0)
rect(60, 20, 150, 200)
// left
fill(0,0,0)
rect(1200, 20, 150, 200)
}
function windows() {
picture()
// top left
fill(255,255,255)
rect(550, 100, 125, 125)
// top right
fill(255,255,255)
rect(675, 100, 125, 125)
//bottom left
fill(255,255,255)
rect(550, 225, 125, 125)
//bottom
fill(255,255,255)
rect(675, 225, 125, 125)
}
function chair() {
//back
fill(0,0,0)
rect(0,500,100,450)
// butt
fill(0,0,0)
rect(50,600,200,150)
}
function person() {
  fill(255,255,0)
  rect(x,y,100,100)
  x=x+1
 if(x>=250) {
   y=y+1
 }
 if(y>=650){
  x= x+1
}
}
