import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home/home.component';
import { SearchAuthorComponent } from './search-author/search-author.component';
import { SearchGenreComponent } from './search-genre/search-genre.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, SearchAuthorComponent, SearchGenreComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
