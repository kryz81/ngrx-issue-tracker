import { Priority } from '../../models/issue';
import { AppState } from '../../store/app.state';

export interface SettingsState {
  notificationPriority: Priority;
}

export const initialState: SettingsState = {
  notificationPriority: 'low',
};

export const settingsFeatureKey = 'settings';

export interface SettingsAppState extends AppState {
  [settingsFeatureKey]: SettingsState;
}
