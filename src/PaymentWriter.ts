import { CSVWriter } from "."

type Payment = {
  id: number
  amount: number
  to: string
  notes: string
}

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes']);

paymentWriter.addRows([
    {id: 1, amount: 50, to: 'siva', notes: 'for design work'},
    {id: 2, amount: 10, to: 'kiva', notes: 'for dev work'},
    {id: 3, amount: 24, to: 'kua', notes: 'for dev work'},
])

paymentWriter.save('./data/payments.csv');