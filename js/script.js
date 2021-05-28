// Exter nal Java script for date and time included in index page
function currentDate(){
document.getElementById("timedate").innerHTML = new Date();
setTimeout(currentDate);
}
currentDate();

  
