import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CountState } from '../store/count/count.state';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectIssuesSum } from '../store/issue/issue.selectors';
import { selectCurrentRoute } from '../store/router.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      a {
        margin-right: 15px;
      }
      .loading {
        background-color: green;
        color: white;
        padding: 10px;
      }
      .error {
        background-color: red;
        color: white;
        padding: 10px;
      }
    `,
  ],
})
export class AppComponent {
  count$: Observable<CountState>;
  issuesCount$: Observable<number>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  currentRoute$: Observable<any>;

  constructor(private readonly store: Store<AppState>) {
    this.count$ = store.select((state) => state.count);
    this.issuesCount$ = store.select(selectIssuesSum);
    this.loading$ = store.select((state) => state.issue.loading);
    this.error$ = store.select((state) => state.issue.error);
    this.currentRoute$ = store.select(selectCurrentRoute);
  }
}
