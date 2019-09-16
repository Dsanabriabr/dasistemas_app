import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'clubs', loadChildren: './clubs/clubs.module#ClubsPageModule' },
  { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule' },
  { path: 'create-event', loadChildren: './create-event/create-event.module#CreateEventPageModule' },
  { path: 'dateam', loadChildren: './dateam/dateam.module#DateamPageModule' },
  { path: 'students', loadChildren: './students/students.module#StudentsPageModule' },
  { path: 'pucminas', loadChildren: './pucminas/pucminas.module#PucminasPageModule' },
  { path: 'eventdetail', loadChildren: './eventdetail/eventdetail.module#EventdetailPageModule' },
  { path: 'eventscollection', loadChildren: './eventscollection/eventscollection.module#EventscollectionPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab-home-events', loadChildren: './tab-home-events/tab-home-events.module#TabHomeEventsPageModule' },
  { path: 'tab-event-detail', loadChildren: './tab-event-detail/tab-event-detail.module#TabEventDetailPageModule' },
  { path: 'tab-create-event', loadChildren: './tab-create-event/tab-create-event.module#TabCreateEventPageModule' },
  { path: 'tab-check-in-event', loadChildren: './tab-check-in-event/tab-check-in-event.module#TabCheckInEventPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
