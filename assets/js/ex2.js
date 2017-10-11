$(function(){
	
	var setion = '';
	//渲染知识点,获取知识点
	getKnowage();
	//获取年级
	nianji();
	//单选切换
	getq();
	$('.list_choose li,.right_top .menu_li,.down_style li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	//多选
	$('.answer_li').on('click',function(){
		$(this).toggleClass('active');
	});
	$('.list_checkbox').on('click','li',function(){
		$(this).toggleClass('active');
	});
	//选择学段学科
	$('.down_class').on('click',function(){
		$('.down_menu').addClass('active');
	});
	$('.messBg').on('click',function(){
		$('.down_menu').removeClass('active');
	});
	$('.messSel').on('click','li',function(){
		var thi = $(this); 
		$('.down_menu').removeClass('active');
		$('.messSel li:not(thi)').removeClass('active');
		thi.addClass('active');
	});
	//点击录入题目跳转页面
	$('.addque').click(function(){
		//console.log(111);
		//$('.addques-out').show();
		//$('.addques').show();
		//$('.addques-bot').children('iframe').attr('src','ueditor/index.html');
		window.location.href = "ueditor1/index.html";
	})
	var json = [];
	//获取旧题库信息
	function getOldQuestion(grade,quesTypeList,page){
		$.ajax({
		    type:'get', 
		    url:"../web/qb/queryOldQuestion",
		    dataType: "json",
		    data:{
		    	page:page
		    },
		    success:function(res){
		    	if(res.result!="-1"){
		    		if(!res.data){
		    			newPrompt('无题目')
		    		}else if(res.data.list!=''){
		    			$('.cont_right').empty();
		    			
		    			for(var i=0;i<res.data.list.length;i++){
		    				var que = '';
		    				json = res.data.list;
			    			var type='';
			    			var dif='';
			    			var question='';
			    			var anssw = '';
			    			var shou = '';
			    			if(res.data.list[i].questionType=="1"){
			    				anssw='<div class="ansP">【答案】</div>'+'<div class="ques-an">'+res.data.list[i].answer+'</div>';
			    			}else if(res.data.list[i].questionType=="2"){
			    				if(res.data.list[i].answer=='0'){
			    					anssw='<div class="ansP">【答案】</div>'+'<div class="ques-an">错误</div>';
			    				}else{
			    					anssw='<div class="ansP">【答案】</div>'+'<div class="ques-an">正确</div>';
			    				}
			    			}else if(res.data.list[i].questionType=="3"){
			    				anssw='<div class="ansP">【答案】</div>'+'<div class="ques-an">'+res.data.list[i].answer+'</div>';
			    			}else if(res.data.list[i].questionType=="4"){
			    				anssw='<div class="ansP">【答案】</div>'+'<div class="ques-an"><p>'+res.data.list[i].answer+'</p></div>';
			    			}else if(res.data.list[i].questionType=="5"){
			    				anssw='<div class="ansP">【答案】</div>'+'<div class="ques-an"><p>'+res.data.list[i].answer+'</p></div>';
			    			}
			    			if(!res.data.list[i].answer){
			    				anssw = '';
			    			}
			    			if(res.data.list[i].diff==""){
			    				dif = '';
			    			}else if(res.data.list[i].diff=="1"){
			    				//dif = '<span id="que-dif"></span>';
			    				dif = '简单';
			    			}else if(res.data.list[i].diff=="3"){
			    				dif = '较易';
			    			}else if(res.data.list[i].diff=="5"){
			    				dif = '一般';
			    			}else if(res.data.list[i].diff=="7"){
			    				dif = '较难';
			    			}else if(res.data.list[i].diff=="9"){
			    				dif = '困难';
			    			}
			    			if(res.data.list[i].collection=='0'){
			    				shou = '收藏'
			    			}else if(res.data.list[i].collection=='1'){
			    				shou = '已收藏'
			    			}
			    			if($('.quNum').html()!='0'){
			    				$('.quNum').html(res.data.total);
			    			}
			    			
			    			if(res.data.list[i].questionType=="4"){
			    				question = '<div class="que-an">'+res.data.list[i].question+'</div><br />' +
			    				'<div class="que-an">A:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionA+'</div>'+
			    				'<div class="que-an">B:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionB+'</div>'+
			    				'<div class="que-an">C:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionC+'</div>'+
			    				'<div class="que-an">D:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionD+'</div>'
			    			}else if(res.data.list[i].questionType=="5"){
			    				question = '<div class="topContent">'+res.data.list[i].question+'</div><br />' +
			    				'<div class="que-an">A:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionA+'</div>'+
			    				'<div class="que-an">B:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionB+'</div>'+
			    				'<div class="que-an">C:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionC+'</div>'+
			    				'<div class="que-an">D:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionD+'</div>'+
			    				'<div class="que-an">E:&nbsp;&nbsp;&nbsp;'+res.data.list[i].optionE+'</div>'
			    			}else{
			    				question = '<div class="que-an">'+res.data.list[i].question+'</div><br />'
			    			}
			    			var quest = ''
				    			if(res.data.list[i].parse!=""){
				    				quest = '<div class="ansP">【解析】</div>'+'<div class="ques-an">'+res.data.list[i].parse+'</div>';
				    			}
			    			var know='';
		    				var k ='';
							que += '<div class="topics">\
								<div class="cen">'+
									question+
								'</div>\
									<div class="topjsonans" style="display:none;">'+res.data.list[i].answer+'</div>\
									<div class="topjsonaut" style="display:none;">'+res.data.list[i].auto+'</div>\
									<div class="topjsongraid" style="display:none;">'+res.data.list[i].gradeId+'</div>\
									<div class="topjsonopa" style="display:none;">'+res.data.list[i].optionA+'</div>\
									<div class="topjsonopb" style="display:none;">'+res.data.list[i].optionB+'</div>\
									<div class="topjsonopc" style="display:none;">'+res.data.list[i].optionC+'</div>\
									<div class="topjsonopd" style="display:none;">'+res.data.list[i].optionD+'</div>\
									<div class="topjsonope" style="display:none;">'+res.data.list[i].optionE+'</div>\
									<div class="topjsonpars" style="display:none;">'+res.data.list[i].parse+'</div>\
									<div class="topjsonque" style="display:none;">'+res.data.list[i].question+'</div>\
									<div class="topjsonqueid" style="display:none;">'+res.data.list[i].questionId+'</div>\
									<div class="topjsonquetype" style="display:none;">'+res.data.list[i].questionType+'</div>\
									<div class="topjsontypename" style="display:none;">'+res.data.list[i].qyName+'</div>\
									<div class="topjsonsource" style="display:none;">'+res.data.list[i].source+'</div>\
									<div class="topjsonsubjectid" style="display:none;">'+res.data.list[i].subjectId+'</div>\
								<div class="bott"> '+
									anssw+'<br  />'+quest+
								'</div>\
								<div class="addnews">\
									<div class="choiseKnowlage">\
										<span>知识点:</span>\
										<div class="questionKnowlaghint">选择知识点</div>\
									</div>\
									<div class="choiseChapter">\
										<span>章节:</span>\
										<div class="questionChapthint">选择章节</div>\
									</div>\
									<div class="choiseKnowlage">\
										<span>年级:</span>'+
										grade+
									'</div>\
									<div class="choisetype">\
										<span class="typeName" data-type="type'+res.data.list[i].questionType+'">题型:</span>\
										<div class="newschose" data-qyid="">'+res.data.list[i].qyName+'<span class="choseQuetype"></span></div>\
										<ul class="quetypeUl">'+quesTypeList+
									'</ul>\
										</div>\
									<div class="choisetype">\
										<span>难度:</span>\
										<div class="diffchose" data-diff ="5">普通<span class="choseQuetype"></span></div>\
										<ul class="quediffUl">\
											<li data-dif="1">简单</li>\
											<li data-dif="3">较易</li>\
											<li data-dif="5">普通</li>\
											<li data-dif="7">较难</li>\
											<li data-dif="9">困难</li>\
										</ul>\
									</div>\
								</div>\
								<div class="cacheques">\
									<span class="cacheOk">通过</span>\
									<span class="cacheNo">不通过</span>\
								</div>\
							</div>';
							$('.cont_right').append(que);
				    	}
		    			
		    		}
		    	}
		    	for(var i = 0;i<$('p').length;i++){
		    		if($('p:eq('+i+')').text()==''){
		    			$('p:eq('+i+')').hide();
		    		}
		    	}
	    		var datatype = $('.topics:eq(0)').find('.choisetype').find('.typeName').attr('data-type');
	    		$('.topics:eq(0)').addClass('topicson');
    			$('.topics:eq(1)').addClass('topicson1');
		    	//旧题库信息添加
	    		addNews(grade,quesTypeList,page);
		    },
		    error:function(res) {
		    	newPrompt('查询失败')
//		    	self.location='login.html';
		    }
		});	
	}
	//获取年级
	function nianji(){
		//获取个人信息
		var grade = '';
		$.ajax({
		    type:'get', 
		    url:"../web/qb/userInfor",
		    dataType: "json",	   
		    async: false,
		    success:function(res){
		    	$('.down_class').text('当前 : '+res.data.subjectName+res.data.gradeName);
		    	$('.user').find('span').html(res.data.name);
		    	if(res.data.phaseId==1){
		    		grade = '<div class="newschosegrad" data-gradeid="1"><span class="nograde"></span>一年级</div>\
		    			<div class="newschosegrad" data-gradeid="2"><span class="nograde"></span>二年级</div>\
		    			<div class="newschosegrad" data-gradeid="3"><span class="nograde"></span>三年级</div>\
		    			<div class="newschosegrad" data-gradeid="4"><span class="nograde"></span>四年级</div>\
		    			<div class="newschosegrad" data-gradeid="5"><span class="nograde"></span>五年级</div>\
		    			<div class="newschosegrad" data-gradeid="6"><span class="nograde"></span>六年级</div>'
		    	}else if(res.data.phaseId==2){
		    		grade = '<div class="newschosegrad" data-gradeid="7"><span class="nograde"></span>七年级</div>\
		    			<div class="newschosegrad" data-gradeid="8"><span class="nograde"></span>八年级</div>\
		    			<div class="newschosegrad" data-gradeid="9"><span class="nograde"></span>九年级</div>'
		    	}else if(res.data.phaseId==3){
		    		grade = '<div class="newschosegrad" data-gradeid="10"><span class="nograde"></span>高一</div>\
		    			<div class="newschosegrad" data-gradeid="11"><span class="nograde"></span>高二</div>\
		    			<div class="newschosegrad" data-gradeid="12"><span class="nograde"></span>高三</div>'
		    	}
		    	
		    },
		    error:function(res) {
		    }
		});
		//题型查询
		var quesTypeList = ''
		$.ajax({
		    type:'get', 
		    url:"../web/qb/queryQuestionTypeList",
		    dataType: "json",	   
		    async: false,
		    success:function(res){
		    	for(var i = 0;i<res.data.length;i++){
		    		quesTypeList+= '<li class="typeno type'+res.data[i].questionType+'" data-id="'+res.data[i].qyId+'">'+res.data[i].typeName+'</li>'
		    	}
		    },
		    error:function(res) {
		    }
		});
		//获取旧题库信息
    	getOldQuestion(grade,quesTypeList,1);
	}
	//渲染知识点,获取知识点,学科,id
	function getKnowage(){
		//查询知识点
		$.ajax({
		    type:'get', 
		    url:"../web/qb/queryKnowledgeList",
		    dataType: "json",	   
		    success:function(res){
		    	if(res.data!=''){
		    		$('.knowlageInner').empty();
		    		$('.knowlageInner').append('<ul class="knowlage_Name"></ul>');
			    	for (var i = 0; i < res.data.length; i++) {
			        	knowlage(res.data[i]);
			        }
			    	cliknow();
		    	}  
		    },
		    error:function(res) {
		    }
		});
		
	}function getKnowage(){
		//查询知识点
		$.ajax({
		    type:'get', 
		    url:"../web/qb/queryKnowledgeList",
		    dataType: "json",	   
		    success:function(res){
		    	if(res.data!=''){
		    		$('.knowlageInner').empty();
		    		$('.knowlageInner').append('<ul class="knowlage_Name"></ul>');
			    	for (var i = 0; i < res.data.length; i++) {
			        	knowlage(res.data[i]);
			        }
			    	cliknow();
		    	}  
		    },
		    error:function(res) {
		    }
		});
		//查询章节
		$.ajax({
		    type:'get', 
		    url:"../web/qb/queryChaptersTree",
		    dataType: "json",	   
		    success:function(res){
		    	if(res.data!=''){
		    		$('.ChapterInner').empty();
		    		$('.ChapterInner').append('<ul class="Chapter_Name"></ul>')
			    	for (var i = 0; i < res.data.length; i++) {
			    		 var childList = res.data[i];
						 $('.Chapter_Name').append(
							'<li class="ChaptName Chapter_close">'+
								'<i class="Chapter-on"></i>'+
								'<span class="Chapter_in ge'+childList.id+'" title="'+childList.name+'" data-id="'+childList.id+'">'+
								'<span class="ChapterClose"></span>'+
								'<span class="Chapterl">'+childList.name+'</span>'+	
							'</span></li>');
						 Chapter(childList)
			        }
		    	}  
		    	for(var i = 0;i<$('.ChaptName').length;i++){
		        	if($('.ChaptName:eq('+i+')').children('ul').length==0){
		        		$('.ChaptName:eq('+i+')').children('.Chapter_in').addClass('ChapterCanChose')
		        		$('.ChaptName:eq('+i+')').find('.Chapter_in').children('span').removeClass('ChapterClose');
		        		$('.ChaptName:eq('+i+')').find('.Chapter_in').children('span').addClass('noChapterin');
		            }
		        }
		    	$('.Chapterl').removeClass('noChapterin');
		    	$('.Chapter_in').click(function(){
		    		if($(this).parent('.ChaptName').hasClass('Chapter_close')){
		    			$(this).parent('.ChaptName').addClass('Chapter_open');
		    			$(this).parent('.ChaptName').removeClass('Chapter_close');
		    		}else{
		    			$(this).parent('.ChaptName').addClass('Chapter_close');
		    			$(this).parent('.ChaptName').removeClass('Chapter_open');
		    		}
		    	})
		    	//章节选择
				$(".ChapterCanChose").click(function(){
					var a = '<div class="questionChaptera" data-chapid="'+$(this).attr('data-id')+'">'+$(this).text()+'<span class="delchap"></span></div>';
					if($(this).hasClass('onchoseKnow')){
						$(this).addClass('onchoseKnow')
					}else{
						$(this).removeClass('onchoseKnow');
					}
					for(var i = 0;i<$('.topicson').find('.questionChaptera').length;i++){
						if($('.topicson').find('.questionChaptera:eq('+i+')').attr('data-chapid')==$(this).attr('data-id')){
							$('.topicson').find('.questionChaptera:eq('+i+')').remove();
							a= '';
						}
					}
					$('.topicson').find('.questionChapthint').before(a);	
					//删除章节
					$('.choiseChapter:eq(0)').on('click','.delchap',function(){
						$(this).parent('.questionChaptera').remove();
						
					})
				})
		    },
		    error:function(res){
		    }
		});
	}
	//章节子目录
	function Chapter(child){
		if(child.hasOwnProperty("childList")){
				for (var j = 0; j < child.childList.length; j++) {
		            var childList = child.childList[j];
		            var children = $(".ge"+child.id).next("ul");
		            if (children.length == 0) {
		            	$(".ge"+child.id).parent('.ChaptName').append("<ul class='ChapterName'></ul>")
		            }
		             $(".ge"+child.id).next('ul').append(
		            		 '<li class="ChaptName Chapter_close">'+
								'<i class="Chapter-on"></i>'+
								'<span class="Chapter_in ge'+childList.id+'" title="'+childList.name+'" data-id="'+childList.id+'">'+
								'<span class="ChapterClose"></span><span class="Chapterl">'+childList.name+'</span>'+'</span></li>');
		             Chapter(child.childList[j])
		        }
		}
	}
	function knowlage(data){
		if(data.childList){
			if($('.knowlage_Name').children('li').length==0){
				for(var i = 0;i< data.childList.length; i++){
					 var childList = data.childList[i];
					 $('.knowlage_Name').append(
						'<li class="knowName know_close">'+
							'<i class="know-on"></i>'+
							'<span class="knowlage_in go'+childList.id+'" title="'+childList.name+'" data-id="'+childList.id+'">'+
							'<span class="knowlageClose"></span>'+
								childList.name+	
						'</span></li>');
					  
					 knowlage(data.childList[i])
				}
			}else{
				for (var j = 0; j < data.childList.length; j++) {
		            var childList = data.childList[j];
		            var children = $(".go"+data.id).next("ul");
		            if (children.length == 0) {
		            	$(".go"+data.id).parent('.knowName').append("<ul class='knowlageName'></ul>")
		            }
		             $(".go"+data.id).next('ul').append(
		            		 '<li class="knowName know_close">'+
								'<i class="know-on"></i>'+
								'<span class="knowlage_in go'+childList.id+'" title="'+childList.name+'" data-id="'+childList.id+'">'+
								'<span class="knowlageClose"></span>'+childList.name+'</span></li>');
		             
		             knowlage(data.childList[j])
		        }
			}
		}
	}
	
	function cliknow(){
		 for(var i = 0;i<$('.knowName').length;i++){
		    	if($('.knowName:eq('+i+')').children('ul').length==0){
		    		$('.knowName:eq('+i+')').children('.knowlage_in').addClass('knowlageCanChose')
		    		$('.knowName:eq('+i+')').find('.knowlage_in').children('span').removeClass('knowlageClose');
		    		$('.knowName:eq('+i+')').find('.knowlage_in').children('span').addClass('noknowlagein');
		        }
		    }
	    
		$('.knowlage_in').click(function(){
			if($(this).parent('.knowName').hasClass('know_close')){
				$(this).parent('.knowName').addClass('know_open');
				$(this).parent('.knowName').removeClass('know_close');
			}else{
				$(this).parent('.knowName').addClass('know_close');
				$(this).parent('.knowName').removeClass('know_open');
			}
		})
		//知识点选择添加
		$(".knowlageCanChose").click(function(){
			var a = '<div class="questionKnowlagea" data-knowid="'+$(this).attr('data-id')+'">'+$(this).text()+'<span class="delKnowlage"></span></div>';
			if($(this).hasClass('onchoseKnow')){
				$(this).addClass('onchoseKnow')
			}else{
				$(this).removeClass('onchoseKnow');
			}
			for(var i = 0;i<$('.topicson').find('.questionKnowlagea').length;i++){
				if($('.topicson').find('.questionKnowlagea:eq('+i+')').attr('data-knowid')==$(this).attr('data-id')){
					$('.topicson').find('.questionKnowlagea:eq('+i+')').remove();
					a= '';
				}
			}
			$('.topicson').find('.questionKnowlaghint').before(a);	
			//删除知识点
			$('.choiseKnowlage:eq(0)').on('click','.delKnowlage',function(){
				
				$(this).parent('.questionKnowlagea').remove();
				$('.go'+$(this).parent('.questionKnowlagea').attr('data-knowid')).removeClass('onchoseKnow');
				
			})
		})
	}
	/*var quejson = [];
	if(localStorage.question){
		quejson =$.parseJSON(localStorage.question)
		//console.log(quejson)
		//console.log(typeof(quejson))
	}*/
	
	function addNews(grade,quesTypeList,page){
		//筛选题型
		var typeid = $('.topicson').find('.choisetype').find('.typeName').attr('data-type');
		var Ul =  $('.topicson').find('.choisetype').find('.quetypeUl');
		var len = $('.topicson').find('.choisetype').find('.quetypeUl').find('li').length;
		$('.topicson').find('.choisetype').find('.quetypeUl').find('.'+typeid).removeClass('typeno')
		$('.topicson').find('.choisetype').find('.quetypeUl').find('.typeno').remove();
		
		//判断题型下面是否有子目录
		if($('.topicson').find('.quetypeUl').find('li').length==1){
			$('.topicson').find('.newschose').text($('.topicson').find('.quetypeUl').find('li').text());
			$('.topicson').find('.newschose').attr('data-qyid',$('.topicson').find('.quetypeUl').find('li').attr('data-id'))
			$('.topicson').find('.newschose').css({'color':'#adadad'}).addClass('newschoseon')
			$('.topicson').find('.quetypeUl').remove();
		}
		//题型选择
		$('.topicson').find('.newschose').click(function(){
			$('.topicson').find('.quetypeUl').show();
			$('.topicson').find('.quetypeUl').on('click','li',function(){
				$('.topicson').find('.newschose').html($(this).text()+'<span class="choseQuetype"></span>');
				$('.topicson').find('.newschose').addClass('newschoseon');
				$('.topicson').find('.newschose').attr('data-qyid',$(this).attr('data-id'))
				$('.topicson').find('.quetypeUl').hide();
			})
		})
		//难度选择
		$('.topicson').find('.diffchose').click(function(){
			$('.topicson').find('.quediffUl').show();
			$('.topicson').find('.quediffUl').on('click','li',function(){
				$('.topicson').find('.diffchose').html($(this).text()+'<span class="choseQuetype"></span>');
				$('.topicson').find('.diffchose').attr('data-diff',$(this).attr('data-dif'));
				$('.topicson').find('.quediffUl').hide();
			})
		})
		//知识点选择
		$('.questionKnowlaghint').click(function(){
			$('.cont_left').show();
			$('.cont_left1').hide();
			$('.cont_left').addClass('cont_left_on');
			setTimeout(function(){
				$('.cont_left').removeClass('cont_left_on');
			},500)
		})
		//章节选择
		$('.questionChapthint').click(function(){
			$('.cont_left').hide();
			$('.cont_left1').show();
			$('.cont_left1').addClass('cont_left_on');
			setTimeout(function(){
				$('.cont_left1').removeClass('cont_left_on');
			},500)
		})
		//年级选择
		$('.topicson').find('.newschosegrad').click(function(){
			if($(this).find('span').hasClass('nograde')){
				$(this).find('span').addClass('hasgrade').removeClass('nograde');
				$(this).siblings().find('span').removeClass('hasgrade').addClass('nograde');
			}
		});
		$('.cacheOk').unbind('click').click(function(){
			NumberCount();			//数量
			if($('.topicson').find('.choiseKnowlage').find('.questionKnowlagea').length==0){
				newPrompt('请选择知识点')
			}else if($('.topicson').find('.choiseChapter').find('.questionChaptera').length==0){
				newPrompt('请选择章节')
			}else if($('.topicson').find('.choiseKnowlage').find('.hasgrade').length==0){
				newPrompt('请选择年级')
			}else if($('.topicson').find('.choisetype').find('.newschoseon').length==0){
				newPrompt('请选择题型')
			}else{
				var j = [];
				for(var i =0;i<$('.topicson').find('.choiseKnowlage').find('.questionKnowlagea').length;i++){
					var s = $('.topicson').find('.choiseKnowlage').find('.questionKnowlagea:eq('+i+')').attr('data-knowid');
					var ss = s.split('_');
					j.push({'id':ss[ss.length-1],'name':$('.choiseKnowlage').find('.questionKnowlagea:eq('+i+')').text()});
				}
				
				var jso ={};
				jso['answer']= $('.topicson').find('.topjsonans').html();
				jso['auto']= $('.topicson').find('.topjsonaut').html();
				jso['diff']=  $('.topicson').find('.diffchose').attr('data-diff');
				jso['optionA']= $('.topicson').find('.topjsonopa').html();
				jso['optionB']= $('.topicson').find('.topjsonopb').html();
				jso['optionC']= $('.topicson').find('.topjsonopc').html();
				jso['optionD']= $('.topicson').find('.topjsonopd').html();
				jso['optionE']= $('.topicson').find('.topjsonope').html();
				jso['parse']= $('.topicson').find('.topjsonpars').html();
				jso['question']= $('.topicson').find('.topjsonque').html();
				jso['questionId']= $('.topicson').find('.topjsonqueid').html();
				jso['questionType']= $('.topicson').find('.topjsonquetype').html();
				jso['source']= $('.topicson').find('.topjsonsource').html();
				jso['typeName']= $('.topicson').find('.topjsontypename').html();
				jso['subjectId']= $('.topicson').find('.topjsonsubjectid').html();
				jso['qyId']= $('.topicson').find('.newschoseon').attr('data-qyid');
				jso['nodeList']=j;
				jso['gradeId']=$('.choiseKnowlage').find('.hasgrade').parent('.newschosegrad').attr('data-gradeid');
				jso['typeName']=$('.topicson').find('.newschoseon').text();
				//保存草稿
				$.ajax({
				    type:'post', 
				    url:"../web/qb/draftOldQuestion",
				    dataType: "json",	   
				    async: false,
				    data:{
				    	oldQuestionId:jso['questionId'],
				    	syn:0
				    },
				    success:function(res){
				    	console.log(res)
				    },
				    error:function(res) {
				    }
				});
				//quejson.push(jso);
				$('.knowlage_in').removeClass('onchoseKnow');
				//localStorage.question=JSON.stringify(quejson);
				//localStorage.removeItem('question');
				//console.log(localStorage.question)
				$('.topicson').remove();
				$('.topics:eq(0)').addClass('topicson').removeClass('topicson1');
				$('.topics:eq(1)').addClass('topicson1');
				if($('.topics').length<3){
					getOldQuestion(grade,quesTypeList,page*1+1)
				}
				addNews(grade,quesTypeList,page);
			}
		})
		$('.cacheNo').unbind('click').click(function(){
			NumberCount();			//数量
			//放弃旧题目
			$.ajax({
			    type:'post', 
			    url:"../web/qb/draftOldQuestion",
			    dataType: "json",	   
			    async: false,
			    data:{
			    	oldQuestionId:$('.topicson').find('.topjsonqueid').html(),
			    	syn:2
			    },
			    success:function(res){
			    	console.log(res)
			    },
			    error:function(res) {
			    }
			});
			$('.topicson').remove();
			$('.topics:eq(0)').addClass('topicson').removeClass('topicson1');
			$('.topics:eq(1)').addClass('topicson1');
			if($('.topics').length<3){
				getOldQuestion(grade,quesTypeList,page*1+1)
			}
			addNews(grade,quesTypeList,page);
		})
		/*$('.delque').unbind('click').click(function(){
			//清空待录入题目
			$.ajax({
			    type:'post', 
			    url:"../web/qb/draftOldQuestion",
			    dataType: "json",	   
			    async: false,
			    data:{
			    	webQuestionListJson:localStorage.question
			    },
			    success:function(res){
			    	if(res.result=="0"){
			    		newPrompt('录入成功');
			    	}
			    },
			    error:function(res) {
			    }
			});
		})*/
		$('.tonewlist').unbind('click').click(function(){
			//旧题库录入新题库
			$.ajax({
			    type:'post', 
			    url:"../web/qb/importOldQuestion",
			    dataType: "json",
			    async: false,
			    data:{
			    	webQuestionListJson:localStorage.question
			    },
			    success:function(res){
			    	if(res.result=="0"){
			    		localStorage.removeItem('question')
			    		newPrompt('录入成功');
			    		nianji();
			    	}
			    },
			    error:function(res) {
			    }
			});
		});
		$('.showque').unbind('click').click(function() {
			 var nowTime = new Date().getTime();
			 var clickTime = $(this).attr("ctime");
			 if( clickTime != 'undefined' && (nowTime - clickTime < 3000)){
		        return false;
		     }else{
			    $(this).attr("ctime",nowTime);
				var height = $(window).height() -300;
				$.ajax({
				    type:'post', 
				    url:"../web/qb/previewDraftOldQuestion",
				    dataType: "json",	   
				    async: false,
				    success:function(res){
				    	if(res.result=="0"){
				    		console.log(res);
				    	}
				    },
				    error:function(res) {
			    		console.log(res);
				    }
				});
				$.MyModal({
					title: '预览',
					Name: 'showOldques',
					content: 'showOldques.html',
					height: height+"px",
					width:"950px",
					footer: true,
					onOk:function(){
						$.ajax({
						    type:'post', 
						    url:"../web/qb/importOldQuestion",
						    dataType: "json",
						    async: false,
						    data:{
						    	webQuestionListJson:localStorage.question
						    },
						    success:function(res){
						    	if(res.result=="0"){
						    		$('.modal').fadeOut();
									$(".modal-body").empty();
									localStorage.removeItem('question');
									nianji();
						    	}
						    },
						    error:function(res) {
						    }
						});
					},
					onFinsh: function() {
						
					}
				});
	     	}
		});
	}
	//单选切换
	function getq(){
		var list;
		if(localStorage.question){
			list = $.parseJSON(localStorage.question);
		}else{
			list = {}
		}
		
		
		//console.log(list)
		$('.question').empty();
		var que='';
		for(var i=0;i<list.length;i++){
			var type='';
			var dif='';
			var question='';
			var anssw = '';
			var grade ='';
			if(list[i].gradeId ==1){
				grade = '一年级'
			}else if(list[i].gradeId ==2){
				grade = '二年级'
			}else if(list[i].gradeId ==3){
				grade = '三年级'
			}else if(list[i].gradeId ==4){
				grade = '四年级'
			}else if(list[i].gradeId ==5){
				grade = '五年级'
			}else if(list[i].gradeId ==6){
				grade = '六年级'
			}else if(list[i].gradeId ==7){
				grade = '七年级'
			}else if(list[i].gradeId ==8){
				grade = '八年级'
			}else if(list[i].gradeId ==9){
				grade = '九年级'
			}else if(list[i].gradeId ==10){
				grade = '高一'
			}else if(list[i].gradeId ==11){
				grade = '高二'
			}else if(list[i].gradeId ==12){
				grade = '高三'
			}
			if(list[i].questionType=="1"){
				anssw= '<div>【答案】 '+list[i].answer+'</div>';
			}else if(list[i].questionType=="2"){
				if(list[i].answer=='0'){
					anssw='<div >【答案】 错误</div>'
				}else{
					anssw='<div >【答案】 正确</div>'
				}
			}else if(list[i].questionType=="3"){
				anssw= list[i].answer;
			}else if(list[i].questionType=="4"){
				anssw='<div>【答案】 '+list[i].answer+'</div>';
			}else if(list[i].questionType=="5"){
				anssw='<div>【答案】 '+list[i].answer+'</div>';
			}
			if(!list[i].answer){
				anssw = '';
			}
			if(list[i].diff==""){
				dif = '';
			}else if(list[i].diff=="1"){
				dif = '简单';
			}else if(list[i].diff=="3"){
				dif = '较易';
			}else if(list[i].diff=="5"){
				dif = '一般';
			}else if(list[i].diff=="7"){
				dif = '较难';
			}else if(list[i].diff=="9"){
				dif = '困难';
			}
			if(list[i].questionType=="4"){
				question = '<div class="que-an">'+list[i].question+'</div><br />' +
				'<div class="que-an">A:&nbsp;&nbsp;&nbsp;'+list[i].optionA+'</div>'+
				'<div class="que-an">B:&nbsp;&nbsp;&nbsp;'+list[i].optionB+'</div>'+
				'<div class="que-an">C:&nbsp;&nbsp;&nbsp;'+list[i].optionC+'</div>'+
				'<div class="que-an">D:&nbsp;&nbsp;&nbsp;'+list[i].optionD+'</div>'
			}else if(list[i].questionType=="5"){
				question = '<div class="topContent">'+list[i].question+'</div><br />' +
				'<div class="que-an">A:&nbsp;&nbsp;&nbsp;'+list[i].optionA+'</div>'+
				'<div class="que-an">B:&nbsp;&nbsp;&nbsp;'+list[i].optionB+'</div>'+
				'<div class="que-an">C:&nbsp;&nbsp;&nbsp;'+list[i].optionC+'</div>'+
				'<div class="que-an">D:&nbsp;&nbsp;&nbsp;'+list[i].optionD+'</div>'+
				'<div class="que-an">E:&nbsp;&nbsp;&nbsp;'+list[i].optionE+'</div>'
			}else{
				question = '<div class="que-an">'+list[i].question+'</div><br />'
			}
			var quest = ''
				if(list[i].parse!=""){
					quest = list[i].parse
				}
			var know=''
			var k ='';
			var que = '';
			que += '<div class="topicshow">'+
					'<div class="dahui">打回</div>'+
					'<div class="yichu">移除</div>'+
				'<div class="top">'+
				'<div class="type">'+
				'	题型：<span class="topicsType">'+list[i].typeName+'</span>'+
				'	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
				'	难度：<span class="topicsDifficult">'+dif+'</span>'+
				'	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
				'	年级：<span class="topicsgrade">'+grade+'</span>'+
				'</div>'+
			'</div>'+
			'<div class="cen1">'+
				question+
			'</div>'+
				'<div class="topjson" style="display:none;">'+list[i].questionId+'</div>'+
				'<div class="lenid" style="display:none;">'+i+'</div>'+
			'<div class="bott1">'+
				anssw+'<br  />'+quest+
			'</div>'+
		'</div>';
		
		$('.question').append(que);
		}
		$('.btn-ye').val('确认提交');
		$(".topicshow").on('mouseover',function(){
			$(this).addClass('topicshowon');
			$(this).find('.dahui').show();
			$(this).find('.yichu').show();
			$(this).on('mouseout',function(){
				$(this).removeClass('topicshowon');
				$(this).find('.dahui').hide();
				$(this).find('.yichu').hide();
			})
			questionUpdata();
		})
		//驳回或移除
		function questionUpdata(){
			$('.yichu').unbind('click').click(function(){
				NumberCount();			//数量
				$.ajax({
				    type:'post', 
				    url:"../web/qb/draftOldQuestion",
				    dataType: "json",	   
				    async: false,
				    data:{
				    	oldQuestionId:$(this).parents('.topicshow').find('.topjson').text(),
				    	syn:2
				    },
				    success:function(res){
				    	
				    	if(res.result==0){
				    		$(this).parents('.topicshow').remove();
				    		var jslist =  $.parseJSON(localStorage.question);
				    		var lenid = $(this).parents('.topicshow').find('.lenid').text();
				    		jslist.splice(lenid,1);
				    		localStorage.question=JSON.stringify(jslist);
				    		getq();
				    		nianji();
				    	}
				    },
				    error:function(res) {
				    }
				});
			})
			$('.dahui').unbind('click').click(function(){
				NumberCount();			//数量
				$.ajax({
				    type:'post', 
				    url:"../web/qb/draftOldQuestion",
				    dataType: "json",	   
				    async: false,
				    data:{
				    	oldQuestionId:$(this).parents('.topicshow').find('.topjson').text(),
				    	syn:-1
				    },
				    success:function(res){
				    	if(res.result==0){
				    		$(this).parents('.topicshow').remove();
				    		var jslist =  $.parseJSON(localStorage.question);
				    		var lenid = $(this).parents('.topicshow').find('.lenid').text();
				    		jslist.splice(lenid,1);
				    		localStorage.question=JSON.stringify(jslist);
				    		nianji();
				    		getq();
				    		
				    	}
				    },
				    error:function(res) {
				    }
				});
			})
		}
	}
	
	//数量
	NumberCount();
	function NumberCount(){
		$.ajax({
			 type:'post', 
			    url:"../web/qb/countDraftOldQuestion",
			    dataType: "json",
			    success:function(res){
			    	console.log(res.data);
			    	if(res.result == 0){
			    		$('.wrap .numQ').html(res.data);
			    	}
			    },
			    error:function(){
			    	console.log(res);
			    }
		});
	}
	
	//信息提示
	function newPrompt(cont){
		$('.false-bg,.false').show();
		$('.false').html(cont);
		setTimeout(function(){
			$('.false-bg,.false').hide();
		},3000)
	}
});

