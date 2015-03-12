function main() {
    enchant(); // initialize
    var game = new Core(320, 320); // game stage
    game.preload("img/chara1.png"); // preload image
    game.fps = 20;

    game.onload = function () {
        var mainScene = (function () {
            var scene = new Scene();
            var bear = new Sprite(32, 32);
            bear.image = game.assets["img/chara1.png"];
            bear.frame = [6, 6, 7, 7];
            bear.tl.moveBy(290, 0, 90)
                    .scaleTo(-1, 1, 10)
                    .moveBy(-290, 0, 90)
                    .scaleTo(1, 1, 10)
                    .loop();
            scene.addChild(bear);
            return scene;
        })();

        game.pushScene(mainScene);
    };

    game.start(); // start your game!
}
