'use server'

import QuestionRepository from "./QuestionRepository"

export default async function deleteQuestion(id:string) {

    return QuestionRepository.delete(id)
    
}