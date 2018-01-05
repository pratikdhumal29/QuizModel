var result;
var ResultLayer = cc.Layer.extend({
    sprite:null,
    ctor:function (res) {

        this._super();
        var size = cc.winSize;
        
      
        cc.log(res);
        if(res==1)
        {
        cc.log("in 1");
        var label1= new cc.LabelTTF("correct","Arial");
        label1.setFontSize(100);
        label1.setPosition(cc.p(size.width/2,size.height/1.1));
        this.addChild(label1);


        }
         if(res==2)
        {
        cc.log("in 2");
      
        var label1= new cc.LabelTTF("wrong","Arial");
        label1.setFontSize(100);
        label1.setPosition(cc.p(size.width/2,size.height/1.1));
        this.addChild(label1);

     
     
        }
        if(res==3)
        {
        cc.log("in 2");
        cc.log("in 1");
        var label1= new cc.LabelTTF("timeout","Arial");
        label1.setFontSize(100);
        label1.setPosition(cc.p(size.width/2,size.height/1.1));
        this.addChild(label1);
     
     
        }
        if(res==4)
        {
        cc.log("in 2");
        cc.log("in 1");
        var label1= new cc.LabelTTF("end quiz","Arial");
        label1.setFontSize(100);
        label1.setPosition(cc.p(size.width/2,size.height/1.1));
        this.addChild(label1);
     
     
        }

        //for next activity
        cc.log("before");
        e= cc.EventListener.create({
            event : cc.EventListener.MOUSE,
            onMouseDown :this.touch
        });
        cc.eventManager.addListener(e,1);
        
        return true;
    },
    touch : function () {
        cc.log("gegegghvdgh");
        cc.director.runScene(new HelloWorldScene2());
        cc.eventManager.removeListener(e);
    }
});

 



var ResultScene = cc.Scene.extend({
    res: 0,
    ctor:function(res){
        this._super();
        this.res=res;
        cc.log(res);
    },
    onEnter:function () {
        var layer = new ResultLayer(this.res);
        this.addChild(layer);
    }
});