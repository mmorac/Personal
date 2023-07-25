import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Texts } from 'src/app/models/texts';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit {

  texts:Texts = new Texts();
  currentTexts = {
    ExploreWeather: "",
    Conversor: "",
    QatarAlbum: ""
  }
  counter = 0;
  projects = [
    {
      name: this.currentTexts.ExploreWeather,
      icon: "devicon-python-plain icon",
      url: "https://github.com/mmorac/ExploreWeather"
    },
    {
      name: this.currentTexts.Conversor,
      icon: "devicon-xamarin-original icon",
      url: "https://github.com/mmorac/Conversor"
    },
    {
      url: "https://github.com/mmorac/QatarAlbum",
      icon: "devicon-csharp-plain-wordmark icon",
      name: this.currentTexts.QatarAlbum
    }
  ];

  constructor(private languageService:LanguageService, private router:Router) { 
    this.currentTexts = this.languageService.loadComponent("portfolio");
    this.updateTexts();
  }

  updateTexts(){
    let names = [this.currentTexts.ExploreWeather, this.currentTexts.Conversor, this.currentTexts.QatarAlbum];
    this.projects.forEach(element => {      
      element.name = names[this.counter];
      this.counter += 1;
    });
  }

  @HostListener('unloaded')

  ngOnDestroy(){
    console.log("ME DESTRUYERON :'( ");
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {return false;}
  }

}
