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

// function

function calculateAge( yearOfBirth ) {
    var today = new Date(); 
    return today.getFullYear() - yearOfBirth;
}

var yearOfKishan = calculateAge( 1996 );
var yearOfManav  = calculateAge( 1998 );
console.log( yearOfKishan );
console.log( yearOfManav );

// Statement and expressions

// This is function statement.
function someFunction( param ) {
    // Code..
}

// This is function expression.
var someFun = function( param ) {
    // Code..
}

// Arrays

var names = [ 'Kishan', 'Manav', 'Ankit' ];
var years = new Array( 1990, 1998, 1948 );

console.log( names[0] );

// Objects and Properties

var kishan = {
    name:        'Kishan',
    lastName:    'Jasani',
    yearOfBirth: 1990,
    job:         'teacher',
    isMarried:    false 
}

console.log( kishan.lastName );
console.log( kishan['lastName'] );

var manav = new Object();
manav.name = 'Manav';
manav.lastName = 'Jasani';
manav['yearOfBirth'] = 1969;
manav.job = 'Civil';

console.log( manav );
