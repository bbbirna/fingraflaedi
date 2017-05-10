// (($)=> {

// Alphabet SVG Timelines
	     // SVG variables
                 
                const rowAN = $('.letters-row-an')
                const rowOO = $('.letters-row-oo')
                const row110 = $('.letters-row-110')

                const palmFill1 = $('.letters-row-an .palm ')
                const palmFill2 = $('.letters-row-oo .palm ')
                const palmFill3 = $('.letters-row-110 .palm ')
                
                const letterfill1 = $('.letters-row-an #letter-outline')
                const letterfill2 = $('.letters-row-oo #letter-outline')
                const letterfill3 = $('.letters-row-110 #letter-outline')
                
                const palmOutline1 = $('.letters-row-an #Shape')
                const palmOutline2 = $('.letters-row-oo #Shape')
                const palmOutline3 = $('.letters-row-110 #Shape')
                
                const btnAN = $('#btn-a-n')
                const btnOO = $('#btn-o-o')
                const btnOne = $('#btn-1-10')

                const handMotion = $('.svgHandMotion')
                const motionFill = $('.svgMotionFill')
        
    // tlSvg = new TimelineMax();


class SvgAnimation {
        constructor(btnSvg ,row, letterFill, palmOutline, palmFill, paused ){ 
            this.btnSvg = btnSvg;
            this.row = row;
            this.letterFill = letterFill;
            this.palmOutline = palmOutline;
            this.palmFill = palmFill;
            this.tlSvg = new TimelineMax({paused: paused});
            

        }

        Timeline(){
            this.tlSvg
            .to(this.btnSvg, .4, {color: '#a5a5a5',  ease:Power4.ease})
            .to(this.row, 0.4, {autoAlpha:0,  ease:Power4.easeIn},'-=.4')
            .to(this.row, 0, {zIndex:100,  ease:Power4.easeIn})
            .to(this.row, .4, {autoAlpha:1,  ease:Power4.easeIn})
            .to(this.letterFill, 1, {strokeDashoffset:30.30,  ease:Power4.easeIn})
            .to(this.palmOutline, 1, {strokeDashoffset:10.24,  ease:Power4.easeInOut},'-=.5')
            .to(this.letterFill, .3, {fill: '#fff',ease:Power4.ease}, '-=1')
            .to(this.letterFill, .6, {fill: '#000',ease:Power4.ease}, '-=.5')
            .to(this.palmFill, .4, {fill: '#AFDBD1',  ease:Power4.ease}, '-=.5' )
        }
        svgPlayTl() {
            $(this.btnSvg).on('click',()=>{
               event.preventDefault();
                this.tlSvg.reversed() ? this.tlSvg.play() : this.tlSvg.reverse();
                // this.tlSvg.play();
            });
        }
}

console.log('animation');
const animateFirstSvg = new SvgAnimation(btnAN, rowAN, letterfill1, palmOutline1, palmFill1, false);
animateFirstSvg.Timeline();
animateFirstSvg.svgPlayTl();

const animateSecondSvg = new SvgAnimation(btnOO, rowOO, letterfill2, palmOutline2, palmFill2, true);
animateSecondSvg.Timeline();
animateSecondSvg.svgPlayTl();

const animateThirdSvg = new SvgAnimation(btnOne, row110, letterfill3, palmOutline3, palmFill3, true);
animateThirdSvg.Timeline();
animateThirdSvg.svgPlayTl();


// var tl = New TimelineMax(),
//     forward = true;

// button.click(function()
// {
//   if(forward)//timeline is going forward so we should reverse it
//   {
//     tl.reverse();
//     element.removeClass('className');
//   }
//   else//timeline is going backwards, so we should make it go forward
//   {
//     tl.play();
//     element.addClass('className');
//   }
//   //this toggles the boolean on each click event
//   forward = forward  ? false : true;
// });




