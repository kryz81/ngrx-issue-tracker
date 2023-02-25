import { CountState } from './count/count.state';
import { IssueState } from './issue/issue.state';

export interface AppState {
  count: CountState;
  issue: IssueState;
}
