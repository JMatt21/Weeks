const Tele = require('./tv');
const TV = new Tele();
let show_or_actor = process.argv[2];
let search = process.argv.slice(3).join(' ');

if (!show_or_actor){
    show_or_actor = 'show';
}


if (show_or_actor === 'actor'){
    if (!search){
        search = 'Tim Allen';
    }
    console.log('Searching for an actor: ' + search);
    TV.findActor(search);

} else if (show_or_actor === 'show'){
    if (!search){
        search = 'Game of thrones';
    }
    console.log('Searching for a show: ' + search);
    TV.findShow(search);
} else {
    console.log ('Not an available command! Please try "actor" or "show"');
}