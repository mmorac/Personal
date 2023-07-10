import { Injectable } from '@angular/core';
import { Texts } from 'src/app/models/texts';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = "es";
  constructor() { }

  changeLanguage(language:string){
    this.currentLanguage = language;
  }

  selectTexts(dict:Texts):any{
    switch(this.currentLanguage){
      case "en":{
        return dict.en;
      }
      case "es":{
        return dict.es;
      }
      case "pt":{
        return dict.pt;
      }
      case "de":{
        return dict.de;
      }
      default:{
        return dict.es;
      }
    }
  }
}
