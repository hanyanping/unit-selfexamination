var firstList = [
    {'title':'通行证申办单位职责',radioData:[{radioName:'d5',radioTitle: '第十六条第一项 是否制定本单位通行证管理办法，明确本单位通行证管理的主责部门，并交公安局通行证管理部门审核备案。',radioValue:'0'},{radioName:'d6',radioTitle: '第十六条第二项 分管安全的领导是否为本单位通行证管理的第一责任人',radioValue:'0'},{radioName:'d7',radioTitle: '第十六条第三项 通行证管理主责部门是否具体负责本单位通行证的申办、检查、监督等日常管理工作，是否负责对申办材料的初审和申办人员的安全培训。',radioValue:'0'},{radioName:'d8',radioTitle: '第十六条第四项 通行证管理主责部门是否对本单位申办人员的区域与门禁申请、申办理由、申请表内容的完整性、真实性、规范性等进行复核，是否建立本单位通行证持有人完整的基础信息、背景资料档案，并实施专项管理。',radioValue:'0'},{radioName:'d9',radioTitle: '第十六条第七项  是否组织本单位空防安全培训，及时消除危及民用航空安全的隐患，并建立培训台账记录。',radioValue:'0'},{radioName:'d10',radioTitle: '第十六条第八项 是否对合约商的申办、使用情况履行安全监管责任。',radioValue:'0'},{radioName:'d11',radioTitle: ' 第五十五条第一项  是否按照规定开展空防安全及通行证管理相关工作；',radioValue:'0'},{radioName:'d12',radioTitle: ' 第五十五条第二项  是否组织空防安全及通行证管理培训、考核；',radioValue:'0'},{radioName:'d13',radioTitle: '第五十六条第六项  本单位申办人员背景调查档案是否保存完整； ',radioValue:'0'},{radioName:'d14',radioTitle: ' 第五十六条第十项  是否建立通行证管理信息库、通行证收发台账记录，且记录内容规范',radioValue:'0'},{radioName:'d15',radioTitle: '第五十六条第十二项  发现本单位持证人通行证遗失、被盗，在12小时内是否向通行证管理部门报告； ',radioValue:'0'},{radioName:'d16',radioTitle: ' 第五十六条第十三项  对岗位发生变动，区域应做相应调整的人员通行证，是否按规定时限申请变更区域',radioValue:'0'},{radioName:'d17',radioTitle: '第五十六条第十四项  申办单位对通行证办理备案信息变更是否及时，不得影响通行证办理正常工作； ',radioValue:'0'},{radioName:'d18',radioTitle: ' 第五十七条第一项  是否为非本单位人员或无关人员申办通行证；',radioValue:'0'},{radioName:'d19',radioTitle: ' 第五十七条第三项  加强通行证管理，是否存在因管理不善发生遗失、被盗；',radioValue:'0'},{radioName:'d20',radioTitle: ' 第五十七条第五项  是否实行统一保管制度并按规定收回离岗人员通行证；',radioValue:'0'},{radioName:'d21',radioTitle: ' 第五十七条第八项  是否妥善保管机场控制区二类通行证介绍信，不得将介绍信遗失或擅自处理作废介绍信，要统一交回通行证管理部门；',radioValue:'0'},{radioName:'d22',radioTitle: '第五十七条第九项  是否在空白的机场控制区二类通行证介绍信，提前加盖公章、签字； ',radioValue:'0'},{radioName:'d23',radioTitle: '第五十七条第十项  申办单位是否利用通行证在控制区内从事与申办事由无关的活动； ',radioValue:'0'},{radioName:'d24',radioTitle: '第五十七条第十一项  申办单位是否在本单位租用场地范围外，以营利为目的发放传单、卡片、宣传册等扰乱公共秩序；',radioValue:'0'},{radioName:'d25',radioTitle: ' 第五十七条第十二项  是否利用工作之便，为未取得控制区通行资格或未取得相关区域授权的人员提供通行便利；',radioValue:'0'},{radioName:'d26',radioTitle: ' 第五十六条第十七项  申请办理通行证的理由是否与实际工作相符。 ',radioValue:'0'},{radioName:'d27',radioTitle: ' 第十六条第九项  申请办理二类通行证，是否明确指定专人负责机场控制区二类通行证专用介绍信的使用和保管工作，对本单位作废的机场控制区二类通行证专用介绍信是否妥善保管，并在换领时随存根一并交回通行证管理部门。 ',radioValue:'0'}]},
    {'title':'合约商通行证管理职责',radioData:[{radioName:'d28',radioTitle: '第十七条  合约商是否及时将本单位通行证申办、使用情况向与其签约的驻场单位备案。 ',radioValue:'0'},{radioName:'d29',radioTitle: '第十七条  驻场单位是否实时掌握合约商通行证办理的情况，对合同期满或提前终止合同的，是否及时到通行证管理部门办理备案注销手续。 ',radioValue:'0'},{radioName:'d30',radioTitle: '第十八条  通行证是否实行统一保管制度，申办单位是否明确指定专人为通行证保管责任人，并到通行证管理部门进行备案。通行证保管责任人是否认真履行职责，妥善保管本单位人员通行证，在工作人员离开工作岗位时，是否及时收回通行证，并制作详细的通行证收发记录。 ',radioValue:'0'}]},
    {'title':'持证人动态管理',radioData:[{radioName:'d31',radioTitle: ' 第二十一条第一项  通行证持有人岗位变动的，是否在3个工作日内由专办员提出通行证授权区域变更申请或注销申请，并到通行证管理部门办理变更或注销。 ',radioValue:'0'},{radioName:'d32',radioTitle: ' 第二十一条第二项  通行证持有人岗位变更后无需进入控制区工作的，所在单位是否在5个工作日内将其通行证收回，并交通行证管理部门予以注销。 ',radioValue:'0'},{radioName:'d33',radioTitle: '第二十一条第三项  通行证持有人在正常工作期间，因休假、暂时调离等原因，离开工作岗位7个工作日以上的，各单位是否将其通行证收回，交由本单位通行证保管责任人妥善保管；离岗超过3个月的，是否在通行证收回5个工作日内将通行证交由通行证管理部门保管，并建立完整的收发、保管台账。  ',radioValue:'0'},{radioName:'d34',radioTitle: ' 第二十一条第四项  通行证持有人因合同期满、退休、停职、辞职或被辞退等原因离开工作岗位，其原所在单位是否将通行证收回，并于5个工作日内交回通行证管理部门予以注销；确认无法追回的，是否及时报告通行证管理部门审核后予以注销。 ',radioValue:'0'},{radioName:'d35',radioTitle: '第二十一条第六项  通行证持有人因有违法犯罪受到公安机关处理等原因不适合继续在控制区工作的，其所在单位是否将通行证收回，并交通行证管理部门予以注销。  ',radioValue:'0'}]}

];
    var twoList = [
    {'title':'一类通行证的使用 ',radioData:[{radioName:'d5',radioTitle: '第三十二条第一项  在机场控制区内，是否将通行证佩带在胸前显著位置。 ',radioValue:'0'},{radioName:'d6',radioTitle: ' 第三十二条第二项  是否主动接受验证人员的查验，进入隔离区时，是否接受安全检查；在2人以上同时通过时，是否逐一接受查验。',radioValue:'0'},{radioName:'d7',radioTitle: ' 第三十二条第三项  是否按通行证授权区域通行。 ',radioValue:'0'},{radioName:'d8',radioTitle: '第三十二条第七项 是否进入与本单位生产保障工作无关的航空器，航空器所属航空公司相关工作人员有权进行核准，现场决定是否准予进入航空器。',radioValue:'0'},{radioName:'d9',radioTitle: '第三十二条第四项  是否在通行证有效期限内使用通行证。 ',radioValue:'0'},{radioName:'d10',radioTitle: '第三十二条第五项  是否妥善保管通行证，不得转借、涂改、损毁通行证。 ',radioValue:'0'},{radioName:'d11',radioTitle: '第三十二条第六项  使用通行证，是否与申办事由相符。 ',radioValue:'0'},{radioName:'d12',radioTitle: '第三十二条第八项  进入控制区，是否夹带或藏匿违禁物品、限制携带物品。 ',radioValue:'0'},{radioName:'d13',radioTitle: '第三十二条第九项  是否故意损毁、破坏门禁系统；是否以任何方式妨碍门禁系统的正常使用。 ',radioValue:'0'},{radioName:'d14',radioTitle: '第三十二条第十一项  是否在区域间传递、抛掷物品。 ',radioValue:'0'},{radioName:'d15',radioTitle: '第三十二条第十三项  航班保障期间，使用登机廊桥作为通行路由的，由承运航空公司及地面代理公司负责安全管理。通行证持有人确因工作需要通行廊桥，是否征得承运航空公司或地面代理公司工作人员同意后通行。 ',radioValue:'0'},{radioName:'d16',radioTitle: '第三十二条第十四项  非航班保障期间，廊桥作为生产运营设备，由机场管理机构负责安全管理工作，通行证持有人是否将廊桥作为通行路由任意穿行。 ',radioValue:'0'},{radioName:'d17',radioTitle: '第三十三条第一项  是否逐一刷卡验证，通过后及时关闭门禁通道，防止他人未刷卡验证通行。 ',radioValue:'0'},{radioName:'d18',radioTitle: '第三十三条第二项  是否使用他人通行证或为他人刷开门禁通道。 ',radioValue:'0'},{radioName:'d19',radioTitle: '第三十三条第三项  是否带领未经授权的人员通行门禁通道。 ',radioValue:'0'},{radioName:'d20',radioTitle: '第三十三条第四项  承运航空公司值机人员或地面代理服务人员是否只为本航空公司或代理航空公司机组人员刷卡通行，通行后是否及时关闭门禁通道。 ',radioValue:'0'},{radioName:'d21',radioTitle: '第三十三条第五项  在使用门禁过程中，如发现在授权范围内无法正常使用或门禁系统处于非正常状态，是否及时向航站楼运行管理中心报告。 ',radioValue:'0'},]},
    {'title':'二类通行证的使用 ',radioData:[{radioName:'d22',radioTitle: '第三十四条第一项  通行证持有人出入机场控制区是否与本人有效身份证件同时使用。 ',radioValue:'0'},{radioName:'d23',radioTitle: '第三十四条第二项 通行证持有人出入机场控制区时，应由通行证上所注明的人员全程引导陪同',radioValue:'0'},{radioName:'d24',radioTitle: '第三十四条第三项 通过无人值守的门禁时，由陪同人负责刷卡验证、逐一通行并及时关闭通道门',radioValue:'0'}]},
    {'title':'陪同人职责和义务 ',radioData:[{radioName:'d25',radioTitle: ' 第二十条第二项  仅限陪同本单位申办二类通行证人员，是否全程引导、监督、陪同对象，是否保证陪同对象在可监管范围内活动，且不得从事与申办事由无关的其他活动。',radioValue:'0'},{radioName:'d26',radioTitle: '第六十条第五项  陪同对象从事与申办事由无关的活动，或有危害航空安全意图和行为时，是否及时阻止并向公安机关报告的；  ',radioValue:'0'},{radioName:'d27',radioTitle: ' 第六十条第六项  是否对机场控制区二类通行证专用介绍信内容进行核对，防止存在虚假内容；',radioValue:'0'},{radioName:'d28',radioTitle: '第六十条第七项  二类通行证陪同人是否履行职责，防止陪同对象逾期滞留控制区； ',radioValue:'0'},{radioName:'d29',radioTitle: ' 第六十条第八项  陪同人是否将本人通行证借与他人办理二类通行证的；',radioValue:'0'},{radioName:'d30',radioTitle: '第六十条第一项  申办时对陪同对象身份是否进行核对；',radioValue:'0'},{radioName:'d31',radioTitle: '第二十条第二项  是否向陪同对象讲解通行证使用的相关管理规定。 ',radioValue:'0'},{radioName:'d32',radioTitle: '第二十条第二项  是否对陪同对象在控制区内的活动及通行证使用情况进行监督，防止发生陪同对象携带违禁品、损毁破坏安防设施、超越授权区域范围活动等有可能危害空防安全的行为；如发现陪同对象有危害航空安全意图和行为时，是否立即制止并向公安机关报告。 ',radioValue:'0'},{radioName:'d33',radioTitle: '第二十条第二项  是否核对二类通行证申办人员身份及机场控制区二类通行证专用介绍信，是否引导陪同对象到通行证管理部门为其申请办理通行证。 ',radioValue:'0'},{radioName:'d34',radioTitle: '第六十条第十项  是否督促持公务通行证的人员及时将通行证交还发证部门的； ',radioValue:'0'},{radioName:'d35',radioTitle: ' 第六十条第十一项  三类通行证陪同人是否履行陪同、监督责任，是否导致陪同对象将通行证遗失、转借他人、或者未及时将通行证交回发证部门的；',radioValue:'0'},{radioName:'d36',radioTitle: ' 第六十条第十二项  是否存在本人不到场由他人代替为陪同对象申办二类通行证的；',radioValue:'0'},{radioName:'d37',radioTitle: '第六十条第二项  是否存在未履行空防安全培训和监督责任，致使通行证持有人发生影响空防安全一般性事件的。 ',radioValue:'0'},{radioName:'d38',radioTitle: '第二十条第二项  是否监督三类通行证持有人不得将证件转借他人使用，并及时交回发证部门。',radioValue:'0'}]},
    {'title':'专办员职责和义务',radioData:[{radioName:'d39',radioTitle: '第十九条第二项  负责本单位通行证的使用和管理工作，是否建立本单位、本部门通行证申办、发放、回收、注销及相关培训的各类管理台账。  ',radioValue:'0'},{radioName:'d40',radioTitle: '第十九条第二项  是否收集空防安全方面的情报信息 ',radioValue:'0'},{radioName:'d41',radioTitle: '第五十九条第二项  是否存在伪造、变造、涂改申办材料《二类证申办介绍信》；',radioValue:'0'},{radioName:'d42',radioTitle: '第五十九条第三项  是否造成通行证丢失、被盗；  ',radioValue:'0'},{radioName:'d43',radioTitle: '第十九条第二项  是否配合通行证管理部门对本单位及人员违法、违规行为的调查处理工作。 ',radioValue:'0'}]},
    {'title':'持证人持证管理',radioData:[{radioName:'d44',radioTitle: '第四十八条第一项  是否按规定佩带通行证；  ',radioValue:'0'},{radioName:'d45',radioTitle: ' 第四十八条第二项  是否主动刷卡验证；',radioValue:'0'},{radioName:'d46',radioTitle: '第四十八条第三项  通行证破损、毁坏等，是否及时更换。  ',radioValue:'0'},{radioName:'d47',radioTitle: ' 第四十九条第一项  是否进入未经授权区域、通道； ',radioValue:'0'},{radioName:'d48',radioTitle: '第四十九条第二项  是否从事与申办事由无关活动； ',radioValue:'0'},{radioName:'d49',radioTitle: '第四十九条第三项  发现通行证丢失、被盗，是否在12小时内向本单位或通行证管理部门报告的。 ',radioValue:'0'},{radioName:'d50',radioTitle: '第五十条第一项  是否存在不刷卡验证、拒绝查验人员查验情况；   ',radioValue:'0'},{radioName:'d51',radioTitle: '第五十条第二项  是否存在使用本人过期通行证的情况； ',radioValue:'0'},{radioName:'d52',radioTitle: '第五十条第三项  是否存在因保管不善，导致本人通行证遗失、被盗用或者冒用的； ',radioValue:'0'},{radioName:'d53',radioTitle: '第五十条第四项  航班保障期间，是否经承运人或者地面代理人员同意后，刷卡验证进入廊桥及航空器； ',radioValue:'0'},{radioName:'d54',radioTitle: '第五十条第五项  非航班保障期间，是否擅自将廊桥作为通行路由； ',radioValue:'0'},{radioName:'d55',radioTitle: '第五十四条  通行证持有人在控制区违反通行证管理规定，是否在规定时限内到公安局接受处理的。 ',radioValue:'0'}]}

];
var threeList = [
    {'title':'证件查验单位职责 ',radioData:[{radioName:'d5',radioTitle: ' 第六十三条第一项  是否未按规定程序擅自暂扣通行证；   ',radioValue:'0'},{radioName:'d6',radioTitle: ' 第六十三条第二项  是否违规向持证人发还暂扣的通行证；',radioValue:'0'},{radioName:'d7',radioTitle: ' 第六十三条第三项  是否对通行证管理部门传达的通行证挂失通报及时部署。',radioValue:'0'},{radioName:'d8',radioTitle: '第六十三条第四项  是否让使用伪造、变造、过期、无相应授权区域、挂失、注销的通行证及无人陪同、冒用他人通行证的人员进入控制区；  ',radioValue:'0'},{radioName:'d9',radioTitle: ' 第六十三条第五项  对读卡器或生物识别系统不识别的通行证持有人，是否存在经核查擅自放行的。 ',radioValue:'0'},{radioName:'d10',radioTitle: '第六十二条 机场管理机构是否制定措施和程序，并配备符合标准的人员和设备，对进入机场控制区的人员、车辆进行安全检查，防止未经许可的人员、车辆进入。',radioValue:'0'},{radioName:'d11',radioTitle: '第十三条 人员与车辆进入机场控制区，是否佩带机场控制区通行证并接受警卫人员的检查。',radioValue:'0'},{radioName:'d12',radioTitle: '第六十四条  是否存在故意放行无证人员、不符合规定的持证人员进入控制区。 ',radioValue:'0'},{radioName:'d13',radioTitle: '第六十六条 除公安局和通行查验部门外，是否存在其他单位及个人违规暂扣持有人通行证。 ',radioValue:'0'}]}
];

$(function(){
    var currentUrl = window.location.href;
    var radioList = [];
    var str = '';
    if(currentUrl.indexOf('passmanagexamine')>=0){
        radioList = firstList;
    }else if(currentUrl.indexOf('passusexamine')>=0){
        radioList = twoList;
    }else if(currentUrl.indexOf('passunitmanagexamine')>=0){
        radioList = threeList;
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
        '<span class="lineBox"></span>'+
        '<span class="font14 titletext fontWeight">'+item.title+'</span>'+
        '</div>'+radioStr+
        '</div>' ;
    })
    $(".contentBox").append($(str))
    
})