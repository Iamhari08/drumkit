var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
      var buttoninnerHTML = this.innerHTML;
      makeSound(buttoninnerHTML);
      animation(buttoninnerHTML);
    });



    document.addEventListener("keypress", function(event) {

      makeSound(event.key);
      animation(event.key);
    });

    function makeSound(key) {
      switch (key) {
        case "w":
          var onekey = new Audio("sounds/tom-1.mp3")
          onekey.play();
          break;
        case "a":
          var twokey = new Audio("sounds/tom-2.mp3")
          twokey.play();
          break;
        case "s":
          var threekey = new Audio("sounds/tom-3.mp3")
          threekey.play();
          break;
        case "d":
          var fourkey = new Audio("sounds/tom-4.mp3")
          fourkey.play();
          break;
        case "j":
          var fivekey = new Audio("sounds/snare.mp3")
          fivekey.play();
          break;
        case "k":
          var sixthkey = new Audio("sounds/crash.mp3")
          sixthkey.play();
          break;
        case "l":
          var sevenkey = new Audio("sounds/kick-bass.mp3")
          sevenkey.play();
          break;
        default:
          console.log("buttoninnerHTML")
      }
    };
  }


function animation(keyclicked){
  var eventhappened = document.querySelector("." + keyclicked);
  eventhappened.classList.add("changes");

  setTimeout(function(){
    eventhappened.classList.remove("changes");
  }, 200);


}
