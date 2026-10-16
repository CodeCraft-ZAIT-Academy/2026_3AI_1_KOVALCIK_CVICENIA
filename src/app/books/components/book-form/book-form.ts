import { Component, OnInit, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../book';
import { GENRES } from '../../genres';
import { createEmptyBook } from '../../book.factory';

@Component({
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  selector: 'app-book-form',
  styleUrl: './book-form.css',
  templateUrl: './book-form.html',
})
export class BookForm implements OnInit {
  book = input<Book>();
  saved = output<Book>();
  cancelled = output<void>();

  genres: string[] = GENRES;
  ratings: number[] = [1, 2, 3, 4, 5];
  currentYear: number = new Date().getFullYear();

  draft: Book = createEmptyBook();

  ngOnInit(): void {
    const book = this.book();

    if (book) {
      this.draft = { ...book };
    }
  }

  isEditMode(): boolean {
    return this.book() !== undefined;
  }

  save(form: NgForm): void {
    this.saved.emit({ ...this.draft });

    if (!this.isEditMode()) {
      this.draft = createEmptyBook();
      form.resetForm(this.draft);
    }
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
