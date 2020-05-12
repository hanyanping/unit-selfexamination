var firstList = [
    {'title':'',radioData:[{radioName:'y1',radioTitle: '1.员工状态：员工是否存在宣扬/传播恐怖主义行为',radioValue:'0'},{radioName:'z2',radioTitle: '2.责任人报备：重点部位责任人报备及责任人更换报备',radioValue:'0'},{radioName:'z3',radioTitle: '3.重点岗位人员背景审查：对重要岗位人员进行安全背景审查，不适合情形人员进行工作岗位调整',radioValue:'0'},{radioName:'j4',radioTitle: '4.监控覆盖：重点部位监控是否达到全天候无死角',radioValue:'0'},{radioName:'s5',radioTitle: '5.视频监控管理制度：公共安全视频图像信息系统值班监看、信息保存使用、运行维护等管理制度是否健全',radioValue:'0'},{radioName:'c6',radioTitle: '6.出入登记：人员车辆进出登记',radioValue:'0'},{radioName:'w8',radioTitle: '7.危险品添加安检示踪标识：对枪支等武器、弹药、管制器具、危险化学品、民用爆炸物品、核与放射物品作出电子追踪标识，对民用爆炸物品添加安检示踪标识物',radioValue:'0'},{radioName:'h2',radioTitle: '8.危险品定位监控：对运营中的危险化学品、民用爆炸物品、核与放射物品的运输工具通过定位系统实行监控的',radioValue:'0'},{radioName:'b9',radioTitle: '9.病原体管控：对传染病病原体等物质实行严格的监督管理',radioValue:'0'},{radioName:'f10',radioTitle: '10.反恐预案/措施：制定处置恐怖活动的预案、措施',radioValue:'0'},{radioName:'f11',radioTitle: '11.反恐装备/设施：配备防范和处置设备、设施',radioValue:'0'},{radioName:'f12',radioTitle: '12.反恐经费保障：反恐怖主义工作专项经费保障制度',radioValue:'0'},{radioName:'f13',radioTitle: '13.反恐演练：反恐演练至少每年一次',radioValue:'0'},{radioName:'w14',radioTitle: '14.物流客户身份查验：物流运营单位对客户身份进行查验',radioValue:'0'},{radioName:'w15',radioTitle: '15.物流运营物品开封验视：物流运营单位对运输寄递物品安全检查或者开封验视',radioValue:'0'},{radioName:'a16',radioTitle: '16.安全通道检查：安全通道是否标识明确无障碍物',radioValue:'0'},{radioName:'x17',radioTitle: '17.新闻媒体单位涉恐报道合法性自查：编造、传播虚假恐怖事件信息，报道、传播可能引起模仿的恐怖活动的实施细节，发布恐怖事件中残忍、不人道的场景，或者未经批准，报道、传播现场应对处置的工作人员、人质身份信息和应对处置行动情况',radioValue:'0'},{radioName:'f18',radioTitle: '18.反恐怖主义宣传教育：新闻、广播、电视、文化、宗教、互联网等有关单位，应当有针对性地面向社会进行反恐怖主义宣传教育',radioValue:'0'},{radioName:'f19',radioTitle: '19.服务业客户身份查验：电信、互联网、金融、住宿、长途客运、机动车租赁等业务经营者、服务提供者，应当对客户身份进行查验。对身分不明或者拒绝身份查验的，不得提供服务。',radioValue:'0'},{radioName:'g20',radioTitle: '20.公共交通工具保卫工作自查：对航空器、公共电汽车等公共交通工具，运营单位应当依照规定配备安保人员和相应设备、设施，加强安全检查和保卫工作。',radioValue:'0'}]},
];
 


$(function(){
    var currentUrl = window.location.href;
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
    $(".content").append($(str))
    
})
