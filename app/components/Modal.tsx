import style from "./Modal.module.css"

interface ModalProps{
    children: React.ReactNode
    isOpen: boolean
}
const Modal = ({children, isOpen}:ModalProps)=>{
    if(!isOpen) return
    return(
        <div className={style.overlay}>
            <div className={`${style.content} px-6 py-9`}>
                {children}
            </div>
        </div>
    )
}

export default Modal