import { Component, OnInit } from '@angular/core';
import { Texts } from 'src/app/models/texts';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  currentLanguage:string = "";
  texts:Texts = new Texts();
  currentTexts = {}
  constructor(private languageService:LanguageService) { 
    this.currentLanguage = languageService.currentLanguage;
    this.texts.es = {
      ExploreWeather: "Aplicación de seguimiento del clima en consola.",
      Conversor: "Conversor de moneda móvil.",
      QatarAlbum: "Aplicación de escritorio para coleccionistas del álbum Panini del mundial Qatar 2022."
    }

    this.texts.en = {
      ExploreWeather: "Console application to track weather in a set of cities.",
      Conversor: "Mobile app to convert money.",
      QatarAlbum: "Panini Qatar 2022 World Cup Album collector's desktop application."
    }

    this.texts.pt = {
      ExploreWeather: "Aplicativo pelo seguimento do clima no console.",
      Conversor: "Aplicativo móvil para câmbio monetário.",
      QatarAlbum: "Aplicativo desktop para colecionadores do álbum Panini da Copa do Mundo Qatar 2022."
    }

    this.texts.de = {
      ExploreWeather: "Konsole Wetter-Tracking-App.",
      Conversor: "Mobile Währungsumtausch-App.",
      QatarAlbum: "Desktop-Anwendung für Sammler des Panini Qatar 2022-Albums."
    }
  }

  projects = [
    {
      name: "",
      icon: "devicon-python-plain icon",
      url: "https://github.com/mmorac/ExploreWeather"
    },
    {
      name: "",
      icon: "devicon-xamarin-original icon",
      url: "https://github.com/mmorac/Conversor"
    },
    {
      url: "https://github.com/mmorac/QatarAlbum",
      icon: "devicon-csharp-plain-wordmark icon",
      name: ""
    }
  ];


  ngOnInit(): void {
  }

}
