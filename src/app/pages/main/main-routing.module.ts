import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children:
      [
        {
          path: 'tab1',
          children:
            [
              {
                path: '',
                loadChildren: '../tabs/home/home.module#HomePageModule'
              }
            ]
        },
        {
          path: 'tab2',
          children:
            [
              {
                path: '',
                loadChildren: "../tabs/apps/apps.module#AppsPageModule"
              }
            ]
        },
        {
          path: 'tab3',
          children:
            [
              {
                path: '',
                loadChildren: "../tabs/settings/settings.module#SettingsPageModule"
              }
            ]
        },
        // {
        //   path: '',
        //   redirectTo: '/mian/tab1',
        //   pathMatch: 'full'
        // }
      ]
  },
  {
    path: '',
    redirectTo: '/main/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}