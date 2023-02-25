import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addIssue, fetchIssues, setIssues, submitIssue } from './issue.actions';
import { map, mergeMap, of } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { Store } from '@ngrx/store';
import { DatabaseService } from '../../services/database.service';

@Injectable()
export class IssueEffects {
  $submitIssue = createEffect(() =>
    this.action$.pipe(
      ofType(submitIssue),
      mergeMap((action) => this.issueService.save(action.issue)),
      map((issue) => addIssue({ issue }))
    )
  );

  $fetchIssues = createEffect(() =>
    this.action$.pipe(
      ofType(fetchIssues),
      mergeMap(() => of(this.databaseService.createDb())),
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
}
