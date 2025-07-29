import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticles',
  standalone: true
})
export class FilterArticlesPipe implements PipeTransform {

  transform(articles: any, searchTerm: string): any {
    if(!searchTerm) {
      return articles;
    }
    const text = searchTerm.toLowerCase();
    return articles.filter((article: any) => {
      return article.name.toLowerCase().includes(text)
    })
  }

}
