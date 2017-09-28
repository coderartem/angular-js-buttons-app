angular.module('myApp').service('globalService',[function(){
    
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
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        
        this.checkCookie = (name, startVal=0)=> {
            let temp =this.getCookie(name);
            let param;
            if (temp != NaN) {
                param=Number(temp);
            } else {
                param=startVal;
            }
            return param;
        }
        
        this.setCookie = (paramName,val)=>{
            document.cookie = paramName +"="+val+";path=/";
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