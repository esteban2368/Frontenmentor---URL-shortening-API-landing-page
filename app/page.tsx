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
          <h2 className="title">More than just shorter links</h2>
          <p className={style.hero__contentText}>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
          <Link 
            href={"/signIn"}
            className="linkButton px-11 py-4"
          >Get Started</Link>
        </div>
      </div>
      <div className="text-center my-24 px-6">
        <h3 className="title title--size2 mb-6">Advanced Statistics</h3>
        <p className="text-base leading-7">Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
      </div>
      <div className={style.cards}>
        <div className={`${style.card} px-8 pb-10`}>
          <div className={`${style.card__wrapIcon} p-6 mb-6`}>
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
        <div className={`${style.card} px-8 pb-10`}>
          <div className={`${style.card__wrapIcon} p-6 mb-6`}>
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
        <div className={`${style.card} px-8 pb-10`}>
          <div className={`${style.card__wrapIcon} p-6 mb-6`}>
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
      <div className={style.banner}>
        <div className={style.banner__bg}>
          <Image
            alt="bg boost mobile"
            src="./images/bg-boost-mobile.svg"
            fill
            className="object-cover"
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
