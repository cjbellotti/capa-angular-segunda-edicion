import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ruta1Component } from './components/ruta1/ruta1.component';
import { Ruta2Component } from './components/ruta2/ruta2.component';
import { Ruta3Component } from './components/ruta3/ruta3.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';

import { LoginGuard } from './guards/login.guard';

const appRoutes : Routes = [
	{ path : '', component : Ruta1Component, canActivate : [LoginGuard] },
	{ path : 'login', component : LoginComponent },
	{ path : 'ruta1', component : Ruta1Component, canActivate : [LoginGuard]},
	{ path : 'ruta2', component : Ruta2Component, canActivate : [LoginGuard]},
	{ path : 'ruta3', component : Ruta3Component, canActivate : [LoginGuard]},
	{ path : '**', component : ErrorComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
