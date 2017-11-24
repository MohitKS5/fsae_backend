import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SheetsService} from './services/sheets.service';
import {HttpModule} from '@angular/http';
import {LoginService} from './services/login.service';
import {SheetPermitService} from './services/sheet-permit.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RoutingModule} from './app.routing';
import {GuardsService} from './services/guards.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EmptyDialogComponent} from './components/dialogs/empty-dialog/empty-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    EmptyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RoutingModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  entryComponents: [
    EmptyDialogComponent,
  ],
  providers: [
    SheetsService,
    LoginService,
    SheetPermitService,
    GuardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
