   var totals = "";
        function zero() {
            document.getElementById("total").innerHTML += "0";
        }
        function one() {
            document.getElementById("total").innerHTML += "1";
        }
        function two() {
            document.getElementById("total").innerHTML += "2";
        }
        function three() {
            document.getElementById("total").innerHTML += "3";
        } function cancel() {
            document.getElementById("total").innerHTML += "0";
        } function dot() {
            document.getElementById("total").innerHTML += ".";
        }

        function four() {
            document.getElementById("total").innerHTML += "4";
        }
        function five() {
            document.getElementById("total").innerHTML += "5";
        }
        function six() {
            document.getElementById("total").innerHTML += "6";
        }
        function seven() {
            document.getElementById("total").innerHTML += "7";
        }
        function eight() {
            document.getElementById("total").innerHTML += "8";
        }
        function nine() {
            document.getElementById("total").innerHTML += "9";
        }
        function plus() {
            document.getElementById("total").innerHTML += "+";
        }
        function subraction() {
            document.getElementById("total").innerHTML += "-";
        }
        function divide() {
            document.getElementById("total").innerHTML += "/";
        }
        function multiply() {
            document.getElementById("total").innerHTML += "*";
        }
        function equals() {
            document.getElementById("total").innerHTML += "=";
        } function multiply() {
            document.getElementById("total").innerHTML += "*";
        } function minus() {
            document.getElementById("total").innerHTML += "-";
        }
        function total() {
            var totals = document.getElementById("total").innerHTML;
            var sum = eval(totals);
            var filted = /(.)/g
            if (filted.test(sum) === false) {
                document.getElementById("total").innerHTML = "syntaxErr";
            }
            else {
                document.getElementById("total").innerHTML = sum;
            }

        }
        function del() {
            document.getElementById("total").innerHTML = '';
        }

        function gid() {
            var id = document.getElementById("total");
            var value = id.value;
            console.log(value);
            value = value.substring(0, value.length - 1);
            id.innerHTML = value;


        }
        // document.getElementById("total").innerHTML = totals;
        // console.log(totals)