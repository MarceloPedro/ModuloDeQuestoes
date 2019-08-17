import { BaseResourceModel } from 'src/app/shared/models/base-resource-model';
import { Quiz } from 'src/app/pages/quiz/models/quiz';

export class Response extends BaseResourceModel{
    constructor(
        public name?: string,
        public response?: string[],
        public points?: number,
        public quiz_id?: number,
        public quiz?: Quiz
    ){
        super()
    }

   static jsonFromResponse(json: any){
        return Object.assign(new Response, json);
    }

}