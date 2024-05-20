import { Injectable } from '@angular/core';
import{ CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
imprt{ }
export class LoginGuard  implements CanActivate {
    constructor(private router: Router, 
        private store: Store
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):  boolean{
        returnthis.store.selectOne
    }
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
    }
}