export enum status_type {
    PENDING = 'Pending',
    ACTIVE = 'Active',
    REJECTED = 'Rejected',
}

export default class Candidate {

    public name: string;
    public num_bi: string;
    public email: string;
    public phone: number;
    public doc: string;
    public status: string;
    public dateBirth: Date;

    constructor(params: Candidate) {
        Object.assign(this, params);
    }
}

