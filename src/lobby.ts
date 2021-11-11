import { Player } from "./player";
import { SomeGame, GamePhase } from "./game";



class Lobby {
	id: string
	players: Player[];
	gamePhase: GamePhase;
	game: SomeGame.Game

	constructor(id: string, players: Player[], gamePhase: GamePhase, game: SomeGame.Game) {
		this.id = id
		this.players = players
		this.gamePhase = gamePhase
		this.game = game
	}

	static withHost(hostPlayer: Player, id: string, game: SomeGame.Game): Lobby {
		return new Lobby(id, [hostPlayer], GamePhase.Lobby, game)
	}
}

interface Lobbies {
	[key: string]: Lobby
}


export { Lobby, Lobbies }