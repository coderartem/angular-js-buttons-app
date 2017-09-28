angular.module('myApp').controller('topController', ['topService','globalService', function(/*$scope*/svc, gSvc/*,globalService*/){

    this.gSvc = gSvc;
    this.reset = svc.reset;
}])