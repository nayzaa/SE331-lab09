"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var course_1 = require("../course");
var CouresListComponent = (function () {
    function CouresListComponent() {
    }
    CouresListComponent.prototype.ngOnInit = function () {
    };
    return CouresListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CouresListComponent.prototype, "count", void 0);
__decorate([
    core_1.Input('enrolledCourse'),
    __metadata("design:type", course_1.Course)
], CouresListComponent.prototype, "courses", void 0);
CouresListComponent = __decorate([
    core_1.Component({
        selector: 'course-list',
        templateUrl: 'app/students/course-list/course-list.component.html',
        styleUrls: ['app/students/course-list/course-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], CouresListComponent);
exports.CouresListComponent = CouresListComponent;
//# sourceMappingURL=course-list.component.js.map