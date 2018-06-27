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

        var firstArrivalMoment = moment(firstArrival, "hh:mm").subtract(1, "years");
        console.log(firstArrivalMoment);
        var currentTime = moment();
    });
});