	// SVG variables
		const rowAN = $('.letters-row-an')
			rowOO = $('.letters-row-oo')
			row110 = $('.letters-row-110')

			palmFill1 = $('.letters-row-an .palm ')
			palmFill2 = $('.letters-row-oo .palm ')
			palmFill3 = $('.letters-row-110 .palm ')
			
			letterfill1 = $('.letters-row-an #letter-outline')
			letterfill2 = $('.letters-row-oo #letter-outline')
			letterfill3 = $('.letters-row-110 #letter-outline')
			
			palmOutline1 = $('.letters-row-an #Shape')
			palmOutline2 = $('.letters-row-oo #Shape')
			palmOutline3 = $('.letters-row-110 #Shape')
			
			btnAN = $('.btn-a-n')
			btnOO = $('.btn-o-o')
			btnOne = $('.btn-1-10'),
	

	// Alphabet SVG Timelines
		tlsvg1 = new TimelineMax({paused: true});
		tlsvg2 = new TimelineMax({paused: true});
		tlsvg3 = new TimelineMax({paused: true});





	// SVG alphabet filter buttons
	$(btnAN).on('click',()=>{
		tlsvg2.reverse();
		tlsvg3.reverse();
		tlsvg.play();
	});
	$(btnOO).on('click',()=>{
		tlsvg.reverse();
		tlsvg3.reverse();
		tlsvg2.play();
	});
	$(btnOne).on('click',()=>{
		tlsvg2.reverse();
		tlsvg.reverse();
		tlsvg3.play();
	});



	
var FirstAlphabetCol =  rowOO,
						letterfill2,
						palmOutline2,
						palmFill2;


class SvgAnimation {
	constructor(btnSvg, tlSvg, row, letterFill, palmOutline, palmFill ){ // parameters
	this.btnSvg = btnSvg;
	this.tlSvg = tlSvg;
	this.row = row;
	this.letterFill = letterFill;
	this.palmOutline = palmOutline;
	// this.letterfill = letterfill;
	this.palmFill = palmFill;
}
svgAnimate(){
	 $(this.btnSvg).on('click',()=>{
                this.tlsvg
                .to(this.row, 0.4, {autoAlpha:0,  ease:Power4.easeIn})
                .to(this.row, .4, {zIndex:100,  ease:Power4.easeIn})
                .to(this.row, .4, {autoAlpha:1,  ease:Power4.easeIn})
                .to(this.letterfill, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
                .to(this.palmOutline, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
                .to(this.letterfill, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
                .to(this.letterfill, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
                .to(this.palmFill, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )
});
}

svgPlayTl() {
                tlsvg.play();
}
svgReverseTl() {
                tlsvg2.reverse();
                tlsvg3.reverse();
}

}
// class SvgTl1 extends SvgAnimation {
//         constructor(btnSvg, tlSvg, row, letterFill, palmOutline, palmFill ){ 

//         }
// }

const animateFirstSvg = new SvgAnimation(btnAN, rowOO, letterfill2, palmOutline2, palmFill2);
// animateFirstSvg.svgEventListeners();
animateFirstSvg.svgAnimate();




// btnLoop = $('#btn-loop ')
// 		loopStroke= $('.path-loop-stroke')
// 		loopFill= $('.path-loop-fill')
// 		isLooping = $('.ball')

// 		btnPause = $('#btn-pause ')
// 		playFill= $('.path-play')

// 		btnWord = $('#btn-word ')
// 		wordFill= $('.path-word')




// var tl = new TimelineLite({paused:true});
// tl.to('.sidebar, .main', 1,  {x:-231, ease:Power2.easeIn});
    
// $('.home').on('click', function(event) {
//     event.preventDefault();
//     tl.reversed() ? tl.play() : tl.reverse();
// });






// background: -webkit-linear-gradient($DarkGrey, $black);
//  // GOLD use HAND_S2.jpg with black background
// var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xffc300, emissive: 0x0000000, roughness: 0.5, metalness: 0.5 } );


// // background: -webkit-linear-gradient($Mustard, $DarkMustard); /* For Sa
//  // PURPLE use HAND_S2 with Mustard background
// //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xb358bf, emissive: 0x3a0d40, roughness: 0.5, metalness: 0.7 } );


// // background: -webkit-linear-gradient($LightSinbad, $Sinbad); /* For Safari 5.1 to 6.0 */
//  // PINK use HAND_S2 with Sinbad background color
//             //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xffc2dc, emissive: 0x7c004f, roughness: 0.6, metalness: 0.6 } );
    
// const $white = '#fff';
// const $black = '#000';

// const $Sinbad = '#AFDBD1';
// const $LightSinbad = '#D7EDE8';

// const $White = '#FFFFFF';
// const $Black = '#000';


// const $LightGrey = '#d8d8d8';
// const $DarkGrey = '#383838';
// const $Grey = '#7f7f7f';


// const $Mustard = '#F5D04C';
// const $DarkMustard = '#FFB000';
// const $mustardDark = '#FFB000';




// const blackGrad = ($DarkGrey, $Black);
// const mustardGrad = ($Mustard, $mustardDark);
// const sinbadGrad = ($LightSinbad, $Sinbad);


// const gradientArray = [blackGrad, mustardGrad, sinbadGrad]


// var rainbow_array = Array ("e21111", "11e2c2", "a011e2");


// var colorArray = {['red', 'green', 'blue', 'orange', 'yellow']};


// myDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];








// class SvgAnimation {
//         constructor(btnSvg, tlSvg, row, letterFill, palmOutline, palmFill ){ // parameters
//         this.btnSvg = btnSvg;
//         this.tlSvg = new TimelineMax();;
//         this.row = row;
//         this.letterFill = letterFill;
//         this.palmOutline = palmOutline;
//         // this.letterfill = letterfill;
//         this.palmFill = palmFill;
// }

// svgAnimate(){
// 	$(this.btnSvg).on('click',()=>{
//                 this.tlSvg
//                 .to(this.row, 0.4, {autoAlpha:0,  ease:Power4.easeIn})
//                 .to(this.row, .4, {zIndex:100,  ease:Power4.easeIn})
//                 .to(this.row, .4, {autoAlpha:1,  ease:Power4.easeIn})
//                 .to(this.letterfill, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
//                 .to(this.palmOutline, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
//                 // .to(this.letterfill, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
//                 .to(this.letterfill, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
//                 .to(this.palmFill, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )
//             });
// }
// svgPlayTl() {
// 	$(this.btnSvg).on('click',()=>{
//                 this.tlSvg.play();
//            });
// }
// }
// svgPlayTl() {
// 	$(this.btnSvg).on('click',()=>{
//                 this.tlSvg.play();
//            });
// }

// svgReverseTl() {
//                 tlsvg2.reverse();
//                 tlsvg3.reverse();
// }





// const animateFirstSvg = new SvgAnimation(btnAN, tlsvg1, rowAN, letterfill1, palmOutline1, palmFill1);
// animateFirstSvg.svgAnimate();
// // animateFirstSvg.svgPlayTl();


// const animateSecondSvg = new SvgAnimation(btnOO,tlsvg2, rowOO, letterfill2, palmOutline2, palmFill2);
// animateSecondSvg.svgPlayTl();
// animateSecondSvg.svgAnimate();

// const animateThirdSvg = new SvgAnimation(btnOne, tlsvg3, row110, letterfill3, palmOutline3, palmFill3);
// animateThirdSvg.svgPlayTl();
// animateThirdSvg.svgAnimate();







