angular.module('myApp').service('rightService',['globalService','$interval',function(gSvc, $interval){
    
    this.autoClicker = () => {
        if(gSvc.total>gSvc.rightCost){
            gSvc.clickersNumber++;
            gSvc.total-=gSvc.rightCost;
            gSvc.rightCost+=100;
            gSvc.autoClickers.push($interval(this.autoClick, 1000));
            gSvc.btnsColorSetUp();
            gSvc.setAllCookies();
            gSvc.btnDisabled = false;
        }
    }

    this.autoClick = () => {
        gSvc.total += gSvc.addValue;
        gSvc.btnsColorSetUp();
        gSvc.setAllCookies();
        gSvc.btnDisabled = false;
    }


    this.getClickers = () => {
        for(let x=0; x<gSvc.clickersNumber; x++){
            gSvc.autoClickers.push($interval(this.autoClick, 1000));
        }
    }

    this.getClickers();


}])