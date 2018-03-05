window.onload = init;

var game;

function init() {

    var p1 = new Player();
    var p2 = new Player();
    game = new Game(p1, p2);

    game.startGame();

    const screen = document.getElementById('game');
    screen.innerHTML = game.render();
}