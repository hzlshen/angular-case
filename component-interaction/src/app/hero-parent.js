"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Administrator on 2017/10/26.
 */
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var HeroParentComponent = (function () {
    function HeroParentComponent() {
        this.heroes = hero_1.HEROES;
    }
    HeroParentComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-parent',
            template: ""
        })
    ], HeroParentComponent);
    return HeroParentComponent;
}());
exports.HeroParentComponent = HeroParentComponent;
//# sourceMappingURL=hero-parent.js.map