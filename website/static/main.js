
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    this.classList.toggle("active");
    panel.classList.toggle("activePanel");
  });
}
i;

$(document).ready(function(){
  
  $(".flex-one ul li a").click(function(){
    $(".flex-one ul li a").removeClass("active-nav")
    $(this).addClass("active-nav");
  })
  $(document).scroll(function(){
    var scr = $("#home").scrollTop()
    console.log(scr);
  })

})

