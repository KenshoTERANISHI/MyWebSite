var entryArray = new Array();
var entryNum = 0;

var feedurl1 = "http://helloprosun.blog.jp/index.rdf";
var feedurl2 = "http://blog.livedoor.jp/morning77/index.rdf"
var feedurl3 = "http://helloproject-sokuhou.doorblog.jp/index.rdf";
var feedurl4 = "http://fanblogs.jp/hoeeee/index1_0.rdf";
var feedurl5 = "http://haruka1027.blog.jp/index.rdf";
var feedurl6 = "http://helloprot.ldblog.jp/index.rdf";
var feedurl7 = "http://colorhello.blog.jp/index.rdf";
var feedurl8 = "http://c-ute.doorblog.jp/index.rdf";

$(function(){
  $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
      q: "select * from rss(0,8) where url = '"+feedurl1+"' OR url = '"+feedurl2+"' OR url = '"+feedurl3+"' OR url = '"+feedurl4+"' OR url = '"+feedurl5+"' OR url = '"+feedurl6+"' OR url = '"+feedurl7+"' OR url = '"+feedurl8+"'",
      format: "json"
  }, function(json) {
      for (var i = 0; i < json.query.results.item.length; i++) {
            if (!json.query.results.error){
            for (var i = 0; i < json.query.results.item.length; i++) {
              entryArray[entryNum] = json.query.results.item[i];
              var date = new Date(entryArray[entryNum].date); // now
              entryArray[entryNum].sortDate = (date.getFullYear() * 1000000) + ((date.getMonth() + 1) * 3600 * 32) + (date.getDate() * 3600) + (date.getHours() * 60) + date.getMinutes();
              entryArray[entryNum].blogName = json.query.results.item[i].title;
              console.log(entryArray[i])
              entryNum +=1;
            }
          }
        }
        var useFeed = "";
        var useDate = "";
        var htmlstr = "";
        var container = document.getElementById("feed");
        entryArray = asort(entryArray, "sortDate");
        for (var i = 0; i < entryNum; i++) {
          var entry = entryArray[i];
          htmlstr += '<div class="mobicard"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
          htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_self">';
          imgsrc = entry.encoded.match(/(src="http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG))"/);
          if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
          //var pastDay = 0.25;
          //var now = (new Date()).getTime();
          //var pastTime = pastDay * 24 * 60 * 60 * 1000;
          var pdate = new Date(entry.date);
          var strdate = pdate.getFullYear() + '/' + (pdate.getMonth() + 1) + '/' + pdate.getDate() + ' ' + pdate.getHours() + ':' + pdate.getMinutes() /*+ ':' + pdate.getSeconds() + '  '*/;
          htmlstr += '<span  class="img">';
          htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
          //htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
          var entryTime = new Date(entry.publishedDate).getTime();
          htmlstr +='<div class="mobilayerBox">'
          htmlstr +='<div class="titlediv">';
          //if(now >= entryTime && now <= (entryTime + pastTime)){htmlstr += '<strong style="color:#15BDBD">new!</strong>';}
          //else{htmlstr += '<strong style="color:rgba(0,0,0,0)">-</strong>';}
          //htmlstr += '<span class="strdate">' + strdate + '</span>';
          if(entryArray[i].blogName=='ハロプロまとめ『カラフルxハロプロ’16』')entryArray[i].blogName='カラフルxハロプロ’16';
          if(entryArray[i].blogName=='ハロプロってながいぜぃ・・・Blog')entryArray[i].blogName='ハロプロってながいぜぃ';
          //htmlstr += '<span class="blogname">' + entryArray[i].blogName + '</span></a>';
          htmlstr +='</div>';
          htmlstr += '<span class="mobititle">' + entry.title + '</span>';
          htmlstr += '<h4></h4>';
          htmlstr += '<p></p>';
          htmlstr +='</div>';
          htmlstr += '</div></div>';
        }
        container.insertAdjacentHTML("beforeend", htmlstr);
      });
    });

function asort(myArray, key) {
  return myArray.sort(function(b1, b2) {
    return b1[key] > b2[key] ? -1 : 1;
  });
}
//-->
