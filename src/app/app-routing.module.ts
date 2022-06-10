import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dash', component: DashboardComponent },

  { path: '', redirectTo: 'dash', pathMatch: 'full' },

  // Must be last! 404
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
