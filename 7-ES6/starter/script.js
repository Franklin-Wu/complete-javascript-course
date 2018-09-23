/////////////////////////////
// CODING MINI-CHALLENGE
// Rewrite the above myFriends5 function without the bind.

function Person(name) {
    this.name = name;
}

/*
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}
*/

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map((el) => {
       return this.name + ' is friends with ' + el;
    });
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
