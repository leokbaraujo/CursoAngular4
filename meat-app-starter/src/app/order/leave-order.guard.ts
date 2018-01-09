import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from 'app/order/order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponent: OrderComponent,
                  activateSnapshot: ActivatedRouteSnapshot,
                  routerState: RouterStateSnapshot): boolean {
        if(!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra?')
        }else{
            return true
        }
    }

}