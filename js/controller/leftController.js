angular.module('myApp').controller('leftController',['leftService','globalService',function( svc, gSvc){
   
    this.gSvc = gSvc;
    this.multiply = svc.multiply;

    // if(gSvc.total<10){
    //     this.color = 'GREY';
    // }else{
    //     this.color = 'WHITE';
    // }

}])