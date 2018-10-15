var myFullpage = new fullpage('#fullpage', {
  anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
  sectionsColor: ['#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3', '#4CCFB3'],
  navigationTooltips: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
  css3: true,
  scrollingSpeed: 800,
  navigation: true,
  responsiveHeight: 330,
  controlArrows: false,
  showActiveTooltip: true,
  menu: '#menu'
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

// $( function() {
//
//     // There's the gallery and the trash
//     var $tasks = $( "#tasks" ),
//       $one = $( "#one" ),
//       $two = $( "#two" ),
//       $three = $( "#three" ),
//       $four = $( "#four" ),;
//
//     // Let the gallery items be draggable
//     $( "li", $tasks ).draggable({
//       revert: "invalid", // when not dropped, the item will revert back to its initial position
//     });
//
//     // Let the trash be droppable, accepting the gallery items
//     $one.droppable({
//       accept: "#tasks > li",
//       classes: {
//         "ui-droppable-active": "ui-state-active",
//         "ui-droppable-hover": "ui-state-hover"
//       },
//       drop: function( event, ui ) {
//         $( this )
//           .addClass( "ui-state-highlight" )
//           .find( "p" )
//             .html( "Dropped!" );
//       }
//     });
//   } );
