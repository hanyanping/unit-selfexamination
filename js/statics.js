var auditNum = 1;
$(function(){

/**
 * 
 * @deprecated tabs切换
 */
    $('.tabBox .tabItem').on('click', function () {
        auditNum = $(this).attr('data-id');
        $(this).addClass('selectTabBox').siblings().removeClass('selectTabBox');
        // getDataList();
    });
})
function getDataList(){
    
}
