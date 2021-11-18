"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RallyGame = void 0;
const game_1 = require("../game");
const uuid_1 = require("uuid");
const __1 = require("../");
var RallyGame;
(function (RallyGame) {
    class Game {
        constructor() {
            this.gameMode = game_1.GameMode.RallyGame;
        }
    }
    RallyGame.Game = Game;
    // Phase the Game is in
    let Phase;
    (function (Phase) {
        Phase[Phase["Lobby"] = 0] = "Lobby";
        Phase[Phase["InGame"] = 1] = "InGame";
        Phase[Phase["Leaderboard"] = 2] = "Leaderboard";
    })(Phase = RallyGame.Phase || (RallyGame.Phase = {}));
    // Role of a Player inside a team
    let TeamRole;
    (function (TeamRole) {
        TeamRole[TeamRole["Driver"] = 0] = "Driver";
        TeamRole[TeamRole["Navigator"] = 1] = "Navigator";
        TeamRole[TeamRole["Unassigned"] = 2] = "Unassigned";
    })(TeamRole = RallyGame.TeamRole || (RallyGame.TeamRole = {}));
    // State of a Team in a Game
    class TeamState {
        constructor() {
            this.label = "Some Team";
            this.updatedAt = new Date();
            this.id = (0, uuid_1.v4)();
        }
    }
    RallyGame.TeamState = TeamState;
    // Type of events
    let GameEventType;
    (function (GameEventType) {
        GameEventType["Something"] = "Something";
        GameEventType["Sync"] = "Sync";
        GameEventType["CreateTeam"] = "CreateTeam";
        GameEventType["ChooseTeam"] = "ChooseTeam";
    })(GameEventType = RallyGame.GameEventType || (RallyGame.GameEventType = {}));
    class GameEvent {
        constructor(type) {
            this.type = type;
        }
    }
    RallyGame.GameEvent = GameEvent;
    class CreateTeamEvent {
        constructor() {
            this.type = GameEventType.CreateTeam;
            this.data = null;
        }
    }
    RallyGame.CreateTeamEvent = CreateTeamEvent;
    class ChooseTeamEvent {
        constructor() {
            this.type = GameEventType.CreateTeam;
            this.teamId = "";
            this.role = TeamRole.Driver;
        }
    }
    RallyGame.ChooseTeamEvent = ChooseTeamEvent;
    class ChooseRoleEvent {
        constructor() {
            this.type = GameEventType.CreateTeam;
            this.teamId = "";
            this.role = TeamRole.Driver;
        }
    }
    RallyGame.ChooseRoleEvent = ChooseRoleEvent;
    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    class GameState {
        constructor(game) {
            this.gameMode = game_1.GameMode.RallyGame;
            this.gamePhase = Phase.Lobby;
            this.players = {};
            this.teams = {};
            this.game = game;
        }
        //MARK: Should return instructions on what to update
        handleEvent(playerId, event, callback) {
            switch (event.type) {
                case GameEventType.CreateTeam:
                    callback(__1.GameEventResponse.success(this));
                    break;
                case GameEventType.ChooseTeam:
                    callback(handleChooseTeamEvent(this, this.players[playerId], event));
                    break;
                case GameEventType.Sync:
                    callback(__1.GameEventResponse.success(this));
                    break;
                default:
                    callback(__1.GameEventResponse.failure("Method not implemented"));
                    throw new Error("Method not implemented.");
            }
        }
    }
    RallyGame.GameState = GameState;
    function handleCreateTeam(gameState, player, event) {
        let team = new TeamState();
        gameState.teams[team.id] = team;
        return __1.GameEventResponse.success(gameState);
    }
    function handleChooseTeamEvent(gameState, player, event) {
        if (event.teamId !== undefined && gameState.teams[event.teamId] !== undefined) {
            let team = gameState.teams[event.teamId];
            switch (event.role) {
                case TeamRole.Driver:
                    if (team.driver === undefined) {
                        gameState.teams[event.teamId].driver = player.uuid;
                        return __1.GameEventResponse.success(gameState);
                    }
                    else {
                        return __1.GameEventResponse.failure("Role already assigned");
                    }
                case TeamRole.Navigator:
                    if (team.navigator === undefined) {
                        gameState.teams[event.teamId].navigator = player.uuid;
                        return __1.GameEventResponse.success(gameState);
                    }
                    else {
                        return __1.GameEventResponse.failure("Role already assigned");
                    }
                default:
                    return __1.GameEventResponse.failure("Unknown 'TeamRole'");
            }
        }
        else {
            return __1.GameEventResponse.failure("Team Not Found");
        }
    }
})(RallyGame = exports.RallyGame || (exports.RallyGame = {}));
