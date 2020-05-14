var phone = '',applyNum1 = '',gobaseUrl = '';
     
$(function(){
    phone = localStorage.getItem('phone')
    applyNum1 = getUrlParms('applyNum');
    getDetail()
})
function gobaseUrl(){
    window.location.href = gobaseUrl
}
// document.addEventListener('message', function (msg) { //获取客户端返回数据数据
//     $(".zhegaiceng").css({
//       'display': 'none'
//     })
//     var data = JSON.parse(msg.data)
//     if (data) {
//       if (data.hasOwnProperty('photograph')) {
//         addPhoto1(data.photograph);
//       }
//     } else {
//       tanwin("上传照片")
//     }
//   });
  function deleteImg(ev){
      $(ev).parent().remove()
  }
  function addPhoto1(photograph) {
    var fileBase64 = 'data:image/jpeg;base64,' + photograph;
    var str = '<div class="borderBox"><img data-src=' + photograph + '  class="image1" src=' + fileBase64 + '><img class="deleteIconindex" src="./images/deleteIcon.png" onclick="deleteImg(this)"</div>';
    $("#imgBox2").append($(str))
  }
  
  //照片
  function postFile() {
    var photo = [];
    if ($(".image1")) {
      $('.image1').each(function () {
        var obj = {};
        obj.photoData = $(this).attr('data-src')
        photo.push(obj);
      })
    }
    if (photo.length >= 10) {
      tanwin('照片不得超过10张');
      return;
    }
    window.postMessage('photograph'); //发送获取照片消息
  }
//提交
function sunbmit(){
    var auditStatus = $("input[name='auditStatus']:checked").val()
    var failReason = $("#noResultText").val()
        if(auditStatus == 3){
            if(!failReason){
                tanwin('请输入不通过原因')
                return;
            }
           
        }
    var data = {
        phone: encrypt(phone),
        applyNum: applyNum1,
        auditStatus: auditStatus,
        failReason: failReason
    }
    data = JSON.stringify(data);
    $(".zhegaiceng").css({
    'display': 'block'
    });
    $.ajax({
        url: ajaxUrl + 'companycheck/updateAuditCheckInfo',
        timeout: timeDelay,
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        data: data,
        success: function (response) {
        $(".zhegaiceng").css({
            'display': 'none'
        });
        if (response.rescode == 200) {
                tanwin('提交成功');
            setTimeout(function () {
            window.location.href = './auditCheckList.html';
            }, 2000);
        } else {
            tanwin(response.resdes);
        }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            window.location.href = './auditcheckList.html';
        $(".zhegaiceng").css({
            'display': 'none'
        })
        },
        complete: function (XMLHttpRequest, status) { //请求完成后最终执行参数
        $(".zhegaiceng").css({
            'display': 'none'
        })
        }
    });

}
function getDetail(){
    $(".zhegaiceng").css({
        'display': 'block'
    });
    var data = {
        phone: encrypt(phone),
        applyNum: applyNum1
    };
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + 'companycheck/getCheckInfo',
        timeout: timeDelay,
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        data: data,
        success: function(response) {
            $(".zhegaiceng").css({'display': 'none'})
            if(response.rescode == 200){
                if(response.baseUrl){
                    gobaseUrl = response.baseUrl;
                    $(".baseUrl").removeClass("none")
    
                }else{
                    $(".baseUrl").addClass("none")
                }
                var liuzhuanFlag = '';
                if(response.liuzhuanFlag == 1){
                    liuzhuanFlag = '是'
                }else if(response.liuzhuanFlag ==2){
                    liuzhuanFlag = '否'
                }
                $(".liuzhuanFlag").html(liuzhuanFlag)
                var yinhuanFlag = '';
                if(response.yinhuanFlag == 1){
                    yinhuanFlag = '是'
                }else if(response.yinhuanFlag ==2){
                    yinhuanFlag = '否'
                }
                $(".yinhuanFlag").html(yinhuanFlag)
                var zhenggaiFlag = '';
                if(response.zhenggaiFlag == 1){
                    zhenggaiFlag = '是'
                }else if(response.zhenggaiFlag ==2){
                    zhenggaiFlag = '否'
                }else if(response.zhenggaiFlag == 0){
                    zhenggaiFlag = ''
                }
                
                if(zhenggaiFlag){
                    $(".zhenggaiFlag").html(zhenggaiFlag);
                    $(".zhenggaiContent").html(response.zhenggaiContent)
                }else{
                    $("#zhenggaiFlag").addClass('none')
                    $("#zhenggaiContent").addClass('none')
                }
                if(response.xcPhotoList.length != 0){
                    addPhoto(response.xcPhotoList)
                }
                if(response.checkStatusNum != 1){
                    $(".updatecontentBox").addClass('none')
                    if(!response.updateContent && !response.name && !response.submitTime && response.updatePhotoList.length == 0){
                        $(".updateBox").addClass('none')
                    }else{
                        $(".updateBox").removeClass('none')
                    }
                    if(response.updatePhotoList.length != 0){
                        addPhoto1(response.updatePhotoList)
                    }
                    $(".updateContent").html(response.updateContent)
                    $(".name").html(response.name)
                    $(".submitTime").html(response.submitTime)
                    if(response.checkStatusNum != '2'){
                        $(".comBox").removeClass('none')
                        resetData(response)
                    }else{
                        $(".passBox").removeClass('none')
                        $(".comBox").addClass('none');
                        $("input[name='auditStatus'][value='4']").attr('checked','true')
                        $("input[name='auditStatus']").change(function(){
                            if($(this).val() == '3'){
                                $(".noResult").removeClass('none')
                            }else{
                                $(".noResult").addClass('none')
                            }
                        })
                    }
                }else{
                    $(".updatecontentBox").removeClass('none')
                   
                    $(".updateBox").addClass('none')
                    $(".comBox").addClass('none')
                }
               
            }else{
                tanwin(response.resdes)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $(".zhegaiceng").css({'display': 'none'})
             var response = {xcPhotoList: [
                {checkPhoto:'http://img4.imgtn.bdimg.com/it/u=2115530608,426850530&fm=26&gp=0.jpg'},
                {checkPhoto:'http://img4.imgtn.bdimg.com/it/u=2115530608,426850530&fm=26&gp=0.jpg'},
                 {checkPhoto:'http://img4.imgtn.bdimg.com/it/u=2115530608,426850530&fm=26&gp=0.jpg'},{checkPhoto:'http://img4.imgtn.bdimg.com/it/u=2115530608,426850530&fm=26&gp=0.jpg'}]
                , updatePhotoList:[
                    {updatePhoto:'http://img4.imgtn.bdimg.com/it/u=2115530608,426850530&fm=26&gp=0.jpg'},
                    {updatePhoto:'http://img4.imgtn.bdimg.com/it/u=2115530608,426850530&fm=26&gp=0.jpg'},
                 ],
                 checkStatusNum: 2,
                 baseUrl: ''
            }
            if(response.baseUrl){
                gobaseUrl = response.baseUrl;
                $(".baseUrl").removeClass("none")

            }else{
                $(".baseUrl").addClass("none")
            }
            $(".liuzhuanFlag").html(response.liuzhuanFlag)
            $(".yinhuanFlag").html(response.yinhuanFlag)
            $(".zhenggaiFlag").html(response.zhenggaiFlag)
            $(".zhenggaiContent").html(response.zhenggaiContent)
            if(response.xcPhotoList.length != 0){
                addPhoto(response.xcPhotoList)
            }
            if(response.checkStatusNum != 1){
                $(".updatecontentBox").addClass('none')
                $(".updateBox").removeClass('none')
                if(response.updatePhotoList.length != 0){
                    addPhoto1(response.updatePhotoList)
                }
                $(".updateContent").html(response.updateContent)
                $(".name").html(response.name)
                $(".submitTime").html(response.submitTime)
                if(response.checkStatusNum != '2'){
                    $(".comBox").removeClass('none')
                    resetData(response)
                }else{
                    $(".passBox").removeClass('none')
                    $(".comBox").addClass('none');
                    $("input[name='auditStatus'][value='4']").attr('checked','true')
                    $("input[name='auditStatus']").change(function(){
                        if($(this).val() == '3'){
                            $(".noResult").removeClass('none')
                        }else{
                            $(".noResult").addClass('none')
                        }
                    })
                }
            }else{
                $(".updatecontentBox").removeClass('none')
               
                $(".updateBox").addClass('none')
                $(".comBox").addClass('none')
            }
        },
        complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
            $(".zhegaiceng").css({'display': 'none'})
        }
    });
}
function resetData(data){
    $(".comTime").html(data.comTime)
    $(".comName").html(data.comName)
    $(".comResult").html(data.comResult)
    if(data.checkStatusNum == '3'){
        $(".comFailReason1").removeClass('none')
        $(".comFailReason").html(data.comFailReason)
    }else{
        $(".comFailReason1").addClass('none');
        if(data.checkStatusNum != '4'){
            $(".policeBox").removeClass('none')
            $(".policeTime").html(data.policeTime)
            $(".policeName").html(data.policeName)
            $(".policeResult").html(data.policeResult)
            if(data.checkStatusNum == '5'){
                $(".policeFailReason1").removeClass('none')
                $(".policeFailReason").html(data.comFailReason)
            }else{
                $(".policeFailReason1").addClass('none')
            }
        }else{
            $(".policeBox").addClass('none')
        }
    }
}

var view = null;
var view1 = null;
function addPhoto(xcPhotoList) {
    if(view){
        view.destroy();
    }
    var str = '';
    $.each(xcPhotoList,function(i,item){
         str+='<div class="borderBox"><img data-src=' + item.checkPhoto + '  class="image" src=' + item.checkPhoto + '></div>';
    })
    $("#imgBox").append($(str))
    view = new Viewer(document.getElementById('imgBox'));
}
function addPhoto1(updatePhotoList) {
    if(view1){
        view1.destroy();
    }
    var str = '';
    $.each(updatePhotoList,function(i,item){
         str+='<div class="borderBox"><img data-src=' + item.updatePhoto + '  class="image" src=' + item.updatePhoto + '></div>';
    })
  
    $("#imgBox1").append($(str))
    view1 = new Viewer(document.getElementById('imgBox1'));
}

