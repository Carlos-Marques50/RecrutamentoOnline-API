
export interface IntputDataApplicationDTO{
    description?: string
    candidateId: string
    vacancyId  : string
}

export interface OutputDataApplicationDTO{
    id: string;
    description?: string
    candidateId: string
    vacancyId  : string
    createdAt: Date;
    updatedAt: Date;
}
