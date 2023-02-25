import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SettingsAppState,
  settingsFeatureKey,
  SettingsState,
} from './settings.state';

export const selectFeature = createFeatureSelector<
  SettingsAppState,
  SettingsState
>(settingsFeatureKey);

export const selectNotificationPriority = createSelector(
  selectFeature,
  (settings) => settings.notificationPriority
);
