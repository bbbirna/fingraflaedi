
		// Get the modal
		var modal = document.getElementById('shareHand');

		// Get the button that opens the modal
		var btn = document.getElementById("btn-share");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		btn.onclick = function() {
			TweenMax.to(modal, .35, {opacity:'0%', ease:Power1.easeInOut})
			TweenMax.to(modal, .8, {opacity:'100%', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {display:'flex', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {autoAlpha:1, ease:Power1.easeInOut})
		}

		// // When the user clicks on <span> (x), close the modal
		// span.onclick = function() {
		// 	TweenMax.to(modal, .35, {opacity:'0', ease:Power1.easeInOut})
		// 	TweenMax.to(modal, .35, {display:'none', ease:Power1.easeInOut})
		// 	TweenMax.to(modal, .35, {autoAlpha:0, ease:Power1.easeInOut})
		// }

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		  	TweenMax.to(modal, .35, {opacity:'0', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {display:'none', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {autoAlpha:0, ease:Power1.easeInOut})
		    }
		};

var pink = document.getElementsByClassName("pick-pink")
	green = document.getElementsByClassName("pick-green")
	yellow = document.getElementsByClassName("pick-yellow")
	orange = document.getElementsByClassName("pick-orange")
	blue = document.getElementsByClassName("pick-blue")
	
	gifBg = document.getElementsByClassName("hand-gif"),
	modalContBg = document.getElementsByClassName("modal-content"),


$(pink).on('click',function(){
	TweenMax.to(gifBg, .35, {backgroundColor: '#EDC8CD', ease:Power1.easeInOut})
	TweenMax.to(modalContBg, .35, {backgroundColor: '#F4DCDF', ease:Power1.easeInOut})
});

$(green).on('click',function(){
		TweenMax.to(gifBg, .35, {backgroundColor: '#AFDBD1', ease:Power1.easeInOut})
		TweenMax.to(modalContBg, .35, {backgroundColor: '#D7EDE8', ease:Power1.easeInOut})
	});

$(yellow).on('click',function(){
		TweenMax.to(gifBg, .35, {backgroundColor: '#FAFD7B', ease:Power1.easeInOut})
		TweenMax.to(modalContBg, .35, {backgroundColor: '#FDFFB8', ease:Power1.easeInOut})
	});
$(orange).on('click',function(){
		TweenMax.to(gifBg, .35, {backgroundColor: '#F3C362', ease:Power1.easeInOut})
		TweenMax.to(modalContBg, .35, {backgroundColor: '#F9DFA9', ease:Power1.easeInOut})
	});
$(blue).on('click',function(){
		TweenMax.to(gifBg, .35, {backgroundColor: '#7BCFFD', ease:Power1.easeInOut})
		TweenMax.to(modalContBg, .35, {backgroundColor: '#BEE7FE', ease:Power1.easeInOut})
	});

