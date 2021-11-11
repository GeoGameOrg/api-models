import { Player, Players
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
	
	export class Game {}
	export interface GameEvent {
		eventType: string
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
	export interface GameState {
		gameMode: GameMode
		game: Game
		players: { [player: string]: PlayerState };
	}
}




export namespace RallyGame {
	export class Game extends SomeGame.Game {}

	/**
	 * Role of a Player inside a team
	 */
	export enum TeamRole {
		Driver,
		Navigator,
		Unassigned
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

	/**
	 * State of a Team in a Game
	 */
	export class TeamState implements SomeGame.State {
		updatedAt: Date = new Date()
		// checkedPoints: 
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
	}
}

