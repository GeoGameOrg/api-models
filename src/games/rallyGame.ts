import { SomeGame, GameMode } from '../game'
import { v4 as uuidv4 } from 'uuid'
import { GameEventResponse, Player, Players } from "../"

export namespace RallyGame {
    export class Game implements SomeGame.Game {
        gameMode: GameMode = GameMode.RallyGame
    }

    // Phase the Game is in
    export enum Phase {
        Lobby,
        InGame,
        Leaderboard
    }

    // Role of a Player inside a team
    export enum TeamRole {
        Driver,
        Navigator,
        Unassigned
    }

    // State of a Team in a Game
    export class TeamState implements SomeGame.State {
        id: string
        label: string = "Some Team"
        driver?: string
        navigator?: string

        updatedAt: Date = new Date()

        constructor() {
            this.id = uuidv4()
        }
    }

    // Type of events
    export enum GameEventType {
        Something = "Something",
        Sync = "Sync",
        CreateTeam = "CreateTeam",
        ChooseTeam = "ChooseTeam",
    }

    export class GameEvent implements SomeGame.GameEvent {
        type: GameEventType
        data?: any

        constructor(type: GameEventType) {
            this.type = type
        }
    }

    export class CreateTeamEvent implements GameEvent {
        type: GameEventType = GameEventType.CreateTeam
        data = null
    }

    export class ChooseTeamEvent implements GameEvent {
        type: GameEventType = GameEventType.CreateTeam
        teamId: string = ""
        role: TeamRole = TeamRole.Driver
    }

    export class ChooseRoleEvent implements GameEvent {
        type: GameEventType = GameEventType.CreateTeam
        teamId: string = ""
        role: TeamRole = TeamRole.Driver
    }

    /**
     * State of the Game (Combines, Player, Team, etc States)
     */
    export class GameState implements SomeGame.GameState {
        gameMode: GameMode = GameMode.RallyGame
        game: Game
        gamePhase: Phase = Phase.Lobby
        players: { [playerId: string]: Player } = {}
        teams: { [teamId: string]: TeamState } = {}

        constructor(game: RallyGame.Game) {
            this.game = game
        }

        //MARK: Should return instructions on what to update
        handleEvent(playerId: string, event: GameEvent, callback: (response: GameEventResponse) => void): void {
            switch (event.type) {
                case GameEventType.CreateTeam:
                    callback(GameEventResponse.success(this))
                    break;

                case GameEventType.ChooseTeam:
                    callback(handleChooseTeamEvent(this, this.players[playerId], (event as ChooseTeamEvent)))
                    break;

                case GameEventType.Sync:
                    callback(GameEventResponse.success(this))
                    break;

                default:
                    callback(GameEventResponse.failure("Method not implemented"))
                    throw new Error("Method not implemented.");
            }
        }
    }

    function handleCreateTeam(gameState: RallyGame.GameState, player: Player, event: RallyGame.CreateTeamEvent): GameEventResponse {
        let team = new TeamState()
        gameState.teams[team.id] = team
        return GameEventResponse.success(gameState)
    }

    function handleChooseTeamEvent(gameState: RallyGame.GameState, player: Player, event: RallyGame.ChooseTeamEvent): GameEventResponse {
        if (event.teamId !== undefined && gameState.teams[event.teamId] !== undefined) {
            let team = gameState.teams[event.teamId]

            switch (event.role) {
                case TeamRole.Driver:
                    if (team.driver === undefined) {
                        gameState.teams[event.teamId].driver = player.uuid
                        return GameEventResponse.success(gameState)
                    } else {
                        return GameEventResponse.failure("Role already assigned")
                    }

                case TeamRole.Navigator:
                    if (team.navigator === undefined) {
                        gameState.teams[event.teamId].navigator = player.uuid
                        return GameEventResponse.success(gameState)
                    } else {
                        return GameEventResponse.failure("Role already assigned")
                    }

                default:
                    return GameEventResponse.failure("Unknown 'TeamRole'")
            }
        } else {
            return GameEventResponse.failure("Team Not Found")
        }
    }
}

