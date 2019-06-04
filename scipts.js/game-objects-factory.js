(function (scope) {
    const createBullet = function (left, top) {
        return {
            left,
            top,
            type: 'bullet',
        };
    };

    const createPlayer = function (left, top) {
        return {
            left,
            top,
            type: 'player',
        };
    };

    scope.gameObjectsFactory = {
        createPlayer,
        createBullet,
    };
}(window));
