$(function () {
  var isMouseDown = false;

  var days = new Array(31);
  for (i=0;i<days.length;i++)
  {
    days[i] = (i+1).toString();
  }

  var elements = days.map(function (day) {
    var el = $('<td>');
    el.text(day);
    return el;
  });

  $('#row').append(elements);

  $("#our_table tr td")
    .mousedown(function () {
      isMouseDown = true;
      $(this).toggleClass("highlighted");
      return false; // prevent text selection
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
    // func left7()
    // {
    //   for(int i=1;i<)
    //   document.innerHTMLByID("a + i") =
    // }
});
