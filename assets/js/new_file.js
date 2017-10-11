<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>教师管理</title>
		<link rel="shortcut icon" type="image/x-icon" href="logo_ico.ico"/>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
		<link href="css/review.css" style="text/css" rel="stylesheet">
		<link href="css/main.css" style="text/css" rel="stylesheet">
	</head>
	<body>
		<div class="wrap">
			<div class="nav_cont">
				<div class="nav_top">
					<div class="top_left">
						<a href="index_2.html"><img src="img/gx-logo-n.png" /></a>
					</div>
					<div class="top_right">
						<div class="phone">
							<img src="img/gx-sa-n.png" />
							<span>手机APP</span>
							<div class="codeImg">
								<img src="img/ct-ic-cd-nor.png" />
							</div>
						</div>
						<div class="news">
							<img src="img/ct-ic-xx-n.png"  />
							<span>消息</span>
						</div>
						<div class="user">
							<div>
								<img src="img/ct-ic-gx-n.png"  />
								<span id="usname">&nbsp;</span>
							</div>
							<ul class="dropdown-menu" id="dropMenu">
						            <li class="" id="review" class="active"><img src="img/gx-sh-n.png">&nbsp;教师管理</li>
						            <li id="infoSelf"><img src="img/gx-pr-n.png">&nbsp;个人信息</li>
					            <!-- <li><img src="img/gx-za-n.png">&nbsp;账户安全</li> -->
					            <!-- <li><img src="img/gx-wr-n.png">&nbsp;我的认证</li> -->
					            <li class="admin-out"><img src="img/gx-tc-n.png">&nbsp;退出</li>
					        </ul>
						</div>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="cont_left">
					<div class="newsMenu">
						<div class="newLeft">
							<img src="img/ct-ic-tx-n.png" />
						</div>
						<div class="newright">
							<p class="rigName">张老师</p>
							<p><span>V</span><i class="roletype">管理员</i></p>
						</div>
					</div>
					<div class="listMenu">
						<ul>
							<li class="listReview active"><span class="coin review active"></span>审核信息</li>
							<li class="listNew"><span class="coin dataNew"></span>数据概况</li>
							<li class="listDirectory"><span class="coin listDireSpan"></span>筛选目录</li>
							<!-- <li><span class="coin set"></span>班群详情</li> -->
						</ul>
					</div>
				</div>
				
				<div class="cont_right">
					<div class="right_top">
						<ul>
							<li class="schRev active">学校审核
								<!-- <span class="teacherNum">0</span> -->
							</li>
							<li class="teaRev">老师列表</li>
						</ul>
						<div class="rigNum">
							共<span class="numT"></span>老师
						</div>
					</div>
					<div class="right_top1">
						<ul>
							<li class="rigLi active" data-val="schoolInfo">学校详情</li>
							<li class="rigLi" data-val="teacherInfo">个人详情</li>
						</ul>
						<div class="checkDrop">
							<div class="rigCheck"><span data-id="3">一个月之内</span></div>
							<div class="timeList">
								<ul>
									<li data-id="1">三天之内</li>
									<li data-id="2">一周之内</li>
									<li data-id="3" class="active">一个月之内</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="right_top2">
						<ul>
							<li class="direTop active">筛选目录</li>
							<!-- <li class="direTopCheck">已筛选目录</li> -->
						</ul>
					</div>
					<div class="right_cent">
						<div class="tabOne">
							<table id="revTabOne" cellpadding="0" cellspacing="0">
								<thead>
									<tr class="tabLi tabListOne">
										<td width="250">姓名</td>
										<td>电话</td>
										<td width="100">操作</td>
										<td width="100">操作</td>
									</tr>
								</thead>
								<tbody>
									<tr text-align="center"><td colspan="4" style="border: 1px solid #dedede;">暂时无人需要审核</td></tr>
									<!--数据填充-->
								</tbody>
							</table>
						</div>
						<div class="tabTwo">
							<table id="revTabTwo" cellpadding="0" cellspacing="0">
								<thead>
									<tr class="tabLi tabListTwo">
										<td width="250">姓名</td>
										<td>电话</td>
										<td width="100">操作</td>
										<td width="100">操作</td>
									</tr>
								</thead>
								<tbody>
									<tr text-align="center"><td colspan="4" style="border: 1px solid #dedede;">暂时无人需要移除</td></tr>
									<!--数据填充-->
								</tbody>
							</table>
						</div>
						<div class="tabThree">
							<div class="selfInf">
								<p>个人数据信息浏览</p>
								<table id="revtabThree" cellpadding="0" cellspacing="0">
									<thead>
										<tr class="tabLi tabListThree">
											<td>科目</td>
											<td>作业标题</td>
											<td>发布时间</td>
											<td>截止时间</td>
											<td>题数</td>
											<td>完成情况</td>
											<td>未完成学生</td>
											<td>已完成学生</td>
											<td>批改数量</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td colspan="9" style="color:#25a1fb;">暂无数据</td>
										</tr>
										<!--数据填充-->
									</tbody>
								</table>
								<!-- 分页 -->
								<div class="paging2"></div>
							</div>
							
							<div class="overallInf">
								<p>总体数据信息浏览</p>
								<!--图表展示-->
						    	<div class="wrapChart">
						    		<div class="chooseChartList" data-id="1">
						    			<ul>
						    				<li data-id="1" class="active">布置作业量</li>
						    				<li data-id="2">班级学生人数</li>
						    				<li data-id="3">作业完成率</li>
						    			</ul>
						    		</div>
					            	<div class="pageChoose preChart"></div>
					                <div class="pageChoose nextChart"></div>
						            <div class="dChoose">
						                <div id="dContent1" class="dContent" data-id="1"></div>
						            </div>
						        </div>
								<table id="revtabFour" cellpadding="0" cellspacing="0">
									<thead>
										<tr class="tabLi tabListFour">
											<td>老师姓名</td>
											<td>科目</td>
											<td>作业标题</td>
											<td>发布时间</td>
											<td>截止时间</td>
											<td>题数</td>
											<td>完成情况</td>
											<td>未完成学生</td>
											<td>已完成学生</td>
											<td>批改数量</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td colspan="10" style="color:#25a1fb;">暂无数据</td>
										</tr>
										<!--数据填充-->
									</tbody>
								</table>
							</div>
						</div>				
						
						<!-- 筛选目录 -->
						<div class="filterDirectory">
							<div class="listDire">
								<div class="Directory_list" id="DireSubList">
									<div class="list_model">
										<p>学科:</p>
									</div>
									<div class="list_ul list_Sub list_choose">
										<ul><!-- 动态添加 --></ul>
									</div>
								</div>
								<div class="Directory_list" id="DireClasList">
									<div class="list_model">
										<p>年级:</p>
									</div>
									<div class="list_ul list_Clas list_choose">
										<ul><!-- 动态添加 --></ul>
									</div>
								</div>
								<div class="Directory_list" id="DireVersList">
									<div class="list_model">
										<p>版本:</p>
									</div>
									<div class="list_ul list_Vers list_choose">
										<ul><!-- 动态添加 --></ul>
									</div>
								</div>
								<div class="Directory_list" id="DireList">
									<div class="list_model">
										<p>选择目录</p>
									</div>
									<!-- <p>选择目录</p> -->
									<div class="list_ul list_checkbox">
										<!-- <p class="ulTitle">目录名称</p> -->
										<ul><!-- 动态添加 --></ul>
									</div>
								</div>
								<!-- <div class="savaDire">
									<p class="ReElection">重选</p>
									<p class="savaDiv">保存</p>
								</div> -->
							</div>
							<!-- <div class="checkDire">
								<div class="list_ul">
									<ul>动态添加</ul>
								</div>
							</div> -->
						</div>
						<!-- 分页 -->
						<div class="paging"></div>
					</div>
				</div>				
			</div>			
			<div class="false-bg"></div>
			<span class="false"></span>
		</div>
		<script src="js/jquery-2.1.1.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/echarts.min.js"></script>
   		<script src="js/jquery.cookie.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/main.js"></script>
		<script>
			$('.wrap').height($(window).height());
			var winWidth=$(window).width();
			var resizeWorldMapContainer = function () {
				$('#dContent1').width(735);
			};
			//设置容器高宽
			resizeWorldMapContainer();
			function echartAjaxArr(page){
				var adata =[];
				var homeworknum=[];
				var actNum=[];
				var studentnum=[];
				
				var dayMark = $('.rigCheck span').data('id');
				$.ajax({
					type:'post',
					url:'../web/qb/queryPieChartReport',
					data:{
						dayMark:dayMark,
						page:page,
						pageSize:10
					},
					success:function(res){
						var leng = res.data.list.length;
						var id = $('.chooseChartList').attr('data-id');
						var a,brr=[];
						if(leng > 0){
							$('.wrapChart').show();
							for(var i=0;i<res.data.list.length;i++){
								var act = (parseFloat(res.data.list[i].active) * 100).toFixed(2) + "%";
								adata.push(res.data.list[i].userName);
								homeworknum.push(res.data.list[i].homeworkNum);
								studentnum.push(res.data.list[i].classStudentNum);
								actNum.push(res.data.list[i].active);
								a="<span>布置作业量："+res.data.list[i].homeworkNum+"份</span><br/>\
								<span>总布置题数："+res.data.list[i].num+"题<span><br/>\
								<span>需要完成学生人次："+res.data.list[i].studentNum+"人<span><br/>\
								<span>已完成人次："+res.data.list[i].finishedNum+"人<span><br/>\
								<span>班级学生人数："+res.data.list[i].classStudentNum+"人<span><br/>\
								<span>学生作业完成率："+act+"</span>";
								brr.push(a);
							}
							if(id == 1){
								echartArr(adata,homeworknum,brr);	//布置作业量
							}else if(id == 2){
								echartArr(adata,studentnum,brr);	//班级学生人数
							}else if(id == 3){
								echartArr(adata,actNum,brr);	//作业完成率
							}
							//上一页下一页
							chartPage(res,page);
						}else{
							$('.wrapChart').hide();
						}
					},
					error:function(res){
						console.log(res.msg);
					}
				});
			}
			//上一页下一页
			function chartPage(res,page){
		    	if(res.data.hasPreviousPage > 0){
		    		$('.preChart').click(function(){
		    			echartAjaxArr(page*1-1);
		    		})
		    		//$('.preChart').removeClass('noPage');
		    	}/* else{
		    		$('.preChart').addClass('noPage');
		    	} */
		    	if(res.data.hasNextPage > 0){
		    		$('.nextChart').click(function(){
		    			echartAjaxArr(page*1+1);
		    		})
		    		//$('.nextChart').removeClass('noPage');	
		    	}/* else{
		    		$('.nextChart').addClass('noPage');					    		
		    	}*/
			}
			//用于使chart自适应高度和宽度,通过浏览器高宽计算容器高宽
			function echartArr(adata,homeworknum,arr){
				var myChart1 = echarts.init(document.getElementById('dContent1'));
				option1 ={
				 color: ['#1daef8'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        },
				        formatter:function (params, ticket, callback) {
				        	var cont = '';
				        	cont = params[0].name+'<br/>';
				        	cont += arr[params[0].dataIndex];
				        	return cont;
				        }
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : adata,
				            axisTick: {
				                alignWithLabel: true
				            }, 
				            axisLabel : {
				                show:true,
				                interval: 0,
				                rotate: 45,
				                margin: 10,
				                formatter:adata
				            }
				        }
				    ],
				    grid:{
				    	y2: 110
				    },
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'直接访问',
				            type:'bar',
				            barWidth: '40%', 
				            data:homeworknum
				        }
				    ]
				}
				myChart1.setOption(option1);
			}
			
			$('.chooseChartList ul li').on('click',function(){
				$(this).addClass('active').siblings().removeClass('active');
				var id = $(this).attr('data-id');
				$('.chooseChartList').attr('data-id',id);
				echartAjaxArr(1);
			});
			
			$('.nav_top li,.right_top li,.timeList li,.right_top2 li').on('click',function(){
				$(this).addClass('active').siblings().removeClass('active');
			});
			//切换学校审核，老师列表
			$('.right_top li').on('click',function(){
				var flag = $(this).hasClass('schRev');
				var flagB = $(this).hasClass('teaRev');
				if(flag){
					$('.tabOne').show();
					$('.tabTwo').hide();
					teaInfo(1);
				}else if(flagB){
					$('.tabOne').hide();
					$('.tabTwo').show();
					jiaocli(1);
				}
			});
			//左侧菜单切换
			$('.listMenu li').on('click',function(){
				var coin =$(this).find('.coin'); 
				$(this).addClass('active').siblings().removeClass('active');
				coin.addClass('active');
				coin.parents('.listMenu li').siblings().find('.coin').removeClass('active');
				var liAct = $(this).hasClass('listReview');
				var liActNew = $(this).hasClass('listNew');
				var liActDirectory = $(this).hasClass('listDirectory');
				if(liAct){
					//审核信息
					$('.schRev').trigger('click');
					$('.tabOne,.right_top').show();
					$('.tabThree,.right_top1,.right_top2,.paging,.filterDirectory').hide();
					infoInquire();		//个人信息查询
				}else if(liActNew){
					//数据概况					
					echartAjaxArr(1);
					$('.tabOne,.tabTwo,.right_top,.right_top2,.paging,.overallInf,.filterDirectory').hide();
					$('.tabThree,.right_top1').show();
					$('.rigLi:eq(0)').trigger('click');
					infoInquire();		//个人信息查询
				}else if(liActDirectory){
					$('.tabOne,.tabTwo,.right_top,.paging,.paging2,.overallInf,.tabThree,.right_top1').hide();
					$('.filterDirectory,.right_top2').show();
					DiretabList();			//学科年级版本
					//infoInquire();		//个人信息查询
				}
			});
			//切换教师详情，学校详情
			$('.rigLi').on('click',function(){
				$(this).addClass('active').siblings().removeClass('active');
				var val = $(this).data('val');
				if(val == 'schoolInfo'){
					$('.overallInf').show();
					$('.selfInf,.paging2').hide();
					selfDataInfo(1);
				}else if(val == 'teacherInfo'){
					$('.overallInf,.paging').hide();
					$('.selfInf').show();
					dataInfo(1);
				}
			});
			//选择时间段
			$('.timeList li').on('click',function(){
				var val = $(this).text();
				var id = $(this).data('id');
				$('.rigCheck span').text(val).data('id',id);
				var value = $('.rigLi.active').data('val');
				if(value == 'schoolInfo'){
					$('.overallInf').show();
					$('.selfInf').hide();
					$('.paging2').hide();
					selfDataInfo(1);
					echartAjaxArr(1);
				}else if(value == 'teacherInfo'){
					$('.overallInf').hide();
					$('.selfInf').show();
					$('.paging').hide();
					dataInfo(1);
				}
			});
			
			//选择年级学科版本
			function DirelistCont(res){
				//学科
				$('#DireSubList ul').empty();
				for(var i=0;i<res.data.length;i++){
					var cont = '<li title="'+res.data[i].complete+'" data-id='+res.data[i].id+'>'+res.data[i].name+'</li>';
					$('#DireSubList ul').append(cont);
				};
				xunHuan();
				$('.list_ul').on('click','li',function(){
					$(this).parents('.Directory_list').attr('data-id',$(this).data('id'));
					var index1=$('#DireSubList li.active').index();
					var index2=$('#DireClasList li.active').index();
					var Parents = $(this).parents('.list_ul');
					var listSub = Parents.hasClass('list_Sub');
					var listClas = Parents.hasClass('list_Clas');
					var listVers = Parents.hasClass('list_Vers');
					var liAct = $('.right_top2 li.active').hasClass('direTop');
					if(listSub){
						if(index1 != undefined){
							$('#DireClasList ul').empty();
							for(var j=0;j<res.data[index1].childList.length;j++){
								var cont = '<li title="'+res.data[index1].childList[j].complete+'" data-id='+res.data[index1].childList[j].id+'>'+res.data[index1].childList[j].name+'</li>';								
								$('#DireClasList ul').append(cont);
							}
							xunHuan();
							$('#DireClasList').show().attr("data-id","");
							$('#DireVersList').attr("data-id","").hide();
							$('#DireList,.savaDire').hide();
						}
					}else if(listClas){
						if(index2 != undefined && liAct){
							$('#DireVersList ul').empty();
							for(var k=0;k<res.data[index1].childList[index2].childList.length;k++){
								var cont = '<li data-id='+res.data[index1].childList[index2].childList[k].id+'>\
								'+res.data[index1].childList[index2].childList[k].name+'</li>';								
								$('#DireVersList ul').append(cont);
							}
							$('#DireVersList').show().attr("data-id","");
							$('#DireList,.savaDire').hide();
						}else{
							var nowTime = new Date().getTime();
							 var clickTime = $('.direTop').attr("ctime");
							 if( clickTime != 'undefined' && (nowTime - clickTime < 50)){
						        return false;
						     }else{
						    	 $('.direTop').attr("ctime",nowTime);
								//DireMuLu();	//返回已筛选目录
						     }
							$('.savaDiv').html('移除');
							$('#DireList').show();
						}
					}else if(listVers){
						$('#DireList').show();
						$('.savaDire').hide();
						var nowTime = new Date().getTime();
						 var clickTime = $('.direTop').attr("ctime");
						 if( clickTime != 'undefined' && (nowTime - clickTime < 3000)){
					        return false;
					     }else{
					    	 $('.direTop').attr("ctime",nowTime);
							DireMuLu();	//返回已筛选目录
					     }
						$('.savaDiv').html('保存');
					}
				});

			}
			//循环显示状态
			function xunHuan(){
				$('.Directory_list .list_ul li').each(function(){
					var liTitle = $(this).attr('title');
					if(liTitle == 2){
						$(this).attr('title','存在未筛选');
					}else if(liTitle == 1){
						$(this).attr('title','已筛选完');
					}else if(liTitle == 0){
						$(this).attr('title','未筛选');
					}
				});				
			}
			//返回学科年级版本
			function DiretabList(){
				$.ajax({
					url:'../web/qb/queryBookAttr',
					type:'post',
					success:function(res){
						$('#DireClasList,#DireVersList,#DireList,.savaDire').hide();
						$('#DireSubList').attr('data-id','');
						DirelistCont(res);
					},
					error:function(res){
						console.log(res.msg);
					}
				});
			}
			//返回目录
			function DireMuLu(){
				var subjectId=$('#DireSubList').attr('data-id');
				var gradeId=$('#DireClasList').attr('data-id');
				var editionId=$('#DireVersList').attr('data-id');
				var liAct = $('.right_top2 li.active').hasClass('direTop');
				if(liAct){
					var Json={
							subjectId:subjectId,
							gradeId:gradeId,
							editionId:editionId,
							page:1,
							pageSize:40
						}
					var url = '../web/qb/queryPubCatalogs';
				}/* else{
					var Json={
						subjectId:subjectId,
						gradeId:gradeId,
						page:1,
						pageSize:40
					}
					var url ='../web/qb/querySchoolPubCatalogs'
				} */
				$.ajax({
					url:url,
					type:'post',
					data:Json,
					success:function(res){
						if(res.result == 0){
							$('.list_checkbox ul').empty();
							var cont='';
							if(res.data.list != ''){								
								$('.list_checkbox ul').empty();
								var isSelected,className;
								for(var i=0;i<res.data.list.length;i++){
									isSelected = res.data.list[i].isSelected;
									if(isSelected == 0){
										className='';
									}else if(isSelected == 1){
										className='active';
									};
									cont+='<li class="'+className+'" title='+res.data.list[i].name+' data-id='+res.data.list[i].bookId+'><label><i class="seven_log seven_login"></i>'+res.data.list[i].name+'</label></li>';
								}
								$('.list_checkbox ul').append(cont);
							}else{
								var contNull = '<li>暂无目录哦</li>';
								$('.list_checkbox ul').append(contNull);
							}
						}
					},
					error:function(res){
						console.log(res.msg);
					}
				});
			}
			//多选
			$('.filterDirectory .list_checkbox').on('click','li',function(){
				$(this).toggleClass('active');
				var flag = $(this).hasClass('active');
				//console.log(flag);
				var dataId = $(this).data('id');
				var checked;
				if(flag && dataId != 'undefined'){
					checked = 4;	//保存
				}else{
					checked = 3;	//删除
				}
				var arr = new Array();
				var DireListId = $(this).data('id');
				$.ajax({
					url:'../web/qb/operaterSelectedCatalogs',
					type:'post',
					data:{
						bookIds:DireListId,
						op:checked
					},
					success:function(res){
						if(res.result == 0){
						    newPrompt(res.msg);
							//$('#DireClasList,#DireVersList,#DireList,.savaDire').hide();
							//$('#DireSubList').attr('data-id','');
							//$('#DireSubList li').removeClass('active');
						}else{
						    newPrompt(res.msg);
						}
					},
					error:function(res){
						newPrompt(res.msg);
					}
				});
			});
			$('.filterDirectory .list_choose').on('click','li',function(){
				$(this).addClass('active').siblings().removeClass('active');
			});
			//保存
			/* $('.savaDire').on('click','.savaDiv',function(){
				var arr = new Array();
				var DireList = $('#DireList').find('li.active');
				$(DireList).each(function(){
					DireListId = $(this).data('id');
					arr.push(DireListId);
				});
				var catalogIds = arr.join(',');
				var liAct = $('.right_top2 li.active').hasClass('direTop');		
				if(liAct){
					var url='../web/qb/saveSelectedCatalogs';
				}else{
					var url='../web/qb/deleteSelectedCatalogs';
				}
				$.ajax({
					url:url,
					type:'post',
					data:{
						catalogIds:catalogIds
					},
					success:function(res){
						if(res.result == 0){
						    newPrompt(res.msg);
							$('#DireClasList,#DireVersList,#DireList,.savaDire').hide();
							$('#DireSubList').attr('data-id','');
							$('#DireSubList li').removeClass('active');
						}else{
						    newPrompt(res.msg);
						}
					},
					error:function(res){
						newPrompt(res.msg);
					}
				});
			}); */
			//重选
			$('.ReElection').on('click',function(){
				$('.list_checkbox li').removeClass('active');
			});
			//筛选目录切换
			$('.right_top2 li').on('click',function(){
				DiretabList();		//返回学科年级版本
				$('#DireSubList li').removeClass('active');
			})
			
			//点击跳转审核页面
			$('#review').on('click',function(){
				window.location.href = "review.html";
			})
			//点击个人信息页面
			$('#infoSelf').on('click',function(){
				window.location.href = "infoSelf.html";
			})

			//个人信息查询
			infoInquire();
			function infoInquire(){
		    	var actA = $('.listMenu li.active').hasClass('listReview');
		    	var actB = $('.listMenu li.active').hasClass('listNew');
		    	var actC = $('.listMenu li.active').hasClass('listDirectory');
				$.ajax({
				    type:'post', 
				    url:"../web/qb/userInfor",
				    dataType: "json",
				    async: false,
				    success:function(res){
				    	var type = res.data.roleType;
				    	$('#usname,.rigName').html(res.data.name);
						if(type == 10 || type == 20){	//管理员
							if(type == 10){
								$('.roletype').html('超级管理员');
							}else if(type == 20){
								$('.roletype').html('管理员');
							}
							if(actA){
								//审核信息
								teaInfo(1);
							}else if(actB){
								//数据概况
								var val = $('.rigLi.active').data('val');
								if(val == 'teacherInfo'){
									dataInfo(1);
									$('.paging').hide();
								}else if(val == 'schoolInfo'){
									selfDataInfo(1);
									$('.paging2').hide();
								}
							}else if(actC){
								//筛选目录
								DiretabList();
								/* $('#DireClasList').show().attr("data-id","");
								$('#DireVersList').attr("data-id","").hide(); */
							}
						}else if(type == 30){	//普通用户
							$('.overallInf,.listDirectory').remove();
							$('.roletype').html('普通会员');
							$('.listReview,.right_top,.tabOne,.tabTwo').remove();
							$('.listNew').trigger('click');
							if(!act){
								selfDataInfo(1);
							}
						}
						
				    },
				    error:function(res){
				    	console.log(res.msg);
				    }
				});
			}
			//获取申请学校老师名称
			var contS = '<tr text-align="center"><td colspan="4" style="border: 1px solid #dedede;">暂时无人需要审核</td></tr>';
			var contT = '<tr text-align="center"><td colspan="4" style="border: 1px solid #dedede;">暂时无人需要移除</td></tr>';
			var contN = '<tr text-align="center"><td colspan="9" style="border: 1px solid #dedede;color: #25a1fb;">暂无数据</td></tr>';
			var contN2 = '<tr text-align="center"><td colspan="10" style="border: 1px solid #dedede;color: #25a1fb;">暂无数据</td></tr>';
			function teaInfo(page){
				$.ajax({
				    type:'post', 
				    url:"../web/qb/queryAllRequest",
				    dataType: "json",
				    data:{
				    	page:page,
				    	pageSize:10
				    },
					success: function(res) {
						var result = res.result;
						var leng = parseInt(res.data.total);
						$('.numT').html(leng+"名");
						if(leng > 0){
				    		var cont ='<span class="teacherNum">'+leng+'</span>';
				    		$('.schRev').append(cont);
				    	}else{
				    		$('.teacherNum').hide();
				    	}
						$('.numT').html(res.data.total+"名");
						var tbodyOne = $("#revTabOne tbody");
						if(result != 6){
							var cont = '';
							tbodyOne.empty();
							for(var i=0;i<res.data.list.length;i++){
								cont += '<tr data-val="'+res.data.list[i].recordId+'">\
									<td>'+res.data.list[i].name+'</td>\
									<td>'+res.data.list[i].phone+'</td>\
									<td class="refuseT">不通过<span>∣</span></td>\
									<td class="agreeT">通过</td>\
									</tr>';
							}
							tbodyOne.append(cont);
						}else{
							tbodyOne.empty();
							tbodyOne.append(contS);
						}
						getPage(res,page,1);	//分页
					},
					error:function(res){
				    	console.log(res.data.msg);						
					}
				});
			}		
			$('#revTabOne').on('click','.agreeT',function(){
				var This =$(this);
				var recordId = This.parents('tr').data('val');
				//同意
				var opId = 1;
				$.ajax({
				    type:'post', 
				    url:"../web/qb/updateRequest",
				    data:{
				    	recordId:recordId,
				    	op:opId
				    },
					success: function(res) {
						This.parent('tr[data-val="'+recordId+'"]').remove();
						var leng = $('#revTabOne tbody').find('tr').length;
						if(leng <= 0){
							$('#revTabOne tbody').append(contS);
						}
						infoInquire();
					},
					error:function(data){
					    newPrompt(data.msg);
					}
				});
			});	
			$('#revTabOne').on('click','.refuseT',function(){
				var This =$(this);
				var recordId = This.parents('tr').data('val');
				//拒绝
				var opId = 2;
				$.ajax({
				    type:'post',
				    url:"../web/qb/updateRequest",
				    data:{
				    	recordId:recordId,
				    	op:opId
				    },
					success: function(res) { 
						This.parent('tr[data-val="'+recordId+'"]').remove();
						infoInquire();
					},
					error:function(data){
					    newPrompt(data.msg);
					}
				});
			});

			function jiaocli(page){
				//获取学校老师名称
				$.ajax({
				    type:'post', 
				    url:"../web/qb/queryGroupList",
				    dataType: "json",
				    data:{
				    	page:page,
				    	pageSize:10
				    },
					success: function(res) {
						var result = res.result;
						var leng = parseInt(res.data.total);
						$('.numT').html(leng+"名");
						if(result != 6){
							var cont = '';
							$("#revTabTwo tbody").empty();
							for(var i=0;i<res.data.list.length;i++){
								cont += '<tr data-val="'+res.data.list[i].recordId+'" data-id="'+res.data.list[i].roleType+'">\
									<td>'+res.data.list[i].name+'</td>\
									<td>'+res.data.list[i].phone+'</td>\
									<td class="remove tabRemove">移除<span>∣</span></td>\
									<td class="admin">任命管理员</td>\
									</tr>';
							}
							$("#revTabTwo tbody").append(cont);
							//判断是否为管理员
							var twoTr = $('#revTabTwo tbody tr');
							$(twoTr).each(function(i,e){
								var id = $(this).data('id');
								if(id == 20){
									$(this).find('.admin').removeClass('tabAdmin').addClass('removeAdmin').text('取消管理员');
									$(this).find('.remove').removeClass('tabRemove').css('color','#ddd');
								}else if(id == 30){
									$(this).find('.admin').removeClass('removeAdmin').addClass('tabAdmin').text('任命管理员');
								}								
							});
						}else{
							$("#revTabTwo tbody").empty();
							$("#revTabTwo tbody").append(contT);
						}
						
						getPage(res,page,2);	//分页
						
					},
					error:function(data){
					    newPrompt(data.msg);
					}
				});	
			}
			
			$('#revTabTwo').on('click','.tabRemove',function(){
				var This =$(this);
				var recordId = This.parents('tr').data('val');
				//移除
				$.msgBox({
					title:'确认移除',
					content:'确认移除',
					onOk:function(){
						$.ajax({
						    type:'post', 
						    url:"../web/qb/removeMember",
						    data:{
						    	recordId:recordId
						    },
							success: function(res){
								This.parents('tr[data-val="'+recordId+'"]').remove();
							},
							error:function(data){
							    newPrompt(data.msg);
							}
						});
					}
				});
			});

			var len = $('#revTabTwo tbody tr').length;
			if(len <= 0){
				$('#revTabTwo tbody').empty();
				$('#revTabTwo tbody').append(contT);
			}
			//gerennew();
		
			//任命管理员
			$('#revTabTwo').on('click','.tabAdmin',function(){
				var thisP = $(this).parents('tr');
				var val = thisP.data('val');
				$.ajax({
				    type:'post', 
				    url:"../web/qb/changeRoleType",
				    data:{
				    	recordId:val,
				    	roleType:20
				    },
					success: function(res) {
						thisP.find('.admin').removeClass('tabAdmin').addClass('removeAdmin').text('取消管理员');
						thisP.find('.remove').removeClass('tabRemove').css('color','#ddd');
					},
					error:function(res){
						console.log(res.msg);
					}
				});
			});

			//取消管理员
			$('#revTabTwo').on('click','.removeAdmin',function(){
				var thisP = $(this).parents('tr');
				var val = thisP.data('val');
				$.ajax({
				    type:'post',
				    url:"../web/qb/changeRoleType",
				    data:{
				    	recordId:val,
				    	roleType:30
				    },
					success: function(res) {
						thisP.find('.admin').removeClass('removeAdmin').addClass('tabAdmin').text('任命管理员');
						thisP.find('.remove').addClass('tabRemove').css('color','#333');
					},
					error:function(res){
						console.log(res.msg);						
					}
				});
			});			

			//数据概括请求
			function dataInfo(page){	//普通老师获取个人班级数据详情
				var dayMark = $('.rigCheck span').data('id');
				$.ajax({
				    type:'post', 
				    url:"../web/qb/queryCommonUserReport",
				    data:{
				    	dayMark:dayMark,
				    	page:page,
				    	pageSize:10
				    },
					success: function(res) {
						var tbodyThree = $("#revtabThree tbody");
						if(res.data.list != ""){
							if(res.result == 0){
								var cont = '',contB = '',len;
								var fatime,contime;
								tbodyThree.empty();
								for(var i=0;i<res.data.list.length;i++){
									/* fatime = new Date(res.data.list[i].publishTime);
									contime = new Date(res.data.list[i].deadline);
									F = fatime.getFullYear() + '-'+(fatime.getMonth()+1 < 10 ? '0'+(fatime.getMonth()+1) : fatime.getMonth()+1) + '-'+fatime.getDate() + ' ';
									N = contime.getFullYear() + '-'+(contime.getMonth()+1 < 10 ? '0'+(contime.getMonth()+1) : contime.getMonth()+1) + '-'+contime.getDate() + ' '; */
									cont += '<tr>\
										<td id='+res.data.list[i].subjectId+'>'+res.data.list[i].subjectName+'</td>\
										<td>'+res.data.list[i].workName+'</td>\
										<td>'+res.data.list[i].publishTime+'</td>\
										<td>'+res.data.list[i].deadline+'</td>\
										<td>'+res.data.list[i].num+'</td>\
										<td>'+res.data.list[i].completionStatus+'</td>\
										<td title="'+res.data.list[i].unfinishStudents+'">'+res.data.list[i].unfinishStudents+'</td>\
										<td title="'+res.data.list[i].finishStudents+'">'+res.data.list[i].finishStudents+'</td>\
										<td>'+res.data.list[i].checkedNum+'</td>\
									</tr>';
								}
								tbodyThree.append(cont);
								//td内容为空
								$("#revtabThree tbody tr").each(function(){
						            var td=$(this).find("td");  
						            td.each(function(){
						                if($(this).html()==""||null){  
						                    $(this).html("/");  
						                }  
						            });
						        });
								getPage2(res,page,3);	//分页
							}else{
								tbodyThree.empty();
								tbodyThree.append(contN);
							}
						}else{
							console.log(res.msg);
							tbodyThree.empty();
							tbodyThree.append(contN);
						}
					},
					error:function(res){
				    	console.log(res.msg);
					}
				});
			}
			
			//管理员获取班级数据详情
			function selfDataInfo(page){
				var dayMark = $('.rigCheck span').data('id');
				$.ajax({
				    type:'post',
				    url:"../web/qb/queryAdministratorReport",
				    data:{
				    	dayMark:dayMark,
				    	page:page,
				    	pageSize:10
				    },
					success: function(res) {
						var tbodyFour = $("#revtabFour tbody");
						if(res.data.list != ""){
							if(res.result == 0){
								var cont = '',contB = '';
								var fatime,contime;
								var arrUn = [];
								tbodyFour.empty();
								for(var i=0;i<res.data.list.length;i++){
									arrUn.push(res.data.list[i].unfinishStudents);
									contB += '<tr>\
										<td id='+res.data.list[i].schoolId+'>'+res.data.list[i].userName+'</td>\
										<td id='+res.data.list[i].subjectId+'>'+res.data.list[i].subjectName+'</td>\
										<td title="'+res.data.list[i].workName+'">'+res.data.list[i].workName+'</td>\
										<td>'+res.data.list[i].publishTime+'</td>\
										<td>'+res.data.list[i].deadline+'</td>\
										<td>'+res.data.list[i].num+'</td>\
										<td>'+res.data.list[i].completionStatus+'</td>\
										<td title="'+res.data.list[i].unfinishStudents+'">'+res.data.list[i].unfinishStudents+'</td>\
										<td title="'+res.data.list[i].finishStudents+'">'+res.data.list[i].finishStudents+'</td>\
										<td>'+res.data.list[i].checkedNum+'</td>\
									</tr>';
								}
								tbodyFour.append(contB);
								//td内容为空
								$("#revtabFour tbody tr").each(function(){
						            var td=$(this).find("td");  
						            td.each(function(){ 
						                if($(this).html()==""||null){  
						                    $(this).html("/");  
						                }  
						            });
						        });
								getPage(res,page,4);	//分页
							}else{
								tbodyFour.empty();
								tbodyFour.append(contN2);
							}
						}else{
							tbodyFour.empty();
							tbodyFour.append(contN2);
							console.log(res.msg);
						}
					},
					error:function(res){
				    	console.log(res.msg);
					}
				});				
			}

			//分页
			function getPage(res,page,val){
				//分页处理
				if(res.data.pages>1){
	    			$('.paging').empty();
		    		$('.paging').show();
		    		var pg = '<div class="pag pag-prev">〈</div>\
						<div class="pag-inn"></div><div class="pag pag-next">〉</div>\
						<div class="jumpNum">前往<input class="XNum" type="text">页</div>'
					$('.paging').append(pg);
		    		var pag = '';
		    		//第一页
		    		if(res.data.pages>3&&page==1){
		    			$('.pag-inn').width(90);
		    			for(var i = 1;i<4;i++){
		    				pag += '<span class="pag-ab">'+i+'</span>'
		    			}
		    		}else if(res.data.pages<=3&&page==1){
		    			$('.pag-inn').width(30*res.data.pages)
		    			for(var i = 1;i<res.data.pages+1;i++){
		    				pag += '<span class="pag-ab">'+i+'</span>'
		    			}
		    		}
		    		//第二页
		    		if(res.data.pages>3&&page==2){
		    			$('.pag-inn').width(90);
		    			for(var i = 1;i<4;i++){
		    				pag += '<span class="pag-ab">'+i+'</span>'
		    			}
		    		}else if(res.data.pages<=3&&page==2){
		    			$('.pag-inn').width(30*res.data.pages);
		    			for(var i = 1;i<res.data.pages+1;i++){
		    				pag += '<span class="pag-ab">'+i+'</span>'
		    			}
		    		}
		    		//第二页往上
		    		else if(res.data.pages<=3&&page>2){
		    			$('.pag-inn').width(30*res.data.pages);
	    				for(var i = 1;i<=res.data.pages;i++){
		    				pag += '<span class="pag-ab">'+i+'</span>'
		    			}
		    		}
		    		else if(res.data.pages>3&&page>2&&res.data.pages-page+1>=3){
		    			$('.pag-inn').width(90);
	    				for(var i = page-1;i<page*1+2;i++){
		    				pag += '<span class="pag-ab">'+i+'</span>'
		    			}
		    		}else if(res.data.pages>3&&page>2&&res.data.pages-page<3){
		    			$('.pag-inn').width(90);
		    			for(var i =res.data.pages-2;i<=res.data.pages;i++){
		    				pag += '<span class="pag-ab">'+i+'</span>'
		    			}
		    		}
		    		$('.pag-inn').append(pag);
		    		if(page==1){
		    			$('.pag-ab').eq(0).css({"background":"#00adf5","color":"#fff"});
		    			$('.pag-ab').eq(0).addClass('pag_on');
		    		}else if(res.data.pages>3&&page>1&&res.data.pages-page+1>=3||page==2){
		    			$('.pag-ab').eq(1).css({"background":"#00adf5","color":"#fff"});
		    			$('.pag-ab').eq(1).addClass('pag_on');
		    		}else{
		    			$('.pag-ab').eq(res.data.pageNum-res.data.pages+2).css({"background":"#00adf5","color":"#fff"});
		    			$('.pag-ab').eq(res.data.pageNum-res.data.pages+2).addClass('pag_on');
		    		}
		    	}else{
		    		$('.paging').hide();
		    	}
				//点击某一页
		    	$('.pag-ab').click(function(){
		    		topage($(this).html());
		    	})
		    	//上一页下一页				    	
		    	if(res.data.hasPreviousPage){
		    		$('.pag-prev').unbind('click');
		    		$('.pag-prev').click(function(){
		    			topage(page*1-1);
		    		})
		    	}
		    	if(res.data.hasNextPage){
		    		$('.pag-next').unbind('click');
		    		$('.pag-next').click(function(){
		    			topage(page*1+1);
		    		})
		    	}
				$('.XNum').keydown(function(event){
					var num = $(this).val();
					if(event.keyCode == 13){
						if(num > 0 && num <= res.data.pages && !(/[^0-9]{1,}/.test(num))){
							topage(num);
			    		}else{
			    			$('.XNum').val("");
			    		}
					}
				});
				function topage(page){
					if(val == 1){
						teaInfo(page);
					}else if(val == 2){
						jiaocli(page);
					}else if(val == 4){
						selfDataInfo(page);
					}
				}
			}
			//分页2
			function getPage2(res,page,val){
				//分页处理
				//分页处理
				if(res.data.pages>1){
	    			$('.paging2').empty();
		    		$('.paging2').show();
		    		var pg = '<div class="pag2 pag-prev2">〈</div>\
						<div class="pag-inn2"></div><div class="pag2 pag-next2">〉</div>\
						<div class="jumpNum2">前往<input class="XNum2" type="text">页</div>';
					$('.paging2').append(pg);
		    		var pag = '';
		    		//第一页
		    		if(res.data.pages>3&&page==1){
		    			$('.pag-inn2').width(90);
		    			for(var i = 1;i<4;i++){
		    				pag += '<span class="pag-ab2">'+i+'</span>'
		    			}
		    		}else if(res.data.pages<=3&&page==1){
		    			$('.pag-inn2').width(30*res.data.pages);
		    			for(var i = 1;i<res.data.pages+1;i++){
		    				pag += '<span class="pag-ab2">'+i+'</span>'
		    			}
		    		}
		    		//第二页
		    		if(res.data.pages>3&&page==2){
		    			$('.pag-inn2').width(90);
		    			for(var i = 1;i<4;i++){
		    				pag += '<span class="pag-ab2">'+i+'</span>'
		    			}
		    		}else if(res.data.pages<=3&&page==2){
		    			$('.pag-inn2').width(30*res.data.pages);
		    			for(var i = 1;i<res.data.pages+1;i++){
		    				pag += '<span class="pag-ab2">'+i+'</span>'
		    			}
		    		}
		    		//第二页往上
		    		else if(res.data.pages<=3&&page>2){
		    			$('.pag-inn2').width(30*res.data.pages);
	    				for(var i = 1;i<=res.data.pages;i++){
		    				pag += '<span class="pag-ab2">'+i+'</span>'
		    			}
		    		}
		    		else if(res.data.pages>3&&page>2&&res.data.pages-page+1>=3){
		    			$('.pag-inn2').width(90);
	    				for(var i = page-1;i<page*1+2;i++){
		    				pag += '<span class="pag-ab2">'+i+'</span>'
		    			}
		    		}else if(res.data.pages>3&&page>2&&res.data.pages-page<3){
		    			$('.pag-inn2').width(90);
		    			for(var i =res.data.pages-2;i<=res.data.pages;i++){
		    				pag += '<span class="pag-ab2">'+i+'</span>'
		    			}
		    		}
		    		$('.pag-inn2').append(pag);
		    		if(page==1){
		    			$('.pag-ab2').eq(0).css({"background":"#00adf5","color":"#fff"});
		    			$('.pag-ab2').eq(0).addClass('pag_on2');
		    		}else if(res.data.pages>3&&page>1&&res.data.pages-page+1>=3||page==2){
		    			$('.pag-ab2').eq(1).css({"background":"#00adf5","color":"#fff"});
		    			$('.pag-ab2').eq(1).addClass('pag_on2');
		    		}else{
		    			$('.pag-ab2').eq(res.data.pageNum-res.data.pages+2).css({"background":"#00adf5","color":"#fff"});
		    			$('.pag-ab2').eq(res.data.pageNum-res.data.pages+2).addClass('pag_on2');
		    		}
		    	}else{
		    		$('.paging2').hide();
		    	}
				//点击某一页
		    	$('.pag-ab2').click(function(){
		    		topage2($(this).html());
		    	})
		    	//上一页下一页				    	
		    	if(res.data.hasPreviousPage){
		    		$('.pag-prev2').unbind('click');
		    		$('.pag-prev2').click(function(){
		    			topage2(page*1-1);
		    		})
		    	}
		    	if(res.data.hasNextPage){
		    		$('.pag-next2').unbind('click');
		    		$('.pag-next2').click(function(){
		    			topage2(page*1+1);
		    		})
		    	}
				$('.XNum2').keydown(function(event){
					var num = $(this).val();
					if(event.keyCode == 13){
						if(num > 0 && num <= res.data.pages && !(/[^0-9]{1,}/.test(num))){
							topage2(num);
			    		}else{
			    			$('.XNum2').val("");
			    		}
					}
				});
				function topage2(page){
					if(val == 3){
						dataInfo(page);
					}
				}
			}
			//信息提示
			function newPrompt(cont){
				$('.false-bg').css('display','block');
				$('.false').css('display','block').html(cont);
				setTimeout(function(){
					$('.false-bg').css('display','none');
					$('.false').css('display','none');
				},3000)
			}
			
			//退出提示
			$('.admin-out').on('click',function(){
				$.msgBox({
					title:'是否退出',	
					content:'是否退出',
					onOk:function(){
						$.removeCookie('Miz-seven' ,'', { expires: -1 });
						$.removeCookie('Miz-holdings', '', { expires: -1 });
						$.removeCookie('Miz-holdings-psd', '', { expires: -1 });
						$.removeCookie('Miz-one', '', { expires: -1 });
						self.location='login.html';
					}
				});
			});
		</script>
	</body>
</html>
