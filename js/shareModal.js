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


class SvgAnimation {
	constructor(btnSvg, tlSvg, row, letterFill, palmOutline, letterfill, palmFill ){ // parameters
	this.btnSvg = btnSvg;
	this.tlSvg = tlSvg;
	this.row = row;
	this.letterFill = letterFill;
	this.palmOutline = palmOutline;
	this.letterfill = letterfill;
	this.palmFill = palmFill;
}
svgEventListener() {
	$(this.).on('click',()=>{
		tlsvg2.reverse();
		tlsvg3.reverse();
		tlsvg.play();
	});
}
svgAnimate(){
		this.tlsvg
		.to(this.row, .4, {autoAlpha:0,  ease:Power4.easeIn})
		.to(this.row, .4, {zIndex:100,  ease:Power4.easeIn})
		.to(this.row, .4, {autoAlpha:1,  ease:Power4.easeIn})
		.to(this.letterfill, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
		.to(this.palmOutline, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
		.to(this.letterfill, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
		.to(this.letterfill, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
		.to(this.palmFill, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )
}
}
const pinkButton = new ColorChange(pink, '#EDC8CD', '#F4DCDF');
pinkButton.addEventListeners();




