"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobby = void 0;
const game_1 = require("./game");
const uuid_1 = require("uuid");
class Lobby {
    constructor(id, players, gamePhase, settings) {
        this.id = id !== null && id !== void 0 ? id : (0, uuid_1.v4)();
        this.players = players;
        this.gamePhase = gamePhase;
        this.settings = settings;
    }
    static withHost(hostPlayer, id) {
        return new Lobby(id, [hostPlayer], game_1.GamePhase.Lobby, {});
    }
}
exports.Lobby = Lobby;
