import { SomeGame } from ".";
import { Lobby } from "./lobby";
declare type Response = {
    success: boolean;
    data: any;
    error: string | null;
};
declare class SomeResponse<DataType> implements Response {
    success: boolean;
    data: (DataType | null);
    error: string | null;
    constructor(success: boolean, data: DataType | null, error: string | null);
}
/**
 * RegisterIdResponse
 * Response Type for "id"
 */
export declare class RegisterIdResponse extends SomeResponse<string> {
    static failure(reason: string): RegisterIdResponse;
    static success(data: string): RegisterIdResponse;
}
/**
 * CreateLobbyResponse
 * Response Type for "createLobby"
 */
export declare class CreateLobbyResponse extends SomeResponse<Lobby> {
    static failure(reason: string): CreateLobbyResponse;
    static success(lobby: Lobby): CreateLobbyResponse;
}
/**
 * JoinLobbyResponse
 * Response Type for "joinLobby"
 */
export declare class JoinLobbyResponse extends CreateLobbyResponse {
}
export declare class GameEventResponse extends SomeResponse<SomeGame.GameState> {
    static failure(reason: string): GameEventResponse;
    static success(gameState: SomeGame.GameState): GameEventResponse;
}
export {};
