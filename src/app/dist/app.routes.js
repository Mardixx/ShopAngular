"use strict";
exports.__esModule = true;
exports.routes = void 0;
var get_articles_component_1 = require("./shared/components/get-articles/get-articles.component");
var update_articles_component_1 = require("./shared/components/update-articles/update-articles.component");
var post_article_component_1 = require("./shared/components/post-article/post-article.component");
var get_user_component_1 = require("./shared/components/get-user/get-user.component");
exports.routes = [
    { path: '', component: get_articles_component_1.GetArticlesComponent },
    { path: 'update/articles', component: update_articles_component_1.UpdateArticlesComponent },
    { path: 'update/articles/post', component: post_article_component_1.PostArticleComponent },
    { path: 'user', component: get_user_component_1.GetUserComponent }
];
