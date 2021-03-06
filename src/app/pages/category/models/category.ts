import { BaseResourceModel } from 'src/app/shared/models/base-resource-model';

export class Category extends BaseResourceModel{
    constructor(
        public name?: string,
        public description?: string 
    ){
        super();
    }

    static jsonFromCategory(json: any): Category{
        return Object.assign(new Category, json);
    }

}