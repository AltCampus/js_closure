// Immidiately Call the blab function
let str = "ABCD";

function nonsense(string) {
    let blab = (function () {
        alert(string);
    })(); 
}

nonsense(str);




// Call blab using setTimeout 

let str = "ABCD";

function nonsense(string) {
    let blab = function () {
        alert(string);
    };

    window.setTimeout(blab, 2000);
}

nonsense(str);

// Return blab 

let str = "ABCD";
let str2 = "AltCampus";

function nonsense(string) {
    let blab = function () {
        alert(string);
    };

    return blab;
}
let blabLater = nonsense(str);
let blabAgainLater = nonsense(str2);

// Display firstName and lastName both

var lastNameTrier = function(firstName){
	   
    var innerFunction = function(lastName) {
        console.log(firstName +" "+lastName);
    };
  return innerFunction;
};

var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'




// Write or erase a story

function storyWriter() {
    let obj = {

        story : "",

        addWords : function(words) {
                        obj.story += words;
                        return obj.story;
                    },
                    
        erase : function() {
                    obj.story = "";
                    return obj.story;
                }
    }

    return obj;
  }


  var farmLoveStory = storyWriter();
  farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
  farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

    var storyOfMyLife = storyWriter();
    storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
    storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
    storyOfMyLife.erase(); // ''