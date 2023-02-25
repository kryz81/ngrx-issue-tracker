import { IssueState } from './issue.state';
import { createReducer, on } from '@ngrx/store';
import { addIssue, setIssueFilter, setIssues } from './issue.actions';

const issueInitialState: IssueState = {
  filter: { text: '' },
  issues: {},
  selected: [],
  loaded: true,
};

export const issueReducer = createReducer<IssueState>(
  issueInitialState,
  on(setIssues, (state, { issues }) => ({ ...state, issues: issues })),
  on(addIssue, (state, { issue }) => ({
    ...state,
    issues: { ...state.issues, [issue.id]: issue },
  })),
  on(setIssueFilter, (state, { filter }) => ({
    ...state,
    filter: { text: filter },
  }))
);
