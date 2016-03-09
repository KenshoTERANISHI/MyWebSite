google.load("feeds", "1");
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

function initialize() {
  var number = 12;
  var feedurl1 = "http://helloprosun.blog.jp/index.rdf";
  var feed1 = new google.feeds.Feed(feedurl1);
  feed1.setNumEntries(number);
  var feedurl2 = "http://matomeldo.doorblog.jp/index.rdf";
  var feed2 = new google.feeds.Feed(feedurl2);
  feed2.setNumEntries(number);
  var feedurl3 = "http://helloproject-sokuhou.doorblog.jp/index.rdf";
  var feed3 = new google.feeds.Feed(feedurl3);
  feed3.setNumEntries(number);
  var feedurl4 = "http://helloprocanvas.ldblog.jp/index.rdf";
  var feed4 = new google.feeds.Feed(feedurl4);
  feed4.setNumEntries(number);
  var feedurl5 = "http://haruka1027.blog.jp/index.rdf";
  var feed5 = new google.feeds.Feed(feedurl5);
  feed5.setNumEntries(number);
  var feedurl6 = "http://helloprot.ldblog.jp/index.rdf";
  var feed6 = new google.feeds.Feed(feedurl6);
  feed6.setNumEntries(number);
  var feedurl7 = "http://colorhello.blog.jp/index.rdf";
  var feed7 = new google.feeds.Feed(feedurl7);
  feed7.setNumEntries(number);
  var feedurl8 = "http://c-ute.doorblog.jp/index.rdf";
  var feed8 = new google.feeds.Feed(feedurl8);
  feed8.setNumEntries(number);
  var feedurl9 = "http://fanblogs.jp/hoeeee/index1_0.rdf";
  var feed9 = new google.feeds.Feed(feedurl9);
  feed9.setNumEntries(number);
  var feedurl10 = "http://feedblog.ameba.jp/rss/ameblo/morningmusume-10ki/rss20.xml";
  var feed10 = new google.feeds.Feed(feedurl10);
  feed10.setNumEntries(number);
  var feedurl11 = "http://matome.naver.jp/feed/topic/1LwVo";
  var feed11 = new google.feeds.Feed(feedurl11);
  feed11.setNumEntries(number);
  var feedurl12 = "http://blog.livedoor.jp/morning77/index.rdf";
  var feed12 = new google.feeds.Feed(feedurl12);
  feed12.setNumEntries(number);
//  feed11.setResultFormat(google.feeds.Feed.XML_FORMAT);

  feed1.load(function (result){
  if (!result.error){
    var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
    var container = document.getElementById("feed1");
    var htmlstr = "";
    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
      htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
      imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
        if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
        if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
      var pdate = new Date(entry.publishedDate);
      var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
      htmlstr += '<span  class="img">';
      htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
      htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
      var entryTime = new Date(entry.publishedDate).getTime();
      htmlstr+='<div class="layerBox">';
      if(now >= entryTime && now <= (entryTime + pastTime)){
        htmlstr += '<strong class="strong">new!</strong>';
      }
      htmlstr += '<p>' + strdate + '</p>';
  htmlstr += '<span>' + entry.title + '</span></a>';
      htmlstr += '<h4></h4>';
      htmlstr += '<p></p>';
      htmlstr += '</div>';
      htmlstr += '</div></div>';
    }
     container.insertAdjacentHTML("beforeend", htmlstr);
  }else{
     alert(result.error.code + ":" + result.error.message);
  }
  });

  feed2.load(function (result){
  if (!result.error){
    var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
    var container = document.getElementById("feed2");
    var htmlstr = "";
    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
      htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
      imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
        if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
      var pdate = new Date(entry.publishedDate);
      var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
      htmlstr += '<span class="img">';
      htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
      htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
      var entryTime = new Date(entry.publishedDate).getTime();
      htmlstr+='<div class="layerBox">';
      if(now >= entryTime && now <= (entryTime + pastTime)){
        htmlstr += '<strong class="strong">new!</strong>';
      }
      htmlstr += '<p>' + strdate + '</p>';
      htmlstr += '<span>' + entry.title + '</span></a>';
      htmlstr += '<h4></h4>';
      htmlstr += '<p></p>';
      htmlstr += '</div>';
      htmlstr += '</div></div>';
    }
    container.insertAdjacentHTML("beforeend", htmlstr);
  }else{
     alert(result.error.code + ":" + result.error.message);
  }
  });

    feed3.load(function (result){
    if (!result.error){
      var pastDay = 0.25;//何日数前までnewマークをつけるか指定
  var now = (new Date()).getTime();//現在の時間
  var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
      var container = document.getElementById("feed3");
      var htmlstr = "";
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
        htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
        imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
          if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
        var pdate = new Date(entry.publishedDate);
        var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
        htmlstr += '<span class="img">';
        htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
        htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
        var entryTime = new Date(entry.publishedDate).getTime();
        htmlstr+='<div class="layerBox">';
        if(now >= entryTime && now <= (entryTime + pastTime)){
          htmlstr += '<strong class="strong">new!</strong>';
        }
        htmlstr += '<p>' + strdate + '</p>';
    htmlstr += '<span>' + entry.title + '</span></a>';
        htmlstr += '<h4></h4>';
        htmlstr += '<p></p>';
        htmlstr += '</div>';
        htmlstr += '</div></div>';
      }
       container.insertAdjacentHTML("beforeend", htmlstr);
    }else{
       alert(result.error.code + ":" + result.error.message);
    }
  });

  feed4.load(function (result){
  if (!result.error){
    var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
    var container = document.getElementById("feed4");
    var htmlstr = "";
    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
      htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
      imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
        if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
      var pdate = new Date(entry.publishedDate);
      var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
      htmlstr += '<span class="img">';
      htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
      htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
      var entryTime = new Date(entry.publishedDate).getTime();
      htmlstr+='<div class="layerBox">';
      if(now >= entryTime && now <= (entryTime + pastTime)){
        htmlstr += '<strong class="strong">new!</strong>';
      }
      htmlstr += '<p>' + strdate + '</p>';
  htmlstr += '<span>' + entry.title + '</span></a>';
      htmlstr += '<h4></h4>';
      htmlstr += '<p></p>';
      htmlstr += '</div>';
      htmlstr += '</div></div>';
    }
    container.insertAdjacentHTML("beforeend", htmlstr);
  }else{
     alert(result.error.code + ":" + result.error.message);
  }
  });

  feed5.load(function (result){
  if (!result.error){
    var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
    var container = document.getElementById("feed5");
    var htmlstr = "";
    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
      htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
      imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
        if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
      var pdate = new Date(entry.publishedDate);
      var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
      htmlstr += '<span class="img">';
      htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
      htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
      var entryTime = new Date(entry.publishedDate).getTime();
      htmlstr+='<div class="layerBox">';
      if(now >= entryTime && now <= (entryTime + pastTime)){
        htmlstr += '<strong class="strong">new!</strong>';
      }
      htmlstr += '<p>' + strdate + '</p>';
      htmlstr += '<span>' + entry.title + '</span></a>';
      htmlstr += '<h4></h4>';
      htmlstr += '<p></p>';
      htmlstr += '</div>';
      htmlstr += '</div></div>';
    }
    container.insertAdjacentHTML("beforeend", htmlstr);
  }else{
     alert(result.error.code + ":" + result.error.message);
  }
});

feed6.load(function (result){
if (!result.error){
  var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
  var container = document.getElementById("feed6");
  var htmlstr = "";
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
    htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
    imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
      if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
    var pdate = new Date(entry.publishedDate);
    var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
    htmlstr += '<span class="img">';
    htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
    htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
    var entryTime = new Date(entry.publishedDate).getTime();
    htmlstr+='<div class="layerBox">';
    if(now >= entryTime && now <= (entryTime + pastTime)){
      htmlstr += '<strong class="strong">new!</strong>';
    }
    htmlstr += '<p>' + strdate + '</p>';
    htmlstr += '<span>' + entry.title + '</span></a>';
    htmlstr += '<h4></h4>';
    htmlstr += '<p></p>';
    htmlstr += '</div>';
    htmlstr += '</div></div>';
  }
   container.insertAdjacentHTML("beforeend", htmlstr);
}else{
   alert(result.error.code + ":" + result.error.message);
}
});

feed7.load(function (result){
if (!result.error){
  var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
  var container = document.getElementById("feed7");
  var htmlstr = "";
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
    htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
    imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
      if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
    var pdate = new Date(entry.publishedDate);
    var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
    htmlstr += '<span  class="img">';
    htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
    htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
    var entryTime = new Date(entry.publishedDate).getTime();
    htmlstr+='<div class="layerBox">';
    if(now >= entryTime && now <= (entryTime + pastTime)){
      htmlstr += '<strong class="strong">new!</strong>';
    }
    htmlstr += '<p>' + strdate + '</p>';
    htmlstr += '<span>' + entry.title + '</span></a>';
    htmlstr += '<h4></h4>';
    htmlstr += '<p></p>';
    htmlstr += '</div>';
    htmlstr += '</div></div>';
  }
  container.insertAdjacentHTML("beforeend", htmlstr);
}else{
   alert(result.error.code + ":" + result.error.message);
}
});

feed8.load(function (result){
if (!result.error){
  var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
  var container = document.getElementById("feed8");
  var htmlstr = "";
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
    htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
    imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
      if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
    var pdate = new Date(entry.publishedDate);
    var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
    htmlstr += '<span  class="img">';
    htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
    htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
    var entryTime = new Date(entry.publishedDate).getTime();
    htmlstr+='<div class="layerBox">';
    if(now >= entryTime && now <= (entryTime + pastTime)){
      htmlstr += '<strong class="strong">new!</strong>';
    }
    htmlstr += '<p>' + strdate + '</p>';
    htmlstr += '<span>' + entry.title + '</span></a>';
    htmlstr += '<h4></h4>';
    htmlstr += '<p></p>';
    htmlstr += '</div>';
    htmlstr += '</div></div>';
  }
   container.insertAdjacentHTML("beforeend", htmlstr);
}else{
   alert(result.error.code + ":" + result.error.message);
}
});

feed9.load(function (result){
if (!result.error){
  var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
  var container = document.getElementById("feed9");
  var htmlstr = "";
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
    htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
    imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
      if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
    var pdate = new Date(entry.publishedDate);
    var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
    htmlstr += '<span  class="img">';
    htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
    htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
    var entryTime = new Date(entry.publishedDate).getTime();
    htmlstr+='<div class="layerBox">';
    if(now >= entryTime && now <= (entryTime + pastTime)){
      htmlstr += '<strong class="strong">new!</strong>';
    }
    htmlstr += '<p>' + strdate + '</p>';
    htmlstr += '<span>' + entry.title + '</span></a>';
    htmlstr += '<h4></h4>';
    htmlstr += '<p></p>';
    htmlstr += '</div>';
    htmlstr += '</div></div>';
  }
   container.insertAdjacentHTML("beforeend", htmlstr);
}else{
   alert(result.error.code + ":" + result.error.message);
}
});

feed10.load(function (result){
if (!result.error){
  var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
  var container = document.getElementById("feed10");
  var htmlstr = "";
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
    htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
    imgsrc='src="../image/blog10.png"'
    var pdate = new Date(entry.publishedDate);
    var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
    htmlstr += '<span  class="img">';
    htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
    htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
    var entryTime = new Date(entry.publishedDate).getTime();
    htmlstr+='<div class="layerBox">';
    if(now >= entryTime && now <= (entryTime + pastTime)){
      htmlstr += '<strong class="strong">new!</strong>';
    }
    htmlstr += '<p>' + strdate + '</p>';
    htmlstr += '<span>' + entry.title + '</span></a>';
    htmlstr += '<h4></h4>';
    htmlstr += '<p></p>';
    htmlstr += '</div>';
    htmlstr += '</div></div>';
  }
  container.insertAdjacentHTML("beforeend", htmlstr);
}else{
   alert(result.error.code + ":" + result.error.message);
}
});

feed11.load(function (result){
if (!result.error){
  var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
  var container = document.getElementById("feed11");
  var htmlstr = "";
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
    htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
    imgsrc = "src=" + entry.mediaGroups[0].contents[0].url;
      if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
      if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}

    var pdate = new Date(entry.publishedDate);
    var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
    htmlstr += '<span  class="img">';
    htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
    htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
    var entryTime = new Date(entry.publishedDate).getTime();
    htmlstr+='<div class="layerBox">';
    if(now >= entryTime && now <= (entryTime + pastTime)){
      htmlstr += '<strong class="strong">new!</strong>';
    }
    htmlstr += '<p>' + strdate + '</p>';
htmlstr += '<span>' + entry.title + '</span></a>';
    htmlstr += '<h4></h4>';
    htmlstr += '<p></p>';
    htmlstr += '</div>';
    htmlstr += '</div></div>';
  }
   container.insertAdjacentHTML("beforeend", htmlstr);
}else{
   alert(result.error.code + ":" + result.error.message);
}
});

feed12.load(function (result){
if (!result.error){
  var pastDay = 0.25;//何日数前までnewマークをつけるか指定
var now = (new Date()).getTime();//現在の時間
var pastTime = pastDay * 24 * 60 * 60 * 1000;//newマークをつける期間の時間
  var container = document.getElementById("feed12");
  var htmlstr = "";
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    htmlstr += '<div class="card"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
    htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_blank">';
    imgsrc = entry.content.match(/src="((http:){1}[\S_-]+(\.gif))"/igm);
      if(!imgsrc){imgsrc=entry.content.match(/src="((http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG)))"/igm);}
      if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
    var pdate = new Date(entry.publishedDate);
    var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
    htmlstr += '<span  class="img">';
    htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
    htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
    var entryTime = new Date(entry.publishedDate).getTime();
    htmlstr+='<div class="layerBox">';
    if(now >= entryTime && now <= (entryTime + pastTime)){
      htmlstr += '<strong class="strong">new!</strong>';
    }
    htmlstr += '<p>' + strdate + '</p>';
htmlstr += '<span>' + entry.title + '</span></a>';
    htmlstr += '<h4></h4>';
    htmlstr += '<p></p>';
    htmlstr += '</div>';
    htmlstr += '</div></div>';
  }
   container.insertAdjacentHTML("beforeend", htmlstr);
}else{
   alert(result.error.code + ":" + result.error.message);
}
});

}

google.setOnLoadCallback(initialize);
