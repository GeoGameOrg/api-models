import { SomeGame } from "."
import { Lobby } from "./lobby"

type Response = {
	success: boolean;
	data: any
	error: string | null;
}


class SomeResponse<DataType> implements Response {
	success: boolean
	data: (DataType | null)
	error: string | null

	constructor(success: boolean, data: DataType | null, error: string | null) {
		this.success = success
		this.data = data
		this.error = error
	}
}

/** 
 * RegisterIdResponse
 * Response Type for "id"
 */
export class RegisterIdResponse extends SomeResponse<string> {
	static failure(reason: string): RegisterIdResponse {
		return new RegisterIdResponse(false, null, reason)
	}

	static success(data: string): RegisterIdResponse {
		return new RegisterIdResponse(true, data, null)
	}
}

/** 
 * CreateLobbyResponse
 * Response Type for "createLobby"
 */
export class CreateLobbyResponse extends SomeResponse<Lobby> {
	static failure(reason: string): CreateLobbyResponse {
		return new CreateLobbyResponse(false, null, reason)
	}

	static success(lobby: Lobby): CreateLobbyResponse {
		return new CreateLobbyResponse(true, lobby, null)
	}
}

/** 
 * JoinLobbyResponse
 * Response Type for "joinLobby"
 */
export class JoinLobbyResponse extends CreateLobbyResponse { }


export class GameEventResponse extends SomeResponse<SomeGame.GameState> {
	static failure(reason: string): GameEventResponse {
		return new GameEventResponse(false, null, reason)
	}

	static success(gameState: SomeGame.GameState): GameEventResponse {
		return new GameEventResponse(true, gameState, null)
	}
}