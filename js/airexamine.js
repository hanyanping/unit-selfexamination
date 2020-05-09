var firstList = [
    {'title':'基本要求',radioData:[{radioName:'y1',radioTitle: '应封闭管理，并根据机场安全保卫设置围界，技术要求同机场围界',radioValue:'0'},{radioName:'h2',radioTitle: '货运公共区与货物安检区、货物存放区之间应采用物理隔断隔离，物理隔断应为全高度。没有全高度的，物理隔断净高度应不低于2.5m，上部加装防攀爬和防抛掷设施，并设置视频监控系统，以及时发现人员、物品的非法入侵',radioValue:'0'}]},
    {'title':'货物存放区',radioData:[{radioName:'c3',radioTitle: '出港货物存放区与进港货物提取区应实施物理隔离',radioValue:'0'},{radioName:'h4',radioTitle: '货物存放区应实施分区管理，确保进港货物和出港货物、已检货物与未检货物、单体超大超重货物与普通货物、危险品与普通货物隔离存放',radioValue:'0'},{radioName:'y5',radioTitle: '应设有照明设施，以满足视频监控系统正常工作的环境照度要求',radioValue:'0'}]}
];
var twoList = [
    {'title':'货运安检区',radioData:[{radioName:'y6',radioTitle: '应设置货物安全检查设备和爆炸物探测设备，对货物和邮件实施安全检查',radioValue:'0'},{radioName:'m7',radioTitle: '每个货物安检区均应设置可疑物品处置装置，如防爆罐、防爆球和防爆毯等',radioValue:'0'},{radioName:'m8',radioTitle: '每个独立的货物安检区均应设置可疑物品检查区',radioValue:'0'},{radioName:'m9',radioTitle: '每个货物安全检查通道前端均应设有可锁闭装置。锁闭后，锁闭装置与周围物理隔断的间隙应不大于0.03m',radioValue:'0'},{radioName:'y10',radioTitle: '应设置工作人员安全检查通道，人身安全检查设施配备应符合本标准13.4的要求；根据需要配备X射线安全检查设备，防止未经安全检查的物品进入货物存放区。',radioValue:'0'},{radioName:'b11',radioTitle: '部分出港货物、邮件的安全检查，对发现的伪报品名、夹藏危险品事件及时报公安局处理。',radioValue:'0'}]}
]


var threeList = [
    {'title':'航空货物安全检查信息管理系统',radioData:[{radioName:'j12',radioTitle: '机场宜设置航空货物安全检查信息管理系统。该系统应能完整采集、处理、存储过检货物品名、安检、航班等信息，实现对航空货物安全检查信息、货物安全检查图像及安全检查现场视频、音频等信息的采集、存储、传输和检索等功能',radioValue:'0'},{radioName:'h13',radioTitle: '航空货物安全检查信息管理系统应符合以下要求：a)符合国家和行业相关标准的要求；b)预留接口足够带宽，以便向机场运行和安全保卫指挥部门报送数据',radioValue:'0'}]},
    {'title':'视频监控系统',radioData:[{radioName:'y14',radioTitle: '应设置视频监控系统，监控范围覆盖货运公共区和货物存放区的出入口、办理货运手续柜台，以及货物安检区和货物存放区',radioValue:'0'}]}
]
var foureList = [
    {'title':'空防安全管理体系建设',radioData:[{radioName:'s15',radioTitle: '是否建立空防安全规章制度',radioValue:'0'},{radioName:'k16',radioTitle: '空防安全管理工作组织架构是否完备',radioValue:'0'},{radioName:'s17',radioTitle: '是否建立定期空防安全例会制度',radioValue:'0'},{radioName:'y18',radioTitle: '员工是否存在违法犯罪情况',radioValue:'0'},{radioName:'s19',radioTitle: '是否建立空防安全内部自查制度及相应的奖惩制度',radioValue:'0'}]},
    {'title':'空防办工作开展情况及参与度',radioData:[{radioName:'s20',radioTitle: '是否积极配合空防办各项工作',radioValue:'0'},{radioName:'s21',radioTitle: '是否定期参加空防办组织的会议',radioValue:'0'},{radioName:'s22',radioTitle: '是否积极完成空防办通知的各项工作任务，并按时完成',radioValue:'0'},{radioName:'s23',radioTitle: '是否主动上报和宣传本单位空防安全管理先进经验和突出个人',radioValue:'0'},{radioName:'s24',radioTitle: '是否及时进行基础信息采集与更新',radioValue:'0'}]},
    {'title':'控制区通行证管理',radioData:[{radioName:'z25',radioTitle: '证件办理审核流程是否规范',radioValue:'0'},{radioName:'z26',radioTitle: '证件集中管理情况',radioValue:'0'},{radioName:'z27',radioTitle: '证件管理区域是否有录像监控系统',radioValue:'0'},{radioName:'s28',radioTitle: '是否专人专柜保管',radioValue:'0'},{radioName:'z29',radioTitle: '证件收发台账是否记录完整',radioValue:'0'},{radioName:'z30',radioTitle: '证件违规情况及控制措施',radioValue:'0'},{radioName:'f31',radioTitle: '分违规5分以上人员的培训情况',radioValue:'0'},{radioName:'y32',radioTitle: '一次性证件审批流程是否规范、一次性证件存根保存是否完整',radioValue:'0'}]}
]
var fiveList = [
    {'title':'备案刀、工具管理',radioData:[{radioName:'j33',radioTitle: '建立刀工具管理制度',radioValue:'0'},{radioName:'x34',radioTitle: '现场固定链锁使用',radioValue:'0'},{radioName:'b35',radioTitle: '保管场所是否独立锁闭',radioValue:'0'},{radioName:'s36',radioTitle: '是否建立专门台账、指定专门人员负责',radioValue:'0'},{radioName:'y37',radioTitle: '严格落实申报备案管理措施',radioValue:'0'},{radioName:'s38',radioTitle: '是否配合公安及属地部门的监督检查',radioValue:'0'},{radioName:'b39',radioTitle: '变更、丢失时及时报告，并有应对预案',radioValue:'0'},{radioName:'p40',radioTitle: '破损、不使用的刀、工具是否及时注销',radioValue:'0'}]},
    {'title':'空防安全教育和培训',radioData:[{radioName:'s41',radioTitle: '是否建立培训教育制度和培训计划',radioValue:'0'},{radioName:'j42',radioTitle: '教育培训是否进行、台账记录是否齐备（视频、照片、台账）',radioValue:'0'},{radioName:'s43',radioTitle: '是否组织演练',radioValue:'0'}]},
    {'title':'合约商管理',radioData:[{radioName:'s44',radioTitle: '是否建立合约商管理制度',radioValue:'0'},{radioName:'s45',radioTitle: '是否对合约商签订安全协议',radioValue:'0'},{radioName:'s46',radioTitle: '是否建立针对合约商的检查制度',radioValue:'0'},{radioName:'s47',radioTitle: '是否填写相关检查台账',radioValue:'0'}]}
]


$(function(){
    var currentUrl = window.location.href;
    var radioList = [];
    var str = '';
    if(currentUrl.indexOf('airexamine')>=0){
        radioList = firstList;
    }else if(currentUrl.indexOf('air1examine')>=0){
        radioList = twoList;
    }else if(currentUrl.indexOf('air2examine')>=0){
        radioList = threeList;
    }else if(currentUrl.indexOf('air3examine')>=0){
        radioList = foureList;
    }else if(currentUrl.indexOf('air4examine')>=0){
        radioList = fiveList;
    }
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
        str+='<div class="radioList">'+
        '<div class="title">'+
        '<span class="linebox"></span>'+
        '<span class="font14 titletext fontWeight">'+item.title+'</span>'+
        '</div>'+radioStr+
        '</div>' ;
    })
    $(".content").append($(str))
    
})
function getDetail(){
    localStorage.setItem('phone',phone)
    var decodephone = encrypt(phone)
    $(".zhegaiceng").css({'display': 'block'})
    var data = {
        phone: decodephone
    }
    data = JSON.stringify(data)
    $.ajax({
        url: ajaxUrl + 'officialcert/getUserRole',
        timeout: timeDelay,
        type: 'post',
        contentType: 'application/json;charset=utf-8',
        dataType: "json",
        data: data,
        success: function(response) {
            $(".zhegaiceng").css({'display': 'none'})
            if(response.rescode == 200){
            }else{
                toast(response.resdes)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $(".zhegaiceng").css({'display': 'none'})
        },
        complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
            $(".zhegaiceng").css({'display': 'none'})
        }
    });
}