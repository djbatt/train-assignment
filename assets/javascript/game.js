$(document).ready(function(){
    var config = {
      apiKey: "AIzaSyBx0Dm-tDBPq5qXxL0xT7TnE8BKMsI6VAk",
      authDomain: "traindatabase-7ea50.firebaseapp.com",
      databaseURL: "https://traindatabase-7ea50.firebaseio.com",
      projectId: "traindatabase-7ea50",
      storageBucket: "",
      messagingSenderId: "142235789754"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#trainButton").click(function(event){
        event.preventDefault();
        var trainName = $("#trainName").val().trim();
        var destination = $("#destination").val().trim();
        var firstArrival = $("#firstArrival").val().trim();
        var frequency = $("#frequency").val().trim();

        var userTrain = {
            trainName: trainName,
            destination: destination,
            firstArrival: firstArrival,
            frequency: frequency,
        }

        database.ref().push(userTrain);

        console.log(userTrain);

        document.getElementById("trainForm").reset();

        return false;
    });

    database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val());

        var trainName = childSnapshot.val().trainName;
        var destination = childSnapshot.val().destination;
        var firstArrival = childSnapshot.val().firstArrival;
        var frequency = childSnapshot.val().frequency;

        var firstArrivalMoment = moment(firstArrival, "HH:mm");
        console.log(firstArrivalMoment);
        var currentTime = moment().format("HH:mm")
        console.log(currentTime);
        var difference = moment().diff(moment(firstArrivalMoment), "minutes");
        console.log(difference);
        var remainingTime = difference % frequency;
        console.log(remainingTime);
        var minutesRemaining = frequency - remainingTime;
        console.log(minutesRemaining);
        var nextArrival = moment().add(minutesRemaining, "minutes").format("HH:mm");

        $("#trainTable").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutesRemaining + "</td></tr>");
    });
});