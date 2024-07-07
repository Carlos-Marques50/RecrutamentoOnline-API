
export interface IntputDataVacancyDTO {
    requirements: string;
    category: string;
    title: string;
    description?: string;
    status: string;
    userId : string;
    dateEnd: Date;
}

export interface OutputDataVacancyDTO {
    id: string;
    requirements: string;
    category: string;
    title: string;
    description?: string;
    status: string;
    dateEnd: Date;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
