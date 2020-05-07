$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: "#exp1",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#exp1", "show")
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#exp2",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#exp2", "show")
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#exp3",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#exp3", "show")
    .addTo(controller);


  $('.scroll').click(function(){
    $('.scroll').removeClass('active-anchor');
    $(this).addClass('active-anchor');
  });
});
