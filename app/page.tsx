import Image from 'next/image'
import css from "./home.module.scss"
export default function Home() {
  return (
    <main className={css.root}>
        <div className={css.rect1}>

          <div className={css.rect3}> 

          </div>

          <div className={css.rect2}>

            <div>
              <img src="/logo.png" alt="Logo" className={css.logo} />
            </div>

            <div className={css.textContainer}>
              <h1 className={css.name}>Dr. Ted</h1>

              <p className=" mr-16 text-lg text-justify leading-6 text-gray-300">
              Meet Dr. Ted, the epitome of an AI voice bot - always polite and incredibly helpful. 
              With his advanced conversational skills, Dr. Ted is here to assist and provide seamless interactions.
              </p>

              <button className={css.button} type="button">Ask me anything!</button>

              
                    
            </div>
          </div>
        </div>
    </main>
  )
}
