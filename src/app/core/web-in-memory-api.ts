import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Category } from '../pages/category/models/category';
import { Quiz } from '../pages/quiz/models/quiz';
import { Question } from '../pages/question/models/question';
import { TypesResponse } from '../shared/models/types-response';



export class ApiService implements InMemoryDbService{
    createDb(){
        let categories: Category[] = [
            {id: 1, name: 'Matemática', description: 'Prova de Matemática'},
            {id: 2, name: 'Português', description: 'Prova de Português'}
        ];
        
        let questions: Question[] = [
            {id: 1, name:'Nome', response: ['Vaca'], points: 10, type: 'seleção'},
            {id: 2, name:'Nome 2', response: ['Vaca 2'], points: 10, type: 'seleção'}
                 
        ];

        let quizzes: Quiz[] = [
            {id: 1, title: 'Animais', category_id: categories[0].id, category: categories[0], questions: [questions[0], questions[1]]},

        ];
        
        return {categories, quizzes, questions}
    }
}