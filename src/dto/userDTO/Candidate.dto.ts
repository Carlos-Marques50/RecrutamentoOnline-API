
export interface IntputDataCandidate {
    name: string;
    num_bi: number;
    email: string;
    phone: number;
    doc: string;
    status: string;
    dateBirth: Date;
}

export interface OutputDataCandidate {
    id: string;
    name: string;
    num_bi: string;
    email: string;
    phone: number;
    doc: string;
    status: string;
    dateBirth: Date;
    createdAt: Date;
    updatedAt: Date;
}
