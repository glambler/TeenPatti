//
// MainScene class
//
var MainScene = function(){};

// Create callback for button
MainScene.prototype.onPressButton = function()
{	
    // Rotate the label when the button is pressed
    this.helloLabel.runAction(cc.RotateBy.create(1,360));
    cc.log("MainScene button was clicked!!");
    var ws = new WebSocket('ws://192.168.1.2:1200');
    cc.log(ws);
    ws.onopen = function() {
        cc.log("ws is now open!!");
    }
    ws.onmessage = function (evt) { 
        var received_msg = evt.data;
        cc.log("Message is received...");
    };
    ws.onclose = function() { 
        // websocket is closed.
        cc.log("Connection is closed..."); 
    };
    ws.onerror = function(err) {
        cc.log("Got some error");
        cc.log(err);
    };
};

MainScene.prototype.onDidLoadFromCCB = function()
{   
    cc.log("File was loaded");
    cc.log("Trying to connect to... ws://192.168.1.2:1200");
    var ws = new WebSocket('ws://192.168.1.2:1200');
    cc.log(ws);
    ws.onopen = function() {
        cc.log("ws is now open!!");
    }
    ws.onmessage = function (evt) { 
        var received_msg = evt.data;
        cc.log("Message is received...");
    };
    ws.onclose = function() { 
        // websocket is closed.
        cc.log("Connection is closed..."); 
    };
    ws.onerror = function(err) {
        cc.log("Got some error");
        cc.log(err);
    };
};

var MainSceneScene = cc.Scene.extend({
    ctor:function() {
        this._super();
        cc.associateWithNative( this, cc.Scene );
    },

    onEnter:function () {
        this._super();
        var layer = cc.BuilderReader.load("res/MainScene");
        //var layer = new MainScene();
        this.addChild(layer);
        layer.init();
    }
});