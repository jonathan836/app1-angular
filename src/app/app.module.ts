import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DataServices } from './data/data.services';
import { NeighborService } from './neighbor.service';
import { ChildComponent } from './child/child.component';
import { UpdateComponent } from './update/update.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ServiceAuth } from './data/auth.service';
import { RegisterComponent } from './register/register.component';

const appRoutes:Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'update/:id', component:UpdateComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component:LoginComponent},
  {path: '**', component:ErrorComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    ErrorComponent,
    ChildComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    NeighborService,
    DataServices,
    ServiceAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
