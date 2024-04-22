import Image from "next/image";
import Link from "next/link";
import style from "./HomePage.module.css"
export default function Home() {
  return (
    <main className={style.container}>
      <div className={`${style.hero} sm:ml-auto py-14`}>
        <div className={style.hero__image}>
          <Image
            alt="Ilustration person are working"
            src="./images/illustration-working.svg"
            fill
            className={`${style.hero__imageIMG} ml-6`}
          />
        </div>
        <div className={`${style.hero__content} flex flex-col items-center sm:items-start sm:justify-center gap-5 px-6 sm:px-0`}>
          <h2 className="title title--size1">More than just shorter links</h2>
          <p className={style.hero__contentText}>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
          <Link 
            href={"/signIn"}
            className="linkButton px-11 py-4"
          >Get Started</Link>
        </div>
      </div>
      <section className={`${style.wrapContent} sm:py-24`}>
        <div className="text-center pb-16 sm:pb-24 px-6 sm:px-0">
          <h3 className="title title--size2 mb-6">Advanced Statistics</h3>
          <p className="text-base sm:text-lg leading-7">Track how your links are performing across the web with <br/> our 
    advanced statistics dashboard.</p>
        </div>
        <div className={`${style.cards} container p-6 sm:p-0`}>
          <div className={`${style.card} text-center sm:text-left px-8 pb-10`}>
            <div className={`${style.card__wrapIcon} p-6 mb-6 sm:mb-7`}>
              <Image
                alt="icon Brand Recognition"
                width={40}
                height={40}
                src="./images/icon-brand-recognition.svg"
              />
            </div>
            <div className={`title title--size3 mb-4`}>Brand Recognition</div>
            <p className={style.card__text}>Boost your brand recognition with each click. Generic links don’t 
    mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className={`${style.card} text-center sm:text-left px-8 pb-10 sm:mt-[45px]`}>
            <div className={`${style.card__wrapIcon} p-6 mb-6 sm:mb-7`}>
              <Image
                alt="icon Brand Recognition"
                width={40}
                height={40}
                src="./images/icon-detailed-records.svg"
              />
            </div>
            <div className={`title title--size3 mb-4`}>Detailed Records</div>
            <p className={style.card__text}>Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions.</p>
          </div>
          <div className={`${style.card} text-center sm:text-left px-8 pb-10 sm:mt-[90px]`}>
            <div className={`${style.card__wrapIcon} p-6 mb-6 sm:mb-7`}>
              <Image
                alt="icon Brand Recognition"
                width={40}
                height={40}
                src="./images/icon-fully-customizable.svg"
              />
            </div>
            <div className={`title title--size3 mb-4`}>Fully Customizable</div>
            <p className={style.card__text}>Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement.</p>
          </div>
        </div>
      </section>
      <div className={style.banner}>
        <div className={style.banner__bg}>
          <Image
            alt="bg boost mobile"
            src="./images/bg-boost-mobile.svg"
            fill
            className="sm:hidden object-cover"
          />
          <Image
            alt="bg boost desktop"
            src="./images/bg-boost-desktop.svg"
            fill
            className="hidden sm:block object-cover object-center"
          />
        </div>
        <div className={style.banner__title}>Boost your links today</div>
        <Link 
            href={"/signIn"}
            className="linkButton px-11 py-4"
          >Get Started
        </Link>
        
      </div>
    </main>
  );
}
