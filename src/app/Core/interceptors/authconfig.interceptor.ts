import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { UserServices } from "../../servicios/servicios.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private userServices: UserServices) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.userServices.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
								//Con esto seteamos el Bearer + el token
            }
        });
        return next.handle(req);
    }
}

//El interceptor lo que hace es interceptar cualquier petición HTTP, en este caso el authToken, que se recupera a través de nuestro servicio, mediante la función getToken()
//Cada vez que hagamos una petición, va a ver si hay token, si hay, lo introduce