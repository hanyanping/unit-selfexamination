var firstList = [
    {'title':'基本要求',radioData:[{radioName:'y1',radioTitle: '一类机场宜设置两道物理围界，两道物理围界间距应不小于3 m。入侵报警系统宜安装在外侧物理围界上，为机场处置突发事件争取更多时间',radioValue:'0'},{radioName:'j2',radioTitle: '机场围界内侧应留有宽度不小于5 m的隔离带。两道围界以安装入侵报警系统的围栏（墙）为基准。',radioValue:'0'},{radioName:'g3',radioTitle: '给排水、通信、输油等地下管井穿越围界的，应在穿越处设置钢栅栏等隔离设施或进行密实封堵。',radioValue:'0'},{radioName:'y4',radioTitle: '应配备足够数量的巡逻车辆，以及通讯工具、望远镜、照明设备和防护器材等必要装备，以满足对航空器活动区巡逻要求。',radioValue:'0'}]},
    {'title':'入侵报警系统',radioData:[{radioName:'r5',radioTitle: '入侵报警系统应能对物理围界形成完整的覆盖，能对目标进行分类，对入侵行为作出判断；应能在机场飞行和安全照明的环境下工作，并应满足全天候运行的要求',radioValue:'0'},{radioName:'r5',radioTitle: '入侵报警系统应符合以下要求：<br>  a) 当发生攀爬、破坏围栏（墙）等入侵行为时，入侵报警系统不应发生漏报警；<br>b) 应能自动接收前端探测设备发来的所有报警信息，包括防区、时间、入侵类别，实时显示，并伴有声光报警<br> c) 具有对多路报警视频图像信号实时传输、切换的功能<br> d) 所有报警数据不能修改，应能导出备份，并注有操作人、操作时间等相关信息<br> e) 具有喊话警戒功能，应能对入侵行为和妨碍入侵报警系统正常工作等行为进行警示<br> f) 报警信号应能实时在安全保卫控制中心报警平台显示<br> g) 报警中心控制台应具有入侵报警、紧急报警、故障报警、报警信息复核、自检等基本功能，并设有电子地图<br> h) 视频图像数据和相关信息保存时限应不少于90 d',radioValue:'0'}]},
];
var twoList = [
    {'title':'物理围界',radioData:[{radioName:'w6',radioTitle: '物理围界由围栏(墙)和防攀爬设施两部分组成，防攀爬设施应位于围栏（墙）的顶部，与围栏（墙）联接牢固；围栏（墙）底部应建有墙基或地梁',radioValue:'0'},{radioName:'w7',radioTitle: '物理围界应符合以下要求：<br> a)物理围界内侧、外侧的净高度应不低于2.5m，离地间隙不大于3cm。其中顶部防攀爬设施采用刺丝滚笼或刀片刺网等结构的围栏(墙)，其内侧、外侧的净高度应不低于2.0m，顶部刺丝滚笼或刀片刺网等的直径应不小于50 cm，相邻中心距不大于20 cm，距离围栏(墙)顶部的间隙不大于5cm；对于顶部防攀爬设施采用镶嵌碎玻璃或采用向外弯折30º角的刺丝网结构的围墙，其内侧、外侧的净高度应不低于2.5 m，刺丝网相邻两支撑柱中心距与墙垛中心距相同，刺丝垂直中心距不大于l00 mm;<br>b)围栏(墙)面向公共区域的一侧不应有用于攀爬的受力点和支撑点；<br>c)围栏(墙)应是钢筋网、钢板网、钢筋混凝土预制板、砖墙等结构形式，具体技术要求见附录A<br>d)两道物理围界的内、外侧围栏技术要求与单层围栏相同 <br>e)围栏(墙)对外面应设有醒目的禁止翻越警告标识牌，标识牌应安装牢固。标识牌内容应清晰可见，少数民族地区应增加当地语言文字标识。标识牌间距宜不大于150 m',radioValue:'0'},{radioName:'j8',radioTitle: '建筑物构成机场围界的一部分时，应符合以下要求：<br> a) 通往建筑物楼顶的通道应设置安全保卫设施，防止未经授权人员通行;<br>b) 面向空侧一侧不应开设通行口；对于确需开设通行口的，应设置安全保卫设施，对授权通行对象实施安全检查和通行管制。设施设备配备要求同围界日常运行道口;<br>c) 面向空侧一侧的窗户应能锁闭并加装密集型防护网;<br>d) 面向陆侧的一侧不应有可用于攀爬的受力点和支撑点',radioValue:'0'},{radioName:'j9',radioTitle: '建筑物的内部墙体构成机场围界的一部分时，应符合以下要求：<br>a) 内侧、外侧的净高度不应低于2.5m，公共区域一侧不应有可用于攀爬的受力点和支撑点，并设置视频监控系统（墙体为全高度的情况除外）,并应能及时发现人员和物品的非法进入；<br>b) 设有通行口的，应设置安全保卫设施，对通行人员、物品和车辆实施安全检查和通行管制，设施设备配备要求同围界的日常运行道口',radioValue:'0'},{radioName:'g10',radioTitle: '钢筋网围栏应符合以下要求：<br>a) 钢筋直径为5 mm;<br> b) 相邻横筋中心距不大于100 mm，左右中心距不大于50 mm <br>c) 两支撑柱中心距不大于3 m,支撑柱牢固;<br>d) 边框采用最小边不小于5 mm的角钢，且与支撑柱联接牢固；上下边框之间有加强肋或采取其他加强措施;<br>e) 下部地面砌砖石或水泥混凝土地梁，地梁与支撑柱联接牢固，其截面尺寸不小于240mm× 300mm;<br>f) 竖筋下端距地梁或地面距离不大于30 mm，围栏上部建有防攀越结构;<br>i) 金属部分进行除锈、防腐处理，防腐年限不少于8年',radioValue:'0'}]},

];
var threeList = [
    {'title':'道口',radioData:[{radioName:'y11',radioTitle: '应设置大门和有效的安全保卫设施，防止未经授权和安全检查的人员和物品进入。日常运行道口大门的高度应不低于2.5 m，下框距地面的高度应不大于5 cm，门及门垛应坚固。非24h有人值守的日常运行道口大门应可锁闭，大门关闭时，隔离的强度应等同于机场围界',radioValue:'0'},{radioName:'c12',radioTitle: '车辆阻挡装置应符合以下要求：<br> 机场日常运行道口应设置防冲撞设施，有效反应时间应不大于5s，水平方向的抗冲击能力应不小于60 t',radioValue:'0'},{radioName:'r13',radioTitle: '日常运行道口应设置守卫值班室，并配备通讯、照明等设施，以及相应的工作条件',radioValue:'0'}]},
    {'title':'道口安全检查',radioData:[{radioName:'a14',radioTitle: '安检设备是否正常运行、定期进行检修、检测和维保',radioValue:'0'},{radioName:'a15',radioTitle: '安检岗位设置是否齐备，验证、引导、开包、操机岗',radioValue:'0'},{radioName:'r16',radioTitle: '人员和车辆进场是否经过安全检查',radioValue:'0'},{radioName:'y17',radioTitle: '应急处理预案演练情况',radioValue:'0'},{radioName:'f18',radioTitle: '反恐防暴器材是否齐备、员工是否熟练使用',radioValue:'0'},{radioName:'y19',radioTitle: '一、二类施工物料、工具是否按规定进行检查、登记与核销',radioValue:'0'},{radioName:'g20',radioTitle: '各类台账记录是否规范',radioValue:'0'},{radioName:'w21',radioTitle: '武警验证是否规范',radioValue:'0'}]},
];
var foureList = [
    {'title':'机坪内施工作业管理',radioData:[{radioName:'s22',radioTitle: '施工安保方案是否报备空防处',radioValue:'0'},{radioName:'x23',radioTitle: '现场安全监管是否按照报备方案实施',radioValue:'0'},{radioName:'j24',radioTitle: '进场施工人员和车辆是否证件齐全',radioValue:'0'},{radioName:'j25',radioTitle: '进场物料、器材是否经过规范安全检查',radioValue:'0'},{radioName:'s26',radioTitle: '施工现场封围设施是否齐备',radioValue:'0'},{radioName:'s27',radioTitle: '施工现场管控是否有序',radioValue:'0'},{radioName:'s28',radioTitle: '施工安全培训是否开展',radioValue:'0'},{radioName:'y29',radioTitle: '应急处理预案演练情况',radioValue:'0'}]},
    {'title':'空防安全管理体系建设',radioData:[{radioName:'s30',radioTitle: '是否建立空防安全规章制度',radioValue:'0'},{radioName:'k31',radioTitle: '空防安全管理工作组织架构是否完备',radioValue:'0'},{radioName:'s32',radioTitle: '是否建立定期空防安全例会制度',radioValue:'0'},{radioName:'y33',radioTitle: '员工是否存在违法犯罪情况',radioValue:'0'},{radioName:'s34',radioTitle: '是否建立空防安全内部自查制度及相应的奖惩制度',radioValue:'0'}]},
    {'title':'空防办工作开展情况及参与度',radioData:[{radioName:'s35',radioTitle: '是否积极配合空防办各项工作',radioValue:'0'},{radioName:'s36',radioTitle: '是否定期参加空防办组织的会议',radioValue:'0'},{radioName:'s37',radioTitle: '是否积极完成空防办通知的各项工作任务，并按时完成',radioValue:'0'},{radioName:'s38',radioTitle: '是否主动上报和宣传本单位空防安全管理先进经验和突出个人',radioValue:'0'},{radioName:'s39',radioTitle: '是否及时进行基础信息采集与更新',radioValue:'0'}]}

];
var fiveList = [
    {'title':'控制区通行证管理',radioData:[{radioName:'z40',radioTitle: '证件办理审核流程是否规范',radioValue:'0'},{radioName:'z41',radioTitle: '证件集中管理情况',radioValue:'0'},{radioName:'z42',radioTitle: '证件管理区域是否有录像监控系统',radioValue:'0'},{radioName:'s43',radioTitle: '是否专人专柜保管',radioValue:'0'},{radioName:'z44',radioTitle: '证件收发台账是否记录完整',radioValue:'0'},{radioName:'z45',radioTitle: '证件违规情况及控制措施',radioValue:'0'},{radioName:'f46',radioTitle: '分违规5分以上人员的培训情况',radioValue:'0'},{radioName:'y47',radioTitle: '一次性证件审批流程是否规范、一次性证件存根保存是否完整',radioValue:'0'}]},
    {'title':'备案刀、工具管理',radioData:[{radioName:'j48',radioTitle: '建立刀工具管理制度',radioValue:'0'},{radioName:'x49',radioTitle: '现场固定链锁使用',radioValue:'0'},{radioName:'b50',radioTitle: '保管场所是否独立锁闭',radioValue:'0'},{radioName:'s51',radioTitle: '是否建立专门台账、指定专门人员负责',radioValue:'0'},{radioName:'y52',radioTitle: '严格落实申报备案管理措施',radioValue:'0'},{radioName:'s53',radioTitle: '是否配合公安及属地部门的监督检查',radioValue:'0'},{radioName:'b54',radioTitle: '变更、丢失时及时报告，并有应对预案',radioValue:'0'},{radioName:'p55',radioTitle: '破损、不使用的刀、工具是否及时注销',radioValue:'0'}]},

];
var sixList = [
    {'title':'空防安全教育和培训',radioData:[{radioName:'s56',radioTitle: '是否建立培训教育制度和培训计划',radioValue:'0'},{radioName:'j57',radioTitle: '教育培训是否进行、台账记录是否齐备（视频、照片、台账）',radioValue:'0'},{radioName:'s58',radioTitle: '是否组织演练',radioValue:'0'}]},
    {'title':'合约商管理',radioData:[{radioName:'s59',radioTitle: '是否建立合约商管理制度',radioValue:'0'},{radioName:'s60',radioTitle: '是否对合约商签订安全协议',radioValue:'0'},{radioName:'s61',radioTitle: '是否建立针对合约商的检查制度',radioValue:'0'},{radioName:'s62',radioTitle: '是否填写相关检查台账',radioValue:'0'}]},

];
$(function(){
    var currentUrl = window.location.href;
    var radioList = [];
    var str = '';
    if(currentUrl.indexOf('flyexamine')>=0){
        radioList = firstList;
    }else if(currentUrl.indexOf('fly1examine')>=0){
        radioList = twoList;
    }else if(currentUrl.indexOf('fly2examine')>=0){
        radioList = threeList;
    }else if(currentUrl.indexOf('fly3examine')>=0){
        radioList = foureList;
    }else if(currentUrl.indexOf('fly4examine')>=0){
        radioList = fiveList;
    }else if(currentUrl.indexOf('fly5examine')>=0){
        radioList = sixList;
    }
    var str = '';
    $.each(radioList,function(index,item){
        var radioStr = '';
        var radioData = item.radioData;
        $.each(radioData,function(ind,ite){
            radioStr+=' <div class="radioContent">'+
            '<p class="radioTitle font14">'+ite.radioTitle+'</p>'+
            '<div class="flex showright">'+
                '<div class="radiobox font14">'+
                    '<input type="radio" name="'+ite.radioName+'" value="2"/><label></label><span class="font14">不符合</span>'+
                '</div>'+
                '<div class="radiobox font14">'+
                    '<input type="radio" name="'+ite.radioName+'" value="1"/><label></label><span class="font14">符合</span>'+
                '</div>'+
            '</div>'+
        '</div>';
        })
        str+='<div class="radioList">'+
        '<div class="title">'+
        '<span class="lineBox"></span>'+
        '<span class="font14 titletext fontWeight">'+item.title+'</span>'+
        '</div>'+radioStr+
        '</div>' ;
    })
    $(".content").append($(str))
    
})