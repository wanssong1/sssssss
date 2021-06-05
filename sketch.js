var apiKey = "456362466b71776534345379624a43";
var subData = null;

var nDist;
let url;

let r = 300;
let theta = 0;

function preload() {
  url =
    "https://cors-anywhere.herokuapp.com/http://openapi.seoul.go.kr:8088/456362466b71776534345379624a43/json/CardSubwayTime/1/608/202104/";

}


function setup( ){

  //createCanvas(windowWidth, windowHeight);
  createCanvas(1000,1000);
  loadJSON(url, gotData);

}


function draw() {


     stickdraw();




}

function gotData(data) {
  subData = data.CardSubwayTime;

}

function stickdraw() {

  if (subData) {
     var ctl=subData.list_total_count;
     text(ctl,100,100);
     randomSeed(2);

     push();
     fill(240,10);
     rect(0,0,width,height);
     pop();





      translate(500, 500);
      let x =  r * cos(theta);
      let y =  r * sin(theta);

      //determine num of text in one circle and draw
      for (let j = 0; j < ctl; j++) {



           rotate(QUARTER_PI / ((ctl/10)+0.25));

           stroke(0);

           var sr=subData.row[j].FOUR_RIDE_NUM;
           var sa=subData.row[j].FOUR_ALIGHT_NUM;

           let lgmap=map(sr+sa,100,10762,1.2,1.5);
           fill(255, 81, 0);
           if(sr+sa<100) {
             noStroke()
             noFill();
           }
           push();
           noFill();
           strokeWeight(0.2);
           line(x,y,x*lgmap,y*lgmap);
           pop();

      }
  }
}

function dataArray(){
  if (subData){
    var ctl=subData.list_total_count;
    for ( let i=0;i<ctl;i++){

    }
  }
}
