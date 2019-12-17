import{ajax,jstool,$} from "./tool.js";
class Tab{
    constructor(){
        //获取初始化城市“杭州市”
        this.initCity=$(".position-city");
        //获取tab切换盒子
        this.tabBox=$(".tab-top-nav");
        //获取关闭窗口X
        this.close=$(".close");
        //获取省份和城市按钮
        this.btn=document.querySelectorAll('.btn')
        //获取切换的项目list
        this.items=document.querySelectorAll('.tab-item');

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
    }
    cOpen(){
        this.tabBox.style.display='block';
    }
    cClose(){
        this.tabBox.style.display='none';
    }
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
}
export{Tab}