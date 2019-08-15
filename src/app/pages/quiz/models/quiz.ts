import { BaseResourceModel } from 'src/app/shared/models/base-resource-model';
import { Category } from '../../category/models/category';
import { Question } from 'src/app/shared/components/question/models/question';

export class Quiz extends BaseResourceModel {
    constructor(
        public title?: string,
        public category_id?: number,
        public category?: Category,
        public questions?: Question[]
    ){
        super();
    }


    static jsonFromQuiz(json: any): Quiz{
        return Object.assign(new Quiz, json);
    }

}