import { ajax, jstool, $, siblings, bufferMove, double } from "./tool.js";
class Search{
    constructor(){
        //获取搜索输入框
        this.inp=$(".c-search-box input");
        //获取搜索下发信息框
        this.infor=$(".search-infor");

    }
    init(){
        let _this=this;
        //输入框获得焦点
        this.inp.onfocus=function(){
            _this.infor.style.display="block";
        }
        //输入框失去焦点
        this.inp.onblur=function(){
            _this.infor.style.display="none";
        }
    }
}
export{Search}