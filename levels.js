var BACKGROUND = {
        GRASS: { CENTER_PIECE:{ X: 0, Y: 0, SIZE: 32, SCALE: 2},
                 MIDDLE_PIECE:{ SIZE:  16, SCALE: 4,
                                TOP:    {X: 32, Y: 48}, 
                                BOTTOM: {X: 32, Y: 80}, 
                                LEFT:   {X: 16, Y: 64},
                                RIGHT:  {X: 48, Y: 64}},
                 LEFT_PIECE:  { SIZE:   16, SCALE: 4,
                                START:  {X: 16, Y: 48}, 
                                END:    {X: 16, Y: 80},
                                LOCATION_START: {X: 64, Y: 64},
                                LOCATION_END: {X: 64, Y: 640}},
                 RIGHT_PIECE: { SIZE: 16, SCALE: 4,
                                START:  {X: 48, Y: 48}, 
                                END:    {X: 48, Y: 80},
                                LOCATION_START: {X: 832, Y: 64},
                                LOCATION_END: {X: 832, Y: 640}},               
                 WIDTH_SIZE:  { START: 2, END: 13},
                 HEIGHT_SIZE: {START: 2, END: 10}},
                 BB:          {START: {X:64, Y:64, PADDING: 10},
                                WIDTH: 832, HEIGHT: 640, PADDING: 20},

        WATER:  { X: 0, Y: 0, SIZE: 16, SCALE: 4, FRAME: 4, SPEED: 0.5, FRAME_PAD: 0, REVERSE: false, LOOP: true},
        HOUSE:  { X: 60, Y: 0, WIDTH: 60, HEIGHT: 48, SCALE: 4},
        PAVEMENT: { X: 0, Y: 0, WIDTH: 16, HEIGHT: 48, SCALE: 4},
               // 0) Top Left 1) Mid piece 2) Top right
        FENCE_TYPE: [{X: 16, Y: 0}, {X: 32, Y: 48}, {X: 48, Y: 0},
                // 3) Middle piece Vertical
               {X: 0, Y: 16},
               // 4) Bottom Left 5) Bottom Right
               {X: 16, Y: 32}, {X: 48, Y: 32}],
        FENCE: {SIZE: 16, SCALE: 3},

               
        
}



const PARAMS = {
        DEBUG: true,
        SCALE: 1,
        BITWIDTH: 80,
        TILEWIDTH: 32
};