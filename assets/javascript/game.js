$(document).ready(function(){
    var config = {
      apiKey: "AIzaSyBx0Dm-tDBPq5qXxL0xT7TnE8BKMsI6VAk",
      authDomain: "traindatabase-7ea50.firebaseapp.com",
      databaseURL: "https://traindatabase-7ea50.firebaseio.com",
      projectId: "traindatabase-7ea50",
      storageBucket: "",
      messagingSenderId: "142235789754"
    };

    $("#trainButton").click(function(event){
        var trainName = $("#trainName").val().trim();
        var destination = $("#destination").val().trim();
        var firstArrival = $("#firstArrival").val().trim();
        var frequency = $("#frequency").val().trim();

    });
});