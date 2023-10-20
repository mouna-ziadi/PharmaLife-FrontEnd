import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Article } from '../../models/ArticleComment/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  page: number = 1;

  articles: Article[];
  public detailsArticle?: Article;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }
  private getArticles(){
    this.articleService.getArticleList().subscribe(data => { 
      this.articles = data;
    });
   
  } 


  public OnDetailsArticle(idArticle: number){
    this.articleService.getArticleById(idArticle).subscribe(
      (response: Article) => {
        console.log(response);
      });
  }


  
  public onOpenModal(article: Article, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   
    if (mode === 'details') {
       this.detailsArticle = article;
      button.setAttribute('data-target', '#detailArticleModal');
    }
  
    container?.appendChild(button);
    button.click();
  }

  
 

  ratingcount=0;
  totalrating=0

  Finalrating:any;

  ratingcontrol=new FormControl(0);
  GetRating(){
    this.ratingcount++;
    this.totalrating +=this.ratingcontrol?.value || 0;
    //console.log(this.ratingcontrol.value);
    this.Finalrating= (this.totalrating/this.ratingcount).toFixed(2)
  }


  public favorite : boolean = false;
  favoriteTrigger(article: any){
    article.favorite = !article.favorite;
  }

}
