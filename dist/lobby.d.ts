import { Player } from "./player";
import { GamePhase } from "./game";
declare class Lobby {
    id: string;
    players: Player[];
    gamePhase: GamePhase;
    settings: {
        [key: string]: any;
    };
    constructor(id: string | null, players: Player[], gamePhase: GamePhase, settings: {
        [key: string]: any;
    });
    static withHost(hostPlayer: Player, id: string): Lobby;
}
interface Lobbies {
    [key: string]: Lobby;
}
export { Lobby, Lobbies };
