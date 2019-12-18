import{ajax,jstool,$} from "./tool.js";
class Tab{
    constructor(){
        //获取初始化城市“杭州市”
        this.initCity=$(".position-city p");
        //获取tab切换盒子
        this.tabBox=$(".tab-top-nav");
        //获取关闭窗口X
        this.close=$(".close");
        //获取省份和城市按钮
        this.btn=document.querySelectorAll('.btn')
        //获取切换的项目list
        this.items=document.querySelectorAll('.tab-item');
        //获取具体的省份/城市
        this.placeList=document.querySelectorAll(".tab-item ul li a");

    }
    init(){
        let _this=this;
        this.initCity.onclick=function(){
            _this.cOpen();
        }
        this.close.onclick=function(){
            _this.cClose();
        }
        this.cBtn();
        this.over();
    }
    //tab切换的盒子显示-->点击杭州市
    cOpen(){
        this.initCity.style.cssText="background:#fff;border-left:1px solid #ccc;border-right:1px solid #ccc;"
        this.tabBox.style.display='block';
    }
    //tab切换的盒子关闭-->点击X
    cClose(){
        this.initCity.style.cssText="background: #f5f5f5;border:0"
        this.tabBox.style.display='none';
    }
    //省份/城市的切换-->点击省份/城市
    cBtn(){
        let _this=this;
        for(let i=0;i<this.btn.length;i++){
            this.btn[i].onclick=function(){
                for(let j=0;j<_this.btn.length;j++){
                    _this.btn[j].className="btn";
                    _this.items[j].className="tab-item";
                }
                _this.btn[i].className="btn checked";
                _this.items[i].className="tab-item show";
            }
        }
    }
    //鼠标移入地区
    over(){
        let _this=this;
        for(let i=0;i<this.placeList.length;i++){
            this.placeList[i].onmouseover=function(){
                //清除移入后的样式
                for(let j=0;j<_this.placeList.length;j++){
                    _this.placeList[j].style="none";
                }
                //判断是否是默认选中的地区
                if(_this.placeList[i].className==='active'){
                    _this.placeList[i].style.cssText="color:#fff;border:1px solid #f10108;";
                }else{
                    _this.placeList[i].style.cssText="border:1px solid #f10108;color:#f10108";
                    //点击正在移入的地区
                    this.onclick=function(){
                        //选中的地区（宁波市）给初始化地区（杭州市）
                        _this.initCity.innerHTML=_this.placeList[i].innerHTML;
                        //弹出选中的地区-->宁波市
                        alert(_this.placeList[i].innerHTML);
                        //tab切换框隐藏
                        _this.tabBox.style.display="none";
                        _this.initCity.style.cssText="background: #f5f5f5;border:0"
                    }
                }
            }
        }
    }
}
export{Tab}