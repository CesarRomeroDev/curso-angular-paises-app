import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

//se importan los componentes que vamos a enrutar 
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';        
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [                 
    {
        path: '',                        
        component: PorPaisComponent,            //primer ruta principal de nuestro componente
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',                            //cualquier path que no coincida con los de los de arriba, direccionar a home inicio.
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )         //importamos nuestro RuterModulo para utilizar nuestras rutas .
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}