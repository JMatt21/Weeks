function Programmer(name, title, age, fav_pro_lan){
    this.name = name;
    this.title = title;
    this.age = age;
    this.favoriteLanguage = fav_pro_lan;
    this.display = function(){
        console.log(this.name);
        console.log(this.title);
        console.log(this.age);
        console.log(this.favoriteLanguage);
    };
}

let me = new Programmer('Matt', 'hey guess how many letters can fit onto this line boy i sure wish that the window was not so flexible so you and i could find out I think that is so much bulldigger cant say swears here hey whats punctuation ok goodbye for now', '21', 'Java');
me.display();