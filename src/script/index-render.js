import{ajax,jstool,$} from "./tool.js";
class Render{
    constructor(){
        this.todayGoods=$(".today-goods");
        this.wdressGoods=$(".wdress-goods");
        this.shoebagGoods=$(".shoebag-goods");
    }
    init(){
        this.renderToday();
        this.renderWdress();
        this.shoebag();
        //this.lazyload();
    }
    //每日精选品牌渲染
    renderToday(){
        let _this=this;
        ajax({
            url:'http://10.31.161.176/WPH/php/wphdata.php',
            dataType:'json'
        }).then(function(data){
            //console.log(data);//√
            let htmlstr='';
            for(let i=0;i<6;i++){
                htmlstr+=`
                <a href="./detail.html?sid=${data[i].sid}">
                    <div class="today-goods-detail">
                        <img src="${data[i].url}" alt="">
                        <div class="brand-info">
                            <span class="brand-name">${data[i].title}</span>
                            <div class="brand-discounts">
                                <span class="brand-discount">
                                    <span class="discount-num">${data[i].discount}</span>折起封顶
                                    <span class="discount-line">|</span>
                                    <p class="discount-text">部分商品折上${data[i].discount}起</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
                `
            }
            _this.todayGoods.innerHTML=htmlstr;
        })
    }
    //女装商品渲染
    renderWdress(){
        let _this=this;
        ajax({
            url:'http://10.31.161.176/WPH/php/wphdata.php',
            dataType:'json'
        }).then(function(data){
            let htmlstr='';
            for(let i=6;i<12;i++){
                htmlstr+=`
                <a href="./detail.html?sid=${data[i].sid}">
                    <div class="wdress-goods-detail">
                        <img src="${data[i].url}"
                            alt="">
                        <div class="brand-info">
                            <span class="brand-name">${data[i].title}</span>
                            <div class="brand-discounts">
                                <span class="brand-discount">
                                    <span class="discount-num">${data[i].discount}</span>折起
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
                `
            }
            _this.wdressGoods.innerHTML=htmlstr;
        })
    }
    //鞋包品牌渲染
    shoebag(){
        let _this=this;
        ajax({
            url:'http://10.31.161.176/WPH/php/wphdata.php',
            dataType:'json'
         }).then(function(data){
            let htmlstr='';
            for(let i=12;i<18;i++){
                htmlstr+=`
                <a href="./detail.html?sid=${data[i].sid}">
                    <div class="shoebag-goods-detail">
                        <img data-src="${data[i].url}" alt="">
                        <div class="brand-info">
                            <span class="brand-name">${data[i].title}</span>
                            <div class="brand-discounts">
                                <span class="brand-discount">
                                    <span class="discount-num">${data[i].discount}</span>折起
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
                `
            } 
            _this.shoebagGoods.innerHTML=htmlstr; 
            _this.lazyload();
         })
    }
    // //图片懒加载
    lazyload(){
        let _this=this;
        window.onscroll=function(){
            const imgs=document.querySelectorAll('.shoebag-goods-detail img');
            for(let i=0;i<imgs.length;i++){
                const img=imgs[i];
                if(img.offsetTop<document.documentElement.clientHeight+document.documentElement.scrollTop){
                    img.src=img.getAttribute("data-src");
                }
            }
        }
    }
}
export {Render};