import { Question } from "@/core/model/Question";

export interface QuestionLineProps{
    question: Question
    onClick?: (question: Question) => void
}

export default function QuestionLine(props: QuestionLineProps){
    return(
        <div className="flex bg-zinc-900 gap-5 items-center p-4 rounded-md cursor-pointer"
        onClick={() => props.onClick?.(props.question)}>

        <div className="flex flex-col">
            <span className="text-xl font-black"> {props.question.statement}</span>

        </div>

        </div>
        


        
    )

}