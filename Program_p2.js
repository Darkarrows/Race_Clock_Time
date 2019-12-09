var firstspur = 7;
var noon = 12;
var secondspur = 12;
var thirdspur = secondspur + 2;
var racetime;
var evening = 18;

// First getting to show the current time.
var showCurrentTime = function()
{
    // Displaying the string to the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Now to set the hours
    if (hours >= noon)
    {
        meridian = "PM";
    }

    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Setting the minutes up
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to update, as well as change the image
var updateClock = function() 
{
    var time = new Date().getHours();
    var messageText;
    var image = "https://images.wisegeek.com/yellow-race-car-on-the-track.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var carImageJS = document.getElementById("carImages");
 
    if (time == racetime)
    {
        image = "https://images.cdn.circlesix.co/image/5/1972/1035/8/380/1200/630/uploads/posts/2016/01/lola-aston_martin_dbr1-2-568bb6d981860.jpg";
        messageText = "Time to Race!";
    }
    else if (time == firstspur)
    {
        image = "https://images.carscoops.com/2011/03/88053fd1-bmw-m3-14.jpg";
        messageText = "Time for First Spur!";
    }
    else if (time == secondspur)
    {
        image = "https://pictures.topspeed.com/IMG/crop/201307/2014-bentley-continental--2_1600x0w.jpg";
        messageText = "Time for the second spur!";
    }
    else if (time == thirdspur)
    {
        image = "https://nzmotorracing.co.nz/wp-content/uploads/2016/07/BMW-Series-2016.jpg";
        messageText = "Time for the third spur!";
    }
    else if (time < noon)
    {
        image = "http://s3.amazonaws.com/scardigest/wp-content/uploads/1969-chevrolet-corvette-zl1-bfg-49-race-car.jpg";
        messageText = "It's time for the morning race!";
    }
    else if (time >= evening)
    {
        image = "https://www.virginexperiencedays.co.uk/content/img/product/large/drive-silverstone-racing-car-30082747.jpg";
        messageText = "It's already Noon!";
    }
    
    console.log(messageText);
    timeEventJS.innerText = messageText;
    carImageJS.src = image;
  
    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval (updateClock, oneSecond)


// Getting the Party  Button to Work
var raceButton = document.getElementById("RaceButton");

var raceEvent = function()
{
    if (racetime < 0)
    {
        racetime = new Date().getHours();
        raceButton.innerText = "Race Over!";
        raceButton.style.backgroundColor = "#OA8DAB";
    }
    else
    {
        racetime = -1;
        raceButton.innerText = "Race Time!";
        raceButton.style.backgroundColor = "#222";
    }
};

raceButton.addEventListener("click", raceEvent);
raceEvent();

// Activates First Race Selector
var FirstSpurSelector = document.getElementById("firstTimeSplit");

var firstSpurEvent = function()
{
    firstSpur = FirstSpurSelector.value;
};

FirstSpurSelector.addEventListener("change" , firstSpurEvent);

// Activates Second Spur selector
var secondSpurSelector =  document.getElementById("secondTimeSplit");

var secondSpurEvent = function()
{
    secondSpur = secondSpurSelector.value;
};

secondSpurSelector.addEventListener("change", secondSpurEvent);


// Activates Third Spur selector
var thirdSpurSelector =  document.getElementById("thirdTimeSplit");

var thirdSpurEvent = function()
{
    thirdSpur = thirdSpurSelector.value;
};

thirdSpurSelector.addEventListener("change", thirdSpurEvent);