import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { AppRoutingModule }       from './app-routing.module';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';

import { AppComponent }           from './app.component';
import { DashboardComponent }     from './dashboard.component';
import { PessoasComponent }       from './pessoas.component';
import { PessoaDetailComponent }  from './pessoa-detail.component';
import { PessoaService }          from './pessoa.service';
import { PessoaSearchComponent }  from './pessoa-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}) ,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PessoaDetailComponent,
    PessoasComponent,
    PessoaSearchComponent
  ],
  providers: [ PessoaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
