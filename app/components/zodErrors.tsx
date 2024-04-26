import uuid4 from "uuid4"

import style from "./Shorten.module.css"

const ZodErrors = ({errors}:{errors:string[] | null})=>{
    if(!errors) return null
    return(
        <div className={`${style.error} mt-2`}>
            {errors.map((error:string)=>
                <div key={uuid4()}>
                    {error}
                </div>
            )} 
        </div>
    )
}

export default ZodErrors