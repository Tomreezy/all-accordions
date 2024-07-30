import questions from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus,faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const WithSelect =()=>{
    const[allIds,setAllIds]=useState([])
    const[select,setSelect]=useState(false)

    const handleClick=(getId)=>{
        const arrCopy=allIds.slice()
        const decider = arrCopy.indexOf(getId)
        if(decider===-1){
            arrCopy.push(getId)
        }else{
            arrCopy.splice(decider,1)
        }

        return setAllIds(arrCopy)

    }

    const handleSelect =()=>{
        setSelect(!select)
        setAllIds([])
    }

    return(
        <div className="flex justify-center w-[70vw] sm:w-[60vw]">
            <div className="mt-32">
                <p className="text-center mb-4"><button onClick={handleSelect} className="border border-solid border-amber-700 px-2 bg-amber-400" >Select</button></p>
            <div className="border border-amber-700 p-2">
            {questions.map(question=>{
                return (
                    <div key={question.id} className="border border-amber-600 p-4">
                        <div className="flex w-full justify-between" onClick={()=> handleClick(question.id)}>
                        <p>{question.title}</p>
                        <span className="cursor-pointer">{allIds.indexOf(question.id)!== -1 && select ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} /> }</span>
                        </div>
                        {select ? allIds.indexOf(question.id) !== -1 && allIds.length >0 && <p>{question.info}</p> : null}
                    </div>
                )
            })}
            </div>
            </div>

           { !select ?  <Text /> : null }
        </div>
    )
}

export default WithSelect



const Text = ()=>{
    return (
        <div className="absolute bottom-5 bg-indigo-200 p-2 rounded-md left-5">
            <p className="text-red ">Buttons disabled</p>
        </div>
    )
}