"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Publication_1 = require("../model/Publication");
var dialogs = require("tns-core-modules/ui/dialogs");
var PublicationService_1 = require("../services/PublicationService");
var appSettings = require("tns-core-modules/application-settings");
var SubirPubicacinComponent = /** @class */ (function () {
    function SubirPubicacinComponent(_publicationService) {
        this._publicationService = _publicationService;
        this.publicacion = new Publication_1.Publicacion();
    }
    SubirPubicacinComponent.prototype.ngOnInit = function () {
    };
    SubirPubicacinComponent.prototype.uploadPublication = function () {
        var _this = this;
        this.publicacion.user.id = appSettings.getString("idUser", "-50");
        this._publicationService.addPublication(this.publicacion).subscribe(function (resp) {
            var respuesta = resp["resposta"];
            if (respuesta) {
                dialogs.alert({
                    title: "Info",
                    message: "Publicación Subida correctamente",
                    okButtonText: "OK"
                }).then(function () {
                    _this.publicacion = new Publication_1.Publicacion();
                });
            }
            else {
                dialogs.alert({
                    title: "Error",
                    message: resp["errorMessage"],
                    okButtonText: "Aceptar"
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    SubirPubicacinComponent = __decorate([
        core_1.Component({
            selector: 'ns-subir-pubicacin',
            templateUrl: './subir-pubicacin.component.html',
            styleUrls: ['./subir-pubicacin.component.css', "./../style.css"],
            moduleId: module.id,
            providers: [PublicationService_1.PublicationService]
        }),
        __metadata("design:paramtypes", [PublicationService_1.PublicationService])
    ], SubirPubicacinComponent);
    return SubirPubicacinComponent;
}());
exports.SubirPubicacinComponent = SubirPubicacinComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViaXItcHViaWNhY2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YmlyLXB1YmljYWNpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsb0RBQW1EO0FBQ25ELHFEQUF1RDtBQUN2RCxxRUFBb0U7QUFDcEUsbUVBQXFFO0FBVXJFO0lBR0UsaUNBQW9CLG1CQUFzQztRQUF0Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBRjFELGdCQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFFa0IsQ0FBQztJQUUvRCwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG1EQUFpQixHQUFqQjtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUNqRSxVQUFDLElBQUk7WUFDSCxJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUMsSUFBRyxTQUFTLEVBQUM7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDWixLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsa0NBQWtDO29CQUMzQyxZQUFZLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDTixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFJO2dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ1osS0FBSyxFQUFFLE9BQU87b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7b0JBQzdCLFlBQVksRUFBRSxTQUFTO2lCQUN4QixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQWpDVSx1QkFBdUI7UUFQbkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxnQkFBZ0IsQ0FBQztZQUNoRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsdUNBQWtCLENBQUM7U0FDaEMsQ0FBQzt5Q0FJd0MsdUNBQWtCO09BSC9DLHVCQUF1QixDQWtDbkM7SUFBRCw4QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQdWJsaWNhY2lvbiB9IGZyb20gJy4uL21vZGVsL1B1YmxpY2F0aW9uJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUHVibGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvUHVibGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvVXNlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXN1YmlyLXB1YmljYWNpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWJpci1wdWJpY2FjaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWJpci1wdWJpY2FjaW4uY29tcG9uZW50LmNzcycsIFwiLi8uLi9zdHlsZS5jc3NcIl0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHByb3ZpZGVyczogW1B1YmxpY2F0aW9uU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU3ViaXJQdWJpY2FjaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWNhY2lvbjpQdWJsaWNhY2lvbiA9IG5ldyBQdWJsaWNhY2lvbigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3B1YmxpY2F0aW9uU2VydmljZTpQdWJsaWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdXBsb2FkUHVibGljYXRpb24oKXtcbiAgICB0aGlzLnB1YmxpY2FjaW9uLnVzZXIuaWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJpZFVzZXJcIiwgXCItNTBcIik7XG4gICAgdGhpcy5fcHVibGljYXRpb25TZXJ2aWNlLmFkZFB1YmxpY2F0aW9uKHRoaXMucHVibGljYWNpb24pLnN1YnNjcmliZShcbiAgICAgIChyZXNwKSA9PiB7XG4gICAgICAgIGxldCByZXNwdWVzdGEgPSA8Ym9vbGVhbj5yZXNwW1wicmVzcG9zdGFcIl07XG4gICAgICAgIGlmKHJlc3B1ZXN0YSl7XG4gICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJJbmZvXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlB1YmxpY2FjacOzbiBTdWJpZGEgY29ycmVjdGFtZW50ZVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHVibGljYWNpb24gPSBuZXcgUHVibGljYWNpb24oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcFtcImVycm9yTWVzc2FnZVwiXSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=