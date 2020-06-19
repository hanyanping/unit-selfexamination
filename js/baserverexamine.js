var firstList = [
    {'title':'',radioData:[{radioName:'s1',radioTitle: '1.是否建立健全保安服务管理制度、岗位责任制度、保安员管理制度和紧急情况应急预案',radioValue:'0'},{radioName:'s2',radioTitle: '2.是否定期对保安员进行法律、保安专业知识和技能培训，提高保安员的职业道德水平、业务素质和责任意识',radioValue:'0'},{radioName:'s3',radioTitle: '3.是否向公安机关备案保安服务许可证、工商营业执照、法定代表人、公司负责人和保安员的基本情况',radioValue:'0'},{radioName:'s4',radioTitle: '4.是否在本单位以外或者物业管理区域以外提供保安服务',radioValue:'0'},{radioName:'b5',radioTitle: '5.保安员是否年满18周岁，身体健康，品行良好，具有初中以上学历的中国公民',radioValue:'0'},{radioName:'b6',radioTitle: '6.保安服务中形成的监控影像资料、报警记录，是否至少留存30日备查',radioValue:'0'},{radioName:'b7',radioTitle: '7.保安员是否持有保安员证上岗，是否着保安员服装，佩带全国统一的保安服务标志',radioValue:'0'},{radioName:'b8',radioTitle: '8.保安员是否有下列行为之一：',radioValue:'0'}]},
];
var twoList = [
    {'title':'',radioData:[{radioName:'k1',radioTitle: '1.快递企业是否按照规定建立快递安全保障和协查通报制度。',radioValue:'0'},{radioName:'k2',radioTitle: '2.快递企业和用户是否寄递易燃、易爆、易腐蚀、放射性等危险物品以及其他禁止寄递的物品',radioValue:'0'},{radioName:'k3',radioTitle: '3.快递企业是否按照规定对快件进行验视、机检、巡检、抽检等形式的安全检查。',radioValue:'0'},{radioName:'k4',radioTitle: '4.快递企业在收寄快件时，对信件以外的快件，是否当场开拆包装验视内件。',radioValue:'0'},{radioName:'c5',radioTitle: '5.从事跨省、自治区、直辖市经营快递业务的快递企业，是否在快件处理场所配备安全检查设备，安排具备专门知识和技能的人员，对从外埠进入本市的快件按照规定进行安全检查。',radioValue:'0'},{radioName:'k6',radioTitle: '6.快递营业场所、快件处理场所是否按照国家快递服务标准的规定设置，安装符合国家标准的视频监控系统，覆盖交寄、分拣、储存等环节，监控设备是否正常运转，监控资料保存时间是否不得少于３０日。',radioValue:'0'},{radioName:'k7',radioTitle: '7.快递从业人员是否按照国家和北京市规定具备快递业务员职业技能。',radioValue:'0'},{radioName:'k8',radioTitle: '8.快递企业是否加强对快递从业人员的职业技能培训、职业素质教育和从业考核，建立快递从业人员档案制度，完善快递从业人员信息登记。 ',radioValue:'0'},{radioName:'k9',radioTitle: '9.快递企业是否制定快递安全操作标准和流程，是否定期组织开展安全生产教育和专业培训，提高快递从业人员对危险性物品的识别能力和处理能力。 ',radioValue:'0'},{radioName:'k10',radioTitle: '10.快递企业是否建立突发事件应急机制，制定突发事件应急预案和专项预案，',radioValue:'0'},{radioName:'k11',radioTitle: '11.快递企业是否按照操作标准分拣快件，是否在露天场地分拣快件。',radioValue:'0'},{radioName:'y12',radioTitle: '12.运输快件的车辆是否符合本市道路交通运输和货物运输的技术规范和要求，并采用统一的快递运输专用标识。',radioValue:'0'},{radioName:'s13',radioTitle: '13.收寄和投递快件的车辆是否封闭，标明快递企业标识，并符合本市道路通行要求。 ',radioValue:'0'},{radioName:'k14',radioTitle: '14.快递企业是否建立快递运单实物及电子数据档案管理制度，采取技术措施确保用户信息安全，不得泄露用户信息。',radioValue:'0'}]},
    
]
var threeList = [
    {'title':'',radioData:[{radioName:'s1',radioTitle: '1.是否配备治安保卫人员，按照国家规定设置技术防范设施，防止民用爆炸物品丢失、被盗、被抢  ',radioValue:'0'},{radioName:'j2',radioTitle: '2.建立安全管理制度、岗位安全责任制度，制订安全防范措施和事故应急预案，设置安全管理机构或者配备专职安全管理人员。',radioValue:'0'},{radioName:'c3',radioTitle: '3.储存危险物品是否建立出入库检查、登记制度，收存和发放危险物品是否进行登记，做到账目清楚，账物相符；  ',radioValue:'0'},{radioName:'c4',radioTitle: '4.储存的危险物品数量是否超过储存设计容量，对性质相抵触的危险物品是否分库储存，严禁在库房内存放其他物品；',radioValue:'0'},{radioName:'c5',radioTitle: '5.储存场所是否指定专人管理、看护，是否严禁无关人员进入储存场所内，是否严禁在储存场所内吸烟和用火，是否严禁把其他容易引起燃烧、爆炸的物品带入储存场所内，是否严禁在储存场所内住宿和进行其他活动；',radioValue:'0'},{radioName:'w6',radioTitle: '6.危险物品丢失、被盗、被抢，是否立即报告当地公安机关。',radioValue:'0'}]},
    
]
$(function(){
    var radioList = [];
    var str = '';
    radioList = firstList;

    var str = '';
    var currentUrl = window.location.href;
    var radioList = [];
    var str = '';
    var type = '';
    if(currentUrl.indexOf('baserverexamine')>=0){
        radioList = firstList;
         type = 1;
    }else if(currentUrl.indexOf('securitykdexamin')>=0){
        radioList = twoList;
        type = 2;
    }else if(currentUrl.indexOf('securitywxexamin')>=0){
        radioList = threeList;
        type = 3;
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
        str+='<div class="radioList">'
            +radioStr+
            '</div>' ;
    })
    $(".contentBox").append($(str))

})
