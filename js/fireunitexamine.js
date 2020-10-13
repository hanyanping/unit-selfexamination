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
    {'title':'物理围界',radioData:[{radioName:'w7',radioTitle: '物理围界由围栏(墙)和防攀爬设施两部分组成，防攀爬设施应位于围栏（墙）的顶部，与围栏（墙）联接牢固；围栏（墙）底部应建有墙基或地梁',radioValue:'0'},{radioName:'w8',radioTitle: '物理围界应符合以下要求：<br> a)物理围界内侧、外侧的净高度应不低于2.5m，离地间隙不大于3cm。其中顶部防攀爬设施采用刺丝滚笼或刀片刺网等结构的围栏(墙)，其内侧、外侧的净高度应不低于2.0m，顶部刺丝滚笼或刀片刺网等的直径应不小于50 cm，相邻中心距不大于20 cm，距离围栏(墙)顶部的间隙不大于5cm；对于顶部防攀爬设施采用镶嵌碎玻璃或采用向外弯折30º角的刺丝网结构的围墙，其内侧、外侧的净高度应不低于2.5 m，刺丝网相邻两支撑柱中心距与墙垛中心距相同，刺丝垂直中心距不大于l00 mm;<br>b)围栏(墙)面向公共区域的一侧不应有用于攀爬的受力点和支撑点；<br>c)围栏(墙)应是钢筋网、钢板网、钢筋混凝土预制板、砖墙等结构形式，具体技术要求见附录A<br>d)两道物理围界的内、外侧围栏技术要求与单层围栏相同 <br>e)围栏(墙)对外面应设有醒目的禁止翻越警告标识牌，标识牌应安装牢固。标识牌内容应清晰可见，少数民族地区应增加当地语言文字标识。标识牌间距宜不大于150 m',radioValue:'0'},{radioName:'j9',radioTitle: '建筑物构成机场围界的一部分时，应符合以下要求：<br> a) 通往建筑物楼顶的通道应设置安全保卫设施，防止未经授权人员通行;<br>b) 面向空侧一侧不应开设通行口；对于确需开设通行口的，应设置安全保卫设施，对授权通行对象实施安全检查和通行管制。设施设备配备要求同围界日常运行道口;<br>c) 面向空侧一侧的窗户应能锁闭并加装密集型防护网;<br>d) 面向陆侧的一侧不应有可用于攀爬的受力点和支撑点',radioValue:'0'},{radioName:'j10',radioTitle: '建筑物的内部墙体构成机场围界的一部分时，应符合以下要求：<br>a) 内侧、外侧的净高度不应低于2.5m，公共区域一侧不应有可用于攀爬的受力点和支撑点，并设置视频监控系统（墙体为全高度的情况除外）,并应能及时发现人员和物品的非法进入；<br>b) 设有通行口的，应设置安全保卫设施，对通行人员、物品和车辆实施安全检查和通行管制，设施设备配备要求同围界的日常运行道口',radioValue:'0'},{radioName:'g11',radioTitle: '钢筋网围栏应符合以下要求：<br>a) 钢筋直径为5 mm;<br> b) 相邻横筋中心距不大于100 mm，左右中心距不大于50 mm <br>c) 两支撑柱中心距不大于3 m,支撑柱牢固;<br>d) 边框采用最小边不小于5 mm的角钢，且与支撑柱联接牢固；上下边框之间有加强肋或采取其他加强措施;<br>e) 下部地面砌砖石或水泥混凝土地梁，地梁与支撑柱联接牢固，其截面尺寸不小于240mm× 300mm;<br>f) 竖筋下端距地梁或地面距离不大于30 mm，围栏上部建有防攀越结构;<br>i) 金属部分进行除锈、防腐处理，防腐年限不少于8年',radioValue:'0'}]},

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