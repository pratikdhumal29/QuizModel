var INITIALIZED_2 = false;
var score=0;

var QuestionLayer = cc.Layer.extend({
    sprite:null,
    count: 0,
    loadingBar: null,
    ctor:function (ques) {
       
        this._super();
        var size = cc.winSize;
       
       var text =new ccui.Text();
       text.setFontSize(50);
        text.attr({
            textAlign : cc.TEXT_ALIGNMENT_CENTER,
            string : ques,
            font : "arial",
            x : size.width/1.8,
            y : size.height/1.2
        });

        var result =new ccui.Text();
        result.setFontSize(50);
        result.attr({
            textAlign : cc.TEXT_ALIGNMENT_CENTER,
            string : "Score :"+score,
            font : "arial",
            x : size.width/4.5,
            y : size.height/1.8
        });

        this.loadingBar = new ccui.LoadingBar();
        this.loadingBar.setName("LoadingBar");
        this.loadingBar.loadTexture(res.LoadingBar_png);
        this.loadingBar.setPercent(0);
        this.loadingBar.x = size.width / 2;
        this.loadingBar.y = size.height / 4;
        this.addChild(this.loadingBar);

        this.schedule(this.functionCallback,1);

        
        this.addChild(text);
        this.addChild(result);
     
        return true;
    },
    functionCallback: function(dt)
    {
        this.count++;

        if (this.count > 10)
        {
            this.count = 0;
             cc.audioEngine.playMusic(res.Tick_music,false);
             var event = new cc.EventCustom("game_custom_event1");
             event.setUserData("3");
             cc.eventManager.dispatchEvent(event);
        }

        this.loadingBar.setPercent(this.count*10);
    }
});

var OptionLayer = cc.Layer.extend({
    sprite:null,
    ctor:function (a,b,c,d) {
        //////////////////////////////
        // 1. super init first
        this._super();
        // ask the window size
        var size = cc.winSize;
       
        
        var menuItem1 = new cc.MenuItemFont("A. "+a,optionA);
        var menuItem2 = new cc.MenuItemFont("B. "+b,optionB);
        var menuItem3 = new cc.MenuItemFont("C. "+c,optionC);
        var menuItem4 = new cc.MenuItemFont("D. "+d,optionD);

        menuItem1.setPosition(cc.p(size.width/2,(size.height/4) *4 ));
        menuItem2.setPosition(cc.p(size.width/2,(size.height/4) *3 ));
        menuItem3.setPosition(cc.p(size.width/2,(size.height/4) *2 ));
        menuItem4.setPosition(cc.p(size.width/2,(size.height/4) *1 ));

    
        var menu = new cc.Menu(menuItem1,menuItem2,menuItem3,menuItem4);
        menu.alignItemsVertically();
        menu.setPosition(cc.p(450,350));
        this.addChild(menu);
     
        return true;
    }
});

var optionA = function()
{
    cc.log("A is selected");
    cc.audioEngine.playMusic(res.Tick_music,false);
    if(ans[current-1]=="A")
    {
        score++;
        //cc.log(score);
        var event = new cc.EventCustom("game_custom_event1");
        event.setUserData("1");
        cc.eventManager.dispatchEvent(event);
    }
    else
    {
        var event = new cc.EventCustom("game_custom_event1");
        event.setUserData("2");
        cc.eventManager.dispatchEvent(event);
    }
    

}
var optionB = function()
{
    cc.log("B is selected");
    cc.audioEngine.playMusic(res.Tick_music,false);
    if(ans[current-1]=="B")
    {
        score++;
        //cc.log(score);
        var event = new cc.EventCustom("game_custom_event1");
        event.setUserData(1);
        cc.eventManager.dispatchEvent(event);
    }
    else
    {
        var event = new cc.EventCustom("game_custom_event1");
        event.setUserData(2);
        cc.eventManager.dispatchEvent(event);
    }

}
var optionC = function()
{
    cc.log("C");
    cc.audioEngine.playMusic(res.Tick_music,false);
    if(ans[current-1]=="C")
    {
        score++;
        //cc.log(score);
        var event = new cc.EventCustom("game_custom_event1");
        event.setUserData(1);
        cc.eventManager.dispatchEvent(event);
    }
    else
    {
        var event = new cc.EventCustom("game_custom_event1");
        event.setUserData(2);
        cc.eventManager.dispatchEvent(event);
    }

}
var optionD = function()
{
    cc.log("D");
    cc.audioEngine.playMusic(res.Tick_music,false);
    if(ans[current-1]=="D")
    {
        score++;
        //cc.log(score);
        var event = new cc.EventCustom("game_custom_event1");
        event.setUserData(1);
        cc.eventManager.dispatchEvent(event);
    }
    else
    {
        var event = new cc.EventCustom("game_custom_event1");
        event.setUserData(2);
        cc.eventManager.dispatchEvent(event);
    }

}

let HelloWorldScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
            if(current==5)
                {
                    var event = new cc.EventCustom("game_custom_event1");
                    event.setUserData("4");
                    cc.eventManager.dispatchEvent(event);
                }
            var qLayer = new QuestionLayer(questions[current]);
            var oLayer = new OptionLayer(opA[current],opB[current],opC[current],opD[current]);
            current++;
            this.addChild(qLayer);
            this.addChild(oLayer)
        
    }
});

