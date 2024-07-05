

export interface IntputDataVacancyDTO{
    requirements: string;
    category: string;
    title: string;
    description?: string;
    status: boolean;
    user_id: string;
    dateEnd:Date;
}

export interface OutputDataVacancyDTO{
    id: string;
    requirements: string;
    category: string;
    title: string;
    description?: string;
    status: boolean;
    candidateId: string;
    dateEnd: Date;
    createdAt: Date;
    updatedAt: Date;
}
