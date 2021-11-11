"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lobby = void 0;
const game_1 = require("./game");
class Lobby {
    constructor(id, players, gamePhase, game) {
        this.id = id;
        this.players = players;
        this.gamePhase = gamePhase;
        this.game = game;
    }
    static withHost(hostPlayer, id, game) {
        return new Lobby(id, [hostPlayer], game_1.GamePhase.Lobby, game);
    }
}
exports.Lobby = Lobby;
