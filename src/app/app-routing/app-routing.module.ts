import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from '../pages/books/books.component';
import { AppComponent } from '../app.component';
import { BookDetailComponent } from '../pages/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book-detail', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }