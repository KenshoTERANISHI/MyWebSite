<!--//
google.load("feeds", "1");

var entryArray = new Array();
var entryNum = 0;
var boolCount = 0;

var feedNum = 10;
function initialize() {
feedAdd("http://blog.livedoor.jp/morning77/index.rdf", 10);
  feedAdd("http://fanblogs.jp/hoeeee/index1_0.rdf", 9);
  feedAdd("http://c-ute.doorblog.jp/index.rdf", 8);
  feedAdd("http://colorhello.blog.jp/index.rdf", 7);
  feedAdd("http://helloprot.ldblog.jp/index.rdf", 6);
  feedAdd("http://haruka1027.blog.jp/index.rdf", 5);
  feedAdd("http://helloprocanvas.ldblog.jp/index.rdf", 4);
feedAdd("http://helloprosun.blog.jp/index.rdf", 3);
feedAdd("http://matomeldo.doorblog.jp/index.rdf", 2);
feedAdd("http://helloproject-sokuhou.doorblog.jp/index.rdf", 1);
}
function feedAdd(rssUrl, boolNum) {
var feed = new google.feeds.Feed(rssUrl);
feed.setNumEntries(20);
feed.load(function(result) {
if (!result.error) {
for (var i = 0; i < result.feed.entries.length; i++) {
entryArray[entryNum] = result.feed.entries[i];
var date = new Date(result.feed.entries[i].publishedDate);
entryArray[entryNum].sortDate = ( date.getFullYear()*1000000 ) + ( (date.getMonth() + 1)*3600*32 ) + ( date.getDate()*3600 ) + ( date.getHours()*60 ) + date.getMinutes();
entryArray[entryNum].blogName = result.feed.title;
entryNum+=1;
}
boolCount+=1;
}
if(boolCount==feedNum){
feedOutput("feed", 200);//フィードの出力
boolCount=0;
}
});
}
function feedOutput(feedId, listNum){
var useFeed = "";
var useDate = "";
  var htmlstr="";
var container = document.getElementById("feed");
entryArray = asort(entryArray, "sortDate");
if(listNum==200){
listNum = entryNum;
}
for (var i = 0; i < listNum; i++) {
var entry = entryArray[i];
htmlstr += '<div class="mobicard"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" >';
htmlstr += '<a class="thumbnail" href="'+ entry.link +'" target="_self">';
imgsrc = entry.content.match(/(src="http:)[\S]+((\.jpg)|(\.JPG)|(\.jpeg)|(\.JPEG)|(\.gif)|(\.GIF)|(\.png)|(\.PNG))"/);
if(!imgsrc){imgsrc=' style="top: 30%;left: 37%;width: 25%;" src="../image/noimage.png"'}
var pastDay = 0.25;
var now = (new Date()).getTime();
var pastTime = pastDay * 24 * 60 * 60 * 1000;
var pdate = new Date(entry.publishedDate);
var strdate = pdate.getFullYear() + '/' + (pdate.getMonth() + 1) + '/' + pdate.getDate() + ' ' + pdate.getHours() + ':' + pdate.getMinutes() /*+ ':' + pdate.getSeconds() + '  '*/;
htmlstr += '<span  class="img">';
htmlstr += '<img class="card-img" ' + imgsrc +' alt="ハロプロ画像">';
//htmlstr += '<span class="cover"> <span class="more"> See details &rarr; </span> </span> </span>';
var entryTime = new Date(entry.publishedDate).getTime();
htmlstr +='<div class="mobilayerBox">'
htmlstr +='<div class="titlediv">';
if(now >= entryTime && now <= (entryTime + pastTime)){htmlstr += '<strong style="color:#15BDBD">new!</strong>';}
else{htmlstr += '<strong style="color:rgba(0,0,0,0)">-</strong>';}
htmlstr += '<span class="strdate">' + strdate + '</span>';
if(entryArray[i].blogName=='ハロプロまとめ『カラフルxハロプロ’16』')entryArray[i].blogName='カラフルxハロプロ’16';
if(entryArray[i].blogName=='ハロプロってながいぜぃ・・・Blog')entryArray[i].blogName='ハロプロってながいぜぃ';
htmlstr += '<span class="blogname">' + entryArray[i].blogName + '</span></a>';
htmlstr +='</div>';
htmlstr += '<span class="mobititle">' + entry.title + '</span>';
htmlstr += '<h4></h4>';
htmlstr += '<p></p>';
htmlstr +='</div>';
htmlstr += '</div></div>';
}
container.insertAdjacentHTML("beforeend", htmlstr);
}

function asort(myArray, key){
return myArray.sort ( function (b1, b2) { return b1[key] > b2[key] ? -1 : 1; } );
}
google.setOnLoadCallback(initialize);
//-->
