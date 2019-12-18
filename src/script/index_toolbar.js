import { ajax, jstool, $, siblings, bufferMove, double } from "./tool.js";
class Toolbar{
    constructor(){
    }
    init(){
        //创建toolbar盒子
        this.cDiv();
    }
    cDiv(){
        let height=document.documentElement.clientHeight;
        //创建toolbar盒子
        const toolBox=document.createElement("div");
        //盒子的样式
        toolBox.style.cssText=`
            width:36px;
            height:${height}px;
            background:pink;
            position:fixed;
            right:0;
            top:0;
        `
        //添加到body
        document.body.appendChild(toolBox);
        console.log(toolBox);
        let htmlstr='';
        htmlstr+=`
            <ul>
                <li><li>
                <li><li>
            </ul>
            <ul>
                <li></li>
                <li></li>
            <ul>
        `;
        toolBox.innerHTML+=htmlstr;
        toolBox.children[0].style.cssText=`
            width:36px;
            height:390px;
            position:absolute;
            top:30%;
            left:0;
            background:skyblue;
        `
        toolBox.children[1].style.cssText=`
            width:36px;
            height:88px;
            position:absolute;
            bottom:0;
            left:0;
            background:skyblue;
        `
    }
}
export{Toolbar}