class Topsus {
    constructor() {
        //获取需要顶部悬浮的导航
        this.headerNav = document.querySelector("#header-mainnav");
        //获取banner图
        this.banner = document.querySelector("#banner");

    }
    init() {
        this.scroll();
    }
    //滚轮事件
    scroll() {
        let _this = this;
        document.onscroll = function () {
            //存储滚动条的top值
            let scrolltop = document.documentElement.scrollTop;
            let timer = null;
            let speed=0;
            clearInterval(timer);
            timer = setInterval(() => {
                speed+=1;
                //判断悬浮的条件
                if (scrolltop > 170) {
                    _this.headerNav.style.cssText = "position:fixed;top:-43px;left:0;z-index:10;box-shadow: 0 1px 3px 0 #a7a7a7;";
                    _this.banner.style.cssText = "margin-top:43px;";
                    //改变导航的位置
                    _this.headerNav.style.top =_this.headerNav.offsetTop + speed + 'px';
                    //清除定时器
                    if(_this.headerNav.offsetTop>=0){
                        clearInterval(timer);
                    }
                }else{
                    clearInterval(timer);
                    _this.headerNav.style.cssText="";
                    _this.banner.style.cssText="";
                }
            }, 1000 / 60)
        }
    }
}
export { Topsus };