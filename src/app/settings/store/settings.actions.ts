import { createAction, props } from '@ngrx/store';
import { Priority } from '../../models/issue';

export const changeNotificationPriority = createAction(
  '[Settings] Change Notification Priority',
  props<{ notificationPriority: Priority }>()
);
