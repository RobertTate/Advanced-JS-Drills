// Practices in Hoisting:

name = 'Bobby';
var name;
console.log(name);



setName()
function setName() {
    var name = 'Bobby'
    console.log(name);
}



console.log('Bobby');
let avg = findAvg(2, 2);
console.log('Bobby', avg);
function findAvg(a, b) {
    console.log('Bobby');
    var answer = ( a + b) / 2;
    return answer;
}



// Practices in Scope:

let fruits = ['apples', 'oranges', 'bananas'];

let leastFav = 'Pineapple'; 

function firstFruit() {
    let favFruit = 'Mango';
    console.log(fruits[0]);
    function printFavFruit() {
        console.log(favFruit);

    }
    
    printFavFruit();
    console.log(leastFav);

};

firstFruit();

// *the firstFruit function can't reference this variable, unless both the declaration and assignment are above.
// let leastFav = 'Pineapple';


hello()
function hello() {
    console.log('Hello Bobby');
}

let textAlert = function() {
    alert('This is an alert message');
};

textAlert();
