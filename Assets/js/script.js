$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

    $(".notification").addClass("show");

    setTimeout(function () {
      $(".notification").removeClass("show");
    }, 2000);
  });

  function hourUpdater() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();
  setInterval(hourUpdater, 15000);
  for (var i = 8; i < 18; i++) {
    $("#hour-" + i + " textarea").val(localStorage.getItem("hour-" + i));
  }

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
