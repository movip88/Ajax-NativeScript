"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Publicacion = /** @class */ (function () {
    function Publicacion(id, message, image, user) {
        if (id === void 0) { id = ""; }
        if (message === void 0) { message = ""; }
        if (image === void 0) { image = ""; }
        if (user === void 0) { user = new User_1.User(); }
        this.id = id;
        this.message = message;
        this.image = image;
        this.user = user;
    }
    return Publicacion;
}());
exports.Publicacion = Publicacion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVibGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQdWJsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5QjtJQU1JLHFCQUFZLEVBQVksRUFBRSxPQUFpQixFQUFDLEtBQWUsRUFBRSxJQUFxQjtRQUF0RSxtQkFBQSxFQUFBLE9BQVk7UUFBRSx3QkFBQSxFQUFBLFlBQWlCO1FBQUMsc0JBQUEsRUFBQSxVQUFlO1FBQUUscUJBQUEsRUFBQSxXQUFlLFdBQUksRUFBRTtRQUM5RSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xuXG5leHBvcnQgY2xhc3MgUHVibGljYWNpb257XG4gICAgaWQ6c3RyaW5nO1xuICAgIG1lc3NhZ2U6c3RyaW5nO1xuICAgIGltYWdlOnN0cmluZztcbiAgICB1c2VyOlVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDpzdHJpbmc9XCJcIiwgbWVzc2FnZTpzdHJpbmc9XCJcIixpbWFnZTpzdHJpbmc9XCJcIiwgdXNlcjpVc2VyPSBuZXcgVXNlcigpKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgfVxufSJdfQ==