import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ruta1Component } from './components/ruta1/ruta1.component';
import { Ruta2Component } from './components/ruta2/ruta2.component';
import { Ruta3Component } from './components/ruta3/ruta3.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes : Routes = [
	{ path : '', component : Ruta1Component },
	{ path : 'ruta1', component : Ruta1Component},
	{ path : 'ruta2', component : Ruta2Component},
	{ path : 'ruta3', component : Ruta3Component},
	{ path : '**', component : ErrorComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
