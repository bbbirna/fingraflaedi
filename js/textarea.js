
var span = $('<span>').css('display','inline-block')
.css('word-break','break-all').appendTo('body').css('visibility','hidden');

 const initSpan = (textarea) => {
  span.text(textarea.text())
      .width(textarea.width())      
      //.css('font',textarea.css('font'));
}


// $('textarea').on({
//     input: ()=>{
//       var text = $(this).val();      
//       span.text(text);      
//       $(this).height(text ? span.height() : '1.1em');
//     },
//     focus: ()=>{
//      initSpan($(this));
//     },
//     keypress: (e)=>{
//         if(e.which == 13) e.preventDefault();
//     }
// });
