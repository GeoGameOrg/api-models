import { GameEventResponse, Player, Players
 } from "."
export enum GamePhase {
	Lobby,
	Ingame,
	End
}

export enum GameMode {
	RallyGame,
	None
}

export namespace SomeGame {
	
	export interface Game {
		gameMode: GameMode
	}

	export interface GameEvent {
		type: string
	}

	/**
	 * Base Interface for States
	 */
	export interface State {
		updatedAt: Date
	}

	/**
	 * State of a Player in a Game
	 */
	export interface PlayerState extends State {
	}

	/**
	 * State of the Game (Combines, Player, Team, etc States)
	 */
	export class GameState {
		game: Game
		players: { [player: string]: PlayerState };

		constructor(game: Game, players: { [player: string]: PlayerState }) {
			this.game = game
			this.players = players
		}

		handleEvent(event: GameEvent) {}
	}
}




export namespace RallyGame {
	export class Game implements SomeGame.Game {
		gameMode: GameMode = GameMode.RallyGame
	}

	/**
	 * Role of a Player inside a team
	 */
	export enum TeamRole {
		Driver,
		Navigator,
		Unassigned
	}

	/**
	 * State of a Team in a Game
	 */
	 export class TeamState implements SomeGame.State {
		updatedAt: Date = new Date()
		// checkedPoints: 
	}
	
	/**
	 * State of a Player in a Game
	 */
	export class PlayerState implements SomeGame.PlayerState {
		updatedAt: Date
		teamId: string
		role: TeamRole

		constructor(teamId: string) {
			this.updatedAt = new Date()
			this.teamId = teamId
			this.role = TeamRole.Unassigned
		}

		updateTeam(teamId: string) {
			this.updatedAt = new Date()
			this.teamId = teamId
		}

		updateRole(role: TeamRole) {
			this.updatedAt = new Date()
			this.role = role
		}
	}

	export enum  GameEventType {
		something = "something",
		Sync = "sync"
	}

	export class GameEvent implements SomeGame.GameEvent {
		type: GameEventType

		constructor(type: GameEventType) {
			this.type = type
		}
	}
	
	/**
	 * State of the Game (Combines, Player, Team, etc States)
	 */
	export class GameState implements SomeGame.GameState {
		gameMode: GameMode = GameMode.RallyGame
		game: Game
		players: { [playerId: string]: PlayerState } = {}
		teams: { [teamId: string]: TeamState } = {}

		constructor(game: RallyGame.Game) {
			this.game = game
		}

		//MARK: Should return instructions on what to update
		handleEvent(event: GameEvent): void {
			switch (event.type) {
				case GameEventType.Sync:
					console.log("Sync Event was triggered")
					break;
				default:
					throw new Error("Method not implemented.");
			}
		}
	}
}

