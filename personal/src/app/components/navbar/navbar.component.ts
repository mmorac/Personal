import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Texts } from 'src/app/models/texts';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  texts:Texts = new Texts();
  currentTexts = {
    aboutme : "",
    experience: "",
    education: "",
    portfolio: "",
    contact: "",
    language: ""
  }

  constructor(private languageService:LanguageService, private router:Router) { 
    this.currentTexts = this.languageService.loadComponent("navbar");
  }

  ngOnInit(): void {
  }

  changeLanguage(language:string){
    this.languageService.changeLanguage(language);
    this.currentTexts = this.languageService.loadComponent("navbar");
    console.log("LA RUTA ES: " + this.router.url);
    this.router.navigateByUrl(this.router.url, {skipLocationChange: true}).then(()=>{
      this.router.navigate([this.router.url]);
      console.log("Recargado el componente");
    });
  }


}
