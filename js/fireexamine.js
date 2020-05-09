var j46 = '',d47 = '';
function savePNG() {
    signImage = draw.getPNGImage();
    $('.container').addClass('none');
    $("#examine").removeClass('none');
    var bzrPhoto = signImage;
    var index = bzrPhoto.indexOf(',');
    if(sign == 1){
        $("#pic").attr("src",signImage)
        j46 = bzrPhoto.substring(index+1);
    }
    if(sign == 2){
        $("#pic1").attr("src",signImage)
        d47 = bzrPhoto.substring(index+1);
    }
}
var inputobj = {
    f1: '',
    d2: '',
    d3: '',
    s4: '',
    s5: '',
    s6: '',
    s7: '',
    b8: '',
    q10: '',
    q18: '',
    q26: '',
    z41: '',
    f42: '',
    y43: '',
    b45: ''
}
var radioobj = {
    b9: '',
    s7: '',
    s8: '',
    s9: '',
    g11: '',
    y12: '',
    x13: '',
    y14: '',
    f15: '',
    m16: '',
    x17: '',
    x19: '',
    s20: '',
    a21: '',
    f22: '',
    s23: '',
    y24: '',
    r25: '',
    s27: '',
    m28: '',
    j29: '',
    w30: '',
    s31: '',
    s32: '',
    s33: '',
    x34: '',
    x35: '',
    f36: '',
    x37: '',
    f38: '',
    x39: '',
    d40: '',
    y44: ''
}
$(function(){

    if(localStorage.getItem('fireInput')){
        setinputValue()
    }
    if(localStorage.getItem('fireradio')){
        setradioValue()
    }
    changeRadio();
    $('input:checkbox').click(function () {
        getTheCheckBoxValue();
    });
})
//监听radio
function changeRadio(){
    $.each(radioobj, function(key, val) {
        $("input:radio[name='"+key+"']").change(function () {
            if(JSON.parse(localStorage.getItem('fireradio'))){
                radioobj = JSON.parse(localStorage.getItem('fireradio'))
            }
            radioobj[key] = $("input[name='"+key+"']:checked").val();
            localStorage.setItem('fireradio',JSON.stringify(radioobj))
        })
    });
}
//回显radio
function setradioValue(){
    var  fireradio = JSON.parse(localStorage.getItem('fireradio'));
    $.each(fireradio, function(key, val) {
        if(fireradio[key]){
            $("input[name='"+key+"'][value='"+fireradio[key]+"']").attr('checked','true');
        }
    });
}
//监听存input text
function changeValue(k){
    if(localStorage.getItem('fireInput')){
        inputobj = JSON.parse(localStorage.getItem('fireInput'));
    }
    inputobj[k] = $("."+k).val();
    localStorage.setItem('fireInput',JSON.stringify(inputobj))
}
//回显input text
function setinputValue(){
    var inputVal = JSON.parse(localStorage.getItem('fireInput'));
    $.each(inputVal,function(key,val){
        $("."+key).val(inputVal[key])
    })
}


function submit(){
    var applyNum = localStorage.getItem('applyNum')
    if(localStorage.getItem('fireInput')){
        inputobj = JSON.parse(localStorage.getItem('fireInput'));
    }
    if(localStorage.getItem('fireradio')){
        radioobj = JSON.parse(localStorage.getItem('fireradio'));
    }
    var obj = {
        applyNum: applyNum,
        j46: j46,
        d47: d47
    }
    var data = Object.assign(obj,inputobj,radioobj);
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + 'supervisionTemplate/xfGapcsrcCheckList',
        timeout: timeDelay,
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        data: data,
        success: function(response) {
            $(".zhegaiceng").css({'display': 'none'})
            if(response.rescode == 200){
                localStorage.removeItem('fireradio')
                localStorage.removeItem('fireInput')
                window.postMessage('success');//向app发送提交成功消息
            }else{
                toast(response.resdes)
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