var phone = localStorage.getItem('phone');
var source = '';
$(function(){
    source = getUrlParms('source');
    getUserCompanyAirDept()
    
})
    


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
                $(".deptBox").html();
                $(".airportBox").html();
                var deptList = response.deptList;
                var airportList = response.airportList;
                var str = '',str1 = '';
                for(let i in airportList){
                    str+=' <div class="radiobox font14">' +
                        '<input type="radio" name="j12" value="'+airportList[i].airportNum+'"> <label></label>\n' +
                        '<span class="font14">'+airportList[i].airportName+'</span>' +
                        '</div>'
                }
                $(".airportBox").append($(str))

                for(let i in deptList){
                    str1+=' <div class="radiobox font14">' +
                        '<input type="radio" name="j12" value="'+deptList[i].deptNum+'"> <label></label>\n' +
                        '<span class="font14">'+deptList[i].deptName+'</span>' +
                        '</div>'
                }
                $(".deptBox").append($(str1))

            }else{
                toast(response.resdes)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $(".zhegaiceng").css({'display': 'none'})
            var deptList = [{deptNum:1,deptName: '空防已支队'},{deptNum:2,deptName: '空防已支队1'},{deptNum:3,deptName: 'ddf打击1'},{deptNum:4,deptName: 'ddf打击'}];

            var airportList = [{airportNum:1,airportName: '坚决打击'},{airportNum:2,airportName: 'ddf打击'}];
            var str = '',str1 = '';
            for(let i in airportList){
                str+=' <div class="radiobox font14">' +
                    '<input type="radio" name="airportNum" value="'+airportList[i].airportNum+'"> <label></label>\n' +
                    '<span class="font14">'+airportList[i].airportName+'</span>' +
                    '</div>'
            }
            $(".airportBox").append($(str))

            for(let i in deptList){
                str1+=' <div class="radiobox font14">' +
                    '<input type="radio" name="deptNum" value="'+deptList[i].deptNum+'"> <label></label>\n' +
                    '<span class="font14">'+deptList[i].deptName+'</span>' +
                    '</div>'
            }
            $(".deptBox").append($(str1))
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
    var airportNum = $("input[name='airportNum']:checked").val();
    var deptNum = $("input[name='deptNum']:checked").val();
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
            deptNum: deptNum
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
                    window.location.href = response.checkUrl+'?applyNum='+response.applyNum;
    
                }else{
                    toast(response.resdes)
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $(".zhegaiceng").css({'display': 'none'})
                //消防
                // window.location.href = './firetemplate.html?applyNum=1111'
            //    空防
                // window.location.href = './airtemplate.html?applyNum=1111'
    
            //    反恐
                // window.location.href = './fightagaintemplate.html?applyNum=1111'
                //    治安
                window.location.href = './securitytemplate.html?applyNum=1111'
                //国保
                // window.location.href = './nationtemplate.html?applyNum=1111'
            },
    
    
            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                $(".zhegaiceng").css({'display': 'none'})
            }
        });
    }else if(source == 'zidingyi'){
        var obj = {
            airportNum: airportNum,
            deptNum: deptNum
        }
        localStorage.setItem('customInfo',JSON.stringify(obj))
        window.location.href = 'customexamination.html'
    }
    

}