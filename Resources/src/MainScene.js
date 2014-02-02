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
};

MainScene.prototype.onDidLoadFromCCB = function()
{   
    cc.log("File was loaded");
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