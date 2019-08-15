import { Quiz } from '../../quiz/models/quiz';
import { TypesResponse } from 'src/app/shared/models/types-response';
import { Category } from '../../category/models/category';

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