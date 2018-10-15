console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('menu');
var closeBtn = document.getElementById('close-btn');

var myFullpage = new fullpage('#fullpage', {
  anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
  sectionsColor: ['#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3'],
  navigationTooltips: ['Home', '1', '2', '3', '4', '5', 'Quiz', 'Sources'],
  css3: true,
  scrollingSpeed: 800,
  navigation: true,
  responsiveHeight: 330,
  controlArrows: false,
  showActiveTooltip: true,
  menu: '#menu'
});

burger.addEventListener('click', function(){
  console.log('burger-clicked');
  mobileNav.style.width = '100%';
  mobileNav.style.height = '120px';
  this.style.display = 'none';
  mobileNav.style.transition = '0s ease';
});

closeBtn.addEventListener('click', function(){
  console.log('close-btn-clicked');
  mobileNav.style.width = '0px';
  burger.style.display = 'block';
  mobileNav.style.transition = '0s ease';
});

$( function() {
   $( "#draggable1" ).draggable({revert: "invalid"});
   $( "#draggable2" ).draggable({revert: "invalid"});
   $( "#draggable3" ).draggable({revert: "invalid"});
   $( "#draggable4" ).draggable({revert: "invalid"});
   $( "#droppable1" ).droppable({
     drop: function( event, ui ) {
       $( this )
         .addClass( "ui-state-highlight" )
         .find( "p" )
           .html( "Dropped!" );
     }
   });
   $( "#droppable2" ).droppable({
     drop: function( event, ui ) {
       $( this )
         .addClass( "ui-state-highlight" )
         .find( "p" )
           .html( "Dropped!" );
     }
   });
   $( "#droppable3" ).droppable({
     drop: function( event, ui ) {
       $( this )
         .addClass( "ui-state-highlight" )
         .find( "p" )
           .html( "Dropped!" );
     }
   });
   $( "#droppable4" ).droppable({
     drop: function( event, ui ) {
       $( this )
         .addClass( "ui-state-highlight" )
         .find( "p" )
           .html( "Dropped!" );
     }
   });
 } );
