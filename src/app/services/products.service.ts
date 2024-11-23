import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Product{
  id:string;
  name: string;
  ki:number;
  maxKi:string;
  race:string;
  gender:string;
  description:string;
  image:string;
  affiliation:string
}
export interface Links {
  first:    string;
  previous: string;
  next:     string;
  last:     string;
}

export interface Meta {
  totalItems:   number;
  itemCount:    number;
  itemsPerPage: number;
  totalPages:   number;
  currentPage:  number;
}
type ApiResponse={meta:Meta, links:Links, items: Product[]}
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  httpClient =inject(HttpClient)
  getAll(): Promise<ApiResponse>{
    return firstValueFrom(
      this.httpClient.get<ApiResponse>('https://dragonball-api.com/api/characters')
    )
  }
}
