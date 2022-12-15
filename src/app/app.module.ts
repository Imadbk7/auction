import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StartpageComponent} from './components/startpage/startpage.component';
import {HeaderComponent} from './components/header/header.component';
import {FakeoffersComponent} from './components/fakeoffers/fakeoffers.component';
import {RouterModule, Routes} from '@angular/router';
import {Overview2Component} from './components/overview2/overview2.component';
import {Detail2Component} from './components/detail2/detail2.component';
import {FormsModule} from '@angular/forms';
import {Overview3Component} from './components/overview3/overview3.component';
import {ErrorComponent} from './components/error/error.component';
import {Overview4Component} from './components/overview4/overview4.component';
import {Overview5Component} from './components/overview5/overview5.component';
import {Detail5Component} from './components/detail5/detail5.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Detail3Component} from './components/detail3/detail3.component';
import {Detail4Component} from './components/detail4/detail4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// @ts-ignore
import { LoginformComponent } from './loginform/loginform.component';
import {LogComponent} from './components/loginform/loginform.component';
import {AuthSbInterceptorService} from './services/auth-sb-interceptor.service';

const routes: Routes = [
  {path: 'FakeOffersPage', component: FakeoffersComponent},
  {path: 'Overview2', component: Overview2Component},
  {path: '', component: StartpageComponent},
  {path: 'Overview3', component: Overview3Component},
  {path: 'login', component: LogComponent},
  {path: 'Overview4', component: Overview4Component, children: [
    {path: ':id', component: Detail4Component}
    ]},
  {path: 'Overview5', component: Overview5Component},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    HeaderComponent,
    FakeoffersComponent,
    Overview2Component,
    Detail2Component,
    Detail3Component,
    Overview3Component,
    ErrorComponent,
    Overview4Component,
    Overview5Component,
    Detail5Component,
    LogComponent,
    Detail4Component,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 9000,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true
    })
  ],
  exports: [RouterModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthSbInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})

export class AppModule {
}
