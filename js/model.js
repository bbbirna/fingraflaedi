

const initModel = (model) => {

        const fingers = {}

        fingers.pinky_1 = model.skeleton.bones[14].rotation;
        fingers.pinky_2 = model.skeleton.bones[15].rotation;
        fingers.pinky_3 = model.skeleton.bones[16].rotation;
        fingers.ring_1 = model.skeleton.bones[9].rotation;
        fingers.ring_2 = model.skeleton.bones[10].rotation;
        fingers.ring_3 = model.skeleton.bones[11].rotation;
        fingers.middle_1 = model.skeleton.bones[4].rotation;
        fingers.middle_2 = model.skeleton.bones[5].rotation;
        fingers.middle_3 = model.skeleton.bones[6].rotation;
        fingers.index_1 = model.skeleton.bones[19].rotation;
        fingers.index_2 = model.skeleton.bones[20].rotation;
        fingers.index_3 = model.skeleton.bones[21].rotation;
        fingers.thumb_1 = model.skeleton.bones[23].rotation;
        fingers.thumb_2 = model.skeleton.bones[24].rotation;
        fingers.thumb_3 = model.skeleton.bones[25].rotation;
        fingers.wrist = model.skeleton.bones[1].rotation;
        fingers.palm_1 = model.skeleton.bones[7].rotation;
        fingers.palm_2 = model.skeleton.bones[12].rotation;
        fingers.palm_3 = model.skeleton.bones[17].rotation;

        return fingers;
}





// const letterA = () => {
//         //LITLIPUTTI

//         model.skeleton.bones[14].rotation.x = 1.2;
//         model.skeleton.bones[15].rotation.x = 1.5;
//         model.skeleton.bones[16].rotation.x = 0.3;

//         model.skeleton.bones[14].rotation.y = -0.2;
//         model.skeleton.bones[15].rotation.y = -0.2;
//         model.skeleton.bones[16].rotation.y = -0.1;

//         model.skeleton.bones[14].rotation.z = 0.5;
//         model.skeleton.bones[15].rotation.z = 0.3;
//         model.skeleton.bones[16].rotation.z = 0.1;


//         //BAUGFINGUR

//         model.skeleton.bones[9].rotation.x = 1.2;
//         model.skeleton.bones[10].rotation.x = 1.9;
//         model.skeleton.bones[11].rotation.x = 0.4;

//         model.skeleton.bones[9].rotation.y = -0.3;
//         model.skeleton.bones[10].rotation.y = 0.1;
//         model.skeleton.bones[11].rotation.y = 0;

//         model.skeleton.bones[9].rotation.z = 0.1;
//         model.skeleton.bones[10].rotation.z = 0;
//         model.skeleton.bones[11].rotation.z = 0;


//         //FU

//         model.skeleton.bones[4].rotation.x = 1.2;
//         model.skeleton.bones[5].rotation.x = 1.9;
//         model.skeleton.bones[6].rotation.x = 0.7;

//         model.skeleton.bones[4].rotation.y = 0;
//         model.skeleton.bones[5].rotation.y = 0;
//         model.skeleton.bones[6].rotation.y = 0;

//         model.skeleton.bones[4].rotation.z = 0;
//         model.skeleton.bones[5].rotation.z = 0;
//         model.skeleton.bones[6].rotation.z = 0;




//         //VISIFINGUR

//         model.skeleton.bones[19].rotation.x = 1.3;
//         model.skeleton.bones[20].rotation.x = 1.8;
//         model.skeleton.bones[21].rotation.x = 0.5;

//         model.skeleton.bones[19].rotation.y = 0.2;
//         model.skeleton.bones[20].rotation.y = 0.3;
//         model.skeleton.bones[21].rotation.y = 0;

//         model.skeleton.bones[19].rotation.z = -0.3;
//         model.skeleton.bones[20].rotation.z = 0;
//         model.skeleton.bones[21].rotation.z = 0;




//         //THUMB

//         model.skeleton.bones[23].rotation.x = 0;
//         model.skeleton.bones[24].rotation.x = 0.1;
//         model.skeleton.bones[25].rotation.x = 0;

//         model.skeleton.bones[23].rotation.y = 1;
//         model.skeleton.bones[24].rotation.y = 0;
//         model.skeleton.bones[25].rotation.y = 0;

//         model.skeleton.bones[23].rotation.z = -0.4;
//         model.skeleton.bones[24].rotation.z = 0;
//         model.skeleton.bones[25].rotation.z = 0;


//         //ULNLIÐUR

//         model.skeleton.bones[1].rotation.x = 0;
//         model.skeleton.bones[1].rotation.y = 0;
//         model.skeleton.bones[1].rotation.z = 0;

//         //ANNAÐ

//         model.skeleton.bones[7].rotation.z = 0;
//         model.skeleton.bones[12].rotation.z = 0;
//         model.skeleton.bones[17].rotation.z = 0;


// }


// const letterB = () => {
//         //LITLIPUTTI

//         model.skeleton.bones[14].rotation.x = 0;
//         model.skeleton.bones[15].rotation.x = 0;
//         model.skeleton.bones[16].rotation.x = 0;

//         model.skeleton.bones[14].rotation.y = 0;
//         model.skeleton.bones[15].rotation.y = 0;
//         model.skeleton.bones[16].rotation.y = 0;

//         model.skeleton.bones[14].rotation.z = 0.3;
//         model.skeleton.bones[15].rotation.z = 0;
//         model.skeleton.bones[16].rotation.z = 0;


//         //BAUGFINGUR

//         model.skeleton.bones[9].rotation.x = 0;
//         model.skeleton.bones[10].rotation.x = 0;
//         model.skeleton.bones[11].rotation.x = 0;

//         model.skeleton.bones[9].rotation.y = 0;
//         model.skeleton.bones[10].rotation.y = 0;
//         model.skeleton.bones[11].rotation.y = 0;

//         model.skeleton.bones[9].rotation.z = 0.1;
//         model.skeleton.bones[10].rotation.z = 0;
//         model.skeleton.bones[11].rotation.z = 0;


//         //FU

//         model.skeleton.bones[4].rotation.x = 0;
//         model.skeleton.bones[5].rotation.x = 0;
//         model.skeleton.bones[6].rotation.x = 0;

//         model.skeleton.bones[4].rotation.y = 0;
//         model.skeleton.bones[5].rotation.y = 0;
//         model.skeleton.bones[6].rotation.y = 0;

//         model.skeleton.bones[4].rotation.z = 0;
//         model.skeleton.bones[5].rotation.z = 0;
//         model.skeleton.bones[6].rotation.z = 0;




//         //VISIFINGUR

//         model.skeleton.bones[19].rotation.x = 0;
//         model.skeleton.bones[20].rotation.x = 0;
//         model.skeleton.bones[21].rotation.x = 0;

//         model.skeleton.bones[19].rotation.y = 0;
//         model.skeleton.bones[20].rotation.y = 0;
//         model.skeleton.bones[21].rotation.y = 0;

//         model.skeleton.bones[19].rotation.z = -0.1;
//         model.skeleton.bones[20].rotation.z = 0;
//         model.skeleton.bones[21].rotation.z = 0;




//         //THUMB

//         model.skeleton.bones[23].rotation.x = 0;
//         model.skeleton.bones[24].rotation.x = 0;
//         model.skeleton.bones[25].rotation.x = 0;

//         model.skeleton.bones[23].rotation.y = 0.3;
//         model.skeleton.bones[24].rotation.y = 0;
//         model.skeleton.bones[25].rotation.y = 0;

//         model.skeleton.bones[23].rotation.z = -0.3;
//         model.skeleton.bones[24].rotation.z = -0.3;
//         model.skeleton.bones[25].rotation.z = 0.5;


//         //ULNLIÐUR

//         model.skeleton.bones[1].rotation.x = 0;
//         model.skeleton.bones[1].rotation.y = 0;
//         model.skeleton.bones[1].rotation.z = 0;

//         //ANNAÐ

//         model.skeleton.bones[7].rotation.z = 0.03;
//         model.skeleton.bones[12].rotation.z = 0.09;
//         model.skeleton.bones[17].rotation.z = 0.08;

// }





// const letterC = () => {
//         //LITLIPUTTI

//         model.skeleton.bones[14].rotation.x = 1.3;
//         model.skeleton.bones[15].rotation.x = 1.3;
//         model.skeleton.bones[16].rotation.x = 0.5;

//         model.skeleton.bones[14].rotation.y = -0.6;
//         model.skeleton.bones[15].rotation.y = -0.2;
//         model.skeleton.bones[16].rotation.y = 0;

//         model.skeleton.bones[14].rotation.z = 0.4;
//         model.skeleton.bones[15].rotation.z = 0;
//         model.skeleton.bones[16].rotation.z = 0.1;


//         //BAUGFINGUR

//         model.skeleton.bones[9].rotation.x = 1.2;
//         model.skeleton.bones[10].rotation.x = 1.8;
//         model.skeleton.bones[11].rotation.x = 0.7;

//         model.skeleton.bones[9].rotation.y = -0.3;
//         model.skeleton.bones[10].rotation.y = -0.1;
//         model.skeleton.bones[11].rotation.y = -0.1;

//         model.skeleton.bones[9].rotation.z = 0.1;
//         model.skeleton.bones[10].rotation.z = 0;
//         model.skeleton.bones[11].rotation.z = 0;


//         //FU

//         model.skeleton.bones[4].rotation.x = 1;
//         model.skeleton.bones[5].rotation.x = 1.9;
//         model.skeleton.bones[6].rotation.x = 0.9;

//         model.skeleton.bones[4].rotation.y = 0;
//         model.skeleton.bones[5].rotation.y = 0;
//         model.skeleton.bones[6].rotation.y = 0;

//         model.skeleton.bones[4].rotation.z = 0;
//         model.skeleton.bones[5].rotation.z = 0;
//         model.skeleton.bones[6].rotation.z = 0;




//         //VISIFINGUR

//         model.skeleton.bones[19].rotation.x = 0.3;
//         model.skeleton.bones[20].rotation.x = 1.0;
//         model.skeleton.bones[21].rotation.x = 0.6;

//         model.skeleton.bones[19].rotation.y = -0.1;
//         model.skeleton.bones[20].rotation.y = 0;
//         model.skeleton.bones[21].rotation.y = 0;

//         model.skeleton.bones[19].rotation.z = 0;
//         model.skeleton.bones[20].rotation.z = 0;
//         model.skeleton.bones[21].rotation.z = 0;




//         //THUMB

//         model.skeleton.bones[23].rotation.x = 0.1;
//         model.skeleton.bones[24].rotation.x = 0;
//         model.skeleton.bones[25].rotation.x = 0;

//         model.skeleton.bones[23].rotation.y = 0.9;
//         model.skeleton.bones[24].rotation.y = 0;
//         model.skeleton.bones[25].rotation.y = 0;

//         model.skeleton.bones[23].rotation.z = 0;
//         model.skeleton.bones[24].rotation.z = -0.1;
//         model.skeleton.bones[25].rotation.z = -0.5;


//         //ULNLIÐUR

//         model.skeleton.bones[1].rotation.x = 0;
//         model.skeleton.bones[1].rotation.y = 0;
//         model.skeleton.bones[1].rotation.z = 0;

// }




// const letterA2 = {
//         //litli
//         litli1x: 1.2, litli2x: 1.5, litli3x: 0.3,
//         litli1y: -0.2, litli2y: -0.2, lilti3y: -0.1,
//         litli1z: 0.5, litli2z: 0.3, litli3z: 0.1,
//         //baug
//         baugfingur1x: 1.2, baugfingur2x: 1.9, baugfingur3x: 0.4,
//         baugfingur1y: -0.3, baugfingur2y: 0.1, baugfingur3y: 0,
//         baugfingur1z: 0.1, baugfingur2z: 0, baugfingur3z: 0,
//         //langa
//         langatong1x: 1.2, langatong2x: 1.9, langatong3x: 0.7,
//         langatong1y: 0, langatong2y: 0, langatong3y: 0,
//         langatong1z: 0, langatong2z: 0, langatong3z: 0,
//         //visi
//         visifingur1x: 1.3, visifingur2x: 1.8, visifingur3x: 0.5,
//         visifingur1y: 0.2, visifingur2y: 0.3, visifingur3y: 0,
//         visifingur1z: -0.3, visifingur2z: 0, visifingur3z: 0,
//         //thumb
//         thumall1x: 0, thumall2x: 0.1, thumall3x: 0,
//         thumall1y: 1, thumall2y: 0, thumall3y: 0,
//         thumall1z: -0.4, thumall2z: 0, thumall3z: 0,
//         //ulnl
//         ulnlidur1x: 0, ulnlidur1y: 0, ulnlidur1z: 0,
//         //annað
//         annad1x: 0, annad2x: 0, annad3x: 0

// }

















// document.onkeydown = checkKey;

// function checkKey(e) {

//     e = e || window.event;

//     if (e.keyCode == '65') {
//         console.log("A");





//         //LITLIPUTTI

//         model.skeleton.bones[14].rotation.x = 1.2;
//         model.skeleton.bones[15].rotation.x = 1.5;
//         model.skeleton.bones[16].rotation.x = 0.3;

//         model.skeleton.bones[14].rotation.y = -0.2;
//         model.skeleton.bones[15].rotation.y = -0.2;
//         model.skeleton.bones[16].rotation.y = -0.1;

//         model.skeleton.bones[14].rotation.z = 0.5;
//         model.skeleton.bones[15].rotation.z = 0.3;
//         model.skeleton.bones[16].rotation.z = 0.1;


//         //BAUGFINGUR

//         model.skeleton.bones[9].rotation.x = 1.2;
//         model.skeleton.bones[10].rotation.x = 1.9;
//         model.skeleton.bones[11].rotation.x = 0.4;

//         model.skeleton.bones[9].rotation.y = -0.3;
//         model.skeleton.bones[10].rotation.y = 0.1;
//         model.skeleton.bones[11].rotation.y = 0;

//         model.skeleton.bones[9].rotation.z = 0.1;
//         model.skeleton.bones[10].rotation.z = 0;
//         model.skeleton.bones[11].rotation.z = 0;


//         //FU

//         model.skeleton.bones[4].rotation.x = 1.2;
//         model.skeleton.bones[5].rotation.x = 1.9;
//         model.skeleton.bones[6].rotation.x = 0.7;

//         model.skeleton.bones[4].rotation.y = 0;
//         model.skeleton.bones[5].rotation.y = 0;
//         model.skeleton.bones[6].rotation.y = 0;

//         model.skeleton.bones[4].rotation.z = 0;
//         model.skeleton.bones[5].rotation.z = 0;
//         model.skeleton.bones[6].rotation.z = 0;




//         //VISIFINGUR

//         model.skeleton.bones[19].rotation.x = 1.3;
//         model.skeleton.bones[20].rotation.x = 1.8;
//         model.skeleton.bones[21].rotation.x = 0.5;

//         model.skeleton.bones[19].rotation.y = 0.2;
//         model.skeleton.bones[20].rotation.y = 0.3;
//         model.skeleton.bones[21].rotation.y = 0;

//         model.skeleton.bones[19].rotation.z = -0.3;
//         model.skeleton.bones[20].rotation.z = 0;
//         model.skeleton.bones[21].rotation.z = 0;




//         //THUMB

//         model.skeleton.bones[23].rotation.x = 0;
//         model.skeleton.bones[24].rotation.x = 0.1;
//         model.skeleton.bones[25].rotation.x = 0;

//         model.skeleton.bones[23].rotation.y = 1;
//         model.skeleton.bones[24].rotation.y = 0;
//         model.skeleton.bones[25].rotation.y = 0;

//         model.skeleton.bones[23].rotation.z = -0.4;
//         model.skeleton.bones[24].rotation.z = 0;
//         model.skeleton.bones[25].rotation.z = 0;


//         //ULNLIÐUR

//         model.skeleton.bones[1].rotation.x = 0;
//         model.skeleton.bones[1].rotation.y = 0;
//         model.skeleton.bones[1].rotation.z = 0;

//     }
//     render();
    

// }
