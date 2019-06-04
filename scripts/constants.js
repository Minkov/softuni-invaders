(function (scope) {
    const SIZES = {
        PLAYER: {
            HEIGHT: 140,
            WIDTH: 160,
            SPEED: 15,
        },
        BULLET: {
            HEIGHT: 50,
            WIDTH: 30,
            SPEED: -5,
        },
        ENEMY: {
            SPEED: 5,
            HEIGHT: 50,
            WIDTH: 50,
        },
    };

    const KEY_CODES = {
        LEFT: 37,
        RIGHT: 39,
        FIRE: 32,
    };
    
    scope.SIZES = SIZES;
    scope.KEY_CODES = KEY_CODES;
}(window));
