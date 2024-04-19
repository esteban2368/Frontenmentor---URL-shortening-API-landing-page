import Image from "next/image";
import Link from "next/link";
import style from "./HomePage.module.css"
export default function Home() {
  return (
    <main className={style.container}>
      <div className={style.hero}>
        <div className={style.hero__image}>
          <Image
            alt="Ilustration person are working"
            src="./images/illustration-working.svg"
            fill
            className={`${style.hero__imageIMG} ml-6`}
          />
        </div>
        <div className={`${style.hero__content} flex flex-col items-center gap-5 px-6`}>
          <h2 className={style.hero__contentTitle}>More than just shorter links</h2>
          <p className={style.hero__contentText}>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
          <Link 
            href={"/signIn"}
            className="linkButton px-11 py-4"
          >Get Started</Link>
        </div>
      </div>
    </main>
  );
}
