"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var UniqueValueValidator = (function () {
    function UniqueValueValidator() {
    }
    UniqueValueValidator.prototype.validate = function (c) {
        var inputValue = c.value;
        var foundItem = this.givenValues.indexOf(inputValue);
        if (foundItem >= 0) {
            return {
                'isNotUnique': true
            };
        }
        return null;
    };
    __decorate([
        core_1.Input('uniqueValue')
    ], UniqueValueValidator.prototype, "givenValues", void 0);
    UniqueValueValidator = __decorate([
        core_1.Directive({
            selector: '[uniqueValue][ngModel],[uniqueValue][formControl],[uniqueValue][formControlName]',
            providers: [
                {
                    provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return UniqueValueValidator; }), multi: true
                }
            ]
        })
    ], UniqueValueValidator);
    return UniqueValueValidator;
}());
exports.UniqueValueValidator = UniqueValueValidator;
//# sourceMappingURL=unique-value-validator.js.map