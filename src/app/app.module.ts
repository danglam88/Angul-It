import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { MathComponent } from './captcha/math/math.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { TextComponent } from './captcha/text/text.component';
import { ImageComponent } from './captcha/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultComponent,
    MathComponent,
    CaptchaComponent,
    TextComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
