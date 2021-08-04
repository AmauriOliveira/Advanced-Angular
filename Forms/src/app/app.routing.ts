import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { CadastroNovoComponent } from './demos/reactiveForms/cadastro-novo/cadastro-novo.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro-novo', component: CadastroNovoComponent },
    {
        path: 'produtos',
        loadChildren: () =>
            import('./demos/componentArchitecture/product.module').then(
                m => m.ProductModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(rootRouterConfig)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
