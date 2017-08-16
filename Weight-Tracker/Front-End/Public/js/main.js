var WeightTracker = angular.module("WeightTracker", [])
    .controller("weightTracker", weightTracker);


function weightTracker() {

    var weight = this;

    var weightStatsLocal = [];

    weight.newStats = {};

    weight.weightHistory = JSON.parse(window.localStorage.getItem("weightHistory")) || []; //Pulling local storage of data

    console.log("Weight History: ", weight.weightHistory);

    weight.greeting = "Welcome to the weight tracker!"

    weight.submitClicked = function () {

        console.log("Submit clicked");

        var newDate = "";

        var newWeight = "";

        newDate = document.getElementById("date").value;

        newWeight = document.getElementById("weight").value;

        document.getElementById("date").value = ""

        document.getElementById("weight").value = ""


        if (weight.newStats.date && weight.newStats.weight) {

            console.log(weight.newStats.weight);
            console.log(weight.newStats.date);

            weight.weightHistory.push(weight.newStats);

            weight.newStats = {};

            console.log("New Weight History: ", weight.weightHistory);

            var weightHistory = angular.copy(weight.weightHistory) //Copy local storage of data

            weightHistory.forEach(function (weight) {

                delete weight.$$hashKey;

            })

            window.localStorage.setItem("weightHistory", JSON.stringify(weightHistory));

        } else {

            console.log("Else statement hit")

        }

    }

}
