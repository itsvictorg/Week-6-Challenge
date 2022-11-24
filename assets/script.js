var todayDate = new Date();
$("#currentDay").text(todayDate.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) );


console.log(todayDate)

$(document).ready(function () {

  var storedInputs = [];
  
  renderSavedInput();

    $(".saveBtn").on("click", function () {
        
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, input);
        
    })

    function renderSavedInput() {

     
      var savedInput = JSON.parse(localStorage.getItem("time", "input"));
     
      if (savedInput!== null) {
      

      } else {
        return;
      }
    }
   
    function timeTracker() {
        
        var currentTime = todayDate.getHours();

        
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    $("#hour8 .description").val(localStorage.getItem("hour9"));
    $("#hour9 .description").val(localStorage.getItem("hour10"));
    $("#hour10 .description").val(localStorage.getItem("hour11"));
    $("#hour11 .description").val(localStorage.getItem("hour12"));
    $("#hour12 .description").val(localStorage.getItem("hour1"));
    $("#hour13 .description").val(localStorage.getItem("hour2"));
    $("#hour14 .description").val(localStorage.getItem("hour3"));
    $("#hour15 .description").val(localStorage.getItem("hour4"));
    $("#hour16 .description").val(localStorage.getItem("hour5"));
    $("#hour17 .description").val(localStorage.getItem("hour6"));

    timeTracker();
})
