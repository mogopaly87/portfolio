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

  var scene = new ScrollMagic.Scene({
    triggerElement: "#flexing1",
    duration: "100%",
    triggerHook: 0.9
  })
    .setClassToggle("#flexing1", "show_app")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#flexing2",
    duration: "100%",
    triggerHook: 0.9
  })
    .setClassToggle("#flexing2", "show_app")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#flexing3",
    duration: "100%",
    triggerHook: 0.9
  })
    .setClassToggle("#flexing3", "show_app")
    .addTo(controller);

  $('.scroll').click(function(){
    $('.scroll').removeClass('active-anchor');
    $(this).addClass('active-anchor');
  });

  // Change active side nav on scroll from page to page
  new ScrollMagic.Scene({
    triggerElement: "#home",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#home-nav", "active-nav")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#about",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#about-nav", "active-nav")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#skills",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#skills-nav", "active-nav")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#education",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#education-nav", "active-nav")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#portfolio",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#portfolio-nav", "active-nav")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#experience",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#experience-nav", "active-nav")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#contact",
    duration: "100%",
    triggerHook: 0.8
  })
    .setClassToggle("#contact-nav", "active-nav")
    .addTo(controller);
  
  let triggerPosition = scene.triggerPosition();
  console.log(triggerPosition);
});
