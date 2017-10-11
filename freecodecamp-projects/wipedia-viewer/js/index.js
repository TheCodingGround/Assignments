 function getInput() {
                var userName = document.getElementById("input").value;


                $(document).ready(function() {
                    $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/' + userName, function(data) {
                        console.log(data);
                        var status = data.status;
                        var followers = data.followers;
                        var update = data.updated_at;

                        console.log(followers);
                    });
                });

                $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp", function(data) {
                    var outputs = ` ${userName}  is online`;
                    var outpots = data.message;
                    console.log(data);
                    if (data.stream !== null) {
                        $("p").html(outputs);
                        $("p1").html(`and its currents status is ${status}`);
                        $("p2").html(`it has ${followers}followes`);
                        $("p3").html(`last updated at ${update}`);
                    } else {
                        $("p").html(userName + "" + "is offline");
                    }

                });
            }