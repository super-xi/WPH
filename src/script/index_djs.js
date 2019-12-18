import { ajax, jstool, $, siblings, bufferMove, double } from "./tool.js";
class Djs {
    constructor() {
        //获取倒计时盒子
        this.djsBox = document.querySelector(".shop-title-time");
        //获取小时
        this.hour = document.querySelector(".shop-title-time .hour");
        //获取分钟
        this.minute = document.querySelector(".shop-title-time .minute");
        //获取秒
        this.second = document.querySelector(".shop-title-time .second");

    }
    init() {
        let _this=this;
        this.djsHour();
        this.djsMins();
        this.djsSecs();
        this.hour.innerHTML=this.djsHour();
        this.minute.innerHTML=this.djsMins();
        this.second.innerHTML=this.djsSecs();
        //开定时器倒计时
        setInterval(()=>{
            //赋值时间
           _this.hour.innerHTML=_this.djsHour();
           _this.minute.innerHTML=_this.djsMins();
           _this.second.innerHTML=_this.djsSecs();
        },1000) 
    }
    djsHour(){
        //设置未来时间/获取当前时间
        const furtime = new Date('2019.12.25 00:00:00');
        let nowtime = new Date();
        //未来时间-当前时间
        let time = parseInt((furtime - nowtime) / 1000);
        let hours = parseInt(time % 86400 / 3600)//时
        return double(hours);
    }
    djsMins(){
        //设置未来时间/获取当前时间
        const furtime = new Date('2019.12.19 00:00:00');
        let nowtime = new Date();
        //未来时间-当前时间
        let time = parseInt((furtime - nowtime) / 1000);
        let mins = parseInt(time % 86400 % 3600 / 60)//分
        return double(mins);
    }
    djsSecs(){
        //设置未来时间/获取当前时间
        const furtime = new Date('2019.12.19 00:00:00');
        let nowtime = new Date();
        //未来时间-当前时间
        let time = parseInt((furtime - nowtime) / 1000);
        let secs = time % 60//秒 
        return double(secs);
    }
}
export { Djs };