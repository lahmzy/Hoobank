import React from 'react'
import {card} from "../assets";
import styles,{layout} from '../style';
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="hidden sm:block" /> in a few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris torrto.Aliquet uiltries ac,ametau
      </p>
      <Button style="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="" 
        className='w-[100%] h-[100%]'
      />
    </div>
  </section>
);


export default CardDeal


