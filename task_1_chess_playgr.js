var board=[
    [2,5,5,5,5,5,5,5,5,2],
    [2,1,0,1,0,1,0,1,0,2],
    [3,0,1,0,1,0,1,0,1,4],
    [3,1,0,1,0,1,0,1,0,4],
    [3,0,1,0,1,0,1,0,1,4],
    [3,1,0,1,0,1,0,1,0,4],
    [3,0,1,0,1,0,1,0,1,4],
    [3,1,0,1,0,1,0,1,0,4],
    [3,0,1,0,1,0,1,0,1,4],
    [3,5,5,5,5,5,5,5,5,4]
    ];

function drawField(array) {
    var num_1 = 8;
    var num_2 = 8;
    var let = 0;
    var ABC=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];

    for (var i=0;i<width_cell;i++){
        for (var j=0;j<height_cell;j++){
            switch (array[j][i]) {
                case 0:
                    draw_black_field(size_cell*i,size_cell*j);
                    break;
                case 1:
                    draw_white_field(size_cell*i,size_cell*j);
                    break;
                case 2:
                    draw_vertical_bord(size_cell*i,size_cell*j);
                    break;
                case 3:
                    draw_vertical_bord_num(num_1--, size_cell*i,size_cell*j);
                    break;
                case 4:
                    draw_vertical_bord_num(num_2--, size_cell*i,size_cell*j);
                    break;
                case 5:
                    draw_horizontal_bord_let(ABC[let++],size_cell*i,size_cell*j);
                    break;
                default:
                    break;
            }
        }
    }
}

drawField (board);