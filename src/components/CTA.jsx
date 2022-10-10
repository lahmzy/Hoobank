import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-20px box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Lets try our Service now!</h2>
      <p className={`${styles.paragraph} max-w-[470] mt-5`}>
        Everything you need to accept card payment and grow your business
        anywhere on the planet
      </p>
    </div>
    <div className={`mt-10 sm:mt-0 ${styles.flexCenter} sm:ml-0`}>
      <Button />
    </div>
  </section>
);

export default CTA;
