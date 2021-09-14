import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'author-app';
  favAuythorId: any[]=[]
  favAuthors: any[]=[]
  constructor()
  {
    localStorage.setItem('favouriteAuthorsId',JSON.stringify(this.favAuythorId) )
    localStorage.setItem('favouriteAuthors', JSON.stringify(this.favAuthors))
  }
}
