var firstList = [
    {'title':'消防控制室',radioData:[{radioName:'k4',radioTitle: '1.控制器报警自检功能：按下报警控制器自检键，控制器应完成系统自检。火灾报警控制器应有本机自检功能，自检期间，发出声、光报警信号',radioValue:'0'},{radioName:'x5',radioTitle: '2.消音功能：当报警控制器接到报警信号后，按下消音键，观察能否消除声信号；光报警信号能否保持',radioValue:'0'},{radioName:'f6',radioTitle: '3.复位功能：按下复位键后，看能否手动复位。火灾报警控制器处于报警状态时，声报警信号应能手动消除，光报警信号在控制器复位前不能手动消除；同时应具有手动复位功能',radioValue:'0'},{radioName:'g7',radioTitle: '4.故障报警功能：卸下系统回路中的任一探测器或将连接线路断线，观察报警控制器能否在100秒内发出与火灾报警信号有明显区别的声、光报警信号',radioValue:'0'},{radioName:'h8',radioTitle: '5.火灾优先功能：在故障状态下，给感烟探测器加烟或按下手动火灾报警按钮，观察火灾报警信号能否优先输入报警控制器，发出声、光火灾报警信号',radioValue:'0'},{radioName:'b9',radioTitle: '6.报警记忆功能：查看报警控制器报警计时装置情况，使用打印机记录火灾报警时间的，查看能否打印出月、日，时、分等信息，打印机能否正常工作',radioValue:'0'},{radioName:'d10',radioTitle: '7.电源自动转换功能：接通电源，观察火灾报警控制器是否处于正常工作状态；关闭主电源开关，查看备用电源能否正常工作；恢复主电源，查看主电工作情况；观察主、备电源的工作状态显示情况',radioValue:'0'},{radioName:'p11',radioTitle: '8.屏蔽、隔离设备情况：查看报警控制器屏蔽或隔离部件的状况，询问屏蔽、隔离的时间和原因。系统中的火灾探测器、手动火灾报警按钮、水流指示器、压力开关、输出、输入控制模块等部件被屏蔽、隔离后，应尽快恢复',radioValue:'0'}]},
    {'title':'防烟排烟系统',radioData:[{radioName:'c12',radioTitle: '1.查看机械加压送风系统、机械排烟系统控制柜的标志、仪表、指示灯、开关和控制按钮',radioValue:'0'},{radioName:'y13',radioTitle: '2.用按钮启停每台风机，查看仪表及指示灯显示',radioValue:'0'},{radioName:'c14',radioTitle: '3.查看机械加压送风系统、机械排烟系统风机的外观和标志牌',radioValue:'0'},{radioName:'z15',radioTitle: '4.在控制室远程手动启、停风机，查看运行及信号反馈情况',radioValue:'0'},{radioName:'c16',radioTitle: '5.查看送风阀、排烟阀、排烟防火阀、电动排烟窗的外观',radioValue:'0'},{radioName:'s17',radioTitle: '6.手动、电动开启，手动复位，动作和信号反馈情况',radioValue:'0'}]},
    {'title':'泡沫灭火系统',radioData:[{radioName:'c18',radioTitle: '1.查看消防水池（或水箱）外观，消防泵及控制柜的工作状态 ',radioValue:'0'},{radioName:'c19',radioTitle: '2.查看稳压泵、增压泵、气压水罐工作状态',radioValue:'0'},{radioName:'c20',radioTitle: '3.查看泵房工作环境',radioValue:'0'},{radioName:'c21',radioTitle: '4.查看消防水池水位及消防用水不被他用的设施',radioValue:'0'},{radioName:'c22',radioTitle: '5.查看补水设施',radioValue:'0'},{radioName:'c23',radioTitle: '6.查看防冻设施',radioValue:'0'},{radioName:'c24',radioTitle: '7.查看消防水箱水位及消防用水不被他用的设施',radioValue:'0'},{radioName:'c25',radioTitle: '8.查看泡沫喷头外观 ',radioValue:'0'},{radioName:'p26',radioTitle: '9.泡沫消火栓外观',radioValue:'0'},{radioName:'p27',radioTitle: '10.泡沫炮外观',radioValue:'0'},{radioName:'p28',radioTitle: '11.泡沫产生器外观',radioValue:'0'},{radioName:'p29',radioTitle: '12.泡沫液贮罐间环境',radioValue:'0'},{radioName:'p30',radioTitle: '13.泡沫液贮罐外观',radioValue:'0'},{radioName:'b31',radioTitle: '14.比例混合器外观',radioValue:'0'},{radioName:'p32',radioTitle: '15.泡沫泵工作状态',radioValue:'0'},{radioName:'c33',radioTitle: '16.查看水泵控制柜仪表、指示灯、控制按钮和标识',radioValue:'0'},{radioName:'m34',radioTitle: '17.模拟主泵故障，查看自动切换启动备用泵情况',radioValue:'0'},{radioName:'c35',radioTitle: '18.查看仪表及指示灯显示',radioValue:'0'},{radioName:'c36',radioTitle: '19.查看泡沫液贮罐罐体或铭牌、标志牌上应清晰注明泡沫灭火剂的型号、配比浓度、泡沫灭火剂的有效日期和储量 ',radioValue:'0'},{radioName:'c37',radioTitle: '20.储罐的配件应齐全完好，液位计、呼吸阀、安全阀及压力表状态应正常',radioValue:'0'},{radioName:'c38',radioTitle: '21.查看比例混合器是否符合设计选型',radioValue:'0'},{radioName:'y39',radioTitle: '22.液流方向是否正确',radioValue:'0'},{radioName:'f40',radioTitle: '23.阀门启闭应灵活，压力表应正常',radioValue:'0'},{radioName:'c41',radioTitle: '24.查看泡沫产生器是否符合设计选型',radioValue:'0'},{radioName:'x42',radioTitle: '25.吸气孔、发泡网及暴露的泡沫喷射口，不得有杂物进入或堵塞',radioValue:'0'},{radioName:'p43',radioTitle: '26.泡沫出口附近不得有阻挡泡沫喷射及泡沫流淌的障碍物',radioValue:'0'},{radioName:'c44',radioTitle: '27.查看泡沫栓阀门启闭是否灵活',radioValue:'0'},{radioName:'p45',radioTitle: '28.泡沫喷头是否符合设计选型',radioValue:'0'},{radioName:'x46',radioTitle: '29.吸气孔、发泡网是否堵塞',radioValue:'0'}]},
  
    {'title':'防火卷帘系统与防火门维护',radioData:[{radioName:'y47',radioTitle: '1.应逐樘查看防火卷帘的外观及警示区域内是否存放商品或杂物 ',radioValue:'0'},{radioName:'f48',radioTitle: '2.防火卷帘控制器是否通电',radioValue:'0'},{radioName:'s49',radioTitle: '3.是否设置在自动状态',radioValue:'0'},{radioName:'n50',radioTitle: '4.能否正常运行',radioValue:'0'},{radioName:'c51',radioTitle: '5.查看每扇防火门的外观',radioValue:'0'},{radioName:'k52',radioTitle: '6.开启常闭防火门，查看关闭效果',radioValue:'0'},{radioName:'f53',radioTitle: '7.分别触发两个相关的火灾探测器，查看相应区域电动常开防火门的关闭效果及反馈信号',radioValue:'0'},{radioName:'s54',radioTitle: '8.疏散通道上设有出入口控制系统的防火门，自动或远程手动输出控制信号，查看出入口控制系统的解除情况及反馈信号',radioValue:'0'}]},
    {'title':'安全疏散设施',radioData:[{radioName:'c55',radioTitle: '1.查看疏散楼梯、安全出口、疏散出口、疏散通道是否被占用、堵塞或上锁',radioValue:'0'},{radioName:'c56',radioTitle: '2.查看火灾应急照明灯的外观，安装牢固程度，应急灯工作状态',radioValue:'0'},{radioName:'c57',radioTitle: '3.查看疏散指示标志的外观和位置，核对指示方向，疏散指示标志工作状态',radioValue:'0'},{radioName:'c58',radioTitle: '4.查看防火门、防火卷帘处的警示线内是否存放物品或被遮挡',radioValue:'0'}]},

];
var applyNum = localStorage.getItem('applyNum')
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
                    '<input type="radio" name="'+ite.radioName+'" value="2"/><label></label><span class="font14">合格</span>'+
                '</div>'+
                '<div class="radiobox font14">'+
                    '<input type="radio" name="'+ite.radioName+'" value="1"/><label></label><span class="font14">不合格</span>'+
                '</div>'+
            '</div>'+
        '</div>';
        })
        str+='<div class="radioList">'+
        '<div class="title">'+
        '<span class="linebox"></span>'+
        '<span class="font14 titletext fontWeight">'+item.title+'</span>'+
        '</div>'+radioStr+
        '</div>'+
        '</div>';
    })
    $(".contentBox").append($(str))
    
})
