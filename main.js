// Set the date we're counting down to
var countDownDate = new Date("May 21, 2022 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdownDemo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownDemo").innerHTML = "Day Of The Conference";
    }
}, 1000);



$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 10) {
        $('.bottomMenu').fadeIn();
    } else {
        $('.bottomMenu').fadeOut();
    }

    if (y > 350) {
        $('.bottomMenu2').fadeIn();
    } else {
        $('.bottomMenu2').fadeOut();
    }

    if (y > 750) {
        $('.bottomMenu3').fadeIn();
    } else {
        $('.bottomMenu3').fadeOut();
    }
});