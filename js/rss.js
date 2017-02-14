(function(){
    var ua = navigator.userAgent.toUpperCase();
    var url = document.location.pathname;
    var spDir = 'http://matomento.client.jp/mobile.html';
    (ua.indexOf('IPHONE') != -1 || (ua.indexOf('ANDROID') != -1 && ua.indexOf('MOBILE') != -1))?
        isSP() :
        isPC();
    function isSP(){
        if(url.match(spDir)){
            return false;
        }else{
            location.href = spDir;
        }
    }
    function isPC(){
        if(!url.match(spDir)){
            return false;
        }else{
            location.href = 'http://matomento.client.jp/';
        }
    }
}());

var number = 12;
var feedurl1 = "http://helloprosun.blog.jp/index.rdf";
var feedurl2 = "http://matomeldo.doorblog.jp/index.rdf";
var feedurl3 = "http://helloproject-sokuhou.doorblog.jp/index.rdf";
var feedurl5 = "http://haruka1027.blog.jp/index.rdf";
var feedurl6 = "http://helloprot.ldblog.jp/index.rdf";
var feedurl7 = "http://colorhello.blog.jp/index.rdf";
var feedurl8 = "http://c-ute.doorblog.jp/index.rdf";
var feedurl9 = "http://fanblogs.jp/hoeeee/index1_0.rdf";
var feedurl10 = "http://feedblog.ameba.jp/rss/ameblo/morningmusume-10ki/rss20.xml";
var feedurl11 = "http://matome.naver.jp/feed/topic/1LwVo";
var feedurl12 = "http://blog.livedoor.jp/morning77/index.rdf";
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl1+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed1');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl2+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed2');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl3+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed3');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl5+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed5');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl6+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed6');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl7+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed7');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl8+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed8');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl9+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed9');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
$(function(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
        q: "select * from rss(0,8) where url = '"+feedurl10+"'",
        format: "json"
    }, function(json) {
        var container = document.getElementById('feed10');

        for (var i = 0; i < json.query.results.item.length; i++) {
              if (!json.query.results.error){
                //var pastDay = 0.25;//何日数前までnewマークをつけるか指定
               //var now = (new Date()).getTime();//現在の時間
               //var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
              //var container = document.getElementById("feed1");
              var htmlstr = "";
              for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];
                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
                htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
                htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
                imgsrc = entry.encoded.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
                  if(!imgsrc){imgsrc=entry.encoded.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
                  if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
                //var pdate = new Date(entry.publishedDate);
                var strdate = yearNum + '年' + m + '月' + d + '日' + dd.getHours() + '時' + dd.getMinutes() + '分' + dd.getSeconds() + '秒';
                htmlstr += '<span  class="img">';
                htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
                htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
                var entryTime = new Date(entry.publishedDate).getTime();
                htmlstr+='<div class="layerBox">';
                //if(now >= entryTime && now <= (entryTime + pastTime)){
                //  htmlstr += '<strong class="strong">new!</strong>';
                //}
                htmlstr += '<p>' + strdate + '</p>';
            htmlstr += '<span>' + entry.title + '</span></a>';
                htmlstr += '<h4></h4>';
                htmlstr += '<p></p>';
                htmlstr += '</div>';
                htmlstr += '</div></div>';
              }
               container.insertAdjacentHTML("beforeend", htmlstr);
            }else{
               alert(json.query.results.error.code + ":" + json.query.results.error.message);
            }
        }
    });
});
