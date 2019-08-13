import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Category } from '../pages/category/models/category';

export class ApiService implements InMemoryDbService{
    createDb(){
        let categories: Category[] = [
            {id: 1, name: 'Questão', description: 'Questão a ser discutida'}
        ];

        return {categories}
    }
}