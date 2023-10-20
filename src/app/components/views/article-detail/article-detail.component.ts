import { Component, OnInit } from '@angular/core';
import { ArticleDetailService } from './article-detail.service';
import { FormControl } from '@angular/forms';
import { Commentaire } from '../../models/ArticleComment/comment'; 
import { Article } from '../../models/ArticleComment/article';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  comments:Commentaire[];
  articles: Article[];
  public detailsArticle?: Article;
  constructor(private articleDetailService: ArticleDetailService, private route: ActivatedRoute) { }
  idArticle: number;
  formData: any = {};
  
  newComment: Commentaire = {
    descriptionComment: '',
    idComment: 0,
    dateComment: new Date,
    articleComment: new Article
  };


  ngOnInit(): void {
    this.getArticles();
  }
  private getArticles(){
    this.articleDetailService.getArticleList().subscribe(data => { 
      this.articles = data;
    });
  } 

  onSubmit(formData: any, idArticle: number) {
    // Créez un nouvel objet de commentaire à partir des données du formulaire
    this.newComment.articleComment.idArticle = this.route.snapshot.params['id'];
   console.log("elyes",this.newComment.articleComment.idArticle);
    const newComment: Commentaire = {
      descriptionComment: formData.descriptionComment,
      dateComment: new Date,
      articleComment: new Article,
      idComment: this.newComment.articleComment.idArticle
    };
  
    this.articleDetailService.addCommentToArticle(newComment, this.newComment.articleComment.idArticle).subscribe(
      response => {
        // Faites quelque chose avec la réponse de la requête POST réussie
      },
      error => {
        // Gérez les erreurs de la requête POST
      }
    );
  
    // Réinitialisez le formulaire
    this.newComment = {
      descriptionComment: '',
      idComment: this.newComment.articleComment.idArticle,
      dateComment: new Date,
      articleComment: new Article
          };


          
          
  }

  
  public OnDetailsArticle(idArticle: number){
    this.newComment.articleComment.idArticle = this.route.snapshot.params['id'];
    
    this.articleDetailService.getArticleById(idArticle).subscribe(
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
