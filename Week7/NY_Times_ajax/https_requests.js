
$(document).ready(function () {



    var q = "trump", limit = 5;




    $("#submit").on("click", function (event) {
        event.preventDefault();
        $("#main").empty();
        var q = $("#q").val();
        var limit = $("#limit").val();
        var start_year = $("#start").val();
        var end_year = $("#end").val();

        console.log(q, limit, start_year, end_year);



        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=e3d19322beb947e0b5729bfcde5a2fb7&q=" + q;

        if (start_year) {
            queryUrl += "&begin_date=" + start_year + "0101";
        }
        if (end_year) {
            queryUrl += "&end_date=" + end_year + "0101";
        }
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (data) {

            var thing = data.response.docs;

            for (var i = 0; i < limit; i++) {

                console.log(thing[i].headline.main);
                var newDiv = $("<div>");
                newDiv.append('<p>' + (i + 1) + " " + thing[i].headline.main + '</p>')
                    .append('<p>' + thing[i].byline.original + '</p>')
                    .append('<p>' + "Section: " + thing[i].section_name + '</p>')
                    .append('<p>' + thing[i].pub_date + '</p')
                    .append('<p><a href=' + thing[i].web_url + 'target="_blank">' + thing[i].web_url + '</a></p>');
                $("#main").append(newDiv);
                // console.log(i);
                // $("#main").append("test");
            }

        });
    });

});