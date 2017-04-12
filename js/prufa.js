
			
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			var SCREEN_WIDTH = window.innerWidth;
			var SCREEN_HEIGHT = window.innerHeight;
			var container, stats;
			var camera, scene, renderer;
			var mixers = [];
			var clock = new THREE.Clock();
			init();
			animate();
			function init() {
				container = document.createElement( 'div' );
				document.body.appendChild( container );
				var info = document.createElement( 'div' );
				info.style.position = 'absolute';
				info.style.top = '10px';
				info.style.width = '100%';
				info.style.textAlign = 'center';
				info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> webgl - morph normals - model by <a href="http://mirada.com/">mirada</a> from <a href="http://ro.me">rome</a>';
				container.appendChild( info );
				//
				camera = new THREE.PerspectiveCamera( 40, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
				camera.position.y = 300;
				camera.target = new THREE.Vector3( 0, 150, 0 );
				scene = new THREE.Scene();
				//
				scene.add( new THREE.HemisphereLight( 0x443333, 0x222233 ) );
				var light = new THREE.DirectionalLight( 0xffffff, 1 );
				light.position.set( 1, 1, 1 );
				scene.add( light );
				//
				var loader = new THREE.JSONLoader();
				loader.load( "hand3.js", function( geometry ) {
					var material = new THREE.MeshPhongMaterial( {
						color: 0xffffff,
						morphTargets: true,
						vertexColors: THREE.FaceColors,
						shading: THREE.FlatShading
					} );
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = - 150;
					mesh.position.y = 150;
					mesh.scale.set( 1.5, 1.5, 1.5 );
					scene.add( mesh );
					var mixer = new THREE.AnimationMixer( mesh );
					mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();
					mixers.push( mixer );
				} );
				loader.load( "hand3.js", function( geometry ) {
					geometry.computeVertexNormals();
					geometry.computeMorphNormals();
					var material = new THREE.MeshPhongMaterial( {
						color: 0xffffff,
						morphTargets: true,
						morphNormals: true,
						vertexColors: THREE.FaceColors,
						shading: THREE.SmoothShading
					} );
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = 150;
					mesh.position.y = 150;
					mesh.scale.set( 1.5, 1.5, 1.5 );
					scene.add( mesh );
					var mixer = new THREE.AnimationMixer( mesh );
					mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();
					mixers.push( mixer );
				} );
				//
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				container.appendChild( renderer.domElement );
				//
				stats = new Stats();
				container.appendChild( stats.dom );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}
			//
			function onWindowResize( event ) {
				SCREEN_WIDTH = window.innerWidth;
				SCREEN_HEIGHT = window.innerHeight;
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				camera.aspect = 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT;
				camera.updateProjectionMatrix();
			}
			//
			function animate() {
				requestAnimationFrame( animate );
				render();
				stats.update();
			}
			var radius = 600;
			var theta = 0;
			function render() {
				theta += 0.1;
				camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
				camera.lookAt( camera.target );
				var delta = clock.getDelta();
				for ( var i = 0; i < mixers.length; i ++ ) {
					mixers[ i ].update( delta );
				}
				renderer.clear();
				renderer.render( scene, camera );
			}