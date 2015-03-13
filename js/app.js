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

            var DIR_STOP = 0;
            var DIR_LEFT = 1;
            var DIR_RIGHT = 2;
            var direction = DIR_STOP; // 現在の方向です

            /**
             * ボタンをタッチまたはなぞった時に発火する関数です。
             * カーソルの向きを判定し、キャラクターの方向とカーソルの見た目を変化させます。
             * 
             * @param {Event} e
             */
            var moveCursor = function (e) {
                var newDirection = (160 < e.x) ? DIR_RIGHT : DIR_LEFT;
                if (newDirection !== direction) {
                    direction = newDirection;
                    bear.scaleX = (newDirection === DIR_RIGHT) ? 1 : -1;
                    cursor.frame = [newDirection];
                }
            };
            cursor.addEventListener(Event.TOUCH_START, function (e) {
                // キャラクターを走らせます
                bear.frame = [1, 1, 0, 0, 2, 2, 0, 0];
                moveCursor(e);
            });
            cursor.addEventListener(Event.TOUCH_MOVE, moveCursor);
            cursor.addEventListener(Event.TOUCH_END, function () {
                // キャラクターを静止させます
                bear.frame = [0];
                cursor.frame = [0];
                direction = DIR_STOP;
            });
            scene.addChild(bear);
            scene.addChild(cursor);
            return scene;
        })();

        game.pushScene(mainScene);
    };

    game.start(); // start your game!
}
