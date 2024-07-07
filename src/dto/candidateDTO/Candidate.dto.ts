
export interface IntputDataCandidateDTO{
    name: string;
    num_bi: string;
    email: string;
    phone: number;
    doc: string;
    status: string;
    dateBirth: Date;
}

export interface OutputDataCandidateDTO{
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
