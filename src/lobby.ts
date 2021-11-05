import { Player } from "./player";
import { GamePhase } from "./game";
import { v4 as uuidv4 } from "uuid";



class Lobby {
	id: string
	players: Player[];
	gamePhase: GamePhase;
	settings: { [key: string]: any };

	constructor(id: string | null, players: Player[], gamePhase: GamePhase, settings: { [key: string]: any }) {
		this.id = id ?? uuidv4()
		this.players = players
		this.gamePhase = gamePhase
		this.settings = settings
	}

	static withHost(hostPlayer: Player, id: string): Lobby {
		return new Lobby(id, [hostPlayer], GamePhase.Lobby, {})
	}
}

interface Lobbies {
	[key: string]: Lobby
}


export { Lobby, Lobbies }