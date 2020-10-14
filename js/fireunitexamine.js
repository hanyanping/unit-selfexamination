var firstList = [
    {title:'1、火灾隐患的整改情况',value1:'s5',value2:'s6',value3:'z7',value4:'z8'},
    {title:'2、火灾防范措施的落实情况',value1:'s9',value2:'s10',value3:'z11',value4:'z12'},
    {title:'3、安全疏散通道、疏散指示标志情况',value1:'s13',value2:'s14',value3:'z15',value4:'z16'},
    {title:'4、应急照明和安全出口情况',value1:'s17',value2:'s18',value3:'z19',value4:'z20'}, 
    {title:'5、消防车通道、消防水源情况',value1:'s21',value2:'s22',value3:'z23',value4:'z24'},
    {title:'6、灭火器材配置及有效情况',value1:'s25',value2:'s26',value3:'z27',value4:'z28'},
    {title:'7、用火、用电有无违章情况',value1:'s29',value2:'s30',value3:'z31',value4:'z32'},
    {title:'8、重点工种人员以及其他员工消防知识的掌握情况',value1:'s33',value2:'s34',value3:'z35',value4:'z36'},
    {title:'9、消防安全重点部位的管理情况',value1:'s37',value2:'s38',value3:'z39',value4:'z40'},
    {title:'10、易燃易爆危险物品和场所防火防爆措施的落实情况以及其他重要物资的防火安全情况',value1:'s41',value2:'s42',value3:'z43',value4:'z44'},
    {title:'11、消防（控制室）值班情况和设施运行、记录情况',value1:'s45',value2:'s46',value3:'z47',value4:'z48'}, 
    {title:'12、防火巡查情况',value1:'s49',value2:'s50',value3:'z51',value4:'z52'},
    {title:'13、消防安全标志的设置情况和完好、有效情况',value1:'s53',value2:'s54',value3:'z55',value4:'z56'},
    {title:'14、其他消防安全情况',value1:'s57',value2:'s58',value3:'z59',value4:'z60'}
];
var twoList = [
    {title:'1、用火、用电有无违章情况',value1:'s5',value2:'s6',value3:'z7',value4:'z8'},
    {title:'2、安全出口、疏散通道是否畅通',value1:'s9',value2:'s10',value3:'z11',value4:'z12'},
    {title:'3、安全疏散指示标志、应急照明是否完好',value1:'s13',value2:'s14',value3:'z15',value4:'z16'},
    {title:'4、消防设施、器材和消防安全标志是否在位、完整',value1:'s17',value2:'s18',value3:'z19',value4:'z20'}, 
    {title:'5、常闭式防火门是否处于关闭状态',value1:'s21',value2:'s22',value3:'z23',value4:'z24'},
    {title:'6、防火卷帘下是否堆放物品影响使用',value1:'s25',value2:'s26',value3:'z27',value4:'z28'},
    {title:'7、消防安全重点部位的人员在岗情况',value1:'s29',value2:'s30',value3:'z31',value4:'z32'},
    {title:'8、其他消防安全情况',value1:'s33',value2:'s34',value3:'z35',value4:'z36'}
  

];


$(function(){
    var currentUrl = window.location.href;
    var radioList = [];
    var str = '';
    if(currentUrl.indexOf('fireunitselfexamine')>=0){
        radioList = firstList;
    }else if(currentUrl.indexOf('firekeyunitselfexamine')>=0){
        radioList = twoList;
    }
    var str = '';
    $.each(radioList,function(index,item){
        str+='<div class="radioContent">'+
        '<div class="contenttitle font14">'+item.title+'</div>'+
        '<div class="marginleft flexBetween itemcenter">'+
        '<p class="radioTitle font14"> 是否存在隐患</p>'+
            '<div class=" itemcenter">'+
            '<div class="radiobox font14">'+
                ' <input type="radio" name="'+item.value1+'" value="2"><label></label>'+
                    ' <span class="font14">是</span>'+
                    '</div>'+
                '<div class="radiobox font14"><input type="radio"  name="'+item.value1+'"  value="1"><label></label>'+
                '<span class="font14">否</span>'+
                    '</div>'+
                ' </div>'+
            ' </div>'+
        '<div class="marginleft flexBetween itemcenter">'+
        ' <p class="radioTitle font14"> 是否整改</p>'+
            ' <div class=" itemcenter">'+
            ' <div class="radiobox font14">'+
                '<input type="radio"  name="'+item.value2+'"  value="2"><label></label>'+
                    ' <span class="font14">是</span>'+
                    '</div>'+
                '<div class="radiobox font14"><input type="radio"  name="'+item.value2+'"  value="1"><label></label>'+
                '<span class="font14">否</span>'+
                    ' </div>'+
                ' </div>'+
            '</div>'+
        ' <div class="inputBox marginleft">'+
        '<span class="font14  inputLable">整改时限：</span>'+
            ' <input class="inputText font14 '+item.value3+'" onblur="inputBlur()" onfocus="inputFocus()" onchange="changeValue('+item.value3+')" type="text" placeholder="整改时限" />'+
            '</div>'+
        '<div class="flex marginleft" style="margin-top:10px;">'+
        '<div class="font14">整改措施：</div>'+
            '<textarea class="textareaBox font14 '+item.value4+'" onchange="changeValue('+item.value4+')" placeholder="多行输入" onblur="inputBlur()" onfocus="inputFocus()"></textarea>'+
            '</div>'+
        '</div>';
    })
    $(".contentBox").append($(str))
    
})