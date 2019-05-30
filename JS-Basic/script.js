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

var manav            = new Object();
manav.name           = 'Manav';
manav.lastName       = 'Jasani';
manav['yearOfBirth'] = 1969;
manav.job            = 'Civil';

console.log( manav );

// Objects and Methods.
// v1.0
/*
var kishan = {
	name:        'Kishan',
	lastName:    'Jasani',
	yearOfBirth: 1996,
	job:         'teacher',
	isMarried:    false,
	family:       [ 'Kishan', 'Manav', 'Father', 'Mother' ],
	calculateAge: function() {
		var today = new Date(); 
		return today.getFullYear() - this.yearOfBirth; // Here 'this' is refer to object kishan.
}
}
*/

//console.log( kishan.calculateAge() );

// v2.0
var kishan = {
	name:        'Kishan',
	lastName:    'Jasani',
	yearOfBirth: 1996,
	job:         'teacher',
	isMarried:    false,
	family:       [ 'Kishan', 'Manav', 'Father', 'Mother' ],
	calculateAge: function() {
		var today = new Date();
		this.age  = today.getFullYear() - this.yearOfBirth;
	}
};
kishan.calculateAge();
console.log( kishan.age );

// Loops

for ( var i=0; i < 10; i++ ) {
	console.log( i );    
}

var names = [ 'kishan', 'manav', 'ankit', 'mehul', 'abhi' ];
for ( var i = 0; i < names.length; i++ ) {
	console.log( names[i] );
}

for ( var i= names.length - 1; i >= 0; i-- ) {
	console.log( names[i] );
}

var i = 0;
while ( i < names.length ) {
	console.log( names[i] );
	i++;
}

var agesOfPerson = [ 2005, 1990, 1996, 1995, 2002, 1991, 1992, 1997, 1998 ];
var arr          = [];
var fullAge      = [];

function getCurrentAge( currentAge ) {
	var today = new Date();
	return today.getFullYear() - currentAge;
}

for ( var i = 0; i < agesOfPerson.length; i++ ) {
	arr[i] = getCurrentAge( agesOfPerson[i] );
	if ( arr[i] >= 18 ) {
		fullAge.push( true );
	} else {
		fullAge.push( false );
	}
}

console.log( arr );
console.log( fullAge );

var fname = 'Kishan';

function first() {
	var a = 'Hello!';
	second();
	var x = a + fname;
	console.log( x );
}

function second() {
	var b = 'Hii!';
	third();
	var y = b + fname;
	console.log( y );
}

function third() {
	var c = 'Hey!';
	var z = c + fname;
	console.log( z );
}

first();

// Hoisting
calculateAge( 1996 );
function calculateAge( year ) {
	console.log( 2019 - year );
}
// calculateAge( 1996 );

// retirement( 1996 ); // It will produce an error of Uncaught TypeError: retirement is not a function
// It only work for function declaration
var retirement = function( year ) {
	console.log( 65 - ( 2019 - year ) );
}

retirement( 1996 );

var age = 25;

function foo() {
	console.log( age );
	var age = 65;
	console.log( age );
}
foo();
console.log( age );

// Scoping and scope chain

//	Global Scope
//==============================================================
var a = 'Hello!';
first();

function first() {
	// first() + global scope
	//============================================
	var b = 'Hii!';
	second();

	function second() {
		// global + first() + Second() scope
		//========================================
		var c = 'Hey!';
		console.log( a + b + c );
		//========================================
	}
	//==============================================
}
//===============================================================

// This keyword

// console.log( this );

calculateAge( 1996 );
function calculateAge( year ) {
	console.log( 2019 - year );
	console.log( this ); // window
}

var kishan = {
	name:         'kishan',
	yearOfBirth:  1996,
	calculateAge: function() {
		console.log( this ); // kishan
		console.log( 2019 - this.yearOfBirth );
		function innerFunction() {
			console.log( this ); // Window because it's a regular method
		}
		innerFunction();
	}
}
kishan.calculateAge();

var manav = {
	name: 'Manav',
	yearOfBirth: 1998
}

// Method borrowing
manav.calculateAge = kishan.calculateAge;
manav.calculateAge();
