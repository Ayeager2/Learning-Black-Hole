/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {

    $("#dialog").dialog(
        {
            autoOpen: false,
            modal: true,
            resizable: false,
            draggable: false,
            position: "top",
            buttons: {
                "Yes, I do!": function () {
                    $("#dialog").dialog("close");
                    $("#dialogDecision").text("Yes you did!!");
                },
                "No": function () { }
            }
        }
     );

    $("#openDialog").click(function () {
        $("#dialog").dialog("open");
    });

    //$("#progress").progressbar({ value: 60 });

    $("#progress").progressbar({ value: 0 });

    var value = 0;
    var experiencePoints =0;
    countdown();

    function countdown() {
        value++;
        $("#progress").progressbar("option", "value", value);
        $("#countdown").text(value);

        if (value < 100) {
            setTimeout(countdown, 10);
        }
        else {
            $("#countdown").text("completed");
            value = 0;
            experiencePoints++;
            $("#experience").text(experiencePoints);
            countdown();
        }
    }

    $("#slider").slider({ min: 0, max: 100, value: 100, slide: function (event, ui) {
        $("#slider").prev().css({ opacity: ui.value / 100 });
    }
    });

    $("#tabs").tabs();

    $("#accordian").accordion({autoHeight: false, collapsible: true,
    change: function (event, ui) {
        console.log(event);
        console.log(ui);
      }
    });
    $("#accordian").accordion("activate",0);

    var classes = [
        "C#",
        "LINQ",
        "Entity Framework",
        "ASP .NET MVC",
        "jQuery UI",
        "CSS",
        "JQuery",
        "JavaScript",
        "Test driven development",
        "Design patterns",
    ]
    $("#search").autocomplete({
        source: classes,
        // source: "autocompletejason.ashx"
    });

});
