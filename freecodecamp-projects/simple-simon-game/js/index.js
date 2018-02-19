 let arr = ["btn1", "btn2", "btn3", "btn4"];
    let aI = [];
    let score = 0;
    let player = [];
    let time = 300;
    let delay = 600;

    function clicks(wes) {
        player.push(wes);
        console.log("sound should be playing");
        var beep = document.getElementById("audio");
        console.log(player);
        if (player.length === aI.length) {
            if (player.toString() === aI.toString()) {
                score += 1;
                time -= 20;
                delay -= 20;
                console.log(delay);
                console.log(time);
                mizer();
                scores()
            } else {
                score -= 1;
                time += 20;
                delay += 20;
                console.log(aI);
                aI.pop();
                player.pop();
                strictModes();
                if (score !== 0) {
                    alert("Oooops! please try again");
                }
                mizer();
                scores()
            }
        }

    }


    function mizer() {
        if (score === 22) {
            alert("Well done you win!!!");
        }
        else if (score === -1) {
            alert("meh!! you lost this time click start to try again");
            location.reload();
        }
        showColor();
    }

    function showColor() {
        var randomno = Math.floor(Math.random() * 4);
        aI.push(arr[randomno]);
        var i = 0;
        var interval = setInterval(function () {
            showUp(aI[i]);
            i++;
            if (i >= aI.length) {
                clearInterval(interval);
                player = [];
            }
        }, delay);
    }

    function showUp(tile) {
        document.getElementById(tile).style.opacity = 0.9;
        window.setTimeout(function () {
            document.getElementById(tile).style.opacity = 0.3;
        }, time);


    }
    function scores() {
        document.getElementById("score").value = score;
    }
    function restart() {
        location.reload();

    }

    function strictMode() {
        document.getElementById("on").value = "on";
        alert("strict mode activated!!!")
        document.getElementById("on").style.backgroundColor = "lawngreen";
       document.getElementById("off").style.backgroundColor = "black";
    }
    function strictModes() {
        let oNstate = document.getElementById("on").value;
        let oFfstate = document.getElementById("off").value;
        console.log(oNstate);
        if (oNstate === "on") {
            document.getElementById("on").style.backgroundColor = "black";
            document.getElementById("off").style.backgroundColor = "red";

            score = 0;
            aI = [];
            player = [];
            alert("we figured you could't play in strict mode click strict again if you dare")

            mizer();
        }
    }

    function playSound() {
      
        var beep = document.getElementById("audio");
        beep.play();
    }