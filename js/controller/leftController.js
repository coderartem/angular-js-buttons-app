angular.module('myApp').controller('leftController',['leftService','globalService',function( svc, gSvc){
   
    this.gSvc = gSvc;
    this.multiply = svc.multiply;
}])