import { Injectable } from '@angular/core';
import { Texts } from 'src/app/models/texts';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = "es";

  texts = {
    portfolio:{
      es : {
        ExploreWeather: "Aplicación de seguimiento del clima en consola.",
        Conversor: "Conversor de moneda móvil.",
        QatarAlbum: "Aplicación de escritorio para coleccionistas del álbum Panini del mundial Qatar 2022."
      },
  
      en: {
        ExploreWeather: "Console application to track weather in a set of cities.",
        Conversor: "Mobile app to convert money.",
        QatarAlbum: "Panini Qatar 2022 World Cup Album collector's desktop application."
      },
  
      pt: {
        ExploreWeather: "Aplicativo pelo seguimento do clima no console.",
        Conversor: "Aplicativo móvil para câmbio monetário.",
        QatarAlbum: "Aplicativo desktop para colecionadores do álbum Panini da Copa do Mundo Qatar 2022."
      },
  
      de: {
        ExploreWeather: "Konsole Wetter-Tracking-App.",
        Conversor: "Mobile Währungsumtausch-App.",
        QatarAlbum: "Desktop-Anwendung für Sammler des Panini Qatar 2022-Albums."
      }
    },

    experiences: {
      en:[
        {
          position: "Junior Software Developer",
          company: "Alten Delivery Centre",
          time: "April 2023 - Present",
          description: "Full Stack Development. Digital Transformation Consultant.",
          technologies: ["Angular", "DotNetCore", "CSharp", "MySQL"]
        },
        {
          position: "Software Developer",
          company: "Ampstek",
          time: "June 2022 - December 2022",
          description: "Applications migration",
          technologies: ["Ansible", "DotNetCore"]
        },
        {
          position: "Senior Software Engineer",
          company: "Hangar",
          time: "October 2020 - June 2022",
          description: "Full Stack Development",
          technologies: ["Angular", "DotNetCore", "CSharp", "SQLServer"]
        },
        {
          position: "Senior Software Developer",
          company: "EY Central America",
          time: "October 2018 - July 2020",
          description: "Full Stack Development. Robotic Process Automation.",
          technologies: ["CSharp", "BluePrism"]
        },
        {
          position: "PC Windows Software Engineer",
          company: "DXC Technology",
          time: "March 2016 - October 2018",
          description: "Backend development. Scripts development. Application support.",
          technologies: ["VB", "DotNetCore", "CSharp"]
        }
      ],
      es:[
        {
          position: "Junior Software Developer",
          company: "Alten Delivery Centre",
          time: "Abril 2023 - Presente",
          description: "Desarrollo Full Stack. Consultoría en Transformación Digital.",
          technologies: ["Angular", "DotNetCore", "CSharp", "MySQL"]
        },
        {
          position: "Software Developer",
          company: "Ampstek",
          time: "Junio 2022 - Diciembre 2022",
          description: "Migración de aplicaciones.",
          technologies: ["Ansible", "DotNetCore"]
        },
        {
          position: "Senior Software Engineer",
          company: "Hangar",
          time: "Octubre 2020 - Junio 2022",
          description: "Desarrollo Full Stack.",
          technologies: ["Angular", "DotNetCore", "CSharp", "SQLServer"]
        },
        {
          position: "Senior Software Developer",
          company: "EY Central America",
          time: "Octubre 2018 - Julio 2020",
          description: "Desarrollo Full Stack. Robotic Process Automation.",
          technologies: ["CSharp", "BluePrism"]
        },
        {
          position: "PC Windows Software Engineer",
          company: "DXC Technology",
          time: "March 2016 - October 2018",
          description: "Desarrollo Back End. Desarrollo de Scripts. Soporte de aplicaciones.",
          technologies: ["VB", "DotNetCore", "CSharp"]
        }
      ],
      pt:[
        {
          position: "Junior Software Developer",
          company: "Alten Delivery Centre",
          time: "Abril 2023 - Presente",
          description: "Desenvolvimento Full Stack. Digital Transformation Consultant.",
          technologies: ["Angular", "DotNetCore", "CSharp", "MySQL"]
        },
        {
          position: "Software Developer",
          company: "Ampstek",
          time: "Junho 2022 - Dezembro 2022",
          description: "Applications migration",
          technologies: ["Ansible", "DotNetCore"]
        },
        {
          position: "Senior Software Engineer",
          company: "Hangar",
          time: "Outubro 2020 - Junho 2022",
          description: "Desenvolvimento Full Stack.",
          technologies: ["Angular", "DotNetCore", "CSharp", "SQLServer"]
        },
        {
          position: "Senior Software Developer",
          company: "EY Central America",
          time: "Outubro 2018 - Julho 2020",
          description: "Desenvolvimento Full Stack. Robotic Process Automation.",
          technologies: ["CSharp", "BluePrism"]
        },
        {
          position: "PC Windows Software Engineer",
          company: "DXC Technology",
          time: "Março 2016 - Outubro 2018",
          description: "Desenvolvimento Back End. Desenvolvimento de Scripts. Suporte para Aplicativos.",
          technologies: ["VB", "DotNetCore", "CSharp"]
        }
      ],
      de:[
        {
          position: "Junior Software Developer",
          company: "Alten Delivery Centre",
          time: "April 2023 bis Heute",
          description: "Full Stack Entwicklung. Beratung zur digitalen Transformation.",
          technologies: ["Angular", "DotNetCore", "CSharp", "MySQL"]
        },
        {
          position: "Software Developer",
          company: "Ampstek",
          time: "Juni 2022 bis Dezember 2022",
          description: "Anwendungsmigration.",
          technologies: ["Ansible", "DotNetCore"]
        },
        {
          position: "Senior Software Engineer",
          company: "Hangar",
          time: "Oktober 2020 bis Juni 2022",
          description: "Full Stack Entwicklung",
          technologies: ["Angular", "DotNetCore", "CSharp", "SQLServer"]
        },
        {
          position: "Senior Software Developer",
          company: "EY Central America",
          time: "Oktober 2018 bis Juli 2020",
          description: "Full Stack Entwicklung. Robotic Process Automation.",
          technologies: ["CSharp", "BluePrism"]
        },
        {
          position: "PC Windows Software Engineer",
          company: "DXC Technology",
          time: "Marz 2016 bis Oktober 2018",
          description: "Back End Entwicklung. Scripts Entwicklung. Application support.",
          technologies: ["VB", "DotNetCore", "CSharp"]
        }
      ]
    },
    education:{
      es:[
        {
          title: "Master en Ciencia de Datos e Inteligencia de Negocios",
          school: "IMF Smart Education",
          date: "Abril 2023 - Presente",
          description: "Master enfocado en temas como Ciencia de Datos, Gobierno del Dato, Inteligencia Artificial, Modelos Estadísticos, entre otros.",
          location: "Madrid, España"
        },
        {
          title: "Master Web Front End Developer",
          school: "Virtual Learning of America",
          date: "Agosto 2022 - Febrero 2023",
          description: "Certificación de conocimientos en los frameworks Angular, React y VueJS.",
          location: "Costa Rica"
        },
        {
          title: "Bachillerato en Ingeniería de Software",
          school: "Universidad Técnica Nacional",
          date: "Enero 2011 - Diciembre 2018",
          description: "",
          location: "Alajuela, Costa Rica"
        }
      ],
      en:[
        {
          title: "Master's - Data Science e Business Intelligence",
          school: "IMF Smart Education",
          date: "April 2023 - Present",
          description: "Master's Degree covering topics such as Data Science, Data Governance, Artificial Intelligence, Statistic Models, among others.",
          location: "Madrid, España"
        },
        {
          title: "Master Web Front End Developer",
          school: "Virtual Learning of America",
          date: "August 2022 - February 2023",
          description: "Certification of proficiency in Angular, React and VueJS.",
          location: "Costa Rica"
        },
        {
          title: "Bachelor's Degree in Software Engineering",
          school: "Universidad Técnica Nacional",
          date: "January 2011 - December 2018",
          description: "",
          location: "Alajuela, Costa Rica"
        }
      ],
      pt:[
        {
          title: "Master en Ciencia de Datos e Inteligencia de Negocios",
          school: "IMF Smart Education",
          date: "Abril 2023 - Presente",
          description: "Master enfocado en temas como Ciencia de Datos, Gobierno del Dato, Inteligencia Artificial, Modelos Estadísticos, entre otros.",
          location: "Madrid, España"
        },
        {
          title: "Master Web Front End Developer",
          school: "Virtual Learning of America",
          date: "Agosto 2022 - Fevereiro 2023",
          description: "Certificación de conocimientos en los frameworks Angular, React y VueJS.",
          location: "Costa Rica"
        },
        {
          title: "Bachillerato en Ingeniería de Software",
          school: "Universidad Técnica Nacional",
          date: "Janeiro 2011 - Dezembro 2018",
          description: "",
          location: "Alajuela, Costa Rica"
        }
      ],
      de:[
        {
          title: "Master en Ciencia de Datos e Inteligencia de Negocios",
          school: "IMF Smart Education",
          date: "April 2023 bis Heute",
          description: "Master enfocado en temas como Ciencia de Datos, Gobierno del Dato, Inteligencia Artificial, Modelos Estadísticos, entre otros.",
          location: "Madrid, España"
        },
        {
          title: "Master Web Front End Developer",
          school: "Virtual Learning of America",
          date: "August 2022 bis Februar 2023",
          description: "Certificación de conocimientos en los frameworks Angular, React y VueJS.",
          location: "Costa Rica"
        },
        {
          title: "Bachillerato en Ingeniería de Software",
          school: "Universidad Técnica Nacional",
          date: "Januar 2011 bis Dezember 2018",
          description: "",
          location: "Alajuela, Costa Rica"
        }
      ]
    }
  }


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

  loadComponent(page:string):any{
    switch(page){
      case "portfolio":{
        return this.selectTexts(this.texts.portfolio);
      }
      case "experiences":{
        return this.selectTexts(this.texts.experiences);
      }
      case "education":{
        return this.selectTexts(this.texts.education);
      }
    }
  }
}
