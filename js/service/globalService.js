angular.module('myApp').service('globalService', ['$cookies',function($cookies){
    
    this.total;
    this.addValue;
    this.multiplier;
    this.autoClickers = [];
    this.clickersNumber;
    this.leftBtnColor;
    this.rightBtnColor;
    this.btnDisabled;
    this.leftCost;
    this.rightCost;


    this.btnsColorSetUp = () => {
        if(this.total> this.leftCost){
            this.leftBtnColor = 'WHITE';
        }else{
            this.leftBtnColor = 'GREY';
        }
        if(this.total>this.rightCost){
            this.rightBtnColor = 'WHITE';
        }else{
            this.rightBtnColor = 'GREY';
        }
    }


    //----------------------------------------------------------------------
    //Cookies

    this.getCookie = (cname) => {
        return $cookies.get(cname);
    }

    this.checkCookie = (name, startValue=0) => {
        let temp = this.getCookie(name);
        let param;
             if (temp != NaN) {
                  param=Number(temp);
            } else {
                param=startVal;
            }
            return param;
    }

    this.setCookie = (name,val) => {
        $cookies.put(name, val);
    }
        this.setAllCookies = () =>{
            this.setCookie('total', this.total);
            this.setCookie("addValue", this.addValue);
            this.setCookie("clickersNumber", this.clickersNumber);
            this.setCookie("leftCost", this.leftCost);
            this.setCookie("rightCost", this.rightCost);
            this.setCookie('multiplier',this.multiplier);
        }
        this.total = this.checkCookie('total');
        this.addValue = this.checkCookie('addValue', 1);
        this.clickersNumber = this.checkCookie('clickersNumber');
        this.leftCost = this.checkCookie('leftCost', 10);
        this.rightCost = this.checkCookie('rightCost', 100);
        this.multiplier = this.checkCookie('multiplier', 1.2);

        //-----------------------------------------------------------------------

        if(this.total===0 && this.addValue===1 && this.clickersNumber===0){
            this.btnDisabled = true;
        }
        this.btnsColorSetUp();
}])