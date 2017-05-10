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










     // //-- 
        document.onkeydown = checkKey;


        // fyrsta utgafa 

        function checkKey(e) {

            e = e || window.event;

            let letterArray = [];
            letterArray.push(e.keyCode);
            console.log(letterArray);



            var letterPress = ( keyCode, bone, xVal, yVal, zVal) => {



                if (e.keyCode == keyCode) {

                    //console.log(keyCode);

                    var rotX = bone.x;
                    var rotY = bone.y;
                    var rotZ = bone.z;


                    let directionX = 0.01;
                    let directionY = 0.01;
                    let directionZ = 0.003;

                    if (rotX > xVal) {
                        directionX = -0.01;
                    }

                    if (rotY > yVal) {
                        directionY = -0.01;
                    }

                    if (rotZ > zVal) {
                        directionZ = -0.003;
                    }
                    
                    var moveX = setInterval(() => {
                    
                        if (rotX >= xVal && directionX == 0.01) {
                            clearInterval(moveX);
                        }
                      
                        if (rotX <= xVal && directionX == -0.01) {
                            clearInterval(moveX);
                        }
                       
                        bone.x = rotX;
                        rotX += directionX;


                    }, 20);

                    var moveY = setInterval(() => {
                    
                        if (rotY >= yVal && directionY == 0.01) {
                            clearInterval(moveY);
                        }
                      
                        if (rotY <= yVal && directionY == -0.01) {
                            clearInterval(moveY);
                        }
                       
                        bone.y = rotY;
                        rotY += directionY;


                    }, 20);

                    var moveZ = setInterval(() => {
                    
                        if (rotZ >= zVal && directionZ == 0.003) {
                            clearInterval(moveZ);
                        }
                      
                        if (rotZ <= zVal && directionZ == -0.003) {
                            clearInterval(moveZ);
                        }
                       
                        bone.z = rotZ;
                        rotZ += directionZ;
                        

                    }, 20);
                }

            }


            letterPress( '65', fingers.pinky_1, 1.5, 0, -0.5);
            letterPress( '65', fingers.pinky_2, 1, 0, -0.2);
            letterPress( '65', fingers.pinky_3, 0.5, 0.3, -0.2);

            letterPress( '65', fingers.ring_1, 1.4, 0, -0.1);
            letterPress( '65', fingers.ring_2, 1.7, 0, -0.2);
            letterPress( '65', fingers.ring_3, 0.3, 0, 0);

            letterPress( '65', fingers.middle_1, 1.3, 0, 0);
            letterPress( '65', fingers.middle_2, 1.8, 0, 0);
            letterPress( '65', fingers.middle_3, 0.3, 0, 0);

            letterPress( '65', fingers.index_1, 1.15, 0, 0.15);
            letterPress( '65', fingers.index_2, 1.9, 0, 0.25);
            letterPress( '65', fingers.index_3, 0.6, 0, 0);

            letterPress( '65', fingers.thumb_1, 0, -0.6, 0.5);
            letterPress( '65', fingers.thumb_2, 0, 0, 0);
            letterPress( '65', fingers.thumb_3, 0, 0, 0);

            letterPress( '65', fingers.wrist, 0, 0, 0);

            letterPress( '65', fingers.palm_1, 0, 0, -0.055); //ring
            letterPress( '65', fingers.palm_2, 0, 0, -0.085); //pinky
            letterPress( '65', fingers.palm_3, 0, 0, 0.055); //index
            


            // ----- B -----
            letterPress( '66', fingers.pinky_1, 0, 0, -0.3);
            letterPress( '66', fingers.pinky_2, 0.1, 0, 0);
            letterPress( '66', fingers.pinky_3, 0.1, 0, 0);

            letterPress( '66', fingers.ring_1, 0, 0, -0.1);
            letterPress( '66', fingers.ring_2, 0.1, 0, 0);
            letterPress( '66', fingers.ring_3, 0.1, 0, 0);

            letterPress( '66', fingers.middle_1, 0, 0, 0);
            letterPress( '66', fingers.middle_2, 0.1, 0, 0);
            letterPress( '66', fingers.middle_3, 0.1, 0, 0);

            letterPress( '66', fingers.index_1, 0, 0, 0.1);
            letterPress( '66', fingers.index_2, 0.1, 0, 0);
            letterPress( '66', fingers.index_3, 0.1, 0, 0);

            letterPress( '66', fingers.thumb_1, -0.1, -0.4, 0.4);
            letterPress( '66', fingers.thumb_2, 0, 0, 0.2);
            letterPress( '66', fingers.thumb_3, 0, 0, -0.1);

            letterPress( '66', fingers.wrist, -0.1, 0, 0);

            letterPress( '66', fingers.palm_1, 0, 0, -0.04);
            letterPress( '66', fingers.palm_2, 0, 0, -0.12);
            letterPress( '66', fingers.palm_3, 0, 0, 0.08);

            // ----- C -----
            letterPress( '67', fingers.pinky_1, 1.1, 0, -0.5);
            letterPress( '67', fingers.pinky_2, 1.3, 0.1, -0.4);
            letterPress( '67', fingers.pinky_3, 0.8, 0.2, -0.3);

            letterPress( '67', fingers.ring_1, 1.2, 0, -0.2);
            letterPress( '67', fingers.ring_2, 1.9, 0.1, -0.2);
            letterPress( '67', fingers.ring_3, 0.3, 0, 0);

            letterPress( '67', fingers.middle_1, 1.1, 0, 0);
            letterPress( '67', fingers.middle_2, 2, 0, 0);
            letterPress( '67', fingers.middle_3, 0.3, 0, 0);

            letterPress( '67', fingers.index_1, 0.6, -0.1, 0);
            letterPress( '67', fingers.index_2, 0.7, 0, 0);
            letterPress( '67', fingers.index_3, 0.7, 0, 0);

            letterPress( '67', fingers.thumb_1, 0.1, -1.2, 0);
            letterPress( '67', fingers.thumb_2, 0.1, 0.2, 0.1);
            letterPress( '67', fingers.thumb_3, 0, -0.2, 0.4);

            letterPress( '67', fingers.wrist, -0.1, 0, 0);

            letterPress( '67', fingers.palm_1, 0, 0, -0.02);
            letterPress( '67', fingers.palm_2, 0, 0, -0.07);
            letterPress( '67', fingers.palm_3, 0, 0, 0.05);

            // ----- D -----
            letterPress( '68', fingers.pinky_1, 0.1, 0, 0);
            letterPress( '68', fingers.pinky_2,0.1, 0, 0);
            letterPress( '68', fingers.pinky_3, 0.1, 0, 0);

            letterPress( '68', fingers.ring_1, 0.3, 0.1, 0);
            letterPress( '68', fingers.ring_2, 0.3, 0, 0);
            letterPress( '68', fingers.ring_3, 0.1, 0, 0);

            letterPress( '68', fingers.middle_1, 0.6, 0, 0);
            letterPress( '68', fingers.middle_2, 1.4, 0, 0);
            letterPress( '68', fingers.middle_3, 0.7, 0, 0);

            letterPress( '68', fingers.index_1, 0.1, 0, 0);
            letterPress( '68', fingers.index_2, 0.2, 0, 0);
            letterPress( '68', fingers.index_3, 0.1, 0, 0);

            letterPress( '68', fingers.thumb_1, 0, -1.7, -0.1);
            letterPress( '68', fingers.thumb_2, 0.6, 0.5, 0.1);
            letterPress( '68', fingers.thumb_3, 0, 0, 0.2);

            letterPress( '68', fingers.wrist, -0.1, 0, 0);

            letterPress( '68', fingers.palm_1, 0, 0, 0);
            letterPress( '68', fingers.palm_2, 0, 0, 0);
            letterPress( '68', fingers.palm_3, 0, 0, 0);


            // ----- E -----

            letterPress( '69', fingers.pinky_1, 0.6, 0, -0.3);
            letterPress( '69', fingers.pinky_2, 1.4, 0, -0.6);
            letterPress( '69', fingers.pinky_3, 0.5, 0.3, -0.2);

            letterPress( '69', fingers.ring_1, 0.6, -0.1, -0.1);
            letterPress( '69', fingers.ring_2, 1.9, 0, -0.4);
            letterPress( '69', fingers.ring_3, 0.6, 0, 0);

            letterPress( '69', fingers.middle_1, 0.5, 0, 0);
            letterPress( '69', fingers.middle_2, 1.9, 0, 0);
            letterPress( '69', fingers.middle_3, 0.8, 0, 0);

            letterPress( '69', fingers.index_1, 1, 0, 0.3);
            letterPress( '69', fingers.index_2, 1.4, 0, 0.2);
            letterPress( '69', fingers.index_3, 0.7, 0, 0.1);

            letterPress( '69', fingers.thumb_1, 0, -1.5, 0);
            letterPress( '69', fingers.thumb_2, 1, 0.4, 0.3);
            letterPress( '69', fingers.thumb_3, 0, 0.1, 0.9);

            letterPress( '69', fingers.wrist, -0.1, 0, 0);

            letterPress( '69', fingers.palm_1, 0, 0, -0.03);
            letterPress( '69', fingers.palm_2, 0, 0, -0.11);
            letterPress( '69', fingers.palm_3, 0, 0, 0.01);


            // ----- F -----

            letterPress( '70', fingers.pinky_1, 0, 0, -0.3);
            letterPress( '70', fingers.pinky_2, 0.1, 0, 0);
            letterPress( '70', fingers.pinky_3, 0.1, 0, 0);

            letterPress( '70', fingers.ring_1, 0.1, 0, -0.1);
            letterPress( '70', fingers.ring_2, 0.1, 0, 0);
            letterPress( '70', fingers.ring_3, 0.1, 0, 0);

            letterPress( '70', fingers.middle_1, 0.2, 0, 0);
            letterPress( '70', fingers.middle_2, 0.1, 0, 0);
            letterPress( '70', fingers.middle_3, 0, 0, 0);

            letterPress( '70', fingers.index_1, 0.7, -0.2, 0.2);
            letterPress( '70', fingers.index_2, 1.3, -0.3, 0);
            letterPress( '70', fingers.index_3, 0.2, 0, 0);

            letterPress( '70', fingers.thumb_1, 0.2, -1.1, 0.6);
            letterPress( '70', fingers.thumb_2, 0.2, 0.2, 0);
            letterPress( '70', fingers.thumb_3, 0, 0, 0);

            letterPress( '70', fingers.wrist, -0.1, 0, 0);

            letterPress( '70', fingers.palm_1, 0, 0, -0.04);
            letterPress( '70', fingers.palm_2, 0, 0, -0.1);
            letterPress( '70', fingers.palm_3, 0, 0, 0.06);


            // ----- G -----

            letterPress( '71', fingers.pinky_1, 0, 0, -0.2);
            letterPress( '71', fingers.pinky_2, 0.1, 0, 0);
            letterPress( '71', fingers.pinky_3, 0.2, 0, 0);

            letterPress( '71', fingers.ring_1, 0.2, 0, -0.1);
            letterPress( '71', fingers.ring_2, 0.2, 0, 0);
            letterPress( '71', fingers.ring_3, 0.1, 0, 0);

            letterPress( '71', fingers.middle_1, 0.7, 0, 0);
            letterPress( '71', fingers.middle_2, 1.6, 0, 0);
            letterPress( '71', fingers.middle_3, 0.3, 0, 0);

            letterPress( '71', fingers.index_1, 0.1, -0.1, 0.1);
            letterPress( '71', fingers.index_2, 0.1, -0.1, 0);
            letterPress( '71', fingers.index_3, 0.1, 0, 0);

            letterPress( '71', fingers.thumb_1, 0.7, -1.3, 1.1);
            letterPress( '71', fingers.thumb_2, 0.2, 0.1, -0.1);
            letterPress( '71', fingers.thumb_3, 0, 0, 0);

            letterPress( '71', fingers.wrist, -0.1, 0, 0);

            letterPress( '71', fingers.palm_1, 0, 0, -0.04);
            letterPress( '71', fingers.palm_2, 0, 0, -0.09);
            letterPress( '71', fingers.palm_3, 0, 0, 0.06);

            // ----- H -----

            letterPress( '72', fingers.pinky_1, 0.6, 0.2, -0.4);
            letterPress( '72', fingers.pinky_2, 1.5, 0, -0.6);
            letterPress( '72', fingers.pinky_3, 0.5, 0.2, -0.3);

            letterPress( '72', fingers.ring_1, 0.7, 0.2, -0.2);
            letterPress( '72', fingers.ring_2, 2.2, 0, -0.3);
            letterPress( '72', fingers.ring_3, 0.7, 0, 0);

            letterPress( '72', fingers.middle_1, 0, 0, 0);
            letterPress( '72', fingers.middle_2, 0.2, 0, 0);
            letterPress( '72', fingers.middle_3, 0.1, 0, 0);

            letterPress( '72', fingers.index_1, 0.1, 0, 0.1);
            letterPress( '72', fingers.index_2, 0.1, -0.1, 0);
            letterPress( '72', fingers.index_3, 0.1, 0, 0);

            letterPress( '72', fingers.thumb_1, 0.6, -0.5, 1.1);
            letterPress( '72', fingers.thumb_2, 0, -0.5, 0.2);
            letterPress( '72', fingers.thumb_3, 0, 0, 0.2);

            letterPress( '72', fingers.wrist, -0.01, 0, 0);

            letterPress( '72', fingers.palm_1, 0, 0, -0.04);
            letterPress( '72', fingers.palm_2, 0, 0, -0.09);
            letterPress( '72', fingers.palm_3, 0, 0, 0.07);

            // ----- I -----

            letterPress( '73', fingers.pinky_1, 0, 0, -0.2);
            letterPress( '73', fingers.pinky_2, 0.2, 0, 0);
            letterPress( '73', fingers.pinky_3, 0, 0, 0);

            letterPress( '73', fingers.ring_1, 1, 0, -0.1);
            letterPress( '73', fingers.ring_2, 1.8, -0.1, -0.3);
            letterPress( '73', fingers.ring_3, 0.5, 0, 0);

            letterPress( '73', fingers.middle_1, 1, 0, 0);
            letterPress( '73', fingers.middle_2, 2, 0, 0);
            letterPress( '73', fingers.middle_3, 0.4, 0, 0);

            letterPress( '73', fingers.index_1, 1.1, -0.2, 0.2);
            letterPress( '73', fingers.index_2, 1.7, -0.2, 0);
            letterPress( '73', fingers.index_3, 0.6, 0, 0);

            letterPress( '73', fingers.thumb_1, 0.7, -0.5, 0.7);
            letterPress( '73', fingers.thumb_2, 0.2, -0.1, 0.6);
            letterPress( '73', fingers.thumb_3, 0, 0, 0.4);

            letterPress( '73', fingers.wrist, 0, 0, 0);

            letterPress( '73', fingers.palm_1, 0, 0, -0.04);
            letterPress( '73', fingers.palm_2, 0, 0, -0.03);
            letterPress( '73', fingers.palm_3, 0, 0, 0.06);


            // ----- J -----

            letterPress( '74', fingers.pinky_1, 0, 0, 0.2);
            letterPress( '74', fingers.pinky_2, 0.2, 0, 0);
            letterPress( '74', fingers.pinky_3, 0, 0, 0);

            letterPress( '74', fingers.ring_1, 1, 0, -0.1);
            letterPress( '74', fingers.ring_2, 1.8, -0.1, -0.3);
            letterPress( '74', fingers.ring_3, 0.5, 0, 0);

            letterPress( '74', fingers.middle_1, 1, 0, 0);
            letterPress( '74', fingers.middle_2, 2, 0, 0);
            letterPress( '74', fingers.middle_3, 0.4, 0, 0);

            letterPress( '74', fingers.index_1, 1.1, -0.2, 0.2);
            letterPress( '74', fingers.index_2, 1.7, -0.2, 0);
            letterPress( '74', fingers.index_3, 0.6, 0, 0);

            letterPress( '74', fingers.thumb_1, 0.7, -0.5, 0.7);
            letterPress( '74', fingers.thumb_2, 0.2, -0.1, 0.6);
            letterPress( '74', fingers.thumb_3, 0, 0, 0.4);

            letterPress( '74', fingers.wrist, 0, 0.1, 0);

            letterPress( '74', fingers.palm_1, 0, 0, -0.04);
            letterPress( '74', fingers.palm_2, 0, 0, -0.03);
            letterPress( '74', fingers.palm_3, 0, 0, 0.06);
               

            // ----- K -----

            letterPress( '75', fingers.pinky_1, 0.9, 0.1, -0.5);
            letterPress( '75', fingers.pinky_2, 1.5, 0.3, -0.6);
            letterPress( '75', fingers.pinky_3, 0.8, 0.2, -0.2);

            letterPress( '75', fingers.ring_1, 1, 0, -0.2);
            letterPress( '75', fingers.ring_2, 2, 0, -0.4);
            letterPress( '75', fingers.ring_3, 0.6, 0, 0);

            letterPress( '75', fingers.middle_1, 0.1, 0, 0);
            letterPress( '75', fingers.middle_2, 0, 0, 0);
            letterPress( '75', fingers.middle_3, 0, 0, 0);

            letterPress( '75', fingers.index_1, 0.1, 0, 0);
            letterPress( '75', fingers.index_2, 0, 0, 0);
            letterPress( '75', fingers.index_3, 0.1, 0, 0);

            letterPress( '75', fingers.thumb_1, 0, -1.7, 0.5);
            letterPress( '75', fingers.thumb_2, 1.1, 1, -0.2);
            letterPress( '75', fingers.thumb_3, 0, 0, -0.6);

            letterPress( '75', fingers.wrist, 0, 0, 0.2);

            letterPress( '75', fingers.palm_1, 0, 0, 0);
            letterPress( '75', fingers.palm_2, 0, 0, -0.04);
            letterPress( '75', fingers.palm_3, 0, 0, 0);


            // ----- L -----

            letterPress( '76', fingers.pinky_1, 1, 0, -0.5);
            letterPress( '76', fingers.pinky_2, 1.4, 0, -0.6);
            letterPress( '76', fingers.pinky_3, 0.4, 0.4, -0.2);

            letterPress( '76', fingers.ring_1, 1, 0, -0.2);
            letterPress( '76', fingers.ring_2, 1.8, 0, -0.3);
            letterPress( '76', fingers.ring_3, 0.8, 0, 0);

            letterPress( '76', fingers.middle_1, 1, 0, 0);
            letterPress( '76', fingers.middle_2, 1.9, 0, 0);
            letterPress( '76', fingers.middle_3, 1, 0, 0);

            letterPress( '76', fingers.index_1, 0, 0, 0.1);
            letterPress( '76', fingers.index_2, 0.1, 0, 0);
            letterPress( '76', fingers.index_3, 0.1, 0, 0);

            letterPress( '76', fingers.thumb_1, 0, -0.7, 0);
            letterPress( '76', fingers.thumb_2, -0.1, 0, -0.3);
            letterPress( '76', fingers.thumb_3, 0, 0, -0.6);

            letterPress( '76', fingers.wrist, 0, 0, 0);

            letterPress( '76', fingers.palm_1, 0, 0, 0);
            letterPress( '76', fingers.palm_2, 0, 0, -0.06);
            letterPress( '76', fingers.palm_3, 0, 0, 0);


            // ----- M -----

            letterPress( '77', fingers.pinky_1, 1.3, 0, -0.5);
            letterPress( '77', fingers.pinky_2, 1.2, 0, -0.4);
            letterPress( '77', fingers.pinky_3, 0.8, 0.4, -0.4);

            letterPress( '77', fingers.ring_1, 1.4, 0, -0.2);
            letterPress( '77', fingers.ring_2, 1.1, 0, -0.1);
            letterPress( '77', fingers.ring_3, 0.2, 0, 0);

            letterPress( '77', fingers.middle_1, 1.3, 0, 0);
            letterPress( '77', fingers.middle_2, 1.2, 0, 0);
            letterPress( '77', fingers.middle_3, 0.2, 0, 0);

            letterPress( '77', fingers.index_1, 1.4, 0, 0.33);
            letterPress( '77', fingers.index_2, 1.1, 0, 0);
            letterPress( '77', fingers.index_3, 0.1, 0, 0);

            letterPress( '77', fingers.thumb_1, 0.4, -0.4, 0.9);
            letterPress( '77', fingers.thumb_2, 0.3, 0, 0.5);
            letterPress( '77', fingers.thumb_3, 0, 0, 1.2);

            letterPress( '77', fingers.wrist, 0.4, 0, 0);

            letterPress( '77', fingers.palm_1, 0, 0, 0);
            letterPress( '77', fingers.palm_2, 0, 0, -0.06);
            letterPress( '77', fingers.palm_3, 0, 0, 0);


            // ----- N -----

            letterPress( '78', fingers.pinky_1, 1.3, 0, -0.5);
            letterPress( '78', fingers.pinky_2, 1.2, 0, -0.4);
            letterPress( '78', fingers.pinky_3, 0.8, 0.4, -0.4);

            letterPress( '78', fingers.ring_1, 1.3, 0, -0.2);
            letterPress( '78', fingers.ring_2, 1.6, 0.1, -0.2);
            letterPress( '78', fingers.ring_3, 1, 0.1, -0.1);

            letterPress( '78', fingers.middle_1, 1.3, 0, 0);
            letterPress( '78', fingers.middle_2, 1.2, 0, 0);
            letterPress( '78', fingers.middle_3, 0.1, 0, 0);

            letterPress( '78', fingers.index_1, 1.4, 0, 0.33);
            letterPress( '78', fingers.index_2, 1.1, 0, 0);
            letterPress( '78', fingers.index_3, 0.1, 0, 0);

            letterPress( '78', fingers.thumb_1, 0.4, -0.4, 0.9);
            letterPress( '78', fingers.thumb_2, 0.3, 0, 0.5);
            letterPress( '78', fingers.thumb_3, 0, 0, 1.2);

            letterPress( '78', fingers.wrist, 0.4, 0, 0);

            letterPress( '78', fingers.palm_1, 0, 0, 0);
            letterPress( '78', fingers.palm_2, 0, 0, -0.08);
            letterPress( '78', fingers.palm_3, 0, 0, 0);


            // ----- O -----

            letterPress( '79', fingers.pinky_1, 0, 0, -0.3);
            letterPress( '79', fingers.pinky_2, 0, 0, 0);
            letterPress( '79', fingers.pinky_3, 0, 0, 0);

            letterPress( '79', fingers.ring_1, 0, 0, -0.1);
            letterPress( '79', fingers.ring_2, 0, 0, 0);
            letterPress( '79', fingers.ring_3, 0.1, 0, 0);

            letterPress( '79', fingers.middle_1, 0, 0, 0);
            letterPress( '79', fingers.middle_2, 0, 0, 0);
            letterPress( '79', fingers.middle_3, 0.1, 0, 0);

            letterPress( '79', fingers.index_1, 0.7, 0, 0.1);
            letterPress( '79', fingers.index_2, 1.3, -0.3, 0);
            letterPress( '79', fingers.index_3, 0.6, 0, 0);

            letterPress( '79', fingers.thumb_1, 0.5, -0.8, 0.5);
            letterPress( '79', fingers.thumb_2, 0, 0, 0);
            letterPress( '79', fingers.thumb_3, 0, 0, 0.5);

            letterPress( '79', fingers.wrist, 0, 0, 0);

            letterPress( '79', fingers.palm_1, 0, 0, -0.04);
            letterPress( '79', fingers.palm_2, 0, 0, -0.1);
            letterPress( '79', fingers.palm_3, 0, 0, 0.05);


            // ----- Q -----

            letterPress( '81', fingers.pinky_1, 1.2, 0, -0.4);
            letterPress( '81', fingers.pinky_2, 1.3, 0, -0.4);
            letterPress( '81', fingers.pinky_3, 0.9, 0.4, -0.5);

            letterPress( '81', fingers.ring_1, 1.3, 0, -0.1);
            letterPress( '81', fingers.ring_2, 1.7, 0, -0.2);
            letterPress( '81', fingers.ring_3, 0.6, 0.2, -0.1);

            letterPress( '81', fingers.middle_1, 1.4, 0, 0);
            letterPress( '81', fingers.middle_2, 1.7, 0, 0);
            letterPress( '81', fingers.middle_3, 0.6, 0, 0);

            letterPress( '81', fingers.index_1, 1.3, 0, 0.1);
            letterPress( '81', fingers.index_2, 0, -0.3, 0);
            letterPress( '81', fingers.index_3, -0.1, 0, 0);

            letterPress( '81', fingers.thumb_1, 0.5, -1.4, 0.5);
            letterPress( '81', fingers.thumb_2, 0, 0, -0.2);
            letterPress( '81', fingers.thumb_3, 0, 0, -0.6);

            letterPress( '81', fingers.wrist, 1.3, -0.1, 0.6);

            letterPress( '81', fingers.palm_1, 0, 0, -0.04);
            letterPress( '81', fingers.palm_2, 0, 0, -0.1);
            letterPress( '81', fingers.palm_3, 0, 0, -0.05);


            // ----- P -----

            letterPress( '80', fingers.pinky_1, 0, 0, -0.2);
            letterPress( '80', fingers.pinky_2, 0, 0, 0);
            letterPress( '80', fingers.pinky_3, 0, 0, 0);

            letterPress( '80', fingers.ring_1, 0.1, 0, -0.1);
            letterPress( '80', fingers.ring_2, 0, 0, 0);
            letterPress( '80', fingers.ring_3, 0, 0, 0);

            letterPress( '80', fingers.middle_1, 1.1, 0, -0.1);
            letterPress( '80', fingers.middle_2, 0.6, 0, 0);
            letterPress( '80', fingers.middle_3, 0.2, 0, 0);

            letterPress( '80', fingers.index_1, 0, 0, 0.1);
            letterPress( '80', fingers.index_2, 0, 0, 0);
            letterPress( '80', fingers.index_3, 0, 0, 0);

            letterPress( '80', fingers.thumb_1, -0.2, -1.7, 0.1);
            letterPress( '80', fingers.thumb_2, 0.5, 0.1, -0.1);
            letterPress( '80', fingers.thumb_3, 0, 0, -0.5);

            letterPress( '80', fingers.wrist, 0, 0, 0);

            letterPress( '80', fingers.palm_1, 0, 0, 0);
            letterPress( '80', fingers.palm_2, 0, 0, -0.05);
            letterPress( '80', fingers.palm_3, 0, 0, 0.05);


            // ----- R -----

            letterPress( '82', fingers.pinky_1, 1.1, 0, -0.4);
            letterPress( '82', fingers.pinky_2, 1.4, 0, -0.6);
            letterPress( '82', fingers.pinky_3, 0.3, 0.3, -0.1);

            letterPress( '82', fingers.ring_1, 1.1, 0, 0);
            letterPress( '82', fingers.ring_2, 2, 0, -0.3);
            letterPress( '82', fingers.ring_3, 0.4, 0, 0);

            letterPress( '82', fingers.middle_1, -0.2, 0, -0.2);
            letterPress( '82', fingers.middle_2, 0.4, 0, 0);
            letterPress( '82', fingers.middle_3, 0.2, 0, 0);

            letterPress( '82', fingers.index_1, 0.2, 0, 0.3);
            letterPress( '82', fingers.index_2, 0, 0, 0);
            letterPress( '82', fingers.index_3, 0, 0, 0);

            letterPress( '82', fingers.thumb_1, 0, 0.9, 0.4);
            letterPress( '82', fingers.thumb_2, -1.8, 0.3, 0.2);
            letterPress( '82', fingers.thumb_3, 0.2, 0.1, 0);

            letterPress( '82', fingers.wrist, 0, 0, 0);

            letterPress( '82', fingers.palm_1, 0, 0, -0.09);
            letterPress( '82', fingers.palm_2, 0, 0, -0.1);
            letterPress( '82', fingers.palm_3, 0, 0, 0.02);


            // ----- S -----

            letterPress( '83', fingers.pinky_1, 1.1, 0, -0.4);
            letterPress( '83', fingers.pinky_2, 1.4, 0, -0.6);
            letterPress( '83', fingers.pinky_3, 0.3, 0.3, -0.1);

            letterPress( '83', fingers.ring_1, 1.1, 0, 0);
            letterPress( '83', fingers.ring_2, 2, 0, -0.3);
            letterPress( '83', fingers.ring_3, 0.4, 0, 0);

            letterPress( '83', fingers.middle_1, 1, 0, 0);
            letterPress( '83', fingers.middle_2, 2.1, 0, 0);
            letterPress( '83', fingers.middle_3, 0.5, 0, 0);

            letterPress( '83', fingers.index_1, 0, 0, 0.1);
            letterPress( '83', fingers.index_2, 0, 0, 0);
            letterPress( '83', fingers.index_3, 0, 0, 0);

            letterPress( '83', fingers.thumb_1, 0.1, -1.7, 0.3);
            letterPress( '83', fingers.thumb_2, 0.9, 0.3, 0.1);
            letterPress( '83', fingers.thumb_3, 0.5, 0, 0.2);

            letterPress( '83', fingers.wrist, -0.1, 0, 0);

            letterPress( '83', fingers.palm_1, 0, 0, -0.09);
            letterPress( '83', fingers.palm_2, 0, 0, -0.1);
            letterPress( '83', fingers.palm_3, 0, 0, 0.02);


            // ----- T -----

            letterPress( '84', fingers.pinky_1, 0, 0, 0);
            letterPress( '84', fingers.pinky_2, 0, 0, 0);
            letterPress( '84', fingers.pinky_3, 0, 0, 0);

            letterPress( '84', fingers.ring_1, 0, 0, 0);
            letterPress( '84', fingers.ring_2, 0, 0, 0);
            letterPress( '84', fingers.ring_3, 0, 0, 0);

            letterPress( '84', fingers.middle_1, 0, 0, 0);
            letterPress( '84', fingers.middle_2, 0, 0, 0);
            letterPress( '84', fingers.middle_3, 0, 0, 0);

            letterPress( '84', fingers.index_1, 0, 0, 0);
            letterPress( '84', fingers.index_2, 0, 0, 0);
            letterPress( '84', fingers.index_3, 0, 0, 0);

            letterPress( '84', fingers.thumb_1, 0, 0, 0);
            letterPress( '84', fingers.thumb_2, 0, 0, 0);
            letterPress( '84', fingers.thumb_3, 0, 0, 0);

            letterPress( '84', fingers.wrist, 0, 0, 0);

            letterPress( '84', fingers.palm_1, 0, 0, 0);
            letterPress( '84', fingers.palm_2, 0, 0, 0);
            letterPress( '84', fingers.palm_3, 0, 0, 0);


            // ----- U -----

            letterPress( '85', fingers.pinky_1, 0, 0, 0);
            letterPress( '85', fingers.pinky_2, 0, 0, 0);
            letterPress( '85', fingers.pinky_3, 0, 0, 0);

            letterPress( '85', fingers.ring_1, 0, 0, 0);
            letterPress( '85', fingers.ring_2, 0, 0, 0);
            letterPress( '85', fingers.ring_3, 0, 0, 0);

            letterPress( '85', fingers.middle_1, 0, 0, 0);
            letterPress( '85', fingers.middle_2, 0, 0, 0);
            letterPress( '85', fingers.middle_3, 0, 0, 0);

            letterPress( '85', fingers.index_1, 0, 0, 0);
            letterPress( '85', fingers.index_2, 0, 0, 0);
            letterPress( '85', fingers.index_3, 0, 0, 0);

            letterPress( '85', fingers.thumb_1, 0, 0, 0);
            letterPress( '85', fingers.thumb_2, 0, 0, 0);
            letterPress( '85', fingers.thumb_3, 0, 0, 0);

            letterPress( '85', fingers.wrist, 0, 0, 0);

            letterPress( '85', fingers.palm_1, 0, 0, 0);
            letterPress( '85', fingers.palm_2, 0, 0, 0);
            letterPress( '85', fingers.palm_3, 0, 0, 0);


            // ----- V -----

            letterPress( '86', fingers.pinky_1, 0, 0, 0);
            letterPress( '86', fingers.pinky_2, 0, 0, 0);
            letterPress( '86', fingers.pinky_3, 0, 0, 0);

            letterPress( '86', fingers.ring_1, 0, 0, 0);
            letterPress( '86', fingers.ring_2, 0, 0, 0);
            letterPress( '86', fingers.ring_3, 0, 0, 0);

            letterPress( '86', fingers.middle_1, 0, 0, 0);
            letterPress( '86', fingers.middle_2, 0, 0, 0);
            letterPress( '86', fingers.middle_3, 0, 0, 0);

            letterPress( '86', fingers.index_1, 0, 0, 0);
            letterPress( '86', fingers.index_2, 0, 0, 0);
            letterPress( '86', fingers.index_3, 0, 0, 0);

            letterPress( '86', fingers.thumb_1, 0, 0, 0);
            letterPress( '86', fingers.thumb_2, 0, 0, 0);
            letterPress( '86', fingers.thumb_3, 0, 0, 0);

            letterPress( '86', fingers.wrist, 0, 0, 0);

            letterPress( '86', fingers.palm_1, 0, 0, 0);
            letterPress( '86', fingers.palm_2, 0, 0, 0);
            letterPress( '86', fingers.palm_3, 0, 0, 0);


            // ----- W -----

            letterPress( '87', fingers.pinky_1, 0, 0, 0);
            letterPress( '87', fingers.pinky_2, 0, 0, 0);
            letterPress( '87', fingers.pinky_3, 0, 0, 0);

            letterPress( '87', fingers.ring_1, 0, 0, 0);
            letterPress( '87', fingers.ring_2, 0, 0, 0);
            letterPress( '87', fingers.ring_3, 0, 0, 0);

            letterPress( '87', fingers.middle_1, 0, 0, 0);
            letterPress( '87', fingers.middle_2, 0, 0, 0);
            letterPress( '87', fingers.middle_3, 0, 0, 0);

            letterPress( '87', fingers.index_1, 0, 0, 0);
            letterPress( '87', fingers.index_2, 0, 0, 0);
            letterPress( '87', fingers.index_3, 0, 0, 0);

            letterPress( '87', fingers.thumb_1, 0, 0, 0);
            letterPress( '87', fingers.thumb_2, 0, 0, 0);
            letterPress( '87', fingers.thumb_3, 0, 0, 0);

            letterPress( '87', fingers.wrist, 0, 0, 0);

            letterPress( '87', fingers.palm_1, 0, 0, 0);
            letterPress( '87', fingers.palm_2, 0, 0, 0);
            letterPress( '87', fingers.palm_3, 0, 0, 0);


            // ----- X -----

            letterPress( '88', fingers.pinky_1, 0, 0, 0);
            letterPress( '88', fingers.pinky_2, 0, 0, 0);
            letterPress( '88', fingers.pinky_3, 0, 0, 0);

            letterPress( '88', fingers.ring_1, 0, 0, 0);
            letterPress( '88', fingers.ring_2, 0, 0, 0);
            letterPress( '88', fingers.ring_3, 0, 0, 0);

            letterPress( '88', fingers.middle_1, 0, 0, 0);
            letterPress( '88', fingers.middle_2, 0, 0, 0);
            letterPress( '88', fingers.middle_3, 0, 0, 0);

            letterPress( '88', fingers.index_1, 0, 0, 0);
            letterPress( '88', fingers.index_2, 0, 0, 0);
            letterPress( '88', fingers.index_3, 0, 0, 0);

            letterPress( '88', fingers.thumb_1, 0, 0, 0);
            letterPress( '88', fingers.thumb_2, 0, 0, 0);
            letterPress( '88', fingers.thumb_3, 0, 0, 0);

            letterPress( '88', fingers.wrist, 0, 0, 0);

            letterPress( '88', fingers.palm_1, 0, 0, 0);
            letterPress( '88', fingers.palm_2, 0, 0, 0);
            letterPress( '88', fingers.palm_3, 0, 0, 0);


            // ----- Y -----

            letterPress( '89', fingers.pinky_1, 0, 0, 0);
            letterPress( '89', fingers.pinky_2, 0, 0, 0);
            letterPress( '89', fingers.pinky_3, 0, 0, 0);

            letterPress( '89', fingers.ring_1, 0, 0, 0);
            letterPress( '89', fingers.ring_2, 0, 0, 0);
            letterPress( '89', fingers.ring_3, 0, 0, 0);

            letterPress( '89', fingers.middle_1, 0, 0, 0);
            letterPress( '89', fingers.middle_2, 0, 0, 0);
            letterPress( '89', fingers.middle_3, 0, 0, 0);

            letterPress( '89', fingers.index_1, 0, 0, 0);
            letterPress( '89', fingers.index_2, 0, 0, 0);
            letterPress( '89', fingers.index_3, 0, 0, 0);

            letterPress( '89', fingers.thumb_1, 0, 0, 0);
            letterPress( '89', fingers.thumb_2, 0, 0, 0);
            letterPress( '89', fingers.thumb_3, 0, 0, 0);

            letterPress( '89', fingers.wrist, 0, 0, 0);

            letterPress( '89', fingers.palm_1, 0, 0, 0);
            letterPress( '89', fingers.palm_2, 0, 0, 0);
            letterPress( '89', fingers.palm_3, 0, 0, 0);


            // ----- Z -----

            letterPress( '90', fingers.pinky_1, 0, 0, 0);
            letterPress( '90', fingers.pinky_2, 0, 0, 0);
            letterPress( '90', fingers.pinky_3, 0, 0, 0);

            letterPress( '90', fingers.ring_1, 0, 0, 0);
            letterPress( '90', fingers.ring_2, 0, 0, 0);
            letterPress( '90', fingers.ring_3, 0, 0, 0);

            letterPress( '90', fingers.middle_1, 0, 0, 0);
            letterPress( '90', fingers.middle_2, 0, 0, 0);
            letterPress( '90', fingers.middle_3, 0, 0, 0);

            letterPress( '90', fingers.index_1, 0, 0, 0);
            letterPress( '90', fingers.index_2, 0, 0, 0);
            letterPress( '90', fingers.index_3, 0, 0, 0);

            letterPress( '90', fingers.thumb_1, 0, 0, 0);
            letterPress( '90', fingers.thumb_2, 0, 0, 0);
            letterPress( '90', fingers.thumb_3, 0, 0, 0);

            letterPress( '90', fingers.wrist, 0, 0, 0);

            letterPress( '90', fingers.palm_1, 0, 0, 0);
            letterPress( '90', fingers.palm_2, 0, 0, 0);
            letterPress( '90', fingers.palm_3, 0, 0, 0);

            // ----- Þ -----

            letterPress( '191', fingers.pinky_1, 0, 0, 0);
            letterPress( '191', fingers.pinky_2, 0, 0, 0);
            letterPress( '191', fingers.pinky_3, 0, 0, 0);

            letterPress( '191', fingers.ring_1, 0, 0, 0);
            letterPress( '191', fingers.ring_2, 0, 0, 0);
            letterPress( '191', fingers.ring_3, 0, 0, 0);

            letterPress( '191', fingers.middle_1, 0, 0, 0);
            letterPress( '191', fingers.middle_2, 0, 0, 0);
            letterPress( '191', fingers.middle_3, 0, 0, 0);

            letterPress( '191', fingers.index_1, 0, 0, 0);
            letterPress( '191', fingers.index_2, 0, 0, 0);
            letterPress( '191', fingers.index_3, 0, 0, 0);

            letterPress( '191', fingers.thumb_1, 0, 0, 0);
            letterPress( '191', fingers.thumb_2, 0, 0, 0);
            letterPress( '191', fingers.thumb_3, 0, 0, 0);

            letterPress( '191', fingers.wrist, 0, 0, 0);

            letterPress( '191', fingers.palm_1, 0, 0, 0);
            letterPress( '191', fingers.palm_2, 0, 0, 0);
            letterPress( '191', fingers.palm_3, 0, 0, 0);


            // ----- Æ -----

            letterPress( '186', fingers.pinky_1, 0, 0, 0);
            letterPress( '186', fingers.pinky_2, 0, 0, 0);
            letterPress( '186', fingers.pinky_3, 0, 0, 0);

            letterPress( '186', fingers.ring_1, 0, 0, 0);
            letterPress( '186', fingers.ring_2, 0, 0, 0);
            letterPress( '186', fingers.ring_3, 0, 0, 0);

            letterPress( '186', fingers.middle_1, 0, 0, 0);
            letterPress( '186', fingers.middle_2, 0, 0, 0);
            letterPress( '186', fingers.middle_3, 0, 0, 0);

            letterPress( '186', fingers.index_1, 0, 0, 0);
            letterPress( '186', fingers.index_2, 0, 0, 0);
            letterPress( '186', fingers.index_3, 0, 0, 0);

            letterPress( '186', fingers.thumb_1, 0, 0, 0);
            letterPress( '186', fingers.thumb_2, 0, 0, 0);
            letterPress( '186', fingers.thumb_3, 0, 0, 0);

            letterPress( '186', fingers.wrist, 0, 0, 0);

            letterPress( '186', fingers.palm_1, 0, 0, 0);
            letterPress( '186', fingers.palm_2, 0, 0, 0);
            letterPress( '186', fingers.palm_3, 0, 0, 0);


            // ----- Ö -----

            letterPress( '189', fingers.pinky_1, 0, 0, 0);
            letterPress( '189', fingers.pinky_2, 0, 0, 0);
            letterPress( '189', fingers.pinky_3, 0, 0, 0);

            letterPress( '189', fingers.ring_1, 0, 0, 0);
            letterPress( '189', fingers.ring_2, 0, 0, 0);
            letterPress( '189', fingers.ring_3, 0, 0, 0);

            letterPress( '189', fingers.middle_1, 0, 0, 0);
            letterPress( '189', fingers.middle_2, 0, 0, 0);
            letterPress( '189', fingers.middle_3, 0, 0, 0);

            letterPress( '189', fingers.index_1, 0, 0, 0);
            letterPress( '189', fingers.index_2, 0, 0, 0);
            letterPress( '189', fingers.index_3, 0, 0, 0);

            letterPress( '189', fingers.thumb_1, 0, 0, 0);
            letterPress( '189', fingers.thumb_2, 0, 0, 0);
            letterPress( '189', fingers.thumb_3, 0, 0, 0);

            letterPress( '189', fingers.wrist, 0, 0, 0);

            letterPress( '189', fingers.palm_1, 0, 0, 0);
            letterPress( '189', fingers.palm_2, 0, 0, 0);
            letterPress( '189', fingers.palm_3, 0, 0, 0);




            var jz = fingers.wrist.z;
            var jy = fingers.wrist.y;

            var sx = fingers.index_1.x;

                
            var moveTimeout = setTimeout(function() {

                var moveInterval = setInterval(function() {
                    

                    // J
                    if (e.keyCode == '74') {
                        //console.log(fingers.wrist.z + "  Z");
                        //console.log(fingers.wrist.y + "  Y")
                        

                        var posZ = Math.cos(jz)*0.2*(-1)+0.2;
                        var posY = Math.sin(jy)*0.2*(-1);

                        if (posZ < 0.4 && posZ >= 0) {
                            fingers.wrist.z = posZ;
                        }

                        if (posY < 0.2 && posY >= -0.2) {
                            fingers.wrist.y = posY;
                        }

                        jz += 0.05;
                        jy += 0.05; 
                        
                        console.log(posZ);

                        if (jz > 6) {
                            fingers.wrist.z = 0;
                            jz = 0;
                            clearInterval(moveInterval);
                        }


                    }          

                    else if (e.keyCode == '83') {
                        // console.log(sx)
                        var posX = Math.cos(sx)*(-0.7) + 0.7;
                        
            
                        if (posX > 0 && posX < 1.4) {
                            fingers.index_1.x = posX;
                        }

                        if (posX > 0 && posX < 0.6) {
                            fingers.index_2.x = posX/2;
                        }

                        if (sx > 2.8*2) {
                            clearInterval(moveInterval);
                        }
                    

                        sx += 0.03;

                    }
                

            }, 20) }, 3000);




            // ----- 1 -----

            letterPress( '49', fingers.pinky_1, 1.1, 0, -0.4);
            letterPress( '49', fingers.pinky_2, 1.4, 0, -0.6);
            letterPress( '49', fingers.pinky_3, 0.3, 0.3, -0.1);

            letterPress( '49', fingers.ring_1, 1.1, 0, 0);
            letterPress( '49', fingers.ring_2, 2, 0, -0.3);
            letterPress( '49', fingers.ring_3, 0.4, 0, 0);

            letterPress( '49', fingers.middle_1, 1, 0, 0);
            letterPress( '49', fingers.middle_2, 2.1, 0, 0);
            letterPress( '49', fingers.middle_3, 0.5, 0, 0);

            letterPress( '49', fingers.index_1, 0.1, 0, 0.1);
            letterPress( '49', fingers.index_2, 0, 0, 0);
            letterPress( '49', fingers.index_3, 0, 0, 0);

            letterPress( '49', fingers.thumb_1, 0.1, -1.7, 0.3);
            letterPress( '49', fingers.thumb_2, 0.7, 0.3, 0.1);
            letterPress( '49', fingers.thumb_3, 0.1, 0, 0.1);

            letterPress( '49', fingers.wrist, -0.1, 0, 0);

            letterPress( '49', fingers.palm_1, 0, 0, -0.09);
            letterPress( '49', fingers.palm_2, 0, 0, -0.1);
            letterPress( '49', fingers.palm_3, 0, 0, 0.02);

            // ----- 2 -----

            letterPress( '50', fingers.pinky_1, 1.1, 0, -0.4);
            letterPress( '50', fingers.pinky_2, 1.4, 0, -0.6);
            letterPress( '50', fingers.pinky_3, 0.3, 0.3, -0.1);

            letterPress( '50', fingers.ring_1, 1.1, 0, 0);
            letterPress( '50', fingers.ring_2, 2, 0, -0.3);
            letterPress( '50', fingers.ring_3, 0.4, 0, 0);

            letterPress( '50', fingers.middle_1, 0, 0, 0.1);
            letterPress( '50', fingers.middle_2, 0, 0, 0);
            letterPress( '50', fingers.middle_3, 0.1, 0, 0);

            letterPress( '50', fingers.index_1, 0.1, 0, 0);
            letterPress( '50', fingers.index_2, 0, 0, 0);
            letterPress( '50', fingers.index_3, 0.1, 0, 0);

            letterPress( '50', fingers.thumb_1, 0.1, -1.8, 0.3);
            letterPress( '50', fingers.thumb_2, 0.9, 0.1, 0);
            letterPress( '50', fingers.thumb_3, 0.2, 0, 0.3);

            letterPress( '50', fingers.wrist, -0.1, 0, 0);

            letterPress( '50', fingers.palm_1, 0, 0, -0.09);
            letterPress( '50', fingers.palm_2, 0, 0, -0.1);
            letterPress( '50', fingers.palm_3, 0, 0, 0.02);

            // ----- 3 -----

            letterPress( '51', fingers.pinky_1, 1.1, 0, -0.4);
            letterPress( '51', fingers.pinky_2, 1.4, 0, -0.6);
            letterPress( '51', fingers.pinky_3, 0.3, 0.3, -0.1);

            letterPress( '51', fingers.ring_1, 1.1, 0, 0);
            letterPress( '51', fingers.ring_2, 2, 0, -0.3);
            letterPress( '51', fingers.ring_3, 0.4, 0, 0);

            letterPress( '51', fingers.middle_1, 0, 0, 0.1);
            letterPress( '51', fingers.middle_2, 0, 0, 0);
            letterPress( '51', fingers.middle_3, 0.1, 0, 0);

            letterPress( '51', fingers.index_1, 0.1, 0, 0);
            letterPress( '51', fingers.index_2, 0, 0, 0);
            letterPress( '51', fingers.index_3, 0.1, 0, 0);

            letterPress( '51', fingers.thumb_1, 0, 0, 0);
            letterPress( '51', fingers.thumb_2, 0, 0, 0);
            letterPress( '51', fingers.thumb_3, 0, 0, -0.5);

            letterPress( '51', fingers.wrist, -0.1, 0, 0);

            letterPress( '51', fingers.palm_1, 0, 0, -0.09);
            letterPress( '51', fingers.palm_2, 0, 0, -0.1);
            letterPress( '51', fingers.palm_3, 0, 0, 0);

            // ----- 4 -----

            letterPress( '52', fingers.pinky_1, 0.1, 0, 0);
            letterPress( '52', fingers.pinky_2, 0, 0, 0);
            letterPress( '52', fingers.pinky_3, 0, 0, 0);

            letterPress( '52', fingers.ring_1, 0.1, 0, 0);
            letterPress( '52', fingers.ring_2, 0, 0, 0);
            letterPress( '52', fingers.ring_3, 0, 0, 0);

            letterPress( '52', fingers.middle_1, 0.1, 0, 0);
            letterPress( '52', fingers.middle_2, 0, 0, 0);
            letterPress( '52', fingers.middle_3, 0, 0, 0);

            letterPress( '52', fingers.index_1, 0.2, 0, 0);
            letterPress( '52', fingers.index_2, 0, 0, 0);
            letterPress( '52', fingers.index_3, 0, 0, 0);

            letterPress( '52', fingers.thumb_1, 0.1, -1.9, 0.5);
            letterPress( '52', fingers.thumb_2, 1.1, 0.7, 0);
            letterPress( '52', fingers.thumb_3, 0.2, 0, 0.7);

            letterPress( '52', fingers.wrist, -0.1, 0, 0);

            letterPress( '52', fingers.palm_1, 0, 0, 0);
            letterPress( '52', fingers.palm_2, 0, 0, 0);
            letterPress( '52', fingers.palm_3, 0, 0, 0);

            // ----- 5 -----

            letterPress( '53', fingers.pinky_1, 0, 0, 0.1);
            letterPress( '53', fingers.pinky_2, 0, 0, 0);
            letterPress( '53', fingers.pinky_3, 0, 0, 0);

            letterPress( '53', fingers.ring_1, 0, 0, 0.1);
            letterPress( '53', fingers.ring_2, 0, 0, 0);
            letterPress( '53', fingers.ring_3, 0, 0, 0);

            letterPress( '53', fingers.middle_1, 0, 0, 0);
            letterPress( '53', fingers.middle_2, 0, 0, 0);
            letterPress( '53', fingers.middle_3, 0, 0, 0);

            letterPress( '53', fingers.index_1, 0.1, 0, -0.1);
            letterPress( '53', fingers.index_2, 0, 0, 0);
            letterPress( '53', fingers.index_3, 0, 0, 0);

            letterPress( '53', fingers.thumb_1, 0, 0, 0);
            letterPress( '53', fingers.thumb_2, 0, 0, 0);
            letterPress( '53', fingers.thumb_3, 0, 0, -0.5);

            letterPress( '53', fingers.wrist, -0.1, 0, 0);

            letterPress( '53', fingers.palm_1, 0, 0, 0);
            letterPress( '53', fingers.palm_2, 0, 0, 0);
            letterPress( '53', fingers.palm_3, 0, 0, 0);

            // ----- 6 -----

            letterPress( '54', fingers.pinky_1, 0.8, 0.1, -0.5);
            letterPress( '54', fingers.pinky_2, 1.5, 0.1, -0.7);
            letterPress( '54', fingers.pinky_3, 0.6, 0.3, -0.2);

            letterPress( '54', fingers.ring_1, 0.1, 0, 0);
            letterPress( '54', fingers.ring_2, 0, 0, 0);
            letterPress( '54', fingers.ring_3, 0, 0, 0);

            letterPress( '54', fingers.middle_1, 0, 0, 0);
            letterPress( '54', fingers.middle_2, 0, 0, 0);
            letterPress( '54', fingers.middle_3, 0, 0, 0);

            letterPress( '54', fingers.index_1, 0.2, 0, 0);
            letterPress( '54', fingers.index_2, 0, 0, 0);
            letterPress( '54', fingers.index_3, 0, 0, 0);

            letterPress( '54', fingers.thumb_1, 0.1, -2.3, 0.2);
            letterPress( '54', fingers.thumb_2, 1.1, 0.4, 0);
            letterPress( '54', fingers.thumb_3, 0.2, 0, 0);

            letterPress( '54', fingers.wrist, -0.1, 0, 0);

            letterPress( '54', fingers.palm_1, 0, 0, 0);
            letterPress( '54', fingers.palm_2, 0, 0, 0);
            letterPress( '54', fingers.palm_3, 0, 0, 0);

            // ----- 7 -----

            letterPress( '55', fingers.pinky_1, 0, 0, 0);
            letterPress( '55', fingers.pinky_2, 0, 0, 0);
            letterPress( '55', fingers.pinky_3, 0, 0, 0);

            letterPress( '55', fingers.ring_1, 1.1, 0, -0.1);
            letterPress( '55', fingers.ring_2, 1.9, 0, -0.4);
            letterPress( '55', fingers.ring_3, 0.5, 0, 0);

            letterPress( '55', fingers.middle_1, 0, 0, 0);
            letterPress( '55', fingers.middle_2, 0, 0, 0);
            letterPress( '55', fingers.middle_3, 0, 0, 0);

            letterPress( '55', fingers.index_1, 0.2, 0, 0);
            letterPress( '55', fingers.index_2, 0, 0, 0);
            letterPress( '55', fingers.index_3, 0, 0, 0);

            letterPress( '55', fingers.thumb_1, 0.1, -1.9, 0.1);
            letterPress( '55', fingers.thumb_2, 0.9, 0.4, 0.2);
            letterPress( '55', fingers.thumb_3, 0.1, 0, 0);

            letterPress( '55', fingers.wrist, -0.1, 0, 0);

            letterPress( '55', fingers.palm_1, 0, 0, 0);
            letterPress( '55', fingers.palm_2, 0, 0, 0);
            letterPress( '55', fingers.palm_3, 0, 0, 0);

            // ----- 8 -----

            letterPress( '56', fingers.pinky_1, 0, 0, 0);
            letterPress( '56', fingers.pinky_2, 0, 0, 0);
            letterPress( '56', fingers.pinky_3, 0, 0, 0);

            letterPress( '56', fingers.ring_1, 0.1, 0, 0);
            letterPress( '56', fingers.ring_2, 0, 0, 0);
            letterPress( '56', fingers.ring_3, 0, 0, 0);

            letterPress( '56', fingers.middle_1, 0.9, 0, 0);
            letterPress( '56', fingers.middle_2, 2, 0, 0);
            letterPress( '56', fingers.middle_3, 0.7, 0, 0);

            letterPress( '56', fingers.index_1, 0.1, 0, 0);
            letterPress( '56', fingers.index_2, 0, 0, 0);
            letterPress( '56', fingers.index_3, 0, 0, 0);

            letterPress( '56', fingers.thumb_1, 0.1, -1.7, 0.2);
            letterPress( '56', fingers.thumb_2, 0.6, 0.4, 0.2);
            letterPress( '56', fingers.thumb_3, 0.1, 0, 0);

            letterPress( '56', fingers.wrist, -0.1, 0, 0);

            letterPress( '56', fingers.palm_1, 0, 0, 0);
            letterPress( '56', fingers.palm_2, 0, 0, 0);
            letterPress( '56', fingers.palm_3, 0, 0, 0);

            // ----- 9 -----

            letterPress( '57', fingers.pinky_1, 0, 0, 0);
            letterPress( '57', fingers.pinky_2, 0, 0, 0);
            letterPress( '57', fingers.pinky_3, 0, 0, 0);

            letterPress( '57', fingers.ring_1, 0.1, 0, 0);
            letterPress( '57', fingers.ring_2, 0, 0, 0);
            letterPress( '57', fingers.ring_3, 0, 0, 0);

            letterPress( '57', fingers.middle_1, 0.2, 0, 0);
            letterPress( '57', fingers.middle_2, 0, 0, 0);
            letterPress( '57', fingers.middle_3, 0, 0, 0);

            letterPress( '57', fingers.index_1, 0.9, 0, 0.2);
            letterPress( '57', fingers.index_2, 2, 0, 0.2);
            letterPress( '57', fingers.index_3, 0.3, 0, 0);

            letterPress( '57', fingers.thumb_1, 0.1, -0.8, 0.3);
            letterPress( '57', fingers.thumb_2, 0.4, -0.2, 0.2);
            letterPress( '57', fingers.thumb_3, 0, -0.3, 0.5);

            letterPress( '57', fingers.wrist, -0.1, 0, 0);

            letterPress( '57', fingers.palm_1, 0, 0, 0);
            letterPress( '57', fingers.palm_2, 0, 0, 0);
            letterPress( '57', fingers.palm_3, 0, 0, 0);

            // ----- 10 -----

            letterPress( '192', fingers.pinky_1, 1.2, 0.2, -0.4);
            letterPress( '192', fingers.pinky_2, 1.3, 0, -0.2);
            letterPress( '192', fingers.pinky_3, 1, 0.3, -0.5);

            letterPress( '192', fingers.ring_1, 1.2, 0, -0.1);
            letterPress( '192', fingers.ring_2, 1.6, 0.1, -0.2);
            letterPress( '192', fingers.ring_3, 1.3, 0, -0.1);

            letterPress( '192', fingers.middle_1, 1.2, 0, 0);
            letterPress( '192', fingers.middle_2, 1.6, 0, 0);
            letterPress( '192', fingers.middle_3, 1.4, 0, 0);

            letterPress( '192', fingers.index_1, 1.3, -0.1, 0.2);
            letterPress( '192', fingers.index_2, 1.8, -0.2, 0.2);
            letterPress( '192', fingers.index_3, 0.7, 0, 0);

            letterPress( '192', fingers.thumb_1, 0.1, -0.2, 0);
            letterPress( '192', fingers.thumb_2, 0, 0, 0);
            letterPress( '192', fingers.thumb_3, 0, 0, -0.5);

            letterPress( '192', fingers.wrist, 0, 0.2, 0.5);

            letterPress( '192', fingers.palm_1, 0, 0, -0.07);
            letterPress( '192', fingers.palm_2, 0, 0, -0.12);
            letterPress( '192', fingers.palm_3, 0, 0, 0.06);







            // ----- SPACE -----
            letterPress( '32', fingers.pinky_1, 0, 0, 0);
            letterPress( '32', fingers.pinky_2, 0, 0, 0);
            letterPress( '32', fingers.pinky_3, 0, 0, 0);

            letterPress( '32', fingers.ring_1, 0, 0, 0);
            letterPress( '32', fingers.ring_2, 0, 0, 0);
            letterPress( '32', fingers.ring_3, 0, 0, 0);

            letterPress( '32', fingers.middle_1, 0, 0, 0);
            letterPress( '32', fingers.middle_2, 0, 0, 0);
            letterPress( '32', fingers.middle_3, 0, 0, 0);

            letterPress( '32', fingers.index_1, 0, 0, 0);
            letterPress( '32', fingers.index_2, 0, 0, 0);
            letterPress( '32', fingers.index_3, 0, 0, 0);

            letterPress( '32', fingers.thumb_1, 0, 0, 0);
            letterPress( '32', fingers.thumb_2, 0, 0, 0);
            letterPress( '32', fingers.thumb_3, 0, 0, 0);

            letterPress( '32', fingers.wrist, 0, 0, 0);

            letterPress( '32', fingers.palm_1, 0, 0, 0);
            letterPress( '32', fingers.palm_2, 0, 0, 0);
            letterPress( '32', fingers.palm_3, 0, 0, 0);

            render();

        }

        // fyrsta utgafa hættir









        
