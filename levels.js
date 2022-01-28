var backGround = {
    fencePadding: 10,
    // 0) Top Left 1) Mid piece 2) Top right
    fence: [{x: 32, y: 704}, {x: 64, y: 704}, {x: 96, y: 704},
    // 3) Middle piece Vertical
            {x: 32, y: 736},
    // 4) Bottom Left 5) Bottom Right
            {x: 32, y: 768},{x: 96, y: 768}],
    // 6) house fence 7) animal fence
    fenceLocation: { houseFence: [{x: 125, y: 330}, {x: 189, y: 330}],
                     leftGardenFence: [{x: -20, y: 450},  {x: 44,  y: 450}, {x: 108, y: 450}, {x: 172, y: 450}], 
                     rightGardenFence: [{x: 340, y: 450},  {x: 404, y: 450}, {x: 468, y: 450}, {x: 532, y: 450}, {x: 596, y: 450}, {x: 660, y: 450}, {x: 724, y: 450},  {x: 788, y: 450}]}  
};





const PARAMS = {
        DEBUG: true,
        SCALE: 2,
        BITWIDTH: 100,
        TILEWIDTH: 32
};