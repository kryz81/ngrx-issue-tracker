import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { CountComponent } from './components/count/count.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { SettingsModule } from './settings/settings.module';
import { EffectsModule } from '@ngrx/effects';
import { DatabaseService } from './services/database.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { IssueEffects } from './store/issue/issue.effects';
import { IssueService } from './services/issue.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    IssuesComponent,
    IssueListComponent,
    IssueDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule,
    SettingsModule,
    HttpClientModule,
    EffectsModule.forRoot([IssueEffects]),
    InMemoryWebApiModule.forRoot(DatabaseService),
  ],
  providers: [DatabaseService, IssueService],
  bootstrap: [AppComponent],
})
export class AppModule {}
