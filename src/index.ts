import { appendFileSync } from "fs";


export class CSVWriter<T> {
    private csv: string;

    constructor(private columns: (keyof T)[]) {
        this.csv = this.columns.join(',') + '\n';
    }

    save(filename: string): void {
        appendFileSync(filename, this.csv);
        this.csv = ''
        console.log('file saved to ', filename)
    }

    addRows (values: T[]): void {
        // _formatRow
        let rows = values.map(v => this._formatRow(v));
        this.csv += rows.join('\n');
    }

    private _formatRow(value: T): string {
        return this.columns.map(col => value[col]).join(',');
    }
}
