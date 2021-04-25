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


/*======================================【新手课程列表】==================================*/

//获取新手课程列表【容器】
var newke = $('.newke');
//获取新手课程列表【数据】
var newkeData;

//调取【新手课程】对应的【JSON数据】
$.getJSON('data/newke.json',function(res,status,xhr){
	newkeData = res;
	
	//通过数据循环列表
	$.each(newkeData,function(index,value){
	 
	    //存储【新手课程】的【HTML布局代码】
	    var str='';
	    for(var i=0;i<newkeData.length;i++){
	    	str += `<div class="col-sm-4 col-md-3">
	    			       <div class="thumbnail">
	    			         <div class="img_mian">
	    			            <img class="img-responsive" src="${newkeData[i].url}" alt="...">
	    			         </div>                  
	    			         <div class="caption">
	    			           <h3 class="title">${newkeData[i].title}</h3>
	    			           <p><a href="#" class="btn btn-primary" role="button">购买课程</a> <a href="#" class="btn btn-default" role="button">课程详情</a></p>
	    			         </div>
	    			       </div>
	    			     </div>`;
	    }
	    //将遍历出来的代码，添加到容器中
	    newke.html('<div class="row">' + str + '</div>');
	
	
	});
	
	
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





























































});





// function newke(data){
// 	//设定存储【新手课程】布局代码
// 	var str;
// 	for(var i=0;i<data.length;i++){
// 		str += `<div class="col-sm-4 col-md-3">
// 				       <div class="thumbnail">
// 				         <div class="img_mian">
// 				            <img class="img-responsive" src="${data[i].url}" alt="...">
// 				         </div>                  
// 				         <div class="caption">
// 				           <h3 class="title">${data[i].title}</h3>
// 				           <p><a href="#" class="btn btn-primary" role="button">购买课程</a> <a href="#" class="btn btn-default" role="button">课程详情</a></p>
// 				         </div>
// 				       </div>
// 				     </div>`;
// 	}
	
// 	console.log(str);
		
// }



