function setup() {background("blue")
    createCanvas(600, 600);
   }
   
   function draw() {
   
   
    stroke("blue")
     fill("red")
     
    // console.log(mouseIsPressed);
     
     if(mouseIsPressed) {
       rect(mouseX, mouseY, 20, 35);
   
     }
     
   
   }