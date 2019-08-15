import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Category } from '../pages/category/models/category';
import { Quiz } from '../pages/quiz/models/quiz';
import { Question } from '../pages/question/models/question';

export class ApiService implements InMemoryDbService{
    createDb(){
        let categories: Category[] = [
            {id: 1, name: 'Matemática', description: 'Provas de Matemática'},
            {id: 2, name: 'Português', description: 'Provas de Português'}
        ];
        
        let questions: Question[] = [
            {id: 1, name:'Questão 1', response: ['true'], points: 10, type: 'seleção'},
            {id: 2, name:'Questão 2', response: ['false'], points: 10, type: 'seleção'}
                 
        ];

        let quizzes: Quiz[] = [
            {id: 1, title: 'Prova de Matemática', category_id: categories[0].id, category: categories[0], questions: [questions[0], questions[1]]},

        ];
        
        return {categories, quizzes, questions}
    }
}