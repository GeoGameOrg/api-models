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
exports.JoinLobbyResponse = exports.CreateLobbyResponse = exports.RegisterIdResponse = void 0;
var SomeResponse = /** @class */ (function () {
    function SomeResponse(success, data, error) {
        this.success = success;
        this.data = data;
        this.error = error;
    }
    return SomeResponse;
}());
/**
 * RegisterIdResponse
 * Response Type for "id"
 */
var RegisterIdResponse = /** @class */ (function (_super) {
    __extends(RegisterIdResponse, _super);
    function RegisterIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegisterIdResponse.failure = function (reason) {
        return new RegisterIdResponse(false, null, reason);
    };
    RegisterIdResponse.success = function (data) {
        return new RegisterIdResponse(true, data, null);
    };
    return RegisterIdResponse;
}(SomeResponse));
exports.RegisterIdResponse = RegisterIdResponse;
/**
 * CreateLobbyResponse
 * Response Type for "createLobby"
 */
var CreateLobbyResponse = /** @class */ (function (_super) {
    __extends(CreateLobbyResponse, _super);
    function CreateLobbyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateLobbyResponse.failure = function (reason) {
        return new CreateLobbyResponse(false, null, reason);
    };
    CreateLobbyResponse.success = function (lobby) {
        return new CreateLobbyResponse(true, lobby, null);
    };
    return CreateLobbyResponse;
}(SomeResponse));
exports.CreateLobbyResponse = CreateLobbyResponse;
/**
 * JoinLobbyResponse
 * Response Type for "joinLobby"
 */
var JoinLobbyResponse = /** @class */ (function (_super) {
    __extends(JoinLobbyResponse, _super);
    function JoinLobbyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JoinLobbyResponse;
}(CreateLobbyResponse));
exports.JoinLobbyResponse = JoinLobbyResponse;
