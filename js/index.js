window.onload=function(){
   
    var arr=getClass('imgs');
    var as=getClass('dian')[0].getElementsByTagName('span')
	   arr[0].style.zIndex="1";
	   var num=0;
	
    var t=setInterval(move,2000);
    function move(){
    if(num==5){num=-1};//下面num++会变成0.
	   for(var i=0;i<arr.length;i++){
		  arr[i].style.opacity="0";
		 as[i].className="hot"
	     }//做一个遍历，将属性重置。
	   num++;
     // arr[num].style.zIndex="1"
      animate(arr[num],{opacity:1},500);
     as[num].className="hot1"//当前的属性。

     }
    var btn=getClass("btn1")[0];
    var wheel=getClass("bannermiddleb")[0];
    wheel.onmouseover=function(){
         clearInterval(t);
         btn.style.display="block";
    }
    wheel.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn.style.display="none";
    }//做一个鼠标移动暂停事件。
  var links=getClass('dian')[0].getElementsByTagName('span');
	 //console.log(links)
	var lists=getClass("bannermiddleb")[0].getElementsByTagName('img');
	// console.log(lists)
	 for(var m=0;m<links.length;m++)
	   {  links[m].index=m;
	 	links[m].onclick=function(){
	 		  num=this.index;
	 		  for(var n=0;n<lists.length;n++){
           	   lists[n].style.opacity="0";
           	   links[n].className="hot";

               }

              animate(arr[num],{opacity:1},200);
              links[this.index].className="hot1"
              
	       }
	    
           
	   }
//做一个选项卡事件，让原点可以控制图片。

	   var btn1=getClass('btn1left')[0];
	   var btn2=getClass('btn1right')[0];
	   btn2.onclick=function(){
	   	    move();
	   }
	   btn1.onclick=function(){
	   	    
	   	    num--;
	   	    if(num==-1){num=5};
	        for(var n=0;n<arr.length;n++){
		       arr[n].style.opacity="0";
		       as[n].className="hot"
	        }
	        
            animate(arr[num],{opacity:1},500);
            as[num].className="hot1"

	   }  
//做两个边边按钮，实现切换。
for(var i=0;i<7;i++){
	  var fu=getClass('zlmd')[i]
	   
	  var zi=getClass('over')[i]
	  // console.log(zlmd2)
	   leftmove(fu,zi)
    }
    function leftmove(fu,zi){
   	  fu.onmouseover=function(){
   	  	animate(zi,{left:-80},200)
   	  	fu.style.background="#c81623"

   	  }
   	  fu.onmouseout=function(){
   	  	animate(zi,{left:0},200)
   	  	fu.style.background="#666"
   	  }
    }
//右边的购物车绝对定位
	
	 var links2=getClass("daipainum");
	  var lists2=getClass("yilouni");
//1
     xuexiangka(links2,lists2,"dapai daipainum","xiaopai daipainum")

     var links1=getClass("daipainum1");
	  var lists1=getClass("erlouni");//类img总盒子
//2
     xuexiangka(links1,lists1,"dapai1 daipainum1","xiaopai1 daipainum1")//参数 参数 类名1 类名2

     var links3=getClass("daipainum2");
	   var lists3=getClass("sanlouni");
     xuexiangka(links3,lists3,"dapai2 daipainum2","xiaopai2 daipainum2")
//3
     var links4=getClass("daipainum3");
     var lists4=getClass("silouni");
     xuexiangka(links4,lists4,"dapai3 daipainum3","xiaopai3 daipainum3")
//4
     var links5=getClass("daipainum4");
     var lists5=getClass("wulouni");
     xuexiangka(links5,lists5,"dapai4 daipainum4","xiaopai4 daipainum4")
//5
     var links6=getClass("daipainum5");
     var lists6=getClass("liulouni");
     xuexiangka(links6,lists6,"dapai5 daipainum5","xiaopai5 daipainum5")
//6
     var links7=getClass("daipainum6");
     var lists7=getClass("qilouni");
     xuexiangka(links7,lists7,"dapai6 daipainum6","xiaopai6 daipainum6")
//7
     var links8=getClass("daipainum7");
     var lists8=getClass("balouni");
     xuexiangka(links8,lists8,"dapai7 daipainum7","xiaopai7 daipainum7")
//8
     var links9=getClass("daipainum8");
     var lists9=getClass("jiulouni");
     xuexiangka(links9,lists9,"dapai8 daipainum8","xiaopai8 daipainum8")
//9
     var links10=getClass("daipainum9");
     var lists10=getClass("shilouni");
     xuexiangka(links10,lists10,"dapai9 daipainum9","xiaopai9 daipainum9")
//10      
	
	function xuexiangka(a,b,c,d){
	for(var i=0;i<a.length;i++){
		a[i].index=i;
		a[i].onmouseover=function(){
			for(var j=0;j<a.length;j++){
				a[j].className=c;
				b[j].style.display="none";
			}
			a[this.index].className=d;
			b[this.index].style.display="block";
		}
	}
	 
    }
	 

   //水平轮播 
//    splbt('img-box','yilou-dian2','yilou-dian yilou-dian2',"yilou-dian1 yilou-dian2",'wheel-box','yilou-btn-left','yilou-btn-right',439);
//    splbt('img-box1','yilou-dian3','yilou-dian yilou-dian3',"yilou-dian1 yilou-dian3",'wheel-box1','yilou-btn-left1','yilou-btn-right1',339)
//    splbt('img-box2','sanlou-dian2','yilou-dian sanlou-dian2',"yilou-dian1 sanlou-dian2",'wheel-box2','yilou-btn-left2','yilou-btn-right2',439);
//    splbt('img-box3','silou-dian2','yilou-dian silou-dian2',"yilou-dian1 silou-dian2",'wheel-box3','yilou-btn-left3','yilou-btn-right3',439);
//    splbt('img-box4','wulou-dian2','yilou-dian wulou-dian2',"yilou-dian1 wulou-dian2",'wheel-box4','yilou-btn-left4','yilou-btn-right4',439);
//    splbt('img-box9','shilou-dian2','yilou-dian shilou-dian2',"yilou-dian1 shilou-dian2",'wheel-box9','yilou-btn-left9','yilou-btn-right9',435);
//    splbt('img-box10','shiyilou-dian2','yilou-dian shiyilou-dian2',"yilou-dian1 shiyilou-dian2",'wheel-box10','yilou-btn-left10','yilou-btn-right10',435);
//    splbt('img-box11','shierlou-dian2','yilou-dian shierlou-dian2',"yilou-dian1 shierlou-dian2",'wheel-box11','yilou-btn-left11','yilou-btn-right11',435);
   
//    function splbt(a,b,c,d,e,f,g,h){//图像盒子，原点的相同类名，原点变换前class，原点变换后class，最大盒子，左按钮，右按钮
//       var imgBox=getClass(a)[0];//所有图片放在这个盒子里

//      	var imgs=getClass('box-img-box')||getClass(a)[0].getElementsByTagName('img');//获取到单个图片所在的img
//       //console.log(imgs)
//      	var yiloudian=getClass(b);
//      	var wheelBox=getClass(e);
//         //console.dir(yiloudian)
//      	imgBox.style.width=imgs.length*(h+1)+'px';
//      	var K=setInterval(rmove,2000);
//      	var imgnum=0;
//      	function rmove(){
//      		imgnum++;
//      		if(imgnum==4){
//      			imgnum=0;
//      		}
//      		  for(var i=0;i<imgs.length;i++){
//      		 	yiloudian[i].className=c;
//      		  }
     		
//      		 yiloudian[imgnum].className=d;
     		
//      		animate(imgBox,{marginLeft:-h*imgnum},200)
//      	}
         
//          wheelBox[0].onmouseover=function(){
//              clearInterval(K);
         
//          }
//          wheelBox[0].onmouseout=function(){
//     	    K=setInterval(rmove,2000);
    	 
//          }//图片鼠标禁止事件
//          var linkss=getClass(b);
// 	 //console.log(links)
// 	   var listss=getClass('box-img-box')||getClass(a)[0].getElementsByTagName('img');
// 	 //console.log(lists)
// 	 for(var m=0;m<linkss.length;m++)
// 	   {  linkss[m].index=m;
// 	 	linkss[m].onclick=function(){
// 	 		  imgnum=this.index;
// 	 		  for(var n=0;n<listss.length;n++){
           	   
//            	   linkss[n].className=c;

//                }

//               animate(imgBox,{marginLeft:-h*imgnum},200);
//               linkss[this.index].className=d;
              
// 	       }
	    
           
// 	   }
// 	   //选项卡
// 	   var btn11=getClass(f)[0];
// 	   var btn22=getClass(g)[0];
// 	   btn22.onclick=function(){
// 	   	    rmove();
// 	   }
// 	   btn11.onclick=function(){
	   	    
// 	   	   imgnum--;
//      		if(imgnum==-1){
//      			imgnum=3;
//      		}
//      		  for(var i=0;i<imgs.length;i++){
//      		 	yiloudian[i].className=c;
//      		  }
     		
//      		 yiloudian[imgnum].className=d;
     		
//      		animate(imgBox,{marginLeft:-h*imgnum},200)

// 	   } 
// 	}
// //水平轮播图制作结束
   


	   
	

// //6.7.8.9
//  splbt6('img-box5','liulou-dian2','yilou-dian liulou-dian2',"yilou-dian1 liulou-dian2",'wheel-box5','yilou-btn-left5','yilou-btn-right5',339,'box-img-box5');
//  splbt6('img-box6','qilou-dian2','yilou-dian qilou-dian2',"yilou-dian1 qilou-dian2",'wheel-box6','yilou-btn-left6','yilou-btn-right6',339,'box-img-box6');
//  splbt6('img-box7','balou-dian2','yilou-dian balou-dian2',"yilou-dian1 balou-dian2",'wheel-box7','yilou-btn-left7','yilou-btn-right7',339,'box-img-box7'); 
//  splbt6('img-box8','jiulou-dian2','yilou-dian jiulou-dian2',"yilou-dian1 jiulou-dian2",'wheel-box8','yilou-btn-left8','yilou-btn-right8',339,'box-img-box8');  
//  function splbt6(a,b,c,d,e,f,g,h,z){//图像盒子，原点的相同类名，原点变换前class，原点变换后class，最大盒子，左按钮，右按钮
//       var imgBox=getClass(a)[0];//所有图片放在这个盒子里

//       var imgs=getClass(z)//获取到单个图片所在的img
//      // console.log(imgs)
//       var yiloudian=getClass(b);
//       var wheelBox=getClass(e);
//         //console.dir(yiloudian)
//       imgBox.style.width=imgs.length*(h+1)+'px';
//       var K=setInterval(rmove,2000);
//       var imgnum=0;
//       function rmove(){
//         imgnum++;
//         if(imgnum==4){
//           imgnum=0;
//         }
//           for(var i=0;i<imgs.length;i++){
//           yiloudian[i].className=c;
//           }
        
//          yiloudian[imgnum].className=d;
        
//         animate(imgBox,{marginLeft:-h*imgnum},200)
//       }
         
//          wheelBox[0].onmouseover=function(){
//              clearInterval(K);
         
//          }
//          wheelBox[0].onmouseout=function(){
//           K=setInterval(rmove,2000);
       
//          }//图片鼠标禁止事件
//          var linkss=getClass(b);
//    //console.log(links)
//      var listss=getClass(z);
//    //console.log(lists)
//    for(var m=0;m<linkss.length;m++)
//      {  linkss[m].index=m;
//     linkss[m].onclick=function(){
//         imgnum=this.index;
//         for(var n=0;n<listss.length;n++){
               
//                linkss[n].className=c;

//                }

//               animate(imgBox,{marginLeft:-h*imgnum},200);
//               linkss[this.index].className=d;
              
//          }
      
           
//      }
//      //选项卡
//      var btn11=getClass(f)[0];
//      var btn22=getClass(g)[0];
//      btn22.onclick=function(){
//           rmove();
//      }
//      btn11.onclick=function(){
          
//          imgnum--;
//         if(imgnum==-1){
//           imgnum=3;
//         }
//           for(var i=0;i<imgs.length;i++){
//           yiloudian[i].className=c;
//           }
        
//          yiloudian[imgnum].className=d;
        
//         animate(imgBox,{marginLeft:-h*imgnum},200)

//      } 
//   }

splbt('.wheel-box','.img-box','img',"yilou-dian yilou-dian2",'yilou-dian1 yilou-dian2','.yilou-dian2','.yilou-btn-left','.yilou-btn-right')
splbt('.wheel-box1','.img-box1','.box-img-box',"yilou-dian yilou-dian3",'yilou-dian1 yilou-dian3','.yilou-dian3','.yilou-btn-left1','.yilou-btn-right1')
splbt('.wheel-box2','.img-box2','img',"yilou-dian sanlou-dian2",'yilou-dian1 sanlou-dian2','.sanlou-dian2','.yilou-btn-left2','.yilou-btn-right2')
splbt('.wheel-box3','.img-box3','img',"yilou-dian silou-dian2",'yilou-dian1 silou-dian2','.silou-dian2','.yilou-btn-left3','.yilou-btn-right3')
splbt('.wheel-box4','.img-box4','img',"yilou-dian wulou-dian2",'yilou-dian1 wulou-dian2','.wulou-dian2','.yilou-btn-left4','.yilou-btn-right4')
splbt('.wheel-box5','.img-box5','.box-img-box5',"yilou-dian liulou-dian2",'yilou-dian1 liulou-dian2','.liulou-dian2','.yilou-btn-left5','.yilou-btn-right5')
splbt('.wheel-box6','.img-box6','.box-img-box6',"yilou-dian qilou-dian2",'yilou-dian1 qilou-dian2','.qilou-dian2','.yilou-btn-left6','.yilou-btn-right6')
splbt('.wheel-box7','.img-box7','.box-img-box7',"yilou-dian balou-dian2",'yilou-dian1 balou-dian2','.balou-dian2','.yilou-btn-left7','.yilou-btn-right7')
splbt('.wheel-box8','.img-box8','.box-img-box8',"yilou-dian jiulou-dian2",'yilou-dian1 jiulou-dian2','.jiulou-dian2','.yilou-btn-left8','.yilou-btn-right8')
splbt('.wheel-box9','.img-box9','img',"yilou-dian shilou-dian2",'yilou-dian1 shilou-dian2','.shilou-dian2','.yilou-btn-left9','.yilou-btn-right9')
splbt('.wheel-box10','.img-box10','img',"yilou-dian shiyilou-dian2",'yilou-dian1 shiyilou-dian2','.shiyilou-dian2','.yilou-btn-left10','.yilou-btn-right10')
splbt('.wheel-box11','.img-box11','img',"yilou-dian shierlou-dian2",'yilou-dian1 shierlou-dian2','.shierlou-dian2','.yilou-btn-left11','.yilou-btn-right11')
      function splbt(a,b,c,e,f,g,x,y){
      var aa=$(a)[0];//获取最大的盒子用来停止动画
      var img=$(c,$(b)[0])
       
        var iW=parseInt(getStyle(img[0],'width'));//将获取的第一张图片的的属性width获取。然后去掉px。赋值给iW；
        //console.log(img);
        var dian=$(g);//获取小圆点的数组
        var now=0;
        var next=0;
        img[0].style.left='0';
        var flag=true;//设置一个开关的初始属性
        var t=setInterval(wheel,1000);//一个关于时间的函数调用。实现自动水平轮播
        function wheel(){    //wheel函数体
            if(!flag){       //此间段开关为关。返回
                return
            }
            flag=false;      //只要不执行完animate函数，则开关始终为关闭状态。直接返回
            next++;
            if(next==img.length){
              next=0;
            }
            img[next].style.left='100%';
            animate(img[now],{left:-iW},200);
            animate(img[next],{left:0},200,function(){flag=true});
             
            dian[now].className=e; 
            dian[next].className=f;
            now=next;
                
            
        }
        aa.onmouseover=function(){
            clearInterval(t);
        }
        aa.onmouseout=function(){
            t=setInterval(wheel,1000);
        }
        //选项卡
        for(var i=0;i<dian.length;i++){ 
        dian[i].index=i;
        dian[i].onmouseover=function(){
            
            if(!flag||this.indes==now){return}
              flag=false;
            if(this.index>now){
              img[this.index].style.left='100%';
              animate(img[now],{left:-iW},200);
                
            }
            if(this.index<now){
              img[this.index].style.left='-100%';
              animate(img[now],{left:iW},200);
                
            }
          animate(img[this.index],{left:0},200,function(){flag=true});
          dian[now].className=e;      
        dian[this.index].className=f;
        now=next=this.index;
          } 
        }
      





        var btn2=$(y)[0];
        var btn1=$(x)[0];
        btn1.onclick=function(){
           if(!flag){       //此间段开关为关。返回
                return
            }
            flag=false;      //只要不执行完animate函数，则开关始终为关闭状态。直接返回
            next--;
            if(next==-1){
              next=img.length-1;
            }
            img[next].style.left='-100%';
            animate(img[now],{left:iW},200);
            animate(img[next],{left:0},200,function(){flag=true});
             
            dian[now].className=e; 
            dian[next].className=f;
            now=next;
            
        }
        btn2.onclick=function(){
            wheel();
        }
    }



//左边动一动
      for(var i=0;i<7;i++){
       var gelouhz=getClass('gelouhz1')[i];
      // console.log(gelouhz)
      // var tesegou=getClass('tesegou-img')[i]
      imgmove(gelouhz);
      //imgmove(tesegou)
      
    }
      for(var ii=0;ii<4;ii++)
      {var tesegou=getClass('tesegou-img')[ii];
        imgmove(tesegou);
      }
      
function imgmove(a){
        a.onmouseover=function(){
          animate(a,{marginLeft:30},60)
        }
        a.onmouseout=function(){
          animate(a,{marginLeft:10},60)
        }
       
      }


//天天低价的垂直轮播图

      var imgBox1=getClass('gelou-left-db')[0];//所有图片放在这个盒子里

      var imgs1=getClass('gelou-left-box')//获取到单个图片所在的img
      //console.log(imgs1);
        //console.dir(yiloudian)
      imgBox1.style.height=imgs1.length*140+'px';
      setInterval(remove,2000);
      var imgnum1=0;
      function remove(){
        imgnum1++;
        if(imgnum1==4){
          imgnum1=0;
        } 
        animate(imgBox1,{marginTop:-140*imgnum1},200)
      }



//banner下面的一个小轮播
        var aa=$('.banner-b')[0];//获取最大的盒子用来停止动画
        var img=$('.banner-bbb');     
        var iW=parseInt(getStyle(img[0],'width'));//将获取的第一张图片的的属性width获取。然后去掉px。赋值给iW；
        //console.log(iW);
        var now=0;
        var next=0;
        img[0].style.left='0';
        var flag=true;//设置一个开关的初始属性
        var l=setInterval(wheel1,3000);//一个关于时间的函数调用。实现自动水平轮播
        function wheel1(){    //wheel函数体
            if(!flag){       //此间段开关为关。返回
                return
            }
            flag=false;      //只要不执行完animate函数，则开关始终为关闭状态。直接返回
            next++;
            if(next==img.length){
              next=0;
            }
            img[next].style.left='100%';
            animate(img[now],{left:-iW},300);
            animate(img[next],{left:0},300,function(){flag=true});
            now=next;
                
            
        }
        aa.onmouseover=function(){
            clearInterval(l);
        }
        aa.onmouseout=function(){
            l=setInterval(wheel1,3000);
        }
      
    
        var btn2=$('.banner-b-btnr')[0];
        var btn1=$('.banner-b-btnl')[0];
        btn1.onclick=function(){
           if(!flag){       //此间段开关为关。返回
                return
            }
            flag=false;      //只要不执行完animate函数，则开关始终为关闭状态。直接返回
            next--;
            if(next==-1){
              next=img.length-1;
            }
            img[next].style.left='-100%';
            animate(img[now],{left:iW},200);
            animate(img[next],{left:0},200,function(){flag=true});

            now=next;
            
        }
        btn2.onclick=function(){
            wheel1();
        }
//点击进行跳转

var zlmd12=$('.zlmd12')[0];
zlmd12.onclick=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement;
  animate(doc,{scrollTop:0},400)
}//点击返回顶部
var zlmd11=$('.zlmd11')[0];
zlmd11.onclick=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement;
  animate(doc,{scrollTop:0},400)
}//点击返回顶部
// var gg=$('.head-r')[0];
// var tz1=getChilds(gg)[0];
// tz1.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:1700},400)
// }
// var tz2=getChilds(gg)[1];
// tz2.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:2400},400)
// }
// var tz3=getChilds(gg)[2];
// tz3.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:3200},400)
// }
// var tz4=getChilds(gg)[3];
// tz4.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:3800},400)
// }
// var tz5=getChilds(gg)[4];
// tz5.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:4400},400)
// }
// var tz6=getChilds(gg)[5];
// tz6.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:5100},400)
// }
// var tz7=getChilds(gg)[6];
// tz7.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:5700},400)
// }
// var tz8=getChilds(gg)[7];
// tz8.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:6300},400)
// }
// var tz9=getChilds(gg)[8];
// tz9.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:6900},400)
// }
// var tz10=getChilds(gg)[9];
// tz10.onclick=function(){
//   var doc=document.body.scrollTop?document.body:document.documentElement;
//   animate(doc,{scrollTop:7700},400)
// }
// var tz11=getChilds(gg)[10];
// tz11.onclick=function(){
//   C
//   animate(doc,{scrollTop:8300},400)
// }

var a=$('.louceng');
var b=$('.lctp');
var c=$('.lcbt');
var d=$('.yiloutop');
var f=$('.ff');
var clienth=document.documentElement.clientHeight;
var offT=[];
for(var i=0;i<d.length;i++){
  offT.push(d[i].offsetTop-40)//遍历一遍数组，将每层楼离顶的像素加入新数组。
  a[i].index=i;//创建一个下标，for循环结束后，下标建立完毕,并将其与按钮盒子关联起来
  a[i].onclick=function(){//按钮盒子点击事件，随着循环进行，i值不同，按钮不同 a[0] a[1] ...
  animate(document.body,{scrollTop:offT[this.index]},400)//this.index代表了当前a[i]下的距离
  animate(document.documentElement,{scrollTop:offT[this.index]},400)
}
}
window.onscroll=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement;
  var stop=doc.scrollTop;
  for(var j=0;j<d.length;j++){
    if(stop>=offT[j]-clienth){
        for(var i=0;i<d.length;i++){
          b[i].style.display='block';
          c[i].style.display='none';
        }
         b[j].style.display='none';
         c[j].style.display='block'; 
         var g=$('img',f[j]); //按需加载图片
         for(var k=0;k<g.length;k++){//按需加载图片
          g[k].src=g[k].getAttribute('asrc')//按需加载图片
         }
                
    }
  }
    
}
//左边导航功能实现。


   // function IMG(){
   //    for(var i=0;i<offT.length;i++){
   //        if(offT[i]<stop+clienth){
   //            var g=$('img',f[i]);
   //            for(var kk=0;kk<g.length;kk++){
   //            g[kk].src=g[kk].getAttribute('asrc')
   //         }
   //       }
      
   //     }
   // }
 
        










}