        function checksforNumbertype(numbers = 51) {
            var isEvenOrOdd = "";
            var result = "";
            for (var i = 0; i < numbers; i++) {

                if (i % 2 == 0) {
                    isEvenOrOdd = `${i} is even \n`;
                } else {
                    isEvenOrOdd = `${i} is odd \n`;
                }

                result += isEvenOrOdd;

            }
            return result;
        }
        console.log(checksforNumbertype());