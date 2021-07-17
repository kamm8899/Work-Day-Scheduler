var day = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(day);
//Display current Day in header 
$('#currentDay').html(day);

//hour
var hour = moment().format("hh:mm:ss K");
console.log(hour);

var currentTime= moment();
//save button
$('.saveBtn').on("click", function() {
    console.log("message");
    var tasks= $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, tasks);
    
  });

//Get Local Storge

$("#hour9AM .description").val(localStorage.getItem('hour9AM'));
$("#hour8AM .description").val(localStorage.getItem('hour8AM'));
$("#hour10AM .description").val(localStorage.getItem('hour10AM'));
$("#hour11AM .description").val(localStorage.getItem('hour11AM'));
$("#hour12PM .description").val(localStorage.getItem('hour12PM'));
$("#hour1PM .description").val(localStorage.getItem('hour1PM'));
$("#hour2PM .description").val(localStorage.getItem('hour2PM'));
$("#hour3PM .description").val(localStorage.getItem('hour3PM'));
$("#hour4PM .description").val(localStorage.getItem('hour4PM'));
$("#hour5PM .description").val(localStorage.getItem('hour5PM'));
$("#hour6PM .description").val(localStorage.getItem('hour6PM'));


//Check if the task is in the past
var presentHour = function(){
    var hour = currentTime.format("hh:mm:ss K");
    console.log(hour);

    //get hour from day
    var checktime = $(".time-block").find(".hour");
   // moment(checktime, "h A");
    console.log(moment(checktime, "h A"));
    for(i=0; i<checktime.length; i++){
        
        var hourString= checktime.eq(i).text().trim();
        console.log(hourString);
         var hourMoment= moment(hourString, "h A");
        //apply new class if its after present hour
    if (hourMoment.isSame(currentTime, "hour")){
        //remove any old classes from element
        
    $(".time-block .col-md-10").eq(i).removeClass("bg-dark");
    $(".time-block .col-md-10").eq(i).addClass("bg-danger");
    }
    else if (hourMoment.isAfter(currentTime)){
        //remove any old classes from element
        
    $(".time-block .col-md-10").eq(i).removeClass("bg-dark");
    $(".time-block .col-md-10").eq(i).addClass("bg-success");
    }

    }
  
}
presentHour();



