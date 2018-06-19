import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


export interface ExitComponent {
    canExit(): Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<ExitComponent> {
    
    canDeactivate(component: ExitComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return component.canExit();
    }
}