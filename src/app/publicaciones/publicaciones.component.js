"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PublicationService_1 = require("../services/PublicationService");
var timer_1 = require("tns-core-modules/timer");
var PublicacionesComponent = /** @class */ (function () {
    function PublicacionesComponent(_publicationService) {
        this._publicationService = _publicationService;
        this.publicaciones = [];
    }
    PublicacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        timer_1.setInterval(function () {
            _this.updateProducts();
        }, 1000);
    };
    PublicacionesComponent.prototype.updateProducts = function () {
        var _this = this;
        this._publicationService.getPublication().subscribe(function (resp) {
            _this.publicaciones = resp["resposta"];
        }, function (error) {
            console.log(error);
        });
    };
    PublicacionesComponent = __decorate([
        core_1.Component({
            selector: 'ns-publicaciones',
            templateUrl: './publicaciones.component.html',
            styleUrls: ['./publicaciones.component.css'],
            moduleId: module.id,
            providers: [PublicationService_1.PublicationService]
        }),
        __metadata("design:paramtypes", [PublicationService_1.PublicationService])
    ], PublicacionesComponent);
    return PublicacionesComponent;
}());
exports.PublicacionesComponent = PublicacionesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljYWNpb25lcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdWJsaWNhY2lvbmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBb0U7QUFFcEUsZ0RBQW9FO0FBU3BFO0lBR0UsZ0NBQW9CLG1CQUFzQztRQUF0Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBRjFELGtCQUFhLEdBQWlCLEVBQUUsQ0FBQztJQUU2QixDQUFDO0lBRS9ELHlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLG1CQUFXLENBQUM7WUFDVixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELCtDQUFjLEdBQWQ7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQ2pELFVBQUMsSUFBSTtZQUNILEtBQUksQ0FBQyxhQUFhLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFwQlUsc0JBQXNCO1FBUGxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7WUFDNUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHVDQUFrQixDQUFDO1NBQ2hDLENBQUM7eUNBSXdDLHVDQUFrQjtPQUgvQyxzQkFBc0IsQ0FxQmxDO0lBQUQsNkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHVibGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvUHVibGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFB1YmxpY2FjaW9uIH0gZnJvbSAnLi4vbW9kZWwvUHVibGljYXRpb24nO1xuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1wdWJsaWNhY2lvbmVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3B1YmxpY2FjaW9uZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wdWJsaWNhY2lvbmVzLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgcHJvdmlkZXJzOiBbUHVibGljYXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQdWJsaWNhY2lvbmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljYWNpb25lczpQdWJsaWNhY2lvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHVibGljYXRpb25TZXJ2aWNlOlB1YmxpY2F0aW9uU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVQcm9kdWN0cygpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgdXBkYXRlUHJvZHVjdHMoKXtcbiAgICB0aGlzLl9wdWJsaWNhdGlvblNlcnZpY2UuZ2V0UHVibGljYXRpb24oKS5zdWJzY3JpYmUoXG4gICAgICAocmVzcCkgPT4ge1xuICAgICAgICB0aGlzLnB1YmxpY2FjaW9uZXMgPSA8UHVibGljYWNpb25bXT5yZXNwW1wicmVzcG9zdGFcIl07XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=