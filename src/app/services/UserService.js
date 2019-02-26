"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.createRequestHeader = function () {
        var headers = new http_1.HttpHeaders({ "AuthKey": "my-key", "AuthToken": "my-token", "Content-Type": "application/json", });
        return headers;
    };
    UserService.prototype.registerUser = function (user) {
        var serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/users/";
        return this.http.post(serverUrl, user, { headers: this.createRequestHeader() });
    };
    UserService.prototype.updateUser = function (user) {
        var serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/users/" + user.id;
        return this.http.post(serverUrl, user, { headers: this.createRequestHeader() });
    };
    UserService.prototype.logUser = function (user) {
        var serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/autentificateUser/";
        return this.http.post(serverUrl, user, { headers: this.createRequestHeader() });
    };
    UserService.prototype.getUser = function (id) {
        var serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/user/" + id;
        return this.http.get(serverUrl, { headers: this.createRequestHeader() });
    };
    UserService.prototype.delUser = function (id) {
        var serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/user_delete/" + id;
        return this.http.get(serverUrl, { headers: this.createRequestHeader() });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFJL0Q7SUFFSSxxQkFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7SUFBRSxDQUFDO0lBRTlCLHlDQUFtQixHQUEzQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUMsa0JBQWtCLEdBQUUsQ0FBQyxDQUFDO1FBQ2hILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsSUFBUztRQUNsQixJQUFJLFNBQVMsR0FBRywyRUFBMkUsQ0FBQztRQUM1RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUNoQixJQUFJLFNBQVMsR0FBRywyRUFBMkUsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFTO1FBQ2IsSUFBSSxTQUFTLEdBQUcsdUZBQXVGLENBQUM7UUFDeEcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVM7UUFDYixJQUFJLFNBQVMsR0FBRywwRUFBMEUsR0FBQyxFQUFFLENBQUM7UUFDOUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBUztRQUNiLElBQUksU0FBUyxHQUFHLGlGQUFpRixHQUFDLEVBQUUsQ0FBQztRQUNyRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQWhDUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR2dCLGlCQUFVO09BRjFCLFdBQVcsQ0FpQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWwvVXNlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCl7fVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7IFwiQXV0aEtleVwiOlwibXkta2V5XCIsXCJBdXRoVG9rZW5cIjpcIm15LXRva2VuXCIsIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsfSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyVXNlcih1c2VyOlVzZXIpe1xuICAgICAgICBsZXQgc2VydmVyVXJsID0gXCJodHRwczovL21vdmlwODguMDAwd2ViaG9zdGFwcC5jb20vaW5zdGFncmFtX2NvcHkvYXBpX2Z1bmN0aW9ucy5waHAvdXNlcnMvXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChzZXJ2ZXJVcmwsIHVzZXIsIHtoZWFkZXJzOiB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKX0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVVzZXIodXNlcjpVc2VyKXtcbiAgICAgICAgbGV0IHNlcnZlclVybCA9IFwiaHR0cHM6Ly9tb3ZpcDg4LjAwMHdlYmhvc3RhcHAuY29tL2luc3RhZ3JhbV9jb3B5L2FwaV9mdW5jdGlvbnMucGhwL3VzZXJzL1wiK3VzZXIuaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChzZXJ2ZXJVcmwsIHVzZXIsIHtoZWFkZXJzOiB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKX0pO1xuICAgIH1cblxuICAgIGxvZ1VzZXIodXNlcjpVc2VyKXtcbiAgICAgICAgbGV0IHNlcnZlclVybCA9IFwiaHR0cHM6Ly9tb3ZpcDg4LjAwMHdlYmhvc3RhcHAuY29tL2luc3RhZ3JhbV9jb3B5L2FwaV9mdW5jdGlvbnMucGhwL2F1dGVudGlmaWNhdGVVc2VyL1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Qoc2VydmVyVXJsLCB1c2VyLCB7aGVhZGVyczogdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCl9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyKGlkOnN0cmluZyl7XG4gICAgICAgIGxldCBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vbW92aXA4OC4wMDB3ZWJob3N0YXBwLmNvbS9pbnN0YWdyYW1fY29weS9hcGlfZnVuY3Rpb25zLnBocC91c2VyL1wiK2lkO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChzZXJ2ZXJVcmwsIHtoZWFkZXJzOiB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKX0pO1xuICAgIH1cblxuICAgIGRlbFVzZXIoaWQ6c3RyaW5nKXtcbiAgICAgICAgbGV0IHNlcnZlclVybCA9IFwiaHR0cHM6Ly9tb3ZpcDg4LjAwMHdlYmhvc3RhcHAuY29tL2luc3RhZ3JhbV9jb3B5L2FwaV9mdW5jdGlvbnMucGhwL3VzZXJfZGVsZXRlL1wiK2lkO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChzZXJ2ZXJVcmwsIHtoZWFkZXJzOiB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKX0pO1xuICAgIH1cbn0iXX0=