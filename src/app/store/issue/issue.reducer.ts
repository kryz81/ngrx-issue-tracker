import { IssueState } from './issue.state';
import { createReducer, on } from '@ngrx/store';
import {
  addIssue,
  fetchIssues,
  setError,
  setIssueFilter,
  setIssues,
  submitIssue,
} from './issue.actions';

export const issueInitialState: IssueState = {
  filter: { text: '' },
  issues: {},
  selected: [],
  loaded: false,
  loading: false,
  error: '',
};

export const issueReducer = createReducer<IssueState>(
  issueInitialState,
  on(fetchIssues, (state) => ({ ...state, loading: true })),
  on(setIssues, (state, { issues }) => ({
    ...state,
    issues: issues,
    loaded: true,
    loading: false,
  })),
  on(submitIssue, (state) => ({ ...state, loading: true })),
  on(addIssue, (state, { issue }) => ({
    ...state,
    issues: { ...state.issues, [issue.id]: issue },
    loading: false,
  })),
  on(setIssueFilter, (state, { filter }) => ({
    ...state,
    filter: { text: filter },
  })),
  on(setError, (state, { message }) => ({ ...state, error: message }))
);
