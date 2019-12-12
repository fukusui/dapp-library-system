import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookService } from './book.service';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { SearchTitleComponent } from './search-title/search-title.component';

@NgModule({
  declarations: [BooksComponent, BookComponent, SearchTitleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BookComponent, BooksComponent, SearchTitleComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ BookService ]
    };
  }
}
