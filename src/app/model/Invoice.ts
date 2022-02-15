export type Invoice = {
  id: string
  customer: string
  city: string
  nit: string
  total: number
  subTotal: number
  iva: number
  retention: number
  createdAt: string
  state: string
  paid: boolean
  paidAt: string
}
