import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  aboutme = [];
  videourl = "";
  constructor(private router:Router, private languages:LanguageService, private sanitizer:DomSanitizer) { 
    this.aboutme = this.languages.loadComponent("aboutme");
    this.videourl = this.safeURL(this.aboutme[0]["video"]);
    console.log("URL: " + this.videourl);
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {return false;}
  }

  safeURL(value: string):any{
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
