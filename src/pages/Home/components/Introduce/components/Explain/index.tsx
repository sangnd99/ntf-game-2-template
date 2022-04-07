import { useState } from "react";

import styles from "./Explain.module.scss";
import { FooterBackground } from "assets/images";

interface IExplainProps {}

const OFFSET = 60;

const Explain: React.FC<IExplainProps> = () => {
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);
  const calculateBottom = wrapperRef?.clientHeight! / 2 + OFFSET;
  const cssVariables = {
    "--section-background": `url(${FooterBackground})`,
    "--bottom": -calculateBottom + "px",
  } as React.CSSProperties;

  return (
    <div
      className={styles.wrapper}
      style={{ ...cssVariables }}
      data-ros="fade-up"
    >
      <div
        style={{ ...cssVariables }}
        className={styles.container}
        ref={setWrapperRef}
      >
        <div className={styles["left-section"]}>
          <p className={styles["left-section__title"]}>
            4 Gods represent 4 seasons
          </p>
          <p className={styles["left-section__desc"]}>
            Held competitions to choose from 12 beasts with intelligence,
            strength, strategy, flexibility and skills who represent 12 months
            of the year. Besides, there will be a God who organizes a kingship
            contest to help equalize and balance all species every 3 months.
          </p>
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["right-section__type"]}>SPRING</div>
          <div className={styles["right-section__type"]}>SUMMER</div>
          <div className={styles["right-section__type"]}>AUTUMN</div>
          <div className={styles["right-section__type"]}>WINTER</div>
        </div>
      </div>
    </div>
  );
};

export default Explain;
