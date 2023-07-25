import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations = [];
  constructor(private language:LanguageService, private router:Router) {
    this.educations = language.loadComponent("education");
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {return false;}
  }

}
