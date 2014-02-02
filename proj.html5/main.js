var cocos2dApp = cc.Application.extend({
    config:document['ccConfig'],
    ctor:function (scene) {
        this._super();
        this.startScene = scene;
        cc.COCOS2D_DEBUG = this.config['COCOS2D_DEBUG'];
        cc.initDebugSetting();
        cc.setup(this.config['tag']);
        cc.AppController.shareAppController().didFinishLaunchingWithOptions();
    },

    applicationDidFinishLaunching:function () {
        if(cc.RenderDoesnotSupport()){
            //show Information to user
            alert("Browser doesn't support WebGL");
            return false;
        }
        // initialize director
        var director = cc.Director.getInstance();

        cc.EGLView.getInstance().resizeWithBrowserSize(true);
        cc.EGLView.getInstance().setDesignResolutionSize(800, 450, cc.RESOLUTION_POLICY.SHOW_ALL);

        director.setDisplayStats(this.config['showFPS']);
        director.setAnimationInterval(1.0 / this.config['frameRate']);

        //global these vars
        director = cc.Director.getInstance();
        winSize = director.getWinSize();
        centerPos = cc.p(winSize.width/2, winSize.height/2);

        //load resources
        cc.LoaderScene.preload(g_ressources, function () {
            console.log('finished preloading...');
            director.replaceScene(new this.startScene());
        }, this);

        return true;
    }
});

var director;
var winSize;
var centerPos;

//preloader has loaded loadingscene js, so go ahead, use it!
var teenpatti = new cocos2dApp(LoadingScene);