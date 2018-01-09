import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { OrderComponent } from './order.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { LeaveOrderGuard } from './leave-order.guard';

const ROUTES: Routes = [
    {path: '', component: OrderComponent, canActivate: [LeaveOrderGuard]}
]

@NgModule({
    declarations: [OrderComponent, DeliveryCostsComponent, OrderItensComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {}