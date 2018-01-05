var _listener1 = cc.EventListener.create({
	    event: cc.EventListener.CUSTOM,
	    eventName: "game_custom_event1",
	    callback: function(event){
	    	cc.log("Custom event received and data is " + event.getUserData() );
	    	if(event.getUserData()=="1")
	    	{

	    		var scene =new ResultScene(1);
                cc.director.runScene(scene);
	    	}
	    	if(event.getUserData()=="2")
	    	{
	    		var scene =new ResultScene(2);
                cc.director.runScene(scene);
	    	}
	    	if(event.getUserData()=="3")
	    	{
	    		var scene =new ResultScene(3);
                cc.director.runScene(scene);
	    	}
	    	if(event.getUserData()=="4")
	    	{
	    		var scene =new ResultScene(4);
                cc.director.runScene(scene);
	    	}
	    }
    });    
cc.eventManager.addListener(this._listener1, 1);