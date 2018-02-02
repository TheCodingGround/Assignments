    var compute = [];
    var arr = [];
    var marker = "";
    function selctor() {
        marker = prompt("choose your marker")
    }
    var identity = "";
    function boxes(edenti) {
        if (marker.length > 1 && (marker !== "x" || marker !== "o")) {
            identity = "";
            alert("please select one character be it X or O ");
            window.location.reload(true);
            document.getElementById(edenti).innerHTML = "";
        } else {
            console.log(marker)
            identity = document.getElementById(edenti).innerHTML;
            console.log(identity);
            identity = "";
            document.getElementById(edenti).innerHTML = marker;
            if (arr.indexOf(edenti) === -1) {
                compute.push("O");
                arr.push(edenti);

            }
            console.log(compute);
            console.log(arr.indexOf(edenti));
            switch (edenti) {
                case "boxone1":
                    console.log(document.getElementById("boxone1").value);
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone9").innerHTML = "o"
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone2":
                    if (arr.indexOf(edenti) !== -1 && compute.indexOf("o") === arr.indexOf(edenti)) {
                        document.getElementById("boxone3").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone3":
                    if (arr.indexOf(edenti) !== -1) {
                        console.log(arr.indexOf(edenti));
                        document.getElementById("boxone2").innerHTML = "o";
                        console.log(arr);

                    }
                    break;
                case "boxone4":
                    if (arr.i === "boxone4") {
                        document.getElementById("boxone3").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    } console.log(typeof edenti);
                    break;
                case "boxone5":
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone4").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone6":
                    if (arr.indexOf(edenti) !== -1) {
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    } document.getElementById("boxone5").innerHTML = "o";
                    console.log(compute.indexOf("o"));
                    break;
                case "boxone7":
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone6").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone8":
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone7").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone9":
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone8").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                default: break;
            }
        }
    }
    var compute = [];
    var arr = [];
    var marker = "";
    function selctor() {
        marker = prompt("choose your marker")
    }
    var identity = "";
    function boxes(edenti) {
        if (marker.length > 1 && (marker !== "x" || marker !== "o")) {
            identity = "";
            alert("please select one character be it X or O ");
            window.location.reload(true);
            document.getElementById(edenti).innerHTML = "";
        } else {
            console.log(marker)
            identity = document.getElementById(edenti).innerHTML;
            console.log(identity);
            identity = "";
            document.getElementById(edenti).innerHTML = marker;
            if (arr.indexOf(edenti) === -1) {
                compute.push("O");
                arr.push(edenti);

            }
            console.log(compute);
            console.log(arr.indexOf(edenti));
            switch (edenti) {
                case "boxone1":
                    console.log(document.getElementById("boxone1").value);
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone9").innerHTML = "o"
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone2":
                    if (arr.indexOf(edenti) !== -1 && compute.indexOf("o") === arr.indexOf(edenti)) {
                        document.getElementById("boxone3").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone3":
                    if (arr.indexOf(edenti) !== -1) {
                        console.log(arr.indexOf(edenti));
                        document.getElementById("boxone2").innerHTML = "o";
                        console.log(arr);

                    }
                    break;
                case "boxone4":
                    if (arr.i === "boxone4") {
                        document.getElementById("boxone3").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    } console.log(typeof edenti);
                    break;
                case "boxone5":
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone4").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone6":
                    if (arr.indexOf(edenti) !== -1) {
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    } document.getElementById("boxone5").innerHTML = "o";
                    console.log(compute.indexOf("o"));
                    break;
                case "boxone7":
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone6").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone8":
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone7").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                case "boxone9":
                    if (arr.indexOf(edenti) !== -1) {
                        document.getElementById("boxone8").innerHTML = "o";
                        console.log(arr.indexOf(edenti));
                        console.log(arr);
                    }
                    break;
                default: break;
            }
        }
    }
