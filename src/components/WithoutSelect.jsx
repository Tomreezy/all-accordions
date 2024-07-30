import { useState } from "react"
import questions from "../data"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const WithoutSelect = ()=>{
    const[currentIndex,setCurrentIndex]=useState(null)

    const handleClick=(getId)=>{
        setCurrentIndex(getId==currentIndex?null:getId)
    }

    return(
        <div className="  border-2 border-amber-700 w-[80vw] sm:w-[50vw] p-2">
            {questions.map(question=>{
                return <div className=" m-2 border-amber-700 border-2 border-solid p-1">
                    <div className="flex justify-between space-x-2 items-center" onClick={()=> handleClick(question.id)}>
                        <p className="font-bold text-lg">{question.title}</p>
                        <span className="cursor-pointer">{currentIndex==question.id?<FontAwesomeIcon icon={faMinus} /> :<FontAwesomeIcon icon={faPlus} />}</span>
                        </div>
                        {currentIndex===question.id && <hr />}
                        {
                            currentIndex===question.id?<p className="text-sm p-2">{question.info}</p>: null
                        }

                    </div>
            })}
        </div>
    )
}

export default WithoutSelect