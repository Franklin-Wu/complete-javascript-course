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
    var arr = friends.map(el => this.name + ' is friends with ' + el);
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

console.clear();

/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Element {
    constructor(name, establishmentYear, length) {
        this.name = name;
        this.establishmentYear = establishmentYear;
        this.length = length;
    }

    getAge() {
        return (new Date().getFullYear()) - this.establishmentYear;
    }
}

class Park extends Element {
    constructor(name, establishmentYear, length, width, treeCount) {
        super(name, establishmentYear, length);
        this.width = width;
        this.treeCount = treeCount;
    }

    getTreeDensity() {
        return this.treeCount / (this.length * this.width);
    }
}

class Street extends Element {
    constructor(name, establishmentYear, length, size = 'normal') {
        super(name, establishmentYear, length);
        this.size = size;
    }

}

const elements = [];
elements.push(new Park('Central Park', 1909, 10.02, 4.69, 1501));
elements.push(new Park('Bark Park', 1999, 0.35, 0.15, 11));
elements.push(new Park('Park of Wonder', 1954, 2.34, 4.53, 198));
elements.push(new Street('Main Street', 1899, 18.08, 'huge'));
elements.push(new Street('Oak Street', 1925, 7.44));
elements.push(new Street('Wonder Way', 1945, 20.34, 'big'));
elements.push(new Street('Fern Way', 1975, 1.34, 'tiny'));
// console.log(elements);

// 1. Tree density of each park in the town (forumla: number of trees/park area)
elements.forEach((element) => {
    if (element instanceof Park) {
        const treeDensity = element.getTreeDensity().toFixed(2);
        console.log(`${element.name} has a tree density of ${treeDensity} trees per square mile.`);
    }
});

// 2. Average age of each town's park (forumla: sum of all ages/number of parks)
console.log('\n');
const ageMap = new Map();
ageMap.set('aggregateAge', 0);
ageMap.set('parkCount', 0);
for (let element of elements) {
    if (element instanceof Park) {
        ageMap.set('aggregateAge', ageMap.get('aggregateAge') + element.getAge());
        ageMap.set('parkCount', ageMap.get('parkCount') + 1);
    }
}
const aveageAge = ageMap.get('aggregateAge') / ageMap.get('parkCount');
console.log(`The average age of the town's parks is ${aveageAge} years.`);

// 3. The name of the park that has more than 1000 trees
console.log('\n');
for (let element of elements) {
    if (element instanceof Park && element.treeCount > 1000) {
        console.log(`${element.name}, with ${element.treeCount} trees, has more than 1000 trees.`)
    }
}

// 4. Total and average length of the town's streets
console.log('\n');
const lengthMap = new Map();
lengthMap.set('aggregateLength', 0);
lengthMap.set('streetCount', 0);
for (let element of elements) {
    if (element instanceof Street) {
        lengthMap.set('aggregateLength', lengthMap.get('aggregateLength') + element.length);
        lengthMap.set('streetCount', lengthMap.get('streetCount') + 1);
    }
}
const averageLength = (lengthMap.get('aggregateLength') / lengthMap.get('streetCount')).toFixed(2);
console.log(`The total length of the town's streets is ${lengthMap.get('aggregateLength')} miles.`);
console.log(`The average length of the town's streets is ${averageLength} miles.`);

// 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
console.log('\n');
elements.forEach((element) => {
    if (element instanceof Street) {
        console.log(`${element.name} has a size classification of ${element.size}.`);
    }
});
