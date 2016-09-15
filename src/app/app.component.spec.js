/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
describe('App: QmctApp', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
        });
    });
    it('should create the app component', function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            var appComponentInstance = fixture.componentInstance;
            expect(appComponentInstance.title).toEqual('app works!');
        });
    });
});
//# sourceMappingURL=app.component.spec.js.map