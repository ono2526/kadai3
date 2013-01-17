
enchant();

var picNumber = 0;

window.onload = function() {
    var game = new Game(320, 480);
    
    game.preload('http://enchantjs.com/assets/images/chara1.gif');
    
    game.onload = function() {
       var bgSprite = new Sprite(320, 480); 
       var bgSurface = new Surface(320, 480); 
       bgSurface.context.strokeStyle = 'blue';
       bgSurface.context.beginPath(); 
       bgSurface.context.rect(100, 100, 200, 200);
       bgSurface.context.stroke(); 
       bgSprite.image = bgSurface; 
       game.rootScene.addChild(bgSprite); 
        
       var bear = new Sprite(32, 32); 
         bear.image = 
         game.assets['http://enchantjs.com/assets/images/chara1.gif'];
         bear.frame = 0;
         bear.x = 100;
         bear.y = 100;
         bear.addEventListener(Event.ENTER_FRAME, function() { 
            picNumber++; 
            if (picNumber > 3) {
               picNumber = 0;
            }
            bear.frame = picNumber;
            bear.x += 2; 
         });
        game.rootScene.addChild(bear);
        
        bgSprite.addEventListener(Event.TOUCH_START, function(event) {
          if (event.x > 160) { 
              
              bear.x = 100;
              bear.y = 100
          } 
          else {
              bear.x -= 5;
              bear.y += 10;
          } 
        });
    };
game.start(); 
};