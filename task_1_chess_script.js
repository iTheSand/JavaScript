var main = document.getElementById("chess");
var context = main.getContext("2d");
main.width = main.offsetWidth;
main.height = main.offsetHeight;

var size_cell = 64;
var width_cell = 10;
var height_cell = 10;

function draw_black_field(x,y) {
    context.drawImage(black_field,x,y);
}

function draw_white_field(x,y) {
    context.drawImage(white_field,x,y);
}

function draw_vertical_bord (x,y) {
    context.drawImage(vertical_bord,x,y);
}

function draw_vertical_bord_num (i,x,y) {
    context.drawImage(vertical_bord,x,y);
    context.font = "italic 30px Arial";
    context.fillStyle = "black";
    context.fillText(i,x+20,y-20);
}

function draw_horizontal_bord(x,y) {
    context.drawImage(horizontal_bord,x,y);
}

function draw_horizontal_bord_let(i,x,y) {
    context.drawImage(horizontal_bord,x,y);
    context.font = "italic 30px Arial";
    context.fillStyle = "black";
    context.fillText(i,x+20,y+40);
}

function clear(){
    context.clearRect(0,0,main.width,main.height);
}