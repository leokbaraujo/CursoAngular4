import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class ErroHandler {
    static handleError(error: HttpErrorResponse | any) {
        let erroMessage: string
        if (error instanceof HttpErrorResponse) {
            const body = error.error
            erroMessage = `${error.url}: ${error.status} - ${error.statusText} || ''} ${body}`
        } else {
            erroMessage = erroMessage ? error.message : error.toString()
        }
        console.log(erroMessage)
        return Observable.throw(erroMessage)
    } 
}