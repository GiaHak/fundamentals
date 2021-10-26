console.log(hello);

var hello = 'world';
// var hello;
// console.log(hello);
// hello = "world";
// console.log('undefined')

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle;
// console.log(needle)
// needle = "magnet"
// console.log('magnet')

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan
// bremdam = "only okay" 
// brendan= super cool
// console.log('super cool')

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// console.log('chicken')
// console.log('chicken, half-chicken')

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean is not function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log rock, r&b

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// console.log sanjose, seattle, burbank
// console.log san jose