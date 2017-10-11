	var Linkstr=
		{
			error:'<span class="unlinkicon"><i class="fa fa-unlink"></i></span><span class="unlink_txt unlink_top">与服务器连接已断开</span><span class="unlink_txt">正在尝试第<span class="unlink_time">1</span>次重连</span>',
			restart:'<span class="lg-spin-icon"><i class="fa fa-spinner fa-spin"></i></span><span class="Page_txt">正在连接服务器</span>',
			success:'<span class="lg-success-icon"><i class="fa fa-check-circle"></i></span><span class="Page_txt">服务器连接成功</span>',
			loding:'<span class="lg-spin-icon"><i class="fa fa-spinner fa-spin"></i></span><span class="Page_txt">正在加载页面</span>',
			Falied:'<span class="lg-Falied-icon"><i class="fa fa-times-circle"></i></span><span class="Page_txt">服务器连接失败</span>',
		}
	var Link_num=0;
	var Websocket_type=null;
	//Web_Socket();
	function Web_Socket(){
		web_loding('restart');
		var ws = null;
		var url = null;
		var urlPath = "/fm/online";
		var urlJs = "/fm/sockjs/online";
		var transports = [];
		if (window.location.protocol == 'http:') {
			url = 'ws://127.0.0.1';
		} else {
			url = 'wss://127.0.0.1';
		}
		if ('WebSocket' in window) {
			ws = new WebSocket(url);
		} else {
			ws = new SockJS(url, undefined, {protocols_whitelist : transports});
		}
		ws.onopen = function() {
			ws.send("{'join':'"+$.cookie('admin_name') +"'}");
			Socket_success();
		};
		ws.onmessage = function(event) {
			restart_Rooms(event.data)
		};
		ws.onclose = function(event) {
			ws.send("{'leave':'"+$.cookie('admin_name') +"'}");
			Socket_error()
		};
	}
	//Web_Socket()连接失败	
	function Socket_error(){
		Link_num++;
		web_loding('error',function(){
			$('.unlink_time').html(Link_num);
		});
		if(Link_num>=1 && Link_num<=3){
			error_Rooms('error');
			setTimeout(function(){				
				Web_Socket();			
			},3000);				
		}else{
			web_loding('Falied');
			Websocket_type=false;
			Link_num=0;
		}
	}
	
	//Web_Socket()连接成功
	function Socket_success(){
		web_loding('success');
		error_Rooms('success');
		if($('.romClass').length>0){
			restart_Rooms('{"absd":"All"}');
		}
		Link_num=0;
		Websocket_type=true;
	}
	function Socket(){
		return	Websocket_type;
	}
	
	//状态提示
	function web_loding(type,cellback){
		var str=null;
		switch (type){ 
			 case "loding":
			   str=Linkstr.loding;
			   break;
			 case "success":
				str=Linkstr.success;
			   break;  
			 case "error":
				str=Linkstr.error;
			   break; 
			 case "restart":
				str=Linkstr.restart;
			   break; 
			 case "Falied":
				str=Linkstr.Falied;
			   break; 
		 } 		
		if($('.web_link').length==0){
			var b='<div class="web_link">\
					<div class="web_bg" ></div>\
					<div class="web_content"><div class="web_fade">'+str+'</div></div>\
				</div>';
			var list=$(b).appendTo($('body'));
			list.fadeIn(600)
		}else{
			var obj=$('.web_link .web_content .web_fade');
			$(obj).fadeOut(600,function(){
				obj.html(str).fadeIn(600);
				if(cellback!=null) cellback();			
			});
		}	
	}
	//销毁状态提示
	function web_Unloding(){
		$('.web_link').fadeOut(260,function(){
			$(this).remove();	
		});
	}
	//刷新员工和房间
	function restart_Rooms(data){
		web_Unloding();
		var json=JSON.parse(data);
		$(json).each(function(index, element) {		
			if($('.romClass').length>0){
				switch (element.Notity){ 
					 case "All":		//刷新全部
					   Rooms_ajax();
					   Dueue_ajax();
					   break;
					 case "RoomInfoChanged"://刷新房间
					   Rooms_ajax();
					   break;  
					 case "EmployeeInfoChanged"://刷新技师
					   Dueue_ajax();
					   break;
					 case "Single_Employeecheanged":
					   single_Dueue_ajax(element.Dueue);
					   break;
					 case "Single_Roomscheanged":
					   single_Rooms_ajax(element.Rooms);
					   break;
					 case "amountchangeed":
					   single_Rooms_ajax(element.Rooms);
					   break; 
				 } 	
			}
		});
	}
	//服务器连接失败房间样式
	function error_Rooms(type){
		if(type=="error"){
			$('.romClass').addClass('Link_error')	
			$('.romnav').addClass('Link_error')	
		}else if(type=="success"){
			$('.romClass').removeClass('Link_error')	
			$('.romnav').removeClass('Link_error')	
		}		
	}