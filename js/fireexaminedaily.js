var firstList = [
    {'title':'消防控制室',inputValue:'z59',radioData:[{radioName:'k4',radioTitle: '1.控制器报警自检功能：按下报警控制器自检键，控制器应完成系统自检。火灾报警控制器应有本机自检功能，自检期间，发出声、光报警信号',radioValue:'0'},{radioName:'x5',radioTitle: '2.消音功能：当报警控制器接到报警信号后，按下消音键，观察能否消除声信号；光报警信号能否保持',radioValue:'0'},{radioName:'f6',radioTitle: '3.复位功能：按下复位键后，看能否手动复位。火灾报警控制器处于报警状态时，声报警信号应能手动消除，光报警信号在控制器复位前不能手动消除；同时应具有手动复位功能',radioValue:'0'},{radioName:'g7',radioTitle: '4.故障报警功能：卸下系统回路中的任一探测器或将连接线路断线，观察报警控制器能否在100秒内发出与火灾报警信号有明显区别的声、光报警信号',radioValue:'0'},{radioName:'h8',radioTitle: '5.火灾优先功能：在故障状态下，给感烟探测器加烟或按下手动火灾报警按钮，观察火灾报警信号能否优先输入报警控制器，发出声、光火灾报警信号',radioValue:'0'},{radioName:'b9',radioTitle: '6.报警记忆功能：查看报警控制器报警计时装置情况，使用打印机记录火灾报警时间的，查看能否打印出月、日，时、分等信息，打印机能否正常工作',radioValue:'0'},{radioName:'d10',radioTitle: '7.电源自动转换功能：接通电源，观察火灾报警控制器是否处于正常工作状态；关闭主电源开关，查看备用电源能否正常工作；恢复主电源，查看主电工作情况；观察主、备电源的工作状态显示情况',radioValue:'0'},{radioName:'p11',radioTitle: '8.屏蔽、隔离设备情况：查看报警控制器屏蔽或隔离部件的状况，询问屏蔽、隔离的时间和原因。系统中的火灾探测器、手动火灾报警按钮、水流指示器、压力开关、输出、输入控制模块等部件被屏蔽、隔离后，应尽快恢复',radioValue:'0'}]},
    {'title':'防烟排烟系统',inputValue:'z60',radioData:[{radioName:'c12',radioTitle: '1.查看机械加压送风系统、机械排烟系统控制柜的标志、仪表、指示灯、开关和控制按钮',radioValue:'0'},{radioName:'y13',radioTitle: '2.用按钮启停每台风机，查看仪表及指示灯显示',radioValue:'0'},{radioName:'c14',radioTitle: '3.查看机械加压送风系统、机械排烟系统风机的外观和标志牌',radioValue:'0'},{radioName:'z15',radioTitle: '4.在控制室远程手动启、停风机，查看运行及信号反馈情况',radioValue:'0'},{radioName:'c16',radioTitle: '5.查看送风阀、排烟阀、排烟防火阀、电动排烟窗的外观',radioValue:'0'},{radioName:'s17',radioTitle: '6.手动、电动开启，手动复位，动作和信号反馈情况',radioValue:'0'}]},
    {'title':'泡沫灭火系统',inputValue:'z61',radioData:[{radioName:'c18',radioTitle: '1.查看消防水池（或水箱）外观，消防泵及控制柜的工作状态 ',radioValue:'0'},{radioName:'c19',radioTitle: '2.查看稳压泵、增压泵、气压水罐工作状态',radioValue:'0'},{radioName:'c20',radioTitle: '3.查看泵房工作环境',radioValue:'0'},{radioName:'c21',radioTitle: '4.查看消防水池水位及消防用水不被他用的设施',radioValue:'0'},{radioName:'c22',radioTitle: '5.查看补水设施',radioValue:'0'},{radioName:'c23',radioTitle: '6.查看防冻设施',radioValue:'0'},{radioName:'c24',radioTitle: '7.查看消防水箱水位及消防用水不被他用的设施',radioValue:'0'},{radioName:'c25',radioTitle: '8.查看泡沫喷头外观 ',radioValue:'0'},{radioName:'p26',radioTitle: '9.泡沫消火栓外观',radioValue:'0'},{radioName:'p27',radioTitle: '10.泡沫炮外观',radioValue:'0'},{radioName:'p28',radioTitle: '11.泡沫产生器外观',radioValue:'0'},{radioName:'p29',radioTitle: '12.泡沫液贮罐间环境',radioValue:'0'},{radioName:'p30',radioTitle: '13.泡沫液贮罐外观',radioValue:'0'},{radioName:'b31',radioTitle: '14.比例混合器外观',radioValue:'0'},{radioName:'p32',radioTitle: '15.泡沫泵工作状态',radioValue:'0'},{radioName:'c33',radioTitle: '16.查看水泵控制柜仪表、指示灯、控制按钮和标识',radioValue:'0'},{radioName:'m34',radioTitle: '17.模拟主泵故障，查看自动切换启动备用泵情况',radioValue:'0'},{radioName:'c35',radioTitle: '18.查看仪表及指示灯显示',radioValue:'0'},{radioName:'c36',radioTitle: '19.查看泡沫液贮罐罐体或铭牌、标志牌上应清晰注明泡沫灭火剂的型号、配比浓度、泡沫灭火剂的有效日期和储量 ',radioValue:'0'},{radioName:'c37',radioTitle: '20.储罐的配件应齐全完好，液位计、呼吸阀、安全阀及压力表状态应正常',radioValue:'0'},{radioName:'c38',radioTitle: '21.查看比例混合器是否符合设计选型',radioValue:'0'},{radioName:'y39',radioTitle: '22.液流方向是否正确',radioValue:'0'},{radioName:'f40',radioTitle: '23.阀门启闭应灵活，压力表应正常',radioValue:'0'},{radioName:'c41',radioTitle: '24.查看泡沫产生器是否符合设计选型',radioValue:'0'},{radioName:'x42',radioTitle: '25.吸气孔、发泡网及暴露的泡沫喷射口，不得有杂物进入或堵塞',radioValue:'0'},{radioName:'p43',radioTitle: '26.泡沫出口附近不得有阻挡泡沫喷射及泡沫流淌的障碍物',radioValue:'0'},{radioName:'c44',radioTitle: '27.查看泡沫栓阀门启闭是否灵活',radioValue:'0'},{radioName:'p45',radioTitle: '28.泡沫喷头是否符合设计选型',radioValue:'0'},{radioName:'x46',radioTitle: '29.吸气孔、发泡网是否堵塞',radioValue:'0'}]},
    {'title':'防火卷帘系统与防火门维护',inputValue:'z62',radioData:[{radioName:'y47',radioTitle: '1.应逐樘查看防火卷帘的外观及警示区域内是否存放商品或杂物 ',radioValue:'0'},{radioName:'f48',radioTitle: '2.防火卷帘控制器是否通电',radioValue:'0'},{radioName:'s49',radioTitle: '3.是否设置在自动状态',radioValue:'0'},{radioName:'n50',radioTitle: '4.能否正常运行',radioValue:'0'},{radioName:'c51',radioTitle: '5.查看每扇防火门的外观',radioValue:'0'},{radioName:'k52',radioTitle: '6.开启常闭防火门，查看关闭效果',radioValue:'0'},{radioName:'f53',radioTitle: '7.分别触发两个相关的火灾探测器，查看相应区域电动常开防火门的关闭效果及反馈信号',radioValue:'0'},{radioName:'s54',radioTitle: '8.疏散通道上设有出入口控制系统的防火门，自动或远程手动输出控制信号，查看出入口控制系统的解除情况及反馈信号',radioValue:'0'}]},
    {'title':'安全疏散设施',inputValue:'z63',radioData:[{radioName:'c55',radioTitle: '1.查看疏散楼梯、安全出口、疏散出口、疏散通道是否被占用、堵塞或上锁',radioValue:'0'},{radioName:'c56',radioTitle: '2.查看火灾应急照明灯的外观，安装牢固程度，应急灯工作状态',radioValue:'0'},{radioName:'c57',radioTitle: '3.查看疏散指示标志的外观和位置，核对指示方向，疏散指示标志工作状态',radioValue:'0'},{radioName:'c58',radioTitle: '4.查看防火门、防火卷帘处的警示线内是否存放物品或被遮挡',radioValue:'0'}]},

];
var twoList = [
    {'title':'消防控制室',inputValue:'z15',radioData:[{radioName:'t4',radioTitle: '1.探测器报警功能:用探测器试验器或其他方法对火灾探测器进行加烟、加温等试验，观察探测器确认灯是否显示，控制器能否接到报警信号。探测器实际安装数量在100只以下者抽验5只，100只以上者抽验8只',radioValue:'0'},{radioName:'h5',radioTitle: '2.火灾警报装置的声光显示:火灾显示盘应能接收来自火灾报警控制器的火灾报警信号、主电源断电、短路及其他故障报警信号；发出声、光报警信号，指示火灾发生部位，并予保持',radioValue:'0'},{radioName:'s6',radioTitle: '3.手动火灾报警按钮报警:手动试验两只以上火灾报警按钮，观察手动报警按钮确认灯指示情况及控制室消防控制设备信号显示情况',radioValue:'0'},{radioName:'h7',radioTitle: '4.火灾显示盘的声光显示:查看火灾显示盘在火警、故障状态下能否正常工作',radioValue:'0'},{radioName:'h8',radioTitle: '5.火灾事故广播:在消防控制室进行选层或通层广播，观察选层状况及具体部位的广播声音状况。查看备用扩音机设置状况',radioValue:'0'},{radioName:'x9',radioTitle: '6.消防通信设备:在消防水泵房、风机房等设备间所设的对讲电话、塞孔电话与消防控制室进行两次以上通话试验；查看消防控制室是否设置了外线电话',radioValue:'0'},{radioName:'x10',radioTitle: '7.消防电梯:现场手动试验，观察消防电梯动作情况及消防控制设备信号反馈情况',radioValue:'0'},{radioName:'x11',radioTitle: '8.消防电梯:在消防控制设备上手动启动消防电梯控制装置，观察消防电梯动作情况及信号反馈情况',radioValue:'0'},{radioName:'x12',radioTitle: '9.消防电梯:模拟火灾信号（按下电梯前的手动报警按钮或给探测器加烟），观察消防电梯和常用电梯动作情况及消防控制设备信号反馈情况',radioValue:'0'},{radioName:'y13',radioTitle: '10.用自动或手动检查消防控制设备的控制显示功能:室内消火栓、自动喷水、泡沫、气体、干粉等灭火系统的控制设备；抽验电动防火门、防火卷帘门，数量不小于总数的25%；选层试验消防应急广播设备，并试验公共广播强制转入火灾应急广播的功能,抽检数量不小于总数的25%',radioValue:'0'},{radioName:'d14',radioTitle: '11.对主电源和备用电源测试:对主电源和备用电源进行1-3次自动切换试验',radioValue:'0'}]},
    
]
var threeList = [
    {'title':'消防控制室',inputValue:'z9',radioData:[{radioName:'y4',radioTitle: '1.应用专用检测仪器对所安装的全部探测器和手动报警装置试验至少1次',radioValue:'0'},{radioName:'z5',radioTitle: '2.自动和手动打开防火门，关闭电动防火阀和空调系统',radioValue:'0'},{radioName:'d6',radioTitle: '3.对全部电动防火门、防火卷帘的试验至少1次:',radioValue:'0'},{radioName:'q7',radioTitle: '4.强制切断非消防电源功能试验',radioValue:'0'},{radioName:'d8',radioTitle: '5.对其他有关的消防控制装置进行功能试验:',radioValue:'0'}]},
    {'title':'泡沫灭火系统',inputValue:'z25',radioData:[{radioName:'x10',radioTitle: '6.系统每半年除储罐上泡沫混合液立管和液下喷射防火堤内泡沫管道及高倍数泡沫产生器进口端控制阀后的管道外，其余管道应全部清洗，清除锈渣',radioValue:'0'},{radioName:'x11',radioTitle: '7.系统每年应进行一次自动启动检查试验。低、中倍数泡沫灭火系统选择一最不利的防护区，高倍数泡沫灭火系统任选一防护区，使防护区内感烟、感温探测器分别发出模拟火灾信号，观察并记录泡沫灭火装置动作情况及相关设施的动作情况和控制室消防控制设备信号显示情况',radioValue:'0'},{radioName:'b12',radioTitle: '8.标准要求：当防护区内感烟火灾探测器发出火灾报警信号后，控制室消防控制设备应接收并发出声、光报警信号，显示火灾探测器部位',radioValue:'0'},{radioName:'d13',radioTitle: '9.当防护区内感温火灾探测器发出火灾报警信号后，控制室消防控制设备应接收并发出声、光报警信号，显示火灾探测器部位，防护区内声、光警报装置应报警，消防控制设备应发出启动消防水泵或固定式消防泵组，打开防护区电控阀门的指令，泡沫灭火装置自动启动喷射（喷射时间不应小于1分钟）',radioValue:'0'},{radioName:'f14',radioTitle: '10.防护区内在泡沫淹没深度以下的门、窗应自动关闭，在封闭空间设置的排气口应自动开启，相关的生产、照明电源应被切断',radioValue:'0'},{radioName:'g15',radioTitle: '11.各部位动作时间及动作状态应符合设计要求。控制室消防控制设备应有泡沫喷射及各部位动作状态的反馈信号显示',radioValue:'0'},{radioName:'x16',radioTitle: '12.系统每年应进行一次远程启动试验。在控制室消防控制设备上手动启动一防护区的泡沫灭火装置，观察泡沫灭火装置动作情况及相关设施动作情况和消防控制设备信号显示情况',radioValue:'0'},{radioName:'b17',radioTitle: '13.标准要求：在控制室消防控制设备上手动启动泡沫灭火装置，防护区内声、光警报装置应报警，泡沫灭火装置应启动喷射，同时防护区相关的门、窗应自动关闭，封闭空间的排气口应自动开启，相关部位的生产、照明电源应被切断',radioValue:'0'},{radioName:'k18',radioTitle: '14.控制室消防控制设备应有泡沫喷射及各部位动作信号显示',radioValue:'0'},{radioName:'x19',radioTitle: '15.系统每年应进行一次紧急按钮启动检查试验。手动启动一防护区外泡沫灭火装置的紧急启动按钮，观察泡沫灭火装置动作情况及相关设施动作情况和消防控制设备信号显示情况',radioValue:'0'},{radioName:'b20',radioTitle: '16.标准要求：手动启动防护区外的紧急启动按钮，防护区内声、光报警装置应报警，控制室消防控制设备应接收并发出声、光报警信号',radioValue:'0'},{radioName:'x21',radioTitle: '17.显示紧急启动按钮部位并发出启动消防水泵或固定消防泵组，打开防护区电控阀门的指令，泡沫灭火装置应启动喷射',radioValue:'0'},{radioName:'f22',radioTitle: '18.防护区相关的门、窗应自动关闭，封闭空间的排气口应自动开启',radioValue:'0'},{radioName:'x23',radioTitle: '19.相关部位的生产、照明电源应被切断，控制室消防控制设备应有泡沫喷射及各部位动作的反馈信号显示',radioValue:'0'},{radioName:'x24',radioTitle: '20.系统检查和试验完毕，应对泡沫液泵或泡沫混合液泵、泡沫液管道、泡沫混合液管道、泡沫管道、泡沫比例混合器（装置）、泡沫消火栓、管道过滤器或喷过泡沫的泡沫产生装置等用清水冲洗后防控，复原系统',radioValue:'0'}]},
    
]
var applyNum = localStorage.getItem('applyNum')
$(function(){
    var str = '';
    var currentUrl = window.location.href;
    var radioList = [];
    var str = '';
    var type = '';
    if(currentUrl.indexOf('fireexaminedaily')>=0){
        radioList = firstList;
         type = 1;
    }else if(currentUrl.indexOf('fireexaminequater')>=0){
        radioList = twoList;
        type = 2;
    }else if(currentUrl.indexOf('fireexamineyear')>=0){
        radioList = threeList;
        type = 3;
    }
    $.each(radioList,function(index,item){
        var radioStr = '';
        var radioData = item.radioData;
        $.each(radioData,function(ind,ite){
            if(type == 2 || type == 3){
                radioStr+=' <div class="radioContent">'+
                '<p class="radioTitle font14">'+ite.radioTitle+'</p>'+
                '<div class="flex showright">'+
                    '<div class="radiobox font14">'+
                        '<input type="radio" name="'+ite.radioName+'" value="3"/><label></label><span class="font14">不涉及</span>'+
                    '</div>'+
                    '<div class="radiobox font14">'+
                        '<input type="radio" name="'+ite.radioName+'" value="2"/><label></label><span class="font14">不合格</span>'+
                    '</div>'+
                    '<div class="radiobox font14">'+
                            '<input type="radio" name="'+ite.radioName+'" value="1"/><label></label><span class="font14">合格</span>'+
                    '</div>'+
                '</div>'+
            '</div>';
            }else if(type == 1){
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
            }
            
        })
        str+='<div class="radioList">'+
        '<div class="title">'+
        '<span class="linebox"></span>'+
        '<span class="font14 titletext fontWeight">'+item.title+'</span>'+
        '</div>'+radioStr+
        '<div class="inputbox"> <span class="font14">责任人：</span><input  class="inputText font14 '+item.inputValue+'" onchange="changeValue('+item.inputValue+')" type="text" placeholder="责任人"/></div>'+
        '</div>';
    })
    $(".contentBox").append($(str))
    
})
