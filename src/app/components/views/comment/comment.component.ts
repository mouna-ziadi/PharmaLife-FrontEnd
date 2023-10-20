import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../comment/comment.service';
import { ArticleService } from '../article/article.service';
import { Commentaire } from '../../models/ArticleComment/comment';
import { Article } from '../../models/ArticleComment/article';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
 
  commentForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private article: ArticleService, private c: CommentService,private formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.pattern(/^[^_!?:;*+-/]*$/)]]

      
    });
  }
   


    cc: Commentaire = {
      idComment: 0,
      descriptionComment: '',
      dateComment: new Date,
      articleComment: new Article()
    }
  oneArticle: Article;
  myComments: Commentaire[];

  ngOnInit(): void {
    this.article.getArticleList();
  }


  getProductById() {
    this.cc.idComment = this.route.snapshot.params['id'];
    //console.log(this.cc.idArticle)
    this.article.getArticleById(this.cc.articleComment.idArticle).subscribe(data => {
      this.oneArticle = data;
      console.log(data);
    });
  }
  public getMyReclamations(idUser: number) {
    this.c.getMyComment(1).subscribe(data => {
      this.myComments = data;
    });
  }



 

    
}
