export class Question{
    constructor(
        public id?: number,
        public name?: string,
        public type?: string,
        public response?: string[],
        public points?: number
    ){}

    static jsonFromQuestion(json: any): Question{
        return Object.assign(new Question, json);
    }

}