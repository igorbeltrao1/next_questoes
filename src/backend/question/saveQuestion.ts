'use server'

import { Question } from "@/core/model/Question";
import Id from "@/core/utils/Id";
import QuestionRepository from "./QuestionRepository";

export default async function saveQuestion(question: Partial<Question>){
    const newQuestion= {
        ...question,
        id: question.id ?? Id.novo,
    }
    return QuestionRepository.save(newQuestion as Question)
}
