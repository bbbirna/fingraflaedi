            // ----- X -----

            letterPress( '65', fingers.pinky_1, 0, 0, 0);
            letterPress( '65', fingers.pinky_2, 0, 0, 0);
            letterPress( '65', fingers.pinky_3, 0, 0, 0);

            letterPress( '65', fingers.ring_1, 0, 0, 0);
            letterPress( '65', fingers.ring_2, 0, 0, 0);
            letterPress( '65', fingers.ring_3, 0, 0, 0);

            letterPress( '65', fingers.middle_1, 0, 0, 0);
            letterPress( '65', fingers.middle_2, 0, 0, 0);
            letterPress( '65', fingers.middle_3, 0, 0, 0);

            letterPress( '65', fingers.index_1, 0, 0, 0);
            letterPress( '65', fingers.index_2, 0, 0, 0);
            letterPress( '65', fingers.index_3, 0, 0, 0);

            letterPress( '65', fingers.thumb_1, 0, 0, 0);
            letterPress( '65', fingers.thumb_2, 0, 0, 0);
            letterPress( '65', fingers.thumb_3, 0, 0, 0);

            letterPress( '65', fingers.wrist, 0, 0, 0);

            letterPress( '65', fingers.palm_1, 0, 0, 0);
            letterPress( '65', fingers.palm_2, 0, 0, 0);
            letterPress( '65', fingers.palm_3, 0, 0, 0);




        const pinky_1x = model.skeleton.bones[14].rotation.x
        const pinky_1y = model.skeleton.bones[14].rotation.y
        const pinky_1z = model.skeleton.bones[14].rotation.z

        const pinky_2x = model.skeleton.bones[15].rotation.x
        const pinky_2y = model.skeleton.bones[15].rotation.y
        const pinky_2z = model.skeleton.bones[15].rotation.z

        const pinky_3x = model.skeleton.bones[16].rotation.x
        const pinky_3y = model.skeleton.bones[16].rotation.y
        const pinky_3z = model.skeleton.bones[16].rotation.z

        const ring_1x = model.skeleton.bones[9].rotation.x
        const ring_1y = model.skeleton.bones[9].rotation.y
        const ring_1z = model.skeleton.bones[9].rotation.z

        const ring_2x = model.skeleton.bones[10].rotation.x
        const ring_2y = model.skeleton.bones[10].rotation.y
        const ring_2z = model.skeleton.bones[10].rotation.z

        const ring_3x = model.skeleton.bones[11].rotation.x
        const ring_3y = model.skeleton.bones[11].rotation.y
        const ring_3z = model.skeleton.bones[11].rotation.z

        const middle_1x = model.skeleton.bones[4].rotation.x
        const middle_1y = model.skeleton.bones[4].rotation.y
        const middle_1z = model.skeleton.bones[4].rotation.z

        const middle_2x = model.skeleton.bones[5].rotation.x
        const middle_2y = model.skeleton.bones[5].rotation.y
        const middle_2z = model.skeleton.bones[5].rotation.z

        const middle_3x = model.skeleton.bones[6].rotation.x
        const middle_3y = model.skeleton.bones[6].rotation.y
        const middle_3z = model.skeleton.bones[6].rotation.z

        const index_1x = model.skeleton.bones[19].rotation.x
        const index_1y = model.skeleton.bones[19].rotation.y
        const index_1z = model.skeleton.bones[19].rotation.z

        const index_2x = model.skeleton.bones[20].rotation.x
        const index_2y = model.skeleton.bones[20].rotation.y
        const index_2z = model.skeleton.bones[20].rotation.z

        const index_3x = model.skeleton.bones[21].rotation.x
        const index_3y = model.skeleton.bones[21].rotation.y
        const index_3z = model.skeleton.bones[21].rotation.z

        const thumb_1x = model.skeleton.bones[23].rotation.x
        const thumb_1y = model.skeleton.bones[23].rotation.y
        const thumb_1z = model.skeleton.bones[23].rotation.z

        const thumb_2x = model.skeleton.bones[24].rotation.x
        const thumb_2y = model.skeleton.bones[24].rotation.y
        const thumb_2z = model.skeleton.bones[24].rotation.z

        const thumb_3x = model.skeleton.bones[25].rotation.x
        const thumb_3y = model.skeleton.bones[25].rotation.y
        const thumb_3z = model.skeleton.bones[25].rotation.z

        const wrist_x = model.skeleton.bones[1].rotation.x
        const wrist_y = model.skeleton.bones[1].rotation.y
        const wrist_z = model.skeleton.bones[1].rotation.z

        const palm_1z = model.skeleton.bones[7].rotation.z
        const palm_2z = model.skeleton.bones[12].rotation.z
        const palm_3z = model.skeleton.bones[17].rotation.z

















        //önnur utgafa--- kannski léttari?

        // function checkKey(e) {

        //     e = e || window.event;

        //     // let letterArray = [];
        //     // letterArray.push(e.keyCode);
        //     // console.log(letterArray);

        //     console.log(e.keyCode)

            



        //     var letterPress = (bone, xVal, yVal, zVal) => {


        //         var rotX = bone.x;
        //         var rotY = bone.y;
        //         var rotZ = bone.z;


        //         let directionX = 0.01;
        //         let directionY = 0.01;
        //         let directionZ = 0.003;

        //         if (rotX > xVal) {
        //             directionX = -0.01;
        //         }

        //         if (rotY > yVal) {
        //             directionY = -0.01;
        //         }

        //         if (rotZ > zVal) {
        //             directionZ = -0.003;
        //         }
                
        //         var moveX = setInterval(function() {
                
        //             if (rotX >= xVal && directionX == 0.01) {
        //                 clearInterval(moveX);
        //             }
                  
        //             if (rotX <= xVal && directionX == -0.01) {
        //                 clearInterval(moveX);
        //             }
                   
        //             bone.x = rotX;
        //             rotX += directionX;

        //             renderer.render( scene, camera );

        //         }, 20);

        //         var moveY = setInterval(function() {
                
        //             if (rotY >= yVal && directionY == 0.01) {
        //                 clearInterval(moveY);
        //             }
                  
        //             if (rotY <= yVal && directionY == -0.01) {
        //                 clearInterval(moveY);
        //             }
                   
        //             bone.y = rotY;
        //             rotY += directionY;

        //             renderer.render( scene, camera );

        //         }, 20);

        //         var moveZ = setInterval(function() {
                
        //             if (rotZ >= zVal && directionZ == 0.003) {
        //                 clearInterval(moveZ);
        //             }
                  
        //             if (rotZ <= zVal && directionZ == -0.003) {
        //                 clearInterval(moveZ);
        //             }
                   
        //             bone.z = rotZ;
        //             rotZ += directionZ;

        //             renderer.render( scene, camera );

        //         }, 20);
                

        //     }

        //     if (e.keyCode == '65') {
        //          // ----- A 65 ------
        //         letterPress(fingers.pinky_1, 1.5, 0, -0.5);
        //         letterPress(fingers.pinky_2, 1, 0, -0.2);
        //         letterPress(fingers.pinky_3, 0.5, 0.3, -0.2);

        //         letterPress(fingers.ring_1, 1.4, 0, -0.1);
        //         letterPress(fingers.ring_2, 1.7, 0, -0.2);
        //         letterPress(fingers.ring_3, 0.3, 0, 0);

        //         letterPress(fingers.middle_1, 1.3, 0, 0);
        //         letterPress(fingers.middle_2, 1.8, 0, 0);
        //         letterPress(fingers.middle_3, 0.3, 0, 0);

        //         letterPress(fingers.index_1, 1.15, 0, 0.15);
        //         letterPress(fingers.index_2, 1.9, 0, 0.25);
        //         letterPress(fingers.index_3, 0.6, 0, 0);

        //         letterPress(fingers.thumb_1, 0, -0.6, 0.5);
        //         letterPress(fingers.thumb_2, 0, 0, 0);
        //         letterPress(fingers.thumb_3, 0, 0, 0);

        //         letterPress(fingers.wrist, 0, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, -0.055); //ring
        //         letterPress(fingers.palm_2, 0, 0, -0.085); //pinky
        //         letterPress(fingers.palm_3, 0, 0, 0.055); //index
        //     }

           
            

        //     else if (e.keyCode == '66') {
        //         // ----- B  66 -----
        //         letterPress(fingers.pinky_1, 0, 0, -0.3);
        //         letterPress(fingers.pinky_2, 0.1, 0, 0);
        //         letterPress(fingers.pinky_3, 0.1, 0, 0);

        //         letterPress(fingers.ring_1, 0, 0, -0.1);
        //         letterPress(fingers.ring_2, 0.1, 0, 0);
        //         letterPress(fingers.ring_3, 0.1, 0, 0);

        //         letterPress(fingers.middle_1, 0, 0, 0);
        //         letterPress(fingers.middle_2, 0.1, 0, 0);
        //         letterPress(fingers.middle_3, 0.1, 0, 0);

        //         letterPress(fingers.index_1, 0, 0, 0.1);
        //         letterPress(fingers.index_2, 0.1, 0, 0);
        //         letterPress(fingers.index_3, 0.1, 0, 0);

        //         letterPress(fingers.thumb_1, -0.1, -0.4, 0.4);
        //         letterPress(fingers.thumb_2, 0, 0, 0.2);
        //         letterPress(fingers.thumb_3, 0, 0, -0.1);

        //         letterPress(fingers.wrist, -0.1, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, -0.04);
        //         letterPress(fingers.palm_2, 0, 0, -0.12);
        //         letterPress(fingers.palm_3, 0, 0, 0.08);
        //     }

        //     else if (e.keyCode == '67') {

        //         // ----- C 67 -----
        //         letterPress(fingers.pinky_1, 1.1, 0, -0.5);
        //         letterPress(fingers.pinky_2, 1.3, 0.1, -0.4);
        //         letterPress(fingers.pinky_3, 0.8, 0.2, -0.3);

        //         letterPress(fingers.ring_1, 1.2, 0, -0.2);
        //         letterPress(fingers.ring_2, 1.9, 0.1, -0.2);
        //         letterPress(fingers.ring_3, 0.3, 0, 0);

        //         letterPress(fingers.middle_1, 1.1, 0, 0);
        //         letterPress(fingers.middle_2, 2, 0, 0);
        //         letterPress(fingers.middle_3, 0.3, 0, 0);

        //         letterPress(fingers.index_1, 0.6, -0.1, 0);
        //         letterPress(fingers.index_2, 0.7, 0, 0);
        //         letterPress(fingers.index_3, 0.7, 0, 0);

        //         letterPress(fingers.thumb_1, 0.1, -1.2, 0);
        //         letterPress(fingers.thumb_2, 0.1, 0.2, 0.1);
        //         letterPress(fingers.thumb_3, 0, -0.2, 0.4);

        //         letterPress(fingers.wrist, -0.1, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, -0.02);
        //         letterPress(fingers.palm_2, 0, 0, -0.07);
        //         letterPress(fingers.palm_3, 0, 0, 0.05);
        //     }


        //     else if (e.keyCode == '68') {
        //         // ----- D 68 -----
        //         letterPress(fingers.pinky_1, 0.1, 0, 0);
        //         letterPress(fingers.pinky_2,0.1, 0, 0);
        //         letterPress(fingers.pinky_3, 0.1, 0, 0);

        //         letterPress(fingers.ring_1, 0.3, 0.1, 0);
        //         letterPress(fingers.ring_2, 0.3, 0, 0);
        //         letterPress(fingers.ring_3, 0.1, 0, 0);

        //         letterPress(fingers.middle_1, 0.6, 0, 0);
        //         letterPress(fingers.middle_2, 1.4, 0, 0);
        //         letterPress(fingers.middle_3, 0.7, 0, 0);

        //         letterPress(fingers.index_1, 0.1, 0, 0);
        //         letterPress(fingers.index_2, 0.2, 0, 0);
        //         letterPress(fingers.index_3, 0.1, 0, 0);

        //         letterPress(fingers.thumb_1, 0, -1.7, -0.1);
        //         letterPress(fingers.thumb_2, 0.6, 0.5, 0.1);
        //         letterPress(fingers.thumb_3, 0, 0, 0.2);

        //         letterPress(fingers.wrist, -0.1, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, 0);
        //         letterPress(fingers.palm_2, 0, 0, 0);
        //         letterPress(fingers.palm_3, 0, 0, 0);
        //     }

        //     else if (e.keyCode == '32') {
        //         // ----- SPACE 32 -----
        //         letterPress(fingers.pinky_1, 0, 0, 0);
        //         letterPress(fingers.pinky_2, 0, 0, 0);
        //         letterPress(fingers.pinky_3, 0, 0, 0);

        //         letterPress(fingers.ring_1, 0, 0, 0);
        //         letterPress(fingers.ring_2, 0, 0, 0);
        //         letterPress(fingers.ring_3, 0, 0, 0);

        //         letterPress(fingers.middle_1, 0, 0, 0);
        //         letterPress(fingers.middle_2, 0, 0, 0);
        //         letterPress(fingers.middle_3, 0, 0, 0);

        //         letterPress(fingers.index_1, 0, 0, 0);
        //         letterPress(fingers.index_2, 0, 0, 0);
        //         letterPress(fingers.index_3, 0, 0, 0);

        //         letterPress(fingers.thumb_1, 0, 0, 0);
        //         letterPress(fingers.thumb_2, 0, 0, 0);
        //         letterPress(fingers.thumb_3, 0, 0, 0);

        //         letterPress(fingers.wrist, 0, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, 0);
        //         letterPress(fingers.palm_2, 0, 0, 0);
        //         letterPress(fingers.palm_3, 0, 0, 0);
        //     }




        //     render();

        // }

        // önnur utgafa hættir











        


















            // model.skeleton.bones[14].rotation.x = count0;
            // model.skeleton.bones[15].rotation.x = count1;
            // model.skeleton.bones[16].rotation.x = count2;

            // model.skeleton.bones[14].rotation.y = count3;
            // model.skeleton.bones[15].rotation.y = count4;
            // model.skeleton.bones[16].rotation.y = count5;

            // model.skeleton.bones[14].rotation.z = count6;
            // model.skeleton.bones[15].rotation.z = count7;
            // model.skeleton.bones[16].rotation.z = count8;


            // //VISIFINGUR

            // model.skeleton.bones[19].rotation.x = count9;
            // model.skeleton.bones[20].rotation.x = count10;
            // model.skeleton.bones[21].rotation.x = count11;

            // model.skeleton.bones[19].rotation.y = count12;
            // model.skeleton.bones[20].rotation.y = count13;
            // model.skeleton.bones[21].rotation.y = count14;

            // model.skeleton.bones[19].rotation.z = count15;
            // model.skeleton.bones[20].rotation.z = count16;
            // model.skeleton.bones[21].rotation.z = count17;


            // //BAUGFINGUR

            // model.skeleton.bones[9].rotation.x = count18;
            // model.skeleton.bones[10].rotation.x = count19;
            // model.skeleton.bones[11].rotation.x = count20;

            // model.skeleton.bones[9].rotation.y = count21;
            // model.skeleton.bones[10].rotation.y = count22;
            // model.skeleton.bones[11].rotation.y = count23;

            // model.skeleton.bones[9].rotation.z = count24;
            // model.skeleton.bones[10].rotation.z = count25;
            // model.skeleton.bones[11].rotation.z = count26;


            // //FU

            // model.skeleton.bones[4].rotation.x = count27;
            // model.skeleton.bones[5].rotation.x = count28;
            // model.skeleton.bones[6].rotation.x = count29;

            // model.skeleton.bones[4].rotation.y = count30;
            // model.skeleton.bones[5].rotation.y = count31;
            // model.skeleton.bones[6].rotation.y = count32;

            // model.skeleton.bones[4].rotation.z = count33;
            // model.skeleton.bones[5].rotation.z = count34;
            // model.skeleton.bones[6].rotation.z = count35;


            // //THUMB

            // model.skeleton.bones[23].rotation.x = count36;
            // model.skeleton.bones[24].rotation.x = count37;
            // model.skeleton.bones[25].rotation.x = count38;

            // model.skeleton.bones[23].rotation.y = count39;
            // model.skeleton.bones[24].rotation.y = count40;
            // model.skeleton.bones[25].rotation.y = count41;

            // model.skeleton.bones[23].rotation.z = count42;
            // model.skeleton.bones[24].rotation.z = count43;
            // model.skeleton.bones[25].rotation.z = count44;


            // //ULNLIÐUR

            // model.skeleton.bones[1].rotation.x = count45;
            // model.skeleton.bones[1].rotation.y = count46;
            // model.skeleton.bones[1].rotation.z = count47;

            // model.skeleton.bones[7].rotation.z = -0.02; //BAUGFINGUR
            // model.skeleton.bones[12].rotation.z = -0.07; //LITLI
            // model.skeleton.bones[17].rotation.z = 0.05; //VÍSI































        // //önnur utgafa--- kannski léttari?


        // document.onkeydown = checkKey;

        // function checkKey(e) {

        //     e = e || window.event;

        //     // let letterArray = [];
        //     // letterArray.push(e.keyCode);
        //     // console.log(letterArray);

        //     console.log(e.keyCode)

            



        //     var letterPress = (bone, xVal, yVal, zVal) => {


        //         var rotX = bone.x;
        //         var rotY = bone.y;
        //         var rotZ = bone.z;


        //         let directionX = 0.01;
        //         let directionY = 0.01;
        //         let directionZ = 0.003;

        //         if (rotX > xVal) {
        //             directionX = -0.01;
        //         }

        //         if (rotY > yVal) {
        //             directionY = -0.01;
        //         }

        //         if (rotZ > zVal) {
        //             directionZ = -0.003;
        //         }
                
        //         var moveX = setInterval(function() {
                
        //             if (rotX >= xVal && directionX == 0.01) {
        //                 clearInterval(moveX);
        //             }
                  
        //             if (rotX <= xVal && directionX == -0.01) {
        //                 clearInterval(moveX);
        //             }
                   
        //             bone.x = rotX;
        //             rotX += directionX;

        //             renderer.render( scene, camera );

        //         }, 20);

        //         var moveY = setInterval(function() {
                
        //             if (rotY >= yVal && directionY == 0.01) {
        //                 clearInterval(moveY);
        //             }
                  
        //             if (rotY <= yVal && directionY == -0.01) {
        //                 clearInterval(moveY);
        //             }
                   
        //             bone.y = rotY;
        //             rotY += directionY;

        //             renderer.render( scene, camera );

        //         }, 20);

        //         var moveZ = setInterval(function() {
                
        //             if (rotZ >= zVal && directionZ == 0.003) {
        //                 clearInterval(moveZ);
        //             }
                  
        //             if (rotZ <= zVal && directionZ == -0.003) {
        //                 clearInterval(moveZ);
        //             }
                   
        //             bone.z = rotZ;
        //             rotZ += directionZ;

        //             renderer.render( scene, camera );

        //         }, 20);
                

        //     }

        //     if (e.keyCode == '65') {
        //          // ----- A 65 ------
        //         letterPress(fingers.pinky_1, 1.5, 0, -0.5);
        //         letterPress(fingers.pinky_2, 1, 0, -0.2);
        //         letterPress(fingers.pinky_3, 0.5, 0.3, -0.2);

        //         letterPress(fingers.ring_1, 1.4, 0, -0.1);
        //         letterPress(fingers.ring_2, 1.7, 0, -0.2);
        //         letterPress(fingers.ring_3, 0.3, 0, 0);

        //         letterPress(fingers.middle_1, 1.3, 0, 0);
        //         letterPress(fingers.middle_2, 1.8, 0, 0);
        //         letterPress(fingers.middle_3, 0.3, 0, 0);

        //         letterPress(fingers.index_1, 1.15, 0, 0.15);
        //         letterPress(fingers.index_2, 1.9, 0, 0.25);
        //         letterPress(fingers.index_3, 0.6, 0, 0);

        //         letterPress(fingers.thumb_1, 0, -0.6, 0.5);
        //         letterPress(fingers.thumb_2, 0, 0, 0);
        //         letterPress(fingers.thumb_3, 0, 0, 0);

        //         letterPress(fingers.wrist, 0, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, -0.055); //ring
        //         letterPress(fingers.palm_2, 0, 0, -0.085); //pinky
        //         letterPress(fingers.palm_3, 0, 0, 0.055); //index
        //     }

           
            

        //     else if (e.keyCode == '66') {
        //         // ----- B  66 -----
        //         letterPress(fingers.pinky_1, 0, 0, -0.3);
        //         letterPress(fingers.pinky_2, 0.1, 0, 0);
        //         letterPress(fingers.pinky_3, 0.1, 0, 0);

        //         letterPress(fingers.ring_1, 0, 0, -0.1);
        //         letterPress(fingers.ring_2, 0.1, 0, 0);
        //         letterPress(fingers.ring_3, 0.1, 0, 0);

        //         letterPress(fingers.middle_1, 0, 0, 0);
        //         letterPress(fingers.middle_2, 0.1, 0, 0);
        //         letterPress(fingers.middle_3, 0.1, 0, 0);

        //         letterPress(fingers.index_1, 0, 0, 0.1);
        //         letterPress(fingers.index_2, 0.1, 0, 0);
        //         letterPress(fingers.index_3, 0.1, 0, 0);

        //         letterPress(fingers.thumb_1, -0.1, -0.4, 0.4);
        //         letterPress(fingers.thumb_2, 0, 0, 0.2);
        //         letterPress(fingers.thumb_3, 0, 0, -0.1);

        //         letterPress(fingers.wrist, -0.1, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, -0.04);
        //         letterPress(fingers.palm_2, 0, 0, -0.12);
        //         letterPress(fingers.palm_3, 0, 0, 0.08);
        //     }

        //     else if (e.keyCode == '67') {

        //         // ----- C 67 -----
        //         letterPress(fingers.pinky_1, 1.1, 0, -0.5);
        //         letterPress(fingers.pinky_2, 1.3, 0.1, -0.4);
        //         letterPress(fingers.pinky_3, 0.8, 0.2, -0.3);

        //         letterPress(fingers.ring_1, 1.2, 0, -0.2);
        //         letterPress(fingers.ring_2, 1.9, 0.1, -0.2);
        //         letterPress(fingers.ring_3, 0.3, 0, 0);

        //         letterPress(fingers.middle_1, 1.1, 0, 0);
        //         letterPress(fingers.middle_2, 2, 0, 0);
        //         letterPress(fingers.middle_3, 0.3, 0, 0);

        //         letterPress(fingers.index_1, 0.6, -0.1, 0);
        //         letterPress(fingers.index_2, 0.7, 0, 0);
        //         letterPress(fingers.index_3, 0.7, 0, 0);

        //         letterPress(fingers.thumb_1, 0.1, -1.2, 0);
        //         letterPress(fingers.thumb_2, 0.1, 0.2, 0.1);
        //         letterPress(fingers.thumb_3, 0, -0.2, 0.4);

        //         letterPress(fingers.wrist, -0.1, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, -0.02);
        //         letterPress(fingers.palm_2, 0, 0, -0.07);
        //         letterPress(fingers.palm_3, 0, 0, 0.05);
        //     }


        //     else if (e.keyCode == '68') {
        //         // ----- D 68 -----
        //         letterPress(fingers.pinky_1, 0.1, 0, 0);
        //         letterPress(fingers.pinky_2,0.1, 0, 0);
        //         letterPress(fingers.pinky_3, 0.1, 0, 0);

        //         letterPress(fingers.ring_1, 0.3, 0.1, 0);
        //         letterPress(fingers.ring_2, 0.3, 0, 0);
        //         letterPress(fingers.ring_3, 0.1, 0, 0);

        //         letterPress(fingers.middle_1, 0.6, 0, 0);
        //         letterPress(fingers.middle_2, 1.4, 0, 0);
        //         letterPress(fingers.middle_3, 0.7, 0, 0);

        //         letterPress(fingers.index_1, 0.1, 0, 0);
        //         letterPress(fingers.index_2, 0.2, 0, 0);
        //         letterPress(fingers.index_3, 0.1, 0, 0);

        //         letterPress(fingers.thumb_1, 0, -1.7, -0.1);
        //         letterPress(fingers.thumb_2, 0.6, 0.5, 0.1);
        //         letterPress(fingers.thumb_3, 0, 0, 0.2);

        //         letterPress(fingers.wrist, -0.1, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, 0);
        //         letterPress(fingers.palm_2, 0, 0, 0);
        //         letterPress(fingers.palm_3, 0, 0, 0);
        //     }

        //     else if (e.keyCode == '32') {
        //         // ----- SPACE 32 -----
        //         letterPress(fingers.pinky_1, 0, 0, 0);
        //         letterPress(fingers.pinky_2, 0, 0, 0);
        //         letterPress(fingers.pinky_3, 0, 0, 0);

        //         letterPress(fingers.ring_1, 0, 0, 0);
        //         letterPress(fingers.ring_2, 0, 0, 0);
        //         letterPress(fingers.ring_3, 0, 0, 0);

        //         letterPress(fingers.middle_1, 0, 0, 0);
        //         letterPress(fingers.middle_2, 0, 0, 0);
        //         letterPress(fingers.middle_3, 0, 0, 0);

        //         letterPress(fingers.index_1, 0, 0, 0);
        //         letterPress(fingers.index_2, 0, 0, 0);
        //         letterPress(fingers.index_3, 0, 0, 0);

        //         letterPress(fingers.thumb_1, 0, 0, 0);
        //         letterPress(fingers.thumb_2, 0, 0, 0);
        //         letterPress(fingers.thumb_3, 0, 0, 0);

        //         letterPress(fingers.wrist, 0, 0, 0);

        //         letterPress(fingers.palm_1, 0, 0, 0);
        //         letterPress(fingers.palm_2, 0, 0, 0);
        //         letterPress(fingers.palm_3, 0, 0, 0);
        //     }




        //     render();

        //}

        // önnur utgafa hættir














        
