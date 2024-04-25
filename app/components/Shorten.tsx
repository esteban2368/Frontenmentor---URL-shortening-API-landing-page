"use client"
import Image from "next/image"
import { useState } from "react"
import uuid4 from "uuid4"
import styleHome from "../HomePage.module.css"
import style from "./Shorten.module.css"
interface shortenedLinks{
    id:string;
    url: string;
    shortenLink: string
}
const Shorten = () =>{

    const [shortenedLinks, setShortenedLinks] = useState([
        {
            id: uuid4(),
            url: "https://www.frontendmentor.ioG",
            shortenLink: "link/gflgkflgkf"
        }, {
            id: uuid4(),
            url: "https://www.frontendmentor.io/",
            shortenLink: "link/gflgkflgkfdsdsadad"
        }
    ])
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
                <form className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full">
                    <input type="text" name="query" className={`${style.input} grow px-4 sm:px-8 py-3 sm:py-5`} placeholder="Shorten a link here..." />
                    <button type="submit" className={`${style.button} p-3 sm:px-10`}>Shorten it!</button>
                </form>
            </div>
            <div className="container flex flex-col gap-6">
                {shortenedLinks.map((shortenedLink)=>
                    <div key={shortenedLink.id} className={`${style.shortenedLink} sm:flex justify-between items-center sm:px-6 sm:py-4`}>
                        <div className={`${style.shortenedLink__url} p-4 sm:p-0`}>{shortenedLink.url}</div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-0">
                            <div className={style.shortenedLink__link}>{shortenedLink.shortenLink}</div>
                            <button type="button" className={`${style.button} ${style.buttonLink} p-2 sm:px-6`}>Copy</button>   
                        </div>
                    </div>
                )}
            </div>
        </> 
    )
}
export default Shorten