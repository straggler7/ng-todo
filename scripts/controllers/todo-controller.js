// TodoController.js
angular.module('TodoApp').controller('TodoController', ['$scope', function($scope) {
  $scope.title = "Todo App";
  $scope.todos = [
    {todo: 'Buy Beer', done: false},
    {todo: 'Pay Rent', done: false},
    {todo: 'Go for a drive', done: false}
  ];
  $scope.totalTodos = $scope.todos.length;
  $scope.addTodo = function() {
    // console.log("todoText: " + $scope.todoText);
    if ($scope.todoText && $scope.todoText.length)
    $scope.todos.push({todo: $scope.todoText, done: false});
    $scope.todoText = "";
  };
}]);
