import { createAction, props } from '@ngrx/store';
import { Issue } from '../../models/issue';
import { Issues } from './issue.state';

export enum IssueActions {
  FETCH = '[Issue] Fetch',
  SET = '[Issue] Set Issues',
  ADD = '[Issue] Add',
  SUBMIT = '[Issue] Submit',
  SET_FILTER = '[Issue] Set Filter',
}

export const fetchIssues = createAction(IssueActions.FETCH);

export const setIssues = createAction(
  IssueActions.SET,
  props<{ issues: Issues }>()
);

export const submitIssue = createAction(
  IssueActions.SUBMIT,
  props<{ issue: Issue }>()
);

export const addIssue = createAction(
  IssueActions.ADD,
  props<{ issue: Issue }>()
);

export const setIssueFilter = createAction(
  IssueActions.SET_FILTER,
  props<{ filter: string }>()
);
