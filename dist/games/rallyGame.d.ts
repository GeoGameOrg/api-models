import { SomeGame, GameMode } from '../game';
import { GameEventResponse, Player } from "../";
export declare namespace RallyGame {
    class Game implements SomeGame.Game {
        gameMode: GameMode;
    }
    enum Phase {
        Lobby = 0,
        InGame = 1,
        Leaderboard = 2
    }
    enum TeamRole {
        Driver = 0,
        Navigator = 1,
        Unassigned = 2
    }
    class TeamState implements SomeGame.State {
        id: string;
        label: string;
        driver?: string;
        navigator?: string;
        updatedAt: Date;
        constructor();
    }
    enum GameEventType {
        Something = "Something",
        Sync = "Sync",
        CreateTeam = "CreateTeam",
        ChooseTeam = "ChooseTeam"
    }
    class GameEvent implements SomeGame.GameEvent {
        type: GameEventType;
        data?: any;
        constructor(type: GameEventType);
    }
    class CreateTeamEvent implements GameEvent {
        type: GameEventType;
        data: null;
    }
    class ChooseTeamEvent implements GameEvent {
        type: GameEventType;
        teamId: string;
        role: TeamRole;
    }
    class ChooseRoleEvent implements GameEvent {
        type: GameEventType;
        teamId: string;
        role: TeamRole;
    }
    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    class GameState implements SomeGame.GameState {
        gameMode: GameMode;
        game: Game;
        gamePhase: Phase;
        players: {
            [playerId: string]: Player;
        };
        teams: {
            [teamId: string]: TeamState;
        };
        constructor(game: RallyGame.Game);
        handleEvent(playerId: string, event: GameEvent, callback: (response: GameEventResponse) => void): void;
    }
}
