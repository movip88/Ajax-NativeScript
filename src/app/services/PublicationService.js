"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PublicationService = /** @class */ (function () {
    function PublicationService(http) {
        this.http = http;
    }
    PublicationService.prototype.createRequestHeader = function () {
        var headers = new http_1.HttpHeaders({ "AuthKey": "my-key", "AuthToken": "my-token", "Content-Type": "application/json", });
        return headers;
    };
    PublicationService.prototype.addPublication = function (publicacion) {
        var serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/publication/";
        return this.http.post(serverUrl, publicacion, { headers: this.createRequestHeader() });
    };
    PublicationService.prototype.getPublication = function () {
        var serverUrl = "https://movip88.000webhostapp.com/instagram_copy/api_functions.php/publication/";
        return this.http.get(serverUrl, { headers: this.createRequestHeader() });
    };
    PublicationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PublicationService);
    return PublicationService;
}());
exports.PublicationService = PublicationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVibGljYXRpb25TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHVibGljYXRpb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUkvRDtJQUVJLDRCQUFvQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztJQUFFLENBQUM7SUFFOUIsZ0RBQW1CLEdBQTNCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFFLGNBQWMsRUFBQyxrQkFBa0IsR0FBRSxDQUFDLENBQUM7UUFDaEgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELDJDQUFjLEdBQWQsVUFBZSxXQUF1QjtRQUNsQyxJQUFJLFNBQVMsR0FBRyxpRkFBaUYsQ0FBQztRQUNsRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCwyQ0FBYyxHQUFkO1FBQ0ksSUFBSSxTQUFTLEdBQUcsaUZBQWlGLENBQUM7UUFDbEcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFqQlEsa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7eUNBR2dCLGlCQUFVO09BRjFCLGtCQUFrQixDQWtCOUI7SUFBRCx5QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFB1YmxpY2FjaW9uIH0gZnJvbSBcIi4uL21vZGVsL1B1YmxpY2F0aW9uXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQdWJsaWNhdGlvblNlcnZpY2V7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCl7fVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7IFwiQXV0aEtleVwiOlwibXkta2V5XCIsXCJBdXRoVG9rZW5cIjpcIm15LXRva2VuXCIsIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsfSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGFkZFB1YmxpY2F0aW9uKHB1YmxpY2FjaW9uOlB1YmxpY2FjaW9uKXtcbiAgICAgICAgbGV0IHNlcnZlclVybCA9IFwiaHR0cHM6Ly9tb3ZpcDg4LjAwMHdlYmhvc3RhcHAuY29tL2luc3RhZ3JhbV9jb3B5L2FwaV9mdW5jdGlvbnMucGhwL3B1YmxpY2F0aW9uL1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Qoc2VydmVyVXJsLCBwdWJsaWNhY2lvbiwge2hlYWRlcnM6IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpfSk7XG4gICAgfVxuXG4gICAgZ2V0UHVibGljYXRpb24oKXtcbiAgICAgICAgbGV0IHNlcnZlclVybCA9IFwiaHR0cHM6Ly9tb3ZpcDg4LjAwMHdlYmhvc3RhcHAuY29tL2luc3RhZ3JhbV9jb3B5L2FwaV9mdW5jdGlvbnMucGhwL3B1YmxpY2F0aW9uL1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChzZXJ2ZXJVcmwsIHtoZWFkZXJzOiB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKX0pO1xuICAgIH1cbn0iXX0=