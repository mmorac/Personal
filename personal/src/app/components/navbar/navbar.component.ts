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
    this.texts.es = {
      aboutme : "Sobre mí",
      experience: "Experiencia",
      education: "Educación y habilidades",
      portfolio: "Portafolio",
      contact: "Contacto",
      language: "Idioma"
    }

    this.texts.en = {
      aboutme : "About me",
      experience: "Experience",
      education: "Education and skills",
      portfolio: "Portfolio",
      contact: "Contact",
      language: "Language"
    }

    this.texts.pt = {
      aboutme : "Sobre mim",
      experience: "Experiéncia",
      education: "Educacão e habilidades",
      portfolio: "Portafólio",
      contact: "Contato",
      language: "Idioma"
    }
  
    this.texts.de = {
      aboutme : "Über mich",
      experience: "Erfahrung",
      education: "Ausbildung und Fähigkeiten",
      portfolio: "Portfolio",
      contact: "Kontakt",
      language: "Spräche"
    }
    this.currentTexts = this.languageService.selectTexts(this.texts);
  }

  ngOnInit(): void {
  }

  changeLanguage(language:string){
    this.languageService.changeLanguage(language);
    this.currentTexts = this.languageService.selectTexts(this.texts);
    console.log("LA RUTA ES: " + this.router.url);
    this.router.navigateByUrl(this.router.url, {skipLocationChange: true}).then(()=>{
      this.router.navigate([this.router.url]);
      console.log("Recargado el componente");
    });
  }


}
