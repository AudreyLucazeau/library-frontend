import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './pages/books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './pages/book-detail/book-detail.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { ReadMoreComponent } from './read-more/read-more';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronDown, faCoffee, faSort, faSortUp } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight);
library.add(faChevronDown);

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    ReadMoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
