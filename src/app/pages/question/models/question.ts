import { Quiz } from '../../quiz/models/quiz';
import { TypesResponse } from 'src/app/shared/models/types-response';
import { Category } from '../../category/models/category';

export class Question{
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public response?: string,
        public options?: Array<string>,
        public points?: number,
        public type_id?: number,
        public type?: TypesResponse,
        public quiz_id?: number,
        public quiz?: Quiz,
        public category_id?: number,
        public category?: Category
    ){}

    static jsonFromQuestion(json: any): Question{
        return Object.assign(new Question, json);
    }

}