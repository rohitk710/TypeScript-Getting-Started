"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreBoard = void 0;
var ScoreBoard = /** @class */ (function () {
    function ScoreBoard() {
        this.results = [];
    }
    ScoreBoard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    ScoreBoard.prototype.updateScoreBoard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return ScoreBoard;
}());
exports.ScoreBoard = ScoreBoard;
//# sourceMappingURL=scoreboard.js.map