import { Component, input } from '@angular/core';
import { Book } from '../book';

@Component({
  imports: [],
  selector: 'app-book-card',
  styleUrl: './book-card.css',
  templateUrl: './book-card.html',
})
export class BookCard {


  book = input.required<Book>();



  title: string = 'Mato fric a jeho dobrodružstvá';
  author: string = 'martinko ';
  year: number = 2026;
  available: boolean = true;

 showDetails: boolean = false;
  toggleDetails(): void {
  this.showDetails = !this.showDetails;
}

  isFavourite: boolean = false;
  toggleFavourite(): void {
    this.isFavourite = !this.isFavourite;
  }
};


