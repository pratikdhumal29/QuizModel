var folder = "";
var e;
if (!cc.sys.isNative)
{
    folder = "res/mediumRes/";
}

var res = {
    HelloWorld_png : folder + "HelloWorld.png",
    CloseNormal_png : folder + "CloseNormal.png",
    CloseSelected_png : folder+ "CloseSelected.png",
    Quiz_jpg : folder + "Quiz.jpg",
    LableBMFont_png : folder + "bitmapFontTest2.fnt",
    Start_music : "res/Sound/start.mp3",
    Tick_music : "res/Sound/tick.mp3",
    LoadingBar_png : folder + "pg1.png",

};

var questions =["Question1","Question2","Question3","Question4","Question5"];
var opA =["1","2","3","4","5"];
var opB =["1","2","3","4","5"];
var opC =["1","2","3","4","5"];
var opD =["1","2","3","4","5"];
var ans =["A","B","C","D","A"];
var current=0;

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}