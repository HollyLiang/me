import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../storage';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const url = req.url;
    const isCallAPI = this._isCallAPI(url);

    if (isCallAPI) {
      const update: any = {};
      if (url && url.startsWith('~/')) {
        update.url = url.replace('~/', '');
      }
      const token = this.userService.accessToken;
      if (token) {
        update.headers = { 'access-token': token };
      }
      req = req.clone(update);
    }

    return next.handle(req).pipe(
      mergeMap(event => {
        if (event instanceof HttpResponse) {
          return this._handleResponse(event, url);
        }
        return of(event);
      }),
      catchError((error: HttpErrorResponse) => {
        return this._handleResponse(error, url);
      })
    )
  }

  _handleResponse(event: HttpResponse<any> | HttpErrorResponse, url: string): Observable<any> {
    const isCallAPI = this._isCallAPI(url);
    if (isCallAPI === false) { return of(event); }

    this._handleAccessToken(event);

    switch (event.status) {
      case 200:
        return of(event);

      case 400:
        // TODO: 400 Error
        throw new Error('400');

      case 401:
        this._navigateTo('auth/login');
        break;
    }
  }


  /** @private Is call api url. */
  _isCallAPI(url: string) {
    return url.toLocaleLowerCase().startsWith('~/api');
  }


  /** @private Process access token. */
  _handleAccessToken(event: HttpResponse<any> | HttpErrorResponse) {
    const setAccessToken = event.headers.get('set-access-token');
    if (setAccessToken) {
      this.userService.accessToken = setAccessToken
    }
  }

  /** @private 切換路由 */
  _navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
