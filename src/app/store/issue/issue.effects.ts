import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import {
  addIssue,
  fetchIssues,
  setError,
  setIssues,
  submitIssue,
} from './issue.actions';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { Action, Store } from '@ngrx/store';
import { DatabaseService } from '../../services/database.service';

@Injectable()
export class IssueEffects implements OnInitEffects {
  $submitIssue = createEffect(() =>
    this.action$.pipe(
      ofType(submitIssue),
      mergeMap((action) =>
        this.issueService.save(action.issue).pipe(
          map((issue) => addIssue({ issue })),
          catchError(() => of(setError({ message: 'Error fetching issues' })))
        )
      )
    )
  );

  $fetchIssues = createEffect(() =>
    this.action$.pipe(
      ofType(fetchIssues),
      mergeMap(() => of(this.databaseService.createDb())),
      delay(2000),
      map((db) =>
        setIssues({ issues: this.issueService.transformIssues(db.issues) })
      )
    )
  );

  constructor(
    private readonly store: Store,
    private readonly action$: Actions,
    private readonly issueService: IssueService,
    private readonly databaseService: DatabaseService
  ) {}

  ngrxOnInitEffects(): Action {
    return fetchIssues();
  }
}
