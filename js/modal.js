
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

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			TweenMax.to(modal, .35, {opacity:'0', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {display:'none', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {autoAlpha:0, ease:Power1.easeInOut})
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		  	TweenMax.to(modal, .35, {opacity:'0', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {display:'none', ease:Power1.easeInOut})
			TweenMax.to(modal, .35, {autoAlpha:0, ease:Power1.easeInOut})
		    }
		}
