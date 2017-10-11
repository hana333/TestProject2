// JavaScript Document
	   ajaxActive(window.location.hash);
	   console.log('hash:'+window.location.hash)
	   //控制第三级菜单的出现跟隐藏效果
	   $('#ssk').click(function(){
		var str=$('.float_icon').attr('title');
		if(str=='open'){
		       $('#sidebar1').addClass('dil');
		       $('#ssk').addClass('min_float_icon');
			   $('#ssk').attr('title','close');
		  }
		  else{
			   $('#sidebar1').removeClass('dil');
		       $('#ssk').removeClass('min_float_icon');
			   $('#ssk').attr('title','open');
			}
		});
		//二级菜单选中后的样式
        $(".oneid").on("click",function(){
    	    oneidClick($(this));		     
         });
		 function oneidClick(obj,str){
			$(".nav-list").find("li.active").removeClass("active");
            obj.parent().addClass("active");
			var url=obj.attr('href');
		    if(url=='#'){
		   		 $('#ssk').removeClass('hide');//显示三级菜单	
	       		 $('#sidebar1').removeClass('dil');
	       		 $('#ssk').removeClass('min_float_icon');
	       		 $('#ssk').attr('title','open')
				 $('.three-top').html(obj.children('span').html());//获取三级菜单
          		 var three_cd=obj.siblings('div.three_cd').html();
		   		 $('.three_cdg').html(three_cd);
				 $('.three_cdg .nav-list a').each(function(index, element) {
					 $(this).attr('href','#'+$(this).attr('href'));	
				 });	
				 if(str != undefined)
				 {
					 twoidClick($('a[href="#'+str+'"]'),str);
				 }else{
					 var obj=$(".three_cdg .nav-list li:eq(0) .twoid");
					 twoidClick(obj,obj.attr('href').substring(1));	
				 }
				 
		   }else
		   {  
		      $('#ssk').addClass('hide');//显示三级菜单
	       	  $('#sidebar1').addClass('dil');
	       	  $('#ssk').addClass('min_float_icon');
			  $('.body_main_top').html(obj.text());
			  ajaxPage(url);
			  $.cookie('indexObj',url);
		   } 	
		 }
		 
		 
		//三级菜单选中后的样式
        $(document).on('click', '.twoid', function(e) {
            twoidClick($(this),$(this).attr('href').substring(1));
         });
		 function twoidClick(obj,url){
			$(".three_cdg .nav-list li.active").removeClass("active");
            obj.parent().addClass("active");
			if(url != "#"){
				console.log('twourl:'+,url)
				ajaxPage(url);
				$('.body_main_top').html(obj.html());
				$.cookie('indexObj',url);
			}
		 }	 
		 
		 $('.sidebar-toggle').on('click',function(){
			 $('.sidebar').toggleClass('menu-min');
			 $(this).children('i').toggleClass('ace-icon fa fa-reorder (alias) fa-rotate-90');
			 $(this).children('i').toggleClass('ace-icon fa fa-reorder (alias)');
		 });
		 
		 //监听一级菜单的单击事件
		$('.hotnav').on('click', function() {
            var obj=$('.menu-min');
			var flag=$(this).parent('li').attr('class');
			var openobj=$('.cnList.open');
			var tempobj=$(this);
           // if(obj.length!=0){
				if(flag.indexOf('open')>0){					
					tempobj.children('i.menu-icon').attr('class','menu-icon fa fa-caret-right');
					$(this).next('ul.submenu').slideUp(200,function(){
						tempobj.parent('li').removeClass('open');
					});				   
				  }
				else{
	     		 	 tempobj.parent('li').addClass('open');
				  	 tempobj.children('i.menu-icon').attr('class','menu-icon fa fa-caret-down');
				  	 $(this).next('ul.submenu').slideDown(200);				 
				  }				 
				//};
        });

         //加载等待
		 function roading(){
		     var road_srt='<div class="roading"><div class="roading_blue"></div></div>';
			 if($('.roading').length>0){
				 $('.roading').remove();
			 }
		     $('.body_main').prepend(road_srt);
		 }
         function delroading(){
     		$('.roading_blue').css('animation','myfirst 1s');
		    $('.roading').remove();
		 }
        

	
	   //表单错误提示
	   function formwaring(list,n){
		   if(n==true){
		      var str='<div class="alert alert-warning alert-dismissible fade in" role="alert" id="waring"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'+list+'</div>'
			  $('#addlist').append(list);
		     }else{
			   $('#waring').remove(); 
			 }
		   };
		   
			
     //消息框   
	function alertBox(type,title,txt){
		var obj_icon='';
		switch(type)
		{
			case 0:   //警告
				obj_icon='icon_waring fa fa-exclamation-triangle';
				break;
			case 1:   //提醒
				obj_icon='icon_info fa fa-info-circle';
				break;
			case 2:   //错误
				obj_icon='icon_error fa-times-circle';
				break;
			case 3:   //疑问
				obj_icon='icon_question fa fa-question-circle';
				break;
		}	
		var obj='<div class="modal" id="alertModal" data-backdrop="static"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">'+title+'</h5></div><div class="modal-body"><i class="'+obj_icon+'"></i><p>'+txt+'</p></div><div class="modal-footer"><button type="button" id="m_ok" class="btn btn-primary">确定</button></div></div></div></div>';
		$('#main-container').after(obj);
		$('#alertModal').modal();	
		$('#alertModal').on('click','.modal-backdrop',function(){
			 	 $('#alertModal').remove();
			})
		$('#alertModal').on('click','#m_ok',function(){
			 	 $('#alertModal').remove();
			})
	};
	    //请求页面
		function ajaxPage(objurl,data){
			  $.ajax({ 
                url: objurl, 
				data:data,
				type:'get', //数据发送方式 
                dataType:'html', //接受数据格式
				async:true,//异步请求
				timeout: 5000,//请求超时
                beforeSend:function() {
	               roading();
                 },
                complete:function(data) {
					delroading();
					$('#mainframe').html(data.responseText);
	             },
                success: function(data) {//请求成功
					 console.log('objurl:'+objurl)
					 window.location.hash=objurl;				 
				 },
                error: function(data) {//请求失败
	             }				 
		     });
			}
		//刷新后还原样式
		function ajaxActive(url){	
			var homeURL=$('.navbar-brand').attr('href');//定义首页地址
			if(url == undefined || url == '#undefined'){
				if($.cookie('indexObj') == "" || $.cookie('indexObj') == undefined){
					url=homeURL;
				}else{
					url=$.cookie('indexObj');
				}
			}else if(url == ""){
				url=homeURL;
			}
			console.log('url:'+url)
			if(url.indexOf('#')>=0){
				url=url.substr(url.indexOf('#')+1);
			}						
			if(url == '' || url==homeURL)
			{
				ajaxPage(homeURL);
				$('.body_main_top').hide();
				$('#sidebar').addClass('menu-min');	
				$('#sidebar1').addClass('dil');	
				var cnList=$('.cnList.open');
				cnList.removeClass('open');
				cnList.find('.submenu').slideUp();
				cnList.find('.menu-icon').attr('Class','menu-icon fa fa-caret-right');
				cnList.find('li').removeClass('active');
			}
			else{	
				var obj=$('a[href="'+url+'"]');
				var oneobj=obj.parents('.three_cd').parent('li').find('.oneid');
				oneidClick(oneobj,url);
				$('#sidebar').removeClass('menu-min');
				obj.parents('li.cnList').addClass("open");
				obj.parents('li.cnList.open').find('ul.submenu').css('display','block');
				obj.parents('li.cnList').find('.hotnav i').attr('class','menu-icon fa fa-caret-down');
				$('.body_main_top').show();
			}			
		}
	
	$('#menu-toggler').click(function(){
		$('#sidebar').toggleClass('display');
		$('.three-sidebar').toggleClass('display');
		$(this).toggleClass('display');
	});
	

//对话框
$.msgBox=function(options){
	 var settings = {
		    type:0,
			title:'提示',	
			ok:'确定',
			cancel:'取消',	
			onOk: null,
			onCancel: null,
			morebutton:null     //更多按钮
  		   }
		$.extend(settings, options);
		 var obj_icon='';
			 switch(settings.type)
              {
                case 0:   //警告
                   obj_icon='icon_waring fa fa-exclamation-triangle';
				   break;
                case 1:   //提醒
                   obj_icon='icon_info fa fa-info-circle';
				   break;
                case 2:   //错误
                   obj_icon='icon_error fa-times-circle';
				   break;
			    case 3:   //疑问
			       obj_icon='icon_question fa fa-question-circle';
				   break;
               }
	    var $msgBox=$('<div class="modal" id="messageModal" data-backdrop="static"></div>').appendTo($('body'));
		var $msgBoxdialog=$('<div class="modal-dialog"></div>').appendTo($msgBox);
		var $msgBoxcontent=$('<div class="modal-content"></div>').appendTo($msgBoxdialog);
		var $msgBoxheader=$('<div class="modal-header"></div>').appendTo($msgBoxcontent);
		var $msgBoxbody=$('<div class="modal-body"></div>').appendTo($msgBoxcontent);
		var $msgBoxfooter=$('<div class="modal-footer"></div>').appendTo($msgBoxcontent);
		var $msgBoxTitle=$('<h4 class="modal-title">'+settings.title+'</h4>').appendTo($msgBoxheader);
		if(settings.ok != null){
			var $msgOK=$('<input type="button" class="btn btn-primary" value="'+settings.ok+'">').appendTo($msgBoxfooter)
		}
		if(settings.cancel != null){
			var $msgCancel=$('<input type="button" class="btn btn-default" value="'+settings.cancel+'">').appendTo($msgBoxfooter);
		}
		$msgBoxbody.append('<i class="'+obj_icon+'"></i><p>'+settings.content+'</p>');
		//按钮的单击事件
		if ($msgOK != null) {
			$msgOK.click(function() {
				if (settings.onOk && typeof settings.onOk == "function") {//判断settings.onOk是不是函数过程
					if (settings.onOk() != false) {
						dialogClose();
					}
				} else {
					dialogClose();
				}
				return false;
			});
		}
		if(settings.height != null) $MyModalbody.css('height',settings.height);				//设置modal高度
		if(settings.overflow != null) $MyModalbody.css('overflow-y',settings.overflow);		//设置modal是否有滚动条
		if(settings.height != null){														//设置modal垂直居中													
				var bodyHeighth=$(document).innerHeight();					
				var lgtop=(bodyHeighth-parseInt(settings.height))/2-90;
				$msgBoxdialog.css('top',lgtop);
		}else{
				$msgBoxdialog.css('top',100);
		}		
		//按钮的单击事件
		if ($msgCancel != null) {
			$msgCancel.click(function() {
				if (settings.onCancel && typeof settings.onCancel == "function") {//判断settings.onCancel是不是函数过程
					if (settings.onCancel() != false) {
						dialogClose();
					}
				} else {
					dialogClose();
				}
				return false;
			});
		}
		//用户自定义按钮
		if(settings.morebutton != null){
				var list=settings.morebutton
				for(i=0;i<=list.length-1;i++){
					var $msgbutton=$('<input type="button" class="btn btn-primary morebtn" id="'+i+'" value="'+list[i].button+'">').prependTo($msgBoxfooter);							
					$msgbutton.click(function(){							
						n=list[$(this).attr('id')].func;
						if (n && typeof n == "function") {//判断settings.onCancel是不是函数过程
							if (n() != false) {
								dialogClose();
							}
						} else {
							dialogClose();
						}															
					});				
				}
		}
		//移除对话框
		function dialogClose() {
			if (settings.onClose && typeof settings.onClose == "function") {
				if (settings.onClose($dialog) != false) {
					$msgBox.remove();
				}
			} else {
				$msgBox.remove();
			}
		}
		var $draggable = $('.modal-dialog').draggabilly({
  				// options...
				handle: '.modal-header'
			})	
		$msgBox.modal();
    };
	

//公用Modal
$.MyModal=function(options){
	 var settings = {
		 	Name:'#Mymodal',
			title:'我的应用',	
			ok:'确定',
			cancel:'取消',	
			content:null,
			page:null,
			width:null,
			height:null,
			overflow:null,
			onOk: null,
			onCancel: null,
			onClosed:null,		//关闭按钮回调函数
			footer:true,		//Modal底部
			onFinsh:null,
  		   }
		$.extend(settings, options);
	    var $MyModal=$('<div class="modal" id="'+settings.Name+'" tabindex="-1" data-backdrop="static"></div>').appendTo($('body'));
		var $MyModaldialog=$('<div class="modal-dialog"></div>').appendTo($MyModal);
		var $MyModalcontent=$('<div class="modal-content"></div>').appendTo($MyModaldialog);
		var $MyModalheader=$('<div class="modal-header" id="header"></div>').appendTo($MyModalcontent);
		var $MyModalcolse=$('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>').appendTo($MyModalheader);
		var $MyModalbody=$('<div class="modal-body"></div>').appendTo($MyModalcontent);		
		var $MyModalTitle=$('<h4 class="modal-title">'+settings.title+'</h4>').appendTo($MyModalheader);
		if(settings.footer != false){
			var $MyModalfooter=$('<div class="modal-footer"></div>').appendTo($MyModalcontent);
			var $MyModalOK=$('<input type="button" class="btn btn-primary" value="'+settings.ok+'">').appendTo($MyModalfooter);
			var $MyModalCancel=$('<input type="button" class="btn btn-default" value="'+settings.cancel+'">').appendTo($MyModalfooter);
		}
		if(settings.content!=null){
			$.ajax({ 
				url:settings.content,
				type:'get', //数据发送方式 
                dataType:'html', //接受数据格式
				async:true,//异步请求
				timeout: 5000,//请求超时
                beforeSend:function() {
	               $MyModalbody.html('<div class="modalload"><i class="fa-li fa fa-spinner fa-spin"></i></div>');
                 },
                complete:function(data,status) {
					$MyModalbody.html(data.responseText);
	             },
                success: function(data) {//请求成功
				    //alert('请求成功');
                 },
                error: function(data) {//请求失败
	             }
		    });
		}
		if(settings.page != null){
			$MyModalbody.html(settings.page);
		}
		if(settings.width != null){			//设置Mymodal宽度
			var bodyWidth=$(document).innerWidth()			
			if(bodyWidth<=parseInt(settings.width))				//当显示器分辨率小于或等于Mymodal的宽度时自适应
			{
		 		$MyModaldialog.css('width','auto');
			}
			else
			{
				$MyModaldialog.css('width',settings.width);
			}
		 }
		if(settings.height != null) $MyModalbody.css('height',settings.height);				//设置modal高度
		if(settings.overflow != null) $MyModalbody.css('overflow-y',settings.overflow);		//设置modal是否有滚动条
		//if(settings.height != null){														//设置modal垂直居中													
//				var bodyHeighth=$(document).innerHeight();					
//				var lgtop=(bodyHeighth-parseInt(settings.height))/2-90;
//				$MyModaldialog.css('top',lgtop);
//		}else{
//				$MyModaldialog.css('top',100);
//		}		

		//确定按钮的单击事件
		if ($MyModalOK != null) {
			$MyModalOK.click(function() {
				if (settings.onOk && typeof settings.onOk == "function") {//判断settings.onOk是不是函数过
					var flag=settings.onOk();
					if (flag == false) {
						formInfo('执行失败，请联系管理员')				
					}
				} else {
					dialogClose();
				}
				return false;
			});
		};
		
		//关闭按钮的单击事件
		if ($MyModalCancel != null) {
			$MyModalCancel.click(function() {
				if (settings.onCancel && typeof settings.onCancel == "function") {//判断settings.onCancel是不是函数过程
					if (settings.onCancel() != false) {
						dialogClose();
					}
				} else {
					dialogClose();
				}
				return false;
			});
		};
		//关闭按钮事件
		$MyModalcolse.click(function() {
			if(settings.onClosed != null)
				if (settings.onClosed && typeof settings.onClosed == "function") {//判断settings.onCancel是不是函数过程
					if (settings.onClosed() != false) {
						dialogClose();
					}
				} 
			dialogClose();
		});
		//判断
		$MyModal.keydown(function (e) { 
			if (e.which == 27) {dialogClose()};
			if (e.which == 13) {
				if ($MyModalOK != null) {
					$MyModalOK.click()
				}
			};
		}); 
		
		//modal移除后触发

		$MyModal.on('hidden.bs.modal', function () {
			if(settings.onFinsh != null)
				if (settings.onFinsh && typeof settings.onFinsh == "function") {//判断settings.onCancel是不是函数过程
					$MyModal.remove();
					if (settings.onFinsh() == false) {
						formInfo('事件执行失败');
					}
				} 
		});
		
		//移除对话框
		function dialogClose() {
			if (settings.onClose && typeof settings.onClose == "function") {
				if (settings.onClose($dialog) != false) {	
					$MyModal.hide(function(){
						$MyModal.remove();
					});										
										
				}
			} else {						
					$MyModal.hide(function(){
						$MyModal.remove();
					});				
			}
		}
			$('.modal-header').mousedown(function(){
				$('.modal-header').css('cursor','move');
			});
			$('.modal-header').mouseup(function(){
				$('.modal-header').css('cursor','default');
			});
				
			var $draggable = $('.modal-dialog').draggabilly({
  				// options...
				handle: '.modal-header'
			})	
			$('.modal-dialog').css("position","fixed");
			$MyModal.modal();					
	    };
	
function formInfo(content){				//提示框
			$.gritter.add({
				title: '<div class="ts-icon"><i class="fa  fa-exclamation-triangle"></i></div><div class="tscontent">'+content+'</div>',
				sticky: false,
				time: 3000,
				before_open: function(){
					if($('.gritter-item-wrapper').length >= 1)
					{
						$('.gritter-item-wrapper').remove();
					}
				},
				class_name: 'gritter-black',
			});
	
			return false;
		};	

//单击LOGO返回首页
$('.navbar-brand').on('click',function(){
	ajaxActive($(this).attr('href'));
});

//获得根目录
function getRootPath() {
	var strFullPath = window.document.location.href;
	var strPath = window.document.location.pathname;
	var pos = strFullPath.indexOf(strPath); 
		var prePath = strFullPath.substring(0, pos); 
		var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1); 
		return (prePath + postPath);
}
