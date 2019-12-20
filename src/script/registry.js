import { ajax, jstool, $, siblings, bufferMove, double } from "./tool.js";
class Registry{
    constructor(){
        //获取输入框
        this.aInp=document.querySelectorAll("input");
        console.log(this.aInp);
    }
    init(){
        this.user();
        
    }
    //用户名
    user(){
    
    }
}
new Registry().init();