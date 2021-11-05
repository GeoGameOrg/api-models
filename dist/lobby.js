"use strict";
exports.__esModule = true;
exports.Lobby = void 0;
var game_1 = require("./game");
var uuid_1 = require("uuid");
var Lobby = /** @class */ (function () {
    function Lobby(id, players, gamePhase, settings) {
        this.id = id !== null && id !== void 0 ? id : (0, uuid_1.v4)();
        this.players = players;
        this.gamePhase = gamePhase;
        this.settings = settings;
    }
    Lobby.withHost = function (hostPlayer, id) {
        return new Lobby(id, [hostPlayer], game_1.GamePhase.Lobby, {});
    };
    return Lobby;
}());
exports.Lobby = Lobby;
