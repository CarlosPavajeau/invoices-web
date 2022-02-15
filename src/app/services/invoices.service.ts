import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Invoice } from '../model/Invoice'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) {

  }

  fetchAll() {
    return this.http.get<Invoice[]>(`${environment.baseUrl}invoices`)
  }
}
