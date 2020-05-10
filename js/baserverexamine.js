var firstList = [
    {'title':'',radioData:[{radioName:'b1',radioTitle: '1.是否建立健全保安服务管理制度、岗位责任制度、保安员管理制度和紧急情况应急预案',radioValue:'0'},{radioName:'h2',radioTitle: '2.是否定期对保安员进行法律、保安专业知识和技能培训，提高保安员的职业道德水平、业务素质和责任意识',radioValue:'0'},{radioName:'b1',radioTitle: '3.是否向公安机关备案保安服务许可证、工商营业执照、法定代表人、公司负责人和保安员的基本情况',radioValue:'0'},{radioName:'h2',radioTitle: '4.是否在本单位以外或者物业管理区域以外提供保安服务',radioValue:'0'},{radioName:'b1',radioTitle: '5.保安员是否年满18周岁，身体健康，品行良好，具有初中以上学历的中国公民',radioValue:'0'},{radioName:'h2',radioTitle: '6.保安服务中形成的监控影像资料、报警记录，是否至少留存30日备查',radioValue:'0'},{radioName:'b1',radioTitle: '7.保安员是否持有保安员证上岗，是否着保安员服装，佩带全国统一的保安服务标志',radioValue:'0'},{radioName:'h2',radioTitle: '8.保安员是否有下列行为之一：',radioValue:'0'}]},
];



$(function(){
    var radioList = [];
    var str = '';
    radioList = firstList;
    $.each(radioList,function(index,item){
        var radioStr = '';
        var radioData = item.radioData;
        $.each(radioData,function(ind,ite){
            radioStr+=' <div class="radioContent">'+
                '<p class="radioTitle font14">'+ite.radioTitle+'</p>'+
                '<div class="flex showright">'+
                '<div class="radiobox font14">'+
                '<input type="radio" name="'+ite.radioName+'" value="2"/><label></label><span class="font14">否</span>'+
                '</div>'+
                '<div class="radiobox font14">'+
                '<input type="radio" name="'+ite.radioName+'" value="1"/><label></label><span class="font14">是</span>'+
                '</div>'+
                '</div>'+
                '</div>';
        })
        str+='<div class="radioList">'
            +radioStr+
            '</div>' ;
    })
    $(".contentBox").append($(str))

})
