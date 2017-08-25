var body=document.body;
var topNav=document.getElementById("topNav");
var lunboBox=document.getElementById("lunboBox");
var leftBtn=document.getElementById("leftBtn");
var rightBtn=document.getElementById("rightBtn");
var liList=document.getElementsByClassName("liList");
var content1=document.getElementById("content1");
var close=document.getElementById("close");
var a = topNav.offsetHeight; 
var animated=false;//是否正在动画状态
var timer;//定时器
// function navfixed(){     //nav固定在浏览器上
//     if(body.scrollTop<=50){
//     	topNav.style.position="static";
//     }
//     else{
//     	topNav.style.position="fixed";
// 		topNav.style.top=0;
// 		topNav.style.left=0;
//     }
// }   
function navfixed(){

	var now=document.getElementsByClassName("on")[0];
	if(typeof now=="object"){
		now.className="liList";
	}
   //nav固定在浏览器上
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTop<=50){
    	topNav.style.position="static";
    }
    else{
    	topNav.style.position="fixed";
		topNav.style.top=0;
		topNav.style.left=0;
    }
    var x0=document.getElementById("topBox").offsetTop;
	var x1=document.getElementById("content1").offsetTop;
	var x2=document.getElementById("produce").offsetTop;
	var x3=document.getElementById("content2").offsetTop;
	var x4=document.getElementById("foot").offsetTop;
	var x5=document.getElementById("foot1").offsetTop; 
	
	if(scrollTop>=0&&scrollTop<x1){
		liList[0].className="liList on";
	}
	else if(scrollTop>=x1&&scrollTop<x2){
		liList[1].className="liList on"; 
	}
	else if(scrollTop>=x2&&scrollTop<x3){
		liList[2].className="liList on"; 
	}
	else if(scrollTop>=x3&&scrollTop<x4){
		liList[3].className="liList on"; 
	}
	else if(scrollTop>=x4&&scrollTop<x5){
		liList[4].className="liList on"; 
	}
	else if(scrollTop>=x5){
		liList[5].className="liList on"; 
	}
		

} 
function motaikuang(){
	close.style.visibility="visible";
	var sHeight=document.documentElement.scrollHeight;//获取页面高度和宽度
	var sWidth=document.documentElement.scrollWidth;
	var wHight=document.documentElement.clientHeight;//获取可视页面高度
	motai=document.createElement("div");
	var tupian=document.createElement("div");
	motai.appendChild(tupian);
	content1.appendChild(motai);
	motai.setAttribute("id","showBox");
	tupian.setAttribute("class","tupian");
	motai.style.height=sHeight+"px";  
	motai.style.width=sWidth+"px";

}
function closeWin(){
   content1.removeChild(motai);
   close.style.visibility="hidden";
}

function animate(distance,minLeft,maxLeft){                            //轮播动画函数
	animated=true;
	var newLeft=parseInt(lunboBox.style.left)+distance;
	var time=300;//位移总时间
	var interval=10;//位移间隔时间
	var speed=distance/(time/interval);//每次位移量
	function go(){
		if((speed<0&&parseInt(lunboBox.style.left)>newLeft)||(speed>0&&parseInt(lunboBox.style.left)<newLeft)){
			lunboBox.style.left=parseInt(lunboBox.style.left)+speed+"px";
			setTimeout(go,interval);
		}
		else{
			animated=false;
			lunboBox.style.left=newLeft+"px";
			if(newLeft<minLeft){
				lunboBox.style.left=-1200+"px";
			}
			if(newLeft>maxLeft){
				lunboBox.style.left=-4800+"px";
			}
		}
	}
	go();
}
function player(){         //自动播放函数
	timer=setInterval(function(){
		rightBtn.onclick();
	},1000);
}
function stop(){    //播放停止
	clearInterval(timer);
}



//事件的触发
body.onscroll=function(){     //滚动条事件
	navfixed();
    // listenerNav();
}
lunboBox.onclick=function(){
	motaikuang();
}
close.onclick=function(){
	closeWin();
}
lunboBox.onmouseover=function(){
	stop();
}
lunboBox.onmouseout=function(){
	player();
}
leftBtn.onclick=function(){   //轮播箭头点击事件
	if(!animated){
		animate(1200,-4800,-1200);
	}
}
rightBtn.onclick=function(){
	if(!animated){
		animate(-1200,-4800,-1200);
	}
}