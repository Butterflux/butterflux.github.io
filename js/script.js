// $(document).ready(function(){
//   var el = $('#hero')
//   newValue = el.offset()['top']
//   console.log();
//   el.css({'margin-top':-newValue, 'padding-top':newValue});
// })
var svgcount = 0;
var svgCurrent = 1;
$(document).ready(function(){
  svgcount = $('.svg-logo').length;
  $('.svg-logo').addClass('d-none');
  $('[data-toggle="tooltip"]').tooltip()
  $('.svg-logo:nth-child(1)').removeClass('d-none')

})

$('#navbarCollapsible').on('show.bs.collapse',function(){
  $('#main-nav').toggleClass(['bg-primary', 'fh']);
  // $('.navbar-toggler').toggleClass('is-open')
})
$('#navbarCollapsible').on('hidden.bs.collapse', function(){
  $('#main-nav').toggleClass(['bg-primary','fh']);
  // $('.navbar-toggler').toggleClass('is-open')
})

$('#logobutton').click(function(){
  svgCurrent = svgCurrent == svgcount? 1 : svgCurrent + 1
  console.log(svgCurrent)
  $('.svg-logo').addClass('d-none')
  $('.svg-logo:nth-child(' + svgCurrent + ')').removeClass('d-none')
})

$(window).scroll(function() {    
  console.log($(window).scrollTop());    
  if ($(window).scrollTop() > 60 ){ $('nav.navbar').addClass(['bg-white', 'shadow']).removeClass('navbar-dark')}
  else $('nav.navbar').removeClass(['bg-white', 'shadow']).addClass('navbar-dark');
});

feather.replace()



// $('.navbar-toggler').click(function(){
//   console.log($(this), $('#main-nav'))
//   $('#main-nav, #top-bar').toggleClass('bg-primary');
// })

// show.bs.collapse     This event fires immediately when the show instance method is called.
// shown.bs.collapse    This event is fired when a collapse element has been made visible to     the user (will wait for CSS transitions to complete).
// hide.bs.collapse     This event is fired immediately when the hide method has been called. 
// hidden.bs.collapse   This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).