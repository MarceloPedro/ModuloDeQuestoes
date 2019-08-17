import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Category } from '../pages/category/models/category';
import { Quiz } from '../pages/quiz/models/quiz';
import { Question } from '../shared/components/question/models/question';
import { Response } from '../shared/models/response'

export class ApiService implements InMemoryDbService{
    createDb(){
        let categories: Category[] = [
            {id: 1, name: 'Matemática', description: 'Provas de Matemática'},
            {id: 2, name: 'Português', description: 'Provas de Português'}
        ];
        
        let questions: Question[] = [
            {id: 1, name:'Questão 1', response: ['true'], points: 10, type: 'Seleção'},
            {id: 2, name:'Questão 2', response: ['5'], points: 10, type: 'Avaliação com Estrelas'},
            {id: 3, name:'Questão 3', response: ['Resposta 1', 'Resposta 2', 'Resposta 3'], points: 10, type: 'Múltipla Escolha'}
                 
        ];

        let quizzes: Quiz[] = [
            {id: 1, title: 'Prova de Matemática', category_id: categories[0].id, category: categories[0], questions: [questions[0], questions[1], questions[2]]},

        ];

        let responses: Response[] = [
            {id: 1, name: 'Marcelo', response: ['false', '5', 'Resposta 1'], points: 40, quiz_id: quizzes[0].id, quiz: quizzes[0]}
        ]
        
        return {categories, quizzes, questions, responses}
    }
}