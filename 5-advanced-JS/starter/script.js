function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');

/////////////////////////////
// CODING MINI-CHALLENGE
// Rewrite the above interviewQuestion function as a closure.

function add0() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();
    return counter;
}

console.dir(add0());
console.dir(add0());
console.dir(add0());

var add = (function () {
    var counter = 0;
    return function() {
        counter += 1; return counter
    }
})();

console.dir(add());
console.dir(add());
console.dir(add());

var interviewQuestion2 = function(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion2 = interviewQuestion2('teacher');
var designerQuestion2 = interviewQuestion2('designer');

teacherQuestion2('John');
designerQuestion2('John');
designerQuestion2('jane');
designerQuestion2('Mark');
designerQuestion2('Mike');

interviewQuestion2('teacher')('Mark');
