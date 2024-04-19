"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import Modal from "./Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import style from './Header.module.css'

const Header = () =>{
    const [isOpenModal, setIsOpenModal] = useState(false)
    const handlerClickMenu = ()=>{
        setIsOpenModal(!isOpenModal)
    }
    return(
        <header className={`${style.container} container px-6 py-8`}>
            <nav className="flex justify-between">
                <Link href='/'>
                    <Image
                        alt="Logo Shortly"
                        src={'./images/logo.svg'}
                        width={121}
                        height={33}
                    />
                </Link>
                <Button isMenu={true} onClickAction={handlerClickMenu}>
                    <FontAwesomeIcon icon={faBars} className={style.icon__navbar} />
                </Button>
            </nav>
            <Modal isOpen={isOpenModal}>
                <div className="flex flex-col items-center gap-9">
                    <Link href='/features/'>Features</Link>
                    <Link href='/pricing/'>Pricing</Link>
                    <Link href='/resources/'>Resources</Link>
                </div>
                <hr className={style.separateModal}/>
                <div className="flex flex-col items-center self-stretch gap-6">
                    <Link href='/resources/'>Login</Link>
                    <Link href='/resources/' className={`${style.linkButton} py-2`}>Sign Up</Link>
                </div>

            </Modal>
        </header>
    )
}
export default Header