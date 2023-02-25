import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from './components/count/count.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';

const routes: Routes = [
  {
    path: 'count',
    component: CountComponent,
  },
  {
    path: 'issues',
    component: IssueListComponent,
    children: [{ path: ':id', component: IssueDetailComponent }],
  },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
