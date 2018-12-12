import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ArticleService } from './article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //component properties
  articleToUpdate = null;
  processValidation = false;
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  })
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    public toastr: ToastrManager
  ) {

  }
  ngOnInit() {
    this.fetchIdFromUrl();
  }

  //fetch id from url and pass to form for update
  fetchIdFromUrl() {
    this.route.paramMap.subscribe(params => {
      const articleId = +params.get('id');
      if (articleId) {
        this.getArticle(articleId)
      }
    })
  }

  //create and update , 
  //if update is selected then update operation proceed
  onArticleFormSubmit() {
    this.processValidation = true;
    if (this.articleForm.invalid) {
      return;
    }

    //form is valid now perform create or update
    let article = this.articleForm.value;
    if (this.articleToUpdate === null) {
      this.articleService.createArticle(article)
        .subscribe(() => {
          this.backToCreateArticle();
        })
      this.toastr.successToastr('Article created successfully.', 'Success!');


    }
    else {
      article.id = this.articleToUpdate;
      this.articleService.updateArticle(article)
        .subscribe(() => {
          this.backToCreateArticle();
        },
          error => console.log('Error:' + error))
    }

  }

  getArticle(articleId: any) {
    this.articleService.getArticleById(articleId)
      .subscribe(article => {
        this.articleToUpdate = article.id;
        this.articleForm.setValue({
          title: article.title,
          category: article.category
        });
        this.processValidation = true;

      }, error => {
        console.log('Error:' + error)
      })

  }



  backToCreateArticle() {
    this.articleToUpdate = null;
    this.articleForm.reset();
    this.processValidation = false;
  }





}
