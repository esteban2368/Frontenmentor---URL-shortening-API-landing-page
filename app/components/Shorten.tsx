"use client"
import Image from "next/image"

import { useEffect, useState} from "react"
import { useRef } from "react"
import { useFormState } from "react-dom"

import ZodErrors from "./zodErrors"
import SubmitShorten from "./SubmitShorten"
import ListShortenedLinks from "./ListShortenedLinks"
import useLocalStorage from "../hooks/useLocalStorage"

import { ShortenedLinks } from "../types"
import { sendData } from "../actions/actions"
import uuid4 from "uuid4"

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

    const [shortenedLinks, setShortenedLinks] = useLocalStorage("shortenedLinks", [])
    const classNameError = state?.error ? style["inputError"] : "";

    useEffect(()=>{
        const updateShortenedLinks = ()=>{
            if(!state?.error) refForm.current?.reset()
            if(state?.data && !state?.error) setShortenedLinks(
                [
                    ...shortenedLinks!,
                    {
                        id:uuid4(),
                        url: state?.data?.dataUrl,
                        shortenLink: state?.data?.urlShorten?.result_url
                    }
                ]
            )
        }
        
        updateShortenedLinks()

    },[state])

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
                    <div className="grow relative">
                        <input type="text" name="url" className={`${style.input} ${classNameError} px-4 sm:px-8 py-3 sm:py-5`} placeholder="Shorten a link here..." />
                        <ZodErrors errors={state?.error?.url}/>
                    </div>
                    <SubmitShorten/>
                </form>
            </div>
            <ul className="container flex flex-col gap-6">
                <ListShortenedLinks links={shortenedLinks}/>
            </ul>
        </> 
    )
}
export default Shorten