(function (scope) {
    const { KEY_CODES } = scope;
    scope.userInteractiveChecker = {
        isGoLeftMovement(ev) {
            const { GO_LEFT } = KEY_CODES;
            return ev.keyCode === GO_LEFT;
        },
        isGoRightMovement(ev) {
            const { GO_RIGHT } = KEY_CODES;
            return ev.keyCode === GO_RIGHT;
        },
        isFire(ev) {
            const { FIRE } = KEY_CODES;
            return ev.keyCode === FIRE;
        },
    };
}(window));
