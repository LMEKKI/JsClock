const her = document.getElementById("her");
const sec = document.getElementById("sec");
const min = document.getElementById("min");
var setTimer= setInterval(getTime,1000);



function getTime() {
    let time = new Date();
her.innerHTML = time.getHours()+ ":"
min.innerHTML = time.getMinutes()+ ":"
sec.innerHTML = time.getSeconds()+ ":"
if (time.getMinutes()<10) {
min.innerHTML = "0"+time.getMinutes()+ ":"
  
}
if (time.getSeconds()<10) {
    sec.innerHTML = "0"+time.getSeconds()+ ":"
      
    }
    if (time.getHours()<10) {
        min.innerHTML = "0"+time.getHours()+ ":"
          
        }
    
}
getTime();




