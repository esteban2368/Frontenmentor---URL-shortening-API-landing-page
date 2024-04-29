import { ShortenedLinks } from "../types"

import useCopyClipBoard from "../hooks/useCopyClipBoard"
import style from "./Shorten.module.css"

interface PropsShortenedLink{
    link: ShortenedLinks
 }
 
 const ShortenedLink = ({link}:PropsShortenedLink) =>{
    const [isCopy, copyToClipBoard] = useCopyClipBoard(link.shortenLink)

    const classNameButtonCopied = isCopy ? style["buttonCopied"]: ""
    return (
        <li className={`${style.shortenedLink} sm:flex justify-between items-center sm:px-6 sm:py-4 sm:gap-2`}>
            <div className={`${style.shortenedLink__url} p-4 sm:p-0`}>{link.url}</div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-0">
                <div className={style.shortenedLink__link}>{link.shortenLink}</div>
                <button type="button" className={`${style.button} ${style.buttonLink} ${classNameButtonCopied} p-3 sm:px-6`} onClick={copyToClipBoard}>
                    {isCopy ? "Copied!" : "Copy"}
                </button>   
            </div>
        </li>
    )
 }
 export default ShortenedLink