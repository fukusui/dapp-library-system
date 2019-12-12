import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { OfficeModule } from './office/office.module';
import { SharedModule } from './shared/shared.module'
import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    HomeModule,
    OfficeModule,
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
		{
    	provide: HTTP_INTERCEPTORS,
     	useClass: HttpErrorInterceptor,
     	multi: true
   	}
  ]
})
export class AppModule { }
