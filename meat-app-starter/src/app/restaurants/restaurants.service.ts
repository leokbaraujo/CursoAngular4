import { AboutComponent } from './../about/about.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from './../app.api';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {
      
    constructor(private http: HttpClient){ }
    //q atributo generico para realizar consultar por qualquer própriedade do objeto
    restaurants(search?: string): Observable<Restaurant[]> {  
        let params: HttpParams = undefined
        if (search) {
            params = new HttpParams().set('q', search)
        }
        return this.http.get<Restaurant[]> (`${MEAT_API}/restaurants`, {params: params})
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }

}