"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RESTApiService = void 0;
var core_1 = require("@angular/core");
var RESTApiService = /** @class */ (function () {
    function RESTApiService(http) {
        this.http = http;
    }
    RESTApiService.prototype.getArticles = function () {
        var url = "http://localhost:8080/articles";
        return this.http.get(url);
    };
    RESTApiService.prototype.postArticle = function (form) {
        var url = "http://localhost:8080/articles";
        return this.http.post(url, form);
    };
    RESTApiService.prototype.updateArticle = function (updatedObject, id) {
        var url = "http://localhost:8080/articles/" + id;
        return this.http.put(url, updatedObject);
    };
    RESTApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RESTApiService);
    return RESTApiService;
}());
exports.RESTApiService = RESTApiService;
