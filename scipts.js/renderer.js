(function (scope) {
    const { SIZES } = scope;

    const init = function (ctx, bounds) {
        this.ctx = ctx;
        this.bounds = bounds;
        return this;
    };

    const renderPlayer = function (player) {
        const { top, left } = player;
        const { WIDTH, HEIGHT } = SIZES.PLAYER;
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(left, top, WIDTH, HEIGHT);
        return this;
    };

    const renderBullet = function (bullet) {
        const { ctx } = this;
        ctx.fillStyle = 'red';
        const { top, left } = bullet;
        const { WIDTH, HEIGHT } = SIZES.BULLET;
        ctx.fillRect(left, top, WIDTH, HEIGHT);
        return this;
    };

    const renderBullets = function (bullets) {
        bullets.forEach(bullet => this._renderBullet(bullet));
        return this;
    };

    const clear = function () {
        const { width, height } = this.bounds;
        this.ctx.clearRect(0, 0, width, height);
        return this;
    };

    scope.renderer = {
        init,
        renderPlayer,
        renderBullets,
        clear,
        _renderBullet: renderBullet,
    };
}(window));
