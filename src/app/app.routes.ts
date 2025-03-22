import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { ControlFlowsComponent } from './control-flows/control-flows.component';
import { ParentComponent } from './ip-op-components/parent/parent.component';
import { APIIntegrationComponent } from './api-integration/api-integration.component';

export const routes: Routes = [
  { path: 'signal', loadComponent:()=>import('./signals/signals.component').then((c)=> c.SignalsComponent)},
  { path: 'control-flow', loadComponent:()=>import('./control-flows/control-flows.component').then((c)=>c.ControlFlowsComponent) },
  { path: 'ip-op', loadComponent:()=> import('./ip-op-components/parent/parent.component').then((c)=>c.ParentComponent) },
  { path: 'api-integration', loadComponent:()=>import('./api-integration/api-integration.component').then((c)=>c.APIIntegrationComponent)},
];
