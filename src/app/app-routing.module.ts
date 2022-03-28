import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './modules/error/error.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';
import { UserListComponent } from './modules/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/user-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./modules/user-details/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
