import { createReducer, on } from '@ngrx/store';
import { initialState, SettingsState } from './settings.state';
import { changeNotificationPriority } from './settings.actions';

const changeNotificationPriorityHandler = on(
  changeNotificationPriority,
  (state: SettingsState, { notificationPriority }) => ({
    ...state,
    notificationPriority,
  })
);

export const settingsReducer = createReducer(
  initialState,
  changeNotificationPriorityHandler
);
