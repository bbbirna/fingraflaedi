window.onload = function(event) {

    // Some variables we will be using later
    var camera, scene, renderer;
    //var controls;
    var element, container;
    var model;

    var targetRotationX = 0;
    var targetRotationXOnMouseDown = 0;
    var mouseXOnMouseDown = 0;

    var targetRotationY = 0;
    var targetRotationYOnMouseDown = 0;
    var mouseYOnMouseDown = 0;

    // A clock to keep track of time in a convenient way
    var clock = new THREE.Clock();
    

    // Setup
    init();

    // Start animating (updates and render)
    animate();

    function init() {
        
        // Set the scenete
        scene = new THREE.Scene();

        // BLACK background
        scene.background = new THREE.Color(0x0);

        // WHITE background
        //scene.background = new THREE.Color(0xffffff);

        // PINK background
        //scene.background = new THREE.Color(0xedc8cd);

        // GREEN background
        //scene.background = new THREE.Color(0xAFDBD0);

        // YELLOW background
        //scene.background = new THREE.Color(0xfafd7b);

        //ORANGE BACKGROUND
        //scene.background = new THREE.Color(0xf3c362);

        // Set the camera (angle, aspect ratio, near, far)
        camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
        // Distance camera from the center
        camera.position.set(0, 0, 0.4);
        camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
        scene.add(camera);
        
        // Set the renderer
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        // Set renderer's background color
        renderer.setClearColor(0xeeeeee, 1);
        // Set renderer size
        renderer.setSize( window.innerWidth, window.innerHeight );
        // Insert scene into the DOM
        document.body.appendChild( renderer.domElement );
        element = renderer.domElement;
        container = document.getElementById('container');
        container.appendChild(element);

        
        var light = new THREE.AmbientLight( 0xffffff ); // soft white light
        scene.add( light );



        var lightPoint = new THREE.PointLight( 0xffffff, 1.1, 100 );
        lightPoint.position.set( 0, 0.1, 0.3);
        scene.add( lightPoint );

        var sphere = new THREE.SphereGeometry( 0.01, 16, 8 );
        lightPoint.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0000 } ) ) );
        


        // Adds texture
        var texture = new THREE.Texture();
        var loader = new THREE.ImageLoader();

        // for gold hand
        //loader.load( 'textures/HAND_emboss3.jpg', function ( image ) {

        //loader.load( 'textures/HAND_noise.jpg', function ( image ) {

        // for green hand
        //loader.load( 'textures/HAND_tiles2.jpg', function ( image ) {

        // for
        loader.load( 'textures/HAND_S2.jpg', function ( image ) {
            texture.image = image;
            texture.needsUpdate = true;
        } );

        var loader = new THREE.JSONLoader();


        var fingers;
        loader.load( 'hand25.json', function( geometry, materials ) {
            
            // GOLD
            var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xffc300, emissive: 0x0000000, roughness: 0.4, metalness: 0.5 } );
            
            // SILVER
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xbbbbcc, emissive: 0x111111, roughness: 0.5, metalness: 0.8 } );
            
            // GREEN
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0x6fba6c, emissive: 0x207019, roughness: 0.8, metalness: 0.7 } );
            
            // PINK
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0Xf598b2, emissive: 0xab358c, roughness: 0.5, metalness: 0.2 } );
            
            // PURPLE
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xb358bf, emissive: 0x3a0d40, roughness: 0.5, metalness: 0.5 } );
            
            // BLUE
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0x3c50d6, emissive: 0x0, roughness: 0, metalness: 0 } );

            material.shading = THREE.SmoothShading;
            material.side = THREE.BackSide;
            model = new THREE.SkinnedMesh( geometry, material );
            fingers = initModel(model);
            //model.scale.set(-1,1,1);


            var textureLoader = new THREE.TextureLoader();
            textureLoader.load('textures/HAND_S.jpg');
            // Add the event listener
            window.addEventListener( 'load', function(event){

                // The actual texture is returned in the event.content
                model.material.map = event.content;

            });



            scene.add( model );

           
        } );

        // Adjust everything in case there is a window resize
        window.addEventListener('resize', handleResize);
        // Set up these adjustments for the first time right away
        setTimeout(handleResize, 1);



        //-- 
        document.onkeydown = checkKey;


        // fyrsta utgafa 

        function checkKey(e) {

            e = e || window.event;

            let letterArray = [];
            letterArray.push(e.keyCode);
            console.log(letterArray);



            var letterPress = ( keyCode, bone, xVal, yVal, zVal) => {



                if (e.keyCode == keyCode) {

                    console.log(keyCode);

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
                    
                    var moveX = setInterval(function() {
                    
                        if (rotX >= xVal && directionX == 0.01) {
                            clearInterval(moveX);
                        }
                      
                        if (rotX <= xVal && directionX == -0.01) {
                            clearInterval(moveX);
                        }
                       
                        bone.x = rotX;
                        rotX += directionX;

                        //renderer.render( scene, camera );

                    }, 20);

                    var moveY = setInterval(function() {
                    
                        if (rotY >= yVal && directionY == 0.01) {
                            clearInterval(moveY);
                        }
                      
                        if (rotY <= yVal && directionY == -0.01) {
                            clearInterval(moveY);
                        }
                       
                        bone.y = rotY;
                        rotY += directionY;

                        //renderer.render( scene, camera );

                    }, 20);

                    var moveZ = setInterval(function() {
                    
                        if (rotZ >= zVal && directionZ == 0.003) {
                            clearInterval(moveZ);
                        }
                      
                        if (rotZ <= zVal && directionZ == -0.003) {
                            clearInterval(moveZ);
                        }
                       
                        bone.z = rotZ;
                        rotZ += directionZ;

                        //renderer.render( scene, camera );

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

            //render();

        }

        // fyrsta utgafa hættir


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

        window.addEventListener('mousedown', mouseDownHandler);
        
        // Start rendering
        //render();
        
    } // init ends



    // Set render loop
    function render () {


        if (model) {
        // With easing
            model.rotation.y += ( targetRotationX - model.rotation.y ) * 0.05;
        }

        // With easing
        //model.rotation.x += ( targetRotationY - model.rotation.x ) * 0.05;

        renderer.render( scene, camera );
        window.requestAnimationFrame( render );

    };

    render();

    function mouseDownHandler(e) {
        
        mouseXOnMouseDown = e.clientX;
        targetRotationXOnMouseDown = targetRotationX;

        mouseYOnMouseDown = e.clientY;
        targetRotationXOnMouseDown = targetRotationY;
        
        window.addEventListener('mousemove', mouseMoveHandler);                
        window.addEventListener('mouseup', stopRotation);
        window.addEventListener('mouseout', stopRotation);
        
    }

    function mouseMoveHandler(e) {
        var attenuationFactor = 0.005;
        var xDelta = e.clientX - mouseXOnMouseDown
        targetRotationX = targetRotationXOnMouseDown + ( xDelta * attenuationFactor );


        var yDelta = e.clientY - mouseYOnMouseDown
        targetRotationY = targetRotationYOnMouseDown + ( yDelta * attenuationFactor );


    }

    function stopRotation() {
        window.removeEventListener('mousemove', mouseMoveHandler);                
        window.removeEventListener('mouseup', stopRotation);
        window.removeEventListener('mouseout', stopRotation);
    }



    // Update whatever changed in this iteration:
    // object angles, camera movement, controls 
    // positioning, screen size, etc.
    function update(timeDelta) {
        camera.updateProjectionMatrix();
        //controls.update(timeDelta);
    }



    // Keep the loop happening (60fps)
    function animate(t) {
        requestAnimationFrame(animate);
        update(clock.getDelta());
        //render();
    }

    // Adjust sizes on window resize
    function handleResize() {
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }


    // Go fullscreen (different triggers for different browser)
    function switchToFullscreen() {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        }
        else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
        else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        }
        else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        }

    }





    // HOVER

    // const container = document.getElementById("container");


    var directionX = "";
    var oldx = 0;

    var directionY = "";
    var oldy = 0;
    
    container.addEventListener('mousemove', function(event) {

        
        if (event.pageX < oldx) {
             directionX = "left";
        } 
        else if (event.pageX > oldx) {
            directionX = "right";
        }
        if (event.pageY < oldy) {
             directionY = "up";
        } 
        else if (event.pageY > oldy) {
            directionY = "down";
        }

        oldx = event.pageX;
        oldy = event.pageY;
    
        // console.log(directionX);
        // console.log(directionY);




        console.log(event.clientX);
        console.log(container.offsetWidth);
        let mouseX = event.layerX;
        let mouseY = event.layerY;
        let windowWidth = container.offsetWidth;
        let windowHeight = container.offsetHeight;
        if (model) {
            if (directionX == "right" && model.rotation.y < 0.1) {
                model.rotation.y += 0.01;
            }

            if (directionX == "left" && model.rotation.y > -0.1) {
                model.rotation.y -= 0.01;
            }

            if (directionY == "down" && model.rotation.x < 0.2) {
                model.rotation.x += 0.005;
            }

            if (directionY == "up" && model.rotation.x > 0) {
                model.rotation.x -= 0.005;
                console.log(model.rotation.x)
            }


        }

    });

   





} //---------- window on load











// window.onload = function (event) {
    
//     // Some variables we will be using later
//     var camera, scene, renderer;
//     //var controls;
//     var element, container;

//     // var model;
    
//     // A clock to keep track of time in a convenient way
//     var clock = new THREE.Clock();
    
//     // Initialize the scene, cameras, objects
//     init();
    
//     // Start animating (updates and render)
//     animate();

//     var targetRotationX = 0;
//     var targetRotationXOnMouseDown = 0;
//     var mouseXOnMouseDown = 0;

//     var targetRotationY = 0;
//     var targetRotationYOnMouseDown = 0;
//     var mouseYOnMouseDown = 0;

//     function init () {
        
//         // Create render, append canvas to the DOM
//         renderer = new THREE.WebGLRenderer({ antialias: true, });
//         // Set renderer size
//         renderer.setSize( window.innerWidth, window.innerHeight );
//         // Insert scene into the DOM
//         document.body.appendChild( renderer.domElement );
//         element = renderer.domElement;
//         container = document.getElementById('container');
//         container.appendChild(element);
        
//         // Create scene
//         scene = new THREE.Scene();
//         scene.background = new THREE.Color(0x0);
        
//         // Create camera and position it in space
//         camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 10000);
//         camera.position.set(0, 0, 0.2);
//         camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
//         scene.add(camera);
        
//         // Allows navigating the scene via mouse
//         //controls = new THREE.OrbitControls(camera, element);

//         var light = new THREE.AmbientLight( 0xffffff ); // soft white light
//         //var pointLight = new THREE.PointLight(0xFFFFFF, 1, 100000);
//         scene.add( light );

//         var lightPoint = new THREE.PointLight( 0xffffff, 1, 1000 );
//         lightPoint.position.set( 0, 0.1, 0.2);
//         scene.add( lightPoint );

//         var sphere = new THREE.SphereGeometry( 0.01, 16, 8 );
//         lightPoint.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0000 } ) ) );
        
//         // Adds texture
//         var texture = new THREE.Texture();
//         var loader = new THREE.ImageLoader();
//         loader.load( 'textures/HAND_S.jpg', function ( image ) {
//             texture.image = image;
//             texture.needsUpdate = true;
//         } );

//         var loader = new THREE.JSONLoader();

//         var fingers;
//         loader.load( 'hand25.json', function( geometry, materials ) {
 
//             var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xffc300, emissive: 0x000000, roughness: 0, metalness: 0 } );

//             material.shading = THREE.SmoothShading;
//             material.side = THREE.BackSide;
//             model = new THREE.SkinnedMesh( geometry, material );
//             fingers = initModel(model);
//             //model.scale.set(-1,1,1);


//             var textureLoader = new THREE.TextureLoader();
//             textureLoader.load('textures/HAND_S.jpg');
//             // Add the event listener
//             window.addEventListener( 'load', function(event){

//                 // The actual texture is returned in the event.content
//                 model.material.map = event.content;

//             });



//             scene.add( model );

           
//         } );
        



                
//         // Adjust everything in case there is a window resize
//         window.addEventListener('resize', handleResize);
//         // Set up these adjustments for the first time right away
//         setTimeout(handleResize, 1);


//         document.onkeydown = checkKey;

//         function checkKey(e) {

//             e = e || window.event;

//             let letterArray = [];
//             letterArray.push(e.keyCode);
//             //console.log(letterArray);



//             var letterPress = ( keyCode, bone, xVal, yVal, zVal) => {



//                 if (e.keyCode == keyCode) {

//                     //console.log(keyCode);

//                     var rotX = bone.x;
//                     var rotY = bone.y;
//                     var rotZ = bone.z;


//                     let directionX = 0.01;
//                     let directionY = 0.01;
//                     let directionZ = 0.003;

//                     if (rotX > xVal) {
//                         directionX = -0.01;
//                     }

//                     if (rotY > yVal) {
//                         directionY = -0.01;
//                     }

//                     if (rotZ > zVal) {
//                         directionZ = -0.003;
//                     }
                    
//                     var moveX = setInterval(function() {
                    
//                         if (rotX >= xVal && directionX == 0.01) {
//                             clearInterval(moveX);
//                         }
                      
//                         if (rotX <= xVal && directionX == -0.01) {
//                             clearInterval(moveX);
//                         }
                       
//                         bone.x = rotX;
//                         rotX += directionX;

//                         renderer.render( scene, camera );

//                     }, 20);

//                     var moveY = setInterval(function() {
                    
//                         if (rotY >= yVal && directionY == 0.01) {
//                             clearInterval(moveY);
//                         }
                      
//                         if (rotY <= yVal && directionY == -0.01) {
//                             clearInterval(moveY);
//                         }
                       
//                         bone.y = rotY;
//                         rotY += directionY;

//                         renderer.render( scene, camera );

//                     }, 30);

//                     var moveZ = setInterval(function() {
                    
//                         if (rotZ >= zVal && directionZ == 0.003) {
//                             clearInterval(moveZ);
//                         }
                      
//                         if (rotZ <= zVal && directionZ == -0.003) {
//                             clearInterval(moveZ);
//                         }
                       
//                         bone.z = rotZ;
//                         rotZ += directionZ;

//                         renderer.render( scene, camera );

//                     }, 20);
//                 }

//             }


//             letterPress( '65', fingers.pinky_1, 1.5, 0, -0.5);
//             letterPress( '65', fingers.pinky_2, 1, 0, -0.2);
//             letterPress( '65', fingers.pinky_3, 0.5, 0.3, -0.2);

//             letterPress( '65', fingers.ring_1, 1.4, 0, -0.1);
//             letterPress( '65', fingers.ring_2, 1.7, 0, -0.2);
//             letterPress( '65', fingers.ring_3, 0.3, 0, 0);

//             letterPress( '65', fingers.middle_1, 1.3, 0, 0);
//             letterPress( '65', fingers.middle_2, 1.8, 0, 0);
//             letterPress( '65', fingers.middle_3, 0.3, 0, 0);

//             letterPress( '65', fingers.index_1, 1.15, 0, 0.15);
//             letterPress( '65', fingers.index_2, 1.9, 0, 0.25);
//             letterPress( '65', fingers.index_3, 0.6, 0, 0);

//             letterPress( '65', fingers.thumb_1, 0, -0.6, 0.5);
//             letterPress( '65', fingers.thumb_2, 0, 0, 0);
//             letterPress( '65', fingers.thumb_3, 0, 0, 0);

//             letterPress( '65', fingers.wrist, 0, 0, 0);

//             letterPress( '65', fingers.palm_1, 0, 0, -0.055); //ring
//             letterPress( '65', fingers.palm_2, 0, 0, -0.085); //pinky
//             letterPress( '65', fingers.palm_3, 0, 0, 0.055); //index
            


//             // ----- B -----
//             letterPress( '66', fingers.pinky_1, 0, 0, -0.3);
//             letterPress( '66', fingers.pinky_2, 0.1, 0, 0);
//             letterPress( '66', fingers.pinky_3, 0.1, 0, 0);

//             letterPress( '66', fingers.ring_1, 0, 0, -0.1);
//             letterPress( '66', fingers.ring_2, 0.1, 0, 0);
//             letterPress( '66', fingers.ring_3, 0.1, 0, 0);

//             letterPress( '66', fingers.middle_1, 0, 0, 0);
//             letterPress( '66', fingers.middle_2, 0.1, 0, 0);
//             letterPress( '66', fingers.middle_3, 0.1, 0, 0);

//             letterPress( '66', fingers.index_1, 0, 0, 0.1);
//             letterPress( '66', fingers.index_2, 0.1, 0, 0);
//             letterPress( '66', fingers.index_3, 0.1, 0, 0);

//             letterPress( '66', fingers.thumb_1, -0.1, -0.4, 0.4);
//             letterPress( '66', fingers.thumb_2, 0, 0, 0.2);
//             letterPress( '66', fingers.thumb_3, 0, 0, -0.1);

//             letterPress( '66', fingers.wrist, -0.1, 0, 0);

//             letterPress( '66', fingers.palm_1, 0, 0, -0.04);
//             letterPress( '66', fingers.palm_2, 0, 0, -0.12);
//             letterPress( '66', fingers.palm_3, 0, 0, 0.08);

//             // ----- C -----
//             letterPress( '67', fingers.pinky_1, 1.1, 0, -0.5);
//             letterPress( '67', fingers.pinky_2, 1.3, 0.1, -0.4);
//             letterPress( '67', fingers.pinky_3, 0.8, 0.2, -0.3);

//             letterPress( '67', fingers.ring_1, 1.2, 0, -0.2);
//             letterPress( '67', fingers.ring_2, 1.9, 0.1, -0.2);
//             letterPress( '67', fingers.ring_3, 0.3, 0, 0);

//             letterPress( '67', fingers.middle_1, 1.1, 0, 0);
//             letterPress( '67', fingers.middle_2, 2, 0, 0);
//             letterPress( '67', fingers.middle_3, 0.3, 0, 0);

//             letterPress( '67', fingers.index_1, 0.6, -0.1, 0);
//             letterPress( '67', fingers.index_2, 0.7, 0, 0);
//             letterPress( '67', fingers.index_3, 0.7, 0, 0);

//             letterPress( '67', fingers.thumb_1, 0.1, -1.2, 0);
//             letterPress( '67', fingers.thumb_2, 0.1, 0.2, 0.1);
//             letterPress( '67', fingers.thumb_3, 0, -0.2, 0.4);

//             letterPress( '67', fingers.wrist, -0.1, 0, 0);

//             letterPress( '67', fingers.palm_1, 0, 0, -0.02);
//             letterPress( '67', fingers.palm_2, 0, 0, -0.07);
//             letterPress( '67', fingers.palm_3, 0, 0, 0.05);

//             // ----- D -----
//             letterPress( '68', fingers.pinky_1, 0.1, 0, 0);
//             letterPress( '68', fingers.pinky_2,0.1, 0, 0);
//             letterPress( '68', fingers.pinky_3, 0.1, 0, 0);

//             letterPress( '68', fingers.ring_1, 0.3, 0.1, 0);
//             letterPress( '68', fingers.ring_2, 0.3, 0, 0);
//             letterPress( '68', fingers.ring_3, 0.1, 0, 0);

//             letterPress( '68', fingers.middle_1, 0.6, 0, 0);
//             letterPress( '68', fingers.middle_2, 1.4, 0, 0);
//             letterPress( '68', fingers.middle_3, 0.7, 0, 0);

//             letterPress( '68', fingers.index_1, 0.1, 0, 0);
//             letterPress( '68', fingers.index_2, 0.2, 0, 0);
//             letterPress( '68', fingers.index_3, 0.1, 0, 0);

//             letterPress( '68', fingers.thumb_1, 0, -1.7, -0.1);
//             letterPress( '68', fingers.thumb_2, 0.6, 0.5, 0.1);
//             letterPress( '68', fingers.thumb_3, 0, 0, 0.2);

//             letterPress( '68', fingers.wrist, -0.1, 0, 0);

//             letterPress( '68', fingers.palm_1, 0, 0, 0);
//             letterPress( '68', fingers.palm_2, 0, 0, 0);
//             letterPress( '68', fingers.palm_3, 0, 0, 0);

//               // ----- SPACE -----
//             letterPress( '32', fingers.pinky_1, 0, 0, 0);
//             letterPress( '32', fingers.pinky_2, 0, 0, 0);
//             letterPress( '32', fingers.pinky_3, 0, 0, 0);

//             letterPress( '32', fingers.ring_1, 0, 0, 0);
//             letterPress( '32', fingers.ring_2, 0, 0, 0);
//             letterPress( '32', fingers.ring_3, 0, 0, 0);

//             letterPress( '32', fingers.middle_1, 0, 0, 0);
//             letterPress( '32', fingers.middle_2, 0, 0, 0);
//             letterPress( '32', fingers.middle_3, 0, 0, 0);

//             letterPress( '32', fingers.index_1, 0, 0, 0);
//             letterPress( '32', fingers.index_2, 0, 0, 0);
//             letterPress( '32', fingers.index_3, 0, 0, 0);

//             letterPress( '32', fingers.thumb_1, 0, 0, 0);
//             letterPress( '32', fingers.thumb_2, 0, 0, 0);
//             letterPress( '32', fingers.thumb_3, 0, 0, 0);

//             letterPress( '32', fingers.wrist, 0, 0, 0);

//             letterPress( '32', fingers.palm_1, 0, 0, 0);
//             letterPress( '32', fingers.palm_2, 0, 0, 0);
//             letterPress( '32', fingers.palm_3, 0, 0, 0);




//             render();

//         }

//         window.addEventListener('mousedown', mouseDownHandler);

//         // Start rendering
//         render();

//     } // init ends


//     function render() {

//         //console.log("render");


//         window.requestAnimationFrame( render );

//         renderer.render( scene, camera );

//     }

//     // render();

//     function mouseDownHandler(e) {
//         console.log("mouse down");

//         mouseXOnMouseDown = e.clientX;
//         targetRotationXOnMouseDown = targetRotationX;

//         mouseYOnMouseDown = e.clientY;
//         targetRotationXOnMouseDown = targetRotationY;
        
//         window.addEventListener('mousemove', mouseMoveHandler);                
//         window.addEventListener('mouseup', stopRotation);
//         window.addEventListener('mouseout', stopRotation);
        
//     }

//     function mouseMoveHandler(e) {
//         console.log("mouse move");

//         var attenuationFactor = 0.005;
//         var xDelta = e.clientX - mouseXOnMouseDown
//         targetRotationX = targetRotationXOnMouseDown + ( xDelta * attenuationFactor );


//         var yDelta = e.clientY - mouseYOnMouseDown
//         targetRotationY = targetRotationYOnMouseDown + ( yDelta * attenuationFactor );


//         model.rotation.y += ( targetRotationX - model.rotation.y ) * 0.05;

//         //model.rotation.x += ( targetRotationY - model.rotation.x ) * 0.05;


//     }

//     function stopRotation() {
//         console.log("stop rotation")

//         window.removeEventListener('mousemove', mouseMoveHandler);                
//         window.removeEventListener('mouseup', stopRotation);
//         window.removeEventListener('mouseout', stopRotation);
//     }

//     // Update whatever changed in this iteration:
//     // object angles, camera movement, controls 
//     // positioning, screen size, etc.
//     function update(timeDelta) {
//         camera.updateProjectionMatrix();
//         //controls.update(timeDelta);
//     }

//     // // Make things move a bit in this iteration
//     // function render() {
//     //     renderer.render(scene, camera);
//     // }

//     // Keep the loop happening (60fps)
//     function animate(t) {
//         requestAnimationFrame(animate);
//         update(clock.getDelta());
//         render();
//     }

//     // Adjust sizes on window resize
//     function handleResize() {
//         var width = container.offsetWidth;
//         var height = container.offsetHeight;
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//         renderer.setSize(width, height);
//     }

//     // Go fullscreen (different triggers for different browser)
//     function switchToFullscreen() {
//         if (container.requestFullscreen) {
//             container.requestFullscreen();
//         }
//         else if (container.msRequestFullscreen) {
//             container.msRequestFullscreen();
//         }
//         else if (container.mozRequestFullScreen) {
//             container.mozRequestFullScreen();
//         }
//         else if (container.webkitRequestFullscreen) {
//             container.webkitRequestFullscreen();
//         }
//     }

    
// }       





