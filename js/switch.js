(($)=> {


	// Variables
	const loadScreen = $(".se-pre-con")
		content = $('.main-content')
		btnAlpha = $('#btn-alpha')
		btnWrite = $('#btn-write')
		
		background = $('#background')
		model = $('#container')
		shareBtn = $('#btn-share')
		
		firstHalf = $('.first-half')
		logo = $('.logo')
		preloadLogo = $('.se-pre-con img')

		// Loop Play/Pause Word
		btnLoop = $('#btn-loop ')
		loopStroke= $('.path-loop-stroke')
		loopFill= $('.path-loop-fill')
		isLooping = $('.ball')

		filter = $('.filter ')
		
		btnPause = $('#btn-pause ')
		playFill= $('.path-play')

		btnWord = $('#btn-word ')
		wordFill= $('.path-word')
		


		pausePlay = $('#btn-pause ')
		wordPlay = $('#btn-word ')

		hand = $('.second-half')
		model = $('#container')
		thirdHalf = $('.third-half')
		
		line = $('.firstLine ')
		lettersRow = $('.letters-row ')
		modal = $('#shareHand')

	 	morphPlay = $('#pausePath')
 		btnPause = $('#btn-pause')
 		btnPlay = $('.btn-play')
 		pause1 = $('.pause1')
 		pause2 = $('.pause2'),

 		
		// Window Preloader
	$(window).load(()=> {
		tlPreload = new TimelineMax();
		// Animate loader off screen
		tlPreload
		.to(preloadLogo, 2, { autoAlpha: 0,  ease:Power4.easeOut})
		.fromTo(preloadLogo, .6, { y:'60%',  ease:Power4.easeOut},{ y:'0%',  ease:Power4.easeOut},'-=.4')
		.to(preloadLogo, 2, { autoAlpha: 1,  ease:Power4.easeOut},'-=.4')
		.to(modal, 0, { autoAlpha: 0,  ease:Power4.easeIn})
		.fromTo(preloadLogo, .4, { y:'0%', ease:Power2.easeInOut},{ y:'-60%',  ease:Power2.easeOut})
		.to(preloadLogo, 1, { autoAlpha: 0,  ease:Power4.ease },'-=.6')
		.to(content, .7, { autoAlpha: 0,  ease:Power4.easeIn})
		.to(loadScreen, .4, {delay: 1, autoAlpha: 0,  ease:Power4.easeOut})
		.to(content, .4, { autoAlpha: 1,  ease:Power3.easeIn})
		.fromTo(background, 1, {x: '100%',  ease:Power4.ease},{x: '45%',  ease:Power4.ease})
		.staggerFromTo([btnLoop,btnPause,btnWord], .3, {y:'30%', autoAlpha: 0,  ease:Power3.easeIn},{y:'0%', autoAlpha: 1,  ease:Power3.easeIn}, 0.2)
		// .fromTo(btnPause, .3, {y:'30%', autoAlpha: 0,  ease:Power3.easeIn},{y:'0%', autoAlpha: 1,  ease:Power3.easeIn},'-=.2')
		// .fromTo(btnWord, .3, {y:'30%', autoAlpha: 0,  ease:Power3.easeIn},{y:'0%', autoAlpha: 1,  ease:Power3.easeIn},'-=.2')
	});


	// SVG variables
		const rowAN = $('.letters-row-an')
			rowOO = $('.letters-row-oo')
			row110 = $('.letters-row-110')

			palmFill = $('.letters-row-an .palm ')
			palmFill2 = $('.letters-row-oo .palm ')
			palmFill3 = $('.letters-row-110 .palm ')
			
			letterfill = $('.letters-row-an #letter-outline')
			letterfill2 = $('.letters-row-oo #letter-outline')
			letterfill3 = $('.letters-row-110 #letter-outline')
			
			palmOutline = $('.letters-row-an #Shape')
			palmOutline2 = $('.letters-row-oo #Shape')
			palmOutline3 = $('.letters-row-110 #Shape')
			
			btnAN = $('.btn-a-n')
			btnOO = $('.btn-o-o')
			btnOne = $('.btn-1-10'),
	

	// Alphabet SVG Timelines
		tlsvg = new TimelineMax();
		tlsvg2 = new TimelineMax({paused: true});
		tlsvg3 = new TimelineMax({paused: true});

		tlsvg
		.to(rowAN, .4, {autoAlpha:0,  ease:Power4.easeIn})
		.to(rowAN, .4, {zIndex:100,  ease:Power4.easeIn})
		.to(rowAN, .4, {autoAlpha:1,  ease:Power4.easeIn})
		.to(letterfill, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
		.to(palmOutline, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
		.to(letterfill, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
		.to(letterfill, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
		.to(palmFill, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )

		tlsvg2
		.to(rowOO, .4, {autoAlpha:0,  ease:Power4.easeIn})
		.to(rowOO, .4, {zIndex:100,  ease:Power4.easeIn})
		.to(rowOO, .4, {autoAlpha:1,  ease:Power4.easeIn})
		.to(letterfill2, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
		.to(palmOutline2, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
		.to(letterfill2, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
		.to(letterfill2, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
		.to(palmFill2, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )
		.addPause()

		tlsvg3
		.to(row110, .4, {autoAlpha:0,  ease:Power4.easeIn})
		.to(row110, .4, {zIndex:100, autoAlpha:0,  ease:Power4.easeIn})
		.to(row110, .4, {autoAlpha:1,  ease:Power4.easeIn})
		.to(letterfill3, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
		.to(palmOutline3, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
		.to(letterfill3, 1, {fill: '#fff',ease:Power4.ease}, '-=1')
		.to(letterfill3, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
		.to(palmFill3, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )
		.addPause()

	// SVG alphabet filter buttons
	$(btnAN ).on('click',()=>{
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


	const staggerRowAN = $('.letters-row-an .row')

	// Window slide - 1 - 2 - 3
		tlSwitch = new TimelineMax({paused: true}),

	tlSwitch
		// .to(modal, .35, {autoAlpha:0, ease:Power1.easeInOut})

		// .to(thirdHalf, 0, {autoAlpha: 0, ease:Power1.easeInOut})
		// .to(background, 0.6, {x: '45%',  ease:Power4.easeInOut},'-=.35')
		.fromTo(firstHalf, 0.5,{autoAlpha: 1, x:'0%', opacity: '100%', ease:Power1.easeInOut}, {autoAlpha: 0, opacity: '0%', x: '-100%', ease:Power1.easeInOut})
		// .to(firstHalf, 0.5, {  ease:Power1.easeInOut}, '-=0.5')
		// .to(firstHalf, 0.7, {css: {zIndex:-3},  ease:Power1.easeInOut})
		.to(btnAlpha, 0.2, {opacity: 0, ease:Power1.easeInOut})

		// .to(hand, 0.5, {position: 'absolute', x: '100%', ease:Back.easeInOut}, '-=.5')
		// .to(background, 0.5, {x: '100%',borderRight: '180px solid transparent', ease:Power3.easeInOut}, '-=.5')
		
		// .to(hand, 0, {autoAlpha:0, ease:Power4.easeInOut})
		// .to(background, 0, {autoAlpha:0, ease:Power3.easeInOut})
		
		// .to(hand, 0, {position: 'absolute', x: '-200%', ease:Power4.easeInOut})
		// .to(background, 0, {x: '-100%',borderRight: '180px solid transparent', ease:Power3.easeInOut})
		// .to(hand, 0.5, {autoAlpha:1, ease:Power4.easeInOut})
		// .to(background, 0.5, {autoAlpha:1, ease:Power3.easeInOut}, '-=.5')
		
		.to(background, 0.5, {x: '100%',borderRight: '180px solid transparent', ease:Power3.easeInOut})
		.to(background, 0, {autoAlpha:0, x: '-200%',borderRight: '180px solid transparent', ease:Power3.easeInOut})
		.to(background, 0.5, {autoAlpha:1, left: '-4%', x: '-45%', rotation:-7, borderRight: '180px solid transparent', ease:Power3.easeInOut})
		

	
		// .from([model,shareBtn ], 0.5, { x:'0%', ease:Power1.easeIn}, 0.04)

		.to(hand, 0.5, {position: 'absolute', x: '100%', ease:Back.easeInOut}, '-=.5')
		// .staggerTo([model, shareBtn], 0.5, {autoAlpha:0, ease:Back.easeInOut}, 1)
		

		.to(hand, 0, {autoAlpha:0, position: 'absolute', x: '-200%',ease:Power4.easeInOut})
		
		
		.to(hand, 0.5, {autoAlpha:1, position: 'absolute', x: '-100%', ease:Power4.easeInOut})


		// .to([model,shareBtn ], 0.5, { x:'0%', ease:Power1.easeOut}, 0.04)
		



	


		// .to(background, 0.5, {x: '-45%',borderRight: '180px solid transparent', ease:Power3.easeInOut}, '-=.5')
		// .to(background, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, '-=.5')
		
		.to(logo, 0.5, {content: "url('../logo/logo-circle-bl-on-yel.png')", ease:Power1.easeInOut}, '-=.2')



		.to(btnWrite, 0.2, {opacity: 1,position: 'absolute', left: '0%', ease:Power1.easeInOut})
		
		// .to(thirdHalf, 0.5, {position: 'relative', x: '-200%', ease:Power1.easeInOut}, '-=0.5')

		// .fromTo(thirdHalf, 0.5,{autoAlpha: 0, ease:Power1.easeInOut}, {autoAlpha: 1, ease:Power1.easeInOut}, '-=0.5')
		
		.to(thirdHalf, 0.5,{position: 'relative', x: '-200%', autoAlpha: 1, ease:Power1.easeInOut})
		
		
		.staggerFromTo(staggerRowAN, 0.5, {opacity:1, x:'200%', ease:Power1.easeIn}, {opacity:1, x:'0%', ease:Power1.easeOut}, 0.04)
		
		.staggerFromTo(filter, 0.5, {opacity:0, x:'500%', ease:Power1.easeIn}, {opacity:1, x:'0%', ease:Power1.easeOut}, 0.04, '-=.3')

		

		
		.addPause()
	







	// Window change 
	$('#btn-alpha').on('click',()=>{
		tlSwitch.play();
	});

	$('#btn-write').on('click',()=>{
		tlSwitch.reverse();
	});







// btnLoop = $('#btn-loop ')
// 		loopStroke= $('.path-loop-stroke')
// 		loopFill= $('.path-loop-fill')
// 		isLooping = $('.ball')

// 		btnPause = $('#btn-pause ')
// 		playFill= $('.path-play')

// 		btnWord = $('#btn-word ')
// 		wordFill= $('.path-word')





tlMorph = new TimelineMax({paused: true})
	
tlMorph
	
	.to(pause1, 0.3, {attr: {points:"23 0 23 26 15 26 15 0"}, ease:Power2.easeInOut})
	.to(pause2, 0.3, {attr: {points:"8 0 8 26 0 26 0 0"}, ease:Power2.easeInOut},'-=.3')
	.to(pause1, 0.3, {attr: {points:"23 13 23 13 0 26 0 0"}, ease:Power2.easeInOut})
	.to(pause2, 0.3, {attr: {points:"23 13 23 13 0 26 0 0"}, ease:Power2.easeInOut},'-=.3')
	.to(pause1, 0.3, {x:'2px', ease:Power2.easeInOut},'-=.3')
	.to(pause2, 0.3, {x:'2px', ease:Power2.easeInOut},'-=.3')
	.to(playFill, 0.3, {fill: '#7f7f7f', ease:Power2.easeInOut},'-=.3')
	.addPause()


$(btnPause).on('click', (event) => {
    event.preventDefault();
   	// tlMorph.reverse();
   	tlMorph.reversed() ? tlMorph.play() : tlMorph.reverse();
    tlLoop.reverse();
});



tlLoop = new TimelineMax({paused: true})
	.to(isLooping, 0.3, {autoAlpha: 0, ease:Power2.easeInOut})
	.to(isLooping, 0.3, {height:'0px', width:'0px', ease:Power2.easeInOut})
	.to(loopFill, 0.3, {fill: '#000', ease:Power2.easeInOut})
	.to(loopStroke, 0.3, {stroke: '#000', ease:Power2.easeInOut},'-=.3')
	.to(isLooping, 0.3, {autoAlpha: 1, ease:Power2.easeInOut}, '-=.3')
	.to(isLooping, 0.5, {height:'9px', width:'9px', ease:Power2.easeInOut}, '-=.3')
	


 $(btnLoop).on('click',(event) => {
    event.preventDefault();
    tlLoop.play()
    tlMorph.play();
});


// var tl = new TimelineLite({paused:true});
// tl.to('.sidebar, .main', 1,  {x:-231, ease:Power2.easeIn});
    
// $('.home').on('click', function(event) {
//     event.preventDefault();
//     tl.reversed() ? tl.play() : tl.reverse();
// });


var span = $('<span>').css('display','inline-block')
.css('word-break','break-all').appendTo('body').css('visibility','hidden');

 const initSpan = (textarea) => {
  span.text(textarea.text())
      .width(textarea.width())      
      .css('font',textarea.css('font'));
}
$('textarea').on({
    input: ()=>{
      var text = $(this).val();      
      span.text(text);      
      $(this).height(text ? span.height() : '1.1em');
    },
    focus: ()=>{
     initSpan($(this));
    },
    keypress: (e)=>{
        if(e.which == 13) e.preventDefault();
    }
});



})(jQuery);


















