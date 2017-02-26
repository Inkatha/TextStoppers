
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })
})(jQuery); // End of use strict

var QueryString = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var queryString = {};
    var query = window.location.search.substring(1);
    var variables = query.split('&');
    for (var i = 0; i < variables.length; i++) {
        var pair = variables[i].split('=');

        var parameterType = typeof queryString[pair[0]];

        if (parameterType === 'undefined') {
            queryString[pair[0]] = decodeURIComponent(pair[1]);
        } else if (parameterType === 'string') {
            var arr = [ queryString[pair[0]], decodeURIComponent(pair[1]) ]
            queryString[pair[0]] = arr;
        } else {
            queryString[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return queryString;
}();
// All recomendation code
var HasParentalControls = function () {
    var questionOne = $("input:radio[name='questionOne']:checked").val();
    return questionOne;
}

var BlockTextingOrEducate = function () {
    var questionTwo = $("input:radio[name='questionTwo']:checked").val();
    return questionTwo;
}

var BlockCommunicationOrReduceDistractions = function () {
    var questionThree = $("input:radio[name='questionThree']:checked").val();
    return questionThree;
}

$('#submit-button').click(function (e) {
    AppRecommender();
});

var AppRecommender = function () {

    var recommenderLink = document.getElementById("recommend-link");

    if (HasParentalControls() === 'yes' &&
        BlockTextingOrEducate() === 'blockTexting' &&
        BlockCommunicationOrReduceDistractions() === 'blockCommunication') {
            $('#recommend-image').fadeOut(400, function() { 
                $("#recommend-image").attr('src', 'img/app-photos/CellControl.PNG');
            })
            .fadeIn(400);
            recommenderLink.href = "https://www.cellcontrol.com";
    }
    else if (HasParentalControls() === 'yes' &&
        BlockTextingOrEducate() === 'blockTexting' &&
        BlockCommunicationOrReduceDistractions() === 'reduceDistractions') {
            $('#recommend-image').fadeOut(400, function() { 
                $('#recommend-image').attr('src', 'img/app-photos/DriveSafeMode.PNG');
            })
            .fadeIn(400);
            recommenderLink.href = "https://drivesafemode.com";
    }
    else if (HasParentalControls() === 'yes' &&
        BlockTextingOrEducate() === 'educate' &&
        BlockCommunicationOrReduceDistractions() === 'blockCommunication') {
            $('#recommend-image').fadeOut(400, function() { 
                $('#recommend-image').attr('src', 'img/app-photos/DriveSafeMode.PNG');
            })
            .fadeIn(400);
             recommenderLink.href = "https://drivesafemode.com";
    }
    else if (HasParentalControls() === 'yes' &&
        BlockTextingOrEducate() === 'educate' &&
        BlockCommunicationOrReduceDistractions() === 'reduceDistractions') {
            $('#recommend-image').fadeOut(400, function() { 
                $('#recommend-image').attr('src', 'img/app-photos/Focus.PNG');
            })
            .fadeIn(400);
             recommenderLink.href = "https://drivefocus.com";
    }
    else if (HasParentalControls() === 'no' &&
        BlockTextingOrEducate() === 'blockTexting' &&
        BlockCommunicationOrReduceDistractions() === 'blockCommunication'){
            $('#recommend-image').fadeOut(400, function() { 
                $('#recommend-image').attr('src', 'img/app-photos/TextBuster.PNG');
            })
            .fadeIn(400);
            recommenderLink.href = "https://shop.textbuster.com";
    }
    else if (HasParentalControls() === 'no' &&
        BlockTextingOrEducate() === 'blockTexting' &&
        BlockCommunicationOrReduceDistractions() === 'reduceDistractions') {
            $('#recommend-image').fadeOut(400, function() { 
                $('#recommend-image').attr('src', 'img/app-photos/TextBuster.PNG');
            })
            .fadeIn(400);
            recommenderLink.href = "https://shop.textbuster.com";
    }
    else if (HasParentalControls() === 'no' &&
        BlockTextingOrEducate() === 'educate' &&
        BlockCommunicationOrReduceDistractions() === 'blockCommunication') {
            $('#recommend-image').fadeOut(400, function() { 
                $('#recommend-image').attr('src', 'img/app-photos/DriveFirst.PNG');
            })
            .fadeIn(400);
             recommenderLink.href = "https://sprint-drivefirst.safely.com";
    }
    else if (HasParentalControls() === 'no' &&
        BlockTextingOrEducate() === 'educate' &&
        BlockCommunicationOrReduceDistractions() === 'reduceDistractions') {
            $('#recommend-image').fadeOut(400, function() { 
               $('#recommend-image').attr('src', 'img/app-photos/ItCanWait.PNG');
            })
            .fadeIn(400);
            RecommenderLink.src = "https://www.itcanwait.com";
    }
};