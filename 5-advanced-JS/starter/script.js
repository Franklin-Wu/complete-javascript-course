/*
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
*/

/////////////////////////////
// CODING MINI-CHALLENGE
// Rewrite the above interviewQuestion function as a closure.

/*
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
*/


/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

function Question(question, answerChoices, correctAnswerIndex) {
    this.question = question;
    this.answerChoices = answerChoices;
    this.correctAnswerIndex = correctAnswerIndex;
}

var question0 = new Question(
    'Which Beatle was born first?',
    [
        'George Harrison',
        'John Lennon',
        'Paul McCartney',
        'Ringo Starr'
    ],
    3
);

var question1 = new Question(
    'Who played drums for Led Zeppelin?',
    [
        'Ginger Baker',
        'John Bonham',
        'John Paul Jones',
        'Tom Baker'
    ],
    2
);

var question2 = new Question(
    'Which of the following is _not_ an album by The Who?',
    [
        'Who Are We',
        'Who Are You',
        'Who\'s Last',
        'Who\'s Next'
    ],
    0
);

var question3 = new Question(
    'What is the best selling studio album by The Rolling Stones?',
    [
        'Exile On Main Street',
        'Some Girls',
        'Sticky Fingers',
        'Tattoo You'
    ],
    1
);

var questions = [
    question0,
    question1,
    question2,
    question3
];

console.dir(questions);
