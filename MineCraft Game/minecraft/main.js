var canvas = new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

var player_object="";
block_image_width=30;
block_image_height=30;
var block_img_objects="";

function player_update(){
      fabric.Image.fromURL("player.png",function(Img) {
           player_object=Img;
           player_object.scaleToWidth(150);
           player_object.scaleToHeight(140);
           player_object.set(
               { 
                   top:player_y,
                   left:player_x } ); 
            canvas.add(player_object);
      } );
    } 
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
        block_img_objects=Img;
        block_img_objects.scaleToWidth(block_image_width);
        block_img_objects.scaleToHeight(block_image_height);
        block_img_objects.set(
            { 
                top:player_y,
                left:player_x } ); 
         canvas.add(block_img_objects);
   } );
}
window.addEventListener("keydown",myKeydown);
 
function myKeydown(e){
    
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey ==true && keyPressed == '80'){
       
         console.log("p and shift pressed together");
         block_image_width=block_image_width + 10;
         block_image_height=block_image_height + 10;
         document.getElementById("current_width").innerHTML=block_image_width;
         document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey ==true && keyPressed == '77'){
       
        console.log("m and shift pressed together");
        block_image_width=block_image_width - 10;
        block_image_height=block_image_height - 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
   }

    if(keyPressed=='38') {
        up();
        console.log("up");
    }

    if(keyPressed=='40') {
     down();
     console.log("down");
    }

    if(keyPressed=='37') {
     left();
     console.log("left");
    }

    if(keyPressed=='39') {
     right();
     console.log("right");
    }
   
    if(keyPressed=='87'){
        new_image('wall.jpg');
        console.log("w is pressed");
    }
    if(keyPressed=='71'){
        new_image('ground.png');
        console.log("g is pressed");
    }
    if(keyPressed=='76'){
        new_image('light_green.png');
        console.log("l is pressed");
    }
    if(keyPressed=='84'){
        new_image('trunk.jpg');
        console.log("t is pressed");
    }
    if(keyPressed=='89'){
        new_image('roof.jpg');
        console.log("r is pressed");
    }
    if(keyPressed=='89'){
        new_image('yellow_wall.png');
        console.log("y is pressed");
    }
    if(keyPressed=='68'){
        new_image('dark_green.png');
        console.log("d is pressed");
    }
    if(keyPressed=='85'){
        new_image('unique.png');
        console.log("u is pressed");
    }
    if(keyPressed=='67'){
        new_image('cloud.jpg');
        console.log("c is pressed");
    }
   }
function up() {
    if( player_y >= 0 ) {
        player_y= player_y - block_image_height;
        console.log("block image height = "+block_image_height);
        console.log("when up key is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
      }
}

function down() {
   if( player_y <= 500 ) {
       player_y= player_y + block_image_height;
       console.log("block image height="+block_image_height);
       console.log("when down key is pressed x="+player_x+"y="+player_y);
       canvas.remove(player_object);
       player_update();
   }
}

function left() {
   if( player_x >= 0 ) {
       player_x= player_x - block_image_width;
       console.log("block image width = "+block_image_width);
       console.log("when left key is pressed x="+player_x+"y="+player_y);
       canvas.remove(player_object);
       player_update();
   }
}

function right() {
   if( player_x <= 850 ) {
       player_x= player_x + block_image_width;
       console.log("block image width = "+block_image_width);
       console.log("when right key is pressed x="+player_x+"y="+player_y);
       canvas.remove(player_object);
       player_update();
   }
}