const inquirer = require('inquirer');
const players = [];
const player_names = [];
let characterCount = 0;
function Character(name, prof, sex, age, str, hp) {
    this.charactrIndex - characterCount++;
    this.name = name;
    this.prof = prof;
    this.sex = sex;
    this.age = parseInt(age);
    this.str = parseInt(str);
    this.hp = parseInt(hp);
    this.printStats = () => console.log(this);
    this.attack = (opponent) => {
        const dmg = Math.floor(Math.random() * 50) + this.str - 25;
        console.log(this.name + ' has attacked ' + opponent.name + ' for ' + dmg + ' damage!');
        opponent.hp -= dmg;
        opponent.isAlive();
    };
    this.isAlive = () => {
        if (this.hp <= 0) {
            console.log(this.name + ' has died!');
            return false;
        } else return true;
    };
    this.levelUp = () => {
        this.hp += 25;
        this.str++;;
        this.age++;
        console.log(this.name + "'s health has increased to " + this.hp + '!');
        console.log(this.name + "'s strength has increased to " + this.str + '!');
        console.log(this.name + " has aged to " + this.age + '.');
    }
    players.push(this);
}

function gameStart() {
    for (player of players) {
        player_names.push(player.name);
    }
    inquirer.prompt({
        type: 'list',
        message: 'Choose your fighter!',
        choices: players,
        name: 'character'
    }).then((e) => {
        console.log('You have chosen ' + e.character + '!');
        characterAction(players[player_names.indexOf(e.character)]);
        // console.log(player[]);

    });
}

function characterAction(character) {
    inquirer.prompt({
        type: 'list',
        message: 'Choose one',
        choices: ['Attack', 'Character Info', 'TESTER: LEVEL_UP', 'done'],
        name: 'action'
    }).then((e) => {
        let templist = [];
        player_names.forEach((dude) => {
            if (character.name !== dude)
                templist.push(dude);
        });

        switch (e.action) {
            case 'Attack': {
                inquirer.prompt({
                    type: 'list',
                    message: 'Attack Who?',
                    choices: templist,
                    name: 'opponent'
                }).then((ee) => {
                    for (player of players) {
                        if (player.name == ee.opponent) {
                            character.attack(player);
                            characterAction(character);
                        }
                    }
                    // console.log(opponent.name)
                });
            };
                break;
            case 'Character Info': {
                character.printStats();
                characterAction(character);
            }
                break;
            case 'TESTER: LEVEL_UP': {
                character.levelUp();
                characterAction(character);
            }
                break;
        }
    });
}

let eric_andre = new Character('Eric Andre', 'Talk Show Host', 'M', '35', '2', '5');
let hannibal = new Character('Hannibal', 'Billionare', 'M', '35', '200', '5000');

gameStart();

