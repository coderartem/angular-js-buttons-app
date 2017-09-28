angular.module('myApp').service('topService',['globalService','$interval', function(gSvc,$interval){
  
    this.reset = () => {
        gSvc.total = 0;
        gSvc.addValue = 1;
        gSvc.clickersNumber = 0;
        gSvc.leftBtnColor = 'GREY';
        gSvc.rightBtnColor = 'GREY';
        gSvc.leftCost = 10;
        gSvc.rightCost = 100;
        gSvc.multiplier =1.2;

        gSvc.autoClickers.forEach((element) => {
            $interval.cancel(element);
        });
        gSvc.setAllCookies();
        gSvc.btnDisabled = true;
    }
}])