
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
            recommenderLink.src = "https://www.itcanwait.com";
    }
};

var incrementNumber = 0    
var FactCarousel = function () {
    var factArray = [
        ["Drivers ages 20–24 years old made up the highest number of distracted driving crashes.", "- National Highway Transportation Safety Administration"],
        ["Distracted driving remains one of the most underreported traffic incidents.","- National Highway Transportation Safety Administration"],
        ["1,600,000 accidents per year are caused by texting while driving.", "- National Safety Council"],
        ["Texting while driving slows your brake reaction speed by 18%.","- Human Factors & Ergonomics Society"],
        ["Texting while driving is the same as driving after 4 beers.","- National Highway Transportation Safety Administration"],
        ["Texting while driving is the same as driving blind for 5 seconds at a time."," – VA. Tech Transportation Institute"],
        ["11 teens die every day as a result of texting and driving.", "– Insurance Institute for Highway Safety Fatality Facts"],
        ["Texting while driving makes you 23 times more likely to crash.","– National Highway Transportation Safety"],
        ["Texting while driving results in 330,000 injuries per year","– Harvard Center for Risk Analysis Study"],
        ["Texting while driving is the number one distraction reported by teens.", "– National Safety Council"],
        ["Students who frequently text while driving are more likely to ride with a drunk driver, or drink and drive themselves.","-  Youth Risk Behavior Surveillance System"],
        ["Texting while driving causes nearly 25% of ALL car accidents.", "- National Highway Transportation Safety Administration"]
    ];

    setInterval(function () {
        var randomFact = factArray[incrementNumber][0];
        var factAttribution = factArray[incrementNumber][1];

        $('#fact-text').text(randomFact);
        $('#attribute-quote').text(factAttribution);

        $('#did-you-know-container').slideUp(400).slideDown(400);

        $('#fact-text').fadeOut(1, function() {
            $('#fact-text').text(randomFact);
        }).fadeIn(1000);

        $('#attribute-quote').fadeOut(1, function() {
            $('#attribute-quote').text(factAttribution);
        }).fadeIn(1000);
        
        if (incrementNumber === factArray.length - 1) {
            incrementNumber = 0;
        } else {
            incrementNumber++;
        }
    }, 4000)
}();