// Note - you must change to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature = 0;
var humidity = 0;
var name;
var feels_like = 0;
let img1, img2, img3;
var direction = "right";
let f1;


function setup() {
  createCanvas(windowWidth-5, windowHeight-5);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?zip=61607,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=232ef99f583cf3dcead28d66468ff86f'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

  img1 = loadImage("assets/City.jpg");
  img2 = loadImage("assets/sun.png");
  img3 = loadImage("assets/GoodCloud.png");
  f1 = loadFont("assets/Quicksand-VariableFont_wght.ttf");

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;
  feels_like = weather.main.feels_like;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(img1);
      image(img2, width/2+100, 80,);
      textFont(f1);
      textStyle(BOLD);
      stroke("white");
      fill('white');
      textAlign(CENTER);
      textSize(70);
      text("Weather in " + weather.name, width/2, 70);
      textAlign(LEFT);
      textSize(50);
      text("Temperature: " + temperature, 200, 150);
      text("Feels Like: " + feels_like, 200, 225);
      text("Windspeed: " + windspeed, 200, 300);
      text("Humidity: " + humidity, 200, 375);

      // cloud
      fill(255 - humidity);
      noStroke();
      image(img3, x, 130,);

      // move the cloud's x position
      if (direction == "right") {
        x = x + windspeed / 3;
      }
      if (direction == "left") {
        x = x - windspeed / 3;
      }
      if (x > width - 150) {
        direction = "left";
      }
      if (x < width/2) {
        direction = "right";
      }

      break;

  }
}
