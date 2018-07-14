var $ = require('jquery');

var MemoryGame = require('./../src/memgame.js')


function start(size) {
    var game = new MemoryGame(size);
    var grid = document.getElementById('game-grid');
    var nav = document.getElementById('nav');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    while (nav.firstChild) {
        nav.removeChild(nav.firstChild);
    }
    for (var i = 0; i < size * size; i++) {

        var game_card = document.createElement('div');
        game_card.className = "game-card";
        game_card.id = i;
        game_card.style = "background-image: url(../img/" + game.board[i].value + ".svg), none;"
        game_card.addEventListener('click', function (event) {

            if (game.flip_card(this.id)) {
                this.style = "background-image: none; background-color:pink"
            } else {
                this.className += " unflipped";
            }
        });
        var card = document.createElement('div');
        if (size == 3) {
            card.className = "five wide column"
            card.id = "game-card-" + i;
        } else if (size == 4) {
            card.className = "four wide column"
            card.id = "game-card-" + i;
        }


        game_card.innerHTML = game.board[i].value

        card.appendChild(game_card);
        grid.appendChild(card)
    }

}

function flip(id) {
    
}