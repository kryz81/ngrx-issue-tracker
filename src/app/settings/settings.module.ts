import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { StoreModule } from '@ngrx/store';
import { settingsFeatureKey } from './store/settings.state';
import { settingsReducer } from './store/settings.reducer';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    StoreModule.forFeature(settingsFeatureKey, settingsReducer),
  ],
})
export class SettingsModule {}
