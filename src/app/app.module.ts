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

const appRoutes:Routes = [
  {path: '', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'update/:id', component:UpdateComponent},
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
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    NeighborService,
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
