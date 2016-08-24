
function errorHandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

var app = angular.module("quiz-app", [ui.bootstrap]);

app.controller("quiz-ctrl", function ($scope, $sce, $http) {
    $scope.quiz_list = [];

    $http.get("quiz_lib/GoT-Quiz.json").success(function (response) {
        $scope.quiz = response;
        console.log(response);
    }).error(errorHandler);

    $http.get("quiz_lib/quiz-choices.json").success(function (response) {
        $scope.quiz_list = response;
        console.log(response);
    }).error(errorHandler);

});

app.controller("quiz-choices", function ($scope, $sce, $http) {



});

// $scope.quiz-choices = []