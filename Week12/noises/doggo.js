// let dogs = {
//     raining: true,
//     noise: 'woof',
//     makeNoise: function() {
//         if (this.raining) console.log(this.noise);
//     }
// }

// let cats = {
//     raining: false,
//     noise: 'meow',
//     makeNoise: function() {
//         if (this.raining) console.log(this.noise);
//     }
// }

//simplified c:
const animals = [];
// const newAnimal = (raining, noise) => {
//     const ret =  {
//         raining: raining,
//         noise: noise,
//         makeNoise: function() {
//             if (this.raining)
//                 console.log(this.noise)
//         }
//     }
//     animals.push(ret) //these two things
//     return ret;       //are somehow linked but I'm not sure how
//                       //i suppose the variable that is assigned ret
//                       //actually points to ret inside the animals array
// }
//however this is better since it is quite shorter
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = () => {
        if (this.raining)
            console.log(this.noise)
    }
    animals.push(this) //the varaible that gets assigned to 'this' Animal is also pointing to the same one in the animals array.
}

const bigscare = () => {
    let rain_check;
    for (thing of animals){
        rain_check = thing.raining;
    }
    if (rain_check) console.log('oh no raining every living thing');
    else console.log('no');
}

let doggo = new Animal(true, 'woof');
let cat = new Animal(false, 'give food');
let dangernoodle = new Animal(true, 'hisssss');
animals.forEach((e) => console.log(e));

doggo.makeNoise();

cat.raining = true;
cat.makeNoise();
dangernoodle.makeNoise();
bigscare();