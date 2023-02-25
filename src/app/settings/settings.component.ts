import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Priority } from '../models/issue';
import { Store } from '@ngrx/store';
import { selectNotificationPriority } from './store/settings.selectors';
import { SettingsAppState } from './store/settings.state';
import { changeNotificationPriority } from './store/settings.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  notificationPriority$: Observable<Priority>;

  constructor(private readonly store: Store<SettingsAppState>) {
    this.notificationPriority$ = store.select(selectNotificationPriority);
  }

  changeNotificationPriority(priority: string) {
    const notificationPriority = priority as Priority;
    this.store.dispatch(changeNotificationPriority({ notificationPriority }));
  }
}
