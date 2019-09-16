import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: "",
        redirectTo: "menu/(menu:menu)",
        pathMatch: "full"
      },
      { 
        path: 'dashboard', 
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      { 
        path: 'students', 
        loadChildren: '../students/students.module#StudentsPageModule'
      },
      { 
        path: 'dateam', 
        loadChildren: '../dateam/dateam.module#DateamPageModule'
      },
      { 
        path: 'pucminas', 
        loadChildren: '../pucminas/pucminas.module#PucminasPageModule'
      }
      // { 
      //   path: 'create-event', 
      //   loadChildren: '../create-event/create-event.modules#CreateEventPage'
      // },
      // { 
      //   path: 'clubs', 
      //   loadChildren: '../clubs/clubs.modules#ClubsPage'
      // },
      // { 
      //   path: 'groups', 
      //   loadChildren: '../groups/groups.modules#GroupsPage'
      // }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
