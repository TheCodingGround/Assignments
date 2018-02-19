 let = player = [];
    let = artificial = [];
    var cmarker = "";
    var compute = [];
    var arr = [];
    var ids = ["boxone1", "boxone2", "boxone3", "boxone4", "boxone5", "boxone6", "boxone7", "boxone8", "boxone9",]
    var marker = "";
    var identity = "";
    function selctor() {
        marker = prompt("choose your marker")
    }
    function boxes(edenti) {
        if (marker.length > 1 && (marker !== "x" || marker !== cmarker)) {
            identity = "";
            alert("please select one character be it X or O ");
            window.location.reload(true);
            document.getElementById(edenti).innerHTML = "";
        } else {
            if (marker === "x") {
                cmarker = "O";
            } else { cmarker = "X" }
            identity = document.getElementById(edenti).innerHTML;
            player.push(edenti);
            compute.push(edenti);
            document.getElementById(edenti).innerHTML = marker;
            identity = "";
   
            machine();
        }

    }
    function machine() {
        var randomno = Math.floor(Math.random() * 8);
        if (compute.indexOf(ids[randomno]) === -1) {
            document.getElementById(`${ids[randomno]}`).innerHTML = cmarker;
            artificial.push(ids[randomno]);
            compute.push(ids[randomno]);

        } else {
            machine();


        }
        checksWin();

          console.log(player);
    }
    function checksWin() {
        var lines = [
            ["boxone1", "boxone2", "boxone3"],
            ["boxone4", "boxone5", "boxone6"],
            ["boxone7", "boxone8", "boxone9"],
            ["boxone1", "boxone4", "boxone5"],
            ["boxone2", "boxone5", "boxone8"],
            ["boxone3", "boxone6", "boxone9"],
            ["boxone1", "boxone5", "boxone9"],
            ["boxone3", "boxone5", "boxone7"],
        ];   
        for (let i = 0; i < lines.length; i++) {
       if(player)
          console.log(lines[i])
        }

    }