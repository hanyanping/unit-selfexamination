var phone = '',applyNum = '',gobaseUrl = '';
     
$(function(){
    phone = localStorage.getItem('phone')
    applyNum = getUrlParms('applyNum');
    getDetail()
})
function gobaseUrl(){
    window.location.href = gobaseUrl
}
function getDetail(){
    $(".zhegaiceng").css({
        'display': 'block'
    });
    var data = {
        phone: encrypt(phone),
        applyNum: applyNum
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
                $(".liuzhuanFlag").html(response.liuzhuanFlag)
                $(".yinhuanFlag").html(response.yinhuanFlag)
                $(".zhenggaiFlag").html(response.zhenggaiFlag)
                $(".zhenggaiContent").html(response.zhenggaiContent)
                if(response.xcPhotoList.length != 0){
                    addPhoto(response.xcPhotoList)
                }
                if(response.checkStatusNum != 1){
                    if(response.updatePhotoList.length != 0){
                        addPhoto1(response.updatePhotoList)
                    }
                    $(".updateContent").html(response.updateContent)
                    $(".name").html(response.name)
                    $(".submitTime").html(response.submitTime)
                    if(data.checkStatusNum != '2'){
                        $(".comBox").removeClass('none')
                        resetData(response)
                    }else{
                        $(".comBox").addClass('none')
                    }
                }else{
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
                 checkStatusNum: 2
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
                    $(".comBox").addClass('none')
                }
            }else{
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
        $(".comFailReason").removeClass('none')
        $(".comFailReason").html(data.comFailReason)
    }else{
        $(".comFailReason").addClass('none');
        if(data.checkStatusNum != '4'){
            $(".policeBox").removeClass('none')
            $(".policeTime").html(data.policeTime)
            $(".policeName").html(data.policeName)
            $(".policeResult").html(data.policeResult)
            if(data.checkStatusNum == '5'){
                $(".policeFailReason").removeClass('none')
                $(".policeFailReason").html(data.comFailReason)
            }else{
                $(".policeFailReason").addClass('none')
            }
        }else{
            $(".policeBox").addClass('none')
        }
    }
}
function goDeatail(ev){
    var applyNum = $(ev).attr('data-applyNum');
    window.location.href = './checkDetail.html?applyNum='+applyNum;
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
  console.log(str)
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

