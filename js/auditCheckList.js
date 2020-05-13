var phone = '',checkList = [];
var auditStatus = 1;
$(function(){
    phone = localStorage.getItem('phone')
    getList(auditStatus);
    /**
 * 
 * @deprecated tabs切换
 */
    $('.tabBox .tabItem').on('click', function () {
        auditStatus = $(this).attr('data-id');
        $(this).addClass('selectTabBox').siblings().removeClass('selectTabBox');
        if(auditStatus == 1){
            getList(auditStatus);
        }else if(auditStatus == 2){
            getList(auditStatus);
        }
    });
})
    
function getList(auditStatus){
    $(".zhegaiceng").css({
        'display': 'block'
    });
    var data = {
        auditStatus: auditStatus,
        phone: encrypt(phone),
    };
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + 'companycheck/getAuditCheckList',
        timeout: timeDelay,
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        data: data,
        success: function(response) {
            $(".zhegaiceng").css({'display': 'none'})
            if(response.rescode == 200){
                checkList = response.checkList;
                if(checkList.length == 0){
                    $(".nodata").removeClass('none')
                }else{
                    resetData()
                    $(".nodata").addClass('none')
                }
            }else{
                tanwin(response.resdes)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $(".zhegaiceng").css({'display': 'none'})
            checkList = [
                {applyNum:1,submitTime: "1020-021-12",name:"大地大地",companyName: '毕竟大地顶顶顶顶 反反复复付',airportName:'首都机场',deptName:'空防',checkType:'1',checkTypeName:'日常检查',checkStatusNum:'1',checkStatusName:'民警审核不通过'},
                {applyNum:1,submitTime: "1020-021-12",name:"大地大地",companyName: '毕竟大地顶顶顶顶 反反复复付',airportName:'首都机场',deptName:'空防',checkType:'1',checkTypeName:'自定义',checkStatusNum:'2',checkStatusName:'民警审核不通过'},
                {applyNum:1,submitTime: "1020-021-12",name:"大地大地",companyName: '毕竟大地顶顶顶顶 反反复复付',airportName:'首都机场',deptName:'空防',checkType:'1',checkTypeName:'日常检查',checkStatusNum:'3',checkStatusName:'民警审核不通过'},
                {applyNum:1,submitTime: "1020-021-12",name:"大地大地",companyName: '毕竟大地顶顶顶顶 反反复复付',airportName:'首都机场',deptName:'空防',checkType:'1',checkTypeName:'日常检查',checkStatusNum:'4',checkStatusName:'民警审核不通过'},
                {applyNum:1,submitTime: "1020-021-12",name:"大地大地",companyName: '毕竟大地顶顶顶顶 反反复复付',airportName:'首都机场',deptName:'空防',checkType:'1',checkTypeName:'日常检查',checkStatusNum:'5',checkStatusName:'民警审核不通过'},
                {applyNum:1,submitTime: "1020-021-12",name:"大地大地",companyName: '毕竟大地顶顶顶顶 反反复复付',airportName:'首都机场',deptName:'空防',checkType:'1',checkTypeName:'日常检查',checkStatusNum:'6',checkStatusName:'已完成'}
            ]
            if(checkList.length == 0){
                $(".nodata").removeClass('none')
            }else{
                resetData()
                $(".nodata").addClass('none')
            }
           
        },
        complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
            $(".zhegaiceng").css({'display': 'none'})
        }
    });
}
function resetData(){
    var str = '';
    $.each(checkList,function(i,item){
        var className = '';
        if(item.checkStatusNum == '1' || item.checkStatusNum == '2' || item.checkStatusNum == '4') {
            className = 'colorOrange';
        }else if(item.checkStatusNum == '3' || item.checkStatusNum == '5'){
            className = 'colorBlue'
        }else if(item.checkStatusNum == '6'){
            className = 'colorRed'
        }
        str+='<div class="checkBox font14" data-applyNum="'+item.applyNum+'" onclick="goDeatail(this)">'+
        ' <div class="checkTop flexBetween"><span>2010-120-11</span><span class="colorRed">'+item.checkTypeName+'</span><span class="'+className+'">'+item.checkStatusName+'</span></div>'+
        '<div class="flexBetween checkbottom">'+
        '<div>'+
        '<p class="ptext">提交人姓名：'+item.name+'</p>'+
        '<p class="ptext">单位名称：'+item.companyName+'</p>'+
        '<p class="ptext">机场：'+item.airportName+'</p>'+
        '<p class="ptext">检查类别：'+item.deptName+'</p>'+
        '</div>'+
        ' <img class="rightIcon flexcenter" src="./images/right.png">'+
        ' </div>'+
        '</div>'
    })
    $(".checkList").append($(str))
}
function goDeatail(ev){
    var applyNum = $(ev).attr('data-applyNum');
    window.location.href = './auditCheckdetail.html?applyNum='+applyNum;
}

