var INITIALIZED = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        // ask the window size
        var size = cc.winSize;
        
        //start music
        cc.audioEngine.playMusic(res.Start_music,false);
        this.scheduleOnce(StopMusic,4);

        //lable 
        var lableBMFont = new ccui.TextBMFont();
        lableBMFont.setFntFile(res.LableBMFont_png);
        lableBMFont.setString("Welcome to the Quiz");
        lableBMFont.x=size.width/2;
        lableBMFont.y=size.height/1.2;
        this.addChild(lableBMFont);
        
        //adding image
        var  imageView = new ccui.ImageView();
        imageView.loadTexture(res.Quiz_jpg);
        imageView.x=size.width/2;
        imageView.y=size.height/2;
        this.addChild(imageView);

        //adding sprite
        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 6));
        this.addChild(sprite, 0);
        sprite.setOpacity(0);
        var sprite_action = cc.RepeatForever.create(cc.FadeIn.create(4));
        sprite.runAction(sprite_action);
        //adding listerner to it
    

        var menuItem1 = new cc.MenuItemFont("PLAY",play);
        var menu = new cc.Menu(menuItem1);
        menu.alignItemsVertically();
        this.addChild(menu);


        return true;
    }
});
 
var play =function()
{
    var scene =new HelloWorldScene2();
    cc.director.runScene(scene);
}
var StopMusic = function()
{
    cc.audioEngine.stopMusic();
}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(INITIALIZED == false)
        {  
            INITIALIZED =true;
            var layer = new HelloWorldLayer();
            this.addChild(layer);
        }
    }
});

