import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabHomeEventsPage } from './tab-home-events.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomeEventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabHomeEventsPage]
})
export class TabHomeEventsPageModule {}
