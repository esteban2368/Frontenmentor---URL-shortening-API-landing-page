"use client"
import Image from "next/image"

import { useEffect, useState } from "react"
import { useRef } from "react"
import { useFormStatus } from "react-dom"
import { useFormState } from "react-dom"

import FormShorten from "./FormShorten"
import ListShortenedLinks from "./ListShortenedLinks"
import ZodErrors from "./zodErrors"
import uuid4 from "uuid4"
import { ShortenedLinks } from "../types"
import { sendData } from "../actions/actions"

import styleHome from "../HomePage.module.css"
import style from "./Shorten.module.css"

const initialState = {
    data: null,
    errors: null,
    message: null
}

const Shorten = () =>{
    const refForm = useRef<HTMLFormElement | null>(null)
    const [state, formAction] = useFormState(sendData, null)
    const [shortenedLinks, setShortenedLinks] = useState<ShortenedLinks[] | null>([])
    if(!state?.error) refForm.current?.reset()

    useEffect(()=>{

    }, [shortenedLinks])
    return(
        <>
            <div className={`${styleHome.banner} ${styleHome.bannerShorten} container p-6 sm:px-16 sm:py-12`}>
                <div className={styleHome.banner__bg}>
                    <Image
                        alt="bg shorten mobile"
                        src="./images/bg-shorten-mobile.svg"
                        fill
                        className="sm:hidden object-cover object-[60px_-40px]"
                    />
                    <Image
                        alt="bg shorten desktop"
                        src="./images/bg-shorten-desktop.svg"
                        fill
                        className="hidden sm:block object-cover object-center"
                    />
                </div>
                <form ref={refForm} action={formAction} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 w-full">
                    <FormShorten stateForm={state} onShortenedLinksChange={setShortenedLinks} shortenedLinks={shortenedLinks}/>
                </form>
            </div>
            <ul className="container flex flex-col gap-6">
                <ListShortenedLinks links={shortenedLinks}/>
                <pre>{JSON.stringify(state, null)}</pre>
                {/*shortenedLinks.map((shortenedLink)=>
                    <div key={shortenedLink.id} className={`${style.shortenedLink} sm:flex justify-between items-center sm:px-6 sm:py-4`}>
                        <div className={`${style.shortenedLink__url} p-4 sm:p-0`}>{shortenedLink.url}</div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-0">
                            <div className={style.shortenedLink__link}>{shortenedLink.shortenLink}</div>
                            <button type="button" className={`${style.button} ${style.buttonLink} p-2 sm:px-6`}>Copy</button>   
                        </div>
                    </div>
                )*/}
            </ul>
        </> 
    )
}
export default Shorten