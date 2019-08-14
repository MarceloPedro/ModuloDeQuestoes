import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { ApiService } from './web-in-memory-api';

import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiService),
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false 
    }),
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
