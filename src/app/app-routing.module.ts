import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },

  { path: 'heroes', component: HeroesComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'hero/:id', component: HeroDetailComponent },

  // Must be last! 404
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
