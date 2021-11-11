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
    class Game {
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
    interface GameState<Game, PlayerState> {
        gameMode: GameMode;
        game: Game;
        players: {
            [player: string]: PlayerState;
        };
    }
}
export declare namespace RallyGame {
    class Game extends SomeGame.Game {
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
    /**
     * State of a Team in a Game
     */
    class TeamState implements SomeGame.State {
        updatedAt: Date;
    }
    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    class GameState implements SomeGame.GameState<Game, PlayerState> {
        gameMode: GameMode;
        game: Game;
        players: {
            [playerId: string]: PlayerState;
        };
        teams: {
            [teamId: string]: TeamState;
        };
        constructor(game: RallyGame.Game);
    }
}
