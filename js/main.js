

window.onload = function (event) {
    
    // Some variables we will be using later
    var camera, scene, renderer;
    var controls;
    var element, container;
    
    // A clock to keep track of time in a convenient way
    var clock = new THREE.Clock();
    
    // Initialize the scene, cameras, objects
    init();
    
    // Start animating (updates and render)
    animate();

    function init () {
        
        // Create render, append canvas to the DOM
        renderer = new THREE.WebGLRenderer({ antialias: true, });
        element = renderer.domElement;
        container = document.getElementById('container');
        container.appendChild(element);
        
        // Create scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0);
        
        // Create camera and position it in space
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 10000);
        camera.position.set(0, 0, 0.2);
        scene.add(camera);
        
        // Allows navigating the scene via mouse
        controls = new THREE.OrbitControls(camera, element);

        var light = new THREE.AmbientLight( 0xffffff ); // soft white light
        //var pointLight = new THREE.PointLight(0xFFFFFF, 1, 100000);
        scene.add( light );
        
        // Adds texture
        var texture = new THREE.Texture();
        var loader = new THREE.ImageLoader();
        loader.load( 'textures/luv.png', function ( image ) {
            texture.image = image;
            texture.needsUpdate = true;
        } );

        var loader = new THREE.JSONLoader();
        var bones = {};
        var model;
        loader.load( 'hand19.json', function( geometry, materials ) {
            // console.log(geometry, materials)
            var material = new THREE.MeshStandardMaterial( {skinning: true, color: 0x00ff00, emissive: 0x000000, roughness: 0, metalness: 0.5} );
            //var material = new THREE.MeshBasicMaterial( {skinning: true, map: texture} );
            material.side = THREE.BackSide;
            model = new THREE.SkinnedMesh( geometry, material );
            model.scale.set(-1,1,1);
            // for(var i = 0; i < model.skeleton.bones.length; i++) {
            //     console.log(model.skeleton.bones[i]);
            //     bones[model.skeleton.bones[i].name] = model.skeleton.bones[i];

            // }
            scene.add( model );

           
        } );
        

        
    

        

                
        // Adjust everything in case there is a window resize
        window.addEventListener('resize', handleResize);
        // Set up these adjustments for the first time right away
        setTimeout(handleResize, 1);

        var counter = 0;
        var max = 1.4;
        var min = 0 ;


        function rotateChildX( bone, rotation ) {
            //console.log(bone.name);
            if(rotation < min) rotation = max;
            if(rotation > max) rotation = min;
            bone.rotation.x = rotation;
            for(var i = 0; i < bone.children.length; i++) {
                rotateChildX(bone.children[i], rotation);
            }
        }

        function rotateChildY( bone, rotation ) {
            //console.log(bone.name);
            if(rotation < min) rotation = max;
            if(rotation > max) rotation = min;
            bone.rotation.y = rotation*0.5;
            for(var i = 0; i < bone.children.length; i++) {
                rotateChildY(bone.children[i], rotation*0.1);
            }
        }

        var reverse = false;
        function rotateBoneX ( bone, minVal, maxVal, rotation, counterAdd) {
            min = minVal;
            max = maxVal;

            // if(rotation < min) rotation = max;
            // if(rotation > max) rotation = min;
            //console.log(rotation)

            bone.rotation.x = rotation;

           
            if(reverse) {
                counter -= counterAdd;
                if(counter < min) {
                    counter = min;
                    reverse = false;
                }
            } 
            if(!reverse) {
                counter += counterAdd;
                if(counter > max) {
                    counter = max;
                    reverse = true;
                }
            }
            
        }

        


  


        
        function render() {
            requestAnimationFrame( render );
            // if(reverse) {
            //     counter -= 0.01;
            //     if(counter < min) {
            //         counter = min;
            //         reverse = false;
            //     }
            // } 
            // else {
            //     counter += 0.01;
            //     if(counter > max) {
            //         counter = max;
            //         reverse = true;
            //     }
            // }

            //console.log(counter);

            // rotateBoneX(model.skeleton.bones[14], 0, 1.2, counter, 0.001);
            // rotateBoneX(model.skeleton.bones[15], 0, 2.7, counter, 0.001);
            // rotateBoneX(model.skeleton.bones[16], 0, 3.3, counter, 0.001);


            

           


            //rotateBoneX(model.skeleton.bones[19], 0, 1, counter);

            // if (counter > 0 && counter < 1.3) {
            //     rotateChildX(model.skeleton.bones[14], counter)
            // }

            // if (counter > 0 && counter < 1.3) {
            //     rotateChildX(model.skeleton.bones[15], counter)
            // }

            // if (counter > 0 && counter < 0.5) {
            //     rotateChildX(model.skeleton.bones[16], counter)
            // }

            // if (counter > -0.6) {
            //     rotateChildY(model.skeleton.bones[14], counter)
            // }

            // if (counter > -0.2) {
            //     rotateChildY(model.skeleton.bones[15], counter)
            // }

            // if (counter > 0) {
            //     rotateChildY(model.skeleton.bones[16], counter)
            // }

            


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






           






            renderer.render( scene, camera );

        }

        render();




        document.onkeydown = checkKey;

        function checkKey(e) {

            e = e || window.event;


            // if (e.keyCode == '81') {
            //     console.log("Q PRESS")
                
            //     // rotateBoneX(model.skeleton.bones[19], 0, 0.9, counter, 0.1);
            //     // rotateBoneX(model.skeleton.bones[20], 0, 0.9, counter, 0.1);
            //     // rotateBoneX(model.skeleton.bones[21], 0, 0.9, counter, 0.1);

            //     var x1 = model.skeleton.bones[19].rotation.x;
                
            //     var move = setInterval(function() {
            //         var pos = Math.sin(x1) * 2;

            //         console.log(x1 + " <- x1");
            //         console.log(pos + " <- pos")
                    
            //         // if (pos > 0.9) {
            //         //     clearInterval(move);
            //         // }
            //         //console.log(model.skeleton.bones[19].rotation.x + " model skeleton rot x");
            //         if (x1 <= pos) {
            //             if (pos > 0.9) {
            //                 clearInterval(move);
            //             }
            //             console.log("if nr 1")
            //             model.skeleton.bones[19].rotation.x = pos;
            //             model.skeleton.bones[20].rotation.x = pos;
            //             model.skeleton.bones[21].rotation.x = pos;
                        
            //         }

            //         else if (x1 > pos) {
            //             if (pos < 0.9) {
            //                 clearInterval(move);
            //             }
            //             console.log("if nr 2")
            //             model.skeleton.bones[19].rotation.x = pos;
            //             model.skeleton.bones[20].rotation.x = pos;
            //             model.skeleton.bones[21].rotation.x = pos;
                        
            //         }
                    
            //         x1 += 0.01;
            //         console.log(pos + " POS")

            //     }, 20);
            // }



            var letterPress = function( keyCode, startingPoint, endPoint) {

                if (e.keyCode == keyCode) {
                    console.log(keyCode);
                    
                    // rotateBoneX(model.skeleton.bones[19], 0, 0.9, counter, 0.1);
                    // rotateBoneX(model.skeleton.bones[20], 0, 0.9, counter, 0.1);
                    // rotateBoneX(model.skeleton.bones[21], 0, 0.9, counter, 0.1);

                    var x1 = startingPoint;
                    
                    var move = setInterval(function() {
                        var pos = Math.sin(x1) * 2;

                        console.log(x1 + " <- x1");
                        console.log(pos + " <- pos")
                        
                        // if (pos > 0.9) {
                        //     clearInterval(move);
                        // }
                        //console.log(model.skeleton.bones[19].rotation.x + " model skeleton rot x");
                        if (x1 <= pos) {
                            if (pos > endPoint) {
                                clearInterval(move);
                            }
                            console.log("if nr 1")
                            model.skeleton.bones[19].rotation.x = pos;
                            model.skeleton.bones[20].rotation.x = pos;
                            model.skeleton.bones[21].rotation.x = pos;
                            
                        }

                        else if (x1 > pos) {
                            if (pos < endPoint) {
                                clearInterval(move);
                            }
                            console.log("if nr 2")
                            model.skeleton.bones[19].rotation.x = pos;
                            model.skeleton.bones[20].rotation.x = pos;
                            model.skeleton.bones[21].rotation.x = pos;
                            
                        }
                        
                        x1 += 0.01;
                        console.log(pos + " POS")

                    }, 20);
                }

            }

            letterPress( '81', model.skeleton.bones[19].rotation.x, 0.9);

            letterPress( '87', model.skeleton.bones[19].rotation.x, 0.3);


            //A
            if (e.keyCode == '65') {
                console.log("A");

               // letterA();

                model.skeleton.bones[14].rotation.x = 1.2;
                model.skeleton.bones[15].rotation.x = 1.5;
                model.skeleton.bones[16].rotation.x = 0.3;

                model.skeleton.bones[14].rotation.y = -0.2;
                model.skeleton.bones[15].rotation.y = -0.2;
                model.skeleton.bones[16].rotation.y = -0.1;

                model.skeleton.bones[14].rotation.z = 0.5;
                model.skeleton.bones[15].rotation.z = 0.3;
                model.skeleton.bones[16].rotation.z = 0.1;


                //BAUGFINGUR

                model.skeleton.bones[9].rotation.x = 1.2;
                model.skeleton.bones[10].rotation.x = 1.9;
                model.skeleton.bones[11].rotation.x = 0.4;

                model.skeleton.bones[9].rotation.y = -0.3;
                model.skeleton.bones[10].rotation.y = 0.1;
                model.skeleton.bones[11].rotation.y = 0;

                model.skeleton.bones[9].rotation.z = 0.1;
                model.skeleton.bones[10].rotation.z = 0;
                model.skeleton.bones[11].rotation.z = 0;


                //FU

                model.skeleton.bones[4].rotation.x = 1.2;
                model.skeleton.bones[5].rotation.x = 1.9;
                model.skeleton.bones[6].rotation.x = 0.7;

                model.skeleton.bones[4].rotation.y = 0;
                model.skeleton.bones[5].rotation.y = 0;
                model.skeleton.bones[6].rotation.y = 0;

                model.skeleton.bones[4].rotation.z = 0;
                model.skeleton.bones[5].rotation.z = 0;
                model.skeleton.bones[6].rotation.z = 0;




                //VISIFINGUR

                model.skeleton.bones[19].rotation.x = 1.3;
                model.skeleton.bones[20].rotation.x = 1.8;
                model.skeleton.bones[21].rotation.x = 0.5;

                model.skeleton.bones[19].rotation.y = 0.2;
                model.skeleton.bones[20].rotation.y = 0.3;
                model.skeleton.bones[21].rotation.y = 0;

                model.skeleton.bones[19].rotation.z = -0.3;
                model.skeleton.bones[20].rotation.z = 0;
                model.skeleton.bones[21].rotation.z = 0;

                //ULNLIÐUR

                model.skeleton.bones[1].rotation.x = 0;
                model.skeleton.bones[1].rotation.y = 0;
                model.skeleton.bones[1].rotation.z = 0;

                //ANNAÐ

                model.skeleton.bones[7].rotation.z = 0;
                model.skeleton.bones[12].rotation.z = 0;
                model.skeleton.bones[17].rotation.z = 0;

                var x1 = model.skeleton.bones[19].rotation.x;
                console.log(x1 + " <- x1");

            }

            //B
            else if (e.keyCode == '66') {
                console.log("B");

                 //LITLIPUTTI

                model.skeleton.bones[14].rotation.x = 0;
                model.skeleton.bones[15].rotation.x = 0;
                model.skeleton.bones[16].rotation.x = 0;

                model.skeleton.bones[14].rotation.y = 0;
                model.skeleton.bones[15].rotation.y = 0;
                model.skeleton.bones[16].rotation.y = 0;

                model.skeleton.bones[14].rotation.z = 0.3;
                model.skeleton.bones[15].rotation.z = 0;
                model.skeleton.bones[16].rotation.z = 0;


                //BAUGFINGUR

                model.skeleton.bones[9].rotation.x = 0;
                model.skeleton.bones[10].rotation.x = 0;
                model.skeleton.bones[11].rotation.x = 0;

                model.skeleton.bones[9].rotation.y = 0;
                model.skeleton.bones[10].rotation.y = 0;
                model.skeleton.bones[11].rotation.y = 0;

                model.skeleton.bones[9].rotation.z = 0.1;
                model.skeleton.bones[10].rotation.z = 0;
                model.skeleton.bones[11].rotation.z = 0;


                //FU

                model.skeleton.bones[4].rotation.x = 0;
                model.skeleton.bones[5].rotation.x = 0;
                model.skeleton.bones[6].rotation.x = 0;

                model.skeleton.bones[4].rotation.y = 0;
                model.skeleton.bones[5].rotation.y = 0;
                model.skeleton.bones[6].rotation.y = 0;

                model.skeleton.bones[4].rotation.z = 0;
                model.skeleton.bones[5].rotation.z = 0;
                model.skeleton.bones[6].rotation.z = 0;




                //VISIFINGUR

                model.skeleton.bones[19].rotation.x = 0;
                model.skeleton.bones[20].rotation.x = 0;
                model.skeleton.bones[21].rotation.x = 0;

                model.skeleton.bones[19].rotation.y = 0;
                model.skeleton.bones[20].rotation.y = 0;
                model.skeleton.bones[21].rotation.y = 0;

                model.skeleton.bones[19].rotation.z = -0.1;
                model.skeleton.bones[20].rotation.z = 0;
                model.skeleton.bones[21].rotation.z = 0;




                //THUMB

                model.skeleton.bones[23].rotation.x = 0;
                model.skeleton.bones[24].rotation.x = 0;
                model.skeleton.bones[25].rotation.x = 0;

                model.skeleton.bones[23].rotation.y = 0.3;
                model.skeleton.bones[24].rotation.y = 0;
                model.skeleton.bones[25].rotation.y = 0;

                model.skeleton.bones[23].rotation.z = -0.3;
                model.skeleton.bones[24].rotation.z = -0.3;
                model.skeleton.bones[25].rotation.z = 0.5;


                //ULNLIÐUR

                model.skeleton.bones[1].rotation.x = 0;
                model.skeleton.bones[1].rotation.y = 0;
                model.skeleton.bones[1].rotation.z = 0;

                //ANNAÐ

                model.skeleton.bones[7].rotation.z = 0.03;
                model.skeleton.bones[12].rotation.z = 0.09;
                model.skeleton.bones[17].rotation.z = -0.07;

                var x1 = model.skeleton.bones[19].rotation.x;
                console.log(x1 + " <- x1");

            }


            //C
            else if (e.keyCode == '67') {
                console.log("c");

                model.skeleton.bones[14].rotation.x = 1.2;
                model.skeleton.bones[15].rotation.x = 1.5;
                model.skeleton.bones[16].rotation.x = 0.3;

                model.skeleton.bones[14].rotation.y = -0.2;
                model.skeleton.bones[15].rotation.y = -0.2;
                model.skeleton.bones[16].rotation.y = -0.1;

                model.skeleton.bones[14].rotation.z = 0.5;
                model.skeleton.bones[15].rotation.z = 0.3;
                model.skeleton.bones[16].rotation.z = 0.1;


                //BAUGFINGUR

                model.skeleton.bones[9].rotation.x = 1.2;
                model.skeleton.bones[10].rotation.x = 1.8;
                model.skeleton.bones[11].rotation.x = 0.7;

                model.skeleton.bones[9].rotation.y = -0.3;
                model.skeleton.bones[10].rotation.y = -0.1;
                model.skeleton.bones[11].rotation.y = -0.1;

                model.skeleton.bones[9].rotation.z = 0.1;
                model.skeleton.bones[10].rotation.z = 0;
                model.skeleton.bones[11].rotation.z = 0;


                //FU

                model.skeleton.bones[4].rotation.x = 1;
                model.skeleton.bones[5].rotation.x = 1.9;
                model.skeleton.bones[6].rotation.x = 0.9;

                model.skeleton.bones[4].rotation.y = 0;
                model.skeleton.bones[5].rotation.y = 0;
                model.skeleton.bones[6].rotation.y = 0;

                model.skeleton.bones[4].rotation.z = 0;
                model.skeleton.bones[5].rotation.z = 0;
                model.skeleton.bones[6].rotation.z = 0;




                //VISIFINGUR

                model.skeleton.bones[19].rotation.x = 0.3;
                model.skeleton.bones[20].rotation.x = 1.0;
                model.skeleton.bones[21].rotation.x = 0.6;

                model.skeleton.bones[19].rotation.y = -0.1;
                model.skeleton.bones[20].rotation.y = 0;
                model.skeleton.bones[21].rotation.y = 0;

                model.skeleton.bones[19].rotation.z = 0;
                model.skeleton.bones[20].rotation.z = 0;
                model.skeleton.bones[21].rotation.z = 0;




                //THUMB

                model.skeleton.bones[23].rotation.x = 0.1;
                model.skeleton.bones[24].rotation.x = 0;
                model.skeleton.bones[25].rotation.x = 0;

                model.skeleton.bones[23].rotation.y = 0.9;
                model.skeleton.bones[24].rotation.y = 0;
                model.skeleton.bones[25].rotation.y = 0;

                model.skeleton.bones[23].rotation.z = 0;
                model.skeleton.bones[24].rotation.z = -0.1;
                model.skeleton.bones[25].rotation.z = -0.5;


                //ULNLIÐUR

                model.skeleton.bones[1].rotation.x = 0;
                model.skeleton.bones[1].rotation.y = 0;
                model.skeleton.bones[1].rotation.z = 0;


                //ANNAÐ

                model.skeleton.bones[7].rotation.z = 0;
                model.skeleton.bones[12].rotation.z = 0;
                model.skeleton.bones[17].rotation.z = 0;

                var x1 = model.skeleton.bones[19].rotation.x;
                console.log(x1 + " <- x1");
           

            }

            //SPACE
            else if (e.keyCode == '32') {
                console.log("space");

                model.skeleton.bones[14].rotation.x = 0;
                model.skeleton.bones[15].rotation.x = 0;
                model.skeleton.bones[16].rotation.x = 0;

                model.skeleton.bones[14].rotation.y = 0;
                model.skeleton.bones[15].rotation.y = 0;
                model.skeleton.bones[16].rotation.y = 0;

                model.skeleton.bones[14].rotation.z = 0;
                model.skeleton.bones[15].rotation.z = 0;
                model.skeleton.bones[16].rotation.z = 0;


                //BAUGFINGUR

                model.skeleton.bones[9].rotation.x = 0;
                model.skeleton.bones[10].rotation.x = 0;
                model.skeleton.bones[11].rotation.x = 0;

                model.skeleton.bones[9].rotation.y = 0;
                model.skeleton.bones[10].rotation.y = 0;
                model.skeleton.bones[11].rotation.y = 0;

                model.skeleton.bones[9].rotation.z = 0;
                model.skeleton.bones[10].rotation.z = 0;
                model.skeleton.bones[11].rotation.z = 0;


                //FU

                model.skeleton.bones[4].rotation.x = 0;
                model.skeleton.bones[5].rotation.x = 0;
                model.skeleton.bones[6].rotation.x = 0;

                model.skeleton.bones[4].rotation.y = 0;
                model.skeleton.bones[5].rotation.y = 0;
                model.skeleton.bones[6].rotation.y = 0;

                model.skeleton.bones[4].rotation.z = 0;
                model.skeleton.bones[5].rotation.z = 0;
                model.skeleton.bones[6].rotation.z = 0;




                //VISIFINGUR

                model.skeleton.bones[19].rotation.x = 0;
                model.skeleton.bones[20].rotation.x = 0;
                model.skeleton.bones[21].rotation.x = 0;

                model.skeleton.bones[19].rotation.y = 0;
                model.skeleton.bones[20].rotation.y = 0;
                model.skeleton.bones[21].rotation.y = 0;

                model.skeleton.bones[19].rotation.z = 0;
                model.skeleton.bones[20].rotation.z = 0;
                model.skeleton.bones[21].rotation.z = 0;




                //THUMB

                model.skeleton.bones[23].rotation.x = 0;
                model.skeleton.bones[24].rotation.x = 0;
                model.skeleton.bones[25].rotation.x = 0;

                model.skeleton.bones[23].rotation.y = 0;
                model.skeleton.bones[24].rotation.y = 0;
                model.skeleton.bones[25].rotation.y = 0;

                model.skeleton.bones[23].rotation.z = 0;
                model.skeleton.bones[24].rotation.z = 0;
                model.skeleton.bones[25].rotation.z = 0;


                //ULNLIÐUR

                model.skeleton.bones[1].rotation.x = 0;
                model.skeleton.bones[1].rotation.y = 0;
                model.skeleton.bones[1].rotation.z = 0;


                //ANNAÐ

                model.skeleton.bones[7].rotation.z = 0;
                model.skeleton.bones[12].rotation.z = 0;
                model.skeleton.bones[17].rotation.z = 0;

           

            }



            render();

        }
        
    }

    // Update whatever changed in this iteration:
    // object angles, camera movement, controls 
    // positioning, screen size, etc.
    function update(timeDelta) {
        camera.updateProjectionMatrix();
        controls.update(timeDelta);
    }

    // Make things move a bit in this iteration
    function render() {
        renderer.render(scene, camera);
    }

    // Keep the loop happening (60fps)
    function animate(t) {
        requestAnimationFrame(animate);
        update(clock.getDelta());
        render();
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

    
}       





//document.onkeydown = checkKey;

// function checkKey(e) {

//             e = e || window.event;

//             if (e.keyCode == '65') {
//                 console.log("A");





//                 //LITLIPUTTI

//                 model.skeleton.bones[14].rotation.x = 1.2;
//                 model.skeleton.bones[15].rotation.x = 1.5;
//                 model.skeleton.bones[16].rotation.x = 0.3;

//                 model.skeleton.bones[14].rotation.y = -0.2;
//                 model.skeleton.bones[15].rotation.y = -0.2;
//                 model.skeleton.bones[16].rotation.y = -0.1;

//                 model.skeleton.bones[14].rotation.z = 0.5;
//                 model.skeleton.bones[15].rotation.z = 0.3;
//                 model.skeleton.bones[16].rotation.z = 0.1;


//                 //BAUGFINGUR

//                 model.skeleton.bones[9].rotation.x = 1.2;
//                 model.skeleton.bones[10].rotation.x = 1.9;
//                 model.skeleton.bones[11].rotation.x = 0.4;

//                 model.skeleton.bones[9].rotation.y = -0.3;
//                 model.skeleton.bones[10].rotation.y = 0.1;
//                 model.skeleton.bones[11].rotation.y = 0;

//                 model.skeleton.bones[9].rotation.z = 0.1;
//                 model.skeleton.bones[10].rotation.z = 0;
//                 model.skeleton.bones[11].rotation.z = 0;


//                 //FU

//                 model.skeleton.bones[4].rotation.x = 1.2;
//                 model.skeleton.bones[5].rotation.x = 1.9;
//                 model.skeleton.bones[6].rotation.x = 0.7;

//                 model.skeleton.bones[4].rotation.y = 0;
//                 model.skeleton.bones[5].rotation.y = 0;
//                 model.skeleton.bones[6].rotation.y = 0;

//                 model.skeleton.bones[4].rotation.z = 0;
//                 model.skeleton.bones[5].rotation.z = 0;
//                 model.skeleton.bones[6].rotation.z = 0;




//                 //VISIFINGUR

//                 model.skeleton.bones[19].rotation.x = 1.3;
//                 model.skeleton.bones[20].rotation.x = 1.8;
//                 model.skeleton.bones[21].rotation.x = 0.5;

//                 model.skeleton.bones[19].rotation.y = 0.2;
//                 model.skeleton.bones[20].rotation.y = 0.3;
//                 model.skeleton.bones[21].rotation.y = 0;

//                 model.skeleton.bones[19].rotation.z = -0.3;
//                 model.skeleton.bones[20].rotation.z = 0;
//                 model.skeleton.bones[21].rotation.z = 0;




//                 //THUMB

//                 model.skeleton.bones[23].rotation.x = 0;
//                 model.skeleton.bones[24].rotation.x = 0.1;
//                 model.skeleton.bones[25].rotation.x = 0;

//                 model.skeleton.bones[23].rotation.y = 1;
//                 model.skeleton.bones[24].rotation.y = 0;
//                 model.skeleton.bones[25].rotation.y = 0;

//                 model.skeleton.bones[23].rotation.z = -0.4;
//                 model.skeleton.bones[24].rotation.z = 0;
//                 model.skeleton.bones[25].rotation.z = 0;


//                 //ULNLIÐUR

//                 model.skeleton.bones[1].rotation.x = 0;
//                 model.skeleton.bones[1].rotation.y = 0;
//                 model.skeleton.bones[1].rotation.z = 0;

//             }
            
//             render();