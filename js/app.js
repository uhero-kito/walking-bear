function main() {
    enchant(); // initialize
    var game = new Core(320, 480); // game stage
    game.preload("img/chara1.png", "img/cursor.png"); // preload image
    game.fps = 20;

    game.onload = function () {
        var mainScene = (function () {
            var scene = new Scene();
            var bear = (function () {
                var sprite = new Sprite(32, 32);
                sprite.image = game.assets["img/chara1.png"];
                sprite.frame = [0];
                sprite.x = 144;
                sprite.y = 144;
                return sprite;
            })();
            var cursor = (function () {
                var sprite = new Sprite(160, 160);
                sprite.image = game.assets["img/cursor.png"];
                sprite.x = 80;
                sprite.y = 320;
                return sprite;
            })();
            cursor.addEventListener(Event.TOUCH_START, function () {
                bear.frame = [1, 1, 0, 0, 2, 2, 0, 0];
            });
            cursor.addEventListener(Event.TOUCH_END, function () {
                bear.frame = [0];
            });
            scene.addChild(bear);
            scene.addChild(cursor);
            return scene;
        })();

        game.pushScene(mainScene);
    };

    game.start(); // start your game!
}
