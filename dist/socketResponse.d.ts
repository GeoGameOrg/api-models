import { Lobby } from "./lobby";
declare type SocketResponse = {
    success: boolean;
    data: any;
    error: string | null;
};
declare class SomeSocketResponse<DataType> implements SocketResponse {
    success: boolean;
    data: (DataType | null);
    error: string | null;
    constructor(success: boolean, data: DataType | null, error: string | null);
}
/**
 * RegisterIdSocketResponse
 * Response Type for "id"
 */
declare class RegisterIdSocketResponse extends SomeSocketResponse<string> {
    static failure(reason: string): RegisterIdSocketResponse;
    static success(data: string): RegisterIdSocketResponse;
}
/**
 * CreateLobbySocketResponse
 * Response Type for "createLobby"
 */
declare class CreateLobbySocketResponse extends SomeSocketResponse<Lobby> {
    static failure(reason: string): CreateLobbySocketResponse;
    static success(lobby: Lobby): CreateLobbySocketResponse;
}
/**
 * JoinLobbySocketResponse
 * Response Type for "joinLobby"
 */
declare class JoinLobbySocketResponse extends CreateLobbySocketResponse {
}
export { RegisterIdSocketResponse, CreateLobbySocketResponse, JoinLobbySocketResponse };
