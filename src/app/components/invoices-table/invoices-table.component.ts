import { Component, Input, OnInit } from '@angular/core'
import { Invoice } from '../../model/Invoice'

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.css']
})
export class InvoicesTableComponent {
  @Input() invoices: Invoice[] = []
  displayedColumns: string[] = [
    'id',
    'customer',
    'city',
    'nit',
    'total',
    'subtotal',
    'iva',
    'retention',
    'createdAt',
    'state',
    'paid',
    'paidAt',
  ]
}
