angular.module('myApp').service('centerService', ['globalService',function(gSvc){

    this.addShit = () => {
        gSvc.total += gSvc.addValue;
        gSvc.btnsColorSetUp();
        gSvc.setAllCookies();
        gSvc.btnDisabled = false;
    }
}]);