import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticlesEnvelope, Article } from "./article";
import { ArticlesService } from "./articles.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularconduit2020';

  public articlesService: ArticlesService;
  constructor(articlesService: ArticlesService) {
    this.articlesService = articlesService;
  }


  create() {
    this.articlesService.createAnonymous("lachlan", {
      title: "Lachlan teaches HTTP POST",
      description: "BLAH BLAH BLAH",
      body: "Do this and that and bamn",
    });
  }


}
