function startBreak(arr) {
            if (arr[0] === "0" && arr[0] === "00") {
                breakerd();
            }
        }

        function setdetails() {
            var seconds2 = document.getElementById("minsss2").value;
            console.log(seconds2);
            var minutes2 = document.getElementById("seccc2").value;
            document.getElementById("demoo").innerHTML = minutes2 + ":" + "00";
            var seconds = document.getElementById("secs").value;
            var minutes = document.getElementById("mins").value;
            document.getElementById("demo").innerHTML = minutes + ":" + seconds;
        }

        function startTimer() {
            var currentTime = document.getElementById("demo").innerHTML;
            console.log(currentTime);
            if (currentTime === ":") {
                alert("please insert time on the first circle first")
            } else {
                var timeArray = currentTime.split(":");
                console.log(timeArray[0]);
                console.log(timeArray[1]);
                var sec = checkSecs((timeArray[1] - 1));
                var min = timeArray[0];
                if (sec == 59) {
                    min--;
                }

                document.getElementById("demo").innerHTML = min + ":" + sec;
                var ste = setTimeout(startTimer, 1000);
                if (min === "0" && sec === "00") {
                    clearTimeout(ste);
                    breakerd()
                }
                //call bbfunc
            }
        }

        function checkSecs(s) {
            if (s < 10 && s >= 0) {
                s = "0" + s;
            }
            if (s < 0) {
                s = "59";
            }
            return s;
        }
        function clears() {
            document.getElementById("demo").innerHTML = ":";
            document.getElementById("demoo").innerHTML = ":";
          location.relaod();
        }

        function breakerd() {
            var currentTime2 = document.getElementById("demoo").innerHTML;
            console.log(currentTime2);
            if (currentTime2 === ":00") {
                alert("you need to enter in minutes and seconds aswell for the break timer to start")
            } else {
                var tArray2 = currentTime2.split(":");
                console.log(tArray2[0]);
                console.log(tArray2[1]);
                var sec2 = checkSecs((tArray2[1] - 1));
                var min2 = tArray2[0];
                if (sec2 == 59) {
                    min2--;
                }
                document.getElementById("demoo").innerHTML = min2 + ":" + sec2;
                var ste2 = setTimeout(breakerd, 1000);
                if (min2 === "0" && sec2 === "00") {
                    clearTimeout(ste2);
                    document.getElementById("demo").innerHTML = min + ":" + sec;
                    var ste = setTimeout(startTimer, 1000);
                }
            }
        }