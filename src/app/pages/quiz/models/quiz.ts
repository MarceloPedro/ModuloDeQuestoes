export class Quiz{
    constructor(
        public id?: number,
        public title?: string,
        public questions?: Array<string>,
        public category?: string,
    ){}
}