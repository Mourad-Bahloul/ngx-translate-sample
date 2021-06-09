import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang("fr");
    this.translate.use('fr');
  }
  title = "ngx-translate-use";

  public useFr() {
    this.translate.use('fr');
  }

  public useEn() {
    this.translate.use('en');
  }
}
