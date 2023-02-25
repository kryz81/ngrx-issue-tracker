import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { countReducer } from './count/count.reducer';
import { issueReducer } from './issue/issue.reducer';
import { routerReducer } from '@ngrx/router-store';

export const appReducers: ActionReducerMap<AppState> = {
  count: countReducer,
  issue: issueReducer,
  router: routerReducer,
};
