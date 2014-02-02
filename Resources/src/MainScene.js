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