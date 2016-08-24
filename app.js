
function errorHandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

var app = angular.module("quiz-app", [ui.bootstrap]);

app.controller("quiz-ctrl", function ($scope, $sce, $http) {

    $http.get("bc-19-quiz-application/quiz_lib/GoT-Quiz.json").success(function (response) {
        $scope.quiz = response;
        console.log(response);
    }).error(errorHandler);

});