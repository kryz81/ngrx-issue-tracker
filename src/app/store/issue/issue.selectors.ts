import { AppState } from '../app.state';
import { createSelector, select } from '@ngrx/store';
import { Issues } from './issue.state';
import { Issue } from '../../models/issue';
import { pipe, skipWhile } from 'rxjs';

// reczny prosty selector
export const selectAll = (state: AppState) => Object.values(state.issue.issues);

// selector zwracajacy konkretna feature
export const selectIssueFeature = (state: AppState) => state.issue;

// tworzymy selector, w ktorym najpierw zawezamy state do tylko issue feature
export const selectIssues = createSelector(
  selectIssueFeature,
  (stateSlice) => stateSlice.issues
);

export const selectAllImproved = createSelector(selectIssues, (issues) =>
  Object.values(issues)
);

export const selectFilter = createSelector(
  selectIssueFeature,
  ({ filter }) => filter
);

export const selectFiltered = createSelector(
  selectAll,
  selectFilter,
  (issues, filter) => {
    if (filter.text === '') {
      return issues;
    }

    return issues.filter(
      (issue) =>
        issue.title.startsWith(filter.text) ||
        issue.description.startsWith(filter.text)
    );
  }
);

export const selectIssuesSum = createSelector(
  selectAllImproved,
  (issues) => issues.length
);

export const selectIssueById = createSelector(
  selectIssues,
  (issues: Issues, id: string): Issue => issues[id]
);

export const selectLoaded = createSelector(
  selectIssueFeature,
  ({ loaded }) => loaded
);

export const selectAllLoaded = () =>
  pipe(
    // nie odpali selectAll dopoki loaded = false
    skipWhile((state: AppState) => !selectLoaded(state)),
    select(selectAll)
  );
