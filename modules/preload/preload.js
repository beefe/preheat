
/* 图片预加载
 * @require 
 * @param   arr                             要加载的图片的地址数组
 * @param   [cfg.callback(fn)]              加载成功后的回调
 */

function preload(arr, callback){
    var toloadArr = [],
        loaded = 0,
        arr = (arr.constructor === Array) ? arr : [arr];

    function loadone(){
        loaded++
        if(loaded === arr.length){
            callback && callback(toloadArr);
        }
    };

    for (var i=0, len=arr.length; i<len; i++){
        toloadArr[i] = new Image();
        toloadArr[i].onload = toloadArr[i].onerror = function(){
            loadone();
        };
        toloadArr[i].src = arr[i];
    }
};

module.exports = preload;