jQuery(document).ready(function() {
  var days = new Array(31);

  for (i=0;i<days.length;i++)
  {
    days[i] = (i+1).toString();
  }

  var elements = days.map(function (day) {
    var el = $('<th>');
    el.text(day);
    return el;
  });
  $('#row').append(elements);
});

$(function () {
  var isMouseDown = false;
  $("#doctable tr td")

    .mousedown(function () {
      isMouseDown = true;

         // $(this).toggleClass("red");
         var hl = $("highlighted");
         // hl.id = "ghl";



      return false; //prevent text selection
    })

    .mouseup(function () {
      console.log(0);
      var show = document.getElementById("docmenu");
      show.style.visibility = "visible";


      isMouseDown = false;
    })
    .mouseover(function () {
      if (isMouseDown) {
        $(this).toggleClass("highlighted");
      }
    });
});

function left7() {
  for(var b1 = 1; b1 <= 7; b1++) { //bugged
    var temp = parseInt(document.getElementById("a" + b1).innerHTML);
    document.getElementById("a" + b1).innerHTML = temp - 7;
  }
}

  function right7() {
    for(var b12 = 1; b12 <= 7; b12++) { //bugged
      var temp1 = parseInt(document.getElementById("a" + b12).innerHTML);
      document.getElementById("a" + b12).innerHTML = temp1+ 7;
    }
  }
function green(changeGreen){

  // document.getElementById("ghl").bgcolor = "#7FFF00";
  changeGreen.classList.toggle("green");

}
function red(changeRed){
  changeRed.classList.toggle("red");

}
