function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = () => {
        if (this.hungry) {
            console.log("thats a good snack right there dude.");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("no thanks im stuffed from that pretty sweet snack from before.");
        }
    }
    this.sleep = () => {
        if (this.sleepy) {
            console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else console.log("nah i'm good c:");
    }
    this.play = () => {
        if (this.bored) {
            console.log('lets play some good ol fetch like dad used to.');
            this.bored = false;
            this.hungry = true;
        } else console.log('back to video games C:');
    }
    this.increaseAge = () => {
        this.age++;
        console.log("I'm already " + this.age + '?');
    }
    this.status = () => {
        console.log('Hungry: ' + this.hungry);
        console.log('Sleepy: ' + this.sleepy);
        console.log('Bored: ' + this.bored);
        console.log('Age: ' + this.age);
    }
}

let dog = new DigitalPal();
dog.outside = false;
dog.Bark = () => console.log('bark');
dog.goOutside = () => {
    if (!this.outside) {
        console.log('lets go outside!');
        this.outside = true;
    } else console.log('we are already out here');
};
dog.goInside = () => {
    if (this.outside) {
        console.log('lets go back inside!');
        this.outside = false;
    } else console.log('we are already in here');
};

let cat = new DigitalPal();
let HouseCondition = 100;
cat.meow = () => console.log('hello there');
cat.destroyFurniture = () => {
    if (HouseCondition <= 0) {
        HouseCondition -= 10;
        console.log('buy me more scratching posts or i will tear the house down just wait and see.');
    }
}
cat.buyNewFurniture = () => {
    HouseCondition+= 50;
    console.log('cat will just tear it back down but I need stuff or those local kids will think this house is abandoned and rob it also it boosts my selfesteem when i have nice looking things holy moly i hate this cat');
};

cat.status();
cat.play();
cat.feed();
cat.sleep();