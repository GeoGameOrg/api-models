"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.JoinLobbySocketResponse = exports.CreateLobbySocketResponse = exports.RegisterIdSocketResponse = void 0;
var SomeSocketResponse = /** @class */ (function () {
    function SomeSocketResponse(success, data, error) {
        this.success = success;
        this.data = data;
        this.error = error;
    }
    return SomeSocketResponse;
}());
/**
 * RegisterIdSocketResponse
 * Response Type for "id"
 */
var RegisterIdSocketResponse = /** @class */ (function (_super) {
    __extends(RegisterIdSocketResponse, _super);
    function RegisterIdSocketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegisterIdSocketResponse.failure = function (reason) {
        return new RegisterIdSocketResponse(false, null, reason);
    };
    RegisterIdSocketResponse.success = function (data) {
        return new RegisterIdSocketResponse(true, data, null);
    };
    return RegisterIdSocketResponse;
}(SomeSocketResponse));
exports.RegisterIdSocketResponse = RegisterIdSocketResponse;
/**
 * CreateLobbySocketResponse
 * Response Type for "createLobby"
 */
var CreateLobbySocketResponse = /** @class */ (function (_super) {
    __extends(CreateLobbySocketResponse, _super);
    function CreateLobbySocketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateLobbySocketResponse.failure = function (reason) {
        return new CreateLobbySocketResponse(false, null, reason);
    };
    CreateLobbySocketResponse.success = function (lobby) {
        return new CreateLobbySocketResponse(true, lobby, null);
    };
    return CreateLobbySocketResponse;
}(SomeSocketResponse));
exports.CreateLobbySocketResponse = CreateLobbySocketResponse;
/**
 * JoinLobbySocketResponse
 * Response Type for "joinLobby"
 */
var JoinLobbySocketResponse = /** @class */ (function (_super) {
    __extends(JoinLobbySocketResponse, _super);
    function JoinLobbySocketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JoinLobbySocketResponse;
}(CreateLobbySocketResponse));
exports.JoinLobbySocketResponse = JoinLobbySocketResponse;
