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

        WATER:  {X: 0, Y: 0, SIZE: 16, SCALE: 4}






//     fencePadding: 10,
//     // 0) Top Left 1) Mid piece 2) Top right
//     fence: [{x: 32, y: 704}, {x: 64, y: 704}, {x: 96, y: 704},
//     // 3) Middle piece Vertical
//             {x: 32, y: 736},
//     // 4) Bottom Left 5) Bottom Right
//             {x: 32, y: 768},{x: 96, y: 768}],
//     // 6) house fence 7) animal fence
//     fenceLocation: { houseFence: [{x: 125, y: 330}, {x: 189, y: 330}],
//                      leftGardenFence: [{x: -20, y: 450},  {x: 44,  y: 450}, {x: 108, y: 450}, {x: 172, y: 450}], 
//                      rightGardenFence: [{x: 340, y: 450},  {x: 404, y: 450}, {x: 468, y: 450}, {x: 532, y: 450}, {x: 596, y: 450}, {x: 660, y: 450}, {x: 724, y: 450},  {x: 788, y: 450}]}  
};



const PARAMS = {
        DEBUG: true,
        SCALE: 2,
        TILEWIDTH: 32
};