"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeGame = exports.GameMode = exports.GamePhase = void 0;
var GamePhase;
(function (GamePhase) {
    GamePhase[GamePhase["Lobby"] = 0] = "Lobby";
    GamePhase[GamePhase["Ingame"] = 1] = "Ingame";
    GamePhase[GamePhase["End"] = 2] = "End";
})(GamePhase = exports.GamePhase || (exports.GamePhase = {}));
var GameMode;
(function (GameMode) {
    GameMode[GameMode["RallyGame"] = 0] = "RallyGame";
    GameMode[GameMode["None"] = 1] = "None";
})(GameMode = exports.GameMode || (exports.GameMode = {}));
var SomeGame;
(function (SomeGame) {
    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    class GameState {
        constructor(game, players) {
            this.game = game;
            this.players = players;
        }
        handleEvent(playerId, event, callback) { }
    }
    SomeGame.GameState = GameState;
})(SomeGame = exports.SomeGame || (exports.SomeGame = {}));
