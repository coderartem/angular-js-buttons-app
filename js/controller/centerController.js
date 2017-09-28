angular.module('myApp').controller('centerController', ['centerService','globalService', function(svc, gSvc){
    
    this.gSvc = gSvc;
    this.increase = svc.addShit;

}]);