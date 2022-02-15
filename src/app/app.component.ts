import { Component, OnInit } from '@angular/core'
import { Invoice } from './model/Invoice'
import { InvoicesService } from './services/invoices.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  invoices: Invoice[] = []

  title = 'invoices'

  public constructor(private invoicesService: InvoicesService) {
  }

  ngOnInit(): void {
    this.invoicesService.fetchAll().subscribe(invoices => {
      this.invoices = invoices
    })
  }
}
