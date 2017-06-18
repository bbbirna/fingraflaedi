window.onload = function(event) {

    // Some variables we will be using later
    let camera, scene, renderer;
    //const controls;
    let element, container;
    let model;

    let targetRotationX = 0;
    let targetRotationXOnMouseDown = 0;
    let mouseXOnMouseDown = 0;

    let targetRotationY = 0;
    let targetRotationYOnMouseDown = 0;
    let mouseYOnMouseDown = 0;

    // A clock to keep track of time in a convenient way
    let clock = new THREE.Clock();
    

    // Setup
    init();

    // Start animating (updates and render)
    animate();

    function init() {
        
        // Set the scenete
        scene = new THREE.Scene();

        // BLACK background
        //scene.background = new THREE.Color(0x0);

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
        renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
        // Set renderer's background color
        renderer.setClearColor(0x000000, 0);
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

        // var sphere = new THREE.SphereGeometry( 0.01, 16, 8 );
        // lightPoint.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0000 } ) ) );
        


        // Adds texture
        var texture = new THREE.Texture();
        var loader = new THREE.ImageLoader();

       

        // MODEL TEXTURE
        loader.load( 'textures/HAND_S2.jpg', function ( image ) {
            texture.image = image;
            texture.needsUpdate = true;
        } );

        var loader = new THREE.JSONLoader();


        loader.load( 'hand25.json', function( geometry, materials ) { //meiri contrast
            

            // MODEL LITIR NOTA

            // GOLD use HAND_S2.jpg with black background
            var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xffc300, emissive: 0x110b00, roughness: 0.5, metalness: 0.5 } );
            
            // PINK use HAND_S2 with Sinbad background color
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xffc2dc, emissive: 0x7c004f, roughness: 0.6, metalness: 0.6 } );
            
            // PURPLE use HAND_S2 with Mustard background
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xb358bf, emissive: 0x3a0d40, roughness: 0.5, metalness: 0.7 } );
            

            material.shading = THREE.SmoothShading;
            material.side = THREE.BackSide;
            model = new THREE.SkinnedMesh( geometry, material );
            fingers = initModel(model);
            letters = initLetters(model);

            scene.add( model );

           
        } ); //loader end

        // Adjust everything in case there is a window resize
        window.addEventListener('resize', handleResize);
        // Set up these adjustments for the first time right away
        setTimeout(handleResize, 1);

        let counter = 0;
        let showSignFinished;

        var showSign = (bone, xVal, yVal, zVal, doAfter) => {
 
            let rotX = bone.x;
            let rotY = bone.y;
            let rotZ = bone.z;

            let directionX = 0.01;
            let directionY = 0.01;
            let directionZ = 0.003;

            let xFinished = false;
            let yFinished = false;
            let zFinished = false;

            showSignFinished = false;

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
                    xFinished = true;
                    clearInterval(moveX);
                }
              
                if (rotX <= xVal && directionX == -0.01) {
                    xFinished = true;
                    clearInterval(moveX);
                }
               
                bone.x = rotX;
                rotX += directionX;


            }, 10);

            var moveY = setInterval(() => {
            
                if (rotY >= yVal && directionY == 0.01) {
                    yFinished = true;
                    clearInterval(moveY);
                }
              
                if (rotY <= yVal && directionY == -0.01) {
                    yFinished = true;
                    clearInterval(moveY);
                }
               
                bone.y = rotY;
                rotY += directionY;

            }, 10);



            var moveZ = setInterval(() => {
            
                if (rotZ >= zVal && directionZ == 0.003) {
                    zFinished = true;
                    clearInterval(moveZ);
                }
              
                if (rotZ <= zVal && directionZ == -0.003) {
                    zFinished = true;
                    clearInterval(moveZ);
                }
               
                bone.z = rotZ;
                rotZ += directionZ;
      
            }, 10);

            // til að vita hvenær hreyfingin er búin
            var moveFinished = setInterval(() => {

                if (xFinished == true && yFinished == true && zFinished == true) {
                    // console.log("all fin");
                    counter++;

                    if (counter == 19) {
                        
                        // console.log("allt búið")
                        showSignFinished = true;
                        counter = 0;
                        // doAfter? doAfter():null;
                        
                    }

                    console.log(counter)
                    clearInterval(moveFinished);

                }
                
                console.log(showSignFinished);

            }, 20); 





        } // showSign end



        // // ÝTA Á SVG MYNDIR

        // document.getElementById("letter-a").addEventListener('click', () => {

        //     for (let i in letters) {
        //         if (letters[i].letter == "a") {
        //             showSign(letters, letters[i].finger, letters[i].x, letters[i].y, letters[i].z);
        //         }
        //     }
        // })


        // play button

        const playBtn = document.getElementById("btn-pause");

        playBtn.addEventListener('click', () => {

            let inputShit = document.getElementById("textInput").value;
            console.log(inputShit);

            const inputLetters = [];

            for (let i = 0; i < inputShit.length; i++) {


                for (let j in letters) {

                    
                    if (letters[j].letter == inputShit[i]) {
                        
                        inputLetters.push(letters[j])
                    

                    }

                }
            }

            console.log(inputLetters)

            // let i = 0;

            // const getNextLetter = ()=>{

            //     if (i < inputLetters.length) {
            //         console.log("GAAAY")
            //         showSign(inputLetters[i].finger, inputLetters[i].x, inputLetters[i].y, inputLetters[i].z, getNextLetter);

            //     }

            //     i++;
            // }

            // showSign(inputLetters[i].finger, inputLetters[i].x, inputLetters[i].y, inputLetters[i].z, getNextLetter);

        })



        // INPUT Á AÐALDÍÐU

        var textInput = document.getElementById("textInput");
        
        // console.log(input);
        let inputStringOld = "";
        textInput.addEventListener('keyup', (e) => {

            counter = 0;

            let inputString = textInput.value;

            // svo það gerist ekkert þegar maður ýtir á aðra takka en bókstafina
            if (inputString.length == inputStringOld.length) {
                return;
            }

            inputStringOld = inputString;

            // // þegar allt hefur verið strokað úr inputinu
            // if (inputString.length < 1) {
            //     for (var i in letters) {
            //         if (letters[i].letter == " ") {
            //             showSign(letters, letters[i].finger, letters[i].x, letters[i].y, letters[i].z, letters[i].move);
            //         }
            //     }

            // }

            // if (inputString == "*") {

            //     let stary = 0;

            //     let moveInterval2 = setInterval( function() {
                   
            //         var posY = Math.sin(stary)*4.1;
            //         // if (posY < 4 && posY >= 0) {
            //             model.rotation.y = posY;
            //         // }
            //         stary += 0.02;

            //     }, 10);


            //     const playSound = () => {
            //         var snd = new Audio("sound/theNextEpisode.mp3");
            //         snd.play();
            //     }

            //     playSound();

            // } // * end

            let lastLetter = inputString.slice(-1);
            //console.log(lastLetter);

            //letters = initLetters(model);

            // svo höndin sýni aftasta stafinn í strengnum
            for ( var i in letters ) {
                if (letters[i].letter == lastLetter) {
                        //console.log(lastLetter);
                        showSign(letters[i].finger, letters[i].x, letters[i].y, letters[i].z);
             
                }

            }

            // hér fyrir neðan er það sem þarf fyrir hreyfingarnar sem eru hluti af ákveðnum stöfum

            var jz = fingers.wrist.z;
            var jy = fingers.wrist.y;

            var sx = fingers.index_1.x;

            let moveTimeout = setTimeout(function() {

                let moveInterval = setInterval(function() {
                    
                    // J
                    if (lastLetter == 'j') {
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
                        
                        //console.log(posZ);
                        console.log(jz);

                        if (jz > 5.99) {
                            // fingers.wrist.z = 0;
                            // jz = 0;
                            clearInterval(moveInterval);
                           
                        }

                    } // j end

                    // S
                    else if (lastLetter == 's') {
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

                    } // s end

                }, 20); // setInterval end

            }, 3000); // setTimeput end

        }); // keyup á textInput end

        container.addEventListener('mousedown', mouseDownHandler); // til að hreyfa módelið með músinni
        
    } // init ends



    // Set render loop
    function render () {

        if (model) {
        // With easing
            model.rotation.y += ( targetRotationX - model.rotation.y ) * 0.05;
            
        }

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

    var directionX = "";
    var oldx = 0;

    var directionY = "";
    var oldy = 0;
    
    window.addEventListener('mousemove', function(event) {

        
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
       
    
        let mouseX = event.layerX;
        let mouseY = event.layerY;
        let windowWidth = window.offsetWidth;
        let windowHeight = window.offsetHeight;
        if (model) {
            if (directionX == "right" && model.rotation.y < 0.1) {
                model.rotation.y += 0.01;
            }

            if (directionX == "left" && model.rotation.y > -0.1) {
                model.rotation.y -= 0.01;
            }

            if (directionY == "down" && model.rotation.x < 0.1) {
                model.rotation.x += 0.005;
            }

            if (directionY == "up" && model.rotation.x > -0.1) {
                model.rotation.x -= 0.005;
                //console.log(model.rotation.x)
            }

        }

    });

    

    
    

   


} //---------- window on load








