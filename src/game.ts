import { GameEventResponse, Player, Players } from "."

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
	 * State of the Game (Combines, Player, Team, etc States)
	 */
	export class GameState {
		game: Game
		players: { [player: string]: Player };

		constructor(game: Game, players: { [player: string]: Player }) {
			this.game = game
			this.players = players
		}

		handleEvent(playerId: string, event: GameEvent, callback: (response: GameEventResponse) => void): void { }
	}
}



