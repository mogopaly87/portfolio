function myFunction() {
  var ebody = document.getElementById("body");
  var id_one = document.getElementById("id-one");
  var id_two = document.getElementById("id-two");
  var id_three = document.getElementById("id-three");
  var id_four = document.getElementById("id-four");
  var id_five = document.getElementById("id-five");
  var id_six = document.getElementById("id-six");
  var id_seven = document.getElementById("id-seven");
  var x = ebody.scrollTop;
  var h = 2 * window.innerHeight;
  if (x > 1200) {
    id_one.classList.add("active");
    id_two.classList.add("active");
    id_three.classList.add("active");
    id_four.classList.add("active");
    id_five.classList.add("active");
    id_six.classList.add("active");
    id_seven.classList.add("active");
  } else {
    id_one.classList.remove("active");
    id_two.classList.remove("active");
    id_three.classList.remove("active");
    id_four.classList.remove("active");
    id_five.classList.remove("active");
    id_six.classList.remove("active");
    id_seven.classList.remove("active");
  }
}

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
