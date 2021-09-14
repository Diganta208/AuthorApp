import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorComponent} from './author/author.component'
import { FavouriteAuthorComponent} from './favourite-author/favourite-author.component'


const routes: Routes = [
  {path: 'author', component: AuthorComponent},
  {path: 'fav-author', component: FavouriteAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
