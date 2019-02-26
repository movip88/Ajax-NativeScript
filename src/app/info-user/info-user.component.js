"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../model/User");
var UserService_1 = require("../services/UserService");
var appSettings = require("tns-core-modules/application-settings");
var dialogs = require("tns-core-modules/ui/dialogs");
var router_1 = require("nativescript-angular/router");
var InfoUserComponent = /** @class */ (function () {
    function InfoUserComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this.user = new User_1.User();
    }
    InfoUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser(appSettings.getString("idUser", "-50")).subscribe(function (resp) {
            var respuesta = resp["resposta"];
            if (respuesta != null) {
                _this.user = respuesta;
            }
            else {
                dialogs.alert({
                    title: resp["errorMessage"],
                    message: "Error al descargar tu información..., vuelve a iniciar sesion porfavor...",
                    okButtonText: "Aceptar"
                }).then(function () {
                    appSettings.clear();
                    _this.router.navigateByUrl("loggin");
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    InfoUserComponent.prototype.updateUser = function () {
        this._userService.updateUser(this.user).subscribe(function (resp) {
            var respuesta = resp["resposta"];
            if (respuesta) {
                dialogs.alert({
                    title: "Info",
                    message: "Usuario actualizado correctamente!!",
                    okButtonText: "OK"
                });
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
    InfoUserComponent.prototype.closeSession = function () {
        appSettings.clear();
        this.router.navigateByUrl("loggin");
    };
    InfoUserComponent.prototype.eliminarUsuario = function () {
        var _this = this;
        this._userService.delUser(this.user.id).subscribe(function (resp) {
            var respuesta = resp["resposta"];
            if (respuesta) {
                dialogs.alert({
                    title: "Info",
                    message: "Cuenta borrada correctamente",
                    okButtonText: "OK"
                }).then(function () {
                    appSettings.clear();
                    _this.router.navigateByUrl("register");
                });
            }
            else {
                dialogs.alert({
                    title: "Error al borrar",
                    message: resp["errorMessage"],
                    okButtonText: "Aceptar"
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    InfoUserComponent = __decorate([
        core_1.Component({
            selector: 'ns-info-user',
            templateUrl: './info-user.component.html',
            styleUrls: ['./info-user.component.css', "./../style.css"],
            moduleId: module.id,
            providers: [UserService_1.UserService]
        }),
        __metadata("design:paramtypes", [UserService_1.UserService, router_1.RouterExtensions])
    ], InfoUserComponent);
    return InfoUserComponent;
}());
exports.InfoUserComponent = InfoUserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby11c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8tdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXFDO0FBQ3JDLHVEQUFzRDtBQUN0RCxtRUFBcUU7QUFDckUscURBQXVEO0FBQ3ZELHNEQUErRDtBQVUvRDtJQUdFLDJCQUFvQixZQUF3QixFQUFVLE1BQXdCO1FBQTFELGlCQUFZLEdBQVosWUFBWSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFGOUUsU0FBSSxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7SUFFMkQsQ0FBQztJQUVuRixvQ0FBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN6RSxVQUFDLElBQUk7WUFDSCxJQUFJLFNBQVMsR0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsSUFBRyxTQUFTLElBQUksSUFBSSxFQUFDO2dCQUNuQixLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQzthQUN2QjtpQkFBSTtnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUMzQixPQUFPLEVBQUUsMkVBQTJFO29CQUNwRixZQUFZLEVBQUUsU0FBUztpQkFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDTixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQy9DLFVBQUMsSUFBSTtZQUNILElBQUksU0FBUyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQyxJQUFHLFNBQVMsRUFBQztnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNaLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxxQ0FBcUM7b0JBQzlDLFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUM7YUFDSjtpQkFBSTtnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNaLEtBQUssRUFBRSxvQkFBb0I7b0JBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUM3QixZQUFZLEVBQUUsU0FBUztpQkFDeEIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0UsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQUEsaUJBeUJDO1FBeEJDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUMvQyxVQUFDLElBQUk7WUFDSCxJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUMsSUFBRyxTQUFTLEVBQUM7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDWixLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsOEJBQThCO29CQUN2QyxZQUFZLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDTixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFJO2dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ1osS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7b0JBQzdCLFlBQVksRUFBRSxTQUFTO2lCQUN4QixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FDQSxDQUFDO0lBQ04sQ0FBQztJQWxGVSxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsZ0JBQWdCLENBQUM7WUFDMUQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBQyxDQUFDLHlCQUFXLENBQUM7U0FDeEIsQ0FBQzt5Q0FJaUMseUJBQVcsRUFBa0IseUJBQWdCO09BSG5FLGlCQUFpQixDQW1GN0I7SUFBRCx3QkFBQztDQUFBLEFBbkZELElBbUZDO0FBbkZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvVXNlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWluZm8tdXNlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmZvLXVzZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbmZvLXVzZXIuY29tcG9uZW50LmNzcycsIFwiLi8uLi9zdHlsZS5jc3NcIl0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHByb3ZpZGVyczpbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEluZm9Vc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlcjpVc2VyID0gbmV3IFVzZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmdldFVzZXIoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiaWRVc2VyXCIsIFwiLTUwXCIpKS5zdWJzY3JpYmUoXG4gICAgICAocmVzcCkgPT4ge1xuICAgICAgICBsZXQgcmVzcHVlc3RhID0gPFVzZXI+cmVzcFtcInJlc3Bvc3RhXCJdO1xuICAgICAgICBpZihyZXNwdWVzdGEgIT0gbnVsbCl7XG4gICAgICAgICAgdGhpcy51c2VyID0gcmVzcHVlc3RhO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiByZXNwW1wiZXJyb3JNZXNzYWdlXCJdLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFcnJvciBhbCBkZXNjYXJnYXIgdHUgaW5mb3JtYWNpw7NuLi4uLCB2dWVsdmUgYSBpbmljaWFyIHNlc2lvbiBwb3JmYXZvci4uLlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgYXBwU2V0dGluZ3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCJsb2dnaW5cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXIoKXtcbiAgICB0aGlzLl91c2VyU2VydmljZS51cGRhdGVVc2VyKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICAgKHJlc3ApID0+IHtcbiAgICAgICAgbGV0IHJlc3B1ZXN0YSA9IDxib29sZWFuPnJlc3BbXCJyZXNwb3N0YVwiXTtcbiAgICAgICAgaWYocmVzcHVlc3RhKXtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkluZm9cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXN1YXJpbyBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlISFcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IgYWwgcmVnaXN0cmFyXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwW1wiZXJyb3JNZXNzYWdlXCJdLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjbG9zZVNlc3Npb24oKXtcbiAgICBhcHBTZXR0aW5ncy5jbGVhcigpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCJsb2dnaW5cIik7XG4gIH1cblxuICBlbGltaW5hclVzdWFyaW8oKXtcbiAgICB0aGlzLl91c2VyU2VydmljZS5kZWxVc2VyKHRoaXMudXNlci5pZCkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3ApID0+IHtcbiAgICAgICAgbGV0IHJlc3B1ZXN0YSA9IDxib29sZWFuPnJlc3BbXCJyZXNwb3N0YVwiXTtcbiAgICAgICAgaWYocmVzcHVlc3RhKXtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkluZm9cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ3VlbnRhIGJvcnJhZGEgY29ycmVjdGFtZW50ZVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwicmVnaXN0ZXJcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IgYWwgYm9ycmFyXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwW1wiZXJyb3JNZXNzYWdlXCJdLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==