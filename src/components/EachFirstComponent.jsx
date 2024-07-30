import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const EachQuestion = ({title,info,id})=>{
    const[show,setShow]=useState(false)

    return<div className="m-4 border-2 transition-height duration-700 border-solid border-amber-700 p-2">
        <div className="flex justify-between ">
        <p className="font-semibold">{title}</p>
        <span onClick={()=> setShow(!show)}>{show ? <FontAwesomeIcon icon={faMinus} />:<FontAwesomeIcon icon={faPlus} />}</span>
        </div>
        {show && <p className="text-slate-700 transition-all duration-700">{info}</p>}
    </div>
}

export default EachQuestion