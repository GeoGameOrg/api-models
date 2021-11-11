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
     * State of a Player in a Game
     */
    interface PlayerState extends State {
    }
    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    class GameState {
        game: Game;
        players: {
            [player: string]: PlayerState;
        };
        constructor(game: Game, players: {
            [player: string]: PlayerState;
        });
        handleEvent(event: GameEvent): void;
    }
}
export declare namespace RallyGame {
    class Game implements SomeGame.Game {
        gameMode: GameMode;
    }
    /**
     * Role of a Player inside a team
     */
    enum TeamRole {
        Driver = 0,
        Navigator = 1,
        Unassigned = 2
    }
    /**
     * State of a Team in a Game
     */
    class TeamState implements SomeGame.State {
        updatedAt: Date;
    }
    /**
     * State of a Player in a Game
     */
    class PlayerState implements SomeGame.PlayerState {
        updatedAt: Date;
        teamId: string;
        role: TeamRole;
        constructor(teamId: string);
        updateTeam(teamId: string): void;
        updateRole(role: TeamRole): void;
    }
    enum GameEventType {
        something = "something",
        Sync = "sync"
    }
    class GameEvent implements SomeGame.GameEvent {
        type: GameEventType;
        constructor(type: GameEventType);
    }
    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    class GameState implements SomeGame.GameState {
        gameMode: GameMode;
        game: Game;
        players: {
            [playerId: string]: PlayerState;
        };
        teams: {
            [teamId: string]: TeamState;
        };
        constructor(game: RallyGame.Game);
        handleEvent(event: GameEvent): void;
    }
}
