import { Player } from "./player";
import { SomeGame, GamePhase } from "./game";
declare class Lobby {
    id: string;
    players: Player[];
    gamePhase: GamePhase;
    game: SomeGame.GameState;
    constructor(id: string, players: Player[], gamePhase: GamePhase, game: SomeGame.GameState);
    static withHost(hostPlayer: Player, id: string, game: SomeGame.GameState): Lobby;
}
interface Lobbies {
    [key: string]: Lobby;
}
export { Lobby, Lobbies };
