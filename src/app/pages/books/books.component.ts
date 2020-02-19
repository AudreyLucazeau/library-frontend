import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';


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
    this.bookService.getAllBooks().subscribe(books => {
        this.books = books;
    });
  }

  ngOnInit() {
    this.getAllBooks();
  }

}

export class RMComponent implements OnInit{
  name = 'Angular';
  data: string;
  dataLength: boolean;

  ngOnInit() { 
    this.isReadMore(this.data)
  }
  
  isReadMore(data:string) {
    this.dataLength = !(data.length > 30)
  }
}
