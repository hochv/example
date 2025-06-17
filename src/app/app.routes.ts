import { Routes } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                component: ExampleComponent,
                path: '/example'
            }
        ]
    }
];
