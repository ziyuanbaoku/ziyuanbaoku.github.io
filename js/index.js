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