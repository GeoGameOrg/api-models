import { Player } from "./player";
import { SomeGame, GamePhase } from "./game";



class Lobby {
	id: string
	players: Player[];
	gamePhase: GamePhase;
	game: SomeGame.GameState

	constructor(id: string, players: Player[], gamePhase: GamePhase, game: SomeGame.GameState) {
		this.id = id
		this.players = players
		this.gamePhase = gamePhase
		this.game = game
	}

	static withHost(hostPlayer: Player, id: string, game: SomeGame.GameState): Lobby {
		return new Lobby(id, [hostPlayer], GamePhase.Lobby, game)
	}
}

interface Lobbies {
	[key: string]: Lobby
}


export { Lobby, Lobbies }