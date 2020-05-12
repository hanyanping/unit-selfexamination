var phone = '',sdAirportList = [],dxAirportList = [];
var auditNum = 1;
$(function(){
    phone = localStorage.getItem('phone');
    getDataList();
/**
 * 
 * @deprecated tabs切换
 */
    $('.tabBox .tabItem').on('click', function () {
        auditNum = $(this).attr('data-id');
        $(this).addClass('selectTabBox').siblings().removeClass('selectTabBox');
        if(auditNum == 1){
            showData(sdAirportList);
        }else if(auditNum == 2){
            showData(dxAirportList);
        }
    });
})
function showData(data){
    $(".content").html('')
    var str = '';
    $.each(data,function(i,item){
        console.log(item.deptName)
        str+='<div class="staticsBox">'
        +'<div class="staticsName font14 marginleft12">'+item.deptName+'</div>'
        +'<div class="countBox flexBetween">'
        +'<div class="tatal count"><p class="number fontWeight">'+item.tjSize+' </p><p class="clerk">提交总量</p> </div>'
        +'<div class="tatal count"><p class="number fontWeight">'+item.rwSize+' </p><p class="clerk">本月任务总数</p> </div>'
        +'<div class="tatal count"><p class="number fontWeight">'+item.dwcSize+' </p><p class="clerk">本月待完成数</p> </div>'
        +'</div>'
        +'<div class="countBox flexBetween">'
        +'<div class="tatal count"><p class="number fontWeight">'+item.zxjcSize+' </p><p class="clerk">专项检查<br>待完成数</p> </div>'
        +'<div class="tatal count"><p class="number fontWeight">'+item.yhSize+' </p><p class="clerk">隐患数</p> </div>'
        +'<div class="tatal count"><p class="number fontWeight">'+item.dzgSize+' </p><p class="clerk">待整改数</p> </div>'
        +'</div>'
        +'</div>';

    })
    $(".content").append($(str))
}
function getDataList(){
    $(".zhegaiceng").css({
        'display': 'block'
    });
    var data = {
        phone: encrypt(phone),
    };
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + 'companycheck/getUserRole',
        timeout: timeDelay,
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        data: data,
        success: function(response) {
            $(".zhegaiceng").css({'display': 'none'})
            if(response.rescode == 200){
                sdAirportList = response.sdAirportList;
                dxAirportList = response.dxAirportList
                showData(sdAirportList);

            }else{
                tanwin(response.resdes)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $(".zhegaiceng").css({'display': 'none'})
            dxAirportList = [{deptName:'12',tjSize:'124',rwSize:'24',dwcSize: '43',zxjcSize: '455',yhSize: '3',dzgSize: '44'},{deptName:'你4好1',tjSize:'412',rwSize:'24',dwcSize: '3',zxjcSize: '455',yhSize: '3',dzgSize: '44'}]
             
            sdAirportList = [{deptName:'你好12',tjSize:'12',rwSize:'2',dwcSize: '3',zxjcSize: '455',yhSize: '3',dzgSize: '44'},{deptName:'你好1',tjSize:'12',rwSize:'2',dwcSize: '3',zxjcSize: '455',yhSize: '3',dzgSize: '44'}]
            showData(sdAirportList);
        },
        complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
            $(".zhegaiceng").css({'display': 'none'})
        }
    });
}
