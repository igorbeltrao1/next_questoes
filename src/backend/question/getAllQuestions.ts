'use server'

import QuestionRepository from "./QuestionRepository"

export default async function getAllQuestions() {
    return QuestionRepository.getAll
    
}