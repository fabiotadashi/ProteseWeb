import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ContributeComponent } from "./pages/contribute/contribute.component";
import { RequestComponent } from "./pages/request/request.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { AccountComponent } from "./pages/account/account.component";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [

  // home
  {
    path: '',
    component: HomePageComponent
  },


  // contribute
  {
    path: 'contribute',
    component: ContributeComponent
  },

  // request
  {
    path: 'request',
    component: RequestComponent
  },

  // account
  {
    path: 'account',
    component: AccountComponent
  },


  // about
  {
    path: 'about',
    component: AboutComponent
  },

  // 404
  {
    path: '**',
    component: NotFoundComponent
  }

]

export const RoutingModule = RouterModule.forRoot(routes);