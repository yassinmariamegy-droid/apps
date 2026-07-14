var logolocation = 0;
logolocation = randomNumber(1, 2);
onEvent("button1", "click", function( ) {
  setProperty("button1", "hidden", true);
  if (logolocation == 1) {
    setProperty("image1", "x", 30);
  } else {
    setProperty("image1", "x", 240);
  }
});
onEvent("button2", "click", function( ) {
  setScreen("screen1");
});
onEvent("image3", "click", function( ) {
  setProperty("button2", "hidden", true);
  setProperty("image3", "hidden", true);
  setProperty("image2", "hidden", true);
  if (logolocation == 1) {
    setProperty("label1", "text", "You Win!");
  } else {
    setProperty("label1", "text", "You Lose!");
  }
});
onEvent("image2", "click", function( ) {
  setProperty("image2", "hidden", true);
  setProperty("image3", "hidden", true);
  setProperty("image2", "hidden", true);
  if (logolocation == 2) {
    setProperty("label1", "text", "You Win!");
  } else {
    setProperty("label1", "text", "You Lose!");
  }
});
