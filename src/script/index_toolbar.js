import { ajax, jstool, $, siblings, bufferMove, double } from "./tool.js";
class Toolbar{
    constructor(){
        //获取工具栏
        this.toolbox=$("#toolbar");
        //获取li
        this.toolList=document.querySelectorAll("#toolbar .c-list");
        console.log(this.toolList);
        //获取账号
        this.userTool=$("#toolbar .user-infor-box");
        //获取隐藏盒子
        this.hideBox=document.querySelectorAll("#toolbar .c-list .hidebox");
        //获取回到顶部
        this.backTop=$("#toolbar .backtop");
    }
    init(){
        //改变工具栏的高度-->可视区的高
        //可视区的高-->document.documentElement.clientHeight
        this.toolbox.style.height=document.documentElement.clientHeight+'px';
        this.size();
        this.newStyle();
        this.back();
    }
    //浏览器窗口触发事件-->window.onsize()
    size(){
        let _this=this;
        window.onresize=function(){
            _this.toolbox.style.height=document.documentElement.clientHeight+'px';
        }
    }
    //鼠标经过li改变样式
    newStyle(){
        let _this=this;
        for(let i=0;i<this.toolList.length;i++){
            //鼠标移入改变背景颜色
            this.toolList[i].onmouseenter=function(){
                //清除被改变的背景颜色
                for(let j=0;j<_this.toolList.length;j++){
                    _this.toolList[j].style.background="";
                }
                _this.toolList[i].style.background="#df147f";
                bufferMove(_this.hideBox[i],{"right":30});

            }
            //鼠标移出清除背景颜色
            this.toolList[i].onmouseleave=function(){
                _this.toolList[i].style.background="";
                bufferMove(_this.hideBox[i],{"right":-200});
            }
        }
    }
    //回到顶部
    back(){
        this.backTop.onclick=function(){
            document.documentElement.scrollTop=0;
        }
    }
}
export{Toolbar}