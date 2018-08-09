const inquirer = require('inquirer');
let players = [];
let substitutes = [];
let score = 0;
function Player(name, position, off, def) {
    this.name = name;
    this.position = position;
    this.off = parseInt(off);
    this.def = parseInt(def);
}

Player.prototype.goodGame = function () {
    this.off += Math.floor(Math.random() * 3) + 1;
    this.def += Math.floor(Math.random() * 3) + 1;
}
Player.prototype.badGame = function () {
    this.off -= Math.floor(Math.random() * 3) + 1;
    this.def -= Math.floor(Math.random() * 3) + 1;
}
Player.prototype.printStats = function () {
    console.log(this);
}
Player.prototype.switchPosition = function (player) {
    const temp = this.position;
    this.position = player.position;
    player.position = temp;
};
Player.prototype.subPlayerPrompt = function (sub) {
    this.switchPosition(sub);
    const temp = this;
    this = sub;
    sub = temp;
};
function create_number_of_players(number) {
    if (number >= 1) {
        inquirer.prompt([
            {
                type: 'text',
                message: "What's your player's name?",
                name: 'name'
            },
            {
                type: 'text',
                message: "What's your player's position?",
                name: 'position'
            },
            {
                type: 'text',
                message: "What's your player's offensive skill?",
                name: 'off'
            },
            {
                type: 'text',
                message: "What's your player's defensive skill?",
                name: 'def'
            }
        ]).then((resp) => {
            console.log('--------------------------')
            let temp_player = new Player(resp.name, resp.position, resp.off, resp.def);

            const flip = Math.floor(Math.random() * 3);
            switch (flip) {
                case 0: temp_player.goodGame();
                    break;
                case 1: temp_player.badGame();
                    break;
            }
            // temp_player.goodGame();
            if (!temp_player.position.toLowerCase() === 'sub') {
                players.push(temp_player);
            } else {
                substitutes.push(temp_player);
            }
            create_number_of_players(number - 1);
        })
    } else {
        console.log('---Players---');
        for (player of players) {
            player.printStats();
        }
        for (sub of substitutes) {
            console.log('---Substitutes---');
            sub.printStats();
        }
        // inquirer.prompt({
        //     type: 'list',
        //     choices: players,
        //     message: 'Lets change our first players position with someone else',
        //     name: 'name'
        // }).then((selected) => {
        //     let temp;
        //     for (player of players) {
        //         if (player.name === selected.name)
        //             temp = player;
        //     }
        //     players[0].switchPosition(temp);
        //     for (player of players) {
        //         player.printStats();
        //     }
        // });
    }
}
///test players



///
function play_game(numberOfRounds) {
    if (numberOfRounds >= 0) {
        let totalOff = 0;
        let totalDef = 0;
        for (player of players) {
            totalOff += player.off;
            totalDef += player.def;
        }
        if (totalOff > Math.floor(Math.random() * 20) + 1) {
            score++;
        }
        if (totalDef < Math.floor(Math.random() * 20) + 1);{
            score--;
        }

    }
}
create_number_of_players(3);
