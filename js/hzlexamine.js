var firstList = [
    {'title':'基本要求',radioData:[{radioName:'h1',radioTitle: '航站楼的空侧和陆侧之间应设置非透视物理隔断，隔断净高度应不低于2.5 m。公共区域一侧不应有用于攀爬的受力点和支撑点，防止未经授权人员和物品非法进入候机隔离区。应设置视频监控系统（物理隔断为全高度的情况除外），对物理隔断实施监控，并应能及时发现人员和物品的非法进入',radioValue:'0'},{radioName:'y2',radioTitle: '应对连接公共活动区和机场控制区的通风道、排水道、地下公用设施、隧道和通风井等进行物理隔离，并对隔离设施加以保护，防止未经授权人员和物品非法进入机场控制区',radioValue:'0'},{radioName:'t3',radioTitle: '同一电梯或楼梯应只能通往具有相同权限的控制区域。同一电梯或楼梯可通往不同权限控制区域的，应设置有效的安全保卫设施，防止不同权限控制区域或空陆侧之间出现互通的情况',radioValue:'0'},{radioName:'y4',radioTitle: '应配备足够数量的巡逻车辆，以及通讯工具、望远镜、照明设备和防护器材等必要装备，以满足对航空器活动区巡逻要求',radioValue:'0'},{radioName:'h5',radioTitle: '航站楼内应设置安全保卫、应急疏散等标识，标识应置于明显位置',radioValue:'0'}]},
    {'title':'视频监控系统',radioData:[{radioName:'y6',radioTitle: '应能对机场到达、出发旅客、行李和货物所经过的主要活动场所、通道、电梯（厅）、重要部位和区域实施有效的视频监控，图像显示、记录与回放',radioValue:'0'},{radioName:'y7',radioTitle: '应能与通行管制、隐蔽报警系统、围界入侵报警系统等进行系统联动，以便对报警现场进行录像和复核',radioValue:'0'},{radioName:'d8',radioTitle: '对监控范围内的事件进行记录，经授权的操作员应能依据其特征（如单位、时间、地点、类型或性质等）进行检索、显示或/和打印，并能进行统计分析，生成报表',radioValue:'0'},{radioName:'s9',radioTitle: '视频监控系统应对机场部分区域实施全覆盖视频监控，满足24h和全天候运行的要求，在现场光照环境下，图像清晰可辨，图像质量应能满足对监控范围内人员基本特征进行识别的要求。这些区域包括但不限于：a) 候机隔离区；b) 行李传送和提取区域；c) 航空器停机位、隔离停机位；d) 下穿跑道或滑行道的隧道或立体交叉区域；e) 设在航站楼地下的停车场和车辆通道',radioValue:'0'},{radioName:'s10',radioTitle: '视频监控系统应对机场部分重要区域实施静态持续全覆盖视频监控，满足24h和全天候运行的要求，在现场光照环境下，图像清晰可辨，图像质量应能满足对监控范围内人员基本特征进行识别的要求。这些区域包括但不限于：a) 航站楼前人行道、车道边；b) 航站楼内公共活动区、小件行李寄存处、电梯口、卫生间门前；c) 安检工作区、旅客反向通道；d) 空陆侧隔离设施、门禁系统通行口的内外两侧；e) 可以俯视航空器活动区、安检工作现场的陆侧区域；f) 连通空侧和陆侧的检修通道、燃料通道、综合管廊等的出入口；i) 要害部位的出入口、重要工作区域和与公共区域的隔离设施',radioValue:'0'},{radioName:'y11',radioTitle: '音频和视频图像信息资料的保存时限应不少于90 d。回放图像质量不应明显低于实时图像质量',radioValue:'0'},{radioName:'s12',radioTitle: '视频监控系统应对航站楼出入口、乘机手续办理柜台、安全检查通道验证柜台、登机口等实施静态持续监控，满足24h和全天候运行的要求，在现场光照环境下，图像应能清晰反映人的脸部正面特征，图像清晰度可满足人脸特征识别的要求',radioValue:'0'}]},
];
var twoList = [
    {'title':'公共活动区',radioData:[{radioName:'y13',radioTitle: '应在航站楼内售票处、乘机手续办理柜台、安全检查通道等位置设置告示牌、动态电子显示屏或广播等，以便及时告知旅客安全保卫相关信息',radioValue:'0'},{radioName:'h14',radioTitle: '航站楼内售票柜台、乘机手续办理柜台、行李传送带等设施的结构应能防止非授权人员和物品由此进入机场控制区',radioValue:'0'},{radioName:'c15',radioTitle: '从公共活动区俯视观察到机场控制区的所有区域，均应采用物理隔断隔离，隔断净高度应不低于2.5m。公共区域一侧不应有可用于攀爬的受力点和支撑点，防止人员非法进入机场控制区。应设置视频监控系统（物理隔断为全高度的情况除外），对物理隔断实施监控，并应能及时发现人员和物品的非法进入',radioValue:'0'},{radioName:'y16',radioTitle: '应配备对寄存的小件行李实施安全检查的设备，小件行李寄存处应能锁闭',radioValue:'0'}]},
    {'title':'安检工作区',radioData:[{radioName:'a17',radioTitle: '安检工作区应设置禁止拍摄、禁止旅客携带或托运的物品等安全保卫标识和通告设施，可以采用机场动态电子显示屏、宣传栏、实物展示柜等形式 t',radioValue:'0'},{radioName:'h18',radioTitle: '航站楼内所有区域均不应俯视观察到安检工作现场。可俯视观察到安检工作现场的区域应符合以下要求：a)采用非透视物理隔断隔离，隔断净高度应不低于2.5m，公共区域一侧不应有用于攀爬的受力点和支撑点，并设置视频监控系统（物理隔断为全高度的情况除外）；b)必要时，应能够对公众关闭',radioValue:'0'}]},
    {'title':'音、视频监控系统和门禁系统',radioData:[{radioName:'y19',radioTitle: '应设置视频监控系统，并与门禁系统联动，对进出人员及其物品实施双向监控 t',radioValue:'0'},{radioName:'y20',radioTitle: '应设置视频监控系统，监控范围应覆盖航站楼前车行道和人行道、航站楼出入口、公共活动区、售票处、小件行李寄存处、乘机手续办理柜台、安检候检区、安检工作区、托运行李开包检查区、行李传送区、行李分拣装卸区、候机隔离区、登机口、廊桥、行李提取区、旅客迎送区域、垃圾箱、电梯口、卫生间门前区域、通行口两侧和空陆侧隔离设施，以及连通检修通道、燃料通道、综合管廊的出入口',radioValue:'0'},{radioName:'y21',radioTitle: '应设置音频监控系统，在乘机手续办理柜台、安检工作区和登机口验证柜台等重要场所配备前端音频采集设备，与相关监控点位的摄像机同步录音录像，同步误差不大于1s',radioValue:'0'}]},
    {'title':'候机隔离区和行李分拣区',radioData:[{radioName:'y22',radioTitle: '应封闭管理。候机隔离区与公共活动区相邻或相通的门、窗和通道等，均应设置安全保卫设施，对所有进入该区域的人员和物品均应进行安全检查',radioValue:'0'},{radioName:'y23',radioTitle: '应设置视频监控系统，对行李传送、分拣、装卸、存储等各环节实施监控',radioValue:'0'},{radioName:'y24',radioTitle: '应设置通行管制设施或采取通行管制措施，确保行李分拣装卸区仅允许授权人员进入',radioValue:'0'}]},
];
var threeList = [
    {'title':'门禁系统',radioData:[{radioName:'j25',radioTitle: '机场应根据机场控制区内不同权限区域的安全保卫要求和功能，在区域间的通行口设置门禁系统，对进入和试图进入相关区域的人员、车辆进行身份验证和记录，仅允许授权人员、车辆通行 t',radioValue:'0'},{radioName:'y26',radioTitle: '应设置视频监控系统，对通行口内外两侧实施监控，对所有进出和试图进出机场控制区的行为进行记录',radioValue:'0'},{radioName:'y27',radioTitle: '应设置报警装置，对非授权出入行为、规定时间内未关闭等情况进行报警。报警信号应能在控制中心显示，响应时间应不大于2s t',radioValue:'0'},{radioName:'j28',radioTitle: '机场控制区通行证件挂失、更改或注销后，门禁系统应能及时识别，防止非授权人员、车辆进入',radioValue:'0'},{radioName:'c29',radioTitle: '采用单向通行闸机的，应安装如刺圈等有效的防攀爬设施，闸机应置于视频监控覆盖范围内 t',radioValue:'0'}]},
    {'title':'航站楼的物理防护',radioData:[{radioName:'h30',radioTitle: '航站楼内可从公共活动区进入机场控制区的窗户，包括地下室、一层、靠近消防紧急出口和阳台的窗户等，应无法从外部拆卸，并采取相应的安全保卫措施，防止未经授权人员攀爬或利用',radioValue:'0'},{radioName:'h31',radioTitle: '航站楼内外所有通往航站楼楼顶的通行口和管道,以及航站楼的天窗均应设置物理防护设施，防止未经授权人员攀爬或利用',radioValue:'0'}]},
    {'title':'行李提取区',radioData:[{radioName:'y32',radioTitle: '应设置视频监控系统，对旅客提取行李流程实施监控',radioValue:'0'},{radioName:'y33',radioTitle: '应设置通行管制设施或采取通行管制措施，防止未经授权人员从公共活动区进入行李提取区、从行李提取区进入候机隔离区或其他机场控制区',radioValue:'0'}]},
    {'title':'隐蔽报警系统',radioData:[{radioName:'h34',radioTitle: '航站楼内每个乘机手续人工办理柜台、安全检查通道、小件行李寄存处以及安全保卫部门认为必要的其他部位应设置隐蔽报警设施。隐蔽报警设施应位于视频监控覆盖范围内',radioValue:'0'},{radioName:'y35',radioTitle: '应能通过声光报警信号在公安值勤室显示出事地相关信息，一类、二类机场应能同时显示相关报警点的视频图像，报警现场图像的时间延迟不得大于2s',radioValue:'0'}]},
];
var foureList = [
    {'title':'空防安全管理体系建设',radioData:[{radioName:'s36',radioTitle: '是否建立空防安全规章制度',radioValue:'0'},{radioName:'k37',radioTitle: '空防安全管理工作组织架构是否完备',radioValue:'0'},{radioName:'s38',radioTitle: '是否建立定期空防安全例会制度',radioValue:'0'},{radioName:'y39',radioTitle: '员工是否存在违法犯罪情况',radioValue:'0'},{radioName:'s40',radioTitle: '是否建立空防安全内部自查制度及相应的奖惩制度',radioValue:'0'}]},
    {'title':'空防办工作开展情况及参与度',radioData:[{radioName:'s41',radioTitle: '是否积极配合空防办各项工作',radioValue:'0'},{radioName:'s42',radioTitle: '是否定期参加空防办组织的会议',radioValue:'0'},{radioName:'s43',radioTitle: '是否积极完成空防办通知的各项工作任务，并按时完成',radioValue:'0'},{radioName:'s44',radioTitle: '是否主动上报和宣传本单位空防安全管理先进经验和突出个人',radioValue:'0'},{radioName:'s45',radioTitle: '是否及时进行基础信息采集与更新',radioValue:'0'}]},
    {'title':'控制区通行证管理',radioData:[{radioName:'z46',radioTitle: '证件办理审核流程是否规范',radioValue:'0'},{radioName:'z47',radioTitle: '证件集中管理情况',radioValue:'0'},{radioName:'z48',radioTitle: '证件管理区域是否有录像监控系统',radioValue:'0'},{radioName:'s49',radioTitle: '是否专人专柜保管',radioValue:'0'},{radioName:'z50',radioTitle: '证件收发台账是否记录完整',radioValue:'0'},{radioName:'z51',radioTitle: '证件违规情况及控制措施',radioValue:'0'},{radioName:'f52',radioTitle: '分违规5分以上人员的培训情况',radioValue:'0'},{radioName:'y53',radioTitle: '一次性证件审批流程是否规范、一次性证件存根保存是否完整',radioValue:'0'}]},
    {'title':'备案刀、工具管理',radioData:[{radioName:'j54',radioTitle: '建立刀工具管理制度',radioValue:'0'},{radioName:'x55',radioTitle: '现场固定链锁使用',radioValue:'0'},{radioName:'b56',radioTitle: '保管场所是否独立锁闭',radioValue:'0'},{radioName:'s57',radioTitle: '是否建立专门台账、指定专门人员负责',radioValue:'0'},{radioName:'y58',radioTitle: '严格落实申报备案管理措施',radioValue:'0'},{radioName:'s59',radioTitle: '是否配合公安及属地部门的监督检查',radioValue:'0'},{radioName:'b60',radioTitle: '变更、丢失时及时报告，并有应对预案',radioValue:'0'},{radioName:'p61',radioTitle: '破损、不使用的刀、工具是否及时注销',radioValue:'0'}]},

];
var fiveList = [
    {'title':'空防安全教育和培训',radioData:[{radioName:'s62',radioTitle: '是否建立培训教育制度和培训计划',radioValue:'0'},{radioName:'j63',radioTitle: '教育培训是否进行、台账记录是否齐备（视频、照片、台账）',radioValue:'0'},{radioName:'s64',radioTitle: '是否组织演练',radioValue:'0'}]},
    {'title':'合约商管理',radioData:[{radioName:'s65',radioTitle: '是否建立合约商管理制度',radioValue:'0'},{radioName:'s66',radioTitle: '是否对合约商签订安全协议',radioValue:'0'},{radioName:'s67',radioTitle: '是否建立针对合约商的检查制度',radioValue:'0'},{radioName:'s68',radioTitle: '是否填写相关检查台账',radioValue:'0'}]},

];
$(function(){
    var currentUrl = window.location.href;
    var radioList = [];
    var str = '';
    if(currentUrl.indexOf('hzlexamine')>=0){
        radioList = firstList;
    }else if(currentUrl.indexOf('hzl1examine')>=0){
        radioList = twoList;
    }else if(currentUrl.indexOf('hzl2examine')>=0){
        radioList = threeList;
    }else if(currentUrl.indexOf('hzl3examine')>=0){
        radioList = foureList;
    }else if(currentUrl.indexOf('hzl4examine')>=0){
        radioList = fiveList;
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