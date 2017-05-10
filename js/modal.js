(($)=> {

		// Get the modal
		const modal = document.getElementById('shareHand');

		// Get the button that opens the modal
		const btn = document.getElementById("btn-share");

		// Get the <span> element that closes the modal
		const span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		btn.onclick = ()=> {
			TweenMax.to(modal, .35, {opacity:'0%', ease:Power1.easeInOut})
			TweenMax.to(modal, .8, {opacity:'100%', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {display:'flex', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {autoAlpha:1, ease:Power1.easeInOut})
		}

		// // When the user clicks on <span> (x), close the modal
		// span.onclick = ()=> {
		// 	TweenMax.to(modal, .35, {opacity:'0', ease:Power1.easeInOut})
		// 	TweenMax.to(modal, .35, {display:'none', ease:Power1.easeInOut})
		// 	TweenMax.to(modal, .35, {autoAlpha:0, ease:Power1.easeInOut})
		// }

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = (event)=> {
		    if (event.target == modal) {
		  	TweenMax.to(modal, .35, {opacity:'0', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {display:'none', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {autoAlpha:0, ease:Power1.easeInOut})
		    }
		};



const pink = document.getElementsByClassName("pick-pink")
	green = document.getElementsByClassName("pick-green")
	yellow = document.getElementsByClassName("pick-yellow")
	orange = document.getElementsByClassName("pick-orange")
	blue = document.getElementsByClassName("pick-blue")
	
	gifBg = document.getElementsByClassName("hand-gif"),
	modalContBg = document.getElementsByClassName("modal-content");






class ColorChange {
	constructor(button, bgColor, boxColor){ // parameters
	this.button = button;
	this.bgColor = bgColor;
	this.boxColor = boxColor;
	}
addEventListeners(){
	$(this.button).on('click',()=>{
	TweenMax.to(gifBg, .35, {backgroundColor: this.bgColor, ease:Power1.easeInOut})
	TweenMax.to(modalContBg, .35, {backgroundColor: this.boxColor, ease:Power1.easeInOut})	
	});
}
}


const pinkButton = new ColorChange(pink, '#EDC8CD', '#F4DCDF');
pinkButton.addEventListeners();

const greenButton = new ColorChange(green, '#AFDBD1', '#D7EDE8');
greenButton.addEventListeners();

const yellowButton = new ColorChange(yellow, '#FAFD7B', '#FDFFB8');
yellowButton.addEventListeners();

const orangeButton = new ColorChange(orange, '#FFB000', '#F5D04C');
orangeButton.addEventListeners();

const blueButton = new ColorChange(blue, '#7BCFFD', '#BEE7FE');
blueButton.addEventListeners();



})(jQuery);









