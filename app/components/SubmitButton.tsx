import { useFormStatus } from "react-dom"

import style from "./Shorten.module.css"

const SubmitButton = () =>{
    const { pending } = useFormStatus()
    return(
        <button type="submit" className={`${style.button} p-3 sm:py-5 sm:px-10`} disabled={pending}>
            {pending ? "Shorting..." : "Shorten it!" }
        </button>
    )
}

export default SubmitButton