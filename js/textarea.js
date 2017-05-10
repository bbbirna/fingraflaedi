

// const inputFunc = (model) => {

//   let textInput = document.getElementById("textInput");

//   textInput.addEventListener('keyup', (model) => {
    
//     const inputString = textInput.value

//     console.log(inputString.slice(-1));

//     for (let i = 0; i < letters.length; i++) {
//             console.log(letters);
//     }


//   });
// }


 //-- 
//document.onkeydown = checkKey;


// fyrsta utgafa 

// function checkKey(e) {

//     e = e || window.event;

//     // let letterArray = [];
//     // letterArray.push(e.keyCode);
//     // console.log(letterArray);



//     var letterPress = ( letters ) => {
//       console.log("klikkkk")


//         // if (e.keyCode == keyCode) {

//         //     //console.log(keyCode);

//         //     var rotX = bone.x;
//         //     var rotY = bone.y;
//         //     var rotZ = bone.z;


//         //     let directionX = 0.01;
//         //     let directionY = 0.01;
//         //     let directionZ = 0.003;

//         //     if (rotX > xVal) {
//         //         directionX = -0.01;
//         //     }

//         //     if (rotY > yVal) {
//         //         directionY = -0.01;
//         //     }

//         //     if (rotZ > zVal) {
//         //         directionZ = -0.003;
//         //     }
            
//         //     var moveX = setInterval(() => {
            
//         //         if (rotX >= xVal && directionX == 0.01) {
//         //             clearInterval(moveX);
//         //         }
              
//         //         if (rotX <= xVal && directionX == -0.01) {
//         //             clearInterval(moveX);
//         //         }
               
//         //         bone.x = rotX;
//         //         rotX += directionX;


//         //     }, 20);

//         //     var moveY = setInterval(() => {
            
//         //         if (rotY >= yVal && directionY == 0.01) {
//         //             clearInterval(moveY);
//         //         }
              
//         //         if (rotY <= yVal && directionY == -0.01) {
//         //             clearInterval(moveY);
//         //         }
               
//         //         bone.y = rotY;
//         //         rotY += directionY;


//         //     }, 20);

//         //     var moveZ = setInterval(() => {
            
//         //         if (rotZ >= zVal && directionZ == 0.003) {
//         //             clearInterval(moveZ);
//         //         }
              
//         //         if (rotZ <= zVal && directionZ == -0.003) {
//         //             clearInterval(moveZ);
//         //         }
               
//         //         bone.z = rotZ;
//         //         rotZ += directionZ;
                

//         //     }, 20);
//         // }

//     }


//     // letterPress( '65', fingers.pinky_1, 1.5, 0, -0.5);
//     // letterPress( '65', fingers.pinky_2, 1, 0, -0.2);
//     // letterPress( '65', fingers.pinky_3, 0.5, 0.3, -0.2);

//     // letterPress( '65', fingers.ring_1, 1.4, 0, -0.1);
//     // letterPress( '65', fingers.ring_2, 1.7, 0, -0.2);
//     // letterPress( '65', fingers.ring_3, 0.3, 0, 0);

//     // letterPress( '65', fingers.middle_1, 1.3, 0, 0);
//     // letterPress( '65', fingers.middle_2, 1.8, 0, 0);
//     // letterPress( '65', fingers.middle_3, 0.3, 0, 0);

//     // letterPress( '65', fingers.index_1, 1.15, 0, 0.15);
//     // letterPress( '65', fingers.index_2, 1.9, 0, 0.25);
//     // letterPress( '65', fingers.index_3, 0.6, 0, 0);

//     // letterPress( '65', fingers.thumb_1, 0, -0.6, 0.5);
//     // letterPress( '65', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '65', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '65', fingers.wrist, 0, 0, 0);

//     // letterPress( '65', fingers.palm_1, 0, 0, -0.055); //ring
//     // letterPress( '65', fingers.palm_2, 0, 0, -0.085); //pinky
//     // letterPress( '65', fingers.palm_3, 0, 0, 0.055); //index
    


//     // // ----- B -----
//     // letterPress( '66', fingers.pinky_1, 0, 0, -0.3);
//     // letterPress( '66', fingers.pinky_2, 0.1, 0, 0);
//     // letterPress( '66', fingers.pinky_3, 0.1, 0, 0);

//     // letterPress( '66', fingers.ring_1, 0, 0, -0.1);
//     // letterPress( '66', fingers.ring_2, 0.1, 0, 0);
//     // letterPress( '66', fingers.ring_3, 0.1, 0, 0);

//     // letterPress( '66', fingers.middle_1, 0, 0, 0);
//     // letterPress( '66', fingers.middle_2, 0.1, 0, 0);
//     // letterPress( '66', fingers.middle_3, 0.1, 0, 0);

//     // letterPress( '66', fingers.index_1, 0, 0, 0.1);
//     // letterPress( '66', fingers.index_2, 0.1, 0, 0);
//     // letterPress( '66', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '66', fingers.thumb_1, -0.1, -0.4, 0.4);
//     // letterPress( '66', fingers.thumb_2, 0, 0, 0.2);
//     // letterPress( '66', fingers.thumb_3, 0, 0, -0.1);

//     // letterPress( '66', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '66', fingers.palm_1, 0, 0, -0.04);
//     // letterPress( '66', fingers.palm_2, 0, 0, -0.12);
//     // letterPress( '66', fingers.palm_3, 0, 0, 0.08);

//     // // ----- C -----
//     // letterPress( '67', fingers.pinky_1, 1.1, 0, -0.5);
//     // letterPress( '67', fingers.pinky_2, 1.3, 0.1, -0.4);
//     // letterPress( '67', fingers.pinky_3, 0.8, 0.2, -0.3);

//     // letterPress( '67', fingers.ring_1, 1.2, 0, -0.2);
//     // letterPress( '67', fingers.ring_2, 1.9, 0.1, -0.2);
//     // letterPress( '67', fingers.ring_3, 0.3, 0, 0);

//     // letterPress( '67', fingers.middle_1, 1.1, 0, 0);
//     // letterPress( '67', fingers.middle_2, 2, 0, 0);
//     // letterPress( '67', fingers.middle_3, 0.3, 0, 0);

//     // letterPress( '67', fingers.index_1, 0.6, -0.1, 0);
//     // letterPress( '67', fingers.index_2, 0.7, 0, 0);
//     // letterPress( '67', fingers.index_3, 0.7, 0, 0);

//     // letterPress( '67', fingers.thumb_1, 0.1, -1.2, 0);
//     // letterPress( '67', fingers.thumb_2, 0.1, 0.2, 0.1);
//     // letterPress( '67', fingers.thumb_3, 0, -0.2, 0.4);

//     // letterPress( '67', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '67', fingers.palm_1, 0, 0, -0.02);
//     // letterPress( '67', fingers.palm_2, 0, 0, -0.07);
//     // letterPress( '67', fingers.palm_3, 0, 0, 0.05);

//     // // ----- D -----
//     // letterPress( '68', fingers.pinky_1, 0.1, 0, 0);
//     // letterPress( '68', fingers.pinky_2,0.1, 0, 0);
//     // letterPress( '68', fingers.pinky_3, 0.1, 0, 0);

//     // letterPress( '68', fingers.ring_1, 0.3, 0.1, 0);
//     // letterPress( '68', fingers.ring_2, 0.3, 0, 0);
//     // letterPress( '68', fingers.ring_3, 0.1, 0, 0);

//     // letterPress( '68', fingers.middle_1, 0.6, 0, 0);
//     // letterPress( '68', fingers.middle_2, 1.4, 0, 0);
//     // letterPress( '68', fingers.middle_3, 0.7, 0, 0);

//     // letterPress( '68', fingers.index_1, 0.1, 0, 0);
//     // letterPress( '68', fingers.index_2, 0.2, 0, 0);
//     // letterPress( '68', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '68', fingers.thumb_1, 0, -1.7, -0.1);
//     // letterPress( '68', fingers.thumb_2, 0.6, 0.5, 0.1);
//     // letterPress( '68', fingers.thumb_3, 0, 0, 0.2);

//     // letterPress( '68', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '68', fingers.palm_1, 0, 0, 0);
//     // letterPress( '68', fingers.palm_2, 0, 0, 0);
//     // letterPress( '68', fingers.palm_3, 0, 0, 0);


//     // // ----- E -----

//     // letterPress( '69', fingers.pinky_1, 0.6, 0, -0.3);
//     // letterPress( '69', fingers.pinky_2, 1.4, 0, -0.6);
//     // letterPress( '69', fingers.pinky_3, 0.5, 0.3, -0.2);

//     // letterPress( '69', fingers.ring_1, 0.6, -0.1, -0.1);
//     // letterPress( '69', fingers.ring_2, 1.9, 0, -0.4);
//     // letterPress( '69', fingers.ring_3, 0.6, 0, 0);

//     // letterPress( '69', fingers.middle_1, 0.5, 0, 0);
//     // letterPress( '69', fingers.middle_2, 1.9, 0, 0);
//     // letterPress( '69', fingers.middle_3, 0.8, 0, 0);

//     // letterPress( '69', fingers.index_1, 1, 0, 0.3);
//     // letterPress( '69', fingers.index_2, 1.4, 0, 0.2);
//     // letterPress( '69', fingers.index_3, 0.7, 0, 0.1);

//     // letterPress( '69', fingers.thumb_1, 0, -1.5, 0);
//     // letterPress( '69', fingers.thumb_2, 1, 0.4, 0.3);
//     // letterPress( '69', fingers.thumb_3, 0, 0.1, 0.9);

//     // letterPress( '69', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '69', fingers.palm_1, 0, 0, -0.03);
//     // letterPress( '69', fingers.palm_2, 0, 0, -0.11);
//     // letterPress( '69', fingers.palm_3, 0, 0, 0.01);


//     // // ----- F -----

//     // letterPress( '70', fingers.pinky_1, 0, 0, -0.3);
//     // letterPress( '70', fingers.pinky_2, 0.1, 0, 0);
//     // letterPress( '70', fingers.pinky_3, 0.1, 0, 0);

//     // letterPress( '70', fingers.ring_1, 0.1, 0, -0.1);
//     // letterPress( '70', fingers.ring_2, 0.1, 0, 0);
//     // letterPress( '70', fingers.ring_3, 0.1, 0, 0);

//     // letterPress( '70', fingers.middle_1, 0.2, 0, 0);
//     // letterPress( '70', fingers.middle_2, 0.1, 0, 0);
//     // letterPress( '70', fingers.middle_3, 0, 0, 0);

//     // letterPress( '70', fingers.index_1, 0.7, -0.2, 0.2);
//     // letterPress( '70', fingers.index_2, 1.3, -0.3, 0);
//     // letterPress( '70', fingers.index_3, 0.2, 0, 0);

//     // letterPress( '70', fingers.thumb_1, 0.2, -1.1, 0.6);
//     // letterPress( '70', fingers.thumb_2, 0.2, 0.2, 0);
//     // letterPress( '70', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '70', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '70', fingers.palm_1, 0, 0, -0.04);
//     // letterPress( '70', fingers.palm_2, 0, 0, -0.1);
//     // letterPress( '70', fingers.palm_3, 0, 0, 0.06);


//     // // ----- G -----

//     // letterPress( '71', fingers.pinky_1, 0, 0, -0.2);
//     // letterPress( '71', fingers.pinky_2, 0.1, 0, 0);
//     // letterPress( '71', fingers.pinky_3, 0.2, 0, 0);

//     // letterPress( '71', fingers.ring_1, 0.2, 0, -0.1);
//     // letterPress( '71', fingers.ring_2, 0.2, 0, 0);
//     // letterPress( '71', fingers.ring_3, 0.1, 0, 0);

//     // letterPress( '71', fingers.middle_1, 0.7, 0, 0);
//     // letterPress( '71', fingers.middle_2, 1.6, 0, 0);
//     // letterPress( '71', fingers.middle_3, 0.3, 0, 0);

//     // letterPress( '71', fingers.index_1, 0.1, -0.1, 0.1);
//     // letterPress( '71', fingers.index_2, 0.1, -0.1, 0);
//     // letterPress( '71', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '71', fingers.thumb_1, 0.7, -1.3, 1.1);
//     // letterPress( '71', fingers.thumb_2, 0.2, 0.1, -0.1);
//     // letterPress( '71', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '71', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '71', fingers.palm_1, 0, 0, -0.04);
//     // letterPress( '71', fingers.palm_2, 0, 0, -0.09);
//     // letterPress( '71', fingers.palm_3, 0, 0, 0.06);

//     // // ----- H -----

//     // letterPress( '72', fingers.pinky_1, 0.6, 0.2, -0.4);
//     // letterPress( '72', fingers.pinky_2, 1.5, 0, -0.6);
//     // letterPress( '72', fingers.pinky_3, 0.5, 0.2, -0.3);

//     // letterPress( '72', fingers.ring_1, 0.7, 0.2, -0.2);
//     // letterPress( '72', fingers.ring_2, 2.2, 0, -0.3);
//     // letterPress( '72', fingers.ring_3, 0.7, 0, 0);

//     // letterPress( '72', fingers.middle_1, 0, 0, 0);
//     // letterPress( '72', fingers.middle_2, 0.2, 0, 0);
//     // letterPress( '72', fingers.middle_3, 0.1, 0, 0);

//     // letterPress( '72', fingers.index_1, 0.1, 0, 0.1);
//     // letterPress( '72', fingers.index_2, 0.1, -0.1, 0);
//     // letterPress( '72', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '72', fingers.thumb_1, 0.6, -0.5, 1.1);
//     // letterPress( '72', fingers.thumb_2, 0, -0.5, 0.2);
//     // letterPress( '72', fingers.thumb_3, 0, 0, 0.2);

//     // letterPress( '72', fingers.wrist, -0.01, 0, 0);

//     // letterPress( '72', fingers.palm_1, 0, 0, -0.04);
//     // letterPress( '72', fingers.palm_2, 0, 0, -0.09);
//     // letterPress( '72', fingers.palm_3, 0, 0, 0.07);

//     // // ----- I -----

//     // letterPress( '73', fingers.pinky_1, 0, 0, -0.2);
//     // letterPress( '73', fingers.pinky_2, 0.2, 0, 0);
//     // letterPress( '73', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '73', fingers.ring_1, 1, 0, -0.1);
//     // letterPress( '73', fingers.ring_2, 1.8, -0.1, -0.3);
//     // letterPress( '73', fingers.ring_3, 0.5, 0, 0);

//     // letterPress( '73', fingers.middle_1, 1, 0, 0);
//     // letterPress( '73', fingers.middle_2, 2, 0, 0);
//     // letterPress( '73', fingers.middle_3, 0.4, 0, 0);

//     // letterPress( '73', fingers.index_1, 1.1, -0.2, 0.2);
//     // letterPress( '73', fingers.index_2, 1.7, -0.2, 0);
//     // letterPress( '73', fingers.index_3, 0.6, 0, 0);

//     // letterPress( '73', fingers.thumb_1, 0.7, -0.5, 0.7);
//     // letterPress( '73', fingers.thumb_2, 0.2, -0.1, 0.6);
//     // letterPress( '73', fingers.thumb_3, 0, 0, 0.4);

//     // letterPress( '73', fingers.wrist, 0, 0, 0);

//     // letterPress( '73', fingers.palm_1, 0, 0, -0.04);
//     // letterPress( '73', fingers.palm_2, 0, 0, -0.03);
//     // letterPress( '73', fingers.palm_3, 0, 0, 0.06);


//     // // ----- J -----

//     // letterPress( '74', fingers.pinky_1, 0, 0, 0.2);
//     // letterPress( '74', fingers.pinky_2, 0.2, 0, 0);
//     // letterPress( '74', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '74', fingers.ring_1, 1, 0, -0.1);
//     // letterPress( '74', fingers.ring_2, 1.8, -0.1, -0.3);
//     // letterPress( '74', fingers.ring_3, 0.5, 0, 0);

//     // letterPress( '74', fingers.middle_1, 1, 0, 0);
//     // letterPress( '74', fingers.middle_2, 2, 0, 0);
//     // letterPress( '74', fingers.middle_3, 0.4, 0, 0);

//     // letterPress( '74', fingers.index_1, 1.1, -0.2, 0.2);
//     // letterPress( '74', fingers.index_2, 1.7, -0.2, 0);
//     // letterPress( '74', fingers.index_3, 0.6, 0, 0);

//     // letterPress( '74', fingers.thumb_1, 0.7, -0.5, 0.7);
//     // letterPress( '74', fingers.thumb_2, 0.2, -0.1, 0.6);
//     // letterPress( '74', fingers.thumb_3, 0, 0, 0.4);

//     // letterPress( '74', fingers.wrist, 0, 0.1, 0);

//     // letterPress( '74', fingers.palm_1, 0, 0, -0.04);
//     // letterPress( '74', fingers.palm_2, 0, 0, -0.03);
//     // letterPress( '74', fingers.palm_3, 0, 0, 0.06);
       

//     // // ----- K -----

//     // letterPress( '75', fingers.pinky_1, 0.9, 0.1, -0.5);
//     // letterPress( '75', fingers.pinky_2, 1.5, 0.3, -0.6);
//     // letterPress( '75', fingers.pinky_3, 0.8, 0.2, -0.2);

//     // letterPress( '75', fingers.ring_1, 1, 0, -0.2);
//     // letterPress( '75', fingers.ring_2, 2, 0, -0.4);
//     // letterPress( '75', fingers.ring_3, 0.6, 0, 0);

//     // letterPress( '75', fingers.middle_1, 0.1, 0, 0);
//     // letterPress( '75', fingers.middle_2, 0, 0, 0);
//     // letterPress( '75', fingers.middle_3, 0, 0, 0);

//     // letterPress( '75', fingers.index_1, 0.1, 0, 0);
//     // letterPress( '75', fingers.index_2, 0, 0, 0);
//     // letterPress( '75', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '75', fingers.thumb_1, 0, -1.7, 0.5);
//     // letterPress( '75', fingers.thumb_2, 1.1, 1, -0.2);
//     // letterPress( '75', fingers.thumb_3, 0, 0, -0.6);

//     // letterPress( '75', fingers.wrist, 0, 0, 0.2);

//     // letterPress( '75', fingers.palm_1, 0, 0, 0);
//     // letterPress( '75', fingers.palm_2, 0, 0, -0.04);
//     // letterPress( '75', fingers.palm_3, 0, 0, 0);


//     // // ----- L -----

//     // letterPress( '76', fingers.pinky_1, 1, 0, -0.5);
//     // letterPress( '76', fingers.pinky_2, 1.4, 0, -0.6);
//     // letterPress( '76', fingers.pinky_3, 0.4, 0.4, -0.2);

//     // letterPress( '76', fingers.ring_1, 1, 0, -0.2);
//     // letterPress( '76', fingers.ring_2, 1.8, 0, -0.3);
//     // letterPress( '76', fingers.ring_3, 0.8, 0, 0);

//     // letterPress( '76', fingers.middle_1, 1, 0, 0);
//     // letterPress( '76', fingers.middle_2, 1.9, 0, 0);
//     // letterPress( '76', fingers.middle_3, 1, 0, 0);

//     // letterPress( '76', fingers.index_1, 0, 0, 0.1);
//     // letterPress( '76', fingers.index_2, 0.1, 0, 0);
//     // letterPress( '76', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '76', fingers.thumb_1, 0, -0.7, 0);
//     // letterPress( '76', fingers.thumb_2, -0.1, 0, -0.3);
//     // letterPress( '76', fingers.thumb_3, 0, 0, -0.6);

//     // letterPress( '76', fingers.wrist, 0, 0, 0);

//     // letterPress( '76', fingers.palm_1, 0, 0, 0);
//     // letterPress( '76', fingers.palm_2, 0, 0, -0.06);
//     // letterPress( '76', fingers.palm_3, 0, 0, 0);


//     // // ----- M -----

//     // letterPress( '77', fingers.pinky_1, 1.3, 0, -0.5);
//     // letterPress( '77', fingers.pinky_2, 1.2, 0, -0.4);
//     // letterPress( '77', fingers.pinky_3, 0.8, 0.4, -0.4);

//     // letterPress( '77', fingers.ring_1, 1.4, 0, -0.2);
//     // letterPress( '77', fingers.ring_2, 1.1, 0, -0.1);
//     // letterPress( '77', fingers.ring_3, 0.2, 0, 0);

//     // letterPress( '77', fingers.middle_1, 1.3, 0, 0);
//     // letterPress( '77', fingers.middle_2, 1.2, 0, 0);
//     // letterPress( '77', fingers.middle_3, 0.2, 0, 0);

//     // letterPress( '77', fingers.index_1, 1.4, 0, 0.33);
//     // letterPress( '77', fingers.index_2, 1.1, 0, 0);
//     // letterPress( '77', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '77', fingers.thumb_1, 0.4, -0.4, 0.9);
//     // letterPress( '77', fingers.thumb_2, 0.3, 0, 0.5);
//     // letterPress( '77', fingers.thumb_3, 0, 0, 1.2);

//     // letterPress( '77', fingers.wrist, 0.4, 0, 0);

//     // letterPress( '77', fingers.palm_1, 0, 0, 0);
//     // letterPress( '77', fingers.palm_2, 0, 0, -0.06);
//     // letterPress( '77', fingers.palm_3, 0, 0, 0);


//     // // ----- N -----

//     // letterPress( '78', fingers.pinky_1, 1.3, 0, -0.5);
//     // letterPress( '78', fingers.pinky_2, 1.2, 0, -0.4);
//     // letterPress( '78', fingers.pinky_3, 0.8, 0.4, -0.4);

//     // letterPress( '78', fingers.ring_1, 1.3, 0, -0.2);
//     // letterPress( '78', fingers.ring_2, 1.6, 0.1, -0.2);
//     // letterPress( '78', fingers.ring_3, 1, 0.1, -0.1);

//     // letterPress( '78', fingers.middle_1, 1.3, 0, 0);
//     // letterPress( '78', fingers.middle_2, 1.2, 0, 0);
//     // letterPress( '78', fingers.middle_3, 0.1, 0, 0);

//     // letterPress( '78', fingers.index_1, 1.4, 0, 0.33);
//     // letterPress( '78', fingers.index_2, 1.1, 0, 0);
//     // letterPress( '78', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '78', fingers.thumb_1, 0.4, -0.4, 0.9);
//     // letterPress( '78', fingers.thumb_2, 0.3, 0, 0.5);
//     // letterPress( '78', fingers.thumb_3, 0, 0, 1.2);

//     // letterPress( '78', fingers.wrist, 0.4, 0, 0);

//     // letterPress( '78', fingers.palm_1, 0, 0, 0);
//     // letterPress( '78', fingers.palm_2, 0, 0, -0.08);
//     // letterPress( '78', fingers.palm_3, 0, 0, 0);


//     // // ----- O -----

//     // letterPress( '79', fingers.pinky_1, 0, 0, -0.3);
//     // letterPress( '79', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '79', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '79', fingers.ring_1, 0, 0, -0.1);
//     // letterPress( '79', fingers.ring_2, 0, 0, 0);
//     // letterPress( '79', fingers.ring_3, 0.1, 0, 0);

//     // letterPress( '79', fingers.middle_1, 0, 0, 0);
//     // letterPress( '79', fingers.middle_2, 0, 0, 0);
//     // letterPress( '79', fingers.middle_3, 0.1, 0, 0);

//     // letterPress( '79', fingers.index_1, 0.7, 0, 0.1);
//     // letterPress( '79', fingers.index_2, 1.3, -0.3, 0);
//     // letterPress( '79', fingers.index_3, 0.6, 0, 0);

//     // letterPress( '79', fingers.thumb_1, 0.5, -0.8, 0.5);
//     // letterPress( '79', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '79', fingers.thumb_3, 0, 0, 0.5);

//     // letterPress( '79', fingers.wrist, 0, 0, 0);

//     // letterPress( '79', fingers.palm_1, 0, 0, -0.04);
//     // letterPress( '79', fingers.palm_2, 0, 0, -0.1);
//     // letterPress( '79', fingers.palm_3, 0, 0, 0.05);


//     // // ----- Q -----

//     // letterPress( '81', fingers.pinky_1, 1.2, 0, -0.4);
//     // letterPress( '81', fingers.pinky_2, 1.3, 0, -0.4);
//     // letterPress( '81', fingers.pinky_3, 0.9, 0.4, -0.5);

//     // letterPress( '81', fingers.ring_1, 1.3, 0, -0.1);
//     // letterPress( '81', fingers.ring_2, 1.7, 0, -0.2);
//     // letterPress( '81', fingers.ring_3, 0.6, 0.2, -0.1);

//     // letterPress( '81', fingers.middle_1, 1.4, 0, 0);
//     // letterPress( '81', fingers.middle_2, 1.7, 0, 0);
//     // letterPress( '81', fingers.middle_3, 0.6, 0, 0);

//     // letterPress( '81', fingers.index_1, 1.3, 0, 0.1);
//     // letterPress( '81', fingers.index_2, 0, -0.3, 0);
//     // letterPress( '81', fingers.index_3, -0.1, 0, 0);

//     // letterPress( '81', fingers.thumb_1, 0.5, -1.4, 0.5);
//     // letterPress( '81', fingers.thumb_2, 0, 0, -0.2);
//     // letterPress( '81', fingers.thumb_3, 0, 0, -0.6);

//     // letterPress( '81', fingers.wrist, 1.3, -0.1, 0.6);

//     // letterPress( '81', fingers.palm_1, 0, 0, -0.04);
//     // letterPress( '81', fingers.palm_2, 0, 0, -0.1);
//     // letterPress( '81', fingers.palm_3, 0, 0, -0.05);


//     // // ----- P -----

//     // letterPress( '80', fingers.pinky_1, 0, 0, -0.2);
//     // letterPress( '80', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '80', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '80', fingers.ring_1, 0.1, 0, -0.1);
//     // letterPress( '80', fingers.ring_2, 0, 0, 0);
//     // letterPress( '80', fingers.ring_3, 0, 0, 0);

//     // letterPress( '80', fingers.middle_1, 1.1, 0, -0.1);
//     // letterPress( '80', fingers.middle_2, 0.6, 0, 0);
//     // letterPress( '80', fingers.middle_3, 0.2, 0, 0);

//     // letterPress( '80', fingers.index_1, 0, 0, 0.1);
//     // letterPress( '80', fingers.index_2, 0, 0, 0);
//     // letterPress( '80', fingers.index_3, 0, 0, 0);

//     // letterPress( '80', fingers.thumb_1, -0.2, -1.7, 0.1);
//     // letterPress( '80', fingers.thumb_2, 0.5, 0.1, -0.1);
//     // letterPress( '80', fingers.thumb_3, 0, 0, -0.5);

//     // letterPress( '80', fingers.wrist, 0, 0, 0);

//     // letterPress( '80', fingers.palm_1, 0, 0, 0);
//     // letterPress( '80', fingers.palm_2, 0, 0, -0.05);
//     // letterPress( '80', fingers.palm_3, 0, 0, 0.05);


//     // // ----- R -----

//     // letterPress( '82', fingers.pinky_1, 1.1, 0, -0.4);
//     // letterPress( '82', fingers.pinky_2, 1.4, 0, -0.6);
//     // letterPress( '82', fingers.pinky_3, 0.3, 0.3, -0.1);

//     // letterPress( '82', fingers.ring_1, 1.1, 0, 0);
//     // letterPress( '82', fingers.ring_2, 2, 0, -0.3);
//     // letterPress( '82', fingers.ring_3, 0.4, 0, 0);

//     // letterPress( '82', fingers.middle_1, -0.2, 0, -0.2);
//     // letterPress( '82', fingers.middle_2, 0.4, 0, 0);
//     // letterPress( '82', fingers.middle_3, 0.2, 0, 0);

//     // letterPress( '82', fingers.index_1, 0.2, 0, 0.3);
//     // letterPress( '82', fingers.index_2, 0, 0, 0);
//     // letterPress( '82', fingers.index_3, 0, 0, 0);

//     // letterPress( '82', fingers.thumb_1, 0, 0.9, 0.4);
//     // letterPress( '82', fingers.thumb_2, -1.8, 0.3, 0.2);
//     // letterPress( '82', fingers.thumb_3, 0.2, 0.1, 0);

//     // letterPress( '82', fingers.wrist, 0, 0, 0);

//     // letterPress( '82', fingers.palm_1, 0, 0, -0.09);
//     // letterPress( '82', fingers.palm_2, 0, 0, -0.1);
//     // letterPress( '82', fingers.palm_3, 0, 0, 0.02);


//     // // ----- S -----

//     // letterPress( '83', fingers.pinky_1, 1.1, 0, -0.4);
//     // letterPress( '83', fingers.pinky_2, 1.4, 0, -0.6);
//     // letterPress( '83', fingers.pinky_3, 0.3, 0.3, -0.1);

//     // letterPress( '83', fingers.ring_1, 1.1, 0, 0);
//     // letterPress( '83', fingers.ring_2, 2, 0, -0.3);
//     // letterPress( '83', fingers.ring_3, 0.4, 0, 0);

//     // letterPress( '83', fingers.middle_1, 1, 0, 0);
//     // letterPress( '83', fingers.middle_2, 2.1, 0, 0);
//     // letterPress( '83', fingers.middle_3, 0.5, 0, 0);

//     // letterPress( '83', fingers.index_1, 0, 0, 0.1);
//     // letterPress( '83', fingers.index_2, 0, 0, 0);
//     // letterPress( '83', fingers.index_3, 0, 0, 0);

//     // letterPress( '83', fingers.thumb_1, 0.1, -1.7, 0.3);
//     // letterPress( '83', fingers.thumb_2, 0.9, 0.3, 0.1);
//     // letterPress( '83', fingers.thumb_3, 0.5, 0, 0.2);

//     // letterPress( '83', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '83', fingers.palm_1, 0, 0, -0.09);
//     // letterPress( '83', fingers.palm_2, 0, 0, -0.1);
//     // letterPress( '83', fingers.palm_3, 0, 0, 0.02);


//     // // ----- T -----

//     // letterPress( '84', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '84', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '84', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '84', fingers.ring_1, 0, 0, 0);
//     // letterPress( '84', fingers.ring_2, 0, 0, 0);
//     // letterPress( '84', fingers.ring_3, 0, 0, 0);

//     // letterPress( '84', fingers.middle_1, 0, 0, 0);
//     // letterPress( '84', fingers.middle_2, 0, 0, 0);
//     // letterPress( '84', fingers.middle_3, 0, 0, 0);

//     // letterPress( '84', fingers.index_1, 0, 0, 0);
//     // letterPress( '84', fingers.index_2, 0, 0, 0);
//     // letterPress( '84', fingers.index_3, 0, 0, 0);

//     // letterPress( '84', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '84', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '84', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '84', fingers.wrist, 0, 0, 0);

//     // letterPress( '84', fingers.palm_1, 0, 0, 0);
//     // letterPress( '84', fingers.palm_2, 0, 0, 0);
//     // letterPress( '84', fingers.palm_3, 0, 0, 0);


//     // // ----- U -----

//     // letterPress( '85', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '85', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '85', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '85', fingers.ring_1, 0, 0, 0);
//     // letterPress( '85', fingers.ring_2, 0, 0, 0);
//     // letterPress( '85', fingers.ring_3, 0, 0, 0);

//     // letterPress( '85', fingers.middle_1, 0, 0, 0);
//     // letterPress( '85', fingers.middle_2, 0, 0, 0);
//     // letterPress( '85', fingers.middle_3, 0, 0, 0);

//     // letterPress( '85', fingers.index_1, 0, 0, 0);
//     // letterPress( '85', fingers.index_2, 0, 0, 0);
//     // letterPress( '85', fingers.index_3, 0, 0, 0);

//     // letterPress( '85', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '85', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '85', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '85', fingers.wrist, 0, 0, 0);

//     // letterPress( '85', fingers.palm_1, 0, 0, 0);
//     // letterPress( '85', fingers.palm_2, 0, 0, 0);
//     // letterPress( '85', fingers.palm_3, 0, 0, 0);


//     // // ----- V -----

//     // letterPress( '86', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '86', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '86', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '86', fingers.ring_1, 0, 0, 0);
//     // letterPress( '86', fingers.ring_2, 0, 0, 0);
//     // letterPress( '86', fingers.ring_3, 0, 0, 0);

//     // letterPress( '86', fingers.middle_1, 0, 0, 0);
//     // letterPress( '86', fingers.middle_2, 0, 0, 0);
//     // letterPress( '86', fingers.middle_3, 0, 0, 0);

//     // letterPress( '86', fingers.index_1, 0, 0, 0);
//     // letterPress( '86', fingers.index_2, 0, 0, 0);
//     // letterPress( '86', fingers.index_3, 0, 0, 0);

//     // letterPress( '86', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '86', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '86', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '86', fingers.wrist, 0, 0, 0);

//     // letterPress( '86', fingers.palm_1, 0, 0, 0);
//     // letterPress( '86', fingers.palm_2, 0, 0, 0);
//     // letterPress( '86', fingers.palm_3, 0, 0, 0);


//     // // ----- W -----

//     // letterPress( '87', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '87', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '87', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '87', fingers.ring_1, 0, 0, 0);
//     // letterPress( '87', fingers.ring_2, 0, 0, 0);
//     // letterPress( '87', fingers.ring_3, 0, 0, 0);

//     // letterPress( '87', fingers.middle_1, 0, 0, 0);
//     // letterPress( '87', fingers.middle_2, 0, 0, 0);
//     // letterPress( '87', fingers.middle_3, 0, 0, 0);

//     // letterPress( '87', fingers.index_1, 0, 0, 0);
//     // letterPress( '87', fingers.index_2, 0, 0, 0);
//     // letterPress( '87', fingers.index_3, 0, 0, 0);

//     // letterPress( '87', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '87', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '87', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '87', fingers.wrist, 0, 0, 0);

//     // letterPress( '87', fingers.palm_1, 0, 0, 0);
//     // letterPress( '87', fingers.palm_2, 0, 0, 0);
//     // letterPress( '87', fingers.palm_3, 0, 0, 0);


//     // // ----- X -----

//     // letterPress( '88', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '88', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '88', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '88', fingers.ring_1, 0, 0, 0);
//     // letterPress( '88', fingers.ring_2, 0, 0, 0);
//     // letterPress( '88', fingers.ring_3, 0, 0, 0);

//     // letterPress( '88', fingers.middle_1, 0, 0, 0);
//     // letterPress( '88', fingers.middle_2, 0, 0, 0);
//     // letterPress( '88', fingers.middle_3, 0, 0, 0);

//     // letterPress( '88', fingers.index_1, 0, 0, 0);
//     // letterPress( '88', fingers.index_2, 0, 0, 0);
//     // letterPress( '88', fingers.index_3, 0, 0, 0);

//     // letterPress( '88', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '88', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '88', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '88', fingers.wrist, 0, 0, 0);

//     // letterPress( '88', fingers.palm_1, 0, 0, 0);
//     // letterPress( '88', fingers.palm_2, 0, 0, 0);
//     // letterPress( '88', fingers.palm_3, 0, 0, 0);


//     // // ----- Y -----

//     // letterPress( '89', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '89', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '89', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '89', fingers.ring_1, 0, 0, 0);
//     // letterPress( '89', fingers.ring_2, 0, 0, 0);
//     // letterPress( '89', fingers.ring_3, 0, 0, 0);

//     // letterPress( '89', fingers.middle_1, 0, 0, 0);
//     // letterPress( '89', fingers.middle_2, 0, 0, 0);
//     // letterPress( '89', fingers.middle_3, 0, 0, 0);

//     // letterPress( '89', fingers.index_1, 0, 0, 0);
//     // letterPress( '89', fingers.index_2, 0, 0, 0);
//     // letterPress( '89', fingers.index_3, 0, 0, 0);

//     // letterPress( '89', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '89', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '89', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '89', fingers.wrist, 0, 0, 0);

//     // letterPress( '89', fingers.palm_1, 0, 0, 0);
//     // letterPress( '89', fingers.palm_2, 0, 0, 0);
//     // letterPress( '89', fingers.palm_3, 0, 0, 0);


//     // // ----- Z -----

//     // letterPress( '90', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '90', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '90', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '90', fingers.ring_1, 0, 0, 0);
//     // letterPress( '90', fingers.ring_2, 0, 0, 0);
//     // letterPress( '90', fingers.ring_3, 0, 0, 0);

//     // letterPress( '90', fingers.middle_1, 0, 0, 0);
//     // letterPress( '90', fingers.middle_2, 0, 0, 0);
//     // letterPress( '90', fingers.middle_3, 0, 0, 0);

//     // letterPress( '90', fingers.index_1, 0, 0, 0);
//     // letterPress( '90', fingers.index_2, 0, 0, 0);
//     // letterPress( '90', fingers.index_3, 0, 0, 0);

//     // letterPress( '90', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '90', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '90', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '90', fingers.wrist, 0, 0, 0);

//     // letterPress( '90', fingers.palm_1, 0, 0, 0);
//     // letterPress( '90', fingers.palm_2, 0, 0, 0);
//     // letterPress( '90', fingers.palm_3, 0, 0, 0);

//     // // ----- Þ -----

//     // letterPress( '191', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '191', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '191', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '191', fingers.ring_1, 0, 0, 0);
//     // letterPress( '191', fingers.ring_2, 0, 0, 0);
//     // letterPress( '191', fingers.ring_3, 0, 0, 0);

//     // letterPress( '191', fingers.middle_1, 0, 0, 0);
//     // letterPress( '191', fingers.middle_2, 0, 0, 0);
//     // letterPress( '191', fingers.middle_3, 0, 0, 0);

//     // letterPress( '191', fingers.index_1, 0, 0, 0);
//     // letterPress( '191', fingers.index_2, 0, 0, 0);
//     // letterPress( '191', fingers.index_3, 0, 0, 0);

//     // letterPress( '191', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '191', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '191', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '191', fingers.wrist, 0, 0, 0);

//     // letterPress( '191', fingers.palm_1, 0, 0, 0);
//     // letterPress( '191', fingers.palm_2, 0, 0, 0);
//     // letterPress( '191', fingers.palm_3, 0, 0, 0);


//     // // ----- Æ -----

//     // letterPress( '186', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '186', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '186', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '186', fingers.ring_1, 0, 0, 0);
//     // letterPress( '186', fingers.ring_2, 0, 0, 0);
//     // letterPress( '186', fingers.ring_3, 0, 0, 0);

//     // letterPress( '186', fingers.middle_1, 0, 0, 0);
//     // letterPress( '186', fingers.middle_2, 0, 0, 0);
//     // letterPress( '186', fingers.middle_3, 0, 0, 0);

//     // letterPress( '186', fingers.index_1, 0, 0, 0);
//     // letterPress( '186', fingers.index_2, 0, 0, 0);
//     // letterPress( '186', fingers.index_3, 0, 0, 0);

//     // letterPress( '186', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '186', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '186', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '186', fingers.wrist, 0, 0, 0);

//     // letterPress( '186', fingers.palm_1, 0, 0, 0);
//     // letterPress( '186', fingers.palm_2, 0, 0, 0);
//     // letterPress( '186', fingers.palm_3, 0, 0, 0);


//     // // ----- Ö -----

//     // letterPress( '189', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '189', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '189', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '189', fingers.ring_1, 0, 0, 0);
//     // letterPress( '189', fingers.ring_2, 0, 0, 0);
//     // letterPress( '189', fingers.ring_3, 0, 0, 0);

//     // letterPress( '189', fingers.middle_1, 0, 0, 0);
//     // letterPress( '189', fingers.middle_2, 0, 0, 0);
//     // letterPress( '189', fingers.middle_3, 0, 0, 0);

//     // letterPress( '189', fingers.index_1, 0, 0, 0);
//     // letterPress( '189', fingers.index_2, 0, 0, 0);
//     // letterPress( '189', fingers.index_3, 0, 0, 0);

//     // letterPress( '189', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '189', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '189', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '189', fingers.wrist, 0, 0, 0);

//     // letterPress( '189', fingers.palm_1, 0, 0, 0);
//     // letterPress( '189', fingers.palm_2, 0, 0, 0);
//     // letterPress( '189', fingers.palm_3, 0, 0, 0);




//     // var jz = fingers.wrist.z;
//     // var jy = fingers.wrist.y;

//     // var sx = fingers.index_1.x;

        
//     // var moveTimeout = setTimeout(function() {

//     //     var moveInterval = setInterval(function() {
            

//     //         // J
//     //         if (e.keyCode == '74') {
//     //             //console.log(fingers.wrist.z + "  Z");
//     //             //console.log(fingers.wrist.y + "  Y")
                

//     //             var posZ = Math.cos(jz)*0.2*(-1)+0.2;
//     //             var posY = Math.sin(jy)*0.2*(-1);

//     //             if (posZ < 0.4 && posZ >= 0) {
//     //                 fingers.wrist.z = posZ;
//     //             }

//     //             if (posY < 0.2 && posY >= -0.2) {
//     //                 fingers.wrist.y = posY;
//     //             }

//     //             jz += 0.05;
//     //             jy += 0.05; 
                
//     //             console.log(posZ);

//     //             if (jz > 6) {
//     //                 fingers.wrist.z = 0;
//     //                 jz = 0;
//     //                 clearInterval(moveInterval);
//     //             }


//     //         }          

//     //         else if (e.keyCode == '83') {
//     //             // console.log(sx)
//     //             var posX = Math.cos(sx)*(-0.7) + 0.7;
                
    
//     //             if (posX > 0 && posX < 1.4) {
//     //                 fingers.index_1.x = posX;
//     //             }

//     //             if (posX > 0 && posX < 0.6) {
//     //                 fingers.index_2.x = posX/2;
//     //             }

//     //             if (sx > 2.8*2) {
//     //                 clearInterval(moveInterval);
//     //             }
            

//     //             sx += 0.03;

//     //         }
        

//     // }, 20) }, 3000);




//     // // ----- 1 -----

//     // letterPress( '49', fingers.pinky_1, 1.1, 0, -0.4);
//     // letterPress( '49', fingers.pinky_2, 1.4, 0, -0.6);
//     // letterPress( '49', fingers.pinky_3, 0.3, 0.3, -0.1);

//     // letterPress( '49', fingers.ring_1, 1.1, 0, 0);
//     // letterPress( '49', fingers.ring_2, 2, 0, -0.3);
//     // letterPress( '49', fingers.ring_3, 0.4, 0, 0);

//     // letterPress( '49', fingers.middle_1, 1, 0, 0);
//     // letterPress( '49', fingers.middle_2, 2.1, 0, 0);
//     // letterPress( '49', fingers.middle_3, 0.5, 0, 0);

//     // letterPress( '49', fingers.index_1, 0.1, 0, 0.1);
//     // letterPress( '49', fingers.index_2, 0, 0, 0);
//     // letterPress( '49', fingers.index_3, 0, 0, 0);

//     // letterPress( '49', fingers.thumb_1, 0.1, -1.7, 0.3);
//     // letterPress( '49', fingers.thumb_2, 0.7, 0.3, 0.1);
//     // letterPress( '49', fingers.thumb_3, 0.1, 0, 0.1);

//     // letterPress( '49', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '49', fingers.palm_1, 0, 0, -0.09);
//     // letterPress( '49', fingers.palm_2, 0, 0, -0.1);
//     // letterPress( '49', fingers.palm_3, 0, 0, 0.02);

//     // // ----- 2 -----

//     // letterPress( '50', fingers.pinky_1, 1.1, 0, -0.4);
//     // letterPress( '50', fingers.pinky_2, 1.4, 0, -0.6);
//     // letterPress( '50', fingers.pinky_3, 0.3, 0.3, -0.1);

//     // letterPress( '50', fingers.ring_1, 1.1, 0, 0);
//     // letterPress( '50', fingers.ring_2, 2, 0, -0.3);
//     // letterPress( '50', fingers.ring_3, 0.4, 0, 0);

//     // letterPress( '50', fingers.middle_1, 0, 0, 0.1);
//     // letterPress( '50', fingers.middle_2, 0, 0, 0);
//     // letterPress( '50', fingers.middle_3, 0.1, 0, 0);

//     // letterPress( '50', fingers.index_1, 0.1, 0, 0);
//     // letterPress( '50', fingers.index_2, 0, 0, 0);
//     // letterPress( '50', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '50', fingers.thumb_1, 0.1, -1.8, 0.3);
//     // letterPress( '50', fingers.thumb_2, 0.9, 0.1, 0);
//     // letterPress( '50', fingers.thumb_3, 0.2, 0, 0.3);

//     // letterPress( '50', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '50', fingers.palm_1, 0, 0, -0.09);
//     // letterPress( '50', fingers.palm_2, 0, 0, -0.1);
//     // letterPress( '50', fingers.palm_3, 0, 0, 0.02);

//     // // ----- 3 -----

//     // letterPress( '51', fingers.pinky_1, 1.1, 0, -0.4);
//     // letterPress( '51', fingers.pinky_2, 1.4, 0, -0.6);
//     // letterPress( '51', fingers.pinky_3, 0.3, 0.3, -0.1);

//     // letterPress( '51', fingers.ring_1, 1.1, 0, 0);
//     // letterPress( '51', fingers.ring_2, 2, 0, -0.3);
//     // letterPress( '51', fingers.ring_3, 0.4, 0, 0);

//     // letterPress( '51', fingers.middle_1, 0, 0, 0.1);
//     // letterPress( '51', fingers.middle_2, 0, 0, 0);
//     // letterPress( '51', fingers.middle_3, 0.1, 0, 0);

//     // letterPress( '51', fingers.index_1, 0.1, 0, 0);
//     // letterPress( '51', fingers.index_2, 0, 0, 0);
//     // letterPress( '51', fingers.index_3, 0.1, 0, 0);

//     // letterPress( '51', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '51', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '51', fingers.thumb_3, 0, 0, -0.5);

//     // letterPress( '51', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '51', fingers.palm_1, 0, 0, -0.09);
//     // letterPress( '51', fingers.palm_2, 0, 0, -0.1);
//     // letterPress( '51', fingers.palm_3, 0, 0, 0);

//     // // ----- 4 -----

//     // letterPress( '52', fingers.pinky_1, 0.1, 0, 0);
//     // letterPress( '52', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '52', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '52', fingers.ring_1, 0.1, 0, 0);
//     // letterPress( '52', fingers.ring_2, 0, 0, 0);
//     // letterPress( '52', fingers.ring_3, 0, 0, 0);

//     // letterPress( '52', fingers.middle_1, 0.1, 0, 0);
//     // letterPress( '52', fingers.middle_2, 0, 0, 0);
//     // letterPress( '52', fingers.middle_3, 0, 0, 0);

//     // letterPress( '52', fingers.index_1, 0.2, 0, 0);
//     // letterPress( '52', fingers.index_2, 0, 0, 0);
//     // letterPress( '52', fingers.index_3, 0, 0, 0);

//     // letterPress( '52', fingers.thumb_1, 0.1, -1.9, 0.5);
//     // letterPress( '52', fingers.thumb_2, 1.1, 0.7, 0);
//     // letterPress( '52', fingers.thumb_3, 0.2, 0, 0.7);

//     // letterPress( '52', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '52', fingers.palm_1, 0, 0, 0);
//     // letterPress( '52', fingers.palm_2, 0, 0, 0);
//     // letterPress( '52', fingers.palm_3, 0, 0, 0);

//     // // ----- 5 -----

//     // letterPress( '53', fingers.pinky_1, 0, 0, 0.1);
//     // letterPress( '53', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '53', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '53', fingers.ring_1, 0, 0, 0.1);
//     // letterPress( '53', fingers.ring_2, 0, 0, 0);
//     // letterPress( '53', fingers.ring_3, 0, 0, 0);

//     // letterPress( '53', fingers.middle_1, 0, 0, 0);
//     // letterPress( '53', fingers.middle_2, 0, 0, 0);
//     // letterPress( '53', fingers.middle_3, 0, 0, 0);

//     // letterPress( '53', fingers.index_1, 0.1, 0, -0.1);
//     // letterPress( '53', fingers.index_2, 0, 0, 0);
//     // letterPress( '53', fingers.index_3, 0, 0, 0);

//     // letterPress( '53', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '53', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '53', fingers.thumb_3, 0, 0, -0.5);

//     // letterPress( '53', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '53', fingers.palm_1, 0, 0, 0);
//     // letterPress( '53', fingers.palm_2, 0, 0, 0);
//     // letterPress( '53', fingers.palm_3, 0, 0, 0);

//     // // ----- 6 -----

//     // letterPress( '54', fingers.pinky_1, 0.8, 0.1, -0.5);
//     // letterPress( '54', fingers.pinky_2, 1.5, 0.1, -0.7);
//     // letterPress( '54', fingers.pinky_3, 0.6, 0.3, -0.2);

//     // letterPress( '54', fingers.ring_1, 0.1, 0, 0);
//     // letterPress( '54', fingers.ring_2, 0, 0, 0);
//     // letterPress( '54', fingers.ring_3, 0, 0, 0);

//     // letterPress( '54', fingers.middle_1, 0, 0, 0);
//     // letterPress( '54', fingers.middle_2, 0, 0, 0);
//     // letterPress( '54', fingers.middle_3, 0, 0, 0);

//     // letterPress( '54', fingers.index_1, 0.2, 0, 0);
//     // letterPress( '54', fingers.index_2, 0, 0, 0);
//     // letterPress( '54', fingers.index_3, 0, 0, 0);

//     // letterPress( '54', fingers.thumb_1, 0.1, -2.3, 0.2);
//     // letterPress( '54', fingers.thumb_2, 1.1, 0.4, 0);
//     // letterPress( '54', fingers.thumb_3, 0.2, 0, 0);

//     // letterPress( '54', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '54', fingers.palm_1, 0, 0, 0);
//     // letterPress( '54', fingers.palm_2, 0, 0, 0);
//     // letterPress( '54', fingers.palm_3, 0, 0, 0);

//     // // ----- 7 -----

//     // letterPress( '55', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '55', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '55', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '55', fingers.ring_1, 1.1, 0, -0.1);
//     // letterPress( '55', fingers.ring_2, 1.9, 0, -0.4);
//     // letterPress( '55', fingers.ring_3, 0.5, 0, 0);

//     // letterPress( '55', fingers.middle_1, 0, 0, 0);
//     // letterPress( '55', fingers.middle_2, 0, 0, 0);
//     // letterPress( '55', fingers.middle_3, 0, 0, 0);

//     // letterPress( '55', fingers.index_1, 0.2, 0, 0);
//     // letterPress( '55', fingers.index_2, 0, 0, 0);
//     // letterPress( '55', fingers.index_3, 0, 0, 0);

//     // letterPress( '55', fingers.thumb_1, 0.1, -1.9, 0.1);
//     // letterPress( '55', fingers.thumb_2, 0.9, 0.4, 0.2);
//     // letterPress( '55', fingers.thumb_3, 0.1, 0, 0);

//     // letterPress( '55', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '55', fingers.palm_1, 0, 0, 0);
//     // letterPress( '55', fingers.palm_2, 0, 0, 0);
//     // letterPress( '55', fingers.palm_3, 0, 0, 0);

//     // // ----- 8 -----

//     // letterPress( '56', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '56', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '56', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '56', fingers.ring_1, 0.1, 0, 0);
//     // letterPress( '56', fingers.ring_2, 0, 0, 0);
//     // letterPress( '56', fingers.ring_3, 0, 0, 0);

//     // letterPress( '56', fingers.middle_1, 0.9, 0, 0);
//     // letterPress( '56', fingers.middle_2, 2, 0, 0);
//     // letterPress( '56', fingers.middle_3, 0.7, 0, 0);

//     // letterPress( '56', fingers.index_1, 0.1, 0, 0);
//     // letterPress( '56', fingers.index_2, 0, 0, 0);
//     // letterPress( '56', fingers.index_3, 0, 0, 0);

//     // letterPress( '56', fingers.thumb_1, 0.1, -1.7, 0.2);
//     // letterPress( '56', fingers.thumb_2, 0.6, 0.4, 0.2);
//     // letterPress( '56', fingers.thumb_3, 0.1, 0, 0);

//     // letterPress( '56', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '56', fingers.palm_1, 0, 0, 0);
//     // letterPress( '56', fingers.palm_2, 0, 0, 0);
//     // letterPress( '56', fingers.palm_3, 0, 0, 0);

//     // // ----- 9 -----

//     // letterPress( '57', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '57', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '57', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '57', fingers.ring_1, 0.1, 0, 0);
//     // letterPress( '57', fingers.ring_2, 0, 0, 0);
//     // letterPress( '57', fingers.ring_3, 0, 0, 0);

//     // letterPress( '57', fingers.middle_1, 0.2, 0, 0);
//     // letterPress( '57', fingers.middle_2, 0, 0, 0);
//     // letterPress( '57', fingers.middle_3, 0, 0, 0);

//     // letterPress( '57', fingers.index_1, 0.9, 0, 0.2);
//     // letterPress( '57', fingers.index_2, 2, 0, 0.2);
//     // letterPress( '57', fingers.index_3, 0.3, 0, 0);

//     // letterPress( '57', fingers.thumb_1, 0.1, -0.8, 0.3);
//     // letterPress( '57', fingers.thumb_2, 0.4, -0.2, 0.2);
//     // letterPress( '57', fingers.thumb_3, 0, -0.3, 0.5);

//     // letterPress( '57', fingers.wrist, -0.1, 0, 0);

//     // letterPress( '57', fingers.palm_1, 0, 0, 0);
//     // letterPress( '57', fingers.palm_2, 0, 0, 0);
//     // letterPress( '57', fingers.palm_3, 0, 0, 0);

//     // // ----- 10 -----

//     // letterPress( '192', fingers.pinky_1, 1.2, 0.2, -0.4);
//     // letterPress( '192', fingers.pinky_2, 1.3, 0, -0.2);
//     // letterPress( '192', fingers.pinky_3, 1, 0.3, -0.5);

//     // letterPress( '192', fingers.ring_1, 1.2, 0, -0.1);
//     // letterPress( '192', fingers.ring_2, 1.6, 0.1, -0.2);
//     // letterPress( '192', fingers.ring_3, 1.3, 0, -0.1);

//     // letterPress( '192', fingers.middle_1, 1.2, 0, 0);
//     // letterPress( '192', fingers.middle_2, 1.6, 0, 0);
//     // letterPress( '192', fingers.middle_3, 1.4, 0, 0);

//     // letterPress( '192', fingers.index_1, 1.3, -0.1, 0.2);
//     // letterPress( '192', fingers.index_2, 1.8, -0.2, 0.2);
//     // letterPress( '192', fingers.index_3, 0.7, 0, 0);

//     // letterPress( '192', fingers.thumb_1, 0.1, -0.2, 0);
//     // letterPress( '192', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '192', fingers.thumb_3, 0, 0, -0.5);

//     // letterPress( '192', fingers.wrist, 0, 0.2, 0.5);

//     // letterPress( '192', fingers.palm_1, 0, 0, -0.07);
//     // letterPress( '192', fingers.palm_2, 0, 0, -0.12);
//     // letterPress( '192', fingers.palm_3, 0, 0, 0.06);







//     // // ----- SPACE -----
//     // letterPress( '32', fingers.pinky_1, 0, 0, 0);
//     // letterPress( '32', fingers.pinky_2, 0, 0, 0);
//     // letterPress( '32', fingers.pinky_3, 0, 0, 0);

//     // letterPress( '32', fingers.ring_1, 0, 0, 0);
//     // letterPress( '32', fingers.ring_2, 0, 0, 0);
//     // letterPress( '32', fingers.ring_3, 0, 0, 0);

//     // letterPress( '32', fingers.middle_1, 0, 0, 0);
//     // letterPress( '32', fingers.middle_2, 0, 0, 0);
//     // letterPress( '32', fingers.middle_3, 0, 0, 0);

//     // letterPress( '32', fingers.index_1, 0, 0, 0);
//     // letterPress( '32', fingers.index_2, 0, 0, 0);
//     // letterPress( '32', fingers.index_3, 0, 0, 0);

//     // letterPress( '32', fingers.thumb_1, 0, 0, 0);
//     // letterPress( '32', fingers.thumb_2, 0, 0, 0);
//     // letterPress( '32', fingers.thumb_3, 0, 0, 0);

//     // letterPress( '32', fingers.wrist, 0, 0, 0);

//     // letterPress( '32', fingers.palm_1, 0, 0, 0);
//     // letterPress( '32', fingers.palm_2, 0, 0, 0);
//     // letterPress( '32', fingers.palm_3, 0, 0, 0);

//     //render();

// }






var span = $('<span>').css('display','inline-block')
.css('word-break','break-all').appendTo('body').css('visibility','hidden');

 const initSpan = (textarea) => {
  span.text(textarea.text())
      .width(textarea.width())      
      //.css('font',textarea.css('font'));
}


// $('textarea').on({
//     input: ()=>{
//       var text = $(this).val();      
//       span.text(text);      
//       $(this).height(text ? span.height() : '1.1em');
//     },
//     focus: ()=>{
//      initSpan($(this));
//     },
//     keypress: (e)=>{
//         if(e.which == 13) e.preventDefault();
//     }
// });
