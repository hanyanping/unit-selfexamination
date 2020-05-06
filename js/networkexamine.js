var firstList = [
    {'title':'网络安全管理制度',radioData:[{radioName:'s6',radioTitle: '是否落实网络安全管理制度',radioValue:'0'},{radioName:'s7',radioTitle: '是否落实网络突发事件应急处置制度',radioValue:'0'},{radioName:'s8',radioTitle: '是否落实员工网络安全培训制度',radioValue:'0'}]},
    {'title':'网络安全等级保护',radioData:[{radioName:'s9',radioTitle: '是否进行网络安全等级保护制度备案',radioValue:'0'},{radioName:'s10',radioTitle: '是否进行网络安全等级保护测评',radioValue:'0'}]},

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
                    '<input type="radio" name="'+ite.radioName+'" value="2"/><label></label><span class="font14">没问题</span>'+
                '</div>'+
                '<div class="radiobox font14">'+
                    '<input type="radio" name="'+ite.radioName+'" value="1"/><label></label><span class="font14">有问题</span>'+
                '</div>'+
            '</div>'+
        '</div>';
        })
        str+='<div class="radioList">'+
        '<div class="title">'+
        '<span class="lineBox"></span>'+
        '<span class="font14 titletext fontWeight">'+item.title+'</span>'+
        '</div>'+radioStr+
        '</div>'+
        '</div>';
    })
    $(".contentBox").append($(str))
    
})
