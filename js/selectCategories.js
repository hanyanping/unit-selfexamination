var phone = localStorage.getItem('phone');
var source = '';
var deptList = [],airportList = [],showairportList = [];
$(function(){
    source = getUrlParms('source');
    getUserCompanyAirDept();
    getCompanyDeptList()
    
})
    
function getCompanyDeptList(){
    $(".zhegaiceng").css({
        'display': 'block'
    });
    var data = {
        phone: encrypt(phone),
    };
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + 'companycheck/getCompanyDeptList',
        timeout: timeDelay,
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        data: data,
        success: function(response) {
            $(".zhegaiceng").css({'display': 'none'})
            if(response.rescode == 200){
                $(".selectInfo").html('');
                var companyDeptList = response.companyDeptList;
                if(companyDeptList.length != 0){
                    $(".deptListbox").removeClass('none')
                    var str = '<option value="">请选择部门</option>';
                    for(let i in companyDeptList){
                        str+='<option value="'+companyDeptList[i].companyDeptNum+'">'+companyDeptList[i].companyDeptName+'</option>'
                    }
                    $(".selectInfo").html($(str))
                    // $(".deptListbox").addClass('none')
                }else{
                    $(".deptListbox").addClass('none')
                }

            }else{
                tanwin(response.resdes)
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
function resetdep(){
    $(".deptBox").html('');
    var str1 = '';
    for(let i in deptList){
        str1+=' <div class="radiobox font14">' +
            '<input type="radio" name="deptName" value="'+deptList[i].deptNum+'"> <label></label>\n' +
            '<span class="font14">'+deptList[i].deptName+'</span>' +
            '</div>'
    }
    $(".deptBox").append($(str1))
    $("input[name='deptName']").eq(0).attr('checked','true')
}
function getUserCompanyAirDept(){
    $(".zhegaiceng").css({
        'display': 'block'
    });
    var data = {
        phone: encrypt(phone),
    };
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + 'companycheck/getUserCompanyAirDept',
        timeout: timeDelay,
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        data: data,
        success: function(response) {
            $(".zhegaiceng").css({'display': 'none'})
            if(response.rescode == 200){

                $(".airportBox").html('');
                 deptList = [];
                showairportList = [];
                 airportList = response.airportList;
                var str = '',str1 = '';
                for(let i in airportList){
                    if(airportList[i].deptList.length != 0){
                        showairportList.push(airportList[i])
                        str+=' <div class="radiobox font14">' +
                            '<input type="radio" name="airportName" value="'+airportList[i].airportNum+'"> <label></label>\n' +
                            '<span class="font14">'+airportList[i].airportName+'</span>' +
                            '</div>'
                    }
                }
                deptList = showairportList[0].deptList;
                resetdep();
                $(".airportBox").append($(str))
                $("input[name='airportName']").eq(0).attr('checked','true')
                $("input[name='airportName']").change(function(){
                    for(let i in showairportList){
                        if(showairportList[i].airportNum == $(this).val()){
                            deptList = showairportList[i].deptList;
                            resetdep();
                        }

                    }
                })
            }else{
                tanwin(response.resdes)
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
function gotemplate(){
    $(".zhegaiceng").css({
        'display': 'block'
    });
    var airportNum = $("input[name='airportName']:checked").val();
    var deptNum = $("input[name='deptName']:checked").val();
    var companyDeptNum = $(".selectInfo").val();
    console.log(companyDeptNum)
    if(!airportNum){
        tanwin('请选择机场')
        return;
    }
    if(!deptNum){
        tanwin('请选择类别')
        return;
    }
    if(source == 'richang'){
        var data = {
            phone: encrypt(phone),
            airportNum: airportNum,
            deptNum: deptNum,
            companyDeptNum: companyDeptNum
        };
        data = JSON.stringify(data)
        $.ajax({
            url: ajaxUrl + 'companycheck/insertRichangCheckNext',
            timeout: timeDelay,
            type: 'post',
            contentType: 'application/json;charset=utf-8',
            dataType: "json",
            data: data,
            success: function(response) {
                $(".zhegaiceng").css({'display': 'none'})
                if(response.rescode == 200){
                    window.location.href = response.checkUrl;
                }else{
                    tanwin(response.resdes)
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $(".zhegaiceng").css({'display': 'none'})
            //     //消防
            //     // window.location.href = './firetemplate.html?applyNum=1111'
            // //    空防
            //     // window.location.href = './airtemplate.html?applyNum=1111'
            //
            // //    反恐
            //     // window.location.href = './fightagaintemplate.html?applyNum=1111'
            //     //    治安
            //     window.location.href = './securitytemplate.html?applyNum=1111'
            //     //国保
            //     // window.location.href = './nationtemplate.html?applyNum=1111'
            },
    
    
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                $(".zhegaiceng").css({'display': 'none'})
            }
        });
    }else if(source == 'zidingyi'){
        var obj = {
            airportNum: airportNum,
            deptNum: deptNum,
            companyDeptNum: companyDeptNum
        }
        localStorage.setItem('customInfo',JSON.stringify(obj))
        window.location.href = 'customexamination.html'
    }
    

}