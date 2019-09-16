import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "tabs/(tabHomeEvents:tabHomeEvents)",
        pathMatch: "full"
      },
      {
        path: "tabHomeEvents",
        children: [
          {
            path: "",
            loadChildren: "../tab-home-events/tab-home-events.module#TabHomeEventsPageModule"
          }
        ]
      },
      {
        path: "tabHomeEvents/eventDetail",
        loadChildren: "../tab-event-detail/tab-event-detail.module#TabEventDetailPageModule"
      },
      {
        path: "tabCreateEvent",
        children: [
          {
            path: "",
            loadChildren:
              "../tab-create-event/tab-create-event.module#TabCreateEventPageModule"
          }
        ]
      },
      {
        path: "tabCheckInEvent",
        children: [
          {
            path: "",
            loadChildren:
              "../tab-check-in-event/tab-check-in-event.module#TabCheckInEventPageModule"
          }
        ]
      }
    ]
  },
  {
    path: "",
    redirectTo: "tabs/tabHomeEvents",
    pathMatch: "full"
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
  },
  { path: "about", loadChildren: "../about/about.module#AboutPageModule" }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
