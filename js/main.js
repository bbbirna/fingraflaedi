

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
        scene.background = new THREE.Color(0xffeeee);
        
        // Create camera and position it in space
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 10000);
        camera.position.set(0, 0, 0.2);
        scene.add(camera);
        
        // Allows navigating the scene via mouse
        controls = new THREE.OrbitControls(camera, element);
        
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
        loader.load( 'hand3.json', function( geometry, materials ) {
            // console.log(geometry, materials)
            var material = new THREE.MeshBasicMaterial( {skinning: true, map: texture} );
            model = new THREE.SkinnedMesh( geometry, material );
            model.scale.set(1,1,1);
            for(var i = 0; i < model.skeleton.bones.length; i++) {
                console.log(model.skeleton.bones[i]);
                bones[model.skeleton.bones[i].name] = model.skeleton.bones[i];

            }
            scene.add( model );

            // model.rotation.x = -5;
            // model.rotation.y = 4.7;
            // model.rotation.z = -1.5;

            //fuputti
            //model.skeleton.bones[3].rotation.y = -0.01;

            //baugfingur
            //model.skeleton.bones[7].rotation.y = 0;
            //model.skeleton.bones[7].rotation.x = 0.2;

            //litliputti
            //model.skeleton.bones[13].rotation.x = 0;
            //model.skeleton.bones[15].rotation.x = 0.5;
            //model.skeleton.bones[13].rotation.z = 0;
            //model.skeleton.bones[13].rotation.y = 0;


            //visifingur
            // model.skeleton.bones[19].rotation.y = 0.1;

           
        } );

        // // Add the cube
        // var loader = new THREE.JSONLoader();
        // var model;
        // loader.load( 'hand.json', function( geometry ) {
        //     console.log(geometry)
        //     model = new THREE.SkinnedMesh( geometry );
        //     model.scale.set(1,1,1);
        //     scene.add( model );
        // } );
                
        // Adjust everything in case there is a window resize
        window.addEventListener('resize', handleResize);
        // Set up these adjustments for the first time right away
        setTimeout(handleResize, 1);

        var counter = 0;
    var max = 1.4;
    var min = 0;


    function rotateChild( bone, rotation ) {
        //console.log(bone.name);
        if(rotation < min) rotation = max;
        if(rotation > max) rotation = min;
        bone.rotation.x = rotation;
        for(var i = 0; i < bone.children.length; i++) {
            rotateChild(bone.children[i], rotation);
        }
    }

    function rotateChild2( bone, rotation ) {
        //console.log(bone.name);
        if(rotation < min) rotation = max;
        if(rotation > max) rotation = min;
        bone.rotation.y = rotation*0.5;
        for(var i = 0; i < bone.children.length; i++) {
            rotateChild2(bone.children[i], rotation*0.1);
        }
    }


    var reverse = false;
    function render() {
        requestAnimationFrame( render );
        if(reverse) {
            counter -= 0.01;
            if(counter < min) {
                counter = min;
                reverse = false;
            }
        } else {
            counter += 0.01;
            if(counter > max) {
                counter = max;
                reverse = true;
            }
        }
        //console.log(counter);


        rotateChild(bones["finger_pinky.01.L"], counter);
        // rotateChild(bones["finger_index.01.L"], counter);
        // rotateChild(bones["finger_ring.01.L"], counter);
        // rotateChild(bones["finger_middle.01.L"], counter);
        // rotateChild(bones["thumb.01.L"], counter);
        // rotateChild(bones["thumb.03.L"], counter);

        //fuputti
        //model.skeleton.bones[3].rotation.x = counter * 0.1;
        //model.skeleton.bones[4].rotation.x = counter * 3.1;

        //baugfingur
        // model.skeleton.bones[7].rotation.x = counter * 0.1;
        // model.skeleton.bones[8].rotation.x = counter * 0.1;
        // model.skeleton.bones[9].rotation.x = counter * 0.1;
        // // model.skeleton.bones[10].rotation.x = counter * 0.1;
        // // model.skeleton.bones[11].rotation.x = counter * 0.1;
        // model.skeleton.bones[10].rotation.x = counter * 0.1;

        //litliputti
        // // model.skeleton.bones[12].rotation.x = counter * 0.3;
        // model.skeleton.bones[13].rotation.x = counter * 0.2;
        // model.skeleton.bones[14].rotation.x = counter * 0.2;
        // model.skeleton.bones[15].rotation.x = counter * 0.2;
        // model.skeleton.bones[16].rotation.x = counter * 0.3;


        // model.skeleton.bones[16].rotation.x = counter * 0.4;

        // model.skeleton.bones[0].rotation.x += 0.01;
        
        // model.rotation.z += 0.005;
        // model.rotation.x += 0.01;
        // console.log(model.rotation.x);
        //model.rotation.y += 0.001;
        //model.rotation.y += 0.01;
        // camera.rotation.y += 0.01;
        // camera.martrixAutoUpdate();
        // camera.rotation.y+= 0.01;
        // camera.position.z+= Math.sin(counter);
        // camera.position.x+= Math.sin(counter);

        //LITLIPUTTI

        

        model.skeleton.bones[14].rotation.x = count0;
        model.skeleton.bones[15].rotation.x = count1;
        model.skeleton.bones[16].rotation.x = count2;

        model.skeleton.bones[14].rotation.y = count3;
        model.skeleton.bones[15].rotation.y = count4;
        model.skeleton.bones[16].rotation.y = count5;

        model.skeleton.bones[14].rotation.z = count6;
        model.skeleton.bones[15].rotation.z = count7;
        model.skeleton.bones[16].rotation.z = count8;


        //VISIFINGUR

        model.skeleton.bones[19].rotation.x = count9;
        model.skeleton.bones[20].rotation.x = count10;
        model.skeleton.bones[21].rotation.x = count11;

        model.skeleton.bones[19].rotation.y = count12;
        model.skeleton.bones[20].rotation.y = count13;
        model.skeleton.bones[21].rotation.y = count14;

        model.skeleton.bones[19].rotation.z = count15;
        model.skeleton.bones[20].rotation.z = count16;
        model.skeleton.bones[21].rotation.z = count17;


        //BAUGFINGUR

        model.skeleton.bones[9].rotation.x = count18;
        model.skeleton.bones[10].rotation.x = count19;
        model.skeleton.bones[11].rotation.x = count20;

        model.skeleton.bones[9].rotation.y = count21;
        model.skeleton.bones[10].rotation.y = count22;
        model.skeleton.bones[11].rotation.y = count23;

        model.skeleton.bones[9].rotation.z = count24;
        model.skeleton.bones[10].rotation.z = count25;
        model.skeleton.bones[11].rotation.z = count26;


        //FU

        model.skeleton.bones[4].rotation.x = count27;
        model.skeleton.bones[5].rotation.x = count28;
        model.skeleton.bones[6].rotation.x = count29;

        model.skeleton.bones[4].rotation.y = count30;
        model.skeleton.bones[5].rotation.y = count31;
        model.skeleton.bones[6].rotation.y = count32;

        model.skeleton.bones[4].rotation.z = count33;
        model.skeleton.bones[5].rotation.z = count34;
        model.skeleton.bones[6].rotation.z = count35;


        //THUMB

        model.skeleton.bones[23].rotation.x = count36;
        model.skeleton.bones[24].rotation.x = count37;
        model.skeleton.bones[25].rotation.x = count38;

        model.skeleton.bones[23].rotation.y = count39;
        model.skeleton.bones[24].rotation.y = count40;
        model.skeleton.bones[25].rotation.y = count41;

        model.skeleton.bones[23].rotation.z = count42;
        model.skeleton.bones[24].rotation.z = count43;
        model.skeleton.bones[25].rotation.z = count44;


        //ULNLIÐUR

        model.skeleton.bones[1].rotation.x = count45;
        model.skeleton.bones[1].rotation.y = count46;
        model.skeleton.bones[1].rotation.z = count47;


        // model.skeleton.bones[1].rotation.x = 1; //Ulnliður
        // model.skeleton.bones[2].rotation.x = 1; // langatöng1 (slitnar)
        // model.skeleton.bones[3].rotation.x = 1; // langatöng2 (slitnar)
        // model.skeleton.bones[4].rotation.x = 1; // langatöng kjuka1
        // model.skeleton.bones[5].rotation.x = 1; // langatöng kjuka2
        // model.skeleton.bones[6].rotation.x = 1; // langatöng kjuka3
        // model.skeleton.bones[7].rotation.x = 1; // baugfingur1 (slitnar)
        // model.skeleton.bones[8].rotation.x = 1; // baugfingur2 (slitnar)
        // model.skeleton.bones[9].rotation.x = 1; // baugfingur kjuka1
        // model.skeleton.bones[10].rotation.x = 1; // baugfingur kjuka2
        // model.skeleton.bones[11].rotation.x = 1; // baugfingur kjuka3
        // model.skeleton.bones[12].rotation.x = 1; // litliputti1 (slitnar)
        // model.skeleton.bones[13].rotation.x = 1; // litliputti2 (slitnar)
        // model.skeleton.bones[14].rotation.x = 1; // litliputti kjuka1
        // model.skeleton.bones[15].rotation.x = 1; // litliputti kjuka2
        // model.skeleton.bones[16].rotation.x = 1; // litliputti kjuka3
        // model.skeleton.bones[17].rotation.x = 1; // visifingur1 (slitnar)
        // model.skeleton.bones[18].rotation.x = 1; // visifingur2 (slitnar)
        // model.skeleton.bones[19].rotation.x = 1; // visifingur kjuka1
        // model.skeleton.bones[20].rotation.x = 1; // visifingur kjuka2
        // model.skeleton.bones[21].rotation.x = 1; // visifingur kjuka3
        // model.skeleton.bones[22].rotation.x = 1; // þumall 1 (kemur skrýtið horn)
        // model.skeleton.bones[23].rotation.x = 1; // þumall 2 (kemur skrýtið horn)
        // model.skeleton.bones[24].rotation.x = 1; // þumall kjuka1
        // model.skeleton.bones[25].rotation.x = 1; // þumall kjuka2
        // model.skeleton.bones[26].rotation.x = 1; // veit ekki
     


        renderer.render( scene, camera );

    }
    render();
        
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