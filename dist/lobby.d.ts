import { Player } from "./player";
import { SomeGame, GamePhase } from "./game";
declare class Lobby {
    id: string;
    players: Player[];
    gamePhase: GamePhase;
    game: SomeGame.Game;
    constructor(id: string, players: Player[], gamePhase: GamePhase, game: SomeGame.Game);
    static withHost(hostPlayer: Player, id: string, game: SomeGame.Game): Lobby;
}
interface Lobbies {
    [key: string]: Lobby;
}
export { Lobby, Lobbies };
