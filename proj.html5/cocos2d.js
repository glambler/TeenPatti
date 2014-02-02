(function () {
    var d = document;
    var c = {
 
        menuType:'canvas',
        COCOS2D_DEBUG:2,
        box2d:false,
        chipmunk:false,
        showFPS:true,
        frameRate:60,
        loadExtension:true,
        tag:'gameCanvas', 
 
        engineDir:'cocos2d-html5/cocos2d/',
        appFiles:[
            'proj.html5/src/resource.js'//,
            , 'proj.html5/src/myApp.js'
            //'./src/GameLayer.js'
            //main.js is auto-included by preloader.
        ]
    };
 
    window.addEventListener('DOMContentLoaded', function () {
        var s = d.createElement('script');
 
        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
        } else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + 'jsloader.js';
        } else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }        
 
        document.ccConfig = c;
        s.id = 'cocos2d-html5';
        d.body.appendChild(s);
    });
})();