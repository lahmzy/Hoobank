import React from 'react'
import {feedback} from  "../constants"
import styles from "../style";
import Feedback from "./Feedback"

const Testimonial = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* todo gradient */}
      <div className='absolute h-[60%] w-[60%] -right-[50%] blue__gradient'/>
      <div className='flex justify-between flex-col items-center md:flex-row relative z-[1] sm:mb-16 mb-6'>
        <h1 className={styles.heading2}>What people are <br className='hidden sm:hidden'/>saying About us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={` text-left max-w-[450px] ${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere on the planet</p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center feedback-container w-full relative z-[1]'>
        {feedback.map( card => (
          <Feedback key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )


export default Testimonial
