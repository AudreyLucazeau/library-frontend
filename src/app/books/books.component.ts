import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getAllBooks(): void {
    this.books = this.bookService.getAllBooks();
  }

  ngOnInit() {
    this.getAllBooks();
  }

}
