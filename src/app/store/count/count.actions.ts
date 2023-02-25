import { createAction, props } from '@ngrx/store';
import { CountState } from './count.state';

export enum CountActions {
  INCREMENT = '[Count] increment',
  DECREMENT = '[Count] decrement',
  CHANGE = '[Count] change',
}

export const incrementCount = createAction(CountActions.INCREMENT);

export const decrementCount = createAction(CountActions.DECREMENT);

export const changeCount = createAction(
  CountActions.CHANGE,
  props<{ value: CountState }>()
);
