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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var mock_heroes_1 = require("./mock-heroes");
var message_service_1 = require("./message.service");
var HeroService = /** @class */ (function () {
    function HeroService(messageService) {
        this.messageService = messageService;
    }
    HeroService.prototype.getHeroes = function () {
        this.messageService.add('HeroService: fetched heroes');
        return rxjs_1.of(mock_heroes_1.HEROES);
    };
    HeroService.prototype.getHero = function (id) {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add("HeroService: fetched hero id=" + id);
        return rxjs_1.of(mock_heroes_1.HEROES.find(function (hero) { return hero.id === id; }));
    };
    HeroService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map