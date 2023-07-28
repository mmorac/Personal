import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducationComponent } from './components/education/education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'aboutme', component:AboutmeComponent, data:{ animationState: 'first'}},
  {path:'experience', component:ExperienceComponent, data:{ animationState: 'second'}},
  {path:'education', component:EducationComponent, data:{ animationState: 'third'}},
  {path:'portfolio', component:PortfolioComponent, data:{ animationState: 'fourth'}},
  {path:'contact', component:ContactComponent, data:{ animationState: 'fifth'}},
  {path:'**', redirectTo:'aboutme'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
