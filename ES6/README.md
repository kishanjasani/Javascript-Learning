**ES6 Features** :
=

**Arrow Function :**
```
function foo() {
    return 2;
}
```
In ES6:
```
foo = () => 2;
```

=> Arrow function variation :
 - If returns value that you want to return is object like ,
 ```
x => { y: x }
 ```
 then we have to add paranthesis just around body. then it will treated as object.
 ```
x => ( { y: x } )
 ```
=> It is an anonymous function. we can not give name to it. we need to store it in some variable.

**Arrow function with Promises**

```
p.then( function extractId(v) { return v.id } )
```
Instead of
```
p.then( v => v.id )
```

**Scenario where to use arrow function :**

```
var object = {
    id : 42,
    foo: function foo() {
        setTimeout(
            function() {
                console.log( this.id );
            }, 100
        );
    }
}

object.foo(); // undefined
```

So here People is doing is something like this,
```
var object = {
    id : 42,
    foo: function foo() {
        var context = this;
        setTimeout(
            function() {
                console.log( context.id );
            }, 100
        );
    }
}

object.foo(); // 42
```
But this is not a proper solution to bind this to context object.
 But we need do to something like this,
 ```
var object = {
    id : 42,
    foo: function foo() {
        setTimeout(
            function() {
                console.log( context.id );
            }.bind(this), 100
        );
    }
}

object.foo(); // 42
 ```
Using Arrow function
```
var object = {
    id : 42,
    foo: function foo() {
        setTimeout(
            () => {
                console.log( this.id );
            }, 100
        );
    }
}

object.foo(); // 42
```
