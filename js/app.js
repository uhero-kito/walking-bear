function main() {
    enchant(); // initialize
    var game = new Core(320, 480); // game stage
    game.preload("img/chara1.png"); // preload image
    game.fps = 20;

    game.onload = function () {
        var mainScene = (function () {
            var scene = new Scene();
            var bear = new Sprite(32, 32);
            bear.image = game.assets["img/chara1.png"];
            bear.frame = [0];
            bear.x = 160;
            bear.y = 160;
            scene.addChild(bear);
            return scene;
        })();

        game.pushScene(mainScene);
    };

    game.start(); // start your game!
}
