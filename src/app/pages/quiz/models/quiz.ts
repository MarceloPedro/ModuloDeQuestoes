import { Category } from '../../category/models/category';
import { BaseResourceModel } from 'src/app/shared/models/base-resource-model';

export class Quiz extends BaseResourceModel {
    constructor(
        public title?: string
    ){
        super();
    }


    static jsonFromQuiz(json: any): Quiz{
        return Object.assign(new Quiz, json);
    }

}