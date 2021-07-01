canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

nasa_mars_array=[
    "mars(1).jpg",
    "mars(2).jpg",
    "mars(3).jpg",
    "mars(4).jpg",
];
random_number=Math.floor(Math.random()*4);
console.log(random_number);

background_image=nasa_mars_array[random_number];
console.log("background image="+background_image);
rover_image="rover.png";
rover_width=100;
rover_height=90;


rover_x= 10;
rover_y= 10;

function add() {

    background_img_Tag=new Image();
    background_img_Tag.onload=uploadBackground;
    background_img_Tag.src=background_image;

    rover_img_Tag=new Image();
    rover_img_Tag.onload=uploadRover;
    rover_img_Tag.src=rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_img_Tag,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(rover_img_Tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

       keyPressed=e.keyCode;
       console.log(keyPressed);

       if(keyPressed=='38') {
           up();
           console.log("up");
       }

       if(keyPressed=='40') {
        down();
        console.log("down");
    }

    if(keyPressed=='67') {
        left();
        console.log("left");
    }

    if(keyPressed=='90') {
        right();
        console.log("right");
    }
}

function up() {
     if( rover_y >= 0 ) {
         rover_y= rover_y - 10;
         console.log("when up arrow is pressed x="+rover_x+"y="+rover_y);
         uploadBackground();
         uploadRover();
     }
}

function down() {
    if( rover_y <= 500 ) {
        rover_y= rover_y + 10;
        console.log("when down arrow is pressed x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if( rover_x >= 0 ) {
        rover_x= rover_x - 10;
        console.log("when left arrow is pressed x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if( rover_x <= 700 ) {
        rover_x= rover_x + 10;
        console.log("when right arrow is pressed x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}