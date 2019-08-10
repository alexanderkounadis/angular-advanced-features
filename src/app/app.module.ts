import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewPreferencesComponent } from './overview-preferences/overview-preferences.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OverviewPreferencesPostComponent } from './overview-preferences-post/overview-preferences-post.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
   declarations: [
      AppComponent,
      OverviewComponent,
      OverviewPreferencesComponent,
      OverviewPreferencesPostComponent,
      PaymentComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      NgxSpinnerModule,
      MatSlideToggleModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
