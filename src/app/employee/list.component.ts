import { Component, OnInit,Input } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './article';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  allArticles;
  //primeng property
  cols: any[];

  constructor(
    private articleService: ArticleService,
    private _router: Router
  ) {

    //for primeng datatable settings
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'category', header: 'Category' }
    ]

  }
  ngOnInit() {
    this.getAllArticles();
  }

  //fetch all the articles from backend api
  getAllArticles(): void {
    this.articleService.getArticles()
      .subscribe(
        data => this.allArticles = data,
        error => console.log("Error:" + error)
      )
  }

  //delete article by Id
  deleteArticle(articleId: any) {
  if (confirm('Are you sure!'))
      this.articleService.deleteArticleById(articleId)
        .subscribe(() => {
          this.getAllArticles();
        })
  }
  //this function redirect to the edit aka createcomponent with the ID.
  editButtonClick(articleId: number) {
    this._router.navigate(['/edit', articleId])
  }













}
