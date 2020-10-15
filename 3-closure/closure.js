// first 
/* function nonesense(string){
    var blab = function(){
        alert(string)
    }
         return blab();

} */
//second 
/*
function nonesense(string){
    var blab = function(){
        alert(string)
    }
    setTimeout(blab(), 2000)
}
 */

//third 
function nonesense(string){
    var blab = function(){
        alert(string)
    }
    return blab;
}

let blabLater = nonesense('Ali');
let blabAgainLater = nonesense('Ali');
console.log(blabLater, blabAgainLater);


function FullName(firstName){
    return function(lastName){
        console.log(`${firstName} ${lastName}`);
    };
}
let name = FullName('Shadab');
name('Ali');

function storyWriter(){
    let story;
    return {
        addWords: function(sen){
            return story
        },
        erase: function(){
            story = '';
            return story
        }
    };
}
var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'

