import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RequestComponent } from "app/pages/request/request.component";
import { ContributeComponent } from "app/pages/contribute/contribute.component";
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccountComponent } from './pages/account/account.component';
import { PercentChartComponent } from './component/percent-chart/percent-chart.component';

// Modulos
import { RoutingModule } from "app/app.routes";
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomePageComponent,
    ContributeComponent,
    RequestComponent,
    NotFoundComponent,
    AccountComponent,
    PercentChartComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
