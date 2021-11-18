"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RallyGame = exports.SomeGame = exports.GameMode = exports.GamePhase = void 0;
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
        handleEvent(event) { }
    }
    SomeGame.GameState = GameState;
})(SomeGame = exports.SomeGame || (exports.SomeGame = {}));
var RallyGame;
(function (RallyGame) {
    class Game {
        constructor() {
            this.gameMode = GameMode.RallyGame;
        }
    }
    RallyGame.Game = Game;
    /**
     * Role of a Player inside a team
     */
    let TeamRole;
    (function (TeamRole) {
        TeamRole[TeamRole["Driver"] = 0] = "Driver";
        TeamRole[TeamRole["Navigator"] = 1] = "Navigator";
        TeamRole[TeamRole["Unassigned"] = 2] = "Unassigned";
    })(TeamRole = RallyGame.TeamRole || (RallyGame.TeamRole = {}));
    /**
     * State of a Team in a Game
     */
    class TeamState {
        constructor() {
            this.updatedAt = new Date();
            // checkedPoints: 
        }
    }
    RallyGame.TeamState = TeamState;
    /**
     * State of a Player in a Game
     */
    class PlayerState {
        constructor(teamId) {
            this.updatedAt = new Date();
            this.teamId = teamId;
            this.role = TeamRole.Unassigned;
        }
        updateTeam(teamId) {
            this.updatedAt = new Date();
            this.teamId = teamId;
        }
        updateRole(role) {
            this.updatedAt = new Date();
            this.role = role;
        }
    }
    RallyGame.PlayerState = PlayerState;
    let GameEventType;
    (function (GameEventType) {
        GameEventType["something"] = "something";
        GameEventType["Sync"] = "sync";
    })(GameEventType = RallyGame.GameEventType || (RallyGame.GameEventType = {}));
    class GameEvent {
        constructor(type) {
            this.type = type;
        }
    }
    RallyGame.GameEvent = GameEvent;
    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    class GameState {
        constructor(game) {
            this.gameMode = GameMode.RallyGame;
            this.players = {};
            this.teams = {};
            this.game = game;
        }
        //MARK: Should return instructions on what to update
        handleEvent(event) {
            switch (event.type) {
                case GameEventType.Sync:
                    console.log("Sync Event was triggered");
                    break;
                default:
                    throw new Error("Method not implemented.");
            }
        }
    }
    RallyGame.GameState = GameState;
})(RallyGame = exports.RallyGame || (exports.RallyGame = {}));
