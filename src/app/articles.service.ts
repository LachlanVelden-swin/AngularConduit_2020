import { Injectable } from '@angular/core';
import { Article, ArticlesEnvelope, ArticleEnvelope, CreateAnonymousCommand } from './article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: Article[] = [];
  loading: boolean = false;
  loaded: boolean = false;

  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Go and get an ArticlesEnvelope from the server and store it locally
   */
  get() {
    let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles");
    this.loading = true;
    this.loaded = false;
    request.subscribe((response) => {

      this.articles = response.articles;
      this.loading = false;
      this.loaded = true;
    });
  }

  createAnonymous(username: string, article: Article) {
    let request = this.httpClient.post<ArticleEnvelope>("https://swindev.me/articles/anonymous", {
      username: username,
      article: article
    } as CreateAnonymousCommand);
    request.subscribe((response) => {
      this.articles = [...this.articles, response.article]; // is a new array, with new value added
      this.get();
    });
  }

}
