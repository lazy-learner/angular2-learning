"use strict";
/**
 * Created by md7030 on 8/19/2016.
 */
var router_1 = require('@angular/router');
var questions_1 = require("./questions");
var form_details_1 = require("./form-details");
var appRoutes = [
    {
        path: '',
        redirectTo: '/formDetails',
        pathMatch: 'full'
    },
    {
        path: 'questions',
        component: questions_1.QuestionsComponent
    },
    {
        path: 'formDetails',
        component: form_details_1.FormDetailsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map