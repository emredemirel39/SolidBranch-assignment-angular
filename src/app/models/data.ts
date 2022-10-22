export interface Data {
    type: 'income' | 'outcome' | 'loan' | 'investment'
    id: string
    amount: number
    name: { // Nested object with it’s own properties
        first: string;
        last: string;
    },
    company: string;
    email: string;
    phone: string;
    address: string
}
