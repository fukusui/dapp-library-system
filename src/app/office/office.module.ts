import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OfficeRoutingModule } from './office.routing';
import { EmployeeComponent, SearchDataComponent, CreateDataComponent, CreateBookComponent, HomeComponent, LoginComponent, OfficeHomeComponent, BookDataComponent, CheckAuthorComponent, CheckInOutComponent, UserComponent, UsersComponent, SearchUsersComponent } from './pages/index';

import { Web3Service } from './services/web3.service';
import { LibService } from './services/librarian.service';
import { OfficeService } from './services/office.service';
import { BookDataService } from './services/bookData.service';
import { CheckInOutService } from './services/checkInOut.service';


import { LibGuard } from './guard/librarian.guard';
import { LibNonGuard } from './guard/librarian.non-guard';
import { OfficeGuard } from './guard/office.guard';
import { OfficeNonGuard } from './guard/office.non-guard';

import { SharedModule } from '../shared/shared.module';
import { ReturnButtonComponent } from './return-button/return-button.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, OfficeHomeComponent, EmployeeComponent, CreateDataComponent, SearchDataComponent, BookDataComponent, CheckAuthorComponent, CreateBookComponent, CheckInOutComponent, UserComponent, UsersComponent, SearchUsersComponent, ReturnButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OfficeRoutingModule,
    SharedModule,
  ],
  providers: [
    LibService,
    OfficeService,
    Web3Service,
    BookDataService,
    CheckInOutService,
    LibGuard,
    LibNonGuard,
		OfficeGuard,
		OfficeNonGuard
  ]
})
export class OfficeModule { }
