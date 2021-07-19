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
