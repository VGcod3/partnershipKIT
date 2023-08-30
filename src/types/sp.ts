export interface iSellingPoint {
    compulsory: boolean;
    name: string;
    active: boolean;
    price: number;
    annotation: string;
    services: string[];
}

export interface iOptional {
    name: string;
    price: number;
    active: boolean;
}