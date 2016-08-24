"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FormDetailsComponent = (function () {
    function FormDetailsComponent(router, formService) {
        this.router = router;
        this.formService = formService;
        this.submitted = false;
        this.formModel = formService.getFormObject();
    }
    FormDetailsComponent.prototype.onSubmit = function () {
        var link = ["/questions"];
        this.router.navigate(link);
        this.submitted = true;
    };
    FormDetailsComponent.prototype.ngOnInit = function () {
    };
    FormDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-experiment-details',
            templateUrl: 'app/form-details/form-details.component.html',
            styleUrls: ['app/form-details/form-details.component.css']
        })
    ], FormDetailsComponent);
    return FormDetailsComponent;
}());
exports.FormDetailsComponent = FormDetailsComponent;
//# sourceMappingURL=form-details.component.js.map