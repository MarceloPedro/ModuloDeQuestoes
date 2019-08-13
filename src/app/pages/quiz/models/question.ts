export class Question{
    constructor(
        public id?: number,
        public description?: string,
        public response?: string,
        public options?: Array<string>,
        public points?: number,
        public type?: string
    ){}
}