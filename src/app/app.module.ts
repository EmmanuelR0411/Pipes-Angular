import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la app
import loaclEs from '@angular/common/locales/es-MX';
import loaclFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData( loaclEs );
registerLocaleData( loaclFr );



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    //Registramos de manera local y el formato del pais que importamos (cambia fecha, numeos..)
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
