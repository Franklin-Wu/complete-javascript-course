/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1 (or 2 1's in challenge 3), all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var winningScoreInput = document.getElementById('winning-score-input');
var winningScore = winningScoreInput.value;

var scores, roundScore, activePlayer, gamePlaying, previousDiceScores;

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousDiceScores = [0, 0];

    for (var i = 0; i < 2; i++) {
        updatePlayerScoreUI(i);
        document.getElementById('die-' + i).style.display = 'none';
        document.getElementById('current-' + i).textContent = '0';
        document.getElementById('name-' + i).textContent = 'Player ' + (i + 1);
        document.querySelector('.player-' + i + '-panel').classList.remove('winner');
        document.querySelector('.player-' + i + '-panel').classList.remove('active');
    }
    document.querySelector('.player-0-panel').classList.add('active');
}

function updatePlayerScoreUI(player) {
    document.querySelector('#score-' + player).textContent = scores[player];
}

function rollOneDie() {
    // 1. Random number
    return Math.floor(Math.random() * 6) + 1;
}

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        var dice = 0;

        // 2. Display the result
        for (var i = 0; i < 2; i++) {
            // Challenge 3. Add another dice to the game, so that there are two
            // dices now. The player looses his current score when one of them
            // is a 1. (Hint: you will need CSS to position the second dice, so
            // take a look at the CSS code for the first one.)
            var dieValue = rollOneDie();
            var diceDOM = document.getElementById('die-' + i);
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dieValue + '.png';
            dice += dieValue;
        }

        if (dice === 6 && previousDiceScores[activePlayer] === 6) {
            // Challenge 1. If this round score and the previous round score
            // were 6's, set the player's score to 0 and go to the next player.
            scores[activePlayer] = 0;
            updatePlayerScoreUI(activePlayer);
            nextPlayer();
        } else if (dice === 2) {
            // Next player
            nextPlayer();
        } else {
            // 3. Update the round score IF the rolled number was NOT a 1
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousDiceScores[activePlayer] = dice;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        updatePlayerScoreUI(activePlayer);

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelectorAll('.dice').forEach(function(element) {
                element.style.display = 'none';
            });
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

// Challenge 2. Read the winning score from an HTML input element.
winningScoreInput.addEventListener('input', function() {
    winningScore = winningScoreInput.value;
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousDiceScores[activePlayer] = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    //document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
