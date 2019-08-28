import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { 
        path: 'dashboard', 
        loadChildren: '../dashboard/dashboard.module#DashboardPage'
      },
      { 
        path: 'create-event', 
        loadChildren: '../create-event/create-event.modules#CreateEventPage'
      },
      { 
        path: 'clubs', 
        loadChildren: '../clubs/clubs.modules#ClubsPage'
      },
      { 
        path: 'groups', 
        loadChildren: '../groups/groups.modules#GroupsPage'
      }
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
