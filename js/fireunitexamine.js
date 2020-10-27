var firstList = [
    {title:'1、火灾隐患的整改情况',value1:'h6',value2:'h7',value3:'h8',value4:'h9'},
    {title:'2、火灾防范措施的落实情况',value1:'h11',value2:'h12',value3:'h13',value4:'h14'},
    {title:'3、安全疏散通道、疏散指示标志情况',value1:'a15',value2:'a16',value3:'a17',value4:'a18'},
    {title:'4、应急照明和安全出口情况',value1:'y19',value2:'y20',value3:'y21',value4:'y22'}, 
    {title:'5、消防车通道、消防水源情况',value1:'x23',value2:'x24',value3:'x25',value4:'x26'},
    {title:'6、灭火器材配置及有效情况',value1:'m27',value2:'m28',value3:'m30',value4:'m31'},
    {title:'7、用火、用电有无违章情况',value1:'y32',value2:'y33',value3:'y34',value4:'y35'},
    {title:'8、重点工种人员以及其他员工消防知识的掌握情况',value1:'z36',value2:'z37',value3:'z38',value4:'z39'},
    {title:'9、消防安全重点部位的管理情况',value1:'x40',value2:'x41',value3:'x42',value4:'x43'},
    {title:'10、易燃易爆危险物品和场所防火防爆措施的落实情况以及其他重要物资的防火安全情况',value1:'y44',value2:'y45',value3:'y46',value4:'y47'},
    {title:'11、消防（控制室）值班情况和设施运行、记录情况',value1:'x48',value2:'x49',value3:'x50',value4:'x51'}, 
    {title:'12、防火巡查情况',value1:'f52',value2:'f53',value3:'f54',value4:'f55'},
    {title:'13、消防安全标志的设置情况和完好、有效情况',value1:'x56',value2:'x57',value3:'x58',value4:'x59'},
    {title:'14、其他消防安全情况',value1:'q60',value2:'q61',value3:'q62',value4:'q63'}
];
var twoList = [
    {title:'1、用火、用电有无违章情况',value1:'y6',value2:'y7',value3:'y8',value4:'y9'},
    {title:'2、安全出口、疏散通道是否畅通',value1:'a11',value2:'a12',value3:'a13',value4:'a14'},
    {title:'3、安全疏散指示标志、应急照明是否完好',value1:'a15',value2:'a16',value3:'a17',value4:'a18'},
    {title:'4、消防设施、器材和消防安全标志是否在位、完整',value1:'x19',value2:'x20',value3:'x21',value4:'x22'}, 
    {title:'5、常闭式防火门是否处于关闭状态',value1:'c23',value2:'c24',value3:'c25',value4:'c26'},
    {title:'6、防火卷帘下是否堆放物品影响使用',value1:'f27',value2:'f28',value3:'f29',value4:'f30'},
    {title:'7、消防安全重点部位的人员在岗情况',value1:'x31',value2:'x32',value3:'x33',value4:'x34'},
    {title:'8、其他消防安全情况',value1:'q35',value2:'q36',value3:'q37',value4:'q38'}
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
                ' <input type="radio" name="'+item.value1+'" value="1"><label></label>'+
                    ' <span class="font14">是</span>'+
                    '</div>'+
                '<div class="radiobox font14"><input type="radio"  name="'+item.value1+'"  value="2"><label></label>'+
                '<span class="font14">否</span>'+
                    '</div>'+
                ' </div>'+
            ' </div>'+
        '<div class="marginleft flexBetween itemcenter">'+
        ' <p class="radioTitle font14"> 是否整改</p>'+
            ' <div class=" itemcenter">'+
            ' <div class="radiobox font14">'+
                '<input type="radio"  name="'+item.value2+'"  value="1"><label></label>'+
                    ' <span class="font14">是</span>'+
                    '</div>'+
                '<div class="radiobox font14"><input type="radio"  name="'+item.value2+'"  value="2"><label></label>'+
                '<span class="font14">否</span>'+
                    ' </div>'+
                ' </div>'+
            '</div>'+
        ' <div class="inputBox marginleft">'+
        '<span class="font14  inputLable">整改时限：</span>'+
            ' <input class="inputText font14 '+item.value3+'" onchange=changeValue("'+item.value3+'") type="text" placeholder="整改时限" />'+
            '</div>'+
        '<div class="flex marginleft" style="margin-top:10px;">'+
        '<div class="font14">整改措施：</div>'+
            '<textarea class="textareaBox font14 '+item.value4+'" onchange=changeValue("'+item.value4+'") placeholder="多行输入"  ></textarea>'+
            '</div>'+
        '</div>';
    })
    $(".contentBox").append($(str))
    
})