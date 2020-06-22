"use strict";
// /// <reference path="player.ts" />
// /// <reference path="game.ts" />
// // /// <reference path="./result.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var game_1 = require("./game");
var Helper = require("./utility");
var newGame;
document.getElementById("startGame").addEventListener("click", function () {
    var player = new player_1.Player();
    player.name = Helper.getValue("playerName");
    var problemCount = Number(Helper.getValue("problemCount"));
    var factor = Number(Helper.getValue("factor"));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById("calculate").addEventListener("click", function () {
    newGame.caculateScore();
});
// function startGame() {
//   let playerName: string | undefined = getInputValue("playername");
//   logPlayer(playerName);
//   postScore(100, playerName);
//   postScore(-5, playerName);
// }
// function logPlayer(name: string = "Player"): void {
//   arrowLogMessage(`New game starting for: ${name}`);
// }
// // function getInputValue(elementId: string): string | undefined {
// //   const inputElement: HTMLInputElement = <HTMLInputElement>(
// //     document.getElementById(elementId)
// //   );
// //   if (inputElement.value === "") {
// //     return undefined;
// //   } else {
// //     return inputElement.value;
// //   }
// // }
// function postScore(score: number, playerName?: string): void {
//   let logger: (value: string) => void;
//   if (score < 0) {
//     logger = logError;
//   } else {
//     logger = arrowLogMessage;
//   }
//   const scoreElement: HTMLElement | null = document.getElementById(
//     "posted-scores"
//   );
//   scoreElement!.innerText = `${score} - ${playerName}`;
//   logger(`Score: ${score}`);
// }
// document.getElementById("startGame")!.addEventListener("click", startGame);
// function logError(message: string): void {
//   console.error(message);
// }
// const arrowLogMessage = (message: string): void => console.log(message);
// // let myResult: Result = {
// //   playerName: "Rohit",
// //   score: 100,
// //   factor: 10,
// //   problemCount: 6,
// // };
// const firstPlayer: Player = new Player();
// firstPlayer.name = "Ramesh";
// arrowLogMessage(firstPlayer.formatName());
//# sourceMappingURL=app.js.map