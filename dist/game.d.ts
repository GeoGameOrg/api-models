import { GameEventResponse, Player } from ".";
export declare enum GamePhase {
    Lobby = 0,
    Ingame = 1,
    End = 2
}
export declare enum GameMode {
    RallyGame = 0,
    None = 1
}
export declare namespace SomeGame {
    interface Game {
        gameMode: GameMode;
    }
    interface GameEvent {
        type: string;
    }
    /**
     * Base Interface for States
     */
    interface State {
        updatedAt: Date;
    }
    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    class GameState {
        game: Game;
        players: {
            [player: string]: Player;
        };
        constructor(game: Game, players: {
            [player: string]: Player;
        });
        handleEvent(playerId: string, event: GameEvent, callback: (response: GameEventResponse) => void): void;
    }
}
