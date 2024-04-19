import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

import style from './Footer.module.css'
const Footer = ()=>{
    return(
        <footer className={style.container}>
            <div className={`${style.container__inner} flex flex-col gap-10 py-12`}>
                <Link href='/'>
                    <Image
                        alt="Logo Shortly"
                        src={'./images/logo-light.svg'}
                        width={121}
                        height={33}
                        className='m-auto'
                    />
                </Link>
                <div className={style.section}>
                    <h3 className='mb-7'>Features</h3>
                    <ul className="flex flex-col gap-3">
                        <li className={style.linkItem}>
                            <Link href="/">Link Shortening</Link>
                        </li>
                        <li className={style.linkItem}>
                            <Link href="/">Branded Links</Link>
                        </li>
                        <li className={style.linkItem}>
                            <Link href="/">Analytics</Link>
                        </li>
                    </ul>     
                </div>
                <div className={style.section}>
                    <h3 className='mb-7'>Resources</h3>
                    <ul className="flex flex-col gap-3">
                        <li className={style.linkItem}>
                            <Link href="/">Blog</Link>
                        </li>
                        <li className={style.linkItem}>
                            <Link href="/">Developers</Link>
                        </li>
                        <li className={style.linkItem}>
                            <Link href="/">Support</Link>
                        </li>
                    </ul>     
                </div>
                <div className={style.section}>
                    <h3 className='mb-7'>Company</h3>
                    <ul className="flex flex-col gap-3">
                        <li className={style.linkItem}>
                            <Link href="/">About</Link>
                        </li>
                        <li className={style.linkItem}>
                            <Link href="/">Our Team</Link>
                        </li>
                        <li className={style.linkItem}>
                            <Link href="/">Careers</Link>
                        </li>
                        <li className={style.linkItem}>
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>     
                </div>
                <div className={`${style.section__social} flex justify-center gap-6`}>
                    <a href="">
                        <FontAwesomeIcon icon={faSquareFacebook} size='xl'/>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faTwitter} size='xl'/>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faPinterest} size='xl'/>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faInstagram} size='xl'/>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer