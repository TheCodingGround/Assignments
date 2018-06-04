 let = player = [];
    let = artificial = [];
    var board = Array(3).fill(Array(3).fill(null));
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
            } else { computerMarker = "X" 
        }
   document.getElementById(`${ids[6]}`).innerHTML = computerMarker;
            position = document.getElementById(playerMarker).innerHTML;
            player.push(playerMarker);
            compute.push(playerMarker);
            document.getElementById(playerMarker).innerHTML = marker;
            position = "";
            machine();
            checksWin();
        }

    }

    function checkState (){
        for(var i =0;i<3;i++){
        for(var o =0;o<3;o++){
        board[i][o].push("hey");
console.log(board[i][o]);
        }

        }
    }

//         }}
//         if(compute.length ===5){
// console.log(computerMarker.length);
// console.log(playerMarker.length);
//         }       


    // function machine() {
    //     var RandomNumber = Math.floor(Math.random() * 8);
    //     console.log(compute.indexOf(ids[RandomNumber]));
    //     if (compute.indexOf(ids[RandomNumber]) === -1) {
    //         document.getElementById(`${ids[RandomNumber]}`).innerHTML = computerMarker;
    //         artificial.push(ids[RandomNumber]);
    //         compute.push(ids[RandomNumber]);
    //         return;
    //         checksWin();
    //     } else {
    //         machine();

    //         checksWin();
    //     }
    // }