import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [];

  constructor(private languages:LanguageService, private router:Router) { 
    this.experiences = this.languages.loadComponent("experiences");
    console.log(this.experiences);
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {return false;}
  }

}
