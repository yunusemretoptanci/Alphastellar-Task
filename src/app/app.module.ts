import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FlexAreaComponent } from './flex-area/flex-area.component';
import { GridAreaComponent } from './grid-area/grid-area.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DataServiceComponent } from './data-service/data-service.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    FlexAreaComponent,
    GridAreaComponent,
    ParentComponentComponent,
    DataServiceComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
