import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Issue } from '../../models/issue';
import { Store } from '@ngrx/store';
import { selectIssueById } from '../../store/issue/issue.selectors';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
})
export class IssueDetailComponent {
  issue$: Observable<Issue>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store<AppState>
  ) {
    this.issue$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.store.select(selectIssueById, params['id']))
    );
  }
}
