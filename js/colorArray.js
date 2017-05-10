
const $white = '#fff';
const $black = '#000';

const $Sinbad = '#AFDBD1';
const $LightSinbad = '#D7EDE8';
const $SinbadHand = '0xffc2dc';
const $SinbadEmissive = '0x7c004f';

const $White = '#FFFFFF';


const $GoldHand = '0xffc300';
const $GoldEmissive = '0x110b00';
const $DarkGrey = '#383838';
const $Grey = '#7f7f7f';
const $Black = '#000';

const $Mustard = '#F5D04C';
const $DarkMustard = '#FFB000';
const $MustardDark = '#FFB000';
const $PurpleHand = '0xb358bf';
const $PurpleEmissive = '0x3a0d40';

const background = '#background';

    // background: $black; /* For browsers that do not support gradients */
    // background: -webkit-linear-gradient($DarkGrey, $black); /* For Safari 5.1 to 6.0 */
    // background: -o-linear-gradient($DarkGrey, $black); /* For Opera 11.1 to 12.0 */
    // background: -moz-linear-gradient($DarkGrey, $black); /* For Firefox 3.6 to 15 */
    // background: linear-gradient($DarkGrey, $black); /* Standard syntax */


// $('.post-content').each(function() {
//     $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
// });


  // MODEL LITIR NOTA

            // GOLD use HAND_S2.jpg with black background
            // var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xffc300, emissive: 0x110b00, roughness: 0.5, metalness: 0.5 } );
            
            // PINK use HAND_S2 with Sinbad background color
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xffc2dc, emissive: 0x7c004f, roughness: 0.6, metalness: 0.6 } );
            
            // PURPLE use HAND_S2 with Mustard background
            //var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: 0xb358bf, emissive: 0x3a0d40, roughness: 0.5, metalness: 0.7 } );




class ColorArray{
	constructor(darkGrad, lightGrad, handColor, handEmissive,primCol ){
		this.darkGrad = darkGrad;
		this.lightGrad = lightGrad;
		this.handColor = handColor;
		this.primCol = primCol;
		this.tlbgCol = new TimelineMax();
	}
	// ColorHand() {
	// 	var material = new THREE.MeshStandardMaterial( {skinning: true, map: texture, color: this.handColor, emissive: 0x110b00, roughness: 0.5, metalness: 0.5 } );
	// }
	BackgroundGrad() {
		this.tlbgCol
		.to(background, 1, {colorProps:{backgroundColor: this.lightGrad},ease:Linear.easeNone});
	 //    background: $black; /* For browsers that do not support gradients */
		// background: -webkit-linear-gradient(this.darkGrad, this.lightGrad); /* For Safari 5.1 to 6.0 */
		// background: -o-linear-gradient(this.darkGrad, this.lightGrad); /* For Opera 11.1 to 12.0 */
		// background: -moz-linear-gradient(this.darkGrad, this.lightGrad); /* For Firefox 3.6 to 15 */
		// background: linear-gradient(this.darkGrad, this.lightGrad); /* Standard syntax */
	}
}         


const colorWheel1 = new ColorArray($MustardDark, $Mustard, $PurpleHand, $PurpleEmissive, $Mustard );
colorWheel1.BackgroundGrad();
colorWheel1.BgPlayTl();


// const colorWheel2 = new ColorArray($Sinbad, $LightSinbad, $SinbadHand,$SinbadEmissive, $Sinbad );
// colorWheel2.BackgroundGrad();


// const colorWheel3 = new ColorArray($Black, $DarkGrey, $GoldHand,$GoldEmissive, $Mustard );
// colorWheel3.BackgroundGrad();


// //activate ColorPropsPlugin
// TweenPlugin.activate([ColorPropsPlugin]);

// //object to store color values
// var myObject = {color0:'#ffffff', color1:'#000000'};

// var target = document.getElementById('box');

// //tween the color values in myObject
// TweenMax.to(myObject, 2, {colorProps:{color0:'#000000', color1:'#ffffff'}, repeat:10, yoyo:true, ease:Linear.easeNone, onUpdate:applyProps});

//apply new color values to gradient css of target
// function applyProps(){
//   target.style.backgroundImage = '-webkit-gradient(linear, left top, left bottom, color-stop(0.00,' + myObject.color0 + '), color-stop(1.0,' + myObject.color1 + '))';

//    //feel free to target other browser vendors 
//    }​










