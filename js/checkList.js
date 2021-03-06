var phone = '',checkList = [];
     
$(function(){
    phone = localStorage.getItem('phone')
    getList()
})
    
function getList(){
    $(".zhegaiceng").css({
        'display': 'block'
    });
    var data = {
        phone: encrypt(phone),
    };
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + 'companycheck/getCheckList',
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
                $(".nodata").removeClass('none')
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $(".zhegaiceng").css({'display': 'none'})
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
        ' <div class="checkTop flexBetween"><span>'+item.submitTime+'</span><span class="colorRed">'+item.checkTypeName+'</span><span class="'+className+'">'+item.checkStatusName+'</span></div>'+
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
    window.location.href = './checkDetail.html?applyNum='+applyNum;
}

