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
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

var QuizGame = (function(){
    var correctCount = 0;
    var questionCount = 0;

    function Question(question, answerChoices, correctAnswerIndex) {
        this.question = question;
        this.answerChoices = answerChoices;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    Question.prototype.logQuestionToConsole = function() {
        console.log('\n' + this.question);
        for (var i = 0; i < this.answerChoices.length; i++) {
            console.log(i, this.answerChoices[i]);
        }
    };

    Question.prototype.getAndCheckAnswer = function() {
        var answer = prompt('Enter your answer (0 - ' + (this.answerChoices.length - 1) + ') or Cancel to quit.');
        if (answer === null) {
            console.log('Did not answer this question.');
            return false;
        }
        var answerIndex = parseInt(answer);
        if (answerIndex === this.correctAnswerIndex) {
            correctCount += 1;
            console.log('Good job, that answer is correct!');
        } else {
            console.log('Sorry, that answer is incorrect.');
        }
        return true;
    };

    Question.prototype.logScoreToConsole = function() {
        console.log('current score: ' + correctCount + ' out of ' + questionCount);
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
        1
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

    var question4 = new Question(
        'On which Beatles album is the song \'Doctor Robert\'?',
        [
            'Help!',
            'Revolver',
            'Rubber Soul',
            'Sgt. Pepper\'s Lonely Hearts Club Band'
        ],
        1
    );

    var question5 = new Question(
        'For what musical instrument is Jethro Tull\'s Ian Anderson best known?',
        [
            'Bass',
            'Drums',
            'Guitar',
            'Flute'
        ],
        3
    );

    var question6 = new Question(
        'Who was the original drummer for the Beatles?',
        [
            'Ginger Baker',
            'Pete Best',
            'Ringo Starr',
            'Stuart Sutcliffe'
        ],
        1
    );

    var question7 = new Question(
        'On which Led Zeppelin album is the song \'Houses of the Holy\'?',
        [
            'Houses of the Holy',
            'Led Zeppelin III',
            'Led Zeppelin IV',
            'Physical Graffiti'
        ],
        3
    );

    var question8 = new Question(
        'Who played lead guitar for Queen',
        [
            'Brian Eno',
            'Brian May',
            'Jimmy Hendrix',
            'Jimmy Page'
        ],
        1
    );

    var question9 = new Question(
        'With which band has Jimmy Page _not_ recorded a studio album?',
        [
            'The Firm',
            'The Honeydrippers',
            'The Moody Blues',
            'The Yardbirds'
        ],
        2
    );

    var questions = [
        question0,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9
    ];

    function play() {
        while (true) {
            var randomIndex = Math.floor(Math.random() * questions.length);
            var question = questions[randomIndex];
            question.logQuestionToConsole();
            if (!question.getAndCheckAnswer()) {
                break;
            }
            questionCount += 1;
            question.logScoreToConsole();
        }
        var percentage = Math.round(100 * correctCount / questionCount);
        console.log('\nfinal score: ' + correctCount + ' out of ' + questionCount + ' = ' + percentage + '%');
    }

    return function() {
        play();
    };
})();

QuizGame();
