"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinLobbyResponse = exports.CreateLobbyResponse = exports.RegisterIdResponse = void 0;
class SomeResponse {
    constructor(success, data, error) {
        this.success = success;
        this.data = data;
        this.error = error;
    }
}
/**
 * RegisterIdResponse
 * Response Type for "id"
 */
class RegisterIdResponse extends SomeResponse {
    static failure(reason) {
        return new RegisterIdResponse(false, null, reason);
    }
    static success(data) {
        return new RegisterIdResponse(true, data, null);
    }
}
exports.RegisterIdResponse = RegisterIdResponse;
/**
 * CreateLobbyResponse
 * Response Type for "createLobby"
 */
class CreateLobbyResponse extends SomeResponse {
    static failure(reason) {
        return new CreateLobbyResponse(false, null, reason);
    }
    static success(lobby) {
        return new CreateLobbyResponse(true, lobby, null);
    }
}
exports.CreateLobbyResponse = CreateLobbyResponse;
/**
 * JoinLobbyResponse
 * Response Type for "joinLobby"
 */
class JoinLobbyResponse extends CreateLobbyResponse {
}
exports.JoinLobbyResponse = JoinLobbyResponse;
