// 轮播图
{
    let imgs=document.querySelectorAll(".banner-list li");
    let box=document.querySelector(".banner");
    let n=0;
    let zidong=function (value,index) {
        n++;
        if(n===imgs.length){
            n=0
        }
        imgs.forEach(function (val,i) {
            val.classList.remove("active")
        });
        imgs[n].classList.add("active")
    };
    let sj=setInterval(zidong,1000);
    box.onmouseover=function () {
        clearInterval(sj);
    };
    box.onmouseout=function () {
        sj=setInterval(zidong,1000);
    };
    let prev=document.querySelector(".banner-left");
    let next=document.querySelector(".banner-right");
    prev.onclick=function () {
        console.log(1);
        n--;
        if(n===-1){
            n=imgs.length-1
        }
        imgs.forEach(function (val,i) {
            val.classList.remove("active")
        });
        imgs[n].classList.add("active")
    };
    next.onclick=function () {
        zidong()
    }
}
//选项卡
let lis=document.querySelectorAll('.jiadian .b');
let img=document.querySelectorAll('.jiadiankuang1');
lis.forEach(function(val,index){
    val.onmouseover=function() {
        lis.forEach(function (a, b) {
            a.classList.remove('active');
            img[b].classList.remove('active1');
        });
        val.classList.add('active');
        img[index].classList.add('active1');
    }
})