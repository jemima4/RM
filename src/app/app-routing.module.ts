import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/@components/website/website.module').then(
        (m) => m.WebsiteModule
      ),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('src/app/@components/webapp/webapp.module').then(
        (m) => m.WebappModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
