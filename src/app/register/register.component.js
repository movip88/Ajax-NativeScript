"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../model/User");
var UserService_1 = require("../services/UserService");
var router_1 = require("nativescript-angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var appSettings = require("tns-core-modules/application-settings");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this.nuevoUsuario = new User_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (appSettings.getString("idUser", "-50") != "-50") {
            this.router.navigateByUrl("tabBar");
        }
    };
    RegisterComponent.prototype.registrarse = function () {
        var _this = this;
        this._userService.registerUser(this.nuevoUsuario).subscribe(function (resp) {
            var respuesta = resp["resposta"];
            if (respuesta) {
                _this.router.navigateByUrl("loggin");
            }
            else {
                dialogs.alert({
                    title: "Error al registrar",
                    message: resp["errorMessage"],
                    okButtonText: "Aceptar"
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'ns-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css', './../style.css'],
            moduleId: module.id,
            providers: [UserService_1.UserService]
        }),
        __metadata("design:paramtypes", [UserService_1.UserService, router_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELHNDQUFxQztBQUNyQyx1REFBc0Q7QUFDdEQsc0RBQStEO0FBQy9ELHFEQUF1RDtBQUN2RCxtRUFBcUU7QUFTckU7SUFHRSwyQkFBb0IsWUFBMEIsRUFBVSxNQUF3QjtRQUE1RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBRmhGLGlCQUFZLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUVrRCxDQUFDO0lBRW5GLG9DQUFRLEdBQVI7UUFDRSxJQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQ3pELFVBQUMsSUFBSTtZQUNELElBQUksU0FBUyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQyxJQUFHLFNBQVMsRUFBQztnQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyQztpQkFBSTtnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNaLEtBQUssRUFBRSxvQkFBb0I7b0JBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUM3QixZQUFZLEVBQUUsU0FBUztpQkFDeEIsQ0FBQyxDQUFDO2FBQ0o7UUFDTCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQ0osQ0FBQztJQUNGLENBQUM7SUE3QlUsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLGdCQUFnQixDQUFDO1lBQ3pELFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUMsQ0FBQyx5QkFBVyxDQUFDO1NBQ3hCLENBQUM7eUNBSW1DLHlCQUFXLEVBQWtCLHlCQUFnQjtPQUhyRSxpQkFBaUIsQ0E4QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvVXNlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnLCAnLi8uLi9zdHlsZS5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgcHJvdmlkZXJzOltVc2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBudWV2b1VzdWFyaW86IFVzZXIgPSBuZXcgVXNlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJTZXJ2aWNlIDogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKXt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiaWRVc2VyXCIsIFwiLTUwXCIpICE9IFwiLTUwXCIpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcInRhYkJhclwiKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RyYXJzZSgpe1xuICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnJlZ2lzdGVyVXNlcih0aGlzLm51ZXZvVXN1YXJpbykuc3Vic2NyaWJlKFxuICAgICAgKHJlc3ApID0+IHtcbiAgICAgICAgICBsZXQgcmVzcHVlc3RhID0gPGJvb2xlYW4+cmVzcFtcInJlc3Bvc3RhXCJdO1xuICAgICAgICAgIGlmKHJlc3B1ZXN0YSl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwibG9nZ2luXCIpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGFsIHJlZ2lzdHJhclwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwW1wiZXJyb3JNZXNzYWdlXCJdLFxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICApO1xuICB9XG59XG4iXX0=