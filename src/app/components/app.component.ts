import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CountState } from '../store/count/count.state';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectIssuesSum } from '../store/issue/issue.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      a {
        margin-right: 15px;
      }
    `,
  ],
})
export class AppComponent {
  count$: Observable<CountState>;

  issuesCount$: Observable<number>;

  constructor(private readonly store: Store<AppState>) {
    this.count$ = store.select((state) => state.count);
    this.issuesCount$ = store.select(selectIssuesSum);
  }
}
