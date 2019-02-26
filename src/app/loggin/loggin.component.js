"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../model/User");
var UserService_1 = require("../services/UserService");
var router_1 = require("nativescript-angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var appSettings = require("tns-core-modules/application-settings");
var LogginComponent = /** @class */ (function () {
    function LogginComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this.loginUsuario = new User_1.User();
    }
    LogginComponent.prototype.ngOnInit = function () {
    };
    LogginComponent.prototype.iniciaSesion = function () {
        var _this = this;
        this._userService.logUser(this.loginUsuario).subscribe(function (resp) {
            var respuesta = resp["resposta"];
            if (respuesta != null) {
                appSettings.setString("idUser", respuesta.id);
                _this.router.navigateByUrl("tabBar");
            }
            else {
                dialogs.alert({
                    title: "Error al hacer log in",
                    message: resp["errorMessage"],
                    okButtonText: "Aceptar"
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    LogginComponent = __decorate([
        core_1.Component({
            selector: 'ns-loggin',
            templateUrl: './loggin.component.html',
            styleUrls: ['./loggin.component.css', "./../style.css"],
            moduleId: module.id,
            providers: [UserService_1.UserService]
        }),
        __metadata("design:paramtypes", [UserService_1.UserService, router_1.RouterExtensions])
    ], LogginComponent);
    return LogginComponent;
}());
exports.LogginComponent = LogginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXFDO0FBQ3JDLHVEQUFzRDtBQUN0RCxzREFBK0Q7QUFDL0QscURBQXVEO0FBQ3ZELG1FQUFxRTtBQVNyRTtJQUdFLHlCQUFvQixZQUEwQixFQUFVLE1BQXdCO1FBQTVELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFGaEYsaUJBQVksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBRW9ELENBQUM7SUFFckYsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQ3BELFVBQUMsSUFBSTtZQUNELElBQUksU0FBUyxHQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxJQUFHLFNBQVMsSUFBSSxJQUFJLEVBQUM7Z0JBQ25CLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDckM7aUJBQUk7Z0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDWixLQUFLLEVBQUUsdUJBQXVCO29CQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFDN0IsWUFBWSxFQUFFLFNBQVM7aUJBQ3hCLENBQUMsQ0FBQzthQUNKO1FBQ0wsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBM0JVLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUM7WUFDdkQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBQyxDQUFDLHlCQUFXLENBQUM7U0FDeEIsQ0FBQzt5Q0FJbUMseUJBQVcsRUFBa0IseUJBQWdCO09BSHJFLGVBQWUsQ0E2QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvVXNlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1sb2dnaW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9nZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9nZ2luLmNvbXBvbmVudC5jc3MnLCBcIi4vLi4vc3R5bGUuY3NzXCJdLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dnaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2dpblVzdWFyaW86IFVzZXIgPSBuZXcgVXNlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJTZXJ2aWNlIDogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGluaWNpYVNlc2lvbigpe1xuICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmxvZ1VzZXIodGhpcy5sb2dpblVzdWFyaW8pLnN1YnNjcmliZShcbiAgICAgIChyZXNwKSA9PiB7XG4gICAgICAgICAgbGV0IHJlc3B1ZXN0YSA9IDxVc2VyPnJlc3BbXCJyZXNwb3N0YVwiXTtcbiAgICAgICAgICBpZihyZXNwdWVzdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJpZFVzZXJcIiwgcmVzcHVlc3RhLmlkKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCJ0YWJCYXJcIik7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IgYWwgaGFjZXIgbG9nIGluXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BbXCJlcnJvck1lc3NhZ2VcIl0sXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG4iXX0=