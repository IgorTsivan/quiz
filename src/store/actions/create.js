import axios from 'axios'
import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from './actionTypes'

export function createQuizQestion(item){
    return{
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export function resetQuizCreation(){
    return{
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz(){
    return async (dispatch, getState)=>{
        await axios.post('https://my-project-1564136785123.firebaseio.com/quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}