
function errorhandler (err, obj) {
    //a global error handler
    console.error(err, obj);
}

var app = angular.module("quiz-app", []);

app.controller("QuizCtrl", function ($scope, $sce, $http) {
  //$scope represents your model ... everything that could be bound to the view should be in your $scope variable
  $scope.quizzes = [];

  $scope.selectQuiz = function (index) {
     $scope.selectedQuiz = $scope.quizzes[index];
     //get the json data from the selected quiz url
     $http.get($scope.selectedQuiz.dataUrl).success(function (response) {
        // makes an http request to get the quiz json and binds the result object to $scope.quiz
        $scope.quiz = response;
        console.log(response);
     }).error(errorhandler); 
  }

  $http.get("quiz_lib/quiz-choices.json").success(function (response) {
     $scope.quizzes = response;
     $scope.selectedQuiz = $scope.quizzes[0];
     console.log(response);
  }).error(errorhandler); 

});
