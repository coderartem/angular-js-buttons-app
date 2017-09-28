angular.module('myApp').controller('rightController',['rightService','globalService',function(svc,gSvc){

    this.gSvc = gSvc;
    this.autoClicker = svc.autoClicker;
}])