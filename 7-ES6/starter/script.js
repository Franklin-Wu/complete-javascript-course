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

sizeMap = new Map();
sizeMap.set(1, 'tiny');
sizeMap.set(2, 'small');
sizeMap.set(3, 'normal');
sizeMap.set(4, 'big');
sizeMap.set(5, 'huge');

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
    constructor(name, establishmentYear, length, size = 3) {
        super(name, establishmentYear, length);
        this.size = size;
    }

}

const calculateSumAndAverage = (elements) => {
    const sum = elements.reduce((accumulator, current) => accumulator + current);
    return [sum, sum / elements.length];
};

const parks = [];
parks.push(new Park('Central Park', 1909, 10.02, 4.69, 1501));
parks.push(new Park('Bark Park', 1999, 0.35, 0.15, 11));
parks.push(new Park('Park of Wonder', 1954, 2.34, 4.53, 198));

const streets = [];
streets.push(new Street('Main Street', 1899, 18.08, 5));
streets.push(new Street('Oak Street', 1925, 7.44));
streets.push(new Street('Wonder Way', 1945, 20.34, 4));
streets.push(new Street('Fern Way', 1975, 1.34, 1));

// 1. Tree density of each park in the town (forumla: number of trees/park area)
parks.forEach((park) => {
    const treeDensity = park.getTreeDensity().toFixed(2);
    console.log(`${park.name} has a tree density of ${treeDensity} trees per square mile.`);
});

// 2. Average age of each town's park (forumla: sum of all ages/number of parks)
console.log('\n');
ages = parks.map(park => park.getAge());
[_, average] = calculateSumAndAverage(ages);
console.log(`The average age of the town's parks is ${average.toFixed(2)} years.`);

// 3. The name of the park that has more than 1000 trees
console.log('\n');
const park = parks.find(park => park.treeCount > 1000);
console.log(`${park.name}, with ${park.treeCount} trees, has more than 1000 trees.`)

// 4. Total and average length of the town's streets
console.log('\n');
lengths = streets.map(street => street.length);
[sum, average] = calculateSumAndAverage(lengths);
console.log(`The total length of the town's streets is ${sum.toFixed(2)} miles.`);
console.log(`The average length of the town's streets is ${average.toFixed(2)} miles.`);

// 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
console.log('\n');
streets.forEach(street => console.log(`${street.name} has a size classification of ${sizeMap.get(street.size)}.`));
