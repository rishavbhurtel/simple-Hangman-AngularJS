var app=angular.module("HangmanApp",[]);
app.controller("GameController",['$scope',function($scope){
	
	var words = ["rat","cat","bat","mat"];
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
	$scope.guesses = 6;
	$scope.displayWord = '';
	$scope.input = {
		letter : ''
	}

	var selectRandomWord = function(){
		var index = Math.round(Math.random()*words.length);
		return words[index];
	}

	var newGame = function(){
		$scope.incorrectLettersChosen = [];
		$scope.correctLettersChosen=[];
		$scope.guesses = 6;
		$scope.displayWord = '';

		selectedWord = selectRandomWord();
		var tempDisplayWord = '';
		console.log(selectedWord);

		for (var i = 0; i < selectedWord.length; i++) {
			tempDisplayWord += '*';
		}
		console.log(tempDisplayWord)
		$scope.displayWord = tempDisplayWord;
	}

	newGame();
}])