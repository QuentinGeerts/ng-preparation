import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor () { }

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Récupérer le token stocké dans le localstorage
    const authToken = localStorage.getItem('authToken');
    console.log("TokenInterceptor  intercept  authToken:", authToken);

    // Vérifier s'il y a un token et qu'il n'est pas vide
    if (authToken && authToken != '') {
      console.log("TokenInterceptor  intercept  authToken:", authToken);
      // Cloner la requête et ajouter l'en-tête d'authentification
      const authReq = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken
        }
      });

      // Ajouter dans les providers du module l'interceptor
      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
