(function () {
    const init = function (ctx, bounds) {
        this.ctx = ctx;
        this.bounds = bounds;
        return this;
    };

    const clear = function () {
        const { ctx } = this;
        const { width, height } = this.bounds;
        ctx.clearRect(0, 0, width, height);
    };

    const rendererDot = function (left, top) {
        const { ctx } = this;
        ctx.fillRect(left, top, 15, 15);
    };

    const renderer = {
        init,
        rendererDot,
        clear,
        // renderPlayer
        // renderBullets
        // renderEnemies
    };

    window.renderer = renderer;
}());
