 let = player = [];
    let = artificial = [];
    var computerMarker = "";
    var compute = [];
    var arr = [];
    var ids = ["boxone1", "boxone2", "boxone3", "boxone4", "boxone5", "boxone6", "boxone7", "boxone8", "boxone9",]
    var marker = "";
    var position = "";
    function selctor() {
        marker = prompt("choose your marker")
    }
    function boxes(playerMarker) {
        if (marker.length > 1 && (marker !== "x" || marker !== computerMarker)) {
            alert("please select one character be it X or O ");
            window.location.reload(true);
            document.getElementById(playerMarker).innerHTML = "";
        } else {
            if (marker === "x") {
                computerMarker = "O";
            } else { computerMarker = "X" }
            position = document.getElementById(playerMarker).innerHTML;
            player.push(playerMarker);
            console.log(playerMarker);
            compute.push(playerMarker);
            document.getElementById(playerMarker).innerHTML = marker;
            position = "";
            machine();
        }

    }
    function machine() {
        var RandomNumber = Math.floor(Math.random() * 8);
        if (compute.indexOf(ids[RandomNumber]) === -1) {
            console.log(computerMarker);
            document.getElementById(`${ids[RandomNumber]}`).innerHTML = computerMarker;
            artificial.push(ids[RandomNumber]);
            compute.push(ids[RandomNumber]);

        } else {
            machine();
        }
checksWin();
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
        if(player.length ===4){
            location.reload(); 
        }       
    }