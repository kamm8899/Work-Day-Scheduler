var day = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(day);

//Display current Day in header 
$('#currentDay').html(day);

//hour
var hour = moment().format("hh:mm:ss K");
console.log(hour);



//save button
var saveTask =function(){
    localStoragge.setItem();
}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

//Check if the task is in the past
var presentHour = function(hour){
    var hour = moment().format("hh:mm:ss K");
    console.log(hour);

    //get hour from day
    $(hour).find("description").text().trim();

    //remove any old classes from element
    $(hour).removeClass(".bg-dark");
//apply new class if its after current day
    if (moment().isAfter(hour)){
        $(hour).addClass(".bg-danger");
    }
    
}
//Future Hour



//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist