import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import {
  changeCount,
  decrementCount,
  incrementCount,
} from '../../store/count/count.actions';
import { CountState } from '../../store/count/count.state';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styles: [
    `
      button {
        margin-right: 10px;
      }
      input {
        margin-right: 10px;
      }
    `,
  ],
})
export class CountComponent {
  count$: Observable<CountState>;

  value: string = '';

  constructor(private readonly store: Store<AppState>) {
    this.count$ = store.select((state) => state.count);
  }

  increment() {
    this.store.dispatch(incrementCount());
  }

  decrement() {
    this.store.dispatch(decrementCount());
  }

  change() {
    if (isNaN(Number(this.value))) {
      return;
    }
    this.store.dispatch(changeCount({ value: Number(this.value) }));
  }
}
