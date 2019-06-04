(function (scope) {
    const {
        renderer,
        SIZES,
        userInteractiveChecker,
        gameObjectsFactory,
    } = scope;

    const initCanvas = function () {
        const { width, height } = this.bounds;
        const canvas = document.createElement('canvas');

        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;
        this.gameContainer.appendChild(this.canvas);

        const ctx = this.canvas.getContext('2d');
        this.renderer = renderer.init(ctx, this.bounds);
    };

    const handleUserInteractive = function (ev) {
        this.handleMovement(ev);
        this.handleFire(ev);
    };

    const handleMovement = function (ev) {
        let alpha = 0;
        if (userInteractiveChecker.isGoLeftMovement(ev)) {
            alpha = -1;
        } else if (userInteractiveChecker.isGoRightMovement(ev)) {
            alpha = +1;
        }

        this.gameObjects.player.left += SIZES.PLAYER.SPEED * alpha;
    };

    const handleFire = function (ev) {
        if (!userInteractiveChecker.isFire(ev)) {
            return;
        }

        const { top, left } = this.gameObjects.player;
        const { bullets } = this.gameObjects;
        const bullet = gameObjectsFactory.createBullet(left, top);
        bullets.push(bullet);
    };

    const initEvents = function () {
        window.addEventListener('keydown', this.handleUserInteractive.bind(this));
    };

    const draw = function () {
        const { player, bullets } = this.gameObjects;
        this.renderer.clear();
        this.renderer.renderPlayer(player);
        this.renderer.renderBullets(bullets);
    };

    const updatePositions = function () {
        const { SPEED: speed } = SIZES.BULLET;
        const { bullets } = this.gameObjects;
        bullets.forEach(bullet => {
            bullet.top -= speed;
        });
    };

    const gameLoop = function () {
        this.updatePositions();
        this.draw();
        window.requestAnimationFrame(this.gameLoop.bind(this));
    };

    const init = function (selector, width, height) {
        const left = (width - SIZES.PLAYER.WIDTH) / 2;
        const top = height - SIZES.PLAYER.HEIGHT;
        
        const player = gameObjectsFactory.createPlayer(left, top);
        this.bounds = { width, height };
        this.gameContainer = document.querySelector(selector);
        this.gameObjects = {
            player: player,
            bullets: [],
        };

        this.initCanvas();
        this.initEvents();
    };

    const start = function () {
        this.isRunning = true;
        this.gameLoop();
    };

    scope.game = {
        start,
        init,

        // private
        gameLoop,
        initCanvas,
        initEvents,
        handleUserInteractive,
        handleMovement,
        handleFire,
        draw,
        updatePositions,
    };

}(window));
