angular.module('myApp').service('leftService',['globalService', function(gSvc){
   
    this.color = 'GREY';

    this.multiply = () => {
        if(gSvc.total>gSvc.leftCost){
            gSvc.total-=gSvc.leftCost;
            gSvc.leftCost+=10;
            gSvc.addValue *= gSvc.multiplier;
            gSvc.multiplier+=0.2;
            gSvc.btnsColorSetUp();
            gSvc.setAllCookies();
            gSvc.btnDisabled = false;
        }
    }
}])