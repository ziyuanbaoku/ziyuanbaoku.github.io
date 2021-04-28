$(function(){
	
var list_main = $('.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse');
var list_ul = $('#navbar-collapse ul');
var list_li =  $('#navbar-collapse li');


/*======================================【总课程列表】==================================*/

 var course_list = $('#course_list');


//修订【页头】默认样式的值  【 margin：40px 0  20px；】-----JS挺高CSS设定优先级
 course_list.css('margin',0);


//鼠标滑过列表背景变化效果
var course_list_div = $('.course_list_content>div');

$.each(course_list_div,function(index,value){

    $(this).hover(function(){

         $(this).css('background','#dd706b').siblings().css('background','#000');

    },function(){
        course_list_div.css('background','#000');
    });

});


/*======================================【课程列表】==================================*/




//获取新手课程列表【容器】
var newke = $('.newke');
var newke1 = $('.newke1');

//执行新手课程函数
keList(newke,'data/newke.json','data/newkeList.json');
keList(newke1,'data/newke.json','data/newkeList.json');

//封装课程函数
function keList(oDom,dataUrl,listUrl){
	
	  //获取课程列表【数据】
	  var newkeData;
	  
	  //调取【课程】对应的【JSON数据】
	  $.getJSON(dataUrl,function(res,status,xhr){
	  	newkeData = res;
	  	
	  	//通过数据循环列表
	  	$.each(newkeData,function(index,value){
	  	 
	  	    //存储【课程】的【HTML布局代码】
	  	    var str='';
	  	    for(var i=0;i<newkeData.length;i++){
	  	    	str += `<div class="col-sm-4 col-md-3">
	  	    			       <div class="thumbnail">
	  	    			         <div class="img_mian">
	  	    			            <img class="img-responsive" src="${newkeData[i].url}" alt="...">
	  	    			         </div>                  
	  	    			         <div class="caption">
	  	    			           <h3 class="title">${newkeData[i].title}</h3>
	  	    			           <p>
	  							   
	  								  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#buyBtn">
	  								    购买课程
	  								  </button>
	  								  <button type="button"  class="btn btn-primary kcxq" data-toggle="modal" data-target="#contents">
	  								    课程详情
	  								  </button>
	  							   </p>
	  	    			         </div>
	  	    			       </div>
	  	    			     </div>`;
	  	    }
	  	    //将遍历出来的代码，添加到容器中
	  	    oDom.html('<div class="row">' + str + '</div>');
			
				  	
	  	});
		
		
		//点击按钮，【模态框】输出【不同课程介绍】内容
		keTitle(oDom,listUrl);
		
		
	
	});
}


/******************【模态框】设定--开始********************/

//获取【模态框】课程介绍【容器】
var conTitle = $('#conTitle');
//获取【模态框】课程列表【容器】
var conList = $('#conList');

//点击【课程详情】按钮，更改模态框内容
function keTitle(oDom,listUrl){
	

	//获取【课程详情】按钮集合
	var kcxq = oDom.find('.btn.btn-primary.kcxq');
	//存储课程列表的数据
	var listData;

	//请求课程列表的数据
	$.getJSON(listUrl,function(res,status,xhr){
		//将获取的【课程列表数据】赋值给变量
		listData = res;
		console.log(listData);
		
		
		//循环点击【课程详情】按钮，输出对应课程的【介绍】
		$.each(kcxq,function(index,value){
			$(this).click(function(){
				//将【课程简介】显示出来
				conTitle.html(listData[index].title);
		
				//将【课程列表数据】赋值给变量
				var listNews = listData[index].contents;
				//声明空字符串，放列表HTML
				var strLi="";
				//循环【课程列表数据】，遍历到列表【Li】中
				$.each(listNews,function(index,value){
                    //生成列表的HTML标签					
					strLi += '<li class="list-group-item"><span>'+(index+1) + '</span>' + value + '</li>'
										
				});
				//将【课程列表】显示出来 
				 conList.html(strLi);
				 
				 
			});
		})
		
		
		
		
	});

	
	
	
	
	
	
	
}


/*****************结束*********************/





	
	
	//对【新手课程列表】做CSS特效样式
	var thumbnail = $('.thumbnail');
	var newsImg = $('.thumbnail .img_mian img');
	
	$.each(thumbnail,function(index,value){
	
		$(this).hover(function(){
	       newsImg.eq(index).css('transform','scale(1.2)');
	       $(this).css('box-shadow','0px 0px 10px red');
		},function(){
	      newsImg.eq(index).css('transform','scale(1)');
	      $(this).css('box-shadow','none');
		});
	});
	
	
	
	






























































});








