import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot,
  authService: AuthService = inject(AuthService),
  router: Router = inject(Router)
):
  | boolean
  | UrlTree
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree> => {
  return authService.user.pipe(
    take(1),
    map(user => {
    const isAuth =  !!user;
    if(isAuth) return true;
    return router.createUrlTree(['/auth']);
  }))
}
