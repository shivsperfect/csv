import { CSVWriter } from ".";

interface Employee {
  id: number
  name: string
  role: string
  salary: number
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary']);

employeeWriter.addRows([
  {id: 1, name: 'siva', role: 'frontend', salary: 2000},
  {id: 2, name: 'kumar', role: 'backend', salary: 1000},
])

employeeWriter.save('./data/employees.csv');