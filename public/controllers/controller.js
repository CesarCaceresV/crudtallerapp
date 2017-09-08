var myApp = angular.module('myApp', []);
myApp.controller('Appp', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller")
    $http.get('/contactlist').then(function(response){
        console.log("i got the data I required", response);
        $scope.contactlist = response.data;
    });
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist',$scope.contact).then(function(response){
            console.log(response);
        });
    };
}]);