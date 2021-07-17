var day = moment().add(3, "hours").format('MMMM Do YYYY, h:mm:ss a');
console.log(day);
//Display current Day in header 
$('#currentDay').html(day);

//hour
var hour = moment().add(3, "hours").format("hh:mm:ss K");
console.log(hour);

var currentTime= moment().add(3, "hours");



//save button
var saveTask =function(){
    localStoragge.setItem();
}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

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
    if (hourMoment.isSame(currentTime)){
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
//Future Hour



//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist