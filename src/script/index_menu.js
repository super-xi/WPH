
class Menu{
    constructor(){
        this.menu2Ul=document.querySelector(".menu-nav2-list");
        this.menu2Cate=document.querySelector(".menu-nav2-cate");
    }
    init(){
        let _this=this;
        this.menu2Ul.onmouseover=function(){
            _this.over();
        }
        this.menu2Ul.onmouseout=function(){
            _this.out();
        }
    }
    over(){
        this.menu2Cate.style.display="block";
    }
    out(){
        this.menu2Cate.style.display="none";
    }
}
export{Menu};