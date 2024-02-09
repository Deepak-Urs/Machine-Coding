//IIFE
(function () {
    //get the interacting elements
    var hour = document.querySelector(".hour");
    //var hour2 = document.getElementsByClassName("hour");
    //console.log('querySelector values', hour);
    //console.log('getElementById values', hour2);
    var min = document.querySelector(".minute");
    var sec = document.querySelector(".sec");

    var startBtn = document.querySelector(".start");
    var stopBtn = document.querySelector(".stop");
    var resetBtn = document.querySelector(".reset");

    var countdownTimer = null;

    startBtn.addEventListener('click', function () {
        if(hour.value == 0 && min.value == 0 && sec.value == 0) {
            return
        }

        function startInterval() {
            startBtn.style.display = 'none';
            stopBtn.style.display = 'initial';

            countdownTimer = setInterval(() => {
                timer()
            }, 1000);
        }

        startInterval()

    })

    function stopInterval() {

    }

    function timer() {
        if(hour.value == 0 && min.value == 0 && sec.value == 0) {
            hour.value = "";
            hour.value = "";
            hour.value = "";
            stopBtn.style.display = 'none';
            startBtn.style.display = 'initial';
            stopInterval()
        }
        else if(sec.value != 0) {
            sec.value = `${sec.value <=10 ? "0" : ""}${sec.value - 1}`
        } 
        else if(min.value != 0 && sec.value == 0) {
            sec.value = 59
            min.value = `${min.value <=10 ? "0" : ""}${min.value - 1}`
        }
        else if(hour.value != 0 && min.value == 0) {
            min.value = 60
            hour.value = `${hour.value <=10 ? "0" : ""}${hour.value - 1}`
        }
    }
})()