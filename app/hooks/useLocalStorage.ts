import { useState, useEffect } from "react"
import { ShortenedLinks } from "../types"
const useLocalStorage = ( key: string, initialState: ShortenedLinks[]) => {
    const [shortenedLinks, setShortenedLinks] = useState(()=>{
        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : initialState
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(shortenedLinks))
    },[shortenedLinks, key])

    return [shortenedLinks, setShortenedLinks]
}
export default useLocalStorage

