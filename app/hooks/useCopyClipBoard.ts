import { useState} from "react"

const useCopyClipBoard = (text: string) => {
    const [isCopy, setIscopy] = useState(false)

    const copyToClipBoard = async ()=>{
        try {
            await navigator.clipboard.writeText(text)
            setIscopy(true)
        } catch (error) {
            setIscopy(false)
        }
    }
    return [isCopy, copyToClipBoard] as const
}
export default useCopyClipBoard