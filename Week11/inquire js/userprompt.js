// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'Hello there new user. Please enter your desired user-name:',
        name: 'user_name'
    },
    {
        type: 'password',
        message: 'Enter a password for your username:',
        name: 'user_password'
    },
    {
        type: 'list',
        message: 'You have three options:',
        choices: ['Go North', { type: 'default', name: 'Go South' }, 'Go Home'],
        name: 'user_destination'
    },
    {
        type: 'checkbox',
        message: "I'm sending you a free pizza, what would you like on it?",
        choices: ['Cheese', 'Olives', 'a billion dollars', 'ham', 'i', 'ran', 'out', 'of', 'ideas'],
        name: 'user_topping_choice'
    },
    {
        type: 'confirm',
        message: 'Is this what you wanted?',
        name: 'user_topping_confirm'
    }
]).then(ret => {
});

