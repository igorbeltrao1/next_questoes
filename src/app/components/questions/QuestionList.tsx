import { Question } from "@/core/model/Question"
import QuestionLine from "./QuestionLine"

export interface QuestionListProps{
    questions: Question[]
    onClick?: (question: Question) => void
}

export default function QuestionList(props: QuestionListProps){
    return(
        <div className="flex flex-col gap-4">
           {props.questions.map((question: Question)=> {
            return <QuestionLine key={question.id} question={question} onClick={props.onClick}></QuestionLine>
           })}
        </div>
    )
}