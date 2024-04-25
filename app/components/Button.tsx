"use client"
import style from "./Button.module.css"

interface buttonsProps {
    children: React.ReactNode
    isMenu: boolean
    onClickAction(): void
}
const Button = ({children, isMenu= false, onClickAction}:buttonsProps) =>{
    return (
        isMenu ?
            <button type="button" onClick={onClickAction}>
                {children}
            </button>
            :
            <button type="submit">
                {children}
            </button>
    )
}

export default Button