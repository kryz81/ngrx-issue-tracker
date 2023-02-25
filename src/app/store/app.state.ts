import { CountState } from './count/count.state';
import { IssueState } from './issue/issue.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  count: CountState;
  issue: IssueState;
  router: RouterReducerState;
}
