function getsearch() {

                var shows = document.getElementById("shows").value;
                $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=' + shows + '&callback=?', function(data) {
                    console.log(data)
                    var whatWeneed = data[1];
                    var whatWened = data[2];
                    console.log(whatWened);
                    $('p').html(whatWeneed);
                    $('h').html(whatWened);
                });
            };