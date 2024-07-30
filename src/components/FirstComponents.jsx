import questions from "../data"
import EachQuestion from "./EachFirstComponent"



const FistComponents=()=>{
    return (
        <>
        <div className="border-2 p-2 w-[70vw] border-solid border-amber-700">
            {questions.map(question=>{
                return <EachQuestion {...question}  key={question.id}/>
            })}
        </div>
        </>
    )
}

export default FistComponents