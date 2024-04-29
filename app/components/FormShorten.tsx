import { useFormStatus } from "react-dom"
import { useEffect } from "react"

import uuid4 from "uuid4"
import ZodErrors from "./zodErrors"
import style from "./Shorten.module.css"
import { setShortenedLinks } from "../types"

const FormShorten = ({ stateForm, onShortenedLinksChange, shortenedLinks }: setShortenedLinks) =>{
    const { pending } = useFormStatus()
    const classNameError = stateForm?.error ? style["inputError"] : "";

    const ListShortenedLinks = ()=>{
        if(stateForm?.data && !stateForm?.data.error) onShortenedLinksChange(
            [
                ...shortenedLinks!,
                {
                    id:uuid4(),
                    url: stateForm?.data?.dataUrl,
                    shortenLink: stateForm?.data?.urlShorten?.result_url
                }
            ]
        )
    }
    useEffect(()=>{
        
        ListShortenedLinks()

    },[stateForm])

    return(
        <>
            <div className="grow relative">
                <input type="text" name="url" className={`${style.input} ${classNameError} px-4 sm:px-8 py-3 sm:py-5`} placeholder="Shorten a link here..." />
                <ZodErrors errors={stateForm?.error?.url}/>
            </div>
            <button type="submit" className={`${style.button} p-3 sm:py-5 sm:px-10`} disabled={pending}>
                {pending ? "Shorting..." : "Shorten it!" }
            </button>
        </>
    )
}

export default FormShorten