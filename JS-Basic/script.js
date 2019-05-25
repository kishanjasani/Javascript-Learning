// Simple print to console.
console.log( 'Hello World!' );

var name = 'Kishan';

// String concat
var lastName = 'Jasani'
console.log( 'Hello ' + name + ' ' + lastName );

// Number
var age = 23;
console.log( age );

// Boolean
var fullAge = true;
console.log( fullAge );

var job, isMarried;
console.log( job ); // Undefined

job =       'Web Developer';
isMarried = true;
console.log( name + ' is ' + age + ' ' + job + ' '+ isMarried );

// We are mutating the variables.
var age = 'Twenty';
job = 'Software developer';
console.log( name + ' is ' + age + ' ' + job + ' '+ isMarried );

// Operators
var today = new Date();
var birthYear = today.getFullYear() - 1996;
console.log( birthYear );

var ageKishan = 30;
var ageManav = 30;

ageKishan =  3 + 5 * 4 -6; // 17
ageKishan = ageManav = ( 3 + 5 ) * 4 -6;
// console.log( ageManav );
// console.log( ageKishan );

ageKishan++;
ageManav *= 2;
console.log( ageKishan );
console.log( ageManav );

// if/else statement

var name = 'Kishan';
var age = 26;
var isMarried = 'yes';
// isMarried = prompt('Is Married ? yes/no ');
if ( isMarried === 'yes' ) {
    console.log( name + ' is married' );
} else {
    console.log( name + ' is not married' );
}

if ( 23 === "23") {
    console.log( 'Yes equal' );
} else {
    console.log( 'Not equal' );
}

// Boolean and switch statement

var job = 'driver';

switch ( job ) {
    case 'teacher' :
        console.log( 'Kishan is Teacher' );
        break;
    case 'driver' :
        console.log( 'Kishan is Driver' );
        break;
    case 'cop' :
        console.log( 'Kishan is Cop' );
        break;
    default:
        console.log( 'Other' );
}

var kishanHeight = 64;
var kishanAge    = 23;
var manavHeight  = 70;
var manavAge     = 21;

var kishanScore = kishanHeight + 5 * kishanAge;
var manavScore  = manavHeight + 5 * manavAge;

if ( kishanScore > manavScore ) {
    console.log( 'Kishan wins the game' );
} else if ( manavScore > kishanScore ) {
    console.log( 'Manav wins the game' );
} else if ( manavScore === kishanScore ) {
    console.log( 'Draw' );
}