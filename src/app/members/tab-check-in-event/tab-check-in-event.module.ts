import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabCheckInEventPage } from './tab-check-in-event.page';

const routes: Routes = [
  {
    path: '',
    component: TabCheckInEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabCheckInEventPage]
})
export class TabCheckInEventPageModule {}
