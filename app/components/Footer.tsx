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
            <div className={`${style.container__inner} container flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 py-12`}>
                <Link href='/' className='md:mr-auto'>
                    <Image
                        alt="Logo Shortly"
                        src={'./images/logo-light.svg'}
                        width={121}
                        height={33}
                        className='m-auto'
                    />
                </Link>
                <div className='text-center sm:text-left'>
                    <h3 className='mb-7'>Features</h3>
                    <ul className="links flex flex-col gap-3">
                        <li>
                            <Link href="/">Link Shortening</Link>
                        </li>
                        <li>
                            <Link href="/">Branded Links</Link>
                        </li>
                        <li>
                            <Link href="/">Analytics</Link>
                        </li>
                    </ul>     
                </div>
                <div className="text-center sm:text-left">
                    <h3 className='mb-7'>Resources</h3>
                    <ul className="links flex flex-col gap-3">
                        <li>
                            <Link href="/">Blog</Link>
                        </li>
                        <li>
                            <Link href="/">Developers</Link>
                        </li>
                        <li>
                            <Link href="/">Support</Link>
                        </li>
                    </ul>     
                </div>
                <div className="text-center sm:text-left">
                    <h3 className='mb-7'>Company</h3>
                    <ul className="links flex flex-col gap-3">
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Our Team</Link>
                        </li>
                        <li>
                            <Link href="/">Careers</Link>
                        </li>
                        <li>
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