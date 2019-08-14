import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Category } from '../pages/category/models/category';
import { Quiz } from '../pages/quiz/models/quiz';
import { Question } from '../pages/question/models/question';
import { TypesResponse } from '../shared/models/types-response';



export class ApiService implements InMemoryDbService{
    createDb(){
        let categories: Category[] = [
            {id: 1, name: 'Questão 1', description: 'Questão a ser discutida 1'},
            {id: 2, name: 'Questão 2', description: 'Questão a ser discutida 2'}
        ];

        let quizzes: Quiz[] = [
            {id: 1, title: 'Animais'},
            {id: 2, title: 'Tecnologias'}
        ];

        let types_response: TypesResponse[] = [
            {id: 1, name: 'Múltipla escolha'},
            {id: 2, name: 'Seleção'},
            {id: 3, name: 'Avaliação com estrelas'}
        ];

        let questions: Question[] = [
            {id: 1, title:'Nome', description: 'qual o animal que faz mu?', response: 'Vaca', options: ['Tigre', 'Rato', 'Gato'],  points: 10, type_id: types_response[0].id,
                type: types_response[0], quiz_id: quizzes[0].id, quiz: quizzes[0], category_id: categories[0].id, category: categories[0]}
        ];
        

        return {categories, quizzes, questions, types_response}
    }
}