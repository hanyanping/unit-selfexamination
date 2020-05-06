var firstList = [
    {'title':'人防措施执行落实情况',classname:'j10',radioData:[{radioName:'b1',radioTitle: '1.1保安巡逻防控是否备有检查台账',radioValue:'0'},{radioName:'s2',radioTitle: '1.2是否严格落实进出管理制度并认真记录台账',radioValue:'0'},{radioName:'s3',radioTitle: '1.3是否对保安夜间巡逻进行检查并设有台账',radioValue:'0'},{radioName:'s4',radioTitle: '1.4是否开展安全教育培训并有台账',radioValue:'0'},{radioName:'s5',radioTitle: '1.5是否进行应急预案演练并有台帐',radioValue:'0'},{radioName:'c6',radioTitle: '1.6抽查一名保安或者员工是否了解单位应急预案',radioValue:'0'},{radioName:'b7',radioTitle: '1.7保安员是否有保安上岗证',radioValue:'0'},{radioName:'j8',radioTitle: '1.8监控室工作人员是否有上岗证',radioValue:'0'},{radioName:'s9',radioTitle: '1.9是否对单位内部外国人建档管理',radioValue:'0'},]},
    {'title':'物防措施执行落实情况',classname:'j18',radioData:[{radioName:'d11',radioTitle: '2.1单位外部围界是否完好',radioValue:'0'},{radioName:'d12',radioTitle: '2.2单位外部围是否达到规定高度',radioValue:'0'},{radioName:'z13',radioTitle: '2.3重点要害部位是否进行物理隔离',radioValue:'0'},{radioName:'s14',radioTitle: '2.4涉及财物等存放的地方是否进行物理锁闭',radioValue:'0'},{radioName:'c15',radioTitle: '2.5财务室保险箱是否固定在地面',radioValue:'0'},{radioName:'s16',radioTitle: '2.6视频监控室是否进行物理锁闭',radioValue:'0'},{radioName:'d17',radioTitle: '2.7单位是否对出租房屋、临建房屋、地下空间管理',radioValue:'0'}]},
    {'title':'技防措施执行落实情况',classname:'j29',radioData:[{radioName:'s19',radioTitle: '3.1是否设有视频监控系统',radioValue:'0'},{radioName:'s20',radioTitle: '3.2视频监控室是否有人24小时值班',radioValue:'0'},{radioName:'s21',radioTitle: '3.3视频监控保存时间是否达到30天',radioValue:'0'},{radioName:'j22',radioTitle: '3.4监控镜头是否全部清晰可用',radioValue:'0'},{radioName:'s23',radioTitle: '3.5视频监控范围是否覆盖全部重点防范部位',radioValue:'0'},{radioName:'w24',radioTitle: '3.6围界报警系统是否可用',radioValue:'0'},{radioName:'j25',radioTitle: '3.7监控室是否配备备用电源',radioValue:'0'},{radioName:'s26',radioTitle: '3.8视频监控录像误差是否小于1分钟',radioValue:'0'},{radioName:'s27',radioTitle: '3.9是否安装快速报警系统',radioValue:'0'},{radioName:'k28',radioTitle: '3.10快速报警系统是否与公安机关联网',radioValue:'0'}]}
];

$(function(){
    var radioList = [];
    var str = '';
    radioList = firstList;
    $.each(radioList,function(index,item){
        // console.log(str)
        var radioStr = '';
        var radioData = item.radioData;
        $.each(radioData,function(ind,ite){
            radioStr+=' <div class="radioContent">'+
            '<p class="radioTitle font14">'+ite.radioTitle+'</p>'+
            '<div class="flex showright">'+
                '<div class="radiobox font14">'+
                    '<input type="radio" name="'+ite.radioName+'" value="0"/><label></label><span class="font14">否</span>'+
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
        '</div>'+
        '<div class="radioContent">'+
        '<div class="font14">检查情况记录：</div>'+
        '<textarea class="textareaBox font14 '+item.classname+'" placeholder="多行输入"></textarea>'+
    '</div>' ;
    })
    $(".content").append($(str))
    
})
