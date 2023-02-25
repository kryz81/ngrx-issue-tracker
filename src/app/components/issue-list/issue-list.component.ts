import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../../models/issue';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectAllLoaded } from '../../store/issue/issue.selectors';
import { fetchIssues, setIssueFilter } from '../../store/issue/issue.actions';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styles: [
    `
      h3 {
        color: darkslateblue;
      }
      small {
        color: springgreen;
        background-color: indigo;
        padding: 5px;
      }
    `,
  ],
})
export class IssueListComponent implements OnInit {
  issues$: Observable<Issue[]>;

  filter = '';

  constructor(private readonly store: Store<AppState>) {
    this.issues$ = store.pipe(selectAllLoaded());
  }

  onFilter() {
    this.store.dispatch(setIssueFilter({ filter: this.filter }));
  }

  ngOnInit() {
    this.store.dispatch(fetchIssues());
  }
}
