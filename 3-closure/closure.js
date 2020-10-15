function nonsense(string) {

    var blab = setTimeout(function () {
        alert(string);
    }, 2000)

    return blab;

}

//let blabLater = nonsense("Hello");

//let blabAgainLater = nonsense("Kumar");

function firstName(firstName) {

    var lastName = function (lastName) {
        console.log(`${firstName} ${lastName}`);
    };
    return lastName;
}

var fullName = firstName('Farmer'); //logs nothing
fullName('Singh'); //logs 'Farmer Singh'
fullName('Kumar'); // logs 'Farmer Kumar'





function storyWriter() {
    let story = "";
    let fnObj = {
        addWords: function (words) {
            story = story + words;
            console.log(story);
            return story;
        },
        erase: function () {
            story = "";
            console.log(story);
            return story;
        },
    };
    return fnObj;
}


var farmLoveStory = storyWriter();
farmLoveStory.addWords("There was once a lonely cow."); // 'There was once a lonely cow.'
farmLoveStory.addWords("It saw a friendly face."); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords("My code broke."); // 'My code broke.'
storyOfMyLife.addWords("I ate some ice cream."); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''
