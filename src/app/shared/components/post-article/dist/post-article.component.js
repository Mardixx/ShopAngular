"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostArticleComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var PostArticleComponent = /** @class */ (function () {
    function PostArticleComponent(restAPI) {
        this.restAPI = restAPI;
        this.formData = new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
            shortDescription: new forms_1.FormControl(''),
            longDescription: new forms_1.FormControl(''),
            typeOfObject: new forms_1.FormControl(''),
            price: new forms_1.FormControl('')
        });
    }
    PostArticleComponent.prototype.postArticle = function () {
        console.log(this.formData);
        this.restAPI.postArticle(this.formData.value).subscribe(function () { });
    };
    PostArticleComponent = __decorate([
        core_1.Component({
            selector: 'app-post-article',
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule],
            templateUrl: './post-article.component.html',
            styleUrl: './post-article.component.scss'
        })
    ], PostArticleComponent);
    return PostArticleComponent;
}());
exports.PostArticleComponent = PostArticleComponent;
