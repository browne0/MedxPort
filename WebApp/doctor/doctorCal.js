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
  $("#our_table tr td")
    .mousedown(function () {
      isMouseDown = true;
      $(this).toggleClass("highlighted");
      return false; //prevent text selection
    })
    .mouseover(function () {
      if (isMouseDown) {
        $(this).toggleClass("highlighted");
      }
    });

  $(document)
    .mouseup(function () {
      isMouseDown = false;
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
