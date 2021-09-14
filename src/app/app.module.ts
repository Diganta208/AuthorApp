import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthorComponent } from './author/author.component';
import { FavouriteAuthorComponent } from './favourite-author/favourite-author.component';
import {MatButtonModule} from '@angular/material/button';
import {SuiModule, SuiProgressModule} from 'ng2-semantic-ui';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavouriteAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    SuiModule,
    SuiProgressModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
