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
var color = "gray";
$(function () {
  var isMouseDown = false;
  $("#doctable tr td")
    .mousedown(function () {
      isMouseDown = true;
         $(this).toggleClass(color);
         //var hl = $(color);
         // hl.id = "ghl";

      //  $("Available").click(function(){
      //   $("highlighted").toggleClass("green");
      // }

      return false; //prevent text selection
    })
    .mouseover(function () {
      if (isMouseDown) {
        $(this).toggleClass(color);
      }
    });

    $(document)
    .mouseup(function () {
      // console.log(0);
      // var show = document.getElementById("docmenu");
      // show.style.visibility = "visible";
      //
      // var all = $("highlighted").map(function() {
      //       return this.innerHTML;
      //   }).get();
      //   console.log(all);
      isMouseDown = false;
    })

});

function left7() {
  for(var b1 = 1; b1 <= 7; b1++) {
    var temp = parseInt(document.getElementById("a" + b1).innerHTML);
    document.getElementById("a" + b1).innerHTML = temp - 7;
  }
}

  function right7() {
    for(var b12 = 1; b12 <= 7; b12++) {
      var temp1 = parseInt(document.getElementById("a" + b12).innerHTML);
      document.getElementById("a" + b12).innerHTML = temp1+ 7;
    }
  }
function green(){
  color = "green";
}
function red(){
  color = "red";
}
function gray(){
  window.location.reload();
}
