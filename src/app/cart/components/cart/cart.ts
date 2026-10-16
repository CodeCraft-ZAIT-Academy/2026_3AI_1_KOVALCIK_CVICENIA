import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '../../../books/book';

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  books = input.required<Book[]>();
  returned = output<Book>();

  giveBack(book: Book): void {
    this.returned.emit(book);
  }
}
