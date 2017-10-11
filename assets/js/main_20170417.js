// JavaScript Document
//对话框
$.msgBox=function(options){
 var settings = {
		type:0,
		title:'提示',	
		content:'',
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
	var $msgBox=$('<div class="modal fade" id="messageModal" tabindex="-1" data-keyboard="true" data-backdrop="static"></div>').appendTo($('body'));
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
	if (!!window.ActiveXObject || "ActiveXObject" in window) {
//		if(settings.height != null){														//设置modal垂直居中													
//				var bodyHeighth=$(window).height();					
//				var lgtop=(bodyHeighth-parseInt(settings.height))/2-230;
//				$msgBoxdialog.css('top',lgtop);
//		}else{
//				$msgBoxdialog.css('top',150);				
//		}
		$msgBoxdialog.css('top',150);
		var bodyWidth=$(document).innerWidth();									
		var lgleft=(bodyWidth-parseInt($msgBoxdialog.innerWidth()))/2;
		$msgBoxdialog.css('left',lgleft);
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
	var $draggable = $msgBox.find('.modal-content').draggabilly({
			// options...
			handle: '.modal-header'
		});
	$msgBox.find('.modal-dialog').css("position","fixed");
	$msgBox.modal();
	if($('body .modal').length > 1 ){
		var n=parseFloat($msgBox.find('.modal-backdrop').css('opacity'))/2;
		$msgBox.find('.modal-backdrop').css('opacity',n);
	}
};


//公用Modal
$.MyModal=function(options){
 var settings = {
		Name:'Mymodal',
		title:'我的应用',	
		ok:'确定',
		cancel:'取消',
		backdrop:true,
		content:null,
		page:null,
		width:null,
		height:null,
		overflow:null,
		onOk: null,
		class:null,
		onCancel: null,
		onClosed:null,		//关闭按钮回调函数
		footer:true,		//Modal底部
		onFinsh:function(){},
	   }
	$.extend(settings, options);
	var $MyModal=$('<div class="modal fade '+settings.class+'" id="'+settings.Name+'" tabindex="-1" data-keyboard="true" data-backdrop="'+settings.backdrop+'"></div>').appendTo($('body'));
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
			cache:false,
			timeout: 5000,//请求超时
			beforeSend:function() {
			   $MyModalbody.html('<div class="modalload"><i class="fa-li fa fa-spinner fa-spin"></i></div>');
			 },
			complete:function(data,status) {
				if(status=='timeout'){//超时,status还有success,error等值的情况
　　　				　　 ajaxTimeoutTest.abort();
　　　　　  				formInfo("请求超时，请重试");
　　　　				}
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
	if (!!window.ActiveXObject || "ActiveXObject" in window) {
		if(settings.height != null){														//设置modal垂直居中													
				var bodyHeighth=$(window).height();					
				var lgtop=(bodyHeighth-parseInt(settings.height))/2-50;
		}else{
				var lgtop='150px';		
		}
		var bodyWidth=$(document).innerWidth();									
		var lgleft=(bodyWidth-parseInt($MyModaldialog.innerWidth()))/2;
//		$MyModaldialog.css({'left':lgleft,'top':lgtop});
		$MyModaldialog.css({'left':lgleft,'top':150});
	}
		

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
		if (e.which == 13) {
			if ($MyModalOK != null) {
				$MyModalOK.click()
			}
		};
	}); 
	
	//modal移除后触发

	$MyModal.on('hidden.bs.modal', function () {
		if(settings.onFinsh != null){
			if (settings.onFinsh && typeof settings.onFinsh == "function") {//判断settings.onCancel是不是函数过程
				if (settings.onFinsh() == false) {
					formInfo('事件执行失败');
				}
			} 
		}
		$MyModal.remove();
	});
	
	//移除对话框
	function dialogClose() {
		if (settings.onClose && typeof settings.onClose == "function") {
			if (settings.onClose($dialog) != false) {	
				$MyModal.modal('hide');				
			}
		} else {						
				$MyModal.modal('hide');			
		}
	}
		$MyModal.find('.modal-header').mousedown(function(){
			$('.modal-header').css('cursor','move');
		});
		$MyModal.find('.modal-header').mouseup(function(){
			$('.modal-header').css('cursor','default');
		});
			
		var $draggable = $MyModal.find('.modal-content').draggabilly({
			// options...
			handle: '.modal-header'
		})	
		$MyModal.find('.modal-dialog').css("position","fixed");
		$MyModal.modal();
		if($('body .modal').length > 1 ){
			if(settings.backdrop){
				var n=parseFloat($MyModal.find('.modal-backdrop').css('opacity'))/2;
				$MyModal.find('.modal-backdrop').css('opacity',n);
			}else{
				$MyModal.prepend('<div class="modal-backdrop in"></div>');
			}			
		}else if(!settings.backdrop){
			$MyModal.prepend('<div class="modal-backdrop in"></div>');
		}
	};

//监听页面中是否需要弹出模态框
$('body').on('click','[data-modal="true"]',function(e){
	e.preventDefault();					// 阻止浏览器默认事件
	var element=$(this);
	$.MyModal({
		Name:element.data('name') || '#MyModal',
		title:element.data('title') || '模态框',	
		width:element.data('width') || null,
		height:element.data('height') || null,
		content:element.attr('href'),
		page:element.data('page') || null,					
		overflow:element.data('overflow') || 'auto',
		footer:element.data('footer') || false,
		ok:element.data('ok') || '确定',
		class:element.data('class') || null,
		onFinsh:element.data('onFinsh') || null,
		onOk:function(){
			element.data('onOk') || null
		}
	});
});

//图片上传预览
$.fn.extend({
	uploadPreview: function(opts) {
		var _self = this,
			_this = $(this);
		opts = jQuery.extend({
			Img: "ImgPr",
			Width: 100,
			Height: 100,
			ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
			Callback: function() {}
		}, opts || {});
		_self.getObjectURL = function(file) {
			var url = null;
			if(window.createObjectURL != undefined) {
				url = window.createObjectURL(file)
			} else if(window.URL != undefined) {
				url = window.URL.createObjectURL(file)
			} else if(window.webkitURL != undefined) {
				url = window.webkitURL.createObjectURL(file)
			}
			return url
		};
		_this.change(function() {
			//解决jQuery不兼容$.browser api
			jQuery.browser = {};
			(function() {
				jQuery.browser.msie = false;
				jQuery.browser.version = 0;
				if(navigator.userAgent.match(/MSIE ([0-9]+)./)) {
					jQuery.browser.msie = true;
					jQuery.browser.version = RegExp.$1;
				}
			})();
			
			if(this.value) {
				if(!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
					alert("选择文件错误,图片类型必须是" + opts.ImgType.join("，") + "中的一种");
					this.value = "";
					return false
				}
				if($.browser.msie) {
					try {
						$("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]))
					} catch(e) {
						var src = "";
						var obj = $("#" + opts.Img);
						var div = obj.parent("div")[0];
						_self.select();
						if(top != self) {
							window.parent.document.body.focus()
						} else {
							_self.blur()
						}
						src = document.selection.createRange().text;
						document.selection.empty();
						obj.hide();
						obj.parent("div").css({
							'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)',
							'width': opts.Width + 'px',
							'height': opts.Height + 'px'
						});
						div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src
					}
				} else {
					$("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]))
				}
				opts.Callback()
			}
		})
	}
});