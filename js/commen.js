var ajaxUrl = 'http://holer65239.wdom.net/general-auth-service/taxiforh5/';
var timeDelay = '30000';
function tanwin(text) {
    $("#tanwin").text(text).attr('style', '');
    var clea = setInterval(function () {
        $('.tan').fadeOut("slow", function () {
            $("#tanwin").attr('style', 'display:none');
            clearInterval(clea);
        });
    }, 2000);
}

function getUrlParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

function encrypt(word) {
    var key = CryptoJS.enc.Utf8.parse("99JzcsTwRa3tgfNC");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}
//签名
var degree = 90,
    draw = null,
    signImage = null;
    var sign = 1;
var canvasBox = document.getElementById('canvasBox');
function getHorizontalStyle() {
    var wrapper = document.getElementById("canvasBox");
    var style = "";
    const d = document;
    const w = window.innerWidth || d.documentElement.clientWidth || d.body.clientWidth;
    const h = window.innerHeight || d.documentElement.clientHeight || d.body.clientHeight;
    let length = (h - w) / 2;
    let width = w;
    let height = h;

    switch (degree) {
        case -90:
            length = -length;
        case 90:
            width = h;
            height = w;
            break;
        default:
            length = 0;
    }
    if (canvasBox) {
        canvasBox.removeChild(document.querySelector('canvas'));
        canvasBox.appendChild(document.createElement('canvas'));
        setTimeout(() => {
            initCanvas();
        }, 200);
    }
    style += "transform: rotate("+degree+"deg) translate("+length+"px,"+length+"px);";
    style += "width: "+width+"px;";
    style += "height: "+height+"px;";
    style += "transformOrigin: center cente;";
    wrapper.style.cssText = style;
}
function showsign(){
    sign = 1;
    getHorizontalStyle();
    $('.container').removeClass('none');
    $("#examine").addClass('none')
}
function showsign1(){
    sign = 2;
    getHorizontalStyle();
    $('.container').removeClass('none');
    $("#examine").addClass('none')
}
function showsign2(){
    sign = 3;
    getHorizontalStyle();
    $('.container').removeClass('none');
    $("#examine").addClass('none')
}
function cleardraw() {
    draw.clear();
}
function initCanvas() {
    const canvas = document.querySelector('canvas');
    draw = new Draw(canvas, -degree);
}