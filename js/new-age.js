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

var AppRecommender = function () {

    var websiteImage = document.getElementById('recommend-image');
    console.log(HasParentalControls());
    if (HasParentalControls() === 'yes') {
        alert('yes');
    } else if (HasParentalControls() === 'no') {
        alert('no');
    }
}();

var HasParentalControls = function () {
    return QueryString.questionOne;
}

var BlockTextingOrEducate = function () {
    return QueryString.questionTwo;
}

var BlockCommunicationOrReduceDistractions = function () {
    return QueryString.questionThree;
}