import { createReducer, on } from '@ngrx/store';
import { changeCount, decrementCount, incrementCount } from './count.actions';
import { CountState } from './count.state';

const countInitialState: CountState = 0;

export const countReducer = createReducer<number>(
  countInitialState,
  on(incrementCount, (state) => state + 1),
  on(decrementCount, (state) => state - 1),
  on(changeCount, (state, { value }) => state + value)
);
